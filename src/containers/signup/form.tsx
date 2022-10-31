import { Formik } from "formik";
import React, { useEffect } from "react";
import { Button } from "../../componenets/Button";
import { Label } from "../../componenets/Text/label";

import { SignUpSchema } from "../../validations";
import { AuthContextType, SignUpAPIReqType } from "../../api/typs";
import {} from "../../";
import { AuthContext } from "../../routes";
import { useNavigate } from "react-router-dom";
import { useSignUpAPI } from "../../api/signUp";
type Props = {};
export const SignForm = (props: Props) => {
  const [data, errors, loading, signUp] = useSignUpAPI();
  const authContext = React.useContext<AuthContextType>(AuthContext);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (data !== null) {
      if (data.status === "sucess") {
        authContext.login({
          role: data.role !== undefined ? data.role : null,
          token: data.token !== undefined ? data.token : null,
        });
      } else {
        alert("User Not Found");
      }
    }
  }, [data]);
  const onSubmit = async (
    values: { email: string; password: string; userName: string },
    { setSubmitting }: { setSubmitting: (state: boolean) => void }
  ) => {
    try {
      setSubmitting(true);
      console.log("it comes here");

      signUp({
        email: values.email,
        password: values.password,
        userName: values.userName,
      } as SignUpAPIReqType);
    } catch (e) {}
  };
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "", userName: "" }}
        validationSchema={SignUpSchema}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
            onSubmit={handleSubmit}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                  width: "30ch",
                }}
              >
                <Label>User Name</Label>
                <input
                  type="userName"
                  name="userName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.userName}
                />
              </div>
              {errors.userName && touched.userName && errors.userName}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                  width: "30ch",
                }}
              >
                <Label>Email</Label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </div>
              {errors.email && touched.email && errors.email}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <Label>Passowrd</Label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
              </div>
              {errors.password && touched.password && errors.password}
              <div></div>
              <div
                style={{
                  alignSelf: "center",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  marginTop: "10px",
                }}
              >
                <Label>
                  have Account{" "}
                  {
                    <a href="" onClick={() => navigate("/")}>
                      Login
                    </a>
                  }
                </Label>
                <Button
                  color="white"
                  type={"Next"}
                  action={handleSubmit}
                  name="register"
                  label="Register"
                  style={{ width: "15ch", height: "3vh", alignItems: "center" }}
                />
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
