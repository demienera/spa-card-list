import { Game, GameResponse } from "./types";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

const checkResponse = async <T>(res: Response): Promise<T> => {
  if (res.ok) return res.json();
  const err = await res.json();
  throw new Error(typeof err === "string" ? err : JSON.stringify(err));
};

export const getGamesApi = async (): Promise<Game[]> => {
  const res = await fetch(`${BASE_URL}/games?key=${API_KEY}`);
  const data = await checkResponse<GameResponse>(res);
  return data.results;
};
