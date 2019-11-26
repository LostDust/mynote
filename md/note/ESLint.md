# Lint

## ESLint

### 安装

- `npm i eslint`
- `npx eslint --init`
- `npx eslint <file>|<path>`

### 配置字段

- env：指定脚本的运行环境，每种环境都有以组特定的预定义全局变量
- globals：脚本在执行期间访问的额外全局变量
- rules：启用的规则及其错误的级别（error > warn > off）
- parserOptions：设置解析器选项
- extends：

### 注意

- 支持 ES6 语法不代表支持新的 ES6 全局变量或类型
- 支持 JSX 语法与支持 React 不同，建议使用 eslint-plugin-react 插件，此插件包含 Create React App 使用的 ESLint 配置。.eslintrc："extends": ["plugin: react-app/recommended"]

### babel-eslint

- babel-eslint 可以对所有有效的 babel 代码进行 lint 处理。
- 如果你使用 eslint 本身不支持的特性，可以使用 babel-eslint。否则可以使用默认解析器而不需要使用 babel-eslint。
- yarn add D babel-eslint
- .eslintrc.json："parser": "babel-eslint"

```js
{
    test: /\.(js|vue)$/,
    loader: 'eslint-loader',
    enforce: 'pre',
    include: [resolve('src'), resolve('test')],
    options: {
      formatter: require('eslint-friendly-formatter')
    }
  },
  {
    test: /\.ts$/,
    exclude: /node_modules/,
    loader: 'tslint-loader',
    enforce: 'pre' // 优先处理
  },
```

- **tslint**、**tslint-loader**：为 _.ts_、_.tsx_ 文件约束代码格式（作用等同于 eslint）
- **tslint-config-standard**：tslint 配置 standard 风格的约束

## Prettier

- 配置覆盖，为特定的文件或目录指定配置
  `overrides: { files: string | string [], options: {} }`
