import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

const News = () => {

    const news = useSelector(news => news.news)
    console.log(news)

    return (
        <div className=''>

            {
                news?.map((news, index) => {
                    return (
                        <div key={index} className='m-2'>
                            <img src={news.image} alt="" />
                            <p className='p-1'>{news.date} </p>
                            <h1 className='text-2xl font-bold p-1'>{news.heading}</h1>
                            <p className='p-1'>{news.subHeading} </p>
                            <p className='p-1'>{news.description} </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default News