import { useSelector, useDispatch } from "react-redux";
import {removeCars} from "../store/index";

const CarList =()=>{
     const dispatch = useDispatch();
     const {name, carList} = useSelector(({form,cars:{search, data}})=>{
          const filterData=  data.filter((car)=>{

               return car.name.toLowerCase().includes(search.toLowerCase())
           })

           return {
               carList:  filterData,
               name: form.name
           }
     });


     const handleRemove= (car)=>{
        
          dispatch(removeCars(car.id))
     }

     const renderedList =(carList)=>{

        return (<>
        <div className="row rowHeader">
                    <div className="col-md-4  bold">
                         Car Name
                    </div>
                    <div className="col-md-4  bold">
                         Price
                    </div>
                    <div className="col-md-4  bold">

                         Action
                    </div>
        </div>
        {
              carList.map((car)=>{
                   const bold = name && car.name.toLowerCase().includes(name);
                   console.log(bold);

                   const rowstle = bold ? {
                    backgroundColor:"black",
                    color:"white"
                  }:{};
               return (<div className="row" key={car.id} style={rowstle}>
                    <div className="col-md-4">{car.name}</div>
                    <div className="col-md-4">{car.cost}</div>
                    <div className="col-md-4">
                         <button 
                         name={car.id}
                         className="btn btn-primary"
                         onClick={()=>handleRemove(car)}
                         >
                              remove
                         </button>
                    </div>
               </div>)
          })
        }
        </>
        )

        
     }

return(<div>

     <div className="container">
          { carList.length > 0 ? renderedList(carList) :<></>}
     </div>
</div>);

}
export default CarList;