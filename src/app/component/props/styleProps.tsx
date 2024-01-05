import { CSSProperties, ReactNode } from "react";

export interface StyleProps {
  style?: CSSProperties;
  className?: string | undefined;
  children?: ReactNode;
}
