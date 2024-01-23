import { useQuery } from "@tanstack/react-query";
import { signOut } from "supertokens-auth-react/recipe/emailpassword";

import { useSessionContext } from "supertokens-auth-react/recipe/session";

import "./App.css";

import { format } from "date-fns/format";
import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { UserInfo, getUserInfo } from "./api-service";
import { Badge } from "./components/Badge";

function App() {
  // const queryClient = useQueryClient();

  const sessionContext = useSessionContext();

  const location = useLocation();
  const navigate = useNavigate();

  // const countriesQuery = useQuery<CountryQueryData>({
  //   queryKey: ["countries"],
  //   queryFn: getCountryData,
  // });

  // const localQuery = useQuery<LocalData>({
  //   queryKey: ["localdata"],
  //   queryFn: getLocalData,
  // });

  const userInfoQuery = useQuery<UserInfo>({
    queryKey: ["userinfo"],
    queryFn: getUserInfo,
    enabled: !!sessionContext,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (userInfoQuery) {
      if (userInfoQuery.data?.roles.includes("bcba")) {
        if (!location.pathname.includes("bcba")) {
          navigate("/dashboard/bcba");
          return;
        }
        return;
      }
      if (userInfoQuery.data?.roles.includes("caretaker")) {
        if (!location.pathname.includes("caretaker")) {
          navigate("/dashboard/caretaker");
          return;
        }
        return;
      }
    }
  }, [userInfoQuery, location.pathname, navigate]);

  console.log({ sessionContext });

  return (
    <div className="container bg-slate-800 mx-auto h-screen  px-4">
      <header className="bg-slate-900 px-4 py-10 justify-between w-full flex rounded-b-xl ">
        <div className="flex items-center">
          <div
            className={`${
              userInfoQuery.isFetching ? "animate-pulse" : ""
            } flex align-start flex-col`}
          >
            <p
              className={`px-2 mb-3 text-${
                userInfoQuery.isFetching
                  ? "slate"
                  : userInfoQuery.data?.roles?.includes("bcba")
                  ? "indigo"
                  : "green"
              }-500 text-3xl`}
            >
              <i className="fas fa-user mr-1" />
              {userInfoQuery.isFetching ? "Loading..." : userInfoQuery?.data?.email}
            </p>
            <Badge
              text={
                userInfoQuery.isFetching
                  ? ""
                  : userInfoQuery?.data?.roles?.includes("bcba")
                  ? "BCBA"
                  : "Caretaker"
              }
              icon={`fas ${
                userInfoQuery.isFetching
                  ? "fa-circle-notch fa-spin"
                  : userInfoQuery?.data?.roles?.includes("bcba")
                  ? "fas fa-star-of-life"
                  : "fas fa-house-chimney-heart"
              }`}
              className={`text-${
                userInfoQuery.isFetching
                  ? "slate"
                  : userInfoQuery.data?.roles?.includes("bcba")
                  ? "indigo"
                  : "green"
              }-500 transition-all`}
            />

            <p
              className={`px-2 mt-3 text-${
                userInfoQuery.isFetching
                  ? "slate"
                  : userInfoQuery.data?.roles?.includes("bcba")
                  ? "indigo"
                  : "green"
              }-500 text-sm opacity-60`}
            >
              <i className="fas fa-calendar mr-1" />
              Joined:{" "}
              {userInfoQuery.isFetching
                ? "Loading..."
                : format(new Date(userInfoQuery?.data?.timeJoined || ""), "MMM dd, yyyy")}
            </p>
          </div>
        </div>
        <button
          onClick={async () => {
            await signOut({});
            navigate("/dashboard/");
            navigate("/auth");
          }}
          className="rounded-lg bg-red-900 text-red-600 font-bold px-3 py-2 hover:bg-red-950 transition-all hover:transition-all hover:text-red-300 max-h-fit h-fit"
        >
          logout
        </button>
      </header>
      <Routes>
        <Route
          path="/bcba"
          element={
            <main className="bg-slate-900 px-4 py-10 justify-between w-full flex rounded-xl mt-3  border-indigo-500 border ">
              <h2 className="text-slate-300 text-xl">Welcome to your Dashboard</h2>
            </main>
          }
        />
        <Route
          path="/caretaker"
          element={
            <main className="bg-slate-900 px-4 py-10 justify-between w-full flex rounded-xl mt-3  border-green-500 border ">
              <h2 className="text-slate-300 text-xl">Welcome to your Dashboard</h2>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
