import { useMdxComponent } from "./use-mdx-components";
import { sharedComponents } from "./shared-components";
import "@/app/mdx.css";
interface MDXProps {
  code: string;
  components?: Record<string, React.ComponentType>;
}

export const MdxContent = ({ code, components }: MDXProps) => {
  const Component = useMdxComponent(code);

  return <Component components={{ ...components, ...sharedComponents }} />;
};
