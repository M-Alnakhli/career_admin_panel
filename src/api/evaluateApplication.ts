import React from "react";
import type {
  ApplicationEvaluationAPIResType,
  ApplicationEvaluationAPIReqType,
  ApplicationStatusType,
} from "../api/typs";
import { apiCall } from "./";

type Props = { applicant: string; applicationStatus: ApplicationStatusType };
export const useEvaluateApplicationAPI = (props: Props) => {
  let [apiData, setApiData] = React.useState<{
    errors: { error: any } | null;
    loading: boolean;
    data: null | ApplicationEvaluationAPIResType;
  }>({ errors: null, loading: true, data: null });

  React.useEffect(() => {
    if (props.applicationStatus !== "Created") {
      evaluateApplication();
    }
  }, []);

  const evaluateApplication = async () => {
    let newData: ApplicationEvaluationAPIResType,
      newError: any = null;
    if (apiData.loading === false) {
      setApiData((pre) => ({ ...pre, loading: true }));
    }
    try {
      const response: ApplicationEvaluationAPIResType = await apiCall(
        "/evaluateApplication",
        "post",
        { data: { applicant: props.applicant } }
      );

      if (response?.score !== undefined) {
        newData = response;
      }
    } catch (e) {
      newError = e;
    }

    setApiData((pre) => ({
      data: newData,
      loading: false,
      errors: { error: newError || null },
    }));
  };

  return [apiData.data, apiData.errors, apiData.loading] as const;
};
