import { useMemo } from "react";

const getSizeClasses = (size: string) => {
  console.log(size);
  switch (size) {
    case "sm": {
      return "h-14 px-6 py-4"; //TODO: Must change
    }
    case "md": {
      return "h-14 p-4"; //TODO: Must change
    }
    default: {
      return "h-14 p-4";
    }
  }
};

const getVariantClasses = (variant: string) => {
  console.log(variant);
  switch (variant) {
    case "primary": {
      return "bg-hyellow-700";
    }
    case "secondary": {
      return "p-[14px] border-2 border-solid border-black-500 bg-transparent";
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
      return "h-6 w-6"; //TODO: Must change
    }
    case "md": {
      return "h-6 w-6"; //TODO: Must change
    }
    case "lg": {
      return "h-6 w-6"; //TODO: Must change
    }
    default: {
      return "h-6 w-6";
    }
  }
};

const BASE_BUTTON_CLASSES =
  "box-border cursor-pointer flex flex-row rounded-lg text-hgray-700";

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
        <div className="font-semibold flex place-content-center h-6">
          <p className="text-lg">{label}</p>
        </div>
      )}
      {iconEnd && (
        <div className={`${computedIconClasses} ml-2`}>{iconEnd}</div>
      )}
    </button>
  );
}

export default Button;
