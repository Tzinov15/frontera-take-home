import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { PropsWithChildren, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { getUserInfo, userSignIn } from "../api/api-service";
import { TokenAuthMutation, TokenAuthMutationVariables, UserDetailsQuery } from "../gql/graphql";

interface UserContextI {
  token: string | undefined;
  signin: ({ username, password }: { username: string; password: string }) => void;
  signout: () => void;
  signinStatus: "error" | "idle" | "pending" | "success";
  signinMutation: UseMutationResult<TokenAuthMutation, any, TokenAuthMutationVariables> | null;
  userDetails: UseQueryResult<UserDetailsQuery, Error> | null;
}

export const UserContext = createContext<UserContextI>({
  token: "",
  signin: () => {},
  signout: () => {},
  signinStatus: "idle",
  userDetails: null,
  signinMutation: null,
});

/**
 *
 * The goal of this Provider is not so much to store original state or new state but more to simply house
 * and dependency inject the data from from useQuery and useMutation for our signin (mutation) and userdetails(query) calls
 *
 * React Query (from Tanstack) ultimately manages all of our async state (idle, loading, error, data) for us.
 * Part of the decision around UI state management for this project was to used a widely adopted, intentional tool for managing async server state

 * This provider is simply lifting that async state at the top of our tree so the rest of the app can access it
 * @returns
 */
export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const signinMutation = useMutation<TokenAuthMutation, any, TokenAuthMutationVariables>({
    mutationFn: userSignIn,
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({ queryKey: ["userinfo", data.tokenAuth?.token] });
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    },
  });

  const token = signinMutation.data?.tokenAuth?.token;

  const userDetails = useQuery<UserDetailsQuery>({
    // Don't request userDetails if we don't have a token
    enabled: !!token,
    queryKey: ["userinfo", token],
    queryFn: getUserInfo,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    // pass in our token from the signin mutation so that the user details query has access to include it in headers
    meta: { token },
  });

  return (
    <UserContext.Provider
      value={{
        signout: signinMutation.reset,
        signin: signinMutation.mutate,
        token,
        signinStatus: signinMutation.status,
        userDetails,
        signinMutation,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
