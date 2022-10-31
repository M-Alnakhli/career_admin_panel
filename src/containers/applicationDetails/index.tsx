import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { Card } from "../../componenets/Card";
import { Header } from "../../componenets/Text/header";
import { ApplicationRow } from "../applications/applicationRow";
import { ApplicationListItem, ApplicationStatusType } from "../../api/typs";
type Props = {};
export const ApplicationDetails = (props: Props) => {
  const {
    state: { item },
  } = useLocation();

  const mappedItem: ApplicationListItem = item;
  return (
    <div style={{ padding: "3ch", flex: 1 }}>
      <Card
        style={{
          display: "flex",
          flex: 1,
          backgroundColor: "white",
          flexWrap: "wrap",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <Header style={{ alignSelf: "center" }} size={30}>
          {mappedItem.firstName} {mappedItem.lastName}
        </Header>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            backgroundColor: "white",
            flexWrap: "wrap",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <ApplicationRow
            applicantId={mappedItem.applicationId as string}
            position={mappedItem.posistion}
            location={mappedItem.location}
            lastName={mappedItem.lastName}
            firstName={mappedItem.firstName}
            linkedInURL={mappedItem.linkedInURL}
            applicationStatus={mappedItem.status as ApplicationStatusType}
            img={mappedItem.img as string}
          />
        </div>
      </Card>
    </div>
  );
};
