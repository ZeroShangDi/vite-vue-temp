import { post } from 'utils/axios/index'

export function getUser() {
  return post('/createUser')
}
