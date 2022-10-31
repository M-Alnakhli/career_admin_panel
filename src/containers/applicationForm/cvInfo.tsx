import React from "react";
import { FormikProps, useFormikContext, ErrorMessage, Field } from "formik";
import { Label } from "../../componenets/Text/label";
import { Selction } from "../../componenets/selction";
import { ApplicationFormType } from "./createForm";
import { ApplicationFormSchema } from "../../validations";
import { Card } from "../../componenets/Card";
import { Header } from "../../componenets/Text/header";
export const CVInfo = () => {
  const { values, handleBlur, handleChange }: FormikProps<ApplicationFormType> =
    useFormikContext();

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
              onChange={handleChange}
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
