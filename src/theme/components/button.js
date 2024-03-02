import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({ borderRadius: "0px", outlineOffset: "0", cursor: "pointer" });

const sizes = {
  xs: defineStyle({
    h: "21px",
    pl: "24px",
    fontSize: "14px",
  }),
  md: defineStyle({
    h: "37px",
    fontSize: "14px",
    px: "11px",
  }),
  sm: defineStyle({
    h: "32px",
    fontSize: "14px",
    px: "35px",
  }),
  lg: defineStyle({
    h: "40px",
    fontSize: "14px",
    px: "11px",
  }),
  "2xl": defineStyle({
    h: "48px",
    fontSize: "16px",
    px: "24px",
  }),
  xl: defineStyle({
    h: "48px",
    px: "12px",
  }),
};

const variants = {
  fill: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      white_A700: {
        bg: "white.A700",
        color: "indigo.900",
      },
      gray_100_01: {
        bg: "gray.100_01",
        color: "indigo.900",
      },
      gray_50_01: {
        bg: "gray.50_01",
      },
      indigo_900: {
        bg: "indigo.900",
        color: "white.A700",
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["indigo_900"];
  }),
  outline: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      indigo_900: {
        borderColor: "indigo.900",
        borderWidth: "1px",
        borderStyle: "solid",
        color: "indigo.900",
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["indigo_900"];
  }),
};

const Button = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "fill",
    size: "xl",
  },
});
export default Button;
