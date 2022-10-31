import { CSSProperties, ReactNode } from "react";
import "./index.scss";

type Props = {
  name?: string;
  style?: CSSProperties;
  children?: ReactNode | ReactNode[];
};

export const Label: React.FC<Props> = ({ name, style, children }) => {
  return (
    <p className="label" style={{ fontSize: 13, ...style }}>
      {children}
    </p>
  );
};

Label.defaultProps = {
  name: "label",
  children: "label",
  style: {},
};
