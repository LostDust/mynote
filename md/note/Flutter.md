# Flutter

[TOC]

## 环境搭建

- 安装 Flutter SDK
- 安装 Android SDK
- VSCode 组件

## 命令

- 运行命令：`flutter run`
- 连接模拟器：`D:\Nox\bin>nox_adb.exe connect 127.0.0.1:62001`
- 热键：r - 热加载；p - 显示网格；o - 切换安卓和 ios；q - 退出调试预览模式

## 控件

- _MaterialApp_ 控件：作为 App 的顶层控件
  常用属性：home、title、color、theme、routers

- _Scaffold_ 控件：在 MaterialApp 控件的 home 属性下，用于实现基本布局结构
  常用属性：appBar、body、drawer

- _Text_ 控件，类似 \<p>。在 style 属性中设置其样式

- _Container_ 控件，类似 \<div>；在 decoration 属性中设置其样式
  常用属性：width、height、decoration、padding、margin

- _Image_ 控件，类似 \<img>；Image.network(src) / Image.asset(src)
  常用属性：alignment、fit；本地图片要在 _pubspec.yaml_ 文件中配置：
  `asset: - image/name - image/2.0x/name - image/3.0x/name`

- _Icon_ 图标控件

## 布局控件

- _padding_ 控件，常用属性：alignment、fit、EdgeInsets.fromLTRB()

- ListView 控件 \ ListTile 控件
  常用属性：leading、trailing、title、subtitle、scrollDirection

- _GridView_ 控件 - 网格布局 .count / .builder
  常用属性：(cross/main)AxisCount、(cross/main)AxisSpacing

- _Column_ 控件纵向布局，_Row_ 控件横向布局；且不会像 _ListView_ 控件一样撑满父控件
  常用属性：(main/cross)AxisAlignment: (Main/Cross)AxisAlignment.\*

- _Expanded_ 控件栅格布局，常用属性：flex、

  常用属性：flex、

- _Stack_ 控件堆叠（绝对）布局，常用属性：alignment

## 属性

- alignment：元素对齐

## 组件对象

```dart
// 无状态组件
class WidgetName extends StatelessWidget {
    @override
    Widget build(BuildContext content) {
        return MaterialApp();
    }
}
```

## 笔记

主流混合框架：Cordova、React Native、Flutter

widget 控件

---

事件、奇遇、灾难

狂暴：在当前回合中，每使用一张攻击卡，获得伤害加深\*1

戒律：攻击卡造成的伤害会转化为护甲
