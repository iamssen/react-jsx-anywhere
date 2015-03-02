# Write JSX Tags Anywhere

## Install

```js
npm install react-jsx-anywhere
```


## JSX Tags

in coffee-script

```coffee
@element = jsx("""<Component str="string" num={100} obj={{a:1, b:2}}/>""")

// @element = (React.createElement(Component, {str: "string", num: 123, obj: {a:1, b:2}}))
```

in typescript (intellij ide typescript template string support is version 14.1 and higher)

```typescript
var element:React.ReactElement = jsx(`<Component str="string" num={100} obj={{a:1, b:2}}/>`)

// var element:React.ReactElement = (React.createElement(Component, {str: "string", num: 123, obj: {a:1, b:2}}))
```

in javascript (not jsx)

```javascript
var element = jsx(`<Component str="string" num={100} obj={{a:1, b:2}}/>`)

// var element = (React.createElement(Component, {str: "string", num: 123, obj: {a:1, b:2}}))
```


## Build

using gulp.js (`react-jsx-anywhere/gulp`)

```js
var jsx = require('react-jsx-anywhere/gulp')

var ts = require('gulp-typescript')
var merge = require('merge2')
gulp.task('scripts', function() {
  var tsResult = gulp.src('lib/*.ts')
                     .pipe(jsx())
                     .pipe(ts({
                       declarationFiles: true,
                       noExternalResolve: true
                     }))

  return merge([
    tsResult.dts.pipe(gulp.dest('release/definitions')),
    tsResult.js.pipe(gulp.dest('release/js')])
  )
})
```

using webpack (`react-jsx-anywhere/webpack`)

```js
module.exports = {
  entry: 'src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index.js'
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader?sourceMap!react-jsx-anywhere/webpack'
      }
    ]
  }
}
```

using browserify (`react-jsx-anywhere/browserify`)

```sh
browserify -t react-jsx-anywhere/browserify src/index.coffee -o dist/index.js
```

other...

```js
var fs = require('fs')
var jsx = require('react-jsx-anywhere')

var origin = 'var element = jsx(`<Component str="string" num={100} obj={{a:1, b:2}}/>`)'
var parsed = jsx(origin)

fs.writeFileSync('source.js', parsed)
```


## Support Definition File For Typescript

```typescript
///<reference path="node_modules/react-jsx-anywhere/jsx.d.ts"/>
```









