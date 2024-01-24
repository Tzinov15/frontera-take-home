import { Form } from "antd";

interface Props {
  label: string;
  icon: string;
  name: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  defaultValue?: React.InputHTMLAttributes<HTMLInputElement>["defaultValue"];
}
export const InputLabel: React.FC<Props> = ({ icon, label, name, type, defaultValue }) => {
  return (
    <Form.Item<string>
      label={
        <h1 className="text-slate-500 font-bold text-md">
          <i className={`${icon} mr-1`} />
          {label}
        </h1>
      }
      name={name}
      rules={[{ required: true, message: `Please input your ${name}!` }]}
    >
      <input
        name={name}
        defaultValue={defaultValue}
        type={type}
        className="appearance-none text-white bg-slate-700 focus-visible:transition-all transition-all focus-visible:ring-transparent focus-visible:outline-slate-500 focus-visible:outline-1  w-full rounded-md text-md p-2"
      />
    </Form.Item>
  );
};
