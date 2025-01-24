import useBook from "../context/BookContext";

const AddBook = () => {
  const { setNewBook, newBook, handleAddBook } = useBook();

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setNewBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Add Book
      </h1>

      {/* Form */}
      <form
        onSubmit={handleAddBook}
        className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6"
      >
        {/* Title Input */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Title:
          </label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={inputChangeHandler}
            value={newBook.title}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter the book title"
          />
        </div>

        {/* Author Input */}
        <div className="mb-4">
          <label
            htmlFor="author"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Author:
          </label>
          <input
            type="text"
            name="author"
            id="author"
            onChange={inputChangeHandler}
            value={newBook.author}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter the author's name"
          />
        </div>

        {/* Status Select */}
        <div className="mb-4">
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Select Status:
          </label>
          <select
            onChange={inputChangeHandler}
            value={newBook.status}
            name="status"
            id="status"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="" disabled>
              Choose status
            </option>
            <option value="read">Read</option>
            <option value="unread">Unread</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBook;
