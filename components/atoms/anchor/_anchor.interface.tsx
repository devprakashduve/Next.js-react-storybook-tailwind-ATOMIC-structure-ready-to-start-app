export interface AnchorProps {
  href: string;
  isExternal?: boolean;
  rel?: string;
  classes?: string;
  children: JSX.Element | string;
  onClick?: () => void;
}
