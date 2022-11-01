import "./index.scss";
import React, { CSSProperties } from "react";

type Props = {
  name: string;
  action: (...args: any[]) => void;
  color: string;
  icon?: () => React.ReactNode;
  label?: string;
  type?: "Submit" | "Cancel" | "Next";
  style: CSSProperties;
  buttonType: "submit" | "reset" | "button";
};

export const Button = (props: Props) => {
  const buttonColorRenderer = () => {
    switch (props.type) {
      case "Cancel":
        return "rgb(233,100,100)";
      case "Submit":
        return "rgb(65,196,105)";
      default:
        return "rgb(37,41,136)";
    }
  };

  return (
    <button
      type={props.buttonType}
      className="button"
      data-testid={"button"}
      style={{
        background: buttonColorRenderer(),
        borderWidth: 0,
        padding: "5px",
        borderRadius: "5px",
        justifyContent: "center",
        ...props.style,
      }}
      onClick={props.action}
    >
      {props.icon !== undefined && props.icon()}
      {props.label}
    </button>
  );
};

Button.defaultProps = {
  style: {},
  buttonType: "button",
};
