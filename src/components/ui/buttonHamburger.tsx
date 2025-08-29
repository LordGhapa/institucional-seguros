"use client";
import classNames from "classnames";

interface ButtonHamburgerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
export default function ButtonHamburger({
  isOpen,
  setIsOpen,
}: ButtonHamburgerProps) {
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={classNames(`tham tham-e-squeeze tham-w-8`, {
        "tham-active": isOpen,
      })}
    >
      <div className="tham-box">
        <div className="tham-inner" />
      </div>
    </div>
  );
}
