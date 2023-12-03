import client from '@kubb/swagger-client/client'
import { useMutation } from '@tanstack/vue-query'
import type {
  CreateUsersWithListInputMutationRequest,
  CreateUsersWithListInputMutationResponse,
  CreateUsersWithListInputError,
} from '../models/CreateUsersWithListInput'
import type { UseMutationReturnType } from '@tanstack/vue-query'
import type { VueMutationObserverOptions } from '@tanstack/vue-query/build/lib/useMutation'

type CreateUsersWithListInputClient = typeof client<
  CreateUsersWithListInputMutationResponse,
  CreateUsersWithListInputError,
  CreateUsersWithListInputMutationRequest
>
type CreateUsersWithListInput = {
  data: CreateUsersWithListInputMutationResponse
  error: CreateUsersWithListInputError
  request: CreateUsersWithListInputMutationRequest
  pathParams: never
  queryParams: never
  headerParams: never
  response: CreateUsersWithListInputMutationResponse
  unionResponse: Awaited<ReturnType<CreateUsersWithListInputClient>> | CreateUsersWithListInputMutationResponse
  client: {
    paramaters: Partial<Parameters<CreateUsersWithListInputClient>[0]>
    return: Awaited<ReturnType<CreateUsersWithListInputClient>>
  }
}
/**
 * @description Creates list of users with given input array
 * @summary Creates list of users with given input array
 * @link /user/createWithList */
export function useCreateUsersWithListInput<TData = CreateUsersWithListInput['response'], TError = CreateUsersWithListInput['error']>(
  options: {
    mutation?: VueMutationObserverOptions<TData, TError, CreateUsersWithListInput['request'], unknown>
    client?: CreateUsersWithListInput['client']['paramaters']
  } = {},
): UseMutationReturnType<TData, TError, CreateUsersWithListInput['request'], unknown> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return useMutation<TData, TError, CreateUsersWithListInput['request'], unknown>({
    mutationFn: (data) => {
      return client<CreateUsersWithListInput['data'], TError, CreateUsersWithListInput['request']>({
        method: 'post',
        url: `/user/createWithList`,
        data,
        ...clientOptions,
      }).then((res) => res as TData)
    },
    ...mutationOptions,
  })
}
