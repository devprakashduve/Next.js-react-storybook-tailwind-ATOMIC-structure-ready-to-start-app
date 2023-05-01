import React from "react";
import Link from "next/link";
import { AnchorProps } from "./_anchor.interface";

const Anchor = (props: AnchorProps) => {
  const { href, isExternal, rel, children } = props;

  const isExternalLink = href.startsWith("http");
  const addClass = () => {
    const className = [];
    className.push(
      "no-underline font-medium text-lime-600 dark:text-lime-900 hover:text-lime-900 hover:underline"
    );
    if (props.classes) {
      className.push(props.classes);
    }
    return className.join(" ");
  };

  return (
    <>
      {isExternalLink && isExternal ? (
        <a href={href} target="_blank" rel={rel} className={addClass()}>
          {children}
        </a>
      ) : (
        <Link href={href} className={addClass()}>
          {children}
        </Link>
      )}
    </>
  );
};

export default Anchor;
