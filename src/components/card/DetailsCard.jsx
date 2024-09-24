import ContentWrapper from "../contentWrapper/ContentWrapper";
import poster from "./no-poster.png";
import bgImage from "./bgImage.jpeg";
import { useEffect, useState } from "react";
import UseFetch from "../../hooks/UseFetch";
import DetailsCardSkeleton from "../skeleton/SkeltionDetailsCard";
import { FetchDataFromApi } from "../../utils/api";
import { setIdBased } from "../../redux/slice/moviesSlice";
import { useSelector, useDispatch } from "react-redux";
import PlayButton from "../playButton/PlayButton";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import fallBackImg from "./no-poster.png"
import VideoPopUp from "../../pages/details/MovieDetails/VideoPopUp";
// import moment from "react-moment";

const DetailsCard = ({ movieId }) => {
  const dispatch = useDispatch();

  const idMovieData = useSelector((state) => state.movie?.idBased);
  //video data
  const video = useSelector((state) => state.movie?.officialVideo)
  const videoId = video[0]?.key
  // console.log("video", video)


  //data for director and writter
  const crewData = useSelector((state) => state.movie?.topCrew)

  const director = crewData?.filter((f) => f.job === "Director")
  const writer = crewData?.filter((f) => f.job === "Screenpaly" || f.job === "Story" || f.job === "Writer")
  // console.log("writer" , writer.name)

    // backdrop_path,
    
    
 
   
 

  const imgBaseUrl = "https://image.tmdb.org/t/p/original";
  const { data, loading } = UseFetch("/movie/top_rated");
  const [background, setBackground] = useState("");

  //trailor
  const [videoType , setVideoType] = useState("trailer")
  //background image 
  useEffect(() => {
    const bg = data?.results?.[Math.floor(Math.random() * 20)].backdrop_path;
    const bgImg = bg ? `${imgBaseUrl}${bg}` : bgImage;
    setBackground(bgImg);
  }, [data]);

  //left vvcard image
  function idBasedApi() {
    FetchDataFromApi(`/movie/${movieId}`).then((res) => {
      const idData = res;
      dispatch(setIdBased(idData));
    });
  }

  useEffect(() => {
    idBasedApi();
  }, [movieId]);

  const imgUrl = idMovieData?.backdrop_path ? `${imgBaseUrl + idMovieData?.backdrop_path}` : poster;

  const getColor = (rating) => {
    if (rating >= 7) return '#4caf50'; // Green for high ratings
    if (rating >= 4) return '#ff9800'; // Orange for medium ratings
    return '#f44336'; // Red for low ratings
  };


  //popShow and hide
  const [showPopUp, setShowPopUp] = useState(false)
  // console.log(showPopUp)
  return (
    <>

    <div className="w-full h-screen justify-center items-center relative">
      <div className="herobanner w-full relative">
        <div className="banner w-[100%] ">
          {!loading && (
            <img
              src={background}
              className="h-[98vh] w-[100%] object-cover opacity-70 "
            />
          )}
        </div>
        {/* card wrapper */}
        <div className="wrapper absolute inset-0 flex justify-center items-center">
          <div
            className="Hero w-full h-screen flex justify-center items-center text-white bg-cover bg-center"
            style={{
              background:
                "linear-gradient(to bottom, rgba(4, 21, 45, 0.7), rgba(4, 21, 45, 1))",
            }}
          >
            {

              !idMovieData?.backdrop_path ? <DetailsCardSkeleton /> :
                <ContentWrapper>
                  <div className="searchBar text-center px-4 sm:px-6 md:px-10 lg:px-20 ">
                    <div className="w-full h-auto m-2 cursor-pointer  rounded-xl shadow-xl bg-gray-900 bg-opacity-50">
                      <div className="flex flex-col md:flex-row justify-between gap-8 p-6">
                        {/* Image Container */}
                        <div className="LeftimageContainer relative w-[500px] md:w-1/2  h-[400px] lg:[500px]">
                          {
                            imgUrl ? (
                              <img
                                src={imgUrl}
                                className="w-full h-full lg:h-[450px] object-center rounded-3xl"
                                alt={idMovieData?.title || idMovieData.original_title}
                              />
                            ) : (
                              <img
                                src={fallBackImg}
                                className="w-full h-full object-center rounded-3xl"
                                alt={fallBackImg}
                              />
                            )
                          }
                        </div>
                        {/* Details */}
                        <div className=" rightContainer w-full md:w-2/3 lg:w-3/4 flex flex-col justify-center text-center md:text-left ">
                          <h1 className="text-lg md:text-2xl lg:text-3xl font-bold mb-2 text-white">
                            {idMovieData?.title ||idMovieData.original_title}   ( {new Date(idMovieData?.release_date).getFullYear()} )
                          </h1>
                          <h3 className="text-base md:text-lg lg:text-2xl text-gray-400 mb-4 font-serif">
                            {idMovieData?.tagline}
                          </h3>
                          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                            {idMovieData?.genres?.map((genre) => (
                              <span
                                key={genre.id}
                                className="type bg-red-500 px-3 py-0.5 rounded text-white text-xs md:text-sm"
                              >
                                {genre.name}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                            <div className="rating w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]">
                              <CircularProgressbar
                                value={idMovieData?.vote_average * 10}
                                text={idMovieData?.vote_average?.toFixed(1)}
                                styles={buildStyles({
                                  textColor: '#fff',
                                  fontWeight: "bold",

                                  pathColor: getColor(idMovieData?.vote_average),
                                  trailColor: '#d6d6d6',
                                })}
                              />
                            </div>
                            <div className="playMovie flex justify-center items-center gap-4 hover:text-green-500 text-red-700">
                              <span onClick={() => {
                                setShowPopUp(true)
                              }}>
                                <PlayButton size={"60px"} onClick={() => setVideoType("trailer")} />
                              </span>

                              <p className="text-lg md:text-xl lg:text-2xl font-semibold">
                                Watch Trailer
                              </p>
                            </div>
                          </div>
                          <div className="overView mb-4 sm:hidden lg:block">
                            <h1 className="text-lg lg:text-xl font-semibold mb-2 text-white ">
                              Overview
                            </h1>
                            <p className="text-sm md:text-base lg:text-sm text-gray-400 ">
                              {idMovieData.overview}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-4 mb-4 text-white">
                            <span className="status text-xs md:text-sm lg:text-base">
                              Status: {idMovieData?.status}
                            </span>
                            <span className="releaseDate text-xs md:text-sm lg:text-base ">

                              Release Date:  {new Date(idMovieData?.release_date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',  // For full month name, use 'short' for abbreviated month
                                day: '2-digit',
                              })}
                            </span>
                            <span className="runTime text-xs md:text-sm lg:text-base">
                              Runtime: {Math.floor(idMovieData?.runtime / 60)}h {idMovieData?.runtime % 60}m
                            </span>
                          </div>
                          <hr />
                          {/* {
                            director?.length > 0 && (
                              <>

                                <div className="flex flex-wrap gap-4 mt-4 text-white">
                                  <span className="runTime text-xs md:text-sm lg:text-base">
                                    Director : {
                                      director?.map((data, idx) => {
                                        <span key={idx}>
                                          {data.job} {director.lenght - 1 !== idx && ", "}
                                        </span>
                                      })
                                    }
                                  </span>

                                </div>
                                <hr />
                              </>
                            )
                          } */}
                          {
                            writer?.length > 0 && (
                              <>

                                <div className="flex flex-wrap gap-4 mt-4 text-white">
                                  <span className="runTime text-xs md:text-sm lg:text-base text-start">
                                    Writer : {
                                      writer?.map((data, idx) => {
                                        <span key={idx}>
                                          {data.job} {writer.lenght - 1 !== idx && ", "}
                                        </span>
                                      })
                                    }
                                  </span>

                                </div>
                                <hr />
                              </>
                            )
                          }

                        </div>
                      </div>

                    </div>
                  </div>


                </ContentWrapper>

            }
          </div>
        </div>
      </div>
      {/* popup  */}
   
        
        {

          showPopUp && (
            <div className="absolute top-0 w-screen h-screen m-auto">
            <VideoPopUp  setShowPopUp={setShowPopUp} videoId={videoId}   width={"100vw"} height={"100vh"} videoType={videoType}/>
            </div>
          )
        }
   </div>
    </>
  );
};

export default DetailsCard;



