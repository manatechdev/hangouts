interface UnderDevelopmentProps {
  message?: string;
}

function UnderDevelopment({ message }: UnderDevelopmentProps) {
  return (
    <div className="flex flex-row items-center justify-center h-full w-100 bg-hgray-100">
      <div>
        {message ??
          "👷 This section is still being developed. Check back again soon! 👷"}
      </div>
    </div>
  );
}

export default UnderDevelopment;

// const diagonalBackgroundStyle = `background-color: #e5e5f7;
// opacity: 0.8;
// background-size: 10px 10px;
// background-image: repeating-linear-gradient(45deg, #444cf7 0, #444cf7 1px, #e5e5f7 0, #e5e5f7 50%);`;
