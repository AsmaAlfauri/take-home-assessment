import NewsItem from "./NewsItem";

const NewsList = ({ news }) => {
  return (
    <ul className="bg-white p-6 rounded-lg shadow-md space-y-4">
      {news.map((item, index) => (
        <NewsItem key={index} item={item} />
      ))}
    </ul>
  );
};

export default NewsList;
