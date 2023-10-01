import type { ButtonProps } from './button.types';

function Button ({ children }: ButtonProps) {
  return (
    <div>
      <h1>button</h1>
      {children}
    </div>
  );
}

export {
  Button
};
