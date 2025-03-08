'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '~/components/ui/card'
import Image from 'next/image'
import type { Pokemon } from '~/types/pokemon'
export default function PokeCard(
  { Pokemon }: Readonly<{ Pokemon: Pokemon }>
) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <Card>
        <CardHeader>
          <CardTitle>{Pokemon.name}</CardTitle>
          <CardDescription>Types: {Pokemon.types.map((type) => type.type.name).join(', ')}</CardDescription>
        </CardHeader>
        <CardContent>
          <Image src={Pokemon.sprites.front_default} alt={Pokemon.name} width={200} height={200}/>
        </CardContent>
      </Card>
    </div>
  );
}