import { useNavigate } from "react-router-dom";

export const NotLoggedInBanner: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="container bg-slate-800 mx-auto h-screen  px-4">
      <header className="bg-slate-900 px-4 py-10 justify-center w-full flex rounded-b-xl ">
        <div className="flex items-center flex-col">
          <h1 className="text-white text-2xl">Not logged in</h1>
          <p className="text-white text-md opacity-80 px-4 my-4">
            In order to access this Dashboard you will need to login first
          </p>
          <button
            onClick={async () => {
              navigate("/auth");
            }}
            className="my-2 rounded-lg bg-green-950  text-green-600 font-bold px-3 py-2 max-h-fit h-fit"
          >
            login
          </button>
        </div>
      </header>
    </div>
  );
};
