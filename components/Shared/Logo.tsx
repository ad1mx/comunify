import { cva, VariantProps } from "class-variance-authority";
import Image, { type ImageProps } from "next/image";
import Link, { LinkProps } from "next/link";
import React, { HTMLAttributes } from "react";

const logoVariants = cva("", {
  variants: {
    size: {
      sm: 33,
      md: 33,
      lg: 80,
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type LogoProps = VariantProps<typeof logoVariants> & {
  logoOnly?: boolean;
  asLink?: boolean;
};

const Logo = ({ size, logoOnly = true, asLink, ...props }: LogoProps) => {
  const LinkComp = Link;

  const Comp = asLink ? LinkComp : "div";

  return (
    <Comp className="flex items-center" {...props}>
      <Image
        src={"/comunify.png"}
        alt="Logo"
        width={+logoVariants({ size })}
        height={+logoVariants({ size })}
        className={logoVariants({ size })}
      />
      {!logoOnly ? (
        <p className="font-extrabold text-2xl text-gray-800 dark:text-white ml-2">
          Comunify
        </p>
      ) : null}
    </Comp>
  );
};

export default Logo;
