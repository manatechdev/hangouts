interface ButtonProps {
  label: string;
}

function Button({ label }: ButtonProps) {
  return <div>{label}</div>;
}

export default Button;
