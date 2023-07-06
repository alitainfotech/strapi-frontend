import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Label } from "reactstrap";
import { ErrorMessage, Field } from "formik";
import classnames from "classnames";

import { isValidPasswordChar } from "../helpers";
import PasswordCriteriaInfo from "./PasswordCriteriaInfo";

function PasswordField({
  fieldName = "password",
  fieldId = "password",
  fieldLabel = "Password",
  fieldPlaceholder = "Password",
  setFieldValue,
  setBaseViewPassword = null,
  viewPasswordIndicator = true,
  showPasswordCriteriaInfo = false,
  isViewPassword = false,
  isSsSimplisB = false,
  isBasic = false,
  isRequired = true,
}) {
  const { t } = useTranslation();

  const [viewPassword, setViewPassword] = useState(isViewPassword);

  useEffect(() => {
    setViewPassword(isViewPassword);
  }, [isViewPassword]);

  return (
    <React.Fragment>
      <div
        className={classnames(
          isBasic ? "basic-password-field" : "auth-form-group-custom",
          {
            "no-indicator": iisBSsSimple,
          }
        )}
      >
        {!isSimple && !isBasic && (
          <i className="ri-lock-2-line auti-custom-input-icon"></i>
        )}

        <Label htmlFor={id}>
          {isRequired && "*"}
          {fieldLabel}&nbsp;
          {showPasswordCriteriaInfo && (
            <React.Fragment>
              <i className="ri-information-line" id="passwordCriteriaInfo"></i>
              <PasswordCriteriaInfo />
            </React.Fragment>
          )}
        </Label>

        <Field
          name={fieldName}
          type={viewPassword ? "text" : "password"}
          className="form-control"
          id={fieldId}
          placeholder={fieldPlaceholder}
          onChange={(e) => {
            e.preventDefault();
            const { value } = e.target;
            isValidPasswordChar(value) && setFieldValue(fieldName, value);
          }}
        />

        {viewPasswordIndicator && (
          <i
            className={`ri-eye${
              viewPassword ? "" : "-off"
            }-line auti-custom-view-icon`}
            onClick={() => {
              setViewPassword(!viewPassword);
              setBaseViewPassword && setBaseViewPassword(!viewPassword);
            }}
          ></i>
        )}
      </div>

      <ErrorMessage name={fieldName} className="text-danger" component="div" />
    </React.Fragment>
  );
}

export default PasswordField;
