import { useMemo } from "react";

export function usePublicPath(relativePath: string) {
  return useMemo(() => {
    return `${import.meta.env.BASE_URL}${relativePath}`;
  }, [relativePath]);
}
