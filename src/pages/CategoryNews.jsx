import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/newsCard";



const CategoryNews = () => {

    const {data: news} = useLoaderData();
    console.log(news);
    return (
        <div>
            <h2 className="font-semibold">Dragon News Home</h2>
            <p>News Cart: ({news.length})</p>
            <div className="space-y-4">
            {
                news.map(singleNews => <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
            }
            </div>
        </div>
    );
};

export default CategoryNews;