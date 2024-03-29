import { useContext } from "react";
import { getRoleFromUserDetails } from "../api/utils";
import { UserContext } from "../providers/UserProvider";
import { WrongDashboardBanner } from "./WrongDashboardBanner";

export const TherapistDashboard: React.FC = () => {
  const { userDetails } = useContext(UserContext);

  if (!userDetails || !userDetails?.data || !userDetails.data.userDetails) return null;

  const role = getRoleFromUserDetails(userDetails.data);
  if (role !== "therapist") return <WrongDashboardBanner />;

  const { students } = userDetails.data.userDetails;
  return (
    <main className="bg-slate-900 px-4 py-10 justify-between w-full flex rounded-xl mt-3  border-green-500 border flex-col items-center ">
      <h2 className="text-slate-300 text-xl">Welcome to your Dashboard</h2>

      <h3 className="my-2 text-slate-600 text-lg">Students</h3>
      <p className="text-slate-300 font-extrabold">{students?.firstname}</p>
    </main>
  );
};
