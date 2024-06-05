import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { useParams } from 'react-router-dom';
// import '../../../public/css/package.css'

function App() {
    const { place } = useParams();
    const [placeData, setPlaceData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:7000/api/place?place=${place}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setPlaceData(data);
        })
        .catch(error => console.error('Error fetching place data:', error));
    }, [place]);

    if (!placeData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="App">
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');
            body {
                margin: 0;
                padding: 0;
                font-family: Arial, sans-serif;
            }
            header {
                position: absolute;
                top: 0;
                left: -140px;
                width: 100%;
                padding: 30px 100px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                z-index: 10000;
                background-color: rgba(18, 18, 18, 0.44);
            }
            header .logo {
                height: 80px;
                width: 10;
            }
            header ul {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            header ul li {
                list-style: none;
                margin-left: 20px;
            }
            header ul li a {
                text-decoration: none;
                padding: 6px 15px;
                color: #fbfbfb;
                border-radius: 20px;
            }
            header ul li a:hover,
            header ul li a.active {
                background: #fff;
                color: #2b1055;
            }
            header a {
                text-decoration: none;
                color: #000000;
            }
            .Main {
                
                height: 90vh;
                background-attachment: fixed;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                font-family: 'Oswald', sans-serif;
                font-size: 200px;
                display: flex;
                text-align: center;
                justify-content: center;
                align-items: center;
                color: white;
            }
            .content {
                padding: 100px 20px;
                text-align: center;
                color: rgb(120, 120, 120);
                background-color: #000000;
            }
            .section {
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .section1 {
                height: 150vh;
                display: flex;
                justify-content: space-between;
                padding: 150px;
                align-items: center;
                flex-wrap: wrap;
                background-color: #d5d1d14f;
            }
            .items {
                width: 500px;
                height: 500px;
                display: flex;
                align-items: center;
                text-align: center;
                font-size: 3em;
                justify-content: center;
                background-color: rgb(47, 45, 45);
                box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
                transition: transform 0.5s ease;
                background-size: cover;
            }
            .items:hover {
                transform: scale(1.1);
            }
            .items p {
                display: flex;
                width: 500px;
                height: 500px;
                align-items: center;
                justify-content: center;
                text-align: center;
                background-color: rgba(0, 0, 0, 0.427);
                color: #ffffff;
            }
            .paris {
                background-image: url('../../../public/assets/france/paris.webp');
                background-size: cover;
            }
            
            .provence {
                background-image: url('../../../public/assets/france/provence.jpg');
                background-size: cover;
            
            }
            
            .french-riviera {
                background-image: url('../../../public/assets/france/French-Riviera.jpeg');
                background-size: cover;
            
            }
            
            .loire-valley {
                background-image: url('../../../public/assets/france/Loire%20Valley.jpg');
                background-size: cover;
            
            }
            
            .mont-saint-michel {
                background-image: url('../../../public/assets/france/Moint-saint.avif');
                background-size: cover;
            
            }
            
            .bordeaux {
                background-image: url('../../../public/assets/france/Bordeaux.webp');
                background-size: cover;
            
            }
            .section:nth-child(odd) {
                background-color: #191717;
            }
            .section:nth-child(even) {
                background-color: #ccc;
            }`}</style>
            <header>
                <ul>
                    <li><a href="#">Tour</a></li>
                </ul>
                <ul>
                    <li><a href="#" className="active">Home</a></li>
                    <li><a href="#">Packages</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#" target="_blank">LogIn</a></li>
                </ul>
            </header>
            <div className="Main" style={{position: "relative"}}>
    <p className='Main' style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>{placeData.Place}</p>
    <img className='Main' style={{objectFit: "cover", width: "100%", height: "100%"}} src={require(`${placeData.Imger}`)} />
</div>


            <div className="content">
                <h1>Explore More!</h1>
                {/* <img src={require('./France.jpg')}/> */}
            </div>
            <div className="section1">
                {Object.values(placeData).map((dest, index) => (
                    dest && dest.destinationName && dest.imageSrc && (
                        <div style={{backgroundImage: `url(${dest.imageSrc})`, backgroundSize:"cover", position: "relative"}} key={index} className={`items ${dest.destinationName.toLowerCase().replace(/\s/g, '-')}`}>
                        <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                            <p>{dest.destinationName}</p>
                        </div>
                        <img style={{flex:"1"}} src={require(`${dest.imageSrc}`)} width={500} height={500}/>
                    </div>
                    )
                ))}
            </div>
            <div className="section">
                <h1>To Add</h1>
            </div>
            <div className="section">
                <h2>To Add</h2>
                <p>To Add</p>
            </div>
        </div>
    );
}

export default App;
