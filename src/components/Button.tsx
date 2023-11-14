import { useMemo } from "react";

const BASE_BUTTON_CLASSES =
  "box-border cursor-pointer flex flex-row rounded-lg text-hgray-700";
const getButtonSizeClasses = (size: string) => {
  console.log(size);
  switch (size) {
    case "sm": {
      return "h-9 px-3 py-2";
    }
    default: {
      return "h-9 p-2";
    }
  }
};
const getButtonVariantClasses = (variant: string) => {
  switch (variant) {
    case "primary": {
      return "bg-hyellow-700";
    }
    case "ghost": {
      return "bg-hgray-100";
    }
  }
};

const BASE_BUTTON_ICON_CLASSES = "";
const getButtonIconSizeClasses = (size: string) => {
  switch (size) {
    case "sm": {
      return "h-5 w-5";
    }
    default: {
      return "h-5 w-5";
    }
  }
};

const BASE_BUTTON_LABEL_CLASSES = "font-semibold flex place-content-center";
const getButtonLabelSizeClasses = (size: string) => {
  switch (size) {
    case "sm": {
      return "text-sm";
    }
    default: {
      return "text-sm";
    }
  }
};

const BASE_SPACER_CLASSES = "mr-2";

interface ButtonProps {
  iconStart?: any;
  iconEnd?: any;
  label?: string;
  size: string;
  variant: string;
  customStyle?: string;
}

function Button({
  iconStart,
  iconEnd,
  label,
  size,
  variant,
  customStyle,
}: ButtonProps) {
  const computedButtonClasses = useMemo(() => {
    const sizeClass = getButtonSizeClasses(size);
    const variantClass = getButtonVariantClasses(variant);
    return [BASE_BUTTON_CLASSES, sizeClass, variantClass, customStyle].join(
      " "
    );
  }, [size, variant]);

  const computedIconClasses = useMemo(() => {
    const iconSizeClass = getButtonIconSizeClasses(size);
    return iconSizeClass;
  }, [size]);

  const computedLabelSizeClasses = useMemo(() => {
    const labelSizeClass = getButtonLabelSizeClasses(size);
    return [BASE_BUTTON_LABEL_CLASSES, labelSizeClass].join(" ");
  }, [size]);

  return (
    <button className={computedButtonClasses}>
      {iconStart && (
        <>
          <div className={computedIconClasses}>{iconStart}</div>
          <div className={BASE_SPACER_CLASSES}></div>
        </>
      )}
      {label && (
        <>
          <div className={computedLabelSizeClasses}>{label}</div>
        </>
      )}
      {iconEnd && (
        <>
          <div className={BASE_SPACER_CLASSES}></div>
          <div className={computedIconClasses}>{iconEnd}</div>
        </>
      )}
    </button>
  );
}

export default Button;
