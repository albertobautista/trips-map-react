import { menuItems } from "./constants";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 shadow-lg bg-sky-700 z-50">
      <div className="container flex items-center justify-center p-1 mx-auto capitalize">
        {menuItems.map((item, index) => {
          return (
            <a key={index} href={item.url} className="p-2">
              <span className="text-lg text-white tracking-wide">
                {item.title}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};
