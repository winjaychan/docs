---
{
  "createTime": "2025-10-29 09:30",
  "articleLabels": ["Java工具", "Lombok", "云学习"],
  "articleType" : "原创"
}
---

# Lombok

<ArticleInfo/>

## SpringBoot集成Lombok

在pom.xml文件中引入以下依赖

```xml
<properties>
  <lombok.version>1.18.30</lombok.version>
</properties>
<dependencies>
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
      	<version>${lombok.version}</version>
    </dependency>
</dependencies>
```

如果使用了Lombok的同时，还使用mapstruct，需要在pom.xml在增加以下依赖和配置

```xml{7-29}
<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.8.1</version>
            <configuration>
                <source>1.8</source>
                <target>1.8</target>
                <encoding>UTF-8</encoding>
                <annotationProcessorPaths>
                    <path>
                        <groupId>org.mapstruct</groupId>
                        <artifactId>mapstruct-processor</artifactId>
                        <version>${org.mapstruct.version}</version>
                    </path>
                    <path>
                        <groupId>org.projectlombok</groupId>
                        <artifactId>lombok</artifactId>
                        <version>${lombok.version}</version>
                    </path>
                    <path>
                        <groupId>org.projectlombok</groupId>
                        <artifactId>lombok-mapstruct-binding</artifactId>
                        <version>${lombok-mapstruct-binding.version}</version>
                    </path>
                    <!-- other annotation processors -->
                </annotationProcessorPaths>
            </configuration>
        </plugin>
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
            <version>${spring-boot.version}</version>
            <executions>
                <execution>
                    <id>repackage</id>
                    <goals>
                        <goal>repackage</goal>
                    </goals>
                </execution>
            </executions>
        </plugin>
    </plugins>
</build>
```

> [!WARNING] 重要提示
>
> Lombok在v1.18.16及以后版本单独增加了lombok-mapstruct-binding依赖
