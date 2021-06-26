import React from 'react'



class Main extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            page: null
        };
    }
     
  
  componentDidMount(){
    fetch('http://localhost:8080/proyecto-prueba/wp-json/wp/v2/pages?_slug=home')
    .then(response => response.json())
    .then(data => {
        this.setState({
            page: data[0]
        });      
    })
  }

  render () {
    const page = this.state.page;
    return (
        <div className="container my-5 p-5">
            
            {
                page
                ? <div dangerouslySetInnerHTML={{__html: page.content.rendered}}></div>
                : <div>....Loading</div>
            }
            
        </div>
    )
  }
}

export default Main;
