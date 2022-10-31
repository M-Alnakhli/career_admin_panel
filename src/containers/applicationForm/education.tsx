import React from "react";
import {
  FormikProps,
  useFormikContext,
  ErrorMessage,
  FieldArray,
  Field,
} from "formik";
import { Label } from "../../componenets/Text/label";
import { Selction } from "../../componenets/selction";
import { ApplicationFormType } from "./createForm";
import { ApplicationFormSchema } from "../../validations";
import { Card } from "../../componenets/Card";
import { Header } from "../../componenets/Text/header";
import { Button } from "../../componenets/Button";
import { ReactComponent as Trash } from "../../assets/icons/Trash.svg";
import { EduacationFormTemplate } from "./educationTemlate";
import {} from "./";
export const EducationInfo = () => {
  const { values }: FormikProps<ApplicationFormType> = useFormikContext();

  return (
    <Card
      style={{
        display: "flex",
        backgroundColor: "white",
        flexWrap: "wrap",
        paddingLeft: "20px",
        paddingRight: "20px",
        justifyContent: "space-around",
        marginTop: "2vh",
      }}
    >
      <Header style={{ marginBottom: "3vh", alignSelf: "start" }} size={30}>
        Academic Information
      </Header>
      <FieldArray name="qualifications">
        {({ remove, push }) => (
          <div style={{ paddingBottom: "2vh" }}>
            {values.qualifications.length > 0 &&
              values.qualifications.map((qualification, index) => (
                <EduacationFormTemplate
                  key={index}
                  index={index}
                  arrayName={"qualifications"}
                  remove={remove}
                  item={qualification}
                  push={push}
                />
              ))}
            <Button
              color="white"
              type={"Next"}
              action={() => {
                push({
                  institution: "",
                  degree: "Bachelor",
                  counrty: "",
                  mager: "",
                });
              }}
              name="apply"
              label="Add Qualification"
              style={{ width: "14ch", marginTop: "1vh" }}
            />
          </div>
        )}
      </FieldArray>
    </Card>
  );
};
