import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ScrollToTop from '../Components/ScrollToTop';

const SearchPage = () => {
    const [searchData, setSearchData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const handleSearchData = (e) => {
        setSearchQuery(e.target.value);
    };

    const fetchSearchData = async () => {
        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=98cc6cd62cf142cc99dfd88bc3b8e229&page=${currentPage}&pageSize=6`);
            setSearchData(response.data.articles);
        } catch (error) {
            console.error('Error fetching search data:', error);
        }
    };

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

    useEffect(() => {
        if (searchQuery !== '') {
            fetchSearchData();
        }
    }, [searchQuery, currentPage]);

    return (
        <div className='container my-4'>
            <div style={{ justifyContent: "center", alignItems: "center", display: "flex" }}>
                <input type='text' placeholder='  Search ...' value={searchQuery} onChange={handleSearchData} style={{ width: "300px", paddingLeft: "20px", height: "40px", border: "2px solid gray", borderRadius: "10px" }} />
            </div>
            <div className='my-5 row'>
                {searchData.length > 0 ? (
                    searchData.map((article, index) => (
                        <div key={index} className='col-md-4 my-3'>
                            <div className='card shadow m-3 '>
                                <img src={article.urlToImage || "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"} style={{ height: "200px" }} className='card-img-top' alt='Article' />
                                <div className='card-body'>
                                    <h5 className='card-title'>{article.title ? article.title.slice(0, 40) : "sorry no title here"}</h5>
                                    <p className='card-text'>{article.description ? article.description.slice(0, 40) : "sorry no description here"}</p>
                                    <a href={article.url} target='_blank' rel='noreferrer' className='btn btn-primary'>Read More</a>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p style={{ fontSize: "30px" }}>Search up,<span style={{ color: "red" }}> whatever</span> you want <span style={{ color: "red" }}> ....</span> </p>
                )}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <button onClick={handlePreviousPage} className="btn btn-primary" style={{ width: "100px", height: "35px", fontSize: "15px", display: "flex", justifyContent: "center", alignItems: "center" }}>&larr; Previous</button>
                <button onClick={handleNextPage} className="btn btn-primary" style={{ width: "100px", height: "35px", fontSize: "15px", display: "flex", justifyContent: "center", alignItems: "center" }}> Next &rarr;</button>
            </div>
        </div>
    );
};

export default SearchPage;
