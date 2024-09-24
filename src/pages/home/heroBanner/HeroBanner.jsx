import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UseFetch from "../../../hooks/UseFetch";

const HeroBanner = () => {
  //base url 
  const imgBaseUrl = "https://image.tmdb.org/t/p/original";

  const { data, loading } = UseFetch("/movie/top_rated");
 
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const searchQueryHandlerOnEnterPress = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      // console.log(e.target.value , "query" , query)
      navigate(`/search/${query}`);
      setQuery("")
    }
  };

  console.log(data  , " Loding" ,  loading , "background"  ,  background)

  const searchQueryHandlerOnButtonClick = (e) => {
    console.log(e.target.value, "query", query)
    navigate(`/search/${query}`);
    setQuery("")
  };

  useEffect(() => {
    const bg = data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(imgBaseUrl + bg);
  }, [data]);

  return (
    <>
      <div className="herobanner w-full relative ">
        <div className="banner">
          {background? <img src={background} className="h-[98vh] w-screen " alt="img"/> :  <div className="h-[98vh] w-screen bg-black "></div>}
        </div>

        <div className="wrapper absolute inset-0 flex justify-center items-center">
          {/* Applying the style correctly */}
          <div
            className="Hero w-full h-screen flex justify-center items-center text-white bg-cover bg-center"
            style={{
              background: "linear-gradient(to bottom, rgba(4, 21, 45, 0.7), rgba(4, 21, 45, 1))",
            }}
          >
            <div className="searchBar text-center p-4 max-w-[90%] md:max-w-[70%] lg:max-w-[50%]">
              <h1 className="text-[40px] md:text-[60px] lg:text-[80px] xl:text-[100px] font-bold leading-tight">
                Welcome.
              </h1>
              <p className="text-[18px] md:text-[20px] lg:text-[25px] font-bold mb-4">
                Millions of movies, TV shows, and people to discover. Explore now.
              </p>
              <div className="searchbar p-2 m-4 flex flex-col sm:flex-row justify-center">
                <input
                  type="text"
                  value={query}
                  placeholder="Search for Movies or TV Shows..."
                  className="w-full sm:w-[500px] md:w-[600px] lg:w-[700px] text-red-950 pt-4 font-bold pb-4 pl-8 text-lg rounded-tl-[30px] sm:rounded-tl-[40px] sm:rounded-bl-[40px] rounded-tr-[30px] sm:rounded-tr-none sm:rounded-br-none focus:outline-none focus:ring-0"
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyUp={searchQueryHandlerOnEnterPress}

                />
                <button className="w-full sm:w-[150px] md:w-[200px] bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-50 p-4 text-lg sm:text-xl font-bold mt-4 sm:mt-0 rounded-tr-[30px] sm:rounded-tr-[40px] sm:rounded-br-[40px] sm:rounded-bl-none" onClick={(e) => {
                  searchQueryHandlerOnButtonClick(e)
                }}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
