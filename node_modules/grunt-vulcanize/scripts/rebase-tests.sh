#!/bin/bash -e
grunt clean mkdir

build() {
  ../../node_modules/.bin/vulcanize ../../test/fixtures/index.html -o ./vulcanized.html $@
}

pushd tmp/default
build -o ./vulcanized.html
cp ./* ../../test/expected/default/
popd

pushd tmp/abspath
build --abspath ../../test/fixtures
cp ./* ../../test/expected/abspath/
popd

pushd tmp/csp
build --csp
cp ./* ../../test/expected/csp/
popd

pushd tmp/inline
build --inline
cp ./* ../../test/expected/inline/
popd

pushd tmp/excludes
echo '{"excludes": {"imports": ["polymer.html"]}}' > config
build --config config
rm config
cp ./* ../../test/expected/excludes/
popd

pushd tmp/strip
build --strip
cp ./* ../../test/expected/strip/
popd

pushd tmp/multiple
build -o ./one.html
build -o ./two.html
cp ./* ../../test/expected/multiple/
popd

pushd tmp/no-strip-excludes
echo '{"excludes": {"imports": ["polymer.html"]}}' > config
build --no-strip-excludes --config config
rm config
cp ./* ../../test/expected/no-strip-excludes/
popd
