import { ChipProps } from "@mui/material";

export interface IFAChip extends ChipProps {
  testID: `chip-${string}`;
  label?: string;
  avatar?:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | undefined;
  onDelete?: any;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  variant?: "filled" | "outlined";
}