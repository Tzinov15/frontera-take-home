import { QueryFunctionContext } from "@tanstack/react-query";
import { GraphQLClient } from "graphql-request";
import { graphql } from "../gql/gql";
import { StudentSignupInput, TokenAuthMutationVariables } from "../gql/graphql";

const endpoint = "https://caregiver.frontera.health/apis/graphql";

const CaregiverFronteraGraphQLClient = new GraphQLClient(endpoint);

const userSignInMutation = graphql(
  "mutation TokenAuth($username: String!, $password: String!) {\n  tokenAuth(input: {username: $username, password: $password}) {\n    isVerified\n    firstLogin\n    user {\n      id\n      username\n      firstName\n      lastName\n      email\n      lastLogin\n      groups {\n        edges {\n          node {\n            id\n            name\n          }\n        }\n      }\n      staff {\n        id\n        firstname\n        lastname\n      }\n      students {\n        id\n        firstname\n        lastname\n        parentFirstname\n        parentLastname\n      }\n    }\n    firstLogin\n    token\n  }\n}"
);

const userSignUpMutation = graphql(
  "mutation studentSignup($email: String!, $firstname: String!, $lastname: String, $dob: Date!, $gender: String, $country: ID!, $parentFirstname: String, $parentLastname: String, $password: String) {\n  studentSignup(\n    input: {studentData: {email: $email, firstname: $firstname, lastname: $lastname, dob: $dob, gender: $gender, country: $country, parentFirstname: $parentFirstname, parentLastname: $parentLastname, password: $password}}\n  ) {\n    student {\n      id\n      firstname\n      lastname\n      zipCode\n      parentFirstname\n      parentLastname\n      email\n      country {\n        id\n        name\n      }\n      parent {\n        id\n        username\n      }\n      email\n    }\n    message\n    status\n  }\n}"
);

const userDetailsQuery = graphql(
  "query userDetails {\n  userDetails {\n    id\n    username\n    firstName\n    lastName\n    email\n    lastLogin\n    groups {\n      edges {\n        node {\n          id\n          name\n        }\n      }\n    }\n    staff {\n      id\n      firstname\n      lastname\n    }\n    students {\n      id\n      firstname\n      lastname\n      parentFirstname\n      parentLastname\n    }\n  }\n}"
);

export const userSignIn = async (params: TokenAuthMutationVariables) => {
  return await CaregiverFronteraGraphQLClient.request(userSignInMutation, params);
};

export const userSignUp = async (params: StudentSignupInput) => {
  return await CaregiverFronteraGraphQLClient.request(userSignUpMutation, params);
};

export const getUserInfo = async ({ meta }: QueryFunctionContext) => {
  CaregiverFronteraGraphQLClient.setHeader("authorization", `JWT ${meta?.token}`);
  const data = await CaregiverFronteraGraphQLClient.request(userDetailsQuery);
  return data;
};
