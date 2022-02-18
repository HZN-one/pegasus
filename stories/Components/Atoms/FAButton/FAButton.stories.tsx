import React from "react";
import { withDesign } from "storybook-addon-designs";
import { Stack } from "@mui/material";
import { FAButton, FAIcon } from "@Atoms";
import LoadingButton from "@mui/lab/LoadingButton";
import { IButton } from "@Atoms/FAButton/Button.interface";

const story = {
  title: "Atom/Button",
  component: FAButton,
  argTypes: {
    testID: { control: "text" },
    children: { control: "text" },
  },
  args: {
    testID: "button-storybook",
    children: "Default",
  },
  decorators: [withDesign],
};

export default story;

export const Default = (props: IButton) => (
  <FAButton {...props}>{props.children}</FAButton>
);

export const Variant = (props: IButton) => (
  <Stack direction="row" spacing={2}>
    <FAButton {...props} variant="contained">
      Contained
    </FAButton>
    <FAButton {...props} variant="outlined">
      Outlined
    </FAButton>
    <FAButton {...props} variant="text">
      Text
    </FAButton>
  </Stack>
);

export const Size = (props: IButton) => (
  <Stack direction="row" spacing={2}>
    <FAButton {...props} size="small">
      Small
    </FAButton>
    <FAButton {...props} size="medium">
      Medium
    </FAButton>
    <FAButton {...props} size="large">
      Large
    </FAButton>
  </Stack>
);

export const Color = (props: IButton) => (
  <Stack direction="row" spacing={2}>
    <FAButton {...props} color="primary">
      Primary
    </FAButton>
    <FAButton {...props} color="secondary">
      Secondary
    </FAButton>
    <FAButton {...props} color="success">
      Success
    </FAButton>
    <FAButton {...props} color="info">
      Info
    </FAButton>
    <FAButton {...props} color="warning">
      Warning
    </FAButton>
    <FAButton {...props} color="error">
      Error
    </FAButton>
    <FAButton {...props} color="inherit">
      Inherit
    </FAButton>
  </Stack>
);

export const WithIcon = (props: IButton) => (
  <Stack direction="row" spacing={2}>
    <FAButton
      {...props}
      size="small"
      startIcon={<FAIcon testID="icon-arrow-forward">arrow_forward_ios</FAIcon>}
    >
      Start Icon
    </FAButton>
    <FAButton
      {...props}
      endIcon={<FAIcon testID="icon-arrow-forward">arrow_forward_ios</FAIcon>}
    >
      End Icon
    </FAButton>
  </Stack>
);

export const State = (props: IButton) => (
  <Stack direction="row" spacing={2}>
    <FAButton {...props} disabled>
      Disabled
    </FAButton>
    <LoadingButton
      loading
      loadingPosition="start"
      variant="contained"
      startIcon={<FAIcon testID="icon-save">save</FAIcon>}
    >
      Loading
    </LoadingButton>
  </Stack>
);

Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/q2CQUOtypaKMoDl1CLAann/Flex-Design-System?node-id=233%3A1965",
  },
};
