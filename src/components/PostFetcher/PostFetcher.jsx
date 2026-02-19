import { useEffect, useState } from "react";

const h2Style = "mx-4 text-2xl";
const h3Style = "mx-4 mt-4 text-xl";
const pStyle = "mx-4 my-2 text-md";
const buttonStyle = "mx-4 mt-4 px-4 py-2 rounded hover:shadow bg-blue-500 text-white";

function PostFetcher() {
    const [postData,setPostData] = useState({});
    const [postNumber,setPostNumber] = useState(1);

    useEffect(()=>{
        fetchData();
    },[postNumber,]);

    async function fetchData() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/"+postNumber);
        const json = await response.json();
        console.log(json);
        setPostData(json);
    }

  return (
    <>
    
        <h2 className={h2Style}>Post Fetcher</h2>

        <h3 className={h3Style}>{postData.title}</h3>
        <p className={pStyle}>{postData.body}</p>
        <p className={pStyle}>User: {postData.userId}, Post: {postData.id}</p>
        <button className={buttonStyle} onClick={()=>{if(postNumber>1){setPostNumber(postNumber-1)}}}>Prev</button>
        <button className={buttonStyle} onClick={()=>setPostNumber(postNumber+1)}>Next</button>
      
    </>
  )
}

export default PostFetcher