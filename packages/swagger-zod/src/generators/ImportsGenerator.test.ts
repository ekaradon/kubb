import pathParser from 'path'

import { oasPathParser } from '@kubb/swagger'

import { ImportsGenerator } from './ImportsGenerator'
import { ZodGenerator } from './ZodGenerator'

import { format } from '../../mocks/format'
import { print } from '../utils/print'

import type { OpenAPIV3 } from 'openapi-types'

describe('ImportsGenerator', () => {
  const path = pathParser.resolve(__dirname, '../../mocks/petStoreRef.yaml')

  test('generate type for Pets with custom fileResolver', async () => {
    const oas = await oasPathParser(path)
    const typeGenerator = new ZodGenerator(oas, { withJSDocs: false })
    const importsGenerator = new ImportsGenerator({ fileResolver: (name) => Promise.resolve(`#models/${name}`) })

    const schemas = oas.getDefinition().components?.schemas
    const node = typeGenerator.build(schemas?.Pets as OpenAPIV3.SchemaObject, 'Pets')

    const importsNode = await importsGenerator.build([
      {
        refs: typeGenerator.refs,
        name: 'Pets',
        type: node,
      },
    ])

    const output = importsNode && print([...importsNode], undefined) + node

    expect(output).toBeDefined()
    expect(format(output)).toEqual(
      format(`
      import { Pet } from '#models/Pet'
      export const Pets = zod.array(Pet)
    `)
    )
  })
})