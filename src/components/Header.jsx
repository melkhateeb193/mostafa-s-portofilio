import { Link } from "react-router-dom";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-2 py-8">
          <Link to="/">
            <h3 className="h3">
              Mostafa<span className="text-accent">.</span>
            </h3>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
