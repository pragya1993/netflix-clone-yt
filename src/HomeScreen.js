import React from 'react'
import Banner from './Banner'
import "./css/homescreen.css"
import Nav from './Nav'
import userrequests from './request'
import Row from './Row'
function HomeScreen() {
  return (
    <div className="homescreen"> 
        <Nav/>
        <Banner/>
        <Row title="Netflix Originals" isLargeRow fetchURL={userrequests.fetchNetflixOriginals}/>

        <Row title="Trending Now" fetchURL={userrequests.fetchTrending}/> 

        <Row title="Top Rated" fetchURL={userrequests.fetchTopRated}/> 

         <Row title="Action Movies" fetchURL={userrequests.fetchActionMovies}/> 

        <Row title="Horror Movie" fetchURL={userrequests.fetchHorrorMovies}/> 

        <Row title="Comedy Movie" fetchURL={userrequests.fetchComedyMovies}/> 

        <Row title="ROmantic Movie" fetchURL={userrequests.fetchRomanceMovies}/> 

        <Row title="Documentries" fetchURL={userrequests.fetchTDocumentraies}/>  
   </div>
  )
}

export default HomeScreen