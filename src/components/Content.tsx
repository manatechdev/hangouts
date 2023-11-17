import { ReactNode } from "react";

interface ContentProps {
  children?: ReactNode;
}

function Content({ children }: ContentProps) {
  return <div className="w-3/4">{children}</div>;
}

export default Content;
