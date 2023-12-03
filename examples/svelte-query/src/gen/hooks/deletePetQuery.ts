import client from '@kubb/swagger-client/client'
import { createMutation } from '@tanstack/svelte-query'
import type { DeletePetMutationResponse, DeletePetPathParams, DeletePetHeaderParams, DeletePet400 } from '../models/DeletePet'
import type { CreateMutationOptions, CreateMutationResult } from '@tanstack/svelte-query'

type DeletePetClient = typeof client<DeletePetMutationResponse, DeletePet400, never>
type DeletePet = {
  data: DeletePetMutationResponse
  error: DeletePet400
  request: never
  pathParams: DeletePetPathParams
  queryParams: never
  headerParams: DeletePetHeaderParams
  response: DeletePetMutationResponse
  unionResponse: Awaited<ReturnType<DeletePetClient>> | DeletePetMutationResponse
  client: {
    paramaters: Partial<Parameters<DeletePetClient>[0]>
    return: Awaited<ReturnType<DeletePetClient>>
  }
}
/**
 * @description delete a pet
 * @summary Deletes a pet
 * @link /pet/:petId */
export function deletePetQuery<TData = DeletePet['response'], TError = DeletePet['error']>(
  petId: DeletePetPathParams['petId'],
  headers?: DeletePet['headerParams'],
  options: {
    mutation?: CreateMutationOptions<TData, TError, void>
    client?: DeletePet['client']['paramaters']
  } = {},
): CreateMutationResult<TData, TError, void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {}
  return createMutation<TData, TError, void>({
    mutationFn: () => {
      return client<DeletePet['data'], TError, void>({
        method: 'delete',
        url: `/pet/${petId}`,
        headers: { ...headers, ...clientOptions.headers },
        ...clientOptions,
      }).then((res) => res as TData)
    },
    ...mutationOptions,
  })
}
