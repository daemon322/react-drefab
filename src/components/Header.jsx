import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-4 text-white bg-black shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Market</h1>
        <nav className="flex gap-2">
          <Link to="/" className="px-8 py-1 hover:bg-white hover:text-black rounded-tl-2xl">
            Inicio
          </Link>
          <Link to="/cart" className="px-8 py-1 hover:bg-white hover:text-black rounded-tr-2xl">
            Carrito
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
