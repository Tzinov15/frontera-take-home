import { UserDetailsQuery } from "../gql/graphql";

export const getRoleFromUserDetails = (
  userDetails: UserDetailsQuery
): "parent" | "therapist" | null => {
  const roles = userDetails.userDetails?.groups.edges.map((edge) => edge?.node?.name).flat();
  console.log({ roles });

  if (roles?.includes("parents")) return "parent";
  if (roles?.includes("therapist")) return "therapist";
  return null;
};
