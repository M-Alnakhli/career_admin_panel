import React from "react";
import type {
  ApplicationCreateAPIResType,
  ApplicationConfigration,
} from "../api/typs";
import { ApplicationFormType } from "../containers/applicationForm/createForm";
import { apiCall } from "./";

type Props = {
  applicationInfo: ApplicationConfigration;
};
export const useCreateApplicationAPI = () => {
  let [apiData, setApiData] = React.useState<{
    errors: { error: any } | null;
    loading: boolean;
    data: null | any;
  }>({ errors: null, loading: true, data: null });

  const submitRusame = async (applicationInfo: ApplicationFormType) => {
    let newErros,
      newData = null;

    try {
      let formData = new FormData();

      let otherData= requestFormatter(applicationInfo)


      formData.append(
        "qualifications",
        JSON.stringify(applicationInfo.qualifications)
      );
      formData.append("otherData", JSON.stringify(otherData));
        console.log('here is cv',applicationInfo.cv);
        
      formData.append('file',applicationInfo.cv)
      let headers: any = { "content-type": "multipart/form-data" };
        console.log('here is the data fromate',Object.fromEntries(formData));
        
      const response: ApplicationCreateAPIResType = await apiCall(
        "/createApplication",
        "post",
        { data: formData, header: headers }
      );
      if (response?.applicationId !== undefined) {
        newData = response;
      }
    } catch (e) {
      console.log(e);

      newErros = e;
    }

    setApiData({ loading: false, data: newData, errors: { error: newErros } });
  };

  return [apiData.data, apiData.errors, apiData.loading, submitRusame];
};




const requestFormatter=(applicationInfo: ApplicationFormType)=>{

  let otherData: any = {
    firstName: applicationInfo.firstName,
    lastName: applicationInfo.lastName,
    nationality: applicationInfo.nationality,
    email: applicationInfo.email,
    dateOfBirth: applicationInfo.dateOfBirth,
    mobile: applicationInfo.mobile,
    gender: applicationInfo.gender,
    linkedIn: applicationInfo.linkedIn,
    positionID: applicationInfo.positionID,
    withSubmit:applicationInfo.withSubmit,

  };

  //check if application do exist include it ;
  if (applicationInfo.applicationId !== undefined) {
    otherData.applicationId = applicationInfo.applicationId;
  }
  return otherData
}