import React from 'react'

import Card from './Card'

class Posts extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }
     
  
  componentDidMount(){
    fetch('http://localhost:8080/proyecto-prueba/wp-json/wp/v2/posts?_embed')
    .then(response => response.json())
    .then(data => {
        this.setState({
            posts: data
        });      
    })
  }

  render () {
    return (
        <div className="container my-5 p-5">
            {
                    this.state.posts.map(function(item, key){
                        return (
                            <Card
                                key={item.id}
                                id={item.id}
                                title={item.title.rendered} 
                                desc={item.excerpt.rendered} 
                                img={item._embedded['wp:featuredmedia'][0].source_url}
                            />
                        )
                    })

            }
        </div>
    )
  }
}

export default Posts;
