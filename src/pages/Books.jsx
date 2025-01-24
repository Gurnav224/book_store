import useBook from "../context/BookContext";

const Books = () => {
  const { filtered: books, filterBooks, toggleBookStatus, deleteBook } = useBook();

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6">
        Books <span className="text-blue-600">({books.length})</span>
      </h1>

      {/* Filter Buttons */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => filterBooks("")}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition duration-300"
        >
          All Books
        </button>
        <button
          onClick={() => filterBooks("read")}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
        >
          Read
        </button>
        <button
          onClick={() => filterBooks("unread")}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300"
        >
          Unread
        </button>
      </div>

      {/* Book List */}
      <ul className="space-y-6">
        {books.map((book) => (
          <li
            key={book.title}
            className="p-4 bg-white shadow rounded-lg border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Title: <span className="text-blue-600">{book.title}</span>
            </h2>
            <p className="text-gray-600 mb-2">
              Author: <span className="font-medium">{book.author}</span>
            </p>
            <p className="text-gray-600 mb-4">
              Status:{" "}
              <span
                className={`font-medium ${
                  book.status === "read"
                    ? "text-green-600"
                    : "text-yellow-600"
                }`}
              >
                {book.status}
              </span>
            </p>

            {/* Actions */}
            <div className="flex space-x-4">
              <button
                onClick={() => toggleBookStatus(book.title)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
              >
                Toggle Status
              </button>
              <button
                onClick={() => deleteBook(book.title)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
