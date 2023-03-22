import Carousel from "react-material-ui-carousel";

export const InfoCard = () => {
  return (
    <Carousel animation="slide" swipe navButtonsAlwaysInvisible className="-z-0" >
      {newsExample.map((news, index) => (
        <div
          key={index}
          className="flex flex-row bg-red-900 rounded-lg h-[20vh] overflow-hidden"
        >
          <div className="w-2/5 relative">
            <img
              className="object-cover h-full"
              src={news.image}
              alt="news picture"
            />
          </div>
          <div className="w-3/5 flex flex-col justify-between">
            <p className=" text-white p-2">{news.title}</p>
            <p className=" text-white px-2 pr-4 text-xs font-bold">
              {news.author} :{" "}
              <span className="font-normal text-[0.7rem]">
                {news.description}
              </span>
            </p>
            <div className="flex justify-end">
              <p className="text-neutral-400 text-xs px-2 py-2">
                {news.date.getHours()}:{news.date.getMinutes()}
              </p>
              <p className="text-neutral-50 font-normal text-xs pl-2 pr-4 py-2">
                {news.date.getDate()}/{news.date.getMonth() + 1}/
                {news.date.getFullYear()}
              </p>
            </div>
            <div></div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

interface News {
  author: String;
  image?: string;
  title: String;
  description: String;
  date: Date;
}

const newsExample: readonly News[] = [
  {
    author: "Program Manager",
    image: "images/profile_pic.png",
    title: "New Info about Program",
    description:
      "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    date: new Date(2022, 12, 16, 12, 23),
  },
  {
    author: "Program Manager",
    image: "images/msu_logo.png",
    title: "New Info about Program",
    description:
      "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    date: new Date(2021, 11, 12, 18, 43),
  },
  {
    author: "Program Manager",
    image: "images/eklas_logo.png",
    title: "New Info about Program",
    description:
      "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    date: new Date(2011, 2, 23, 14, 23),
  },
];


