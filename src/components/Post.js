import React from 'react'
import {
  useParams
} from "react-router-dom";

class Post extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            post: null
        };
    }
  
  componentDidMount(){
    const { id } = this.props.match.params;
    fetch(`http://localhost:8080/proyecto-prueba/wp-json/wp/v2/posts/${id}?_embed`)
    .then(response => response.json())
    .then(data => {
        this.setState({
            post: data
        });      
    })
  }

  render () {
    const post = this.state.post;
    return (
        <div className="container my-5 p-5">
           { 
            post
            ?
            <div>
              <h1>{post.title.rendered}</h1>
              <img src={post._embedded['wp:featuredmedia'][0].source_url}/>
              <p dangerouslySetInnerHTML={{__html: post.content.rendered}}></p>
            </div>
            :
            <div>loading</div>
           }
           
        </div>
    )
  }
}

export default Post;
