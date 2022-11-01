import React from "react";
import type { SignInAPIReqType, SignInAPIResType } from "../api/typs";
import { apiCall } from "./";
import crypto from "crypto";

export const useLoginAPI = () => {
  let [apiData, setApiData] = React.useState<{
    errors: { error: any } | null;
    loading: boolean;
    data: null | SignInAPIResType;
  }>({ errors: null, loading: true, data: null });

  const login = async (data: SignInAPIReqType) => {


    let newData,
      newError = null;
    if (apiData.loading === false) {
      setApiData((pre) => ({ ...pre, loading: true }));
    }
    try {
      /* enycrpt Paasscode library issue
         const email = encrypt(data.email)
         const pass = encrypt(data.email)
         */
      const response: SignInAPIResType = await apiCall("/login", "post", {
        data,
      });
    

      if (response?.status !== undefined) {
        newData = response;
      }
    } catch (e) {
      console.log(e);

      newError = e;
    }

    setApiData({
      errors: { error: newError },
      loading: false,
      data: newData as SignInAPIResType,
    });
  };

  return [apiData.data, apiData.errors, apiData.loading, login] as const;
};

const KEY = process.env.ENCRYPTION_KEY;

export const encrypt = (data: string) => {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(
    "aes-256-cbc",
    Buffer.from(KEY as string, "hex"),
    iv
  );
  return Buffer.concat([cipher.update(data), cipher.final(), iv]).toString(
    "hex"
  );
};
