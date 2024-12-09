import { useLocation } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";

import Nav from "./Nav";
import Header from "./Header";
import TopLeftImg from "./TopLeftImg";
import Transition from "./Transition";

const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <div className={"page bg-site text-white bg-cover bg-no-repeat relative"}>
      <AnimatePresence mode="wait">
        <motion.div key={location.pathname} className="h-full">
          <Transition />
          <TopLeftImg />
          <Nav />
          <Header />
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Layout;
