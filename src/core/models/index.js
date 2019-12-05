// @flow
export type EpisodesItem = {|
  name: string,
  id: number,
  air_date: string,
  episode: string,
|};

export type Episodes = {
  +episodes: {|
    results: EpisodesItem[],
    info: {|
      next: ?number,
      pages: number,
    |},
  |},
};

type CharactersItem = {|
  name: string,
  id: string,
  image: string,
  species: string,
  location: {|
    name: string,
    type: string,
    dimension: string,
    id: string,
  |},
|};

export type Episode = {
  +episode: {|
    name: string,
    episode: string,
    air_date: string,
    characters: CharactersItem[],
  |},
};
