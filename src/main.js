import axios from 'axios';
import React,{useEffect,useState} from 'react';
import ListBlog from './ListBlog';

function Main() {
    const [Data,setData]=useState([{}]);
    useEffect(()=>{
        const getData=async()=>
        {
            const data=await axios.get('https://jsonplaceholder.typicode.com/posts')
            setData(data.data)
        }
        getData();
    },[])
  return (
    <div className='container mt-5'>
        {Data.length<=1?<p>Loanding...</p>:<ListBlog props={Data}/>}
    </div>);
}

export default Main;
