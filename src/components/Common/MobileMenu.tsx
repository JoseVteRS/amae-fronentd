import { useState } from 'react';

interface MobileMenuProps {
  links: { label: string; href: string }[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        type="button"
        className="block w-full text-center py-4 bg-blue-600 text-white font-medium rounded-md focus:outline-none"
        onClick={toggleMenu}
      >
        Menu
      </button>

      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity duration-300 z-50 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />

      <div
        className={`fixed inset-y-0 right-0 w-full max-w-xs bg-white z-50 overflow-auto transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="px-4 pt-5 pb-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900">Menu</h2>
            <button
              type="button"
              className="text-gray-500 rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
              onClick={toggleMenu}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-4">
            <nav className="grid gap-y-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={toggleMenu}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
