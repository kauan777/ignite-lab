import { List, X } from "phosphor-react";
import { Logo } from "./Logo";

// Tailwind: padding defaults (p) = 4px   py-5 = 20  'cause 5 * 4 = 20

interface HeaderProps {
  isSideBarVisible: boolean;
  setIsSideBarVisible(isSideBarVisible: boolean): void;
}

export function Header({ isSideBarVisible, setIsSideBarVisible }: HeaderProps) {
  function openSideBar() {
    setIsSideBarVisible(true)
  }

  function closeSideBar() {
    setIsSideBarVisible(false)

  }

  return (
    <header className="w-full py-5 px-8 flex justify-between items-center md:justify-center bg-gray-700 border-b border-gray-600">
      <Logo />
      {isSideBarVisible ? (
        <button className="block md:hidden" onClick={closeSideBar}>
          <X size={32} color="#cbd5e1" />
        </button>
      ) : (
        <button className="block md:hidden" onClick={openSideBar}>
          <List size={32} color="#cbd5e1" />
        </button>
      )}
    </header>
  );
}
