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

jstack主要用来查看某个java进程内的线程栈信息。命令格式如下：

```shell
jstack [option] <pid>
jstack [option] executable core
jstack [option] [server-id@]remote-hostname-or-ip
```

## jinfo

查看正在运行的java应用程序的扩展参数

### -flags

查看jvm的参数

### -sysprops

查看java的系统参数

## jstat

jstat命令可以查看堆内存各部分的使用量，以有加载类的数量。命令格式如下：

```shell
jstat [option] <pid> [interval(ms)] [count]
```

>  [!IMPORTANT]
>
>  至少使用JDK8或以上

### -gc

垃圾回收统计，可以评估程序内存使用及GC压力整体情况

```shell
jstat -gc <pid>
```

- S0C：第一个幸存区的总空间大小，单位KB
- S1C：第二个幸存区的总空间大小，单位KB
- S0U：第一个幸存区的已使用空间大小，单位KB
- S1U：第二个幸存区的已使用空间大小，单位KB
- EC：Eden区的总空间大小，单位KB
- EU：Eden区的已使用空间大小，单位KB
- OC：老年代的总空间大小，单位KB
- OU：老年代的已使用空间大小，单位KB
- MC：方法区（元空间）的总空间大小，单位KB
- MU：方法区（元空间）的已使用空间大小，单位KB
- CCSC：压缩类空间的总空间大小，单位KB
- CCSU：压缩类空间的已使用空间大小，单位KB
- YGC：年轻代垃圾回收次数
- YGCT：年轻代垃圾回收消耗时间，单位：秒
- FGC：老年代垃圾回收次数
- FGCT：老年代垃圾回收消耗时间，单位：秒
- GCT：垃圾回收消耗总时间，单位：秒

