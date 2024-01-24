import { useState } from "react";
import { SignInForm } from "./SignInForm";
import { SignUpForm } from "./SignUpForm";

function Auth() {
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");

  return (
    <div className="container bg-slate-800 mx-auto  px-4 py-10">
      <h1 className="text-slate-500 text-2xl text-center border-slate-700 border-b pb-2 mb-4">
        <i className="fas fa-browser mx-1" />
        <i className="fas fa-mobile-button mx-2" />
        Frontera Take Home
      </h1>
      <div className="flex items-center justify-around mb-10">
        <h2
          onClick={() => setAuthMode("signin")}
          className={`text-slate-200 text-3xl text-center ${
            authMode === "signup" ? "" : "underline"
          }`}
        >
          Sign In{" "}
        </h2>
        <h2
          onClick={() => setAuthMode("signup")}
          className={`text-slate-200 text-3xl text-center ${
            authMode === "signin" ? "" : "underline"
          }`}
        >
          Sign Up{" "}
        </h2>
      </div>

      {authMode === "signup" ? <SignUpForm /> : <SignInForm />}
    </div>
  );
}

export default Auth;
