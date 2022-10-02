import React, { Component, useState } from 'react'
import { useEffect } from 'react';
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function SearchNews({query}) {


    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const updateNews = async () => {

        let url  = `https://newsapi.org/v2/everything?q=${query}&apiKey=6ae1a811d62c43ffb72b877408b53ed9`;

        

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
  
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6ae1a811d62c43ffb72b877408b53ed9&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1)
        let data= await fetch(url) 
        let parsedData=await data.json()
        console.log(parsedData)
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setLoading(false)
      
      }
  return (
    <div className=' inline-block ml-44 mx-auto bg-white absolute h-fit '>
          <div className="flex justify-center">{loading && <Spinner/>}</div>
          <InfiniteScroll
              dataLength={articles.length}
              next={fetchMoreData}
              hasMore={articles.length !== totalResults}
              loader={<Spinner />}
          >
              <div className="container">

 
                  <div className="row">
                      {articles.map((element) => {

                          return <div key={element.url} className="col-md-7">
                              <NewsItem title={element.title ? element.title.slice(0, 45) : " "} description={element.description ? element.description.slice(0, 88) : " "} imageUrl={element.urlToImage ? element.urlToImage : "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"} Url={element.url} author={element.author ? element.author : "author"} date={element.publishedAt} />
                          </div>
                      })}
                  </div>


              </div> </InfiniteScroll>
        

        
        
        
      
    </div> 
  )
}

SearchNews.defaultProps = {
    
  };
