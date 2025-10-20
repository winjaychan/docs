---
{
  "createTime": "2025-10-20 16:05",
  "articleLabels": ["Arthas", "OGNL", "云学习"],
  "articleType" : "原创"
}
---
# 线程操作
<ArticleInfo/>

## 根据线程名称查找线程

```java
ognl '@java.lang.Thread@getAllStackTraces().keySet().iterator.{? #this.name=="NioBlockingSelector.BlockPoller-1"}'
```



## 停止指定线程名称的线程

- 第一种方式

```java
ognl '@java.lang.Thread@getAllStackTraces().keySet().iterator.{? #this.name=="NioBlockingSelector.BlockPoller-1"}[0].stop()'
```

- 第二种方式

```java
ognl '@java.lang.Thread@getAllStackTraces().keySet().iterator.{? #this.name=="NioBlockingSelector.BlockPoller-1"}[0].run=false'
```

>  [!WARNING] 警告
>
> 执行上面的操作会提示以下信息。
>
> ```shell
> Error during processing the command: java.lang.IllegalAccessError, message:By default, strict mode is true, not allowed to set object properties. Want to set object properties, execute `options strict false`, please check $HOME/logs/arthas/arthas.log for more details.
> ```
>
> 如出现上述提示，执行以下命令即可。
>
> ```shell
> options strict false
> ```
>
> 
