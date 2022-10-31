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
import { useApplicationDetailsAPI } from "../../api/grtApplicationDetailes";

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
  positionID:string
};

type AcadimecQualificationType = {
  institution: string;
  counrty: string;
  mager: string;
  degree: "Associate" | "Bachelor" | "Master" | "Doctoral" | "Professional";
};

export const UpdateForm = () => {

  const {state:{item}} = useLocation()
  
  const [data, errors, loading, updateApplication] = useCreateApplicationAPI();
  const [getData, getErrors, getLoading]=useApplicationDetailsAPI(item.applicationId)
  


  
  const onSubmit = async (
    values: ApplicationFormType,
    { setSubmitting }: { setSubmitting: (state: boolean) => void }
  ) => {
    try {
      setSubmitting(true);
      await updateApplication(values);
    } catch (e) {}
  };

  if (getLoading) {
    return <p>loading...</p>;
  }
  if (getErrors?.error !== null) {
    return <p>Error</p>;
  }



  return (
    <div style={{ padding: "3ch", flex: 1, display: "flex", flexWrap: "wrap" }}>
      <Formik
  
        onSubmit={onSubmit}
        initialValues={{
          firstName: getData?.firstName||'',
          lastName: getData?.lastName||"",
          nationality: getData?.nationality||"",
          email: getData?.email||"",
          dateOfBirth:getData?.email|| '',
          mobile:getData?.mobile|| "",
          gender: getData?.gender||"Male",
          qualifications: getData?.qualifications||[],
          linkedIn: getData?.linkedIn||"",
          cv: undefined,
          positionID:item.positionId,
          applicationId:item.applicationId

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
            <CVInfo />
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
                action={handleSubmit}
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
