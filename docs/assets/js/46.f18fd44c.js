(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{246:function(a,e,t){"use strict";t.r(e);var v=t(0),_=Object(v.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"regexp（javascript-对象）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#regexp（javascript-对象）"}},[a._v("#")]),a._v(" RegExp（JavaScript 对象）")]),a._v(" "),t("p",[a._v("[TOC]")]),a._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),t("p",[a._v("正则表达式是描述字符模式的对象，用于对字符串模式匹配及检索替换，是对字符串执行模式匹配的强大工具")]),a._v(" "),t("h2",{attrs:{id:"声明语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#声明语法"}},[a._v("#")]),a._v(" 声明语法")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("使用构造函数声明正则对象：\nconst patt = new RegExp(pattern, modifiers);")])]),a._v(" "),t("li",[t("p",[a._v("或者使用简便方式声明：\nconst patt = /pattern/modifiers;")])]),a._v(" "),t("li",[t("p",[a._v("pattern(模式) 描述了表达式的模式")])]),a._v(" "),t("li",[t("p",[a._v("modifiers(修饰符) 用于指定全局匹配、区分大小写的匹配和多行匹配")])])]),a._v(" "),t("blockquote",[t("p",[a._v("当使用构造函数创造正则对象时，需要常规的字符转义规则（在前面加反斜杠 \\）")])]),a._v(" "),t("h2",{attrs:{id:"修饰符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修饰符"}},[a._v("#")]),a._v(" 修饰符")]),a._v(" "),t("ul",[t("li",[a._v("执行对大小写不敏感的匹配："),t("code",[a._v("/data/i")])]),a._v(" "),t("li",[a._v("执行复数匹配："),t("code",[a._v("/data/g")])]),a._v(" "),t("li",[a._v("执行多行匹配："),t("code",[a._v("/data/m")])])]),a._v(" "),t("h2",{attrs:{id:"集合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集合"}},[a._v("#")]),a._v(" 集合")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("使用方括号，用于规定所检索字符的范围")]),a._v(" "),t("p",[a._v("/./ 查找所有字符\n/[abc]/ 查找 abc 中的任意字符\n"),t("code",[a._v("/[^abc]/")]),a._v(' 查找非 abc 中的任意字符\n/[0-9]/ 查找任何从 0 至 9 的数字\n/[a-z]/ 查找任何从小写 a 到小写 z 的字符\n/[A-z]/ 查找任何从大写 A 到小写 z 的字符，包括 "_"\n/[A-Z]/ 查找任何从大写 A 到大写 Z 的字符\n/[a-ce-g]/')]),a._v(" "),t("p",[a._v("/[adgk]/ 查找给定集合内的任何字符\n/[^adgk]/ 查找给定集合外的任何字符（非）\n(red|blue|green) 查找任何指定的选项")]),a._v(" "),t("p",[a._v("/([][]){}/ 大集合")])])]),a._v(" "),t("h2",{attrs:{id:"量词"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#量词"}},[a._v("#")]),a._v(" 量词")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("用于规定所检索字符的长度")]),a._v(" "),t("blockquote",[t("p",[a._v("贪婪法则：正则会优先匹配多个")])]),a._v(" "),t("p",[a._v('/n+/ 匹配任何包含至少一个 n 的字符串\n例如：/a+/ 匹配到 "candy" 中的 "a"，"caaandy" 中的 "aaa"\n/n?/ 匹配任何包含零个或一个 n 的字符串\n例如：/e?le?/ 匹配 "angel" 中的 "el"，"angle" 中的 "le"，"angl" 中的 "l"\n/n*/ 匹配任何包含零个或多个 n 的字符串\n例如：/bo*/ 匹配到 "booed" 中的 "boo"，"bird" 中的 "b"，但是不匹配 "goat"')]),a._v(" "),t("p",[a._v('/n{X}/ 匹配包含 X 个 n 的序列的字符串\n例如：/a{2}/ 不匹配 "candy"，但是匹配 "caaandy," 中的 "aa"\n/n{X,}/ X 是一个正整数；前面的模式 n 连续出现至少 X 次时匹配\n例如：/a{2,}/ 不匹配 "candy"，但是匹配 "caaandy" 中的 "aaa"\n/n{X,Y}/ X 和 Y 为正整数；前面的模式 n 连续出现至少 X 次，至多 Y 次时匹配\n例如：/a{2,3}/ 不匹配 "candy"，匹配 "caandy," 中的 "aa"，"caaaaandy" 中的 "aaa"')])])]),a._v(" "),t("h2",{attrs:{id:"始末标记"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#始末标记"}},[a._v("#")]),a._v(" 始末标记")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("/^n/")]),a._v(" 匹配任何开头为 n 的字符串")]),a._v(" "),t("li",[t("code",[a._v("/n$/")]),a._v(" 匹配任何结尾为 n 的字符串")]),a._v(" "),t("li",[t("code",[a._v("/?=n/")]),a._v(" 匹配任何其后紧接指定字符串 n 的字符串")]),a._v(" "),t("li",[t("code",[a._v("/?!n/")]),a._v(" 匹配任何其后没有紧接指定字符串 n 的字符串")])]),a._v(" "),t("h2",{attrs:{id:"元字符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#元字符"}},[a._v("#")]),a._v(" 元字符")]),a._v(" "),t("ul",[t("li",[t("p",[a._v('元字符（Metacharacter）是拥有特殊含义的字符\n"" 转义字符')]),a._v(" "),t("p",[a._v("/./ 查找单个字符，除了换行和行结束符\n/\\w/ 查找单词字符\n/\\W/ 查找非单词字符\n/\\d/ 查找数字\n/\\D/ 查找非数字字符\n/\\s/ 查找空白字符\n/\\S/ 查找非空白字符\n/\\b/ 匹配单词边界\n/\\B/ 匹配非单词边界\n/\\0/ 查找 NULL 字符\n/\\n/ 查找换行符\n/\\f/ 查找换页符\n/\\r/ 查找回车符\n/\\t/ 查找制表符\n/\\v/ 查找垂直制表符\n/\\xxx/ 查找以八进制数 xxx 规定的字符\n/\\xdd/ 查找以十六进制数 dd 规定的字符\n/\\uxxxx/ 查找以十六进制数 xxxx 规定的 Unicode 字符\n/\\u4e00-\\u9fa5/ 查找中文字符")])])]),a._v(" "),t("h2",{attrs:{id:"regexp-对象方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#regexp-对象方法"}},[a._v("#")]),a._v(" RegExp 对象方法")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("RegExp.test()")]),a._v(" 检索字符串中指定的值，返回布尔值")]),a._v(" "),t("li",[t("code",[a._v("RegExp.exec()")]),a._v(" 检索字符串中指定的值。返回找到的值，并确定其位置")]),a._v(" "),t("li",[t("code",[a._v("RegExp.toString()")]),a._v(" 返回正则表达式的字符串")])]),a._v(" "),t("h2",{attrs:{id:"regexp-对象属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#regexp-对象属性"}},[a._v("#")]),a._v(" RegExp 对象属性")]),a._v(" "),t("ul",[t("li",[a._v("constructor 返回一个函数，该函数是一个创建 RegExp 对象的原型。")]),a._v(" "),t("li",[a._v('global 判断是否设置了 "g" 修饰符')]),a._v(" "),t("li",[a._v('ignoreCase 判断是否设置了 "i" 修饰符')]),a._v(" "),t("li",[a._v("lastIndex 用于规定下次匹配的起始位置")]),a._v(" "),t("li",[a._v('multiline 判断是否设置了 "m" 修饰符')]),a._v(" "),t("li",[a._v("source 返回正则表达式的匹配模式")])]),a._v(" "),t("h2",{attrs:{id:"支持正则表达式的-string-对象方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#支持正则表达式的-string-对象方法"}},[a._v("#")]),a._v(" 支持正则表达式的 String 对象方法")]),a._v(" "),t("ul",[t("li",[a._v("search() // 检索字符串中与正则表达式相匹配的值的下标")]),a._v(" "),t("li",[a._v("match() // 以数组的形式返回匹配到的值")]),a._v(" "),t("li",[a._v("replace(RegExp, replace) // 替换与 RegExp 匹配的子串，返回替换后的字符串（不改变原数组）")])]),a._v(" "),t("blockquote",[t("p",[a._v("replace()的第二个参数也可以是函数，其传入参数为检索到的字符串，返回 replace")])])])}),[],!1,null,null,null);e.default=_.exports}}]);