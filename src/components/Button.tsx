interface ButtonProps {
  iconStart?: any;
  iconEnd?: any;
  label?: string;
  loading: boolean;
  size: string;
  state: string;
  variant: string;
}

function Button({
  iconStart,
  iconEnd,
  label,
  loading,
  size,
  state,
  variant,
}: ButtonProps) {
  return (
    <div className="box-border h-14 px-6 py-4 flex flex-row bg-red-500">
      {iconStart && (
        <div className="box-border h-6 w-6 object-contain">{iconStart}</div>
      )}
      {label && <div className="box-border h-6 bg-green-500"> {label} </div>}
      {iconEnd && <div className="h-6 w-6">{iconEnd}</div>}
    </div>
  );
}

export default Button;
