import React from 'react'
import {
    Link,
  } from "react-router-dom";

class Card extends React.Component {
    constructor(props) {
        super(props);
    }
  render () {
    return (
        
        <div className="row featurette my-5">
            <div className="col-md-7">
            <Link to={`/posts/${this.props.id}`}>
                <h2 className="featurette-heading">{this.props.title}</h2>
            </Link>
            <p className="lead" dangerouslySetInnerHTML={{__html: this.props.desc}}></p>
            </div>
            <div className="col-md-5">
            <img
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width="500"
                height="500"
                src={this.props.img}
            />
    
            </div>
        </div>
    )
  }
}

export default Card;