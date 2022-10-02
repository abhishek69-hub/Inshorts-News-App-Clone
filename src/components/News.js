import React, { Component, useState } from 'react'
import { useEffect } from 'react';
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
 
export default function News(props) {


    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const updateNews = async () => {

        let url  = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=30e0bd74b19547c09904228551975e6d&page=${page}&pageSize=${props.pageSize}`;

        

        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json()

        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)

    }

    useEffect(() => {
        updateNews()
    }, [])


    const fetchMoreData = async()=>{
  
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=30e0bd74b19547c09904228551975e6d&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1)
        let data= await fetch(url) 
        let parsedData=await data.json()
        console.log(parsedData)
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setLoading(false)
      
      }

  return (

// The original designing



    // <div className=' inline-block  mx-auto bg-white absolute h-fit md:ml-44'>
    //       <div className="flex justify-center">{loading && <Spinner/>}</div>
    //       <InfiniteScroll
    //           dataLength={articles.length}
    //           next={fetchMoreData}
    //           hasMore={articles.length !== totalResults}
    //           loader={<Spinner />}
    //       >
    //           <div className="container">

 
    //               <div className="row">
    //                   {articles.map((element) => {

    //                       return <div key={element.url} className="col-md-7">
    //                           <NewsItem title={element.title ? element.title.slice(0, 45) : " "} description={element.description ? element.description.slice(0, 88) : " "} imageUrl={element.urlToImage ? element.urlToImage : "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"} Url={element.url} author={element.author ? element.author : "author"} date={element.publishedAt} />
    //                       </div>
    //                   })}
    //               </div>


    //           </div> </InfiniteScroll>
         
    // </div> 



    // designing for mobile


    <div className=' inline-block mt-[80px] mx-auto bg-white w-full  '>
    <div className="flex justify-center">{loading && <Spinner/>}</div>
    <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
    >
        


            <div >
                {articles.map((element) => {

                    return <div key={element.url} className="col-md-7">
                        <NewsItem title={element.title ? element.title.slice(0, 50) : " "} description={element.description ? element.description.slice(0, 88) : " "} imageUrl={element.urlToImage ? element.urlToImage : "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"} Url={element.url} author={element.author ? element.author : "author"} date={element.publishedAt} />
                    </div>
                })}
            </div>


         </InfiniteScroll>
   
         </div>


  )
}



News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: "technology",
    key:"technology"
  };