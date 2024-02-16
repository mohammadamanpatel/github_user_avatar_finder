import React, { useEffect, useState } from 'react'

export const useDebounce = (searchTag) => {
   const [gitHubUserData,setgitHubUserData] = useState([]);
   const fetchData = async()=>{
     try{
      const res = await fetch(`https://api.github.com/search/users?q=${searchTag||"Farman"}`);
     const data = await res.json();
     console.log("data in useDebounce =>",data.items);
     setgitHubUserData(data.items);
     }
     catch(error){
      setgitHubUserData([]);
     }
   }
   useEffect(()=>{
    fetchData('Farman');              
   },[])
   return {fetchData,gitHubUserData}
}
