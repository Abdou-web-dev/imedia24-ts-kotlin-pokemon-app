import { Button, Modal } from "antd";
import { useState } from "react";
import { useStyleMediaQuery } from "../hooks/UseMediaQuery";
import { PokemonType } from "../interface";
import { PokemonInfos } from "./PokemonInfos";
import { PokemonInfosMobile } from "./PokemonInfosMobile";
import "./poke_styles.scss";

interface PokemonProps {
  name: string;
  id: number;
  image: string;
  type: string;
  pokemon: PokemonType;
  index: number;
  dataTestid: string;
}

const Pokemon = ({
  name,
  id,
  image: pokeAvatar,
  type,
  pokemon,
  index,
  dataTestid,
}: PokemonProps) => {
  const [openModal, setopenModal] = useState<boolean>(false);
  const { matches: isMobile } = useStyleMediaQuery("max", "width", 520); //520px and less
  const { matches: isSmall } = useStyleMediaQuery("max", "width", 480); //to hide the modal title on very small screens
  // const { matches: imSmall } = useStyleMediaQuery("max", "width", 400);
  let isDesktop = !isMobile;
  return (
    <div
      data-testid={dataTestid}
      className={`pokemon-element-container pokemon-type-${type} `}
    >
      {/* the pokemons are colored via css according to their type */}
      <Button
        data-testid="openModalBtn"
        className="pokemon-element-btn"
        style={{ height: `fit-content` }}
        onClick={() => setopenModal(true)}
        role="pokemon-btn"
      >
        <p className="pokemon-id"> # {index} </p>
        <p role={`poke-name`} className="pokemon-name">
          {name}
        </p>
        <img className="pokemon-avatar" src={pokeAvatar} alt={name} />
        <p className="pokemon-type">
          <span className="type-text">Type : </span>
          <span className="poke-type">{type}</span>
        </p>
      </Button>
      <Modal
        // closeIcon
        data-testid="theModal"
        className="pokemon-modal"
        open={openModal}
        maskClosable={true}
        closable={true}
        keyboard={true}
        mask={true}
        onOk={() => setopenModal(false)}
        onCancel={() => setopenModal(false)}
        // width={"60%"}
        footer={null}
        title={isSmall ? `` : `Details about this pokemon :`}
      >
        {isDesktop ? (
          <PokemonInfos {...{ pokemon }}></PokemonInfos>
        ) : isMobile ? (
          <PokemonInfosMobile {...{ pokemon }}></PokemonInfosMobile>
        ) : null}
      </Modal>
    </div>
  );
};

export default Pokemon;
