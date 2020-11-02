import React, { Component } from 'react';
import MyPic from '../assets/images/profilepic.jpg'; /*ni untuk embed gambar dari src/assets/images */

export default class About extends Component {
    render() {
        let resumeData = this.props.resumeData; 
        return (
            <section id = 'about' >
                <div className = 'row' >
                    <div className = 'three columns' >
                        <img className = 'profile-pic' src = {MyPic} alt ='' style ={{maxWidth: '300px', width: '100%'}} /> {/* tambah src = {MyPic} utk tarik gmbr yg dh embed td*/}
                    </div>

                    <div className = 'nine columns main-col'>
                        <h2 style={{color: "brown"}}> About Me </h2>
                        <p>
                            {
                            resumeData.aboutme
                            }
                        </p>

                        <div className = 'row'>
                            <div className = 'columns contact-details'>
                                <h2 style={{color: "brown"}}> Contact Details </h2>   
                                    <p className = 'details'>
                                        <span><b>Name: </b>{resumeData.name}</span>
                                        <br></br>
                                        <span><b>Address: </b>{resumeData.address}</span>
                                        <br></br>
                                        <span><b>Website URL: </b>{resumeData.website}</span>
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}