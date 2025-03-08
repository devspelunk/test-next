import PokeCard from "./PokeCard";

import type { Pokemon } from "~/types/pokemon";

export default async function GetPokeCard({ id }: { id?: string }) {  
  const fetchPokeCard = async () => {
    let pokeUrl = "https://pokeapi.co/api/v2/pokemon/1";
    if (id) {
      pokeUrl = "https://pokeapi.co/api/v2/pokemon/" + id;
    }
    const response = await fetch(pokeUrl);
    const data = await response.json() as Pokemon;
    return data;
  }

  const Pokemon: Pokemon = await fetchPokeCard();

  return (
    <PokeCard Pokemon={Pokemon}/>
  );
}