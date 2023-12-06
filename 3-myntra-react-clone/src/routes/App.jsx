import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Fetchitems from "../components/Fetchitems"
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";



function App() {
  const fetchStatus = useSelector(store => store.fetchStatus);




  return (
    <>
    
<Header></Header>
 
<Fetchitems></Fetchitems>
{fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet></Outlet> }


<Footer></Footer>


    
    </>
  )
}

export default App
