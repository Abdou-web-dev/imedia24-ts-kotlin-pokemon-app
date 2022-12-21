import { PokemonType } from "../interface";

interface PokemonInfosProps {
  pokemon: PokemonType;
}

export const PokemonInfos = ({ pokemon }: PokemonInfosProps) => {
  console.log(pokemon);
  return (
    <>
      <div>
        <span>{pokemon.name}</span>
      </div>
      <div>
        <span>{pokemon.height}</span>
      </div>
      <div>
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <div>
        <img src={pokemon.sprites.back_default} alt="" />
      </div>
      <div>
        <span>{pokemon.weight}</span>
      </div>
      <div>
        <span>{pokemon.abilities[0].ability.name}</span>
      </div>
      <div>
        <span>{pokemon.base_experience}</span>
      </div>
    </>
  );
};
