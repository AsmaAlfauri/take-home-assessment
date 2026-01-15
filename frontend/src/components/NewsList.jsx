import NewsItem from "./NewsItem";

const NewsList = ({ news }) => {
  return (
    <ul className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md space-y-4 transition-colors duration-300">
      {news.map((item, index) => (
        <NewsItem key={index} item={item} />
      ))}
    </ul>
  );
};

export default NewsList;
