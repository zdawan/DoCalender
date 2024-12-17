import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";
import { AuthModal } from "./AuthModal";

export function Navbar() {
  //Link helps to avoid loading on redirects and prefetching
  return (
    <div className="flex py-2 items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <Image src={Logo} alt="Logo" className="size-10" />
        <h4 className="text-2xl font-semibold">
          Do<span className="text-blue-600">Calender</span>
        </h4>
      </Link>

      <AuthModal />
    </div>
  );
}
