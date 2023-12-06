import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const Fetchitems = () => {


   const fetchStatus = useSelector(store => store.fetchStatus);
const dispatch = useDispatch();

useEffect(() => {
    if (fetchStatus.fetchDone) return;
  
    const controller = new AbortController();
    const signal = controller.signal;
  
    // dispatch(fetchStatusActions.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({items}) => {
        // dispatch(fetchStatusActions.markFetchDone());
        // dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(itemsActions.addInitialItems(items[0]));
      })
    //   .catch((error) => {
    //     // Handle errors here
    //     console.error("Error fetching items:", error);
    //   })
    //   .finally(() => {
    //     // Set fetchDone to true after the fetch is completed
    //     dispatch(fetchStatusActions.setFetchDone(true));
    //   });
  
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);
  








return <>
{/* <div>  
Fetch Done: {fetchStatus.fetchDone}
Currently Fetching : {fetchStatus.currentlyFetching}
</div> */}
</>

}
export default Fetchitems