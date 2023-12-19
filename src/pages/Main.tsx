import React from "react";
import Header from '../components/common/Header'
import MainSearch from "../components/main/MainSearch";
import Footer from '../components/common/Footer'


function Main() {
    return (
      
      <div>
        <link rel="stylesheet" href="src\components\common\navbar.css"></link>
        
        <Header/>
        <MainSearch />
        <h5 className="my-36 text-center">메인입니다.</h5>
        <Footer/>
      </div>
    )
}

export default Main;