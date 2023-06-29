import { apiKey, apiBaseConfig } from "../env/apiEnvs";

import { AxiosRequestConfig } from "axios";

import { useState, useEffect } from "react";

export function usePlayers<T = unknown>(teamID: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(true);

  //   base configurations for the request
  useEffect(() => {
    const config: AxiosRequestConfig = {
      params: {
        action: "get_players",
        APIkey: apiKey,
        team_id: teamID,
        league_id: 4, //UEFA Champions League
      },
    };

    apiBaseConfig
      .get("", config)
      .then((res) => {
        setData(res.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { data, isLoading };
}
