import React, { Component } from 'react'
import "./mainpage.css"
import AdvertiesmentOne from "./AdvertiesmentOne/AdvertiesmentOne";
import AdverstiesmentFour from './AdvertiesmentFour/AdvertiesmentFour';
class MainPage extends Component {
    constructor(props){
        super(props);
        this.state = { }
    }
    render(){
        return(
            <div className='mainpage'>
                <div style={{paddingTop:"260px", display:"flex",flexWrap:"wrap"}}>
                    <AdvertiesmentOne/>
                    <AdvertiesmentOne/>
                    <AdverstiesmentFour/>
                    <AdvertiesmentOne/>
                    <AdvertiesmentOne/> 
                </div>
            </div>
        );
    }
}
export default MainPage;