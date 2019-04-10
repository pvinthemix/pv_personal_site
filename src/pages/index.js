import React, { Component } from "react";
import '../styles/index.css';
import headshot from '../styles/images/headshot.png'

class index extends Component {

  render() {
    return (
      <div className='landing'>
        <div className='main'>
          <div className='user-image'>
            <img className='headshot' src={headshot}></img>
          </div>
          <div className='user-name-div'>
            <h1 className='user-name'>@pvinthemix</h1>
          </div>
          <div className='user-title'>
            <h2 className='title'>Front-End Web Developer</h2>
          </div>
          <div className='social-links'></div>
        </div>
      </div>
    );
  }
}

export default index;