import { ApplicationListItem, ApplicationStatusType } from "../../api/typs";
import { useNavigate } from "react-router-dom";
import { Row } from "../../componenets/Row";
import { Label } from "../../componenets/Text/label";
import "./index.scss";
import React from "react";
import { ReactComponent as Edit } from "../../assets/icons/Edit.svg";
import { ReactComponent as Trash } from "../../assets/icons/Trash.svg";
import { useDeleteApplicationAPI } from "../../api/deleteAppliucation";
export type Props = {
  applicationItem: ApplicationListItem;
  refrech: () => void;
};
export const MyApplicationlistRow = (props: Props) => {
  const navigation = useNavigate();
  
  const [data, errors, loading, deleteApplication] = useDeleteApplicationAPI();
  const onClick = () => {
    navigation(`/applicationForm/${props.applicationItem.applicationId}`, {
      state: { item: { ...props } },
    });
  };
  const navigateToUpdateForm =()=>{
    navigation('/updateFormPage',{state:{item: { ...props }}})
  } 
  const statusColorRendarer = React.useCallback(
    (status: ApplicationStatusType): string => {
      switch (status) {
        case "Accepted":
          return "green";
        case "Completed":
          return "rgb(253,126,20)";
        case "Rejected":
          return "red";

        case "Created":
          return "grey";

        default:
          return "grey";
      }
    },
    []
  );
  return (
    <div className="listItem">
      <div className="listItemInfo">
        <div className="itemInfoRow">
          <Label style={{ fontFamily: "Exo-Medium", fontSize: "small" }}>
            {props.applicationItem.posistion}
          </Label>
          <Row label={"Location"} value={props.applicationItem.location} />
        </div>

        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              bottom: "0px",
              right: "5px",
              display: "flex",
            }}
          >
            {props.applicationItem.status === "Created" ? (
              <>
                <Edit
                onClick={navigateToUpdateForm}
                  style={{ marginRight: "10px" }}
                  width={"15px"}
                  height={"15px"}
                />
                <Trash
                  onClick={() =>
                    deleteApplication(
                      props.applicationItem.applicationId as string
                    )
                  }
                  width={"15px"}
                  height={"15px"}
                />
              </>
            ) : (
              <Label
                style={{
                  color: statusColorRendarer(
                    props.applicationItem.status as ApplicationStatusType
                  ),
                }}
              >
                {props.applicationItem.status}
              </Label>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
