import { createTheme, experimental_sx as sx } from "@mui/material/styles";
import type {} from "@mui/lab/themeAugmentation";

declare module "@mui/material/styles" {
  interface Palette {
    bluegrey: Palette["grey"];
  }
  // allow configuration using `createTheme`
  interface PaletteOptions {
    bluegrey?: PaletteOptions["grey"];
  }
  interface TypographyVariants {
    subtitle: React.CSSProperties;
    subtitleBold: React.CSSProperties;
    bodySemiBold1: React.CSSProperties;
    bodySemiBold2: React.CSSProperties;
    buttonBold1: React.CSSProperties;
    buttonBold2: React.CSSProperties;
    buttonSemiBold: React.CSSProperties;
    captionSemiBold: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    subtitle: React.CSSProperties;
    subtitleBold: React.CSSProperties;
    bodySemiBold1: React.CSSProperties;
    bodySemiBold2: React.CSSProperties;
    buttonBold1: React.CSSProperties;
    buttonBold2: React.CSSProperties;
    buttonSemiBold: React.CSSProperties;
    captionSemiBold?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    subtitle: true;
    subtitleBold: true;
    bodySemiBold1: true;
    bodySemiBold2: true;
    buttonBold1: true;
    buttonBold2: true;
    buttonSemiBold: true;
    captionSemiBold: true;
  }
}

// Create a theme instance.
export const baseTheme = createTheme({
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: sx({
          p: 3,
          mb: 3,
          "&.Mui-expanded": {
            ":last-of-type": {
              mb: 3,
            },
          },
        }),
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        content: sx({
          m: 0,
        }),
        root: sx({
          m: 0,
          p: 0,
          minHeight: 0,
        }),
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: sx({
          m: 0,
          p: 0,
          minHeight: 0,
        }),
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0px 1px 0px 0px #E0E0E0",
          borderRadius: 0,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: sx({
          p: 3,
        }),
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        sizeLarge: sx({
          px: 2,
          py: 1,
          borderRadius: "50%",
          typography: "bodySemiBold1",
        }),
        sizeSmall: sx({
          py: 0.6875,
          px: 1.5625,
          height: "100%",
          borderRadius: "50%",
          typography: "bodySemiBold2",
        }),
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: "contained",
      },
      styleOverrides: {
        outlined: {
          border: "none",
          outline: "1px solid",
          "&:hover": {
            border: "none",
          },
        },
        root: sx({
          textTransform: "none",
          lineHeight: 1,
          letterSpacing: 0.2,
          borderRadius: 2,
          height: "100%",
        }),
        sizeSmall: sx({
          px: 1.25,
          py: 1.25,
          typography: "buttonSemiBold",
        }),
        sizeMedium: sx({
          px: 2,
          py: 1.75,
          typography: "buttonBold2",
        }),
        sizeLarge: sx({
          px: 2.25,
          py: 2,
          typography: "buttonBold1",
        }),
        iconSizeSmall: sx({
          "& > *:first-of-type": {
            typography: "buttonSemiBold",
          },
        }),
        iconSizeMedium: sx({
          "& > *:first-of-type": {
            typography: "buttonBold2",
          },
        }),
        iconSizeLarge: sx({
          "& > *:first-of-type": {
            typography: "buttonBold1",
          },
        }),
        outlinedSecondary: sx({
          color: "text.primary",
          borderColor: "text.primary",
        }),
        textSecondary: sx({
          color: "text.primary",
        }),
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&.MuiInput-root.Mui-disabled": {
            ":before": {
              borderBottomStyle: "solid",
            },
          },
          "& > label > span": {
            color: "red",
          },
          "& > label": {
            color: "#221F20",
            fontWeight: 600,
            letterSpacing: "0.2px",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        sizeSmall: sx({
          input: {
            py: 1.75,
          },
          fontSize: "14px",
          lineHeight: "20px",
        }),
        root: sx({
          borderRadius: "8px",
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "secondary.main",
            borderWidth: "1px",
          },
        }),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        sizeSmall: {
          lineHeight: "19.2px",
          top: "4px",
          "&.Mui-focused": {
            top: 0,
          },
          "&.MuiInputLabel-shrink": {
            top: 0,
          },
          "&.MuiFormLabel-filled": {
            top: 0,
          },
        },
        standard: sx({
          typography: "bodySemiBold1",
          lineHeight: "19.2px",
          color: "#221F20",
          top: "4px",
          "&.Mui-error": {
            color: "inherit",
          },
          "&.Mui-disabled": {
            color: "text.secondary",
          },
          "&.Mui-focused": {
            top: 0,
            color: "inherit",
          },
          "&.MuiInputLabel-shrink": {
            top: 0,
          },
          "&.MuiFormLabel-filled": {
            top: 0,
          },
        }),
        outlined: sx({
          "&.MuiInputLabel-sizeSmall": {
            top: "2px",
          },
          "&.Mui-focused": {
            color: "inherit",
          },
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: sx({
          padding: 3,
        }),
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: sx({
          "&.MuiSelect-iconStandard": {
            top: 0,
            color: "text.primary",
          },
          "&.MuiSelect-iconOutlined": {
            color: "text.primary",
          },
        }),
      },
    },
    MuiIcon: {
      defaultProps: {
        baseClassName: "material-icons-outlined",
      },
    },
    MuiInput: {
      styleOverrides: {
        input: {
          fontSize: "14px",
          padding: 0,
        },
        root: sx({
          "&.MuiInput-underline": {
            marginTop: "21px",
            marginBottom: "3px",
            ":before": {
              borderBottomColor: "grey.300",
            },
            "&.Mui-error": {
              ":after": {
                borderBottom: "none",
              },
            },
            "&.Mui-focused": {
              ":after": {
                borderBottom: "2px solid #221F20",
              },
            },
            "& .MuiInputBase-input": {
              paddingBottom: "12px",
            },
          },
        }),
      },
    },
    MuiCheckbox: {
      defaultProps: {
        size: "small",
      },
      styleOverrides: {
        root: {
          py: 0,
        },
      },
    },
    MuiRadio: {
      defaultProps: {
        size: "small",
      },
      styleOverrides: {
        root: {
          height: "40px",
          width: "40px",
        },
      },
    },
    MuiSwitch: {
      defaultProps: {
        size: "small",
      },
    },
    MuiChip: {
      defaultProps: {
        size: "small",
      },
      styleOverrides: {
        outlined: {
          "&.MuiChip-colorDefault": {
            "& .MuiChip-label": {
              color: "#221F20",
            },
            "& .MuiChip-deleteIconColorDefault": {
              color: "#D4D4D4",
            },
          },
          "&.MuiChip-colorPrimary": {
            "& .MuiChip-label": {
              color: "#DC3931",
            },
          },
          "&.MuiChip-colorSecondary": {
            "& .MuiChip-label": {
              color: "#525252",
            },
          },
          "&  .MuiAvatar-root.MuiChip-avatarColorError": {
            color: "#FFFFFF",
            background: "#F43F5E",
          },
          "& .MuiAvatar-root.MuiChip-avatarColorWarning": {
            background: "#F59E0B",
            color: "#FFFFFF",
          },
          "& .MuiAvatar-root.MuiChip-avatarColorInfo": {
            background: "#3B82F6",
            color: "#FFFFFF",
          },
          "& .MuiAvatar-root.MuiChip-avatarColorSuccess": {
            background: "#22C55E",
            color: "#FFFFFF",
          },
        },
        filled: {
          "&.MuiChip-colorDefault": {
            background: "#E5E5E5",
            "& .MuiChip-label": {
              color: "#221F20",
            },
            "& .MuiChip-deleteIconColorDefault": {
              color: "#A3A3A3",
            },
            "& .MuiAvatar-root.MuiChip-avatarColorDefault": {
              background: "#A3A3A3",
            },
          },
          "&.MuiChip-colorError ": {
            background: "#FB7185",
            "& .MuiAvatar-root.MuiChip-avatarColorError": {
              color: "#FFFFFF",
              background: "#F43F5E",
            },
          },
          "&.MuiChip-colorWarning ": {
            background: "#FBBF24",
            "& .MuiAvatar-root.MuiChip-avatarColorWarning": {
              background: "#F59E0B",
              color: "#FFFFFF",
            },
            "& .MuiChip-deleteIconColorWarning": {
              color: "#FFFFFF",
            },
            "& .MuiChip-label": {
              color: "#FFFFFF",
            },
          },
          "&.MuiChip-colorInfo": {
            background: "#629BF8",
            "& .MuiAvatar-root.MuiChip-avatarColorInfo": {
              background: "#3B82F6",
              color: "#FFFFFF",
            },
            "& .MuiChip-deleteIconColorWarning": {
              color: "#FFFFFF",
            },
          },
          "&.MuiChip-colorSuccess": {
            background: "#4ED17E",
            "& .MuiAvatar-root.MuiChip-avatarColorSuccess": {
              background: "#22C55E",
              color: "#FFFFFF",
            },
            "& .MuiChip-deleteIconColorSuccess": {
              color: "#FFFFFF",
            },
            "& .MuiChip-label": {
              color: "#FFFFFF",
            },
          },
        },
        root: {
          padding: "4px 8px",
          height: "auto",
        },
        avatar: sx({
          typography: "caption",
          marginRight: "8px",
          marginLeft: 0,
        }),
        label: sx({
          p: 0,
          m: 0,
        }),
        deleteIcon: sx({
          margin: 0,
        }),
        labelMedium: sx({
          typography: "body1",
        }),
        deleteIconMedium: sx({
          marginLeft: "10px",
        }),
        labelSmall: sx({
          typography: "body2",
        }),
        deleteIconSmall: sx({
          marginLeft: "8px",
        }),
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: sx({
          backgroundColor: "#D4D4D4",
          color: "#221F20",
          fontSize: "12px",
          fontWeight: "400",
          lineHeight: "19.2px",
        }),
        arrow: sx({
          color: "#D4D4D4",
        }),
      },
    },
    MuiTextField: {
      defaultProps: {
        InputLabelProps: { shrink: true },
        margin: "normal",
        SelectProps: {
          displayEmpty: true,
        },
      },
      styleOverrides: {
        root: sx({
          "&.flex-textfield-placeholder": {
            "& .MuiSelect-select": {
              color: "text.secondary",
            },
          },
          input: {
            "&::placeholder": {
              color: "text.secondary",
              opacity: 1,
            },
          },
        }),
      },
    },
    MuiSelect: {
      styleOverrides: {
        outlined: sx({
          "&.MuiInputBase-inputSizeSmall": {
            py: 1.75,
          },
        }),
        standard: sx({
          height: "20.125px",
          "&.MuiSelect-multiple": {
            height: "auto",
          },
        }),
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        standard: {
          marginBottom: "12px",
          "& .material-icons": {
            fontSize: "20px",
          },
          "& .MuiTypography-root": {
            fontSize: "14px",
            lineHeight: "15px",
          },
        },
        outlined: {
          "&.MuiInputAdornment-outlined.MuiInputAdornment-sizeSmall": {
            "& .material-icons": {
              fontSize: "20px",
            },
            "& .MuiTypography-root": {
              fontSize: "14px",
              lineHeight: "15px",
            },
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        contained: {
          lineHeight: "20px",
          margin: 0,
        },
        root: {
          lineHeight: "19.2px",
          marginTop: "8px",
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: ({ ownerState }) => ({
          ...(ownerState.control.props.size === "small" && {
            fontSize: "0.875rem",
          }),
        }),
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          "& > label > span": {
            color: "red",
          },
          ".MuiSelect-nativeInput": {
            border: "1px solid red",
            color: "red",
          },
        },
        marginNormal: sx({
          mt: 0,
          mb: 1.875,
        }),
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: sx({
          flexShrink: 0,
          width: 250,
          "& .MuiCollapse-wrapperInner": {
            "& .MuiList-root": {
              ml: 3.5,
            },
          },
          "& .MuiList-padding": {
            px: 2,
          },
          "& .MuiListItemButton-root": {
            borderRadius: 2,
            mb: 1,
            color: "secondary.main",
            typography: "body2",
            "&.Mui-selected": {
              backgroundColor: "#FBEBEA",
              color: "primary.main",
              fontWeight: 600,
            },
          },
          "& .MuiListItemIcon-root": {
            minWidth: 28,
            color: "inherit",
          },
          "& .MuiListItemText-root": {
            my: 0.25,
          },
          "& .MuiListItemText-primary": {
            font: "inherit",
          },
          "& .MuiListSubheader-root": {
            typography: "subtitle",
            mb: 2,
            px: 1,
            py: 3,
            display: "flex",
          },
        }),
        paper: sx({
          borderRadius: 0,
          width: 250,
        }),
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: sx({
          borderRadius: 2,
          "&.flex-paper-0": {
            p: 0,
          },
          "&.flex-paper-1": {
            p: 1,
          },
          "&.flex-paper-2": {
            p: 2,
          },
        }),
      },
    },
    MuiStepConnector: {
      styleOverrides: {
        line: sx({
          borderColor: "grey.300",
        }),
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          height: 32,
          width: 32,
          color: "transparent",
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: sx({
          typography: "body2",
          "&.Mui-active": {
            typography: "bodySemiBold2",
          },
        }),
        iconContainer: sx({
          mr: 1,
          pr: 0,
          height: 32,
          width: 32,
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid",
          borderRadius: "50%",
          borderColor: "grey.300",
          text: {
            fill: "#221F20",
          },
          "& .Mui-active": {
            borderColor: "primary.main",
            text: {
              fill: "#FFFFFF",
              fontWeight: 600,
            },
          },
        }),
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          tableLayout: "fixed",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: sx({
          borderBottom: "1px solid",
          borderColor: "divider",
        }),
        head: sx({
          typography: "bodySemiBold2",
        }),
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          borderBottom: "none",
        },
      },
    },
    MuiTimelineConnector: {
      styleOverrides: {
        root: sx({
          position: "absolute",
          top: "calc(50% + 11.5px)",
          height: "calc(50% - 5.75px)",
          backgroundColor: "transparent",
          border: "1px dashed",
          borderColor: "divider",
        }),
      },
    },
    MuiTimelineDot: {
      styleOverrides: {
        root: sx({
          px: 0,
          mx: 0,
          border: "none",
        }),
      },
    },
    MuiTimelineItem: {
      styleOverrides: {
        root: sx({
          "&::before": {
            flex: "none",
            p: 0,
          },
        }),
      },
    },
  },
  mixins: {
    toolbar: {
      minHeight: 80,
      "@media (min-width:600px)": {
        minHeight: 80,
      },
    },
  },
  shadows: [
    "none",
    "0px 0px 16px rgba(0, 0, 0, 0.1)",
    "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)",
    "0px -2px 8px 1px rgba(0, 0, 0, 0.16)",
    "0px 2px 8px 1px rgba(0, 0, 0, 0.16)",
    "0px 2px 8px rgba(0, 0, 0, 0.16)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
    "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
    "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
    "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
    "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
    "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
    "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
    "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
    "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
    "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
    "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
    "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
    "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
    "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
  ],
  spacing: 8,
  typography: {
    fontFamily: ['"Inter"', "sans-serif"].join(","),
    htmlFontSize: 16,
    fontSize: 14,
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      lineHeight: 1,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: 1,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 700,
      lineHeight: 1,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 700,
      lineHeight: 1,
    },
    h6: {
      fontSize: "1.125rem",
      fontWeight: 700,
      lineHeight: 1,
    },
    subtitle: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1,
    },
    subtitleBold: {
      fontSize: "1rem",
      fontWeight: 700,
      lineHeight: 1,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "24px",
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: "21px",
    },
    bodySemiBold1: {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: "24px",
    },
    bodySemiBold2: {
      fontSize: "0.875rem",
      fontWeight: 600,
      lineHeight: "21px",
    },
    buttonBold1: {
      fontSize: "1.125rem",
      fontWeight: 700,
      lineHeight: 1,
    },
    buttonBold2: {
      fontSize: "1rem",
      fontWeight: 700,
      lineHeight: 1,
    },
    buttonSemiBold: {
      fontSize: "0.875rem",
      fontWeight: 600,
      lineHeight: 1,
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: "19.2px",
    },
    captionSemiBold: {
      fontSize: "0.75rem",
      fontWeight: 600,
      lineHeight: "19.2px",
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 700,
      lineHeight: 1,
    },
  },
  palette: {
    background: {
      default: "#F1F5F9",
    },
    common: {
      black: "#000",
      white: "#fff",
    },
    divider: "#E0E0E0",
    primary: {
      main: "#DC3931",
      dark: "#B02E27",
      light: "#E3615A",
    },
    secondary: {
      main: "#525252",
      dark: "#262626",
      light: "#737373",
    },
    info: {
      main: "#3B82F6",
      dark: "#1D4ED8",
      light: "#629BF8",
    },
    error: {
      main: "#F43F5E",
      dark: "#BE123C",
      light: "#9CC0FA",
    },
    warning: {
      main: "#F59E0B",
      dark: "#B45309",
      light: "#FBBF24",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#22C55E",
      dark: "#15803D",
      light: "#4ED17E",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#221F20",
      secondary: "#64748B",
      disabled: "#999999",
    },
    grey: {
      "50": "#FAFAFA",
      "100": "#F5F5F5",
      "200": "#E5E5E5",
      "300": "#D4D4D4",
      "400": "#A3A3A3",
      "500": "#737373",
      "600": "#525252",
      "700": "#404040",
      "800": "#262626",
      "900": "#171717",
    },
    bluegrey: {
      "50": "#F8FAFC",
      "100": "#F1F5F9",
      "200": "#E2E8F0",
      "300": "#CBD5E1",
      "400": "#94A3B8",
      "500": "#64748B",
      "600": "#475569",
      "700": "#334155",
      "800": "#1E293B",
      "900": "#0F172A",
    },
    action: {
      active: "#EE9C98",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});
