import { Button, Modal } from "antd";
import { useState } from "react";
import { PokemonType } from "../interface";
import { PokemonInfos } from "./PokemonInfos";
import "./poke_styles.scss";

interface PokemonProps {
  name: string;
  id: number;
  image: string;
  type: string;
  pokemon: PokemonType;
  index: number;
}

const Pokemon = ({
  name,
  id,
  image: pokeAvatar,
  type,
  pokemon,
  index,
}: PokemonProps) => {
  const [openModal, setopenModal] = useState<boolean>(false);

  return (
    <div className={`pokemon-element-container pokemon-type-${type} `}>
      <Button
        className="pokemon-element-btn"
        style={{ height: `fit-content` }}
        onClick={() => setopenModal(true)}
      >
        <p className="pokemon-id"> # {index} </p>
        <p className="pokemon-name"> {name} </p>
        <img className="pokemon-avatar" src={pokeAvatar} alt={name} />
        <p className="pokemon-type">
          <span className="type-text">Type : </span>
          <span className="poke-type">{type}</span>
        </p>
      </Button>
      <Modal
        className=""
        open={openModal}
        maskClosable={true}
        closable={true}
        keyboard={true}
        mask={true}
        onOk={() => setopenModal(false)}
        onCancel={() => setopenModal(false)}
        width={"60%"}
        footer={null}
        title={`Details about this pokemon :`}
      >
        <PokemonInfos {...{ pokemon }}></PokemonInfos>
      </Modal>
    </div>
  );
};

export default Pokemon;
