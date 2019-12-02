# NodeAPI

[TOC]

## fs

## URL

`req.params` 获取动态路由

`req.query` 获取 get 数据

## Server

### express

- *contentType: www-form-urlencoded*: `express.urlencoded({ extended: true })`;
- *contentType: application/json*: `express.json()`;

## cookie

- 字段

  - name：对应 Cookie 的 key 值
  - value：对应 Cookie 的 Value 值
  - maxAge：对应 Cookie 的有效期
  - secure：是否只对 HTTPS 有效，如果设置成了 yes，这个只会在 HTTPS 的请求中有效，在 HTTP 的请求中，不会给你自动带到下一次的请求中。
  - Expires：过期时间的设置
  - path->当前 Cookie 的影响的路径常见的如:/，如果路径不匹配，则不会发送 Cookie。
  - domain：可以访问此 cookie 的页面路径
  - http：cookie 的 httponly 属性。若此属性为 true，则只有在 http 请求头中会带有此 cookie 的信息，而不能通过 document.cookie 来访问此 cookie

- 发送：`res.cookie("key", "value", { maxAge:1000 * *7, secure: false, path: "/" });`
