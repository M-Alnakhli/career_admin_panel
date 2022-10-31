import React from "react";
import type {
  ApplicationUpdateAPIResType,
  ApplicationUpdateAPIReqType,
} from "../api/typs";
import { apiCall } from "./";

export const useUpdateApplicationAPI = () => {
  let [apiData, setApiData] = React.useState<{
    errors: { error: any } | null;
    loading: boolean;
    data: null | any;
  }>({ errors: null, loading: true, data: null });

  const updateApplication = async (application: any) => {
    let newData,
      newError = null;
    try {
      const response: ApplicationUpdateAPIResType = await apiCall(
        "/updateApplication",
        "post",
        { data: application }
      );

      if (response?.status !== undefined) {
        newData = response;
      }
    } catch (e) {
      newError = e;
    }
    setApiData({ errors: { error: newError }, loading: true, data: newData });
  };

  return [apiData.data, apiData.errors, apiData.loading, updateApplication];
};
