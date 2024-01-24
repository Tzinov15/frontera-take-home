import { useContext } from "react";
import { getRoleFromUserDetails } from "../api/utils";
import { UserContext } from "../providers/UserProvider";
import { WrongDashboardBanner } from "./WrongDashboardBanner";

export const ParentsDashboard: React.FC = () => {
  const { userDetails } = useContext(UserContext);

  if (!userDetails || !userDetails?.data || !userDetails.data.userDetails) return null;

  const role = getRoleFromUserDetails(userDetails.data);
  if (role !== "parent") return <WrongDashboardBanner />;

  const { students } = userDetails.data.userDetails;
  return (
    <main className="bg-slate-900 px-4 py-10 justify-between w-full flex rounded-xl mt-3  border-indigo-500 border flex-col items-center ">
      <h2 className="text-slate-300 text-xl">Welcome to your Dashboard</h2>

      <h3 className="my-2 text-slate-600 text-lg">Students</h3>
      <div className="grid items-center grid-cols-3 w-full mt-2">
        <p className="text-slate-500 underline text-center ">First</p>
        <p className="text-slate-500 underline text-center">Last </p>
        <p className="text-slate-500 underline text-center">DOB</p>
      </div>
      <div className="grid items-center grid-cols-3 w-full mt-2">
        <p className="text-slate-200 font-extrabold text-center text-sm">{students?.firstname}</p>
        <p className="text-slate-200 font-extrabold text-center text-sm">{students?.lastname}</p>
        <p className="text-slate-400 font-extrabold text-center text-sm">{students?.dob}</p>
      </div>
    </main>
  );
};
