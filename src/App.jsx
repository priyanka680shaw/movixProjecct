import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import {SearchResult, Details, PageNotFound, Explore, Home, Layout, Movies, TvShows} from "./index"
import  { SkeletonTheme } from 'react-loading-skeleton';

function App(){

// useEffect(()=>{
//   apiTesting()
// } , [])

// function apiTesting(){
//     FetchDataFromApi("/movie/popular").then((res)=>)
// }

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
      <Route path='/' element = {<Home/>}/>
        <Route path='/:mediaType/:id' element = {<Details/>}/>
        <Route path='/search/:query' element = {<SearchResult/>}/>
        <Route path='/explore/:mediaType' element = {<Explore/>}/>
        {/* path * means if no matching path will found it */}
        <Route path='*' element = {<PageNotFound/>}/> 
        <Route path='/movies' element = {<Movies/>}/>
        <Route path='/tvShows' element = {<TvShows/>} />
        <Route path='/details/:id' element = {<Details/>} />
    </Route>
  )
)
 return(
   <>


   <SkeletonTheme baseColor="#202020" highlightColor="#444">
   <RouterProvider router={router}></RouterProvider>
   </SkeletonTheme>
 
   </>

    )
}

export default App
