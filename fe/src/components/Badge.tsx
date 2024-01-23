import React from "react";
interface Props {
  text: string;
  icon: string;
  className?: string;
}
export const Badge: React.FC<Props> = ({ text, icon, className }) => {
  return (
    <div className={`bg-slate-950 max-w-fit px-2 py-1 rounded-md ${className}`}>
      <i className={`${icon} mr-1`} />
      <span className="font-bold">{text.toLowerCase()}</span>
    </div>
  );
};
