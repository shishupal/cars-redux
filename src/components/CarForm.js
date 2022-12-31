import { useDispatch,useSelector } from "react-redux";
import { addCars, changeName, changeValue } from "../store";


const CarForm =()=>{
    const dispatch =useDispatch();
   

   const {name,cost } = useSelector((state)=>{
        return state.form;
    });

    const handleChangeName= (e)=>{

        dispatch(changeName(e.target.value));
    }

    const handleChangeCost = (e)=>{
        const value = parseInt(e.target.value) || 0;
        dispatch(changeValue(value));
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(addCars({
            name,
            cost
        }))
    }
return(<div className="form-container">
    <form className="form-horizontal" onSubmit={handleSubmit}> 
    <div className="form-group">
        <label className="col-md-2 control-label" htmlFor="name">
            Name
        </label>
        <div className="col-md-3">
            <input type="text" 
            className="form-control" 
            name="name"
           value={name}
            id="name"
            onChange={handleChangeName}
            />
            
        </div>
    </div>
    <div className="form-group">
        <label className="col-md-2 control-label" htmlFor="carValue">
           Car Value
        </label>
        <div className="col-md-3">
            <input type="number" 
            className="form-control" 
            name="carValue"
           value={cost || ''}
            id="carValue"
            onChange={handleChangeCost}
            />
            
        </div>
    </div>
    <div className="form-group">
        <button className="btn btn-primary" type="submit">
            Submit
            </button>
    </div>
    </form>
     
</div>);

}
export default CarForm;