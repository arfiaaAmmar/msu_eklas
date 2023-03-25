import { QrCodeScanner } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";

export default function Library() {
  const books: Book[] = [
    {
      title: "Ali dan Abu",
      description: "Ali dan abu pergi ke kedai",
      publishDate: new Date(2022, 12, 16, 12, 23),
      availability: true,
      tags: "engineering",
    },
    {
      title: "Ali dan Abu 2",
      description: "Ali dan abu pergi ke kedai",
      publishDate: new Date(2022, 12, 16, 12, 23),
      availability: true,
      tags: "msu"
    },
    {
      title: "Ali dan Abu 3",
      description: "Ali dan abu pergi ke kedai",
      publishDate: new Date(2022, 12, 16, 12, 23),
      availability: true,
      tags: "science"
    },
  ];

  return (
    <>
      <div className="bg-neutral-800 p-4 rounded-md">
        <p className="text-semibold text-lg text-white mb-4">e-Library</p>
        <form className="flex gap-2">
          <input
            type="search"
            name="SearchLibrary"
            id="SearchLibrary"
            className="rounded-md bg-neutral-200 h-8 p-2 flex-grow"
            placeholder="Search Library"
          />
          <SearchIcon
            className="text-white bg-red-600 rounded-full p-1"
            fontSize="large"
          />
          <QrCodeScanner
            className="text-white bg-red-600 rounded-full p-1"
            fontSize="large"
          />
        </form>
        <div className="flex my-4 gap-2">
          <div className="w-4/6">
            <img
              src="/images/profile_pic.png"
              alt=""
              className="object-cover rounded-lg h-full"
            />
          </div>
          <div>
            <p className="text-lg text-white font-semibold">Book Title.</p>
            <p className=" text-neutral-300 text-xs">
              Lorem ipsum dolor sit amet cocessitatibus esse? Impedit, at soluta
              sunt magnam ratione voluptates?
            </p>
            <p className="bg-red-600 mr-0 ml-auto mt-2 w-max py-1 px-3 text-white rounded-md text-xs ">
              Available
            </p>
          </div>
        </div>
        {books.map((book, index) => (
          <Book
            title={book.title}
            description={book.description}
            tags={book.tags}
            availability={book.availability}
          />
        ))}
      </div>
    </>
  );
}

type Book = {
  title: string;
  description: string;
  publishDate?: Date;
  availability: Boolean;
  tags?: "msu" | "science" | "engineering" | undefined;
};

import React from "react";

const Book = (book: Book) => {
  return (
    <div>
      <div className="h-[1px] w-full bg-neutral-400 opacity-60" />
      <div className="flex my-2 gap-2">
        <div className="w-16">
          <img
            src="/images/profile_pic.png"
            className="rounded-lg object-contain h-full"
            alt=""
          />
        </div>
        <div className="text-white">
          <p className="font-semibold">{book.title}</p>
          <p className="text-xs">{book.description}</p>
          <div className="text-[0.7rem] flex gap-2 mt-1">
            <p className="bg-blue-500 rounded-md px-[0.2rem]">{book.tags}</p>
            <p className="bg-neutral-300 rounded-md px-[0.2rem] text-black">
              L3|R4|S5
            </p>
          </div>
        </div>
        <div>
          <p className="text-xs text-neutral-300 text-right">
            {book.publishDate?.getFullYear()}
          </p>
          <p className="text-white mt-1 bg-red-600 text-xs mr-0 ml-auto rounded-md px-1">
            {book.availability == true ? "Available" : "Unavailable"}
          </p>
        </div>
      </div>
    </div>
  );
};
