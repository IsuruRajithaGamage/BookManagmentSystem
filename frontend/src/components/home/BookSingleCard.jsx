import React, { useState } from "react";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import BookModel from "./BookModel";

const BookSingleCard = ({ books }) => {
  const [showModel, setShowModel] = useState(false);
  return (
    <div
      key={books._id}
      className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {books.publishYear}
      </h2>
      <h4 className="my-2 text-gray-500">{books._id}</h4>
      <div className="flex justify-start books-center gap-x-2">
        <PiBookOpenTextLight className="text-red-300 text-2xl" />
        <h2 className="my-1 text-white">{books.title}</h2>
      </div>
      <div className="flex justify-start books-center gap-x-2">
        <BiUserCircle className="text-red-300 text-2xl" />
        <h2 className="my-1 text-white">{books.author}</h2>
      </div>
      <div className="flex justify-between books-center gap-x-2 mt-4 p-4">
        <BiShow
          className="text-3xl text-blue-800 hover:text-black cursor-pointer"
          onClick={() => setShowModel(true)}
        />
        <Link to={`/books/details/${books._id}`}>
          <BsInfoCircle className="text-2xl text-green-800" />
        </Link>
        <Link to={`/books/edit/${books._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-800" />
        </Link>
        <Link to={`/books/delete/${books._id}`}>
          <MdOutlineDelete className="text-2xl text-red-800" />
        </Link>
      </div>
      {showModel && (
        <BookModel book={books} onClose={() => setShowModel(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;
