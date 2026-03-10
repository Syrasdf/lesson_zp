# 手写最小版本的cursor

## 近期 Agent 重大成果
- 千问点奶茶
    千问通过跳转到淘宝来帮我们实现奶茶购买。
    标志着互联网计算向Ai Agent 推理，运行的一个划时代的产品。更复杂，更智能，更强大。
- OpenClaw  养虾
    一人公司 
    虚拟数字人，多Agent
    编程Agent(cursor) ppt  算账  市场  
    任务拆解、计划， 找到一批需要的Agent 完成任务。
    Manus ?
    开源版本的Manus 
- seedance 抖音视频的数据 

- 从llm prompt engineering-> Agentci（智能） Engineering (全栈)

- AI Agent 如何打造 ？
    - 直接调用大模型？获得智能，生成代码，
        gemini 3.1 pro 
    - 你上周和它聊过的消息，它是不是记不住？以前出现（bug）   Memory
    - 你让他帮你访问一个网页， 做一些事情， 有个Tool 发送请求 
    - 你想让他基于公司内部的私密文档做一些解答 RAG 让大模型（LLM）能够“查阅资料”后再回答问题的技术架构

    AI Agent = llm + Memory + Tool + RAG 

## Agent 是什么？
其实就是给大模型扩展了Tool和Memory，他本来就可以思考、规划、你给他用tool扩展了能力
他就可以**自动**做事情,用Memory管理记忆，他就可以记住你想他记住的东西，还可以使用RAG
RAG 查询内部知识来获取知识

这样一个知道内部知识、能思考规划、有记忆，能够帮你做事情的扩展后的大模型。就是一个agent。


## Tool 工具

### 用react 创建一个todoList
- 任务，期待Cursor 编程Agent完成
- llm思考 （thinking），规划（planing）aigc 生成代码
- tool 让llm扩展 有读写文件的能力， 项目就生成了。
- tool bash 执行命令

### Langchain
AI Agent 框架 提供了 memory tool rag
后端的功底（node）next.js 

AI Agent 全栈开发

## LLM with Tools

- llm 选择
    qwen-coder 
- tools
    [read,write,exec]   
-  pnpm i @langchain/openai  适配了常见模型
    






