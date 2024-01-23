import cors from "cors";
import dotenv from "dotenv";
import express, { Express } from "express";
import http from "http";
import supertokens from "supertokens-node";
import {
  SessionRequest,
  errorHandler,
  middleware,
} from "supertokens-node/lib/build/framework/express";
import Dashboard from "supertokens-node/recipe/dashboard";
import EmailPassword from "supertokens-node/recipe/emailpassword";
import Session from "supertokens-node/recipe/session";
import { verifySession } from "supertokens-node/recipe/session/framework/express";
import UserRoles from "supertokens-node/recipe/userroles";

let { getUserById } = require("supertokens-node/recipe/emailpassword");

dotenv.config();

const app: Express = express();

const port = process.env.PORT || 4000;
const server = http.createServer(app);

supertokens.init({
  framework: "express",
  supertokens: {
    connectionURI: "https://st-dev-5b45c020-b989-11ee-867b-ab09c738b53b.aws.supertokens.io",
    apiKey: "essSJj4QCLaPXwQlpMobQBmEOV",
  },
  appInfo: {
    // learn more about this on https://supertokens.com/docs/session/appinfo
    appName: "interview-takehome",
    apiDomain: "http://localhost:4000",
    websiteDomain: "http://localhost:3000",
    apiBasePath: "/auth",
    websiteBasePath: "/auth",
  },
  recipeList: [
    EmailPassword.init({
      signUpFeature: {
        formFields: [
          {
            id: "email",
            validate: async (value, tenantId) => {
              // Your own validation returning a string or undefined if no errors.
              return undefined;
            },
          },
          {
            id: "password",
            validate: async (value, tenantId) => {
              // Your own validation returning a string or undefined if no errors.
              return undefined;
            },
          },
        ],
      },
    }), // initializes signin / sign up features
    Session.init({}), // initializes session features
    Dashboard.init(),
    UserRoles.init(),
  ],
});

app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
    methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
    credentials: true,
    preflightContinue: false,
    allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
  })
);

app.use(middleware());
app.use(express.json());

app.get("/data", verifySession(), (req: SessionRequest, res) => {
  const userid = req.session!.getUserId();
  console.log(`userid: ${userid}`);
  res.status(200).json({
    people: [
      { name: "alex", age: 28 },
      { name: "gregor", age: 24 },
      { name: "frances", age: 31 },
    ],
  });
});

app.get("/user-info", verifySession(), async (req: SessionRequest, res) => {
  const userid = req.session!.getUserId();
  let userInfo = await supertokens.getUser(userid);
  const response = await UserRoles.getRolesForUser("public", userid);
  const roles: string[] = response.roles;

  if (!userInfo) {
    res.status(500).json({ msg: "no user info" });
    return;
  }

  const { emails, id, timeJoined } = userInfo;

  setTimeout(() => {
    res.status(200).json({ id, email: emails?.pop() || "", timeJoined, roles });
  }, 2000);
});

app.use(errorHandler());

server.listen(port, () => {
  console.debug(`🔥 API Started`);
  console.debug(`🔧 Port:${port}`);
});
