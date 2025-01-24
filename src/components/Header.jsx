import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo or Title */}
        <h1 className="text-2xl font-bold">
          <Link to="/" className="hover:text-blue-300">
            Book Store
          </Link>
        </h1>

        {/* Navigation Menu */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/addBook"
                className="text-white hover:text-blue-300 transition duration-300"
              >
                Add Book
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-white hover:text-blue-300 transition duration-300"
              >
                Books
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
