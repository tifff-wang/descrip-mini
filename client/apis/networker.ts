import request from 'superagent'

const host = '/api/v1'

export async function post<Response>(
  path: string,
  body?: string | object
): Promise<Response> {
  const response = await request
    .post(`${host}/${path}`)
    .set('myHeader', 'value')
    .send(body)

  return response.body
}