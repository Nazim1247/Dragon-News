
import { AiOutlineEye, AiOutlineShareAlt } from "react-icons/ai";

const NewsCard = (props = {}) => {
    const { news } = props || {};
    return (
        <div className="card bg-base-100 shadow-lg rounded-lg p-4">
            {/* Author and Date */}
            <div className="flex items-center mb-4">
                <img
                    src={news.author.img}
                    alt="Author"
                    className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                    <h2 className="text-sm font-semibold">{news.author.name}</h2>
                    <p className="text-xs text-gray-500">
                        {new Date(news.author.published_date).toLocaleDateString()}
                    </p>
                </div>
                <button className="ml-auto text-gray-400 hover:text-gray-600">
                    <AiOutlineShareAlt size={18} />
                </button>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-3">{news.title}</h3>

            {/* Image */}
            <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                <img
                    src={news.image_url}
                    alt="News"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Description */}
            <p className="text-sm text-gray-700 mb-4">
                {news.details.substring(0, 150)}...{" "}
                <span className="text-primary cursor-pointer font-medium">Read More</span>
            </p>

            {/* Rating and Views */}
            <div className="flex items-center justify-between">
                {/* Rating */}
                <div className="flex items-center">
                    {Array.from({ length: 5 }, (_, index) => (
                        <span
                            key={index}
                            className={`${index < Math.floor(news.rating.number) ? "text-yellow-500" : "text-gray-300"
                                }`}
                        >
                            ★
                        </span>
                    ))}
                    <span className="text-gray-600 ml-2 text-sm">{news.rating.number}</span>
                </div>
                {/* Views */}
                <div className="flex items-center text-gray-600 text-sm">
                    <AiOutlineEye className="mr-1" /> {news.total_view}
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
