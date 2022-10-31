import React from "react";
import type { SignUpAPIReqType, SignUpAPIResType } from "../api/typs";
import { apiCall } from "./";
import crypto from "crypto";
type Props = {};
export const useSignUpAPI = () => {
  let [apiData, setApiData] = React.useState<{
    errors: { error: any } | null;
    loading: boolean;
    data: null | SignUpAPIResType;
  }>({ errors: null, loading: true, data: null });

  const signUp = async (data: SignUpAPIReqType) => {
    let newData,
      newError = null;
    if (apiData.loading === false) {
      setApiData((pre) => ({ ...pre, loading: true }));
    }
    try {
      // const email = encrypt(data.email)
      // const pass = encrypt(data.password)

      const response: SignUpAPIResType = await apiCall("/register", "post", {
        data,
      });

      if (response?.status !== undefined) {
        newData = response;
      }
    } catch (e) {
      newError = e;
    }

    setApiData({
      errors: { error: newError },
      loading: false,
      data: newData as SignUpAPIResType,
    });
  };

  return [apiData.data, apiData.errors, apiData.loading, signUp] as const;
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
