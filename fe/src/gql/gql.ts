/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation TokenAuth($username: String!, $password: String!) {\n  tokenAuth(input: {username: $username, password: $password}) {\n    isVerified\n    firstLogin\n    user {\n      id\n      username\n      firstName\n      lastName\n      email\n      lastLogin\n      groups {\n        edges {\n          node {\n            id\n            name\n          }\n        }\n      }\n      staff {\n        id\n        firstname\n        lastname\n      }\n      students {\n        id\n        firstname\n        lastname\n        parentFirstname\n        parentLastname\n      }\n    }\n    firstLogin\n    token\n  }\n}": types.TokenAuthDocument,
    "mutation studentSignup($country: ID!, $dob: Date!, $email: String!, $firstname: String!, $gender: String, $lastname: String, $parentFirstname: String, $parentLastname: String, $password: String, $pronounceChild: String, $zipCode: String) {\n  studentSignup(\n    input: {studentData: {country: $country, dob: $dob, email: $email, firstname: $firstname, gender: $gender, lastname: $lastname, parentFirstname: $parentFirstname, parentLastname: $parentLastname, password: $password, pronounceChild: $pronounceChild, zipCode: $zipCode}}\n  ) {\n    student {\n      id\n      firstname\n      lastname\n      zipCode\n      parentFirstname\n      parentLastname\n      email\n      country {\n        id\n        name\n      }\n      parent {\n        id\n        username\n      }\n      email\n    }\n    message\n    status\n  }\n}": types.StudentSignupDocument,
    "query userDetails {\n  userDetails {\n    id\n    username\n    firstName\n    lastName\n    email\n    lastLogin\n    groups {\n      edges {\n        node {\n          id\n          name\n        }\n      }\n    }\n    staff {\n      id\n      firstname\n      lastname\n    }\n    students {\n      id\n      firstname\n      lastname\n      parentFirstname\n      parentLastname\n      admissionDate\n      dob\n      gender\n    }\n  }\n}": types.UserDetailsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation TokenAuth($username: String!, $password: String!) {\n  tokenAuth(input: {username: $username, password: $password}) {\n    isVerified\n    firstLogin\n    user {\n      id\n      username\n      firstName\n      lastName\n      email\n      lastLogin\n      groups {\n        edges {\n          node {\n            id\n            name\n          }\n        }\n      }\n      staff {\n        id\n        firstname\n        lastname\n      }\n      students {\n        id\n        firstname\n        lastname\n        parentFirstname\n        parentLastname\n      }\n    }\n    firstLogin\n    token\n  }\n}"): (typeof documents)["mutation TokenAuth($username: String!, $password: String!) {\n  tokenAuth(input: {username: $username, password: $password}) {\n    isVerified\n    firstLogin\n    user {\n      id\n      username\n      firstName\n      lastName\n      email\n      lastLogin\n      groups {\n        edges {\n          node {\n            id\n            name\n          }\n        }\n      }\n      staff {\n        id\n        firstname\n        lastname\n      }\n      students {\n        id\n        firstname\n        lastname\n        parentFirstname\n        parentLastname\n      }\n    }\n    firstLogin\n    token\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation studentSignup($country: ID!, $dob: Date!, $email: String!, $firstname: String!, $gender: String, $lastname: String, $parentFirstname: String, $parentLastname: String, $password: String, $pronounceChild: String, $zipCode: String) {\n  studentSignup(\n    input: {studentData: {country: $country, dob: $dob, email: $email, firstname: $firstname, gender: $gender, lastname: $lastname, parentFirstname: $parentFirstname, parentLastname: $parentLastname, password: $password, pronounceChild: $pronounceChild, zipCode: $zipCode}}\n  ) {\n    student {\n      id\n      firstname\n      lastname\n      zipCode\n      parentFirstname\n      parentLastname\n      email\n      country {\n        id\n        name\n      }\n      parent {\n        id\n        username\n      }\n      email\n    }\n    message\n    status\n  }\n}"): (typeof documents)["mutation studentSignup($country: ID!, $dob: Date!, $email: String!, $firstname: String!, $gender: String, $lastname: String, $parentFirstname: String, $parentLastname: String, $password: String, $pronounceChild: String, $zipCode: String) {\n  studentSignup(\n    input: {studentData: {country: $country, dob: $dob, email: $email, firstname: $firstname, gender: $gender, lastname: $lastname, parentFirstname: $parentFirstname, parentLastname: $parentLastname, password: $password, pronounceChild: $pronounceChild, zipCode: $zipCode}}\n  ) {\n    student {\n      id\n      firstname\n      lastname\n      zipCode\n      parentFirstname\n      parentLastname\n      email\n      country {\n        id\n        name\n      }\n      parent {\n        id\n        username\n      }\n      email\n    }\n    message\n    status\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query userDetails {\n  userDetails {\n    id\n    username\n    firstName\n    lastName\n    email\n    lastLogin\n    groups {\n      edges {\n        node {\n          id\n          name\n        }\n      }\n    }\n    staff {\n      id\n      firstname\n      lastname\n    }\n    students {\n      id\n      firstname\n      lastname\n      parentFirstname\n      parentLastname\n      admissionDate\n      dob\n      gender\n    }\n  }\n}"): (typeof documents)["query userDetails {\n  userDetails {\n    id\n    username\n    firstName\n    lastName\n    email\n    lastLogin\n    groups {\n      edges {\n        node {\n          id\n          name\n        }\n      }\n    }\n    staff {\n      id\n      firstname\n      lastname\n    }\n    students {\n      id\n      firstname\n      lastname\n      parentFirstname\n      parentLastname\n      admissionDate\n      dob\n      gender\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;