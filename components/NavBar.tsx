import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-blue-600 p-4 font-semibold py-6">
      <div className="mx-auto flex justify-between items-center">
        <div className="text-white font-extrabold text-lg font">
          ANALYTICS AURA
        </div>
        <div className="space-x-4">
          <Link
            className="text-white hover:text-gray-300 cursor-pointer"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-white hover:text-gray-300 cursor-pointer mx-1 px-4"
            href="/about"
          >
            About
          </Link>
          <Link
            className="text-white hover:text-gray-300 cursor-pointer"
            href="/contact"
          >
            Contact
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
