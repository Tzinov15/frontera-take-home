import { Button, Form } from "antd";
import { useContext } from "react";
import { Badge } from "../components/Badge";
import { InputLabel } from "../components/InputLabel";
import { TokenAuthMutationVariables } from "../gql/graphql";
import { UserContext } from "../providers/UserProvider";

export const SignInForm: React.FC = () => {
  const { signin, token, signinStatus } = useContext(UserContext);

  const loading = signinStatus === "pending";
  const error = signinStatus === "error";

  const onSigninFinished = (values: TokenAuthMutationVariables) => {
    const { password, username } = values;
    signin({ username, password });
  };
  return (
    <Form
      className="text-red-300"
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onSigninFinished}
      autoComplete="off"
    >
      <InputLabel name="username" icon="fas fa-input-text" label="Username" type="email" />
      <InputLabel name="password" icon="fas fa-lock" label="Password" type="password" />

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
        <Badge className="text-blue-400 bg-blue-950" icon="fas fa-spinner fa-spin" text="loading" />
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
  );
};
