# shell

##  批量重命名

- *.js => *.ts

```shell
rename 's/\.js$/\.ts/' *.js
rename .js .ts  *.js
```

- 删除后缀

```shell
rename 's/\.js$//' *.js
```

- mv命令只能对单个文件重命名，这是mv命令和rename命令的在重命名方面的根本区别
- rename命令是带3个参数而不是很多人认为的2个参数：`rename [from] [to] [selector]`

```shell
for file in `ls`
do
  newfile =`echo $file | sed 's/^./q/'`
  mv -f $file $newfile
done

```
