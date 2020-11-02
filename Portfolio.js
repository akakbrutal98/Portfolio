import React, { Component } from 'react';

    export default class Porfolio extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id = 'portfolio'>
                <div className = 'row'>
                    <div className = 'twelve columns collapsed'>
                        <h1 style={{color: "brown"}}> Check Out Some of My Works! </h1>
                        <div id = 'portfolio-wrapper' className = 'bgrid-quarters s-bgrid-thirds cf'>
                        {
                            resumeData.portfolio && resumeData.portfolio.map((item)=>{
                            return(
                                <div className = 'columns portfolio-item'>
                                    <div className = 'item-wrap'>
                                        <a href = '#modal-01'>
                                        <div className = 'overlay'>
                                            <div className = 'portfolio-item-meta'>
                                                <h5>{item.name}</h5>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                        <img src={`${item.imgurl}`} className = 'item-img' style ={{maxWidth: '700px', width: '100%'}} />
                                        </a>
                                    </div>
                                </div>
                            )
                            })
                        } 
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}