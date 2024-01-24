import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";

export const ErrorBanner: React.FC = () => {
  const navigate = useNavigate();
  const { signout } = useContext(UserContext);
  return (
    <div className="container bg-slate-800 mx-auto h-screen  px-4">
      <header className="bg-slate-900 px-4 py-10 justify-center w-full flex rounded-b-xl ">
        <div className="flex items-center flex-col">
          <h1 className="text-red-700 text-xl font-semibold">Something Went Wrong</h1>
          <p className="text-red-700 text-sm opacity-85 my-2 ">
            An error occurred when fetching User Details
          </p>

          <button
            onClick={async () => {
              signout();
              navigate("/auth");
            }}
            className="my-2 rounded-lg bg-red-950  text-red-600 font-bold px-3 py-2 max-h-fit h-fit"
          >
            logout
          </button>
        </div>
      </header>
    </div>
  );
};
