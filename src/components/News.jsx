import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

const News = () => {

    const news = useSelector(news => news.news)
    console.log(news)

    return (
        <div>

            {
                news.map((news, index) => {
                    return (
                        <div key={index} className='m-2'>
                            <h1>{news.heading}</h1>
                            <img src={news.image} alt="" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default News