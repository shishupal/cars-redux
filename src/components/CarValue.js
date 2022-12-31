import { useSelector } from "react-redux";
const CarValue =()=>{


    const price = useSelector(({cars:{search, data}})=>{
        return  data.filter((car)=>{

             return car.name.toLowerCase().includes(search.toLowerCase());
         }).reduce((acc,car)=>{
             return acc+car.cost
         },0)
   });

return(<div>
     Total value  ${price }
</div>);

}
export default CarValue;