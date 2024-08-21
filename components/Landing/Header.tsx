import React from "react";
import Logo from "../shared/logo";
import ThemeSwitcher from "../shared/theme-switcher";

const Header = () => {
  return (
    <header className="container py-4 flex justify-between items-center">
      <Logo logoOnly={false} size={"md"} />
      <div>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
