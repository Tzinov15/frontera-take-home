import { UseQueryResult } from "@tanstack/react-query";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getRoleFromUserDetails } from "../api/utils";
import { UserDetailsQuery } from "../gql/graphql";

/** A custom hook to retrieve the role (via groups -> edges -> nodes) from UserDetails
 * and navigate to either /dashboard/parents or /dashboard/therapist accordingly

 * Relies on being beneath our UserProvider that manages auth tokens and querying for User Data
 * Relies on being beneath our BrowserRouter that implements SPA routing
 */
export const useRedirectBasedOnUserDetails = (
  userDetails: UseQueryResult<UserDetailsQuery, Error> | null
) => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (userDetails && userDetails.data) {
      const userRole = getRoleFromUserDetails(userDetails.data);
      if (userRole === "therapist") {
        if (!location.pathname.includes("therapist")) {
          navigate("/dashboard/therapist");
          return;
        }
        return;
      }
      if (userRole === "parent") {
        if (!location.pathname.includes("parents")) {
          navigate("/dashboard/parents");
          return;
        }
        return;
      }
    }
  }, [userDetails, location.pathname, navigate]);
};
