export interface PokemonType {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  sprites: {
    front_default: string;
    back_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
    };
  }[];
  held_items: {
    item: {
      name: string;
    };
  }[];
  species: {
    name: string;
  };
}
