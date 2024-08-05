import { MDXComponents } from "mdx/types";

export const sharedComponents: MDXComponents = {
  h1: ({ className, ...props }) => (
    <h1
      className={`text-4xl font-black text-emerald-300 pt-10 pb-2  ${className}`}
      {...props}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={`text-3xl font-black text-emerald-300 pt-10 pb-2  ${className}`}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={`text-2xl font-black text-emerald-300 pt-10 pb-2  ${className}`}
      {...props}
    />
  ),
  h4: ({ className, ...props }) => (
    <h4
      className={`text-xl font-black text-emerald-300 pt-10 pb-2  ${className}`}
      {...props}
    />
  ),

  h5: ({ className, ...props }) => (
    <h5
      className={`text-lg font-black text-emerald-300 pt-10 pb-2  ${className}`}
      {...props}
    />
  ),
  p: ({ className, ...props }) => (
    <p
      className={`text-gray-200/85 font-medium py-2 text-lg ${className}`}
      {...props}
    />
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
