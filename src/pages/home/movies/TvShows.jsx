import { useEffect, useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import { FetchDataFromApi } from "../../../utils/api";
import Card from "../../../components/card/Card";
import SearchFilterButton from "../../../components/searchFilterButton/SearchFilterButton";
import MovieTypeHead from "../../../components/MovieTypeHead/MovieTypeHead";
import {  setTvShows } from "../../../redux/slice/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

import ReactLoding from "../../../components/lodder/ReactLoging";
const TvShows = () => {
  const dispatch = useDispatch();
  const movieData = useSelector((state) => state.movie.tvShows);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  function movieApi() {
    setLoading(true);
    FetchDataFromApi(`/discover/tv?page=${page}`).then((res) => {
      // console.log("resData", res);
      if (page > 1) {
        dispatch(setTvShows([...movieData, ...res.results]));
      } else {
        dispatch(setTvShows(res.results));
      }
      setLoading(false); // Set loading to false after data is fetched
    });
  }

  function scrollPage() {
    if (loading) return; // Prevent multiple increments while loading

    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.scrollHeight - 100 // Added a small offset to ensure smooth loading
    ) {
      setPage((prev) => prev + 1);
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      scrollPage();
    };

    const debounceScroll = debounce(handleScroll, 200); // Debounce to limit how often the function runs

    window.addEventListener("scroll", debounceScroll);
    return () => window.removeEventListener("scroll", debounceScroll); // Cleanup
  }, [loading]);

  useEffect(() => {
    movieApi();
  }, [page]);

  return (
    <div className="py-8 flex ">
      <ContentWrapper>
      <div className="headSection pb-8 flex md:flex-col gap-7 justify-between lg:flex-row ">
          <MovieTypeHead Movietype={"Explore Tv Shows"} />
          {/* <SearchFilterButton /> */}
        </div>
        <div className="movieCardDisplay flex flex-wrap justify-center items-center">
          {movieData && movieData.map((item, index) => (
            <Card key={index} cardItem={item} />
          ))}
        </div>
        {loading && <div className="w-full flex justify-center"> <h1 className="text-red-400 font-bold text-3xl">Loding...</h1></div>}
      </ContentWrapper>
    </div>
  );
};

export default TvShows;

// Debounce function to limit how often a function is executed
function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}
