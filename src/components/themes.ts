import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: "Atkinson Hyperlegible Next Variable" },
        body: { value: "Atkinson Hyperlegible Next Variable" },
      },
      colors: {
        lemon: {
          50: { value: "#e0f9f1" }, // Lightest shade (Base Color)
          100: { value: "#b3eddc" },
          200: { value: "#80e1c6" },
          300: { value: "#4dd5af" },
          400: { value: "#26cb9e" },
          500: { value: "#12C88E" }, // Default Button Color
          600: { value: "#0fa877" },
          700: { value: "#0c8660" },
          800: { value: "#09654a" },
          900: { value: "#064533" },
          950: { value: "#03261d" },
        },
      },
    },
    semanticTokens: {
      colors: {
        lemon: {
          solid: { value: "{colors.lemon.500}" },
          contrast: { value: "{colors.lemon.100}" },
          fg: { value: "{colors.lemon.700}" },
          muted: { value: "{colors.lemon.100}" },
          subtle: { value: "{colors.lemon.200}" },
          emphasized: { value: "{colors.lemon.300}" },
          focusRing: { value: "{colors.lemon.500}" },
        },
      },
    },
  },
});
