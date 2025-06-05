import PokeCard from "./PokeCard";
import { getPokeData } from "~/lib/getPokeData";

import type { Pokemon } from "~/types/pokemon";

export default async function GetPokeCard({ id }: { id?: string }) {  
  // Directly fetching from PokeAPI inside server component
  const fetchPokeCard = async () => {
    let pokeUrl = "https://pokeapi.co/api/v2/pokemon/1";
    if (id) {
      pokeUrl = "https://pokeapi.co/api/v2/pokemon/" + id;
    }
    const response = await fetch(pokeUrl);
    const data = await response.json() as Pokemon;
    return data;
  }

  // Fetching from PokeAPI using a separate function in lib folder
  const pokeData = async (): Promise<Pokemon> => {
    if (!id) {
      throw new Error("No ID provided");
    }
    try {
      const data = await getPokeData(id);
      return data;
    } catch (error) {
      console.error(error);
      throw error; // re-throw the error so it can be handled by the caller
    }
  }

  const Pokemon: Pokemon = await pokeData();

  return (
    <PokeCard Pokemon={Pokemon}/>
  );
}