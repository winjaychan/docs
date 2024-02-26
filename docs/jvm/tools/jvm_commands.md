# JVM命令

本文介绍常的JDK/JRE内置jvm相关命令。

## jmap

### -histo

此命令可以用来查看内存信息，实例个数以及占用内存大小。

```shell
# 查看历史生成的实例
jmap -histo <pid>
# 查看当前存活的实例，执行过程中可能会触发一次full gc
jmap -histo:live <pid>
```

- num：序号

- instances：实例数量

- bytes：占用空间大小，单位为字节

- class name：类名称

  [C表示char[]

  [S表示short[]

  [I表示int[]

  [B表示byte[]

  [[I表示int\[][]

### -heap

```shell
jmap -heap <pid>
```

### -dump

```shell
jmap -dump:format=b,file=dump.hprof <pid>
```

> 可设置内存溢出自动导出dump文件
>
> ```shell
> java -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/data/dump.hprof -jar app.jar
> ```
>
> > [!WARNING] 
> 内存很大的时候，可能会导不出来
>

## jstack

jstack主要用来查看某个java进程内的线程栈信息。语法格式如下：

```shell
jstack [option] pid
jstack [option] executablecore
jstack [option] [server-id@]remote-hostname-or-ip
```

