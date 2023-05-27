import { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { ProfilePic } from "../assets/images/images";
import useFetch from "../hooks/useFetch";

export const InfoCard = () => {
  const { data, isLoading, error } = useFetch<News[]>(
    "http://localhost:3000/news"
  );

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!Array.isArray(data)) {
    return <p>Data is not an array</p>;
  }

  const truncateMessage = (message:string) => {
    return message.substring(0, 100) + '...'
  }

  return (
    <Carousel
      animation="slide"
      swipe
      navButtonsAlwaysInvisible
      className="-z-0"
    >
      {data?.map((news: News, index: number) => (
        <div
          key={index}
          className="flex flex-row bg-red-900 rounded-lg h-[20vh] overflow-hidden"
        >
            <div className="w-2/5 relative">
              <img
                className="object-cover h-full"
                src={news.images[0]}
                alt="news picture"
              />
            </div>
          <div className="w-3/5 flex flex-col justify-between">
            <p className=" text-white p-2">{truncateMessage(news.title)}</p>
            <p className=" text-white px-2 pr-4 text-xs font-bold">
              {truncateMessage(news.author)} :{" "}
              <span className="font-normal text-[0.7rem]">{truncateMessage(news.text)}</span>
            </p>
            <div className="flex justify-end">
              <p className="text-neutral-50 font-normal text-xs pl-2 pr-4 py-2">
                {(new Date(news.timePublished)).toLocaleDateString("en-GB")}
              </p>
            </div>
            <div></div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export interface News {
  id: number;
  images: string[];
  title: string;
  author: string;
  text: string;
  timePublished: Date;
}

// const newsExample: News[] = [
//   {
//     author: "Program Manager",
//     image: { ProfilePic },
//     title: "New Info about Program",
//     description:
//       "I'll be in the neighbourhood this week. Let's grab a bite to eat",
//     date: new Date(2022, 12, 16, 12, 23),
//   },
//   {
//     author: "Program Manager",
//     image: { ProfilePic },
//     title: "New Info about Program",
//     description:
//       "I'll be in the neighbourhood this week. Let's grab a bite to eat",
//     date: new Date(2021, 11, 12, 18, 43),
//   },
//   {
//     author: "Program Manager",
//     image: { ProfilePic },
//     title: "New Info about Program",
//     description:
//       "I'll be in the neighbourhood this week. Let's grab a bite to eat",
//     date: new Date(2011, 2, 23, 14, 23),
//   },
// ];
