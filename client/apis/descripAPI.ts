import { Keywords, Message } from '../../models/formKeywords'
import * as networker from './networker'

const path = 'description'

export async function getDescription(form: Keywords): Promise<Message> {
  return await networker.post(path, form)
}
