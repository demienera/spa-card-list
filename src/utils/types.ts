interface Entity<T = unknown> {
  id: number;
  name: string;
  additional?: T;
}

type Developer = Entity<{ image: string }>;
type Genre = Entity;
type Platform = Entity;
type Tag = Entity;

interface PlatformWrapper {
  platform: Platform;
}

export type Game = {
  id: number;
  background_image: string;
  description: string;
  developers: Developer[];
  genres: Genre[];
  name: string;
  rating: number;
  released: string;
  platforms: PlatformWrapper[];
  tags: Tag[];
};

export type GameResponse = {
  results: Game[];
};
