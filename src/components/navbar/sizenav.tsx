"use client";
import { cn } from "../../lib/utils";
import { Menu, X } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import React, { useRef, useState } from "react";

// Navbar container with scroll-based visibility logic
export const Navbar = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ target: ref });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 100);
  });

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 top-0 z-50 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            )
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({
  children,
  className,
  visible,
}: {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}) => (
  <motion.div
    animate={{
      backdropFilter: "blur(10px)",
      backgroundColor: visible ? undefined : "rgba(0,0,0,0.2)",
      boxShadow: visible
        ? "0 0 24px rgba(34,42,53,0.06),0 1px 1px rgba(0,0,0,0.05),0 0 0 1px rgba(34,42,53,0.04),0 0 4px rgba(34,42,53,0.08),0 16px 68px rgba(47,48,55,0.05),0 1px 0 rgba(255,255,255,0.1) inset"
        : "none",
      width: visible ? "70%" : "100%",
      y: visible ? 20 : 0,
    }}
    transition={{ type: "spring", stiffness: 100, damping: 30 }}
    style={{ minWidth: "600px" }}
    className={cn(
      "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between rounded-full px-4 py-2 lg:flex",
      visible && "bg-white/80 dark:bg-neutral-950/80",
      className
    )}
  >
    {children}
  </motion.div>
);

export const NavItems = ({
  items,
  className,
  onItemClick,
}: {
  items: { name: string; link: string }[];
  className?: string;
  onItemClick?: (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => void;
}) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          key={`link-${idx}`}
          href={item.link}
          onMouseEnter={() => setHovered(idx)}
          onClick={(e) => onItemClick?.(e, item.link)}
          className="relative px-4 py-2 text-neutral-600 dark:text-neutral-300"
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({
  children,
  className,
  visible,
}: {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}) => (
  <motion.div
    animate={{
      backdropFilter: "blur(10px)",
      backgroundColor: visible ? undefined : "rgba(0,0,0,0.2)",
      boxShadow: visible
        ? "0 0 24px rgba(34,42,53,0.06),0 1px 1px rgba(0,0,0,0.05),0 0 0 1px rgba(34,42,53,0.04),0 0 4px rgba(34,42,53,0.08),0 16px 68px rgba(47,48,55,0.05),0 1px 0 rgba(255,255,255,0.1) inset"
        : "none",
      width: visible ? "90%" : "100%",
      y: visible ? 20 : 0,
    }}
    transition={{ type: "spring", stiffness: 100, damping: 30 }}
    className={cn(
      "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between rounded-2xl px-4 py-2 lg:hidden",
      visible && "bg-white/80 dark:bg-neutral-950/80",
      className
    )}
  >
    {children}
  </motion.div>
);

export const MobileNavHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "flex w-full flex-row items-center justify-between px-2 py-1",
      className
    )}
  >
    {children}
  </div>
);

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 8, scale: 1 }} // Adjust y for spacing
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.4,
        }}
        className={cn(
          "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-black/70 backdrop-blur-lg px-4 py-8 shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05)] dark:bg-neutral-900/70",
          className
        )}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => (
  <div className="relative w-8 h-8" onClick={onClick}>
    <AnimatePresence mode="wait" initial={false}>
      {isOpen ? (
        <motion.div
          key="close"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
            duration: 0.3,
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <X className="text-black dark:text-white w-8 h-8" />
        </motion.div>
      ) : (
        <motion.div
          key="menu"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
            duration: 0.3,
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Menu className="text-black dark:text-white w-8 h-8" />
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export const NavbarLogo = () => (
  <a
    href="#"
    className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
  >
    <img
      src="/assets/navlogo.png"
      alt="logo"
      width={30}
      height={30}
      className="rounded-md"
    />
    <span className="font-medium text-black dark:text-white">coolguyjc</span>
  </a>
);

// --- NavbarButton with custom color variants and hover via CSS classes ---

type Variant =
  | "primary"
  | "secondary"
  | "dark"
  | "gradient"
  | "customGrey"
  | "customGreen"
  | "customSilver";

const baseStyles =
  "px-4 py-2 rounded-md text-sm font-bold relative cursor-pointer transition duration-200 inline-block text-center";

const variantStyles: Record<Variant, string> = {
  primary: "bg-white text-black shadow-[0_0_24px_rgba(34,42,53,0.06)] hover:-translate-y-0.5",
  secondary: "bg-transparent shadow-none dark:text-white text-black hover:-translate-y-0.5",
  dark: "bg-black text-white shadow-[0_0_24px_rgba(34,42,53,0.06)] hover:-translate-y-0.5",
  gradient:
    "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] hover:-translate-y-0.5",
  customGrey: "custom-grey-btn hover:-translate-y-0.5",
  customGreen: "custom-green-btn hover:-translate-y-0.5",
  customSilver: "custom-silver-btn hover:-translate-y-0.5",
};

type NavbarButtonProps<T extends React.ElementType> = {
  as?: T;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className" | "children" | "variant">;

export const NavbarButton = <T extends React.ElementType = "a">({
  as,
  variant = "primary",
  className,
  children,
  ...props
}: NavbarButtonProps<T>) => {
  const Tag = as || "a";
  return (
    <>
      <Tag
        className={cn(baseStyles, variantStyles[variant], className)}
        {...props}
      >
        {children}
      </Tag>
      {/* Custom styles for our color variants */}
      <style jsx global>{`
        .custom-grey-btn {
          background: #DADADA !important;
          color: #222 !important;
          border: none !important;
          transition: background 0.2s;
        }
        .custom-grey-btn:hover {
          background: #B5B5B5 !important;
        }
        .custom-green-btn {
          background: #DDE3DC !important;
          color: #222 !important;
          border: none !important;
          transition: background 0.2s;
        }
        .custom-green-btn:hover {
          background: #B6C1B7 !important;
        }
        .custom-silver-btn {
          background: #CFCFCF !important;
          color: #222 !important;
          border: none !important;
          transition: background 0.2s;
        }
        .custom-silver-btn:hover {
          background: #A9A9A9 !important;
        }
      `}</style>
    </>
  );
};

// Backdrop that blurs the entire page when mobile menu is open
export const NavBackdrop = ({ isOpen }: { isOpen: boolean }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        key="nav-backdrop"
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
    )}
  </AnimatePresence>
);
