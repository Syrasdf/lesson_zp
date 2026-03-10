import 'dotenv/config'
import { ChatOpenAI } from '@langchain/openai';
import { tool } from '@langchain/core/tools';
import { 
    HumanMessage,
    SystemMessage,
    ToolMessage/*告知使用了什么工具*/
} from '@langchain/core/messages';
// node 内置的文件处理模块  异步IO 
import fs from 'node:fs/promises';
// 数据校验 zod tool parameter 校验
import { z } from 'zod';

// 初始化模型
const model = new ChatOpenAI({
    modelName: process.env.MODEL_NAME,
    apiKey: process.env.OPENAI_API_KEY,
    configuration: {
        baseURL: process.env.OPENAI_BASE_URL
    },
    temperature: 0,
});
// 原生写法很麻烦
// 新建一个自定义工具readFileTool 
const readFileTool = tool(
    // tool 处理函数的函数体
    // 分析XX 代码文件有没有bug
    // 先tool 读取文件内容，path作为参数  等待它读去完成
    // 再分析bug
    async ({path}) => {
        const content = await fs.readFile(path, 'utf-8');
        console.log(`[工具调用] read_file("${path}") 成功读取${content.length} 字节`);
        return content;
    },
    {
        name: 'read_file',
        description: `用此工具来读取文件内容，当用户需要读取文件、查看代码分析文件内容时调用此工具、
        输入文件路径(可以是相对路径也可以是绝对路径)`,
        schema: z.object({path: z.string().describe('要读取文件路径')})
    }
);

const tools = [readFileTool];

// langchain 提供的方法  绑定tools
// model 不在孤单，有了工具的陪伴
// llm 就可以干活了
const modelWithTools = model.bindTools({tools});

// 构建对话历史Messages
const messages = [
    new SystemMessage(`   // 系统指令
        你是一个代码助手，可以使用工具读取文件并解释代码。
        工作流程：
        1. 用户要求读取文件时，立即调用 read_file 工具
        2. 等待工具返回文件内容
        3. 基于文件内容进行分析和解释   

        可用工具：
        - read_file: 读取文件内容（使用此工具来获取文件内容）
        `),
    new HumanMessage('读取文件 tool-file-read.mjs 文件内容并解释代码')   // 用户指令
];
// llm 返回的决策，他要调用工具了
// tool_calls 的 api 部分
// name 执行函数 result 
// 最后的结果
let response = await modelWithTools.invoke(messages);
messages.push(response);//把 llm 要调用工具的message 也加入message 数组，形成完整的对话历史

while (response.tool_calls && response.tool_calls.length > 0) {
    // 调用工具
    console.log(`\n[检测到 ${response.tool_calls.length} 个工具调用]`);
    const toolResults = await Promise.all(
        response.tool_calls.map(async (toolcall) => {
            const tool = tools.find(t => t.name === toolcall.name);
            if (!tool) {
                return new ToolMessage({
                    content: `工具 ${call.name} 不存在`,
                    tool_call_id: call.id,
                });
            }
            console.log(`[执行工具] ${toolcall.name}(${JSON.stringify(toolcall.args)})`);
            try {
                const result = await tool.invoke(toolcall.args); // 调用工具
                return result;
            }catch(error){
                return `错误：${error.message}`;
            }
        })
    );
    // console.log(toolResults);
    response.tool_calls.forEach((toolcall, index) => {
        messages.push(
            new ToolMessage({
                content: toolResults[index],
                tool_call_id: toolcall.id,
            })
        );
    });

    console.log(messages);
    
    response = await modelWithTools.invoke(message);
    // 不再有 tool_calls 了说明对话结束了
    console.log(response);
}



// console.log(response,response.content);


// console.log(process.env.OPENAI_API_KEY,'///')

