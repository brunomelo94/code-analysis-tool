import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fullWidth?: boolean; // Optional full-width support
}

export function Button({ children, className, fullWidth, ...rest }: ButtonProps) {
  return (
    <button
  {...rest}
  className={clsx(
    "flex w-full max-w-xs items-center justify-center rounded-lg bg-blue-500 text-sm font-medium text-white shadow",
    "hover:bg-blue-400 active:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "px-4 py-2 sm:px-6 sm:py-3 transition-all duration-200 ease-in-out",
    className
  )}
>
  {children}
</button>

  );
}
