import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { CustomSpin } from "../components/CustomSpin";
import { CustomSpinner } from "../components/CustomSpinner";
import PokemonCollection from "../components/PokemonCollection";
import { useStyleMediaQuery } from "../hooks/UseMediaQuery";
import { PokemonType } from "../interface";
import "./home_styles.scss";

interface Pokemons {
  name: string;
  url: string;
}

const Home = () => {
  // storing the API response into the state
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);
  const [nextUrl, setNextUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const getPokemon = async () => {
    let isMounted = true;
    const res = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
    );
    console.log(res.data.results);
    setNextUrl(res.data.next);
    res.data.results.forEach(async (pokemon: Pokemons) => {
      const poke = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      // console.log(poke);
      if (isMounted) {
        setPokemons((p) => [...p, poke.data]);
      }
      setLoading(false);
    });
    return () => {
      isMounted = false; //this prevents the data from being loaded when the component unmouts
    };
  };

  // console.log(pokemons);
  useEffect(() => {
    setTimeout(() => {
      getPokemon();
    }, 500);
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
      // it means that the user's cursor scroll position reached the bottom of the page
    ) {
      setLoading(true);
      setTimeout(() => {
        nextPage();
      }, 500);
      console.log("reached the bottom of the page !");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [nextUrl]);
  //the infinite scroll was not working at first, because I forgot to add nexUrl as a dependency in the useEffet above

  const nextPage = async () => {
    let res = await axios.get(nextUrl);
    setNextUrl(res.data.next);
    res.data.results.forEach(async (pokemon: Pokemons) => {
      const poke = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      setPokemons((p) => [...p, poke.data]);
      setLoading(false);
    });
  };
  //JSX bloc
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 50,
      }}
    />
  );

  const { matches: isMobile } = useStyleMediaQuery("max", "width", 720); //520px and less

  let isDesktop = !isMobile;

  return (
    <div className="poke-home-container">
      <div className="poke-home-container-inner">
        <>
          <header role={"home-header"} className="pokemon-home-header">
            <p
              //these 3 attributes are intended to be used for test purposes
              role={"role-p-tag"}
              data-testid="home-par-text"
              className="pokemon-home-header-p"
            >
              Here is the list of available pokemons :
            </p>
            <span>
              Scrol down to the bottom of the page to load more pokemons...
            </span>
          </header>
        </>
        <>
          {pokemons?.length !== 0 ? (
            <PokemonCollection pokemons={pokemons} />
          ) : (
            <div className="poke-home-top-spinner">
              {/* Spinner at the top of the page */}

              {/* text next to the spinner */}
              <div className="poke-home-top-spinner-inner">
                {isDesktop ? (
                  <div className="poke-home-top-spinner-wrapper">
                    <span className="poke-home-top-spinner-text">
                      Wait , fetching the pokemons...
                    </span>
                    <CustomSpinner></CustomSpinner>
                  </div>
                ) : isMobile ? (
                  <div className="poke-home-top-spinner-wrapper">
                    <span className="poke-home-top-spinner-text">
                      Wait , fetching the pokemons...
                    </span>
                    <CustomSpin></CustomSpin>
                  </div>
                ) : null}
              </div>
            </div>
          )}
        </>

        <>
          {/* show this spinner Icon at the center of the page while fetching next pokemons, on scroll */}
          {loading && (
            <div className="poke-home-loading-spinner">
              {isDesktop ? (
                <Spin
                  className="ant-spinner"
                  style={{ marginBottom: `0px` }}
                  spinning={true}
                  indicator={antIcon}
                />
              ) : isMobile ? (
                <CustomSpinner
                  {...{ isMobile }}
                  id="custom-spinner"
                ></CustomSpinner>
              ) : null}
            </div>
          )}
        </>
        {/* <button onClick={nextPage}>Charger</button> */}
      </div>
    </div>
  );
};

export default Home;
