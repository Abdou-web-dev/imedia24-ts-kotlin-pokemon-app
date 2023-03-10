import { PokemonType } from "../interface";
import "./poke_styles.scss";

interface PokemonInfosProps {
  pokemon: PokemonType;
}

export const PokemonInfos = ({ pokemon }: PokemonInfosProps) => {
  // console.log(pokemon);
  return (
    <>
      <div className="pokemon-infos-container">
        <div className="poke-avatar-wrapper">
          <div className="poke-front-avatar">
            <img src={pokemon.sprites.front_default} alt="" />
          </div>
          <div className="poke-back-avatar">
            <img src={pokemon.sprites.back_default} alt="" />
          </div>
        </div>

        <div className="poke-name-wrapper">
          <span className="poke-info-text">Name : </span>
          <span>{pokemon.name}</span>
        </div>

        <div className="poke-height-wrapper">
          <span className="poke-info-text">Height : </span>
          <span>{pokemon.height}</span>
        </div>

        <div className="poke-weight-wrapper">
          <span className="poke-info-text">Weight : </span>
          <span>{pokemon.weight}</span>
        </div>

        <div className="poke-ability-wrapper">
          <span className="poke-info-text">Ability : </span>
          <span>{pokemon.abilities[0].ability.name}</span>
        </div>

        <div className="poke-base_experience-wrapper">
          <span className="poke-info-text">Base experience : </span>
          <span>{pokemon.base_experience}</span>
        </div>
      </div>
    </>
  );
};
