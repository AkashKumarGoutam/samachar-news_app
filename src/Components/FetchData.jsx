import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FetchData = ({ele}) => {
    const[data , setData]=useState("")
    const fetchData =async ()=>{
        await axios.get(ele?`https://newsapi.org/v2/top-headlines?country=in&category=${ele}&apiKey=98cc6cd62cf142cc99dfd88bc3b8e229`:'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=98cc6cd62cf142cc99dfd88bc3b8e229')
        .then((res)=>setData(res.data.articles));

    }

    useEffect(() => {
      fetchData()
    }, [ele])
    

  return (
    <div className='container my-4 '>
        <h3>TOP HEADLINES . . . .</h3>
        <div className='my-5 row '>{data? data.map((element) => 
        <>
        <div className='col-md-4 mb-5 d-flex justify-content-center align-items-center'>
        <div className="card shadow rounded-5 " style={{width: "18rem"}}>
            <img src={element.urlToImage || "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"} style={{height:"200px"}} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{element.title? element.title.slice(0,30) :"sorry Titles are not avilable "}</h5>
                <p className="card-text">{element.description? element.description.slice(0, 40): "Sorry description are not available"}</p>
                <a href={element.url} target='blank' className="btn btn-primary">Read More</a>
            </div>
         </div>
         </div>
        </>
        ):"Loding..."}</div>
    </div>
  )
}

export default FetchData
