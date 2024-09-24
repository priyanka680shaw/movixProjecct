import {HeroBanner, Movies} from "../../index"
import TreandingMovie from "./movies/TreandingMovie"
import TopRatedMovie from "./movies/TopRatedMovie"
import PopulaeMovie from "./movies/PopularMovie"
const Home = () => {
  return (
    <>
        <div className="herobanner ">
            <HeroBanner/> 
        </div >
        <div className=" ">
          <TreandingMovie/>
        </div>
        <div>
          <TopRatedMovie/>
        </div>
        <div>
          <PopulaeMovie/>
        </div>
    </>
  )
}

export default Home
