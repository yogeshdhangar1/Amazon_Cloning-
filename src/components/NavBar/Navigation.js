import React, { Component } from 'react'
import "./NavBar.css"

class NavBar extends Component{
    constructor(props){
        super(props)
        this.state = { }
    }
    render(){
        return( 
             <div>
            <div className='navbar_component'>
                <div className='navbar_logo'></div>
                <div className='navbar_locator'>
                 <div className='navbar_lovatorImage'></div>   
                <div className='navbar_location'>Banglore</div>
                </div>
                <div className='navbar_Searchcomponennt'>
                    <div >
                        <select className='navbar_dropdown'>
                            <option value ="">All</option>
                            <option value ="">Alexa </option>
                            <option value ="">Books</option>
                            <option value ="">Baby</option>
                            <option value ="">AmazonFresh</option>
                            <option value ="">AmzonFriut</option>
                            <option value ="">AmazonPay</option>
                            <option value ="">Deals</option>
                            <option value ="">Amazonget</option>
                        </select>
                    </div>
                    <div>
                        <input type="text" className='navbar_secrchbox'/>
                    </div>
                    <div className='nav_searchbardiv'>
                        <div className='navbar_serchIcon'/>
                    </div>
                </div>
                <div className=' navbar_text navbar_signIn'> 
                     <div style={{fontSize:"14px"}}>Hello,Sign In</div>
                     <div style={{fontWeight: "bold"}}> Account & List</div>
                     </div>
                <div className=' navbar_text navbar_retrun'>
                    <div style={{fontSize:"14px"}}> Return</div>
                    <div style={{fontweight:"bold"}}> & Orders</div> 
                </div>
                <div className='navbar_text navbar_Cart'>
                    <div src='' className='cart_image'></div>
                    <div className='cart_item'>0</div>
                    <div className='navbar_textCart'>Cart</div>
                </div>
            </div>
            <div className='navbar_footer'>
            <div className='navbar_footer_text'> Best Seller</div>
            <div className='navbar_footer_text'> Mobile</div>
            <div className='navbar_footer_text'> AmazonPay</div>
            <div className='navbar_footer_text'> Electronics</div>
            <div className='navbar_footer_text'> Fashion</div>
            <div className='navbar_footer_text'> Prime</div>
            <div className='navbar_footer_text'> New Release</div>
            <div className='navbar_footer_text'> Customer Service</div>
            <div className='navbar_footer_text'> Computers</div>
            <div className='navbar_footer_text'> Home & Kitchen</div>
            </div>
            </div>
            
        );
    }
}

export default NavBar;