# grunt-vulcanize

> Grunt task for Polymer's Vulcanize

## Getting Started

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-vulcanize --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-vulcanize');
```

## The "vulcanize" task

### Overview
In your project's Gruntfile, add a section named `vulcanize` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  vulcanize: {
    default: {
      options: {
        // Task-specific options go here.
      },
      files: {
        // Target-specific file lists and/or options go here.
      },
    },
  },
})
```

### Options

#### options.csp
Type: `Boolean`
Default value: `false`

Extract inline `<script>` blocks into a separate file. Maps directly to https://github.com/Polymer/vulcanize#content-security-policy

#### options.inline
Type: `Boolean`
Default value: `false`

The opposite of `csp` mode: inline all scripts and stylesheets.

#### options.strip
Type: `Boolean`
Default value: `false`

Strip comments and empty text nodes from output.

#### options.excludes.imports
Type: `Array[String]`
Default value: `[]`

An array of strings that will be used as `RegExp`s to filter matching imports from vulcanization.
This option should be used if multiple vulcanizations would share imports, as they could no longer be deduplicated in
their vulcanized forms.

#### options.excludes.scripts
Type: `Array[String]`
Default value: `[]`

An array of strings that will be used as `RegExp`s to filter matching scripts from vulcanization.
This option should be used if multiple vulcanizations would share scripts, as they could no longer be deduplicated in
their vulcanized forms.

#### options.excludes.styles
Type: `Array[String]`
Default value: `[]`

An array of strings that will be used as `RegExp`s to filter matching stylesheets from vulcanization.
This option should be used if multiple vulcanizations would share stylesheets, as they could no longer be deduplicated in their vulcanized forms.

#### options.abspath
Type: `String`
Default value: `''`

Specify a "site root". Resolve paths to absolute paths based on the site root.

#### options['strip-excludes']
Type: `Boolean`
Default value: `true`

By default, HTML Imports excluded from inlining are removed.
Set this flag to keep the excluded imports in the output file.

### Usage Examples

#### Default Options
In this example, the default options are used to vulcanize `index.html` into `build.html`.

Please see https://github.com/Polymer/vulcanize#example for more information.

```js
grunt.initConfig({
  vulcanize: {
    default: {
      options: {},
      files: {
        'build.html': 'index.html'
      },
    },
  },
})
```

#### Custom Options
In this example, custom options are used to apply [Content Security Policy](http://en.wikipedia.org/wiki/Content_Security_Policy) settings on the vulcanization of `index.html` into `build-csp.html`.

Please see https://github.com/Polymer/vulcanize#content-security-policy for more information

```js
grunt.initConfig({
  vulcanize: {
    default: {
      options: {
        csp: true,
        excludes: {
          imports: [
            "polymer.html"
          ]
        }
      },
      files: {
        'build-csp.html': 'index.html'
      },
    },
  },
})
```

## Contributing
Contributions to this project must follow the guidlines of the [Contributor License Agreement](https://github.com/Polymer/polymer/blob/master/CONTRIBUTING.md)

## Release History
_(Nothing yet)_
