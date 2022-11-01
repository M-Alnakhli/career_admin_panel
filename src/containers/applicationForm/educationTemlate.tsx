import { FormikProps, useFormikContext, ErrorMessage, Field } from "formik";
import { Label } from "../../componenets/Text/label";
import { ReactComponent as Trash } from "../../assets/icons/Trash.svg";
import { ApplicationFormType } from "./createForm";
type Props = {
  arrayName: string;
  remove: (index: number) => void;
  push: (obj: any) => void;
  item: any;
  index: number;
};
export const EduacationFormTemplate = (props: Props) => {
  const {
    values,

    handleBlur,
    handleChange,
  }: FormikProps<ApplicationFormType> = useFormikContext();
  const options = [
    { label: "Associate", value: "Associate" },
    { label: "Bachelor", value: "Bachelor" },
    { label: "Master", value: "Master" },
    { label: "Doctoral", value: "Doctoral" },
    { label: "Professional", value: "Professional" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 0,
        }}
      >
        <Label style={{ marginRight: "10px" }}>Institution:</Label>
        <div>
          <input
            style={{ height: "3vh" }}
            name={`qualifications.${props.index}.institution`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.qualifications[props.index].institution}
          />
          <ErrorMessage name={`qualifications.${props.index}.institution`}>
            {(errors: string) => (
              <Label style={{ color: "red" }}>{errors}</Label>
            )}
          </ErrorMessage>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "2ch",
          marginTop: 0,
        }}
      >
        <Label style={{ marginRight: "10px" }}>Mager:</Label>
        <div>
          <Field
            style={{ height: "3vh" }}
            name={`qualifications.${props.index}.mager`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.qualifications[props.index].mager}
          />
          <ErrorMessage name={`qualifications.${props.index}.mager`}>
            {(errors: string) => (
              <Label style={{ color: "red" }}>{errors}</Label>
            )}
          </ErrorMessage>
        </div>
      </div>
      <div>
        <div style={{ display: "flex" }}>
          <Label style={{ marginRight: "10px" }}>Degree:</Label>
          <Field
            style={{ lineHeight: "0", height: "4vh" }}
            as="select"
            name={`qualifications.${props.index}.degree`}
          >
            {options.map((element, innerIndex) => (
              <option key={innerIndex} value={element.value}>
                <Label>{element.label}</Label>
              </option>
            ))}
          </Field>
        </div>
        <ErrorMessage name={`qualifications.${props.index}.degree`}>
          {(errors: string) => <Label style={{ color: "red" }}>{errors}</Label>}
        </ErrorMessage>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 0,
        }}
      >
        <Label style={{ marginRight: "10px" }}>Country:</Label>
        <div>
          <input
            style={{ height: "3vh" }}
            name={`qualifications.${props.index}.country`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.qualifications[props.index].country}
          />
          <ErrorMessage name={`qualifications.${props.index}.country`}>
            {(errors: string) => (
              <Label style={{ color: "red" }}>{errors}</Label>
            )}
          </ErrorMessage>
        </div>

        <Trash
          style={{ marginLeft: "5px", alignSelf: "center" }}
          fill="red"
          onClick={() => props.remove(props.index)}
          width={"15px"}
          height={"15px"}
        />
      </div>
    </div>
  );
};
