import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest , response: NextApiResponse) => {
  const users = [
    {id: 1, name: 'Jacque'},
    {id: 2, name: 'Dani'}, 
    {id: 3, name: 'Diego'},
  ]

  return response.json(users)

}
