import { Game, GameResponse } from "./types";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

const checkResponse = async <T>(res: Response): Promise<T> => {
  if (res.ok) return res.json();
  const err = await res.json();
  throw new Error(typeof err === "string" ? err : JSON.stringify(err));
};

export const getGamesApi = async (
  page: number = 1,
  pageSize: number = 20,
): Promise<GameResponse> => {
  const res = await fetch(
    `${BASE_URL}/games?key=${API_KEY}&lang=ru&page=${page}&page_size=${pageSize}`,
  );
  return checkResponse<GameResponse>(res);
};

export const getGameByIdApi = async (id: number): Promise<Game> => {
  const res = await fetch(`${BASE_URL}/games/${id}?key=${API_KEY}&lang=ru`);
  return checkResponse<Game>(res);
};

export const getGameScreenshotsApi = async (id: number): Promise<string[]> => {
  const res = await fetch(`${BASE_URL}/games/${id}/screenshots?key=${API_KEY}`);
  const data = await checkResponse<{ results: { image: string }[] }>(res);
  return data.results.map(s => s.image);
};
export const getGenresApi = async (): Promise<{
  results: { id: number; name: string }[];
}> => {
  const res = await fetch(`${BASE_URL}/genres?key=${API_KEY}&lang=ru`);
  return checkResponse(res);
};

export const getPlatformsApi = async (): Promise<{
  results: { id: number; name: string }[];
}> => {
  const res = await fetch(
    `${BASE_URL}/platforms/lists/parents?key=${API_KEY}&lang=ru`,
  );
  return checkResponse(res);
};
