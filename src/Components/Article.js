import React, { Component } from 'react'
import { Typography } from '@mui/material';
import styled from 'styled-components';

const PostTitle =styled(Typography)`
border: 1px solid black;
padding: 0 40px;
`


const PostContent =styled(Typography)`
border: 1px solid black;
padding: 0 40px;
background-color: grey;
color: white;
`




export default class Article extends Component {
constructor(props){
    super(props);
    this.state= {
        inputValue: "",
        date: new Date (),
        data: [],
        loading: true,
        error: false,

    };
    this.handleChange = this.handleChange.bind(this);
}
componentDidMount(){
    this.timer = setInterval(() => this.tick(), 1000 )

    fetch ('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((post) => 
    this.setState({
        data: post,
        loading: false,
    }))
    
}
tick (){
    this.setState({
        date: new Date(),
    })
}
handleChange(event){
    this.setState({
        inputValue: event.target.value,
    });
}
  render() {
    return (
        <>
      <h2>Class Component</h2>
      <input 
      type="text" 
      value={this.state.inputValue} 
      onChange={this.handleChange} />
      <p>This is the current time: {this.state.date.toLocaleTimeString()}</p>

      {this.state.data.map((post) => {
        return (
            <>
            <PostTitle variant='h6'> {post.title}</PostTitle>
            <PostContent> {post.body} </PostContent>
            </>
        )
      })}

     
      </>
    )
  }
}
