import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-2 md:px-8 py-4 bg-violet-400 min-w-full text-black flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold">Foodie 😋🍕</h1>
      </div>
      <div>
        <nav>
          <ul className="flex gap-12">
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/cart"}>
              <li>Cart</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
