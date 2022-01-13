import React, { memo, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";

import Divider from "@mui/material/Divider";
import { FAIconButton, FAIcon, FALogo } from "@Atoms";

import { Box } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FATypography } from "@Atoms/FATypography";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { IFOSideBar, IStyle } from "./FOSideBar.interfaces";

const useStyles = makeStyles({
  color: {
    background: (props: IStyle) =>
      props.color === "red"
        ? "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
        : "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    boxShadow: (props: IStyle) =>
      props.color === "red"
        ? "0 3px 5px 2px rgba(255, 105, 135, .3)"
        : "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export const FOSideBar = memo((props: IFOSideBar) => {
  const {
    testID,
    open,
    isDrawerCloseable,
    color,
    footer,
    sections,
    sx,
    logo,
    ...materialUIProps
  } = props;

  const initialPath = window.location.pathname;
  const pathMarkerSidebar = (path: string) => {
    if (initialPath === path) {
      return {
        bgcolor: "#FDEBEA",
        color: "#DC3931",
        width: "100%",
        display: "flex",
        alignItems: "center",
        borderRadius: 16,
        padding: "0 12px",
      };
    }
    return {
      width: "100%",
      display: "flex",
      alignItems: "center",
      borderRadius: 16,
      padding: "0 12px",
    };
  };

  const classes = useStyles({ color });
  const theme = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(open);

  const [isDrawerChildOpen, setIsDrawerChildOpen] = React.useState(true);

  const handleClick = () => {
    setIsDrawerChildOpen(!isDrawerChildOpen);
  };

  useEffect(() => {
    if (open) {
      setIsDrawerOpen(true);
    } else {
      setIsDrawerOpen(false);
    }
  }, [open]);

  return (
    <>
      <CssBaseline />
      <Drawer
        className={color ? classes.color : ""}
        data-testid={testID}
        sx={sx}
        variant="persistent"
        anchor="left"
        open={isDrawerCloseable ? isDrawerOpen : true}
        {...materialUIProps}
      >
        <DrawerHeader>
          <FAIconButton sx={{ width: "100%" }} testID="icon-button-drawer">
            {theme.direction === "ltr" ? (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                {logo ? (
                  <>{logo}</>
                ) : (
                  <FALogo
                    iconColor="#D8232A"
                    textColor="#000"
                    width={129}
                    height={28}
                    testID="logo-sidebar"
                  ></FALogo>
                )}
              </Box>
            ) : (
              <ChevronRightIcon />
            )}
          </FAIconButton>
        </DrawerHeader>
        <Divider />
        {sections && sections.length > 0 ? (
          <List>
            {sections.map((oneSection, index) =>
              oneSection?.children?.length ? (
                <>
                  <ListItem button key={index} onClick={handleClick}>
                    <Box
                      sx={pathMarkerSidebar(oneSection.path)}
                      color={
                        initialPath === oneSection.path ? "primary" : "inherit"
                      }
                      bgcolor={
                        initialPath === oneSection.path
                          ? "primary.light"
                          : "inherit"
                      }
                    >
                      <ListItemIcon sx={{ minWidth: 0, mr: "10px" }}>
                        <FAIcon
                          testID="icon-drawerChild"
                          color={
                            initialPath === oneSection.path
                              ? "primary"
                              : "inherit"
                          }
                        >
                          {oneSection.icon}
                        </FAIcon>
                      </ListItemIcon>
                      <FATypography
                        testID="typography-sidebar"
                        variant="body2"
                        fontWeight={initialPath === oneSection.path ? 600 : 400}
                        color={
                          initialPath === oneSection.path
                            ? "primary"
                            : "inherit"
                        }
                      >
                        {oneSection.title}
                      </FATypography>

                      {isDrawerChildOpen ? <ExpandLess /> : <ExpandMore />}
                    </Box>
                  </ListItem>
                  <Collapse in={isDrawerChildOpen} timeout="auto" unmountOnExit>
                    {oneSection.children.map((oneChildren, i) => (
                      <List
                        component="div"
                        disablePadding
                        sx={{ pl: 7 }}
                        key={i}
                        onClick={() => window.location.assign(oneChildren.path)}
                      >
                        <ListItem
                          button
                          sx={{
                            pl: 4,
                            ...pathMarkerSidebar(
                              `${oneSection.path}/${oneChildren.path}`
                            ),
                          }}
                        >
                          <FATypography
                            testID="typography-sidebar"
                            fontWeight={
                              initialPath ===
                              `${oneSection.path}/${oneChildren.path}`
                                ? 600
                                : 400
                            }
                            color={
                              initialPath ===
                              `${oneSection.path}/${oneChildren.path}`
                                ? "primary"
                                : "inherit"
                            }
                          >
                            {oneChildren.title}
                          </FATypography>
                        </ListItem>
                      </List>
                    ))}
                  </Collapse>
                </>
              ) : (
                <ListItem
                  button
                  key={index}
                  onClick={() => window.location.assign(oneSection.path)}
                >
                  <Box sx={pathMarkerSidebar(oneSection.path)}>
                    <ListItemIcon>
                      <FAIcon testID="icon-drawerChild">
                        {oneSection.icon}
                      </FAIcon>
                    </ListItemIcon>
                    <ListItemText primary={oneSection.title} />
                  </Box>
                </ListItem>
              )
            )}
          </List>
        ) : (
          props.children
        )}
        {footer && (
          <>
            <div style={{ flexGrow: 1 }}></div>
            <div style={{ width: "100%" }}>
              <Divider />
              {footer}
            </div>
          </>
        )}
      </Drawer>
    </>
  );
});

FOSideBar.displayName = "FOSideBar";
