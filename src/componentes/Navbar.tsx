import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { Bell, Home, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-300 pb-4">
      {/* LEFT */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="Ecom"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
        />
        <p className=" hidden md:block text-md font-medium tracking-wider">
          Ecom
        </p>
      </Link>

      {/* RIGHT */}
      <div className=" flex items-center gap-5">
        <SearchBar />
        <Link href="/">
          <Home className="w-4 h-4 text-gray-600" />
        </Link>
        <Link href="/">
          <Bell className="w-4 h-4 text-gray-600" />
        </Link>
        <Link href="/">
          <ShoppingCart className="w-4 h-4 text-gray-600" />
        </Link>

        <Link href="Login">Sign in</Link>
      </div>
    </nav>
  );
};

export default Navbar;
