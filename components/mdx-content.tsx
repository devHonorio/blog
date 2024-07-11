import * as runtime from "react/jsx-runtime";
import { MDXComponents } from "mdx/types";

const useMdxComponent = (code: string) => {
  const fn = new Function(code);

  return fn({ ...runtime }).default;
};

interface MDXProps {
  code: string;
  components?: Record<string, React.ComponentType>;
}

const sharedComponents: MDXComponents = {
  h1: ({ className, ...props }) => (
    <h1
      style={{
        fontSize: "2rem",
        fontWeight: "bold",
        fontFamily: "monospace",
        color: "red",
      }}
      {...props}
    />
  ),
};

export const MdxContent = ({ code, components }: MDXProps) => {
  const Component = useMdxComponent(code);

  return <Component components={{ ...components, ...sharedComponents }} />;
};
