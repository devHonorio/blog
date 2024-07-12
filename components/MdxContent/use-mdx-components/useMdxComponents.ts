import * as runtime from "react/jsx-runtime";

export const useMdxComponent = (code: string) => {
  const fn = new Function(code);

  return fn({ ...runtime }).default;
};
