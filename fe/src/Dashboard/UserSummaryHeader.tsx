import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getRoleFromUserDetails } from "../api/utils";
import { CaretakerBadge, ParentBadge } from "../components/Badge";
import { UserContext } from "../providers/UserProvider";

export const UserSummaryHeader: React.FC = () => {
  const { userDetails, signout } = useContext(UserContext);
  const navigate = useNavigate();

  if (!userDetails || !userDetails.data || !userDetails.data.userDetails) return null;

  const userRole = getRoleFromUserDetails(userDetails.data);
  const userLoading = false;

  const { firstName, lastName, username } = userDetails.data.userDetails;
  return (
    <header className="bg-slate-900 px-4 py-10 justify-between w-full flex rounded-b-xl ">
      <div className="flex items-center">
        <div className={`${userLoading ? "animate-pulse" : ""} flex align-start flex-col`}>
          <p className={`pr-2 mb-2 text-slate-300 text-xl font-semibold`}>
            {firstName} {lastName}
          </p>
          <p className={`pr-2 mb-2 text-slate-300 text-xs`}>{username}</p>
          {userRole === "therapist" ? <CaretakerBadge /> : <ParentBadge />}
        </div>
      </div>
      <button
        onClick={async () => {
          signout();
          navigate("/auth");
        }}
        className="rounded-lg bg-red-900 text-red-600 font-bold px-3 py-2 hover:bg-red-950 transition-all hover:transition-all hover:text-red-300 max-h-fit h-fit"
      >
        logout
      </button>
    </header>
  );
};
