import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state={
      blogs: []
    }
  }

  getBlogs() {
    axios.get(`/api/blogs`)
      .then(res =>  {
        this.setState({
          blogs: res.data
        })
      })
      .catch(err => console.log('O no error getting all blogs on front end'))
  }

  render() {
const mappedBlogs = this.state.blogs.map((blog, i) => {
  return (
    <h3 key={i}>{blog.blog_text}</h3>
  )
})

    return (
      <div className="App">
        <h1>This is my blog</h1>
        <button onClick={() => this.getBlogs()}>Click Me</button>
        {mappedBlogs}
      </div>
    );
  }
}

export default App;
