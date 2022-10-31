import React from "react";
import type { CarearListAPIResType, CareerListAPIReqType } from "../api/typs";
import { apiCall } from "./";
type Props = CareerListAPIReqType;
export const useCarearListAPI = (props: Props) => {
  const [apiData, setApiData] = React.useState<{
    errors: { error: any } | null;
    loading: boolean;
    data: null | CarearListAPIResType;
  }>({ errors: null, loading: true, data: null });

  React.useEffect(() => {
    getCarearsList();
  }, [
    props.offset,
    props.pageNumber,
    props.positionId,
    props.type,
    props.location,
  ]);

  const getCarearsList = async () => {
    let newData,
      newErros = null;
    let newLoading = true;
    if (apiData.loading === false) {
      setApiData((pre) => ({ ...pre, loading: true }));
    }
    try {
      const response: CarearListAPIResType = await apiCall(
        "/getCarears",
        "GET",
        { params: { ...props } }
      );
      newLoading = false;
      if (response?.carears.length !== undefined) {
        newData = response;
      }
    } catch (e) {
      newErros = { error: e };
    }

    setApiData({
      errors: newErros,
      loading: newLoading,
      data: newData as CarearListAPIResType,
    });
  };

  return [apiData.data, apiData.errors, apiData.loading] as const;
};
