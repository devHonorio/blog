import { MDXComponents } from "mdx/types";

export const sharedComponents: MDXComponents = {
  h1: ({ className, ...props }) => (
    <h1 className={`text-3xl pt-10 pb-5 ${className}`} {...props} />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={`overflow-x-auto mt-5 mb-4 p-5 rounded-xl ${className}`}
      {...props}
    />
  ),
  code: ({ className, ...props }) => (
    <code className={` text-sm  ${className}`} {...props} />
  ),
};
