import person from '@/schemas/person'
import pet from '@/schemas/pet'
import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pet, person],
}
