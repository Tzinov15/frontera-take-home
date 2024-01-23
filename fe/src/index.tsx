import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import * as reactRouterDom from "react-router-dom";
import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";

import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import { EmailPasswordPreBuiltUI } from "supertokens-auth-react/recipe/emailpassword/prebuiltui";
import Session, { SessionAuth } from "supertokens-auth-react/recipe/session";
import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react/ui";
import App from "./App";

SuperTokens.init({
  appInfo: {
    // learn more about this on https://supertokens.com/docs/emailpassword/appinfo
    appName: "interview-takehome",
    apiDomain: "http://localhost:4000",
    websiteDomain: "http://localhost:3000",
    apiBasePath: "/auth",
    websiteBasePath: "/auth",
  },
  recipeList: [
    EmailPassword.init({
      signInAndUpFeature: {
        signUpForm: {
          formFields: [
            {
              id: "email",
              label: "Email",
              validate: async (value) => {
                return undefined;
              },
            },
            {
              id: "password",
              label: "Password test again",
              validate: async (value) => {
                return undefined;
              },
            },
          ],
        },
      },
      getRedirectionURL: async (context) => {
        console.log({ context });
        if (context.action === "SUCCESS") {
          if (context.redirectToPath !== undefined) {
            // we are navigating back to where the user was before they authenticated
            return context.redirectToPath;
          }
          if (context.isNewPrimaryUser) {
            // user signed up
          } else {
            // user signed in
          }
          return "/dashboard";
        }
        return undefined;
      },
    }),
    Session.init({}),
  ],
});

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <SuperTokensWrapper>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            {getSuperTokensRoutesForReactRouterDom(reactRouterDom, [EmailPasswordPreBuiltUI])}
            <Route
              path="/dashboard/*"
              element={
                <SessionAuth>
                  <App />
                </SessionAuth>
              }
            />
            <Route path="*" element={<Navigate to={"/dashboard"} />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </SuperTokensWrapper>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
