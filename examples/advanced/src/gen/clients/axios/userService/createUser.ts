import client from '../../../../axios-client.ts'
import type { RequestConfig } from '../../../../axios-client.ts'
import type { CreateUserMutationRequest, CreateUserMutationResponse } from '../../../models/ts/userController/CreateUser.ts'

/**
 * @description This can only be done by the logged in user.
 * @summary Create user
 * @link /user
 */
export async function createUser(
  {
    data,
  }: {
    data?: CreateUserMutationRequest
  },
  config: Partial<RequestConfig<CreateUserMutationRequest>> = {},
) {
  const res = await client<CreateUserMutationResponse, Error, CreateUserMutationRequest>({
    method: 'POST',
    url: '/user',
    baseURL: 'https://petstore3.swagger.io/api/v3',
    data,
    ...config,
  })
  return res
}
