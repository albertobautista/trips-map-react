import { menuItems } from "./constants";

export const Navbar = () => {
  return (
    <nav className="shadow-lg bg-sky-700">
      <div className="container flex items-center justify-center p-1 mx-auto capitalize">
        {menuItems.map((item, index) => {
          return (
            <a key={index} href={item.url} className="p-2">
              <span className="text-lg  text-white tracking-wide">
                {item.title}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};
