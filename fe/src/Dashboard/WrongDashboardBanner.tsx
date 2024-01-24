import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";

export const WrongDashboardBanner: React.FC = () => {
  const navigate = useNavigate();
  const { signout } = useContext(UserContext);
  return (
    <div className="container bg-slate-800 mx-auto h-screen px-0 mt-4">
      <header className="bg-slate-900 px-4 py-10 justify-center w-full flex rounded-xl ">
        <div className="flex items-center flex-col">
          <h1 className="text-white text-2xl">Wrong Dashboard</h1>
          <p className="text-white text-md opacity-80 px-4 my-4">
            You do not have access to this dashboard. Please login with the correct account.
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
