import React, { Component } from 'react'
import './AdvertiesmentOne.css'

function AdverstiesmentOne(props){
    return(
        <div className='Advertiesment_main'>
            <div className='Adverstiesment_header'>
            Up to 70% off | Electronics Clearance store 
            </div>
            <div className='Advertiesment_body'>
                <img src='https://ik.imagekit.io/jwnobwzqu/amazon-image/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204_.jpg?updatedAt=1679640260493' width={300}/>
            </div>
            <div className='Advertiesment_footer'>
                 See more 
            </div>
        </div>
    );
}
export default AdverstiesmentOne;