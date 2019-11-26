# MongoDB

[TOC]

## 安装配置

- 安装完成后将其添加到环境变量 _Path_ 中
- 启动数据库时需要指定数据库路径和日志路径：`mongod --dbpath D:\MongoDB\data\db --logpath D:\MongoDB\log\mongodb.log`
- 或者指定配置文件`mongod --config D:\MongoDB\bin\mongod.cfg`
- `mongod --serviceName "MongoDB" --serviceDisplayName "MongoDB" --config "D:\MongoDB\bin\mongod.cfg" --install` 命令安装到本地服务
- `net start MongoDB` 命令启动数据库服务

## 常用指令

## 连接数据库

- `mongo` 命令在控制台连接数据库，`show dbs` 命令展示数据库
- `use <dataBaseName>` 命令进入数据库或进入想要创建的数据库，`show collections` 展示数据表

### 添加

- 控制台：`db.<collectionNmae>.insert(<dataJson>)`
- 添加多条：`db.<collectionNmae>.insert([<dataJson>, <dataJson>])`

### 查询

- 控制台：`db.<collectionNmae>.find()`
- JavaScripn：`Module.find()`
- `*find().pretty()` 格式化查询结果（控制台）
- `*.find({ <key>: <select> })` 限制查询条件；`*.find({ $or:[{}, {}] })`
- `*.find({}, { <key>: 1 })` 指定查询字段
- `*.findById()` 依据 id 查询
- value 筛选：`{ $gt:* }` 大于；`{ $gte:* }` 大于；`{ $li:* }` 小于等于；`{ $lie:* }` 小于等于；`/*/` 模糊查询（正则）
- `*.find().limit(mun)` 限制查询条数；`*.findOne()`
- `*.find().skip(mun)` 跳过条数，与 limit 配合用于分页
- `*.find().sort({ <key>: -1 })` 结果排序
- `*.find().count()` 统计数量，方法会返回一个数字

### 更新

- `db.<collectionNmae>.update({ <select> }, { <target> })` 替换数据条目
- `db.<collectionNmae>.update({ <select> }, { $set: { <target> }})` 只替换目标字段

### 删除

- `db.dropDatabase()` 移除当前数据库
- `db.<collectionNmae>.drop()` 不仅删除集合的文档，也会删除集合本身，同时也会删除集合上创建的索引
- `db.<collectionNmae>.remove()` 将集合中的文档删除，但不删除集合本身，也不删除集合的索引
- `*.drop()`；`*.remove()`

## 索引
