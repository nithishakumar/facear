import React from 'react';
import Post from '../components/Post';
import '../App.css';
import Footer from '../components/Footer';
import Spacer from '../components/Spacer';


function DevBlog({ title }) {

  const post1 = {
    title: 'December 5 - 8, 2022',
    youtubeEmbedCode: 'idwFisucEwQ',
    topics: [
      {
        title: "UI Improvements",
        img: "",
        text: [
          "We made a home screen, added a border that changes color when a user performs an expression correctly, and added UI elements that were sized correctly to fill all phones to all scenes."
        ]
      },
      {
        title: "Mini game improvements",
        img: "",
        text: [
          "We made sure the ball falls of the seesaw when the user’s smile is completely imbalanced and added a penalty for missing an obstacle in the jump game. We also made the jump game so that it goes on infinitely."
        ]
      },
      {
        title: "New Minigames",
        img: "",
        text: [
          "Eye Maze: this game involves completing a maze by blinking one eye.\n",
          "Jump Game 2: similar to the first jump game, in this jump game one has to open their mouth instead of raising their eyebrows to dodge an obstacle."
        ]
      }
    ]
  }

  return (
    <div className='bg-img'>
      <h1>Development Timeline</h1>
      <Post post={post1} />
      <Spacer color='bg-img grey' />
      <Footer color="grey" />
    </div>
  );
}

export default DevBlog;