---
{
  "createTime": "2024-03-02 21:05",
  "articleLabels": ["AI", "大语言模型", "Spring AI", "云学习"],
  "articleType" : "翻译"
}
---



# Spring AI

<ArticleInfo/>

SpringSpring 官方宣布SpringAI已经上架到Spring Initializr上，它提供了一种更简法的方式和AI进行交互，减轻Java业务中接入LLM模型应用的学习成本，使得Java生态接入LLM大语言模型变得更加简单和便捷！

## Spring AI是什么

Spring AI是一个人工智能工程的应用框架，其目标是将Spring生态系统设计原则应用于AI领域，如可移植性和模块化设计等，并推荐使用POJO作为AI领域应用程序进行构建。

> 官方文档：https://spring.io/projects/spring-ai#overview

## Spring AI特性

适配不同AI提供商的API，适用于聊天模型、文生图模型和嵌入式模型。支持同步和流API，还支持配置参数来访问指定的大语言模型。

## 模型支持

### 聊天模型

- OpenAI
- Azure Open AI
- Amazon Bedrock
  - Anthropic's Claude
  - Cohere's Command
  - AI21 Labs' Jurassic-2
  - Meta's LLama 2
  - Amazon's Titan
- Google Vertex AI Palm - Gemini support coming soon (follow the WIP branch)
- HuggingFace - access thousands of models, including those from Meta such as Llama2
- Ollama - run AI models on your local machine

### 文生图模型

- OpenAI with DALL-E
- StabilityAI

### 嵌入模型

- OpenAI
- Azure OpenAI
- Ollama
- ONNX
- PostgresML
- Bedrock Cohere
- Bedrock Titan
- Google VertexAI

### 向量数据库

- Azure Vector Search
- Chroma
- Milvus
- Neo4j
- PostgreSQL/PGVector
- PineCone
- Redis
- Weaviate

