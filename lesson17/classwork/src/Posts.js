import React from 'react';

class Posts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
        };

        console.log('1 компонента конструктор');
    }

    componentDidMount() {
        console.log('3 компонента вмонтирована в дом');

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                this.setState({ posts: data });
            })
    }

    render() {
        console.log('2 копонента отрисована');
        return (
            <ul>
                { this.state.posts.map(post => (
                    <li>
                        { post.body }
                    </li>
                )) }
            </ul>
        );
    }
}

export default Posts;