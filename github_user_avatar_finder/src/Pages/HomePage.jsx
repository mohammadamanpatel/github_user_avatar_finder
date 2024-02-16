import React, { useState } from 'react'
import { useDebounce } from '../CustomHook/useDebounce';
import "../styles/HomePage.css"
import { PhotoCard } from '../Component.jsx/PhotoCard';
export const HomePage = () => {
    const [searchTag,setsearchTag] = useState('Farman');
    //Now Thats how we will use the things of useDebounce i.e (fetchData and gitHubUserData)
    const {fetchData,gitHubUserData} = useDebounce(searchTag) 
    const debounceUpdateSearch = (event)=>{
        setsearchTag(event.target.value);
        fetchData(searchTag)
    }
    console.log("gitHubUserData in HomePage",gitHubUserData);
  return (
        <div>
            <div>
                <input type="text" onChange={debounceUpdateSearch} id="userInput" placeholder="Enter Github username"/>
            </div>
            <div id="imageContainer">
               {
                gitHubUserData && gitHubUserData?.map((e,index)=>{
                    return <PhotoCard id={e.login} url={e.avatar_url} key={index}/>
                })
               }
              
            </div>
        </div>
    )
}
