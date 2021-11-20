import React from "react";

interface ChildProps {
  color: String;
  onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

//React functional component
export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children
}) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
