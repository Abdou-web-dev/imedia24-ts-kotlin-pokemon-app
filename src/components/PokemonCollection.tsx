import { PokemonType } from "../interface";
import Pokemon from "./Pokemon";
import "./poke_collection.scss";

interface PokemonCollectionProps {
  pokemons: PokemonType[];
}

const PokemonCollection = ({ pokemons }: PokemonCollectionProps) => {
  return (
    <div className="poke-collection-container">
      <section className="poke-collection-container-inner">
        {pokemons &&
          pokemons?.map((pokemon, index) => {
            return (
              <div
                key={pokemon.id}
                className="poke-collection-container-inner-pokemon"
              >
                <Pokemon
                  name={pokemon.name}
                  id={pokemon.id}
                  index={index}
                  image={pokemon.sprites.front_default}
                  type={pokemon.types[0].type.name}
                  pokemon={pokemon}
                />
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default PokemonCollection;
