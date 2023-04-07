import type { Pets } from './Pets'

export type ListPetsBreedPathParams = {
  /**
   * @type string
   */
  breed: string
}

export type ListPetsBreedQueryParams = {
  /**
   * @type string | undefined
   */
  limit?: string | undefined
}

/**
 * @description A paged array of pets
 */
export type ListPetsBreedResponse = Pets