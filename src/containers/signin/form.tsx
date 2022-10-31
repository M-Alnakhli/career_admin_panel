import { Formik } from "formik";
import React, { useEffect } from "react";
import { Button } from "../../componenets/Button";
import { Label } from "../../componenets/Text/label";
import { useLoginAPI } from "../../api/loginApi";
import { SignInSchema } from "../../validations";
import { AuthContextType, LogoutAPIResType } from "../../api/typs";
import {} from "../../";
import { AuthContext } from "../../routes";
import { useNavigate } from "react-router-dom";
type Props = {};
export const SignForm = (props: Props) => {
  const [data, errors, loading, login] = useLoginAPI();
  const authContext = React.useContext<AuthContextType>(AuthContext);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (data !== null) {
      if (data?.status === "sucess") {
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
    values: { email: string; password: string },
    { setSubmitting }: { setSubmitting: (state: boolean) => void }
  ) => {
    try {
      console.log("it comes here ");

      setSubmitting(true);
      await login({ email: values.email, password: values.password });
    } catch (e) {}
  };
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SignInSchema}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
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
                  marginBottom: "3px",
                  width: "30ch",
                  marginTop: "-60px",
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
              {errors.email && touched.email && errors.email && (
                <Label style={{ color: "red" }}>
                  {" "}
                  {errors.email && touched.email && errors.email}
                </Label>
              )}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
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
                {errors.password && touched.password && errors.password && (
                  <Label>
                    {" "}
                    {errors.password && touched.password && errors.password}
                  </Label>
                )}
              </div>

              <div></div>
              <div
                style={{
                  alignSelf: "center",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  marginTop: "20px",
                }}
              >
                <Label>
                  Do not have Account{" "}
                  {
                    <a href="" onClick={() => navigate("/signup")}>
                      Register
                    </a>
                  }
                </Label>
                <Button
                  buttonType={"submit"}
                  color="white"
                  type={"Next"}
                  action={handleSubmit}
                  name="register"
                  label="Login"
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
