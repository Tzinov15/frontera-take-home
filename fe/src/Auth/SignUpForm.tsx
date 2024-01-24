import { Button, Form } from "antd";
import { useContext } from "react";
import { Badge } from "../components/Badge";
import { InputLabel } from "../components/InputLabel";
import { StudentSignupMutationVariables } from "../gql/graphql";
import { UserContext } from "../providers/UserProvider";

/* Use this to pre-fill the form for faster testing purposes */
const sampleFields: StudentSignupMutationVariables = {
  email: "student@signup-frontera.com",
  password: "password",
  firstname: "Student",
  lastname: "McStudent",
  pronounceChild: "McStudent",
  dob: "2024-01-23",
  zipCode: "12345",
  country: "Q291bnRyeVR5cGU6MTAz",
  gender: "male",
  parentFirstname: "ParentFirst",
  parentLastname: "ParentLast",
};

export const SignUpForm: React.FC = () => {
  const { signup, token, signupStatus } = useContext(UserContext);

  /* Used to get programmatic access to the form */
  const [form] = Form.useForm();

  const loading = signupStatus === "pending";
  const error = signupStatus === "error";

  const onSignupFinished = (values: StudentSignupMutationVariables) => {
    signup(values);
  };

  return (
    <Form
      form={form}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onFinish={onSignupFinished}
      autoComplete="off"
    >
      <div className="flex items-center w-full justify-around my-6">
        <Button
          className="text-white"
          type="dashed"
          onClick={() => {
            form.resetFields();
          }}
        >
          Clear Form
        </Button>
        <Button
          className="text-white"
          type="dashed"
          onClick={() => {
            form.setFieldsValue(sampleFields);
          }}
        >
          Fill Out With Test Data
        </Button>
      </div>
      <InputLabel name="email" icon="fas fa-envelope" label="Email" type="email" />
      <InputLabel name="password" icon="fas fa-key" label="Password" type="password" />
      <InputLabel name="firstname" icon="fas fa-tag" label="First Name" />
      <InputLabel name="lastname" icon="fas fa-tag" label="Last Name" />
      <InputLabel name="pronounceChild" icon="fas fa-microphone" label="Pronounce Child" />
      <InputLabel name="dob" icon="fas fa-calendar" label="Date of Birth" type="date" />
      <InputLabel name="zipCode" icon="fas fa-location-pin" label="Zip code" />
      <InputLabel name="gender" icon="fas fa-genderless" label="Gender" />
      <InputLabel name="country" icon="fas fa-flag" label="Country ID" />
      <InputLabel name="parentFirstname" icon="fas fa-person" label="Parent First Name" />
      <InputLabel name="parentLastname" icon="fas fa-person" label="Parent Last Name" />

      <div className="flex w-full items-center justify-start">
        <Form.Item className="mb-0">
          <Button
            type="primary"
            htmlType="submit"
            className={`${
              loading
                ? "animate-pulse bg-blue-500 text-slate-900"
                : token
                ? "bg-green-950 text-green-400"
                : "bg-blue-500 text-slate-900"
            } mr-2`}
          >
            {loading ? "Signing up..." : "Sign up"}
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
            text="loading"
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
      </div>
    </Form>
  );
};
