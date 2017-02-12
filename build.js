const fs = require('fs')

const rollup = require('rollup').rollup
const buble = require('rollup-plugin-buble')
const json = require('rollup-plugin-json')
const commonjs = require('rollup-plugin-commonjs')
const replace = require('rollup-plugin-replace')
const uglify = require('rollup-plugin-uglify')
const nodeResolve = require('rollup-plugin-node-resolve')
const url = require('rollup-plugin-url')

const _exec = require('child_process').exec
const { name, version, dependencies } = require('./package')
const external = Object.keys(dependencies).concat(['fs', 'path'])
const promisify = (ctx, func = ctx) => (...args) => {
  return new Promise((resolve, reject) => {
    func.apply(ctx, [...args, (err, result) => err ? reject(err) : resolve(result)])
  })
}
const writeFile = promisify(fs.writeFile)
const exec = promisify(_exec)
let clientCache, serverCache

const server = () => rollup({
  entry: 'src/server/server.js',
  external,
  plugins: [
    replace({'__CLIENT__': false}),
    json(),
    commonjs({ extensions: [ '.js', '.json' ] }),
    buble({ jsx: 'h' })
  ]
}).then((bundle) => {
  return bundle.write({ sourceMap: true, format: 'cjs', dest: `build/server/server.js` })
})

const clean = () => exec('rm -rf ./build && mkdirp ./build/public')
const copy = () => exec('cp -R ./src/app/* ./build/public/')

const tasks = new Map()
const run = (task) => {
  const start = new Date()
  return Promise.all([].concat(tasks.get(task)())).then(() => {
    console.log(`[build] '${task}' done in ${new Date().getTime() - start.getTime()}ms`)
  }, (err) => console.error(err.stack))
}

tasks.set('clean', clean)
tasks.set('copy', copy)
tasks.set('server', server)
tasks.set('build', () =>
  run('clean')
  .then(() => Promise.all([run('copy')]))
  .then(() => Promise.all([run('server')]))
)

run(/^\w/.test(process.argv[2] || '') ? process.argv[2] : 'build')