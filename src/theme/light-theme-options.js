// Colors

const neutral = {
  100: "#FFFFFF",
  200: "#E5E7EB",
  300: "#F6F7FB",
  400: "#9CA3AF",
  500: "#494949",
  600: "#494949",
  700: "#494949",
  800: "#494949",
  900: "#494949",
  1000: "#000000",
  1100: "#D6D6D6",
};

const background = {
  default: "#F9FAFC",
  paper: "#FFFFFF",
  custom: "#f1f2f5",
  custom2: "#FFFFFF",
  custom3: "#F6F7FB",
  custom4: "#ffffff",
  footer1: "#9f9f9f1a",
  footer2: "#9f9f9f0d",
  custom5: "#F4F6F8",
  custom6: "#FCFCFD",
};

const divider = "#E6E8F0";

const primary = {
  main: "#f57b32",
  mainnew: "#f9e8d0",
  deep: "#e73c3e",
  light: "#f57b32",
  dark: "#e73c3e",
  semiLight: "#fff8f4",
  contrastText: "#FFFFFF",
  customType1: "#c16229",
  customType2: "#ad5018",
  customType3: "#aa4102",
  overLay: "#000000",
  lite: "rgba(3, 157, 85, 0.1)",
  icon: "#f57b32",
};
const moduleTheme = {
  pharmacy: "#f57b32",
  ecommerce: "#f57b32",
  food: "#f57b32",
  parcel: "#f57b32",
};
const horizontalCardBG = "#fff8f4";

const secondary = {
  main: "#b25f2d",
  light: "#b66433",
  dark: "#9b4d1e",
  contrastText: "#FFFFFF",
};

const success = {
  main: "#b85215",
  light: "#cd733d",
  dark: "#893a0b",
  contrastText: "#FFFFFF",
};

const info = {
  main: "#a12122",
  light: "#9d3536",
  dark: "#a40103",
  lite: "#ffefef",
  contrastText: "#FFFFFF",
  contrastText1: "#F5F6F8",
  blue: "#7d0103",
  custom1: "#932527",
};

const warning = {
  main: "#FFB020",
  light: "#FFF8D5",
  lite: "#FFBD8B",
  liter: "#FFF8F2",
  dark: "#FE961C",
  contrastText: "#FFFFFF",
  new: "#FFC817",
};

const error = {
  main: "#D14343",
  light: "#DA6868",
  dark: "#922E2E",
  contrastText: "#FFFFFF",
  deepLight: "#FF725E",
};

const text = {
  primary: "#4e4e4e",
  secondary: "#6e6e6e",
  disabled: "rgba(39, 39, 39, 0.48)",
  custom: "#232323",
  customText1: "#2d2d2d",
};

const footer = {
  inputButton: "#f57b32F",
  inputButtonHover: "#e73c3e",
  bottom: "rgba(0, 98, 52, 0.3)",
  foodBottom: "#9e5428",
  appDownloadButtonBg: "#1A1A1A",
  appDownloadButtonBgGray: "#232323",
  appDownloadButtonBgHover: "#4f4f4f",
  foodFooterBg: "#414141",
};
const customColor = {
  textGray: "#9c9c9c",
  textGrayDeep: "#787676",
  buyButton: "#F9E091",
};
const whiteContainer = {
  main: "#ffffff",
};
const pink = {
  main: "#FF6D76",
};
const foodCardColor = "#FFF6EF";
const paperBoxShadow = "#E5EAF1";
const roundStackOne = "rgba(255, 255, 255, 0.04)";
const roundStackTwo = "rgba(255, 255, 255, 0.06)";

export const lightThemeOptions = {
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: neutral[500],
          color: "#FFFFFF",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          "&.MuiChip-filledDefault": {
            backgroundColor: neutral[200],
            "& .MuiChip-deleteIcon": {
              color: neutral[400],
            },
          },
          "&.MuiChip-outlinedDefault": {
            "& .MuiChip-deleteIcon": {
              color: neutral[300],
            },
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          "&::placeholder": {
            opacity: 1,
            color: text.secondary,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: divider,
        },
        input: {
          "&:-webkit-autofill": {
            "-webkit-box-shadow": "0 0 0 100px #f0f5f5 inset",
            "-webkit-text-fill-color": "#000",
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderColor: divider,
          borderStyle: "solid",
          borderWidth: 1,
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          borderColor: divider,
          borderStyle: "solid",
          borderWidth: 1,
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: neutral[500],
        },
        track: {
          backgroundColor: neutral[400],
          opacity: 1,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${divider}`,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: neutral[100],
          ".MuiTableCell-root": {
            color: neutral[700],
          },
        },
      },
    },
  },
  palette: {
    action: {
      active: neutral[500],
      focus: "rgba(55, 65, 81, 0.12)",
      hover: "rgba(55, 65, 81, 0.04)",
      selected: "rgba(55, 65, 81, 0.08)",
      disabledBackground: "rgba(55, 65, 81, 0.12)",
      disabled: "rgba(55, 65, 81, 0.26)",
    },
    horizontalCardBG,
    background,
    divider,
    error,
    info,
    mode: "light",
    neutral,
    primary,
    secondary,
    success,
    text,
    warning,
    footer,
    customColor,
    whiteContainer,
    pink,
    paperBoxShadow,
    foodCardColor,
    moduleTheme,
    roundStackOne,
    roundStackTwo,
  },
  shadows: [
    "none",
    "0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)",
    "0px 1px 2px rgba(100, 116, 139, 0.12)",
    "0px 1px 4px rgba(100, 116, 139, 0.12)",
    "0px 1px 5px rgba(100, 116, 139, 0.12)",
    "0px 1px 6px rgba(100, 116, 139, 0.12)",
    "0px 2px 6px rgba(100, 116, 139, 0.12)",
    "0px 3px 6px rgba(100, 116, 139, 0.12)",
    "0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)",
    "0px 5px 12px rgba(100, 116, 139, 0.12)",
    "0px 5px 14px rgba(100, 116, 139, 0.12)",
    "0px 5px 15px rgba(100, 116, 139, 0.12)",
    "0px 6px 15px rgba(100, 116, 139, 0.12)",
    "0px 7px 15px rgba(100, 116, 139, 0.12)",
    "0px 8px 15px rgba(100, 116, 139, 0.12)",
    "0px 9px 15px rgba(100, 116, 139, 0.12)",
    "0px 10px 15px rgba(100, 116, 139, 0.12)",
    "0px 12px 22px -8px rgba(100, 116, 139, 0.25)",
    "0px 13px 22px -8px rgba(100, 116, 139, 0.25)",
    "0px 14px 24px -8px rgba(100, 116, 139, 0.25)",
    "0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
  ],
};
