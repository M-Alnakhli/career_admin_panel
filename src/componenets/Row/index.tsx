import { ReactNode } from "react";
import { Label } from "../Text/label";
import "./index.scss";
type RowTypes = {
  label: ReactNode;
  value: ReactNode;
};
export const Row = (props: RowTypes) => {
  return (
    <div className="tableRow">
      <Label
        style={{
          color: "rgb(158,156,156)",
          fontFamily: "Exo-Medium",
          fontSize: "smaller",
          marginRight: "5px",
        }}
      >{`${props.label}:`}</Label>

      <Label style={{ fontFamily: "Exo-Medium", fontSize: "small" }}>
        {props.value}
      </Label>
    </div>
  );
};
