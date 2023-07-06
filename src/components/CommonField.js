import React from "react";
import { Label } from "reactstrap";
import { ErrorMessage, Field } from "formik";

function CommonField({
  fieldName = "",
  fieldType = "text",
  fieldId = fieldName,
  fieldLabel = "",
  fieldPlaceholder = "",
  isRequired = false,
  isDisabled = false,
  ...rest
}) {
  return (
    <React.Fragment>
      <div className="">
        <Label htmlFor={fieldId}>
          {isRequired ? "*" : ""}
          {fieldLabel}
        </Label>

        <Field
          name={fieldName}
          type={fieldType}
          id={fieldId}
          className="form-control"
          placeholder={fieldPlaceholder}
          disabled={isDisabled}
          {...rest}
        />
      </div>

      <ErrorMessage name={fieldName} className="text-danger" component="div" />
    </React.Fragment>
  );
}

export default CommonField;
