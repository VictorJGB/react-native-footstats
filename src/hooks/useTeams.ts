import { apiKey, apiBaseConfig } from "../env/apiEnvs";

import { AxiosRequestConfig } from "axios";

import { useState, useEffect } from "react";

export function useTeams<T = unknown>() {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(true);

  //   base configurations for the request
  useEffect(() => {
    const config: AxiosRequestConfig = {
      params: {
        action: "get_standings",
        APIkey: apiKey,
        team_id: "",
        league_id: 152, //Premier League
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
