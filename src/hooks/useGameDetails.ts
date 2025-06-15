import { useEffect, useState } from "react";
import { allGamesSelector } from "../app/slices/games/slice";
import { useAppSelector } from "../app/hooks";
import { getGameByIdApi, getGameScreenshotsApi } from "../utils/api";
import { Game } from "../utils/types";

export function useGameDetails(id?: number) {
  const localGames = useAppSelector(allGamesSelector);
  const [game, setGame] = useState<Game | null>(null);
  const [screenshots, setScreenshots] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id === undefined) {
      setError("ID игры не указан");
      setLoading(false);
      return;
    }

    const loadGameData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [apiGame, apiScreenshots] = await Promise.all([
          getGameByIdApi(id),
          getGameScreenshotsApi(id),
        ]);

        setGame(apiGame);
        setScreenshots(apiScreenshots);
      } catch (e) {
        const localGame = localGames.find(g => g.id === id);
        if (localGame) {
          setGame(localGame);
          setScreenshots(localGame.screenshots || []);
        } else {
          setError("Игра не найдена");
        }
      } finally {
        setLoading(false);
      }
    };

    loadGameData();
  }, [id, localGames]);

  return { game, screenshots, loading, error };
}
