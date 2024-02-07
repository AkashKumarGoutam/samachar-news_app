import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SearchPage = () => {
    const [searchData, setSearchData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchData = (e) => {
        setSearchQuery(e.target.value);
    };

    const fetchSearchData = async () => {
        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=98cc6cd62cf142cc99dfd88bc3b8e229`);
            setSearchData(response.data.articles);
        } catch (error) {
            console.error('Error fetching search data:', error);
        }
    };

    useEffect(() => {
        if (searchQuery !== '') {
            fetchSearchData();
        }
    }, [searchQuery]);

    return (
        <div className='container my-4'>
            <input type='text' placeholder='  Search ...' value={searchQuery} onChange={handleSearchData} style={{width:"800px", paddingLeft:"20px", height:"40px" , border:"2px solid gray" , borderRadius:"10px"}}/>
            <div className='my-5 row'>
                {searchData.length > 0 ? (
                    searchData.map((article, index) => (
                        <div key={index} className='col-md-4 my-3'>
                            <div className='card shadow m-3 '>
                                <img src={article.urlToImage || "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png" } style={{height:"200px"}} className='card-img-top' alt='Article' />
                                <div className='card-body'>
                                    <h5 className='card-title'>{article.title ? article.title.slice(0,40):"sorry no title here"}</h5>
                                    <p className='card-text'>{article.description ? article.description.slice(0,40): "sorry no description here"}</p>
                                    <a href={article.url} target='_blank' rel='noreferrer' className='btn btn-primary'>Read More</a>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p style={{fontSize:"30px"}}>Please Enter value </p>
                )}
            </div>
        </div>
    );
};

export default SearchPage;
