import { ReactComponent as Edit } from "../../assets/icons/Edit.svg";
type Props = {
  name: string;
  color: string;
  size: number;
  style?: any;
};
export const Icon = (props: Props) => {
  switch (props.name) {
    case "Edit":
      return (
        <Edit
          fill={props.color}
          style={{ ...props.style }}
          width={props.size}
          height={props.size}
        />
      );

    default:
      return (
        <Edit width={props.size} height={props.size} color={props.color} />
      );
  }
};

Icon.defaultProps = {
  name: "Edit",
  size: 20,
  color: "green",
  style: {},
};
