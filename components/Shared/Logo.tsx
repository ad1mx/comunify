import { cva, VariantProps } from "class-variance-authority";
import Image, { type ImageProps } from "next/image";
import React from "react";

const logoVariants = cva("", {
  variants: {
    size: {
      sm: 35,
      md: 60,
      lg: 80,
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

interface LogoProps
  extends Omit<ImageProps, "src" | "alt">,
    VariantProps<typeof logoVariants> {}

const Logo = ({ size, ...props }: LogoProps) => {
  return (
    <Image
      src={"/comunify.png"}
      alt="Logo"
      width={+logoVariants({ size })}
      height={+logoVariants({ size })}
      {...props}
    />
  );
};

export default Logo;
