import Link from "next/link";
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { Bell, ChevronDown, Globe, User } from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden w-full bg-brand text-white lg:block">
      <div className="container-x flex h-10 items-center justify-between text-xs">
        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <Link
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Youtube"
            className="text-white/90 transition-colors hover:text-white"
          >
            <FaYoutube className="h-4 w-4" />
          </Link>
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-white/90 transition-colors hover:text-white"
          >
            <FaFacebookF className="h-4 w-4" />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white/90 transition-colors hover:text-white"
          >
            <FaInstagram className="h-4 w-4" />
          </Link>
        </div>

        {/* WhatsApp / Account / Status / Language */}
        <div className="flex items-center divide-x divide-white/25">
          <a
            href="https://wa.me/6281310092124"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 pr-4 font-medium text-white/95 transition-colors hover:text-white"
          >
            <FaWhatsapp className="h-3.5 w-3.5" />
            Pesan Via WA
          </a>
          <button className="flex items-center gap-1.5 px-4 font-medium text-white/95 transition-colors hover:text-white">
            <User className="h-3.5 w-3.5" />
            My Account
            <ChevronDown className="h-3 w-3" />
          </button>
          <button className="flex items-center gap-1.5 px-4 font-medium text-white/95 transition-colors hover:text-white">
            <Bell className="h-3.5 w-3.5" />
            Status Order
            <ChevronDown className="h-3 w-3" />
          </button>
          <button className="flex items-center gap-1.5 pl-4 font-medium text-white/95 transition-colors hover:text-white">
            <Globe className="h-3.5 w-3.5" />
            Language : ID
            <ChevronDown className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
