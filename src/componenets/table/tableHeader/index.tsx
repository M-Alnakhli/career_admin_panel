import "./style";

type Props = {
  headers: Array<React.ReactNode>;
};
export const TableHeader = (props: Props) => {
  return (
    <tr>
      {props.headers.map((element: React.ReactNode, index: number) => (
        <th key={index}>{element}</th>
      ))}
    </tr>
  );
};
