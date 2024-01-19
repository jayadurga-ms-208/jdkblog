import { useState,useEffect } from "react";
import BlogList from "./Bloglist";

const Home = () => {
   const [blogs,setBlogs] = useState([
    {title:'my new web1',body:'Loreal 1',name:'josh',id:1},
    {title:'my new web2',body:'loreal 2',name:'jack',id:2},
    {title:'my new web3',body:'loreal 3',name:'void',id:3}
   ])

const[name,setName] = useState('mario');

useEffect(()=> {
   console.log(name);
},[name]);


const handleDelete = (id) => {
   const newBlogs = blogs.filter(blog => blog.id !== id);
   setBlogs(newBlogs);
}
    return ( 
        <div className="home">
           <BlogList blogs={blogs} title="BlogList" handleDelete={handleDelete}/>
           <button onClick={() => setName('lugio')}>Change name</button>
        </div>
     );
}
 
export default Home;