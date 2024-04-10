import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cardData = useSelector((state) => state.cart.cartItems);
  return (
    <div className="flex justify-between align-middle p-3 max-w-[1400px] ml-auto mr-auto mt-0 mb-0 text-neutral-500 text-lg sm:text-[13px] ">
      <div className="w-[50px]">
        {" "}
        <Link to="/body">
          <img
            className=" rounded-xl"
            data-testid="headerSrc"
            src="https://assets.materialup.com/uploads/61d86780-be13-47fa-81a6-226aac22db27/preview.jpg"
            alt="img"
          />
        </Link>
      </div>

      <div>
        <ul className="flex ">
          <Link to="/body">
            {" "}
            <li className=" p-2  hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400  ">
              Home
            </li>
          </Link>
          <Link to="/options">
            <li className="p-2  hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400 ">
              Contact-us
            </li>
          </Link>
          <Link to="/cart">
            <li
              className="p-2  hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400 "
              data-testid="cartData"
            >
              {cardData.length > 0 ? "Cart - " + cardData.length : "Cart"}
            </li>
          </Link>
          <Link to="/aboutus">
            <li className="p-2 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 lg:text-black/90 dark:lg:text-zinc-400 ">
              About-us
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
