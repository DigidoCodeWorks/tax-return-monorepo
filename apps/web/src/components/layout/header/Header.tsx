import BurgerIcon from '@/components/icons/BurgerIcon';
import LogoIcon from '@/components/icons/LogoIcon';
import ProfileIcon from '@/components/icons/ProfileIcon';
import SearchIcon from '@/components/icons/SearchIcon';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-bold text-[#2b2b2b]">
            <LogoIcon />
          </Link>
        </div>

        <div className="flex relative items-center">
          <div className="flex items-center relative w-full max-w-sm">
            <input
              type="text"
              placeholder="Leitaðu á Ísland.is"
              className="w-full pointer-events-none rounded-md bg-[#F6F9FC] px-4 py-2 pr-10 text-sm placeholder:text-[#1B1B1B] border border-[#D0E3FC] focus:outline-none focus:ring-2 focus:ring-[#0061FF]"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#0061FF]">
              <SearchIcon className="shrink-0" />
            </span>
          </div>

          <button className="flex items-center border px-3 py-1 rounded text-sm gap-2 whitespace-nowrap">
            Mínar síður
            <ProfileIcon className="shrink-0" />
          </button>
          <button className="border px-3 py-1 rounded text-sm">EN</button>
          <button className="flex items-center gap-2 border px-3 py-1 rounded text-sm">
            Valmynd <BurgerIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
