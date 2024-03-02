const baseStyle = {
  color: "blue_gray.400",
  fontFamily: "Inter",
};
const sizes = {
  xs: {
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: "130%",
  },
  lg: {
    fontSize: "24px",
    fontWeight: 500,
    lineHeight: "140%",
  },
  s: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "125%",
  },
  xl: {
    fontSize: "28px",
    fontWeight: 400,
    lineHeight: "130%",
  },
  md: {
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "140%",
  },
};
const defaultProps = {
  size: "md",
};

const Text = {
  baseStyle,
  sizes,
  defaultProps,
};
export default Text;
