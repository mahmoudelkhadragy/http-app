import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    posts: []
  };
  async componentDidMount() {
    const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    this.setState({ posts });
  }
  render() {
    const { posts } = this.state;
    return (
      <div className="container">
        <h1 className="text-center">All Posts</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post.id}>
                <th scope="row">{post.title}</th>
                <td>
                  <button className="btn btn-info btn-sm">Update</button>
                </td>
                <td><button className="btn btn-danger btn-sm">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;