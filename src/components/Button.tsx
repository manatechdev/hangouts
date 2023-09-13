import { useMemo } from "react";

const getSizeClasses = (size: string) => {
  console.log(size);
  switch (size) {
    case "sm": {
      return "h-14 px-6 py-4"; //TODO: Must change
    }
    case "md": {
      return "h-14 px-6 py-4"; //TODO: Must change
    }
    case "lg": {
      return "h-14 px-6 py-4"; //TODO: Must change
    }
    default: {
      return "h-14 px-6 py-4";
    }
  }
};

const getVariantClasses = (variant: string) => {
  console.log(variant);
  switch (variant) {
    case "primary": {
      return "bg-hyellow-500";
    }
    case "secondary": {
      return "border border-solid border-black-500";
    }
    case "ghost": {
      return "bg-hgray-100";
    }
  }
};

const getIconSizeClasses = (size: string) => {
  console.log(size);
  switch (size) {
    case "sm": {
      return "box-border h-6 w-6"; //TODO: Must change
    }
    case "md": {
      return "box-border h-6 w-6"; //TODO: Must change
    }
    case "lg": {
      return "box-border h-6 w-6"; //TODO: Must change
    }
    default: {
      return "box-border h-6 w-6";
    }
  }
};

const BASE_BUTTON_CLASSES = "cursor-pointer flex flex-row rounded-lg";

interface ButtonProps {
  iconStart?: any;
  iconEnd?: any;
  label?: string;
  loading: boolean;
  size: string;
  variant: string;
}

function Button({
  iconStart,
  iconEnd,
  label,
  loading,
  size,
  variant,
}: ButtonProps) {
  const computedClasses = useMemo(() => {
    const sizeClass = getSizeClasses(size);
    const variantClass = getVariantClasses(variant);
    return [sizeClass, variantClass].join(" ");
  }, [size, variant]);
  const computedIconClasses = useMemo(() => {
    const iconSizeClass = getIconSizeClasses(size);
    return iconSizeClass;
  }, [size]);
  console.log(computedClasses);
  return (
    <button className={`${BASE_BUTTON_CLASSES} ${computedClasses}`}>
      {iconStart && (
        <div className={`${computedIconClasses} mr-2`}>{iconStart}</div>
      )}
      {label && (
        <div className="box-border font-semibold text-base h-6"> {label} </div>
      )}
      {iconEnd && (
        <div className={`${computedIconClasses} ml-2`}>{iconEnd}</div>
      )}
    </button>
  );
}

export default Button;
