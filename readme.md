# Write JSX Tags Anywhere

## Install

```js
npm install react-jsx-anywhere
```

## JSX Tags

### Coffeescript

```coffee
@element = jsx("""<Component str="string" num={100} obj={{a:1, b:2}}/>""")

// @element = (React.createElement(Component, {str: "string", num: 123, obj: {a:1, b:2}}))
```

### Typescript

```typescript
///<reference path="node_modules/react-jsx-anywhere/jsx.d.ts"/>

var element:React.ReactElement = jsx(`<Component str="string" num={100} obj={{a:1, b:2}}/>`)

// var element:React.ReactElement = (React.createElement(Component, {str: "string", num: 123, obj: {a:1, b:2}}))
```

_IntelliJ IDE Typescript template string support is version 14.1 and higher_

### Javascript (ECMAScript6)

```javascript
var element = jsx(`<Component str="string" num={100} obj={{a:1, b:2}}/>`)

// var element = (React.createElement(Component, {str: "string", num: 123, obj: {a:1, b:2}}))
```


## Build

### Gulp.js

#### [Coffeescript](samples/gulp-coffeescript/gulpfile.js)

```coffee
'use strict'

var path = require('path')
var gulp = require('gulp')
var coffeescript = require('gulp-coffee')
var jsx = require('react-jsx-anywhere/gulp')

gulp.task('build', function () {
  return gulp.src('src/script.coffee')
    .pipe(jsx())
    .pipe(coffeescript())
    .pipe(gulp.dest('dist/'))
})
```

#### [Typescript](samples/gulp-typescript/gulpfile.js)

```typescript
'use strict'

var gulp = require('gulp')
var typescript = require('gulp-typescript')
var jsx = require('react-jsx-anywhere/gulp')

gulp.task('build', function () {
  return gulp.src('src/script.ts')
    .pipe(jsx())
    .pipe(typescript({
      target: 'ES5',
      module: 'commonjs',
      declarationFiles: true,
      noExternalResolve: false
    }))
    .pipe(gulp.dest('dist/'))
})
```

#### [ECMAScript6](samples/gulp-es6/gulpfile.js)

```javascript
'use strict'

var gulp = require('gulp')
var babel = require('gulp-babel')
var jsx = require('react-jsx-anywhere/gulp')

gulp.task('build', function () {
  return gulp.src('src/script.js')
    .pipe(jsx())
    .pipe(babel())
    .pipe(gulp.dest('dist/'))
})
```


### Webpack

#### [Coffeescript](samples/webpack-coffeescript/webpack.config.js)

```js
'use strict'

module.exports = {
  entry: 'src/script.coffee',
  output: {
    path: 'dist',
    filename: 'script.js'
  },
  resolve: {
    root: __dirname,
    extensions: ['', '.js', '.coffee']
  },
  module: {
    loaders: [
      {test: /\.coffee$/, loaders: ['coffee-loader', 'react-jsx-anywhere/webpack']}
    ]
  }
}
```

#### [ECMAScript6](samples/webpack-es6/webpack.config.js)

```js
'use strict'

module.exports = {
  entry: 'src/script.js',
  output: {
    path: 'dist',
    filename: 'script.js'
  },
  resolve: {
    root: __dirname,
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {test: /\.js$/, loaders: ['babel-loader', 'react-jsx-anywhere/webpack']}
    ]
  }
}
```

#### [Typescript](samples/webpack-typescript/webpack.config.js)

```js
'use strict'

module.exports = {
  entry: 'src/script.ts',
  output: {
    path: 'dist',
    filename: 'script.js'
  },
  resolve: {
    root: __dirname,
    extensions: ['', '.js', '.ts']
  },
  module: {
    loaders: [
      {test: /\.ts$/, loaders: ['ts-loader', 'react-jsx-anywhere/webpack']}
    ]
  }
}
```


### Browserify

```sh
browserify -t react-jsx-anywhere/browserify src/script.coffee -o dist/script.js
```


### Jsx Parser Function

```js
var fs = require('fs')
var jsxParser = require('react-jsx-anywhere')

var origin = fs.readFileSync('src/script.ts', {encode:'utf8'}) // 'var element:React.ReactElement = jsx(`<Component str="string" num={100} obj={{a:1, b:2}}/>`)'
var parsed = jsxParser(origin)

fs.writeFileSync('dist/script.js', parsed)
```








