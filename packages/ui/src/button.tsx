import type {ReactNode} from "react";

export interface ButtonProps {
  children: ReactNode;
}

function Button({ children }: ButtonProps) {
  return (
    <span className="text-blue-50">
      {children}
    </span>
  );
}

export { Button };
