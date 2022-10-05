import { useEffect, useState } from 'react';
import axios from 'axios';


const url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=96358825614a5d3b1a1c3fd87fca2b47&format=json&nojsoncallback=true&page=1&text=spiderlily'

function SpiderLily() {
    const [spiderLilyList, setSpiderLilyList] = useState([])

    useEffect(() => {
        axios.get(url)
            .then(function (response) {
                console.log(response)

               const flora = response.data
               const floraList = flora.photos.photo

                const lilyList = floraList.map((item) => {
                    return item.title
                })
                setSpiderLilyList(lilyList)
            })
    }, [])

    return ( 
        <div className="spider_lily">
                <div>
                    <h1>Spider Lilies</h1>
                    <p>Spider Lilies' Gallery Photos</p>
                    {
                        spiderLilyList.map((item) => {
                            return (
                            <li key={item}>{item}</li>
                            )
                        })
                    }
                    
                </div>
        </div>
    )
    
}

export default SpiderLily