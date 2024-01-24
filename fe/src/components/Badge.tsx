import React from "react";
interface Props {
  text: string;
  icon: string;
  className?: string;
}
export const Badge: React.FC<Props> = ({ text, icon, className }) => {
  return (
    <div className={`max-w-fit px-2 py-1 rounded-md ${className}`}>
      <i className={`${icon} mr-1 text-md`} />
      <span className="font-bold">{text.toLowerCase()}</span>
    </div>
  );
};

export const CaretakerBadge = () => (
  <Badge
    text="therapist"
    icon="fas fa-star-of-life"
    className="text-green-300 bg-green-950 text-sm"
  />
);

export const ParentBadge = () => (
  <Badge
    text="parent"
    icon="fas fa-house-heart"
    className="text-indigo-300 bg-indigo-950 text-sm"
  />
);
