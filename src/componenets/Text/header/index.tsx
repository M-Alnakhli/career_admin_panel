import React, { ReactNode } from "react";
import "./index.scss";
type Props = {
  style?: React.CSSProperties;
  size: number;
  children?: ReactNode;
};
export const Header: React.FC<Props> = ({ style, size, children }) => {
  return (
    <h1 className="header" style={{ fontSize: size, padding: 0, ...style }}>
      {children}
    </h1>
  );
};

Header.defaultProps = {
  style: {},
  size: 30,
  children: "def",
};
