import { useSelector,useDispatch } from "react-redux";
import { changeSearch } from "../store";

const CarSearch =()=>{

     const dispatch = useDispatch();
   const search = useSelector((state)=>state.cars.search)
const handleSearch =(e)=>{

     dispatch(changeSearch(e.target.value));
}

return(  <div className="container float-right">
<div className="form-group">
        <label className="col-md-2 control-label" htmlFor="carSearch">
          CarSearch
        </label>
        <div className="col-md-3">
            <input type="text" 
            className="form-control" 
            name="carSearch"
           value={search || ''}
            id="carValue"
            onChange={handleSearch}
            />
          
        </div>
    </div>
    </div>);

}
export default CarSearch;