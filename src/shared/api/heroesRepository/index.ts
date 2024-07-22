import {api} from '../api';

type CharacterResponse = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
};

type PlanetResponse = {
  name: string;
};

type CharacterDetailsResponse = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: PlanetResponse;
  created: string;
  edited: string;
  url: string;
};

type CharactersListApiResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: CharacterResponse[];
};

export const fetchCharacters = async (props: {
  page: number;
}): Promise<CharactersListApiResponse> => {
  const {page} = props;

  const res = await api.get<CharactersListApiResponse>(`/people/?page=${page}`);

  return res.data;
};

export const fetchCharacter = async (
  characterId: string,
): Promise<CharacterDetailsResponse> => {
  const res = await api.get<CharacterResponse>(`/people/${characterId}`);
  const planetInfo = await fetchPlanet(res.data.homeworld);

  return {...res.data, homeworld: planetInfo};
};

export const fetchPlanet = async (link: string): Promise<PlanetResponse> => {
  const res = await api.get<PlanetResponse>(link);

  return res.data;
};
