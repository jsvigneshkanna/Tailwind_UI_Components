/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import Link from "next/link";
import {MdMenu} from "react-icons/md";
import {AiOutlineClose} from "react-icons/ai";
import {useState} from "react";
import {useRouter} from "next/router";
import animated_navbar from "../tailwind_components/navbars/animated_navbar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const showMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const displayMenu = () => {
    if (isMenuOpen) {
      return "flex sm:hidden flex-col justify-center items-center ";
    } else {
      return "hidden";
    }
  };
  return (
    <>
    <div className="nav_container font-poppins">
      <nav>
        <Image
          src="/nav_logo.png"
          alt="logo"
          width={240}
          height={36}
          onClick={() => router.push("/")}
        />
        <div className="right_contents">
          <div className="nav_links">
            <Link href="/components">Composdnents</Link>
          </div>
          <div className="nav_links">
            <Link href="/">Documentation</Link>
          </div>
          <div className="nav_links">
            <Link href="/">About Us</Link>
          </div>
        </div>
        <div className="flex sm:hidden hamburger" onClick={showMenu}>
          <p>{isMenuOpen ? <AiOutlineClose /> : <MdMenu />}</p>
        </div>
      </nav>
      <div className={displayMenu()}>
        <div className="nav_links">
          <Link href="/components">Components</Link>
        </div>
        <div className="nav_links">
          <Link href="/">Documentation</Link>
        </div>
        <div className="nav_links">
          <Link href="/">About Us</Link>
        </div>
      </div>
    </div>

    <animated_navbar/>

    </>
  );
};

export default Navbar;
