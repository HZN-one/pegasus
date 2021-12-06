import React from "react";
import { FAPagination } from "Components/Atoms/FAPagination";
import { IFAPagination } from "Components/Atoms/FAPagination/FAPagination.interface";

const story = {
  title: "Pagination",
  component: FAPagination,
};

export default story;

export const Default = (props: IFAPagination) => (
  <>
    <FAPagination {...props} variant="text" />
    <FAPagination {...props} color="secondary" sx={{ marginTop: "3vh" }} />
    <FAPagination
      {...props}
      color="secondary"
      sx={{ marginTop: "3vh" }}
      disabled
    />
  </>
);

export const Outlined = (props: IFAPagination) => (
  <>
    <FAPagination {...props} variant="outlined" />
    <FAPagination
      {...props}
      variant="outlined"
      color="secondary"
      sx={{ marginTop: "3vh" }}
    />
    <FAPagination
      {...props}
      variant="outlined"
      color="secondary"
      sx={{ marginTop: "3vh" }}
      disabled
    />
  </>
);
