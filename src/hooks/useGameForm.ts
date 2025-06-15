import { useEffect, useState } from "react";
import { getGenresApi, getPlatformsApi } from "../utils/api";

let GENRE_OPTIONS: { id: number; name: string }[] = [];
let PLATFORM_OPTIONS: { id: number; name: string }[] = [];

export const useGameForm = () => {
  const [localGenres, setGenres] = useState<{ id: number; name: string }[]>([]);
  const [localPlatforms, setPlatforms] = useState<
    { id: number; name: string }[]
  >([]);

  useEffect(() => {
    getGenresApi().then(res => {
      setGenres(res.results);
      GENRE_OPTIONS.splice(0, GENRE_OPTIONS.length, ...res.results);
    });
    getPlatformsApi().then(res => {
      setPlatforms(res.results);
      PLATFORM_OPTIONS.splice(0, PLATFORM_OPTIONS.length, ...res.results);
    });
  }, []);

  return { localGenres, localPlatforms };
};
