interface Entity<T = unknown> {
  id: number;
  name: string;
  additional?: T;
}

export type Developer = Entity<{ image?: string }>;
export type Genre = Entity;
export type Platform = Entity;
export type Tag = Entity;

interface PlatformWrapper {
  platform: Platform;
}

export type Game = {
  id: number;
  background_image: string;
  description?: string;
  description_raw: string;
  developers: Developer[];
  genres: Genre[];
  name: string;
  rating?: number;
  released?: string;
  platforms: PlatformWrapper[];
  tags?: Tag[];
  slug?: string;
  screenshots?: string[];
};

export type GameResponse = {
  count: number;
  results: Game[];
};
