import { gql, request } from "graphql-request";

export interface Country {
  name: string;
  emoji: string;
}

export interface CountryQueryData {
  countries: Country[];
}

const endpoint = "https://countries.trevorblades.com/graphql";

export const getCountryData = async () => {
  const data = await request<CountryQueryData>(
    endpoint,
    gql`
      query {
        countries {
          emoji
          name
        }
      }
    `
  );
  return data;
};

export interface LocalData {
  people: { name: string; age: number }[];
}
export const getLocalData = async () => {
  const data = await fetch("http://localhost:4000/data", { mode: "cors" });
  const json = await data.json();
  return json as LocalData;
};

export interface UserInfo {
  id: string;
  email: string[];
  timeJoined: number;
  roles: string[];
}
export const getUserInfo = async () => {
  const data = await fetch("http://localhost:4000/user-info", { mode: "cors" });
  const json = await data.json();
  return json as UserInfo;
};
