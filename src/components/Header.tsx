import { Logo } from "./Logo";

// Tailwind: padding padrão (p) = 4px   py-5 = 20  'cause 5 * 4 = 20

export function Header() {
    return (
        <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600">
            <Logo />
        </header>
    )
}