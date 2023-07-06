import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { PopoverBody, PopoverHeader, UncontrolledPopover } from "reactstrap";

function PasswordCriteriaInfo() {
  const { t } = useTranslation();
  const { isRtlLayout } = useSelector((state) => state.Layout);

  return (
    <React.Fragment>
      <UncontrolledPopover
        placement="top"
        target="passwordCriteriaInfo"
        offset={[isRtlLayout ? -80 : 80, 10]}
        className="passCriteriaPopover"
        trigger="hover"
      >
        <PopoverHeader>
          {t("RESET_PASSWORD.PASS_CRITERIA_POPOVER.TITLE")}
        </PopoverHeader>
        <PopoverBody>
          <ul>
            <li>{t("RESET_PASSWORD.PASS_CRITERIA_POPOVER.CRITERIA.MIN5")}</li>
            <li>{t("RESET_PASSWORD.PASS_CRITERIA_POPOVER.CRITERIA.UPPER")}</li>
            <li>{t("RESET_PASSWORD.PASS_CRITERIA_POPOVER.CRITERIA.LOWER")}</li>
            <li>{t("RESET_PASSWORD.PASS_CRITERIA_POPOVER.CRITERIA.NUMBER")}</li>
            <li>
              {t("RESET_PASSWORD.PASS_CRITERIA_POPOVER.CRITERIA.SPECIAL")}
            </li>
          </ul>
        </PopoverBody>
      </UncontrolledPopover>
    </React.Fragment>
  );
}

export default PasswordCriteriaInfo;
