import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import PokemonCollection from "./components/PokemonCollection";
import { Pokemon } from "./interface";

interface Pokemons {
  name: string;
  url: string;
}

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string>("");

  const getPokemon = async () => {
    const res = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=20&offset=20"
    );
    setNextUrl(res.data.next);
    res.data.results.forEach(async (pokemon: Pokemons) => {
      const poke = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      // console.log(poke.data);
      setPokemons((p) => [...p, poke.data]);
    });
  };

  useEffect(() => {
    getPokemon();
  }, []);

  const nextPage = async () => {
    let res = await axios.get(nextUrl ? nextUrl : "");
    setNextUrl(res.data.next);
    res.data.results.forEach(async (pokemon: Pokemons) => {
      const poke = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      setPokemons((p) => [...p, poke.data]);
    });
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
      // it means that the user's cursor position reached the bottom of the page
    ) {
      nextPage();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <header className="pokemon-header"> Pokemon</header>
        <PokemonCollection pokemons={pokemons} />
        {/* <button onClick={nextPage}>Charger</button> */}
      </div>
    </div>
  );
};

export default App;
