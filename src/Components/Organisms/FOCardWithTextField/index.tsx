import React, { memo } from "react";
import { Box } from "@mui/material";

import { FATypography, FAButton } from "@Atoms";
import { FMCard } from "@Molecules/FMCard";

import { IFOCardWithTextFieldProps } from "./FOCardWithTextField.interface";

export const FOCardWithTextField = memo((props: IFOCardWithTextFieldProps) => {
  const {
    testID,
    onSubmit,
    form,
    subheader,
    title,
    buttonSubmitLabel,
    buttonSubmitState,
    noValidate,
    actionStartAdornment,
    actionEndAdornment,
  } = props;
  return (
    <FMCard
      testID={testID}
      header={{
        title: (
          <FATypography
            testID="typography-card-textfield-title"
            component="h1"
            variant="h3"
          >
            {title}
          </FATypography>
        ),
        subheader: (
          <FATypography
            testID="typography-card-textfield-subheader"
            color="textSecondary"
            component="h2"
            variant="body1"
            sx={{ mt: 1 }}
          >
            {subheader}
          </FATypography>
        ),
        disableTypography: true,
      }}
    >
      <form onSubmit={onSubmit} noValidate={noValidate}>
        <Box sx={{ mt: 1, mb: 4 }}>{form}</Box>
        {actionStartAdornment}
        <FAButton
          testID="button-submit"
          color="primary"
          variant="contained"
          type="submit"
          fullWidth
          {...buttonSubmitState}
        >
          {buttonSubmitLabel}
        </FAButton>
        {actionEndAdornment}
      </form>
    </FMCard>
  );
});

FOCardWithTextField.displayName = "FOCardWithTextField";
