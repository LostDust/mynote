module.exports = {
  dest: "docs",
  title: "Lost",
  base: "/mynote/",
  description: "Just playing around",
  // theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "/logo.png",
    editLinks: false,
    nav: [
      { text: "note", link: "/note/" },
      { text: "blog", link: "/blog/" },
      { text: "resume", link: "/resume/" },
      {
        text: "Languages",
        ariaLabel: "Language Menu",
        items: [
          { text: "Chinese", link: "/language/chinese/" },
          { text: "Japanese", link: "/language/japanese/" }
        ]
      }
    ],
    sidebar: {
      "/note/": [
        "JavaScript",
        "ES6",
        "Node",
        "React",
        "Vue",
        "TypeScript",
        "Babel",
        "CSS",
        "HTML5",
        "Webpack",
        "Git&GitHub",
        "npm&yarn",
        "Electron",
        "ESLint",
        "MongoDB",
        "pm2",
        "Dart",
        "Flutter",
        "Linux",
        "shell",
        "Python",
        "RegExp",
        "Angular"
      ],
      "/blog/": [
        "APP",
        "Array 高阶函数",
        "React 要点",
        "鉴权",
        "JavaScript_实现面向对象",
        "JavaScript_闭包与 WeakMap 对象实现对象的私有属性",
        "myQuery"
      ],
      "/resume/": ["简历"],
      "/": ["/note/", "/blog/", "/resume/"]
    }
  }
};
