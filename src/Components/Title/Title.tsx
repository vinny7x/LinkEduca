import type React from "react";

type TitleProps = {
  children: React.ReactNode;
  subtitle?: React.ReactNode | null;
};
export function Title({ children, subtitle }: TitleProps) {
  return (
    <>
      <h1 className="mt-2 text-center text-3xl text-[var(--color-text)]">
        {children}
      </h1>
      {subtitle && (
        <h2 className="text-center text-xl text-[var(--color-text)]">
          {subtitle}
        </h2>
      )}
    </>
  );
}
