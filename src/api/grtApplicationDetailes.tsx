import React from "react";
import type {
  ApplicationListAPIResType,
  ApplicationListAPIReqType,
} from "../api/typs";
import { ApplicationFormType } from "../containers/applicationForm/createForm";
import { apiCall } from "./";

type Props = { applicationId: string };
export const useApplicationDetailsAPI = (props: Props) => {
  const [apiData, setApiData] = React.useState<{
    errors: { error: any } | null;
    loading: boolean;
    data: null | ApplicationFormType;
  }>({ errors: null, loading: true, data: null });

  React.useEffect(() => {
    getApplicationDetails();
  }, []);

  const getApplicationDetails = async () => {
    let newError: any,
      newData: ApplicationFormType | null = null;
    let newLoading = true;
    if (apiData.loading === false) {
      setApiData((pre) => ({ ...pre, loading: true }));
    }
    try {
      const response: ApplicationFormType = await apiCall(
        "/getApplicationDetails",
        "GET",
        { params: { applicationId: props.applicationId } }
      );
      newLoading = false;

      if (response !== undefined) {
        newData = response;
      }
    } catch (e) {
      console.log(e);

      newError = e;
    }

    setApiData((pre) => ({
      data: newData,
      loading: newLoading,
      errors: { error: newError || null },
    }));
  };

  return [apiData.data, apiData.errors, apiData.loading] as const;
};
