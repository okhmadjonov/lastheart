import React from 'react';
import './homepage.css';
import { Navbar, Banner, Description,
    Images, Apply, Contact, Customer, Footer } from '../components';


class Homepage extends React.Component{
    constructor(){
        super();
        this.state={}

    }
    render(){
        return(
            <div>
                <Navbar />
                <Banner />
                <Description />
                <Images />
                <Apply />
                <Contact />
                <Customer />
                <Footer />
            </div>
        )
    }
}

export default Homepage;