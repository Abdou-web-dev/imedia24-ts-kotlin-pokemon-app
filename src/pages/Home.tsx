import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import PokemonCollection from "../components/PokemonCollection";
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
      setPokemons((p) => [...p, poke.data]);
      setLoading(false);
    });
  };

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

  // console.log(pokemons);
  useEffect(() => {
    setTimeout(() => {
      getPokemon();
    }, 500);
  }, []);

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

  return (
    <div className="poke-home-container">
      <div className="poke-home-container-inner">
        <>
          <header className="pokemon-home-header">
            <p>Here is the list of available pokemons :</p>
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
              <Spin
                className="ant-top-spinner"
                style={{ marginBottom: `0px` }}
                spinning={true}
                indicator={antIcon}
              />
              <div className="poke-home-top-spinner-text">
                <span>Wait , fetching the pokemons...</span>
              </div>
            </div>
          )}
        </>

        <>
          {/* show this spinner Icon at the center of the page while fetching next pokemons */}
          {loading && (
            <div className="poke-home-loading-spinner">
              <Spin
                className="ant-spinner"
                style={{ marginBottom: `0px` }}
                spinning={true}
                indicator={antIcon}
              />
            </div>
          )}
        </>
        {/* <button onClick={nextPage}>Charger</button> */}
      </div>
    </div>
  );
};

export default Home;
