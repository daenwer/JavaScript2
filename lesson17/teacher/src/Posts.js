// ajax запрос->ответ       -> fetch || axios
// callback - callback hell -> Promise -> async/await


// setTimeout(callback1, 30000);
// setInterval(callback2, 1000);



// fetch(погода)
//   .then(response => response.json())
//   .then(data => {
//     renderWeather(data);
//   })

//   console.log(1);
import React, { Component } from 'react';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
    
    console.log("1 компонента создана");
  }

  // side-эффекты (ajax, запуск таймеров, включение вебки, )
  componentDidMount() {
    console.log("3 компонента вмонтирована");

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        this.setState({ posts: data });
      });
  }

  render() {
    console.log("2 компонента отрисована");
    
    return (
      <ul>
        {this.state.posts.map(post => (
            <li key={post.id}>
              {post.body}
            </li>
        ))}
      </ul>
    );
  }
}

export default Posts;