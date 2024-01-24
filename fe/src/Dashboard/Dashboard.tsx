import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { useRedirectBasedOnUserDetails } from "../hooks/useRedirectBasedOnUserDetail";
import { UserContext } from "../providers/UserProvider";
import { ErrorBanner } from "./ErrorBanner";
import { NotLoggedInBanner } from "./NotLoggedInBanner";
import { ParentsDashboard } from "./ParentsDashboard";
import { TherapistDashboard } from "./TherapistDashboard";
import { UserSummaryHeader } from "./UserSummaryHeader";

function Dashboard() {
  const { userDetails } = useContext(UserContext);

  useRedirectBasedOnUserDetails(userDetails);

  if (!userDetails || !userDetails?.data || !userDetails.data.userDetails) {
    return <NotLoggedInBanner />;
  }

  if (userDetails.status === "error") {
    return <ErrorBanner />;
  }

  return (
    <div className="container bg-slate-800 mx-auto h-screen  px-4">
      <UserSummaryHeader />
      <Routes>
        <Route path="/therapist" element={<TherapistDashboard />} />
        <Route path="/parents" element={<ParentsDashboard />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
