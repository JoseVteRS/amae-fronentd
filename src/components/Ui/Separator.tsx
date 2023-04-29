type TypeSizes = "4xl" | "3xl" | "2xl" | "xl" | "lg" | "md" | "sm" | "xs";

type Size = {
  [key: string]: string;
};

const SIZE: Size = {
  "4xl": "8rem",
  "3xl": "5rem",
  "2xl": "3rem",
  xl: "30px",
  lg: "25px",
  md: "20px",
  sm: "15px",
  xs: "10px",
};

export const Separator = ({ size }: { size: TypeSizes }) => {
  return <div style={{ height: SIZE[size] }} />;
};
