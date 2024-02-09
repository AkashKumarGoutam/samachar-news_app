import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardSimmerEffect from './CardSimmerEffect';

const FetchData = ({ ele }) => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const fetchData = async () => {
        const response = await axios.get(
            ele
                ? `https://newsapi.org/v2/top-headlines?country=in&category=${ele}&apiKey=98cc6cd62cf142cc99dfd88bc3b8e229&page=${currentPage}&pageSize=9`
                : `https://newsapi.org/v2/top-headlines?country=in&apiKey=98cc6cd62cf142cc99dfd88bc3b8e229&page=${currentPage}&pageSize=9`
        );
        setData(response.data.articles);
    };

    useEffect(() => {
        fetchData();
    }, [ele, currentPage]);

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    };

    if (data.length === 0) {
        return <CardSimmerEffect />;
    }

    return (
        <div className='container my-4 '>
            <h3>TOP HEADLINES . . . .</h3>
            <div className='my-5 row '>
                {data.map((element, index) => (
                    <div key={index} className='col-md-4 mb-5 d-flex justify-content-center align-items-center'>
                        <div className="card shadow rounded-5 " style={{ width: "18rem" }}>
                            <img src={element.urlToImage || "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"} style={{ height: "200px" }} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{element.title ? element.title.slice(0, 30) : "sorry Titles are not available "}</h5>
                                <p className="card-text">{element.description ? element.description.slice(0, 40) : "Sorry description are not available"}</p>
                                <a href={element.url} target='blank' className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <button onClick={handlePreviousPage} className="btn btn-primary" style={{ width: "100px", height: "35px", fontSize: "15px", display: "flex", justifyContent: "center", alignItems: "center" }}>&larr; Previous</button>
                <button onClick={handleNextPage} className="btn btn-primary" style={{ width: "100px", height: "35px", fontSize: "15px", display: "flex", justifyContent: "center", alignItems: "center" }}> Next &rarr;</button>
            </div>
        </div>
    );
}

export default FetchData;
