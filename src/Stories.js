import React from 'react'
import { useGlobalContext } from './Context'
const Stories = () => {
  const {hits,isLoading,removePost}=useGlobalContext();
    if(isLoading){
        return(
            <>
                <h1>
                    Loading...
                </h1>
            </>
        );
    }
  return (
    <>
    <div className="stories-div">
    {hits && hits.map((curPost)=>{
      const {title,author,objectId,url,num_comments}=curPost;
        return (
            <div className="card" key={objectId}>
              <h2>{title}</h2>
              <p>
                By <span>{author}</span> | <span>{num_comments}</span> comments
              </p>
              <div className="card-button">
                <a href={url} target="_blank" rel="noreferrer">Read More</a>
                {/* <a onClick={()=>removePost(objectId)}>Remove</a> */}
                <button onClick={() => removePost(objectId)}>Remove</button>
              </div>
            </div>
        );
    })}
    </div>
    </>

  )
}

export default Stories
