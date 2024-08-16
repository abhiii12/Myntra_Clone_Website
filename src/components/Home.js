import React from 'react'
import Header from "./Header"
import Festive from './Festive'
import Categories from './Categories'
import Footer from './Footer'
function Home(){
    return(
        <div>
          <Header></Header>
          <Festive></Festive>
          <Categories></Categories>
          <Footer></Footer>
        </div>
    )
}
export default Home