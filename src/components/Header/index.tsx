"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Phone } from "lucide-react";
import { navLinks } from "./navLinks";

const ShieldIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V13H5V6.3l7-3.11v10.8z" />
  </svg>
);

const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16m-16 6h16"
    />
  </svg>
);

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 shadow-sm backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <ShieldIcon className="text-brand-blue h-8 w-8" />
            <span className="text-brand-blue-dark text-2xl font-bold">
              PALAGOS
            </span>
          </Link>

          <nav className="hidden items-center space-x-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-brand-blue font-medium text-gray-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="text-brand-blue hidden items-center space-x-2 lg:flex">
            <Phone
              className="text-brand-blue h-5 w-5"
              fill="brand-blue"
              strokeWidth={0}
            />

            <Link href="tel:11995303261" className="font-semibold">
              (11) 99530-3261
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:text-brand-blue text-gray-700"
            >
              {isMenuOpen ? (
                <CloseIcon className="h-7 w-7" />
              ) : (
                <MenuIcon className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <nav className="flex flex-col items-center space-y-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-brand-blue text-lg font-medium text-gray-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="text-brand-blue flex items-center space-x-2 pt-4">
              <Phone
                className="text-brand-blue h-5 w-5"
                fill="brand-blue"
                strokeWidth={0}
              />
              <Link href="tel:11995303261" className="font-semibold">
                (11) 99530-3261
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
