import { MDXComponents } from "mdx/types";

export const sharedComponents: MDXComponents = {
  h1: ({ className, ...props }) => (
    <h1
      className={`text-4xl font-bold text-emerald-300 pt-10 pb-2  ${className}`}
      {...props}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={`text-3xl font-bold text-emerald-300 pt-10 pb-2  ${className}`}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={`text-2xl font-bold text-emerald-300 pt-10 pb-2  ${className}`}
      {...props}
    />
  ),
  h4: ({ className, ...props }) => (
    <h4
      className={`text-xl font-bold text-emerald-300 pt-10 pb-2  ${className}`}
      {...props}
    />
  ),

  h5: ({ className, ...props }) => (
    <h5
      className={`text-lg font-bold text-emerald-300 pt-10 pb-2  ${className}`}
      {...props}
    />
  ),
  p: ({ className, ...props }) => (
    <p className={`text-gray-200 py-2 ${className}`} {...props} />
  ),
  a: ({ className, ...props }) => (
    <a className={`text-emerald-300 underline ${className}`} {...props} />
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

  ul: ({ className, ...props }) => (
    <ul className={`pl-10 ${className}`} {...props} />
  ),
  li: ({ className, ...props }) => (
    <li className={`list-disc py-2 ${className}`} {...props} />
  ),
};
