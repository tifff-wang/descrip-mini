import express from 'express'
import { Configuration, OpenAIApi } from 'openai'
import request from 'superagent'
import 'dotenv/config'
import { Keywords } from '../../models/formKeywords'

const router = express.Router()

router.post('/', async (req, res) => {
  // const keywords = req.body
  // console.log(keywords)
  // const answer = await getAnswer(keywords)
  // res.json(answer.data.choices[0].message)
  const response = {
    role: 'assistant',
    content: 'Hello! How can I assist you today?',
  }

  res.json(response)
})

async function getAnswer(form: Keywords) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
  const openai = new OpenAIApi(configuration)

  const chat_completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        // content: `Generate a 2 sentence description for my second-hand selling based on the keywords of ${form.itemName}, ${form.category}, ${form.condition}, ${form.brand},and ${form.location}`,
        // content: 'hello world',
      },
    ],
  })

  return chat_completion
}

export default router
