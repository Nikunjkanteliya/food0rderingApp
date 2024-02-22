import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerbar-Wrapper">
      <div className="logo-Wrapper">
        {" "}
        <img
          src="https://assets.materialup.com/uploads/61d86780-be13-47fa-81a6-226aac22db27/preview.jpg"
          alt="img"
        />
      </div>

      <div>
        <ul id="headerBar-ul">
          <Link to="/">
            {" "}
            <li>Home</li>
          </Link>
          <Link to="/options">
            <li>Options</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>{" "}
          </Link>
          <Link to="/aboutus">
            <li>About us</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
