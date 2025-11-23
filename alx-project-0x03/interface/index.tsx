// Button props interface
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
  action?: () => void;
}

// Page route interface (for index.tsx)
export interface PageRouteProps {
  pageRoute: string;
}

// Layout props interface
import { ReactNode } from "react";
export interface LayoutProps {
  children: ReactNode;
}
