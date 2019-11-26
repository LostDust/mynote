# pm2

[TOC]

## 常用命令

- `pm2 start <app> --name --watch`
- `pm2 stop <appName>`
- `pm2 delete [<appName>/all]` 删除列表中的应用
- `pm2 reload <appName>`
- `pm2 restart <appName>`
- `pm2 list` 显示所有应用信息
- `pm2 show <appName>`
- `pm2 monit` 查看应用程序的 CPU 和内存占用情况
- `pm2 logs [<appName>]`
- `pm2 update` 将当前运行的任务迁移到新版的 pm2 上
