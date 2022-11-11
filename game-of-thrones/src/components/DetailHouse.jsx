import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { ComeBackButton } from '../components/ComeBackButton';
import "./DetailHouse.scss";


export const DetailHouse= () => {
  
    const {idHouse} = useParams();
    const[house, setHouse] = useState([]);
<<<<<<< HEAD
    const algo = "hassadsadsadsaddasdsad"
    const date = algo.substring(0,1)
    console.log(date)


=======
    
>>>>>>> dev
    useEffect(() => {
        const getData = async () => {
            const {data} = await axios.get(`https://api.got.show/api/show/houses/${idHouse}`)
            setHouse(data[0]);
            console.log(data[0]);
        }
        getData();
    }, [idHouse])  

    return (
    <>
    <ComeBackButton backTo="/houses"></ComeBackButton>
    <div className='container-fluid d-flex align-items-center flex-column detail-house'>
        
        <img className='detail-house--img-house' src={house && house.logoURL} alt={house[0] && house[0].name}></img>
        <h1 className='detail-house--name'>{house && house.name}</h1>
        
        <div className='container-fluid d-flex justify-content-between detail-house--gallery '>

        <div className='detail-house--gallery--box'>
            <h2 className='detail-house--gallery--box--title'>Lema</h2>
            <p className='detail-house--gallery--box--details--logo'>{house && house.sigil}</p>
        </div>

        <div className='detail-house--gallery--box'>
        <h2 className='detail-house--gallery--box--title'>Sede</h2>
        <p className='detail-house--gallery--box--details'>
            {house && house.seat}
        </p>
        </div>

        <div className='detail-house--gallery--box'>
        <h2 className='detail-house--gallery--box--title'>Region</h2>
        <ul className='detail-house--gallery--box--details'>
            {house.region && house.region.map((region, index) => <li className='detail-house--gallery--box--details--list' key={index}>{region}</li>)}
        </ul>
        </div>

        <div className='detail-house--gallery--box'>
        <h2 className='detail-house--gallery--box--title'>Alianzas</h2>
        <ul className='detail-house--gallery--box--details'>
            {house.allegiance && house.allegiance.map((allegiance, index) => <li className='detail-house--gallery--box--details--list' key={index}>{allegiance}</li>)}
        </ul>
        </div>
        
        <div className='detail-house--gallery--box'>
        <h2 className='detail-house--gallery--box--title'>Religiones</h2>
        <ul className='detail-house--gallery--box--details'>
            {house.religion && house.religion.map((religion, index) => <li className='detail-house--gallery--box--details--list' key={index}>{religion}</li>)}
        </ul>
        </div>

        <div className='detail-house--gallery--box'>
        <h2 className='detail-house--gallery--box--title'>Fundacion</h2>
        <ul className='detail-house--gallery--box--details'>
            <li></li>
        </ul>
        </div>

        </div>
    </div>
    </>
  )
}
