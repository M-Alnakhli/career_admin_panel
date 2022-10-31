import { ReactComponent as Logo } from "../../assets/icons/Logo.svg";
import { Header } from "../Text/header";
import "./index.scss";
export const TopBar = () => {
  return (
    <div className="mainContainer">
      <div className="header">
        <Logo fill="rgb(42,77,141)" height={30} width={30} />
        <Header size={20} style={{ color: "rgb(42,77,141)" }}>
          Carears
        </Header>
      </div>
    </div>
  );
};
