(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{238:function(v,e,_){"use strict";_.r(e);var o=_(0),t=Object(o.a)({},(function(){var v=this,e=v.$createElement,_=v._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"mongodb"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mongodb"}},[v._v("#")]),v._v(" MongoDB")]),v._v(" "),_("p",[v._v("[TOC]")]),v._v(" "),_("h2",{attrs:{id:"安装配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安装配置"}},[v._v("#")]),v._v(" 安装配置")]),v._v(" "),_("ul",[_("li",[v._v("安装完成后将其添加到环境变量 "),_("em",[v._v("Path")]),v._v(" 中")]),v._v(" "),_("li",[v._v("启动数据库时需要指定数据库路径和日志路径："),_("code",[v._v("mongod --dbpath D:\\MongoDB\\data\\db --logpath D:\\MongoDB\\log\\mongodb.log")])]),v._v(" "),_("li",[v._v("或者指定配置文件"),_("code",[v._v("mongod --config D:\\MongoDB\\bin\\mongod.cfg")])]),v._v(" "),_("li",[_("code",[v._v('mongod --serviceName "MongoDB" --serviceDisplayName "MongoDB" --config "D:\\MongoDB\\bin\\mongod.cfg" --install')]),v._v(" 命令安装到本地服务")]),v._v(" "),_("li",[_("code",[v._v("net start MongoDB")]),v._v(" 命令启动数据库服务")])]),v._v(" "),_("h2",{attrs:{id:"常用指令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用指令"}},[v._v("#")]),v._v(" 常用指令")]),v._v(" "),_("h2",{attrs:{id:"连接数据库"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#连接数据库"}},[v._v("#")]),v._v(" 连接数据库")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("mongo")]),v._v(" 命令在控制台连接数据库，"),_("code",[v._v("show dbs")]),v._v(" 命令展示数据库")]),v._v(" "),_("li",[_("code",[v._v("use <dataBaseName>")]),v._v(" 命令进入数据库或进入想要创建的数据库，"),_("code",[v._v("show collections")]),v._v(" 展示数据表")])]),v._v(" "),_("h3",{attrs:{id:"添加"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#添加"}},[v._v("#")]),v._v(" 添加")]),v._v(" "),_("ul",[_("li",[v._v("控制台："),_("code",[v._v("db.<collectionNmae>.insert(<dataJson>)")])]),v._v(" "),_("li",[v._v("添加多条："),_("code",[v._v("db.<collectionNmae>.insert([<dataJson>, <dataJson>])")])])]),v._v(" "),_("h3",{attrs:{id:"查询"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#查询"}},[v._v("#")]),v._v(" 查询")]),v._v(" "),_("ul",[_("li",[v._v("控制台："),_("code",[v._v("db.<collectionNmae>.find()")])]),v._v(" "),_("li",[v._v("JavaScripn："),_("code",[v._v("Module.find()")])]),v._v(" "),_("li",[_("code",[v._v("*find().pretty()")]),v._v(" 格式化查询结果（控制台）")]),v._v(" "),_("li",[_("code",[v._v("*.find({ <key>: <select> })")]),v._v(" 限制查询条件；"),_("code",[v._v("*.find({ $or:[{}, {}] })")])]),v._v(" "),_("li",[_("code",[v._v("*.find({}, { <key>: 1 })")]),v._v(" 指定查询字段")]),v._v(" "),_("li",[_("code",[v._v("*.findById()")]),v._v(" 依据 id 查询")]),v._v(" "),_("li",[v._v("value 筛选："),_("code",[v._v("{ $gt:* }")]),v._v(" 大于；"),_("code",[v._v("{ $gte:* }")]),v._v(" 大于；"),_("code",[v._v("{ $li:* }")]),v._v(" 小于等于；"),_("code",[v._v("{ $lie:* }")]),v._v(" 小于等于；"),_("code",[v._v("/*/")]),v._v(" 模糊查询（正则）")]),v._v(" "),_("li",[_("code",[v._v("*.find().limit(mun)")]),v._v(" 限制查询条数；"),_("code",[v._v("*.findOne()")])]),v._v(" "),_("li",[_("code",[v._v("*.find().skip(mun)")]),v._v(" 跳过条数，与 limit 配合用于分页")]),v._v(" "),_("li",[_("code",[v._v("*.find().sort({ <key>: -1 })")]),v._v(" 结果排序")]),v._v(" "),_("li",[_("code",[v._v("*.find().count()")]),v._v(" 统计数量，方法会返回一个数字")])]),v._v(" "),_("h3",{attrs:{id:"更新"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#更新"}},[v._v("#")]),v._v(" 更新")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("db.<collectionNmae>.update({ <select> }, { <target> })")]),v._v(" 替换数据条目")]),v._v(" "),_("li",[_("code",[v._v("db.<collectionNmae>.update({ <select> }, { $set: { <target> }})")]),v._v(" 只替换目标字段")])]),v._v(" "),_("h3",{attrs:{id:"删除"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#删除"}},[v._v("#")]),v._v(" 删除")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("db.dropDatabase()")]),v._v(" 移除当前数据库")]),v._v(" "),_("li",[_("code",[v._v("db.<collectionNmae>.drop()")]),v._v(" 不仅删除集合的文档，也会删除集合本身，同时也会删除集合上创建的索引")]),v._v(" "),_("li",[_("code",[v._v("db.<collectionNmae>.remove()")]),v._v(" 将集合中的文档删除，但不删除集合本身，也不删除集合的索引")]),v._v(" "),_("li",[_("code",[v._v("*.drop()")]),v._v("；"),_("code",[v._v("*.remove()")])])]),v._v(" "),_("h2",{attrs:{id:"索引"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#索引"}},[v._v("#")]),v._v(" 索引")])])}),[],!1,null,null,null);e.default=t.exports}}]);