import { PokemonType } from "../interface";
import "./poke_styles.scss";
const info = require("../assets/img/info.png"); //this is how we import images in TS

interface PokemonInfosProps {
  pokemon: PokemonType;
}

export const PokemonInfosMobile = ({ pokemon }: PokemonInfosProps) => {
  const infoIcon = (
    <div>
      <img src={info} alt="info" />
    </div>
  );
  return (
    <>
      <div className="pokemon-infos-container-mobile">
        <div className="poke-avatar-wrapper-mobile">
          <div className="poke-front-avatar">
            <img src={pokemon.sprites.front_default} alt="" />
          </div>
          <div className="poke-back-avatar">
            <img src={pokemon.sprites.back_default} alt="" />
          </div>
        </div>

        <div className="poke-name-wrapper-mobile">
          {infoIcon}
          <span className="poke-info-text">Name : </span>
          <span>{pokemon.name}</span>
        </div>

        <div className="poke-height-wrapper-mobile">
          {infoIcon}
          <span className="poke-info-text">Height : </span>
          <span>{pokemon.height}</span>
        </div>

        <div className="poke-weight-wrapper-mobile">
          {infoIcon}
          <span className="poke-info-text">Weight : </span>
          <span>{pokemon.weight}</span>
        </div>

        <div className="poke-ability-wrapper-mobile">
          {infoIcon}
          <span className="poke-info-text">Ability : </span>
          <span>{pokemon.abilities[0].ability.name}</span>
        </div>

        <div className="poke-base_experience-wrapper-mobile">
          {infoIcon}
          <span className="poke-info-text">Base experience : </span>
          <span>{pokemon.base_experience}</span>
        </div>
      </div>
    </>
  );
};
