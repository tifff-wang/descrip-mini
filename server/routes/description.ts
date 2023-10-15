import express from 'express'
import { Configuration, OpenAIApi } from 'openai'
import 'dotenv/config'
import { Keywords } from '../../models/formKeywords'

const router = express.Router()

router.post('/', async (req, res) => {
  //uncomment line 10-13 and comment 15-19 to call the OpenAI api.
  const keywords = req.body
  console.log(keywords)
  const answer = await getAnswer(keywords)
  res.json(answer.data.choices[0].message)

  // const response = {
  //   role: 'assistant',
  //   content: 'Hello World, this paragraph is for testing purpose, comment line 10-13 and uncomment 15-19 to fake the api process.',
  // }
  // res.json(response)
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
        content: `I want to sell my ${form.itemName} on Facebook marketplace, can you generate a 3 sentence description for my second-hand selling listing with keywords: item name: ${form.itemName} from category: ${form.category}, condition: ${form.condition}, brand: ${form.brand},and pick up from: ${form.location}`,
        // content: 'hello world',
      },
    ],
  })

  return chat_completion
}

export default router
