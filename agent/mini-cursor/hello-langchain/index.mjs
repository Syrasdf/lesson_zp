import { ChatOpenAI } from '@langchain/openai';
import dotenv from 'dotenv';
dotenv.config();

const model = new ChatOpenAI({
    modelName: process.env.MODEL_NAME,
    apiKey: process.env.OPENAI_API_KEY,
    configuration: {
        baseURL: process.env.OPENAI_BASE_URL
    }
});

const response = await model.invoke("介绍一下东华理工");
console.log(response.content);