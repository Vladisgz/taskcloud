import Link from "next/link";
import React from "react";
import { CSSProperties } from "react";

interface Props {
  title: string;
  linkTo: string;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
}

const NavItems = ({ title, linkTo, className, onClick }: Props) => {
  return (
    <div>
      <Link className={className} href={linkTo} onClick={onClick}>
        {title}
      </Link>
    </div>
  );
};

export default NavItems;
