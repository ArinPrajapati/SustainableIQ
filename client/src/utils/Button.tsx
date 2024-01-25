import React from "react";

interface Props {
  text: string;
  color: string;
  onClick?: () => void;
  extraClasses?: string;
}

const Button = (props: Props) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: props.color }}
      className={`px-8 py-3 font-semibold rounded    ${props.extraClasses}`}
    >
      {props.text}
    </button>
  );
};

export default Button;
