import React from "react";
import { FormikProps, useFormikContext, ErrorMessage, Field } from "formik";
import { Label } from "../../componenets/Text/label";
import { Selction } from "../../componenets/selction";
import { ApplicationFormType } from "./createForm";
import { ApplicationFormSchema } from "../../validations";
import { Card } from "../../componenets/Card";
import { Header } from "../../componenets/Text/header";
type Props = {
  setFile: (file: any) => void;
};
export const CVInfo = (props: Props) => {
  const {
    values,
    handleBlur,
    handleChange,
    setFieldValue,
  }: FormikProps<ApplicationFormType> = useFormikContext();

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
        Uploads
      </Header>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          height: "20vh",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 0,
          }}
        >
          <Label style={{ marginRight: "10px" }}>LinkedIn</Label>
          <div>
            <input
              style={{ height: "3vh" }}
              name="linkedIn"
              type={"url"}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.linkedIn}
            />
            <ErrorMessage name="linkedIn">
              {(errors: string) => (
                <Label style={{ color: "red" }}>{errors}</Label>
              )}
            </ErrorMessage>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "2ch",
            marginTop: 0,
          }}
        >
          <Label style={{ marginRight: "10px" }}>CV</Label>
          <div>
            <input
              style={{ height: "3vh" }}
              name="cv"
              type={"file"}
              onChange={(event) => {
                if (
                  !event.currentTarget.files ||
                  event.currentTarget.files.length === 0
                ) {
                  // you can display the error to the user
                  console.error("Select a file");
                  return;
                }
                console.log(event.currentTarget.files[0]);
                console.log(
                  "event.currentTarget.files[0].name",
                  event.currentTarget.files[0].name
                );

                props.setFile(event.currentTarget.files[0]);
                handleChange(event);
              }}
              onBlur={handleBlur}
              value={values.cv}
            />
            <ErrorMessage name="cv">
              {(errors: string) => (
                <Label style={{ color: "red" }}>{errors}</Label>
              )}
            </ErrorMessage>
          </div>
        </div>
      </div>
    </Card>
  );
};
