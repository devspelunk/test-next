// List of functions for fetching data from the PokeAPI
//

import { type Pokemon } from "~/types/pokemon";

// This function fetches data from the PokeAPI and returns it as a Pokemon object.
export async function getPokeData(id: string): Promise<Pokemon> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json() as Pokemon;
  return data;
}