import './GetHouseIMG.scss';
import axios from "axios";
import { useEffect, useState } from "react"

export const GetHouseIMG = ({nameHouse}) => {

    const[house, setHouse] = useState([]);
   



    useEffect(() => {
        const getHouse = async () => {
            const {data} = await axios.get(`https://api.got.show/api/show/houses/${nameHouse}`)
            setHouse(data);
            console.log(data);
        }
        getHouse();
    }, [nameHouse]) 

    
    return(
    
        
    <img className="house-img" key={house[0] && house[0].id} src={house[0] && house[0].logoURL ? house[0] && house[0].logoURL : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png' } alt={house[0] && house[0].name}></img>
        
      
    )
}