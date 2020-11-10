import { NeutralPalette } from "../types/components";


/* Common */
export const WHITE = "#FFFFFF";
export const BLACK = "#000000";
/* Neutral */
export const COPYGRAY = "#313131";
export const DARKGRAY = "#4A5052";
export const BLUEISHGRAY = "#738794";
export const GREISHGREY = "#dde0e9";
/* Semantic */
export const ERROR = "#b00020";
export const SUCCESS = "#0da931";
export const WARNING = "#f7971c";
export const DISABLED = "#d6d6d6";

/* Custom */
export const TEXT = "#313131";
export const TEXTSECONDARY = "rgba(49, 49, 49, 0.7)";
export const INPUTBG = "#f3f5fa"; 

/* Neutral */
export const NEUTRAL: NeutralPalette = {
  copygray: COPYGRAY,
  darkgray: DARKGRAY,
  blueishgray: BLUEISHGRAY,
  greishgrey: GREISHGREY
};

/* Category */
export const CATEGORY = {
  shopping: {
    color: "#ff8f00",
    backgroundColor: "#fff8e1"
  },
  food: {
    color: "#fb8c00",
    backgroundColor: "#fff3e0"
  },
  services: {
    color: "#455a64",
    backgroundColor: "#eceff1"
  },
  travel: {
    color: "#fbc02d",
    backgroundColor: "#fffde7"
  },
  transport: {
    color: "#0288d1",
    backgroundColor: "#e1f5fe"
  },
  entertainment: {
    color: "#512da8",
    backgroundColor: "#ede7f6"
  },
  health: {
    color: "#388e3c",
    backgroundColor: "#e8f5e9"
  },
  default: {
    color: "#ff5e00",
    backgroundColor: "rgba(255, 94, 0, 0.14)"
  }
};
