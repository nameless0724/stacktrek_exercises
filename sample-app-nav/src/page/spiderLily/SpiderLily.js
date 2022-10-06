import { useEffect, useState } from 'react';
import axios from 'axios';
import Lily from './Lily';
/*import Lily2 from './Lily2';*/

const url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=96358825614a5d3b1a1c3fd87fca2b47&format=json&nojsoncallback=true&page=1&text=spiderlily'

const SpiderLily = () => {
    const [spiderLilyList, setSpiderLilyList] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                console.log(response);

               const floraList = response.data.photos.photo;

                const lilyList = floraList.map((item) => {
                    const imageUrl = "https://live.staticflickr.com";
                    const imageFormat = "jpg";
                
                    return new Lily(
                        {
                            title: item.title,
                            imageUrl: `${imageUrl}/${item.server}/${item.id}_${item.secret}.${imageFormat}`
                        }
                    )
                });

                setSpiderLilyList(lilyList);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return ( 
        <div className="App">
            <header className="App-header">
                <h1>Spider Lily</h1>
                <p>Spider Lily Gallery Walkthrough</p>
                <ul>
                    {spiderLilyList.map((item, index) => {
                        return (
                            <li key={index}>
                                <div>
                                    <img src={item.imageUrl} alt={item.title}></img>
                                    <div>{item.title}</div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </header>
        </div>
       /* <Lily2 />*/
    )
    
}

export default SpiderLily;