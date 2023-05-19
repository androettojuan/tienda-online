import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      red: "#f63737",
      green: "#91C301",
      blue: "#1B4965",
      lightblue: "#5FA8D3",
      yellow: "#FF912C",
      white: "#ffffff",
      primary: "$lightblue",
      dark: "#333333",
      gray: "#a1a1a1",
      secondary: "$blue",
      light: "#e9e9e9",
      lighter: "#fafafa",
      success: "$green",
      warning: "$yellow",

      background: "$lighter",
      foreground: "$dark",
      backdrop: "$dark",
      card: "$white",
      disabled: "#666",
      active: "$primary",
    },
  },
  utils: {
    marginX: (value) => ({ marginLeft: value, marginRight: value }),
    marginY: (value) => ({ marginTop: value, marginBottom: value }),
    paddingX: (value) => ({ paddingLeft: value, paddingRight: value }),
    paddingY: (value) => ({ paddingTop: value, paddingBottom: value }),
    shadow: (value) => {
      if (value === 1) {
        return { boxShadow: "0 1px 20px rgba(0, 0, 0, 0.1)" };
      } else if (value === 2) {
        return { boxShadow: "0 1px 53px rgba(0, 0, 0, 0.15)" };
      } else if (value === 3) {
        return { boxShadow: "0 0 100px rgba(0, 0, 0, 0.5)" };
      } else if (value === 4) {
        return { boxShadow: "0 8px 20px rgb(86, 86, 86, 0.5)" };
      }
    },
  },
});
