import { Button, Form } from "antd";

import { useContext } from "react";
import { Badge } from "./components/Badge";
import { TokenAuthMutationVariables } from "./gql/graphql";
import { UserContext } from "./providers/UserProvider";

function Auth() {
  const { signin, token, signinStatus } = useContext(UserContext);

  const onFinish = (values: TokenAuthMutationVariables) => {
    const { password, username } = values;
    signin({ username, password });
  };

  const loading = signinStatus === "pending";
  const error = signinStatus === "error";

  return (
    <div className="container bg-slate-800 mx-auto h-screen px-4 py-10">
      <h1 className="text-slate-500 text-2xl text-center border-slate-700 border-b pb-2 mb-4">
        <i className="fas fa-browser mx-1" />
        <i className="fas fa-mobile-button mx-2" />
        Frontera Take Home
      </h1>
      <h2 className="text-slate-200 text-3xl text-center">Sign In </h2>

      <Form
        className="text-red-300"
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<string>
          className="text-red-300"
          label={<h1 className="text-slate-500 font-bold text-lg">Username</h1>}
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <input
            name="username"
            className="appearance-none text-white bg-slate-700 focus-visible:transition-all transition-all focus-visible:ring-transparent focus-visible:outline-slate-500 focus-visible:outline-1  w-full rounded-md text-md p-2"
          />
        </Form.Item>

        <Form.Item<string>
          label={<h1 className="text-slate-500 font-bold text-lg">Password</h1>}
          className="text-white"
          status="success"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <input
            name="password"
            type="password"
            className="appearance-none text-white bg-slate-700 focus-visible:bg-slate-700 focus-visible:transition-all transition-all focus-visible:ring-transparent focus-visible:outline-slate-500 focus-visible:outline-1  w-full rounded-md text-md p-2"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={
              loading ? "animate-pulse bg-blue-500 text-slate-900" : "bg-blue-500 text-slate-900"
            }
          >
            {loading ? "Signing in..." : "Sign in"}
          </Button>
        </Form.Item>
        {error ? (
          <Badge
            className="text-red-400 bg-red-950"
            icon="fas fa-triangle-exclamation"
            text="error signing in, try again"
          />
        ) : null}
        {loading ? (
          <Badge
            className="text-blue-400 bg-blue-950"
            icon="fas fa-spinner fa-spin"
            text="Loading"
          />
        ) : null}
        {token ? (
          <div className="flex items-center w-full justify-between animate-pulse">
            <Badge
              className="text-green-400 bg-green-950"
              icon="fas fa-check-circle"
              text="Login success, directing to dashboard..."
            />
          </div>
        ) : null}
      </Form>
    </div>
  );
}

export default Auth;
