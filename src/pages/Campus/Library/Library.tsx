import { QrCodeScanner } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import useFetch from "../../../hooks/useFetch";
import { Box, List, Typography } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import HighlightedBook from "./BookHighlight";

export type Book = {
  title: string | undefined;
  description: string | undefined;
  thumbnail: string | undefined;
  publishDate?: Date;
  availability: Boolean;
  tags?: "msu" | "science" | "engineering" | undefined;
};

export default function Library() {
  const [search, setSearch] = useState("");
  const [currentBook, setCurrentBook] = useState<Book>({
    title: " data[0].title",
    description: "data[0].description",
    thumbnail: "",
    availability: true,
    publishDate: new Date(),
    tags: "msu",
  });
  const [books, setBooks] = useState<Book[]>([]);

  const { data, isLoading, error } = useFetch<Book[]>(
    "http://localhost:3000/library"
  );

  useEffect(() => {
    if (data && Array.isArray(data) && data.length > 0) {
      setCurrentBook(data[0]);
      setBooks(data);
    }
  }, [data]);

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!Array.isArray(data)) return <p>Data is not an array</p>;

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    const filteredBooks = data.filter((book) =>
      book.title?.toLowerCase().includes(e.target.value.toLocaleLowerCase())
    );
    setBooks(filteredBooks)
    setCurrentBook(filteredBooks[0])
  };

  return (
    <>
      <div className="bg-neutral-800 p-4 rounded-md">
        <Typography className="text-semibold text-lg text-white mb-4">
          e-Library
        </Typography>
        <form className="flex gap-2">
          <input
            type="search"
            name="SearchLibrary"
            onChange={handleSearch}
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
        <HighlightedBook
          title={currentBook?.title}
          description={currentBook?.description}
          publishDate={currentBook?.publishDate}
          availability={currentBook?.availability!}
          thumbnail={currentBook?.thumbnail!}
          tags={currentBook?.tags!}
        />
        {books!.map((book, index) => (
          <List key={index}>
            <div className="h-[1px] w-full bg-neutral-400 opacity-60" />
            <Box display={"flex"} gap={2} marginY={1}>
              <div className="w-2/4 border-4 border-white rounded-md">
                <img
                  src={book.thumbnail}
                  className="rounded-lg object-cover h-full"
                  alt=""
                />
              </div>
              <div className="text-neutral-50">
                <Typography className="font-semibold">{book.title}</Typography>
                <Typography className="text-neutral-50 text-xs">
                  {book.description}
                </Typography>
                <div className="text-[0.7rem] flex gap-2 mt-1">
                  <Typography className="bg-blue-500 rounded-md px-[0.2rem]">
                    {book.tags}
                  </Typography>
                  <Typography className="bg-neutral-300 rounded-md px-[0.2rem] text-black">
                    {book.tags}
                  </Typography>
                </div>
              </div>
              <div>
                <Typography className="text-xs text-neutral-300 text-right">
                  {new Date(book.publishDate!).toLocaleDateString("en-GB")}
                </Typography>
                <Typography
                  className={`text-white mt-1 ${
                    book.availability == true ? "bg-red-600" : "bg-neutral-400"
                  } text-xs mr-0 ml-auto rounded-md px-1`}
                >
                  {book.availability == true ? "Available" : "Unavailable"}
                </Typography>
              </div>
            </Box>
          </List>
        ))}
      </div>
    </>
  );
}
