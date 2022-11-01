import React from "react";
import { useCarearListAPI } from "../../api/crearesApi";
import {} from "../../api/typs";
import { Card } from "../../componenets/Card";
import { Header } from "../../componenets/Text/header";
import { useCreateApplicationAPI } from "../../api/creatApplicationApi";
import { Formik } from "formik";
import {} from "../../validations";
import { CVInfo } from "./cvInfo";
import { EducationInfo } from "./education";
import { PersonalInfo } from "./personalInfo";
import { SkilsInfo } from "./skilsInfo";
import { ApplicationFormSchema } from "../../validations";
import { Button } from "../../componenets/Button";
import { useLocation } from "react-router-dom";

export type ApplicationFormType = {
  firstName: string;
  lastName: string;
  nationality: string;
  email: string;
  dateOfBirth: string;
  mobile: string;
  gender: "Male" | "Female";
  qualifications: AcadimecQualificationType[];
  linkedIn: string;
  cv: any;
  positionID: string;
  applicationId?: string;
  withSubmit?: boolean;
};

type AcadimecQualificationType = {
  [x: string]: string | number | readonly string[] | undefined;
  institution: string;
  country: string;
  mager: string;
  degree: "Associate" | "Bachelor" | "Master" | "Doctoral" | "Professional";
};

export const CreateForm = () => {
  const [data, errors, loading, submitRusame] = useCreateApplicationAPI();
  const file = React.useRef(null);
  const withSubmit = React.useRef(false);
  const setFile = (newFile: any) => {
    file.current = newFile;
  };
  const {
    state: { item },
  } = useLocation();

  const onSubmit = async (
    values: ApplicationFormType,
    { setSubmitting }: { setSubmitting: (state: boolean) => void }
  ) => {
    try {
      let newValues = { ...values, withSubmit: withSubmit.current };
      if (typeof newValues.cv === "string" && file.current !== null) {
        console.log("inSubmit", file.current);
        newValues.cv = file.current;
      }

      setSubmitting(true);
      await submitRusame(newValues);
    } catch (e) {}
  };
  return (
    <div style={{ padding: "3ch", flex: 1, display: "flex", flexWrap: "wrap" }}>
      <Formik
        onSubmit={onSubmit}
        initialValues={{
          firstName: "",
          lastName: "",
          nationality: "",
          email: "",
          dateOfBirth: "",
          mobile: "",
          gender: "Male",
          qualifications: [],
          linkedIn: "",
          cv: undefined,
          positionID: item.positionId,
        }}
        validationSchema={ApplicationFormSchema}
      >
        {({ handleSubmit }) => (
          <form
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              paddingBottom: "20vh",
            }}
            onSubmit={handleSubmit}
          >
            <PersonalInfo />
            <EducationInfo />
            <CVInfo setFile={setFile} />
            <div
              style={{
                marginTop: "2vh",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                color="white"
                type={"Submit"}
                action={(e: React.FormEvent<HTMLFormElement>) => {
                  withSubmit.current = true;
                  handleSubmit(e);
                }}
                name="submit"
                label="Submit"
                style={{
                  width: "15ch",
                  height: "3vh",
                  alignItems: "center",
                  marginRight: "2ch",
                }}
              />
              <Button
                color="white"
                type={"Next"}
                action={handleSubmit}
                name="submit"
                label="Save"
                style={{ width: "15ch", height: "3vh", alignItems: "center" }}
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
