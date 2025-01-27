/* eslint-disable no-alert, no-console */
import client from '@kubb/plugin-client/client'
import type {
  GetUserByNameQueryResponse,
  GetUserByNamePathParams,
  GetUserByName400,
  GetUserByName404,
} from '../../../models/ts/userController/GetUserByName.js'
import type { RequestConfig } from '@kubb/plugin-client/client'

/**
 * @summary Get user by user name
 * @link /user/:username
 */
export async function getUserByName({ username }: GetUserByNamePathParams, config: Partial<RequestConfig> = {}) {
  const res = await client<GetUserByNameQueryResponse, GetUserByName400 | GetUserByName404, unknown>({ method: 'GET', url: `/user/${username}`, ...config })
  return res.data
}
