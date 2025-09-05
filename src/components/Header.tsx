import { useDispatch, useSelector } from "react-redux";
import { useAccentClass } from "../hooks/useAccentClass";
import { cn } from "../utils/helper";
import { cycleAccent, setMenu, toggleTheme } from "../store/themeSlice";
import { Link } from "react-router-dom";
import { ExternalLink, Rocket, Sparkles } from "lucide-react";
import { RootState } from "../store/store";
import { Button } from "./UI/Button";
import { ThemeToggle } from "./Header/ThemeToggle";

export const Header = () => {
  const dispatch = useDispatch();
  const { menuOpen, theme } = useSelector((s: RootState) => s.theme);
  const accent = useAccentClass();
  return (
    <header className={cn("header", accent)}>
      <div className="container header__bar">
        <Link to="/" className="brand">
          <span>Bhavesh Bafana</span>
        </Link>
        <nav className={cn("nav", menuOpen && "nav--open")}>
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Experience", "/experience"],
            ["Projects", "/projects"],
            ["Awards", "/awards"],
            ["Contact", "/contact"],
          ].map(([label, to]) => (
            <Link key={label} to={to} className="nav__link" onClick={() => dispatch(setMenu(false))}>{label}</Link>
          ))}
        </nav>
        <div className="header__actions">

          <Button className="iconbtn" onClick={() => dispatch(toggleTheme())}><ThemeToggle themeStyle={theme}/></Button>
          {/* <Button onClick={() => dispatch(cycleAccent())}><ExternalLink /></Button> */}
          <Button className="hamburger" onClick={() => dispatch(setMenu(!menuOpen))}><span /><span /><span /></Button>
        </div>
      </div>
    </header>
  );
};