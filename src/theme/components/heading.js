const baseStyle = {
  color: "gray.900",
  fontFamily: "Inter",
};
const sizes = {
  "3xl": {
    fontSize: "38px",
    fontWeight: 600,
    lineHeight: "125%",
  },
  "2xl": {
    fontSize: "36px",
    fontWeight: 700,
    lineHeight: "140%",
  },
  xl: {
    fontSize: "28px",
    fontWeight: 700,
    lineHeight: "130%",
  },
  "5xl": {
    fontSize: "64px",
    fontWeight: 700,
    lineHeight: "125%",
  },
  "4xl": {
    fontSize: "40px",
    fontWeight: 700,
    lineHeight: "130%",
  },
  s: {
    fontSize: "16px",
    fontWeight: 600,
  },
  md: {
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "130%",
  },
  xs: {
    fontSize: "14px",
    fontWeight: 600,
    lineHeight: "18px",
  },
  lg: {
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "30px",
  },
};
const defaultProps = {
  size: "xl",
};

const Heading = {
  baseStyle,
  sizes,
  defaultProps,
};
export default Heading;
