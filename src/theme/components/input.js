import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({ field: { borderRadius: "8px" } });

const sizes = {
  xs: defineStyle({
    field: {
      fontSize: "14px",
      height: "44px",
      px: "16px",
    },
  }),
  md: defineStyle({
    field: {
      height: "48px",
      px: "10px",
    },
  }),
  sm: defineStyle({
    field: {
      fontSize: "14px",
      height: "48px",
      px: "10px",
    },
  }),
};

const variants = {
  fill: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      gray_100: {
        field: {
          bg: "gray.100",
          color: "gray.500",
        },
      },
      white_A700: {
        field: {
          bg: "white.A700",
          color: "indigo.200",
        },
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["white_A700"];
  }),
};

const Input = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "fill",
    size: "sm",
  },
});
export default Input;
