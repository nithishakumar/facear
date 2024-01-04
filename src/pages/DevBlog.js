import React from 'react';
import Post from '../components/Post';
import '../App.css';
import Footer from '../components/Footer';
import Spacer from '../components/Spacer';
import Quote from '../components/Quote';


function DevBlog({ title }) {

  const post1 = {
    title: 'December 5 - 8, 2022',
    youtubeEmbedCode: 'idwFisucEwQ',
    topics: [
      {
        title: "UI Improvements",
        img: "",
        youtubeEmbedCode: "",
        text: [
          "We made a home screen, added a border that changes color when a user performs an expression correctly, and added UI elements that were sized correctly to fill all phones to all scenes."
        ]
      },
      {
        title: "Mini game improvements",
        img: "",
        youtubeEmbedCode: "",
        text: [
          "We made sure the ball falls of the seesaw when the user’s smile is completely imbalanced and added a penalty for missing an obstacle in the jump game. We also made the jump game so that it goes on infinitely."
        ]
      },
      {
        title: "New Minigames",
        img: "",
        youtubeEmbedCode: "",
        text: [
          "Eye Maze: this game involves completing a maze by blinking one eye.\n",
          "Jump Game 2: similar to the first jump game, in this jump game one has to open their mouth instead of raising their eyebrows to dodge an obstacle."
        ]
      }
    ]
  }

  const post2 = {
    title: 'November 28 - December 5, 2022',
    youtubeEmbedCode: 'GjkeZKvBgxM',
    topics: [
      {
        title: "Changing Directions",
        img: "",
        youtubeEmbedCode: "",
        text: [
          "Our initial plan for FaceAR was to advertise the application to individuals trying to reduce signs of aging and various facial disabilities. After taking the advice of Dr. Krishnan (the stakeholder we met for p3_research), we’re now only focusing on patients with facial disabilities through FaceAR. We removed hand tracking from our application because hand tracking and face tracking don’t work well together when the user covers their face with their hand as face tracking would stop when the user does so. We are working on using only face tracking to implement mini-games that track the accuracy of users’ facial exercises."
        ]
      },
      {
        title: "Mouth and Cheek Exercises",
        img: "",
        youtubeEmbedCode: "",
        text: [
          "We implemented a basic mouth/cheek exercise routine where the user has to perform an ordered set of facial exercises and hold them for 10 seconds."
        ]
      },
      {
        title: "Mini Games We Developed",
        img: "",
        youtubeEmbedCode: "",
        text: [
          " - Balance the ball: this game is specifically intended for patients who have weakened muscles on one side of the face, like those with Bell’s palsy. When a user performs an exercise, the game compares the exercise’s accuracy on the weakened side with the healthy side. Users can balance a moving ball based on how similar, that is, balanced, the exercise is on both sides of their face. This is a relatively easy game that the patient can play mid-recovery.\n",
          " - Jump Game: similar to the dinosaur game on chrome when that one can play when they’re not connected to the internet, one has to prevent a smiley face (instead of a dino) from touching an obstacle in this game by raising their eyebrows when necessary. This is a hard game that the patient can choose to play when they’re closer to recovery."
        ]
      },
      {
        title: "Testing Our App On A Facial Paralysis Patient",
        img: "",
        youtubeEmbedCode: "",
        text: [
          "We tested the app on a facial paralysis patient of Dr. Jennifer Kim, an Otolaryngology specialist at Michigan Medicine. The patient recently had facial reanimation surgery after a gunshot wound. We also filmed the process for p3_marketing. We learned that we may have to make a few changes to make the app more user-friendly for individuals with facial disabilities. For instance, we have to reduce the sensitivity of the face-tracking functionality to make gestures that are almost similar to the intended gesture also trackable. We also have to reduce the time an exercise has to be held in the routines to make it less tedious for someone using the app after a recent surgery."
        ]
      }
    ]
  }

  const post3 = {
    title: 'November 14 - 22, 2022',
    youtubeEmbedCode: 'R4_u-qVTIAA',
    topics: [
      {
        title: "Finishing our basic prototype",
        img: "",
        youtubeEmbedCode: "",
        text: [
          "We made one basic facial exercise with ARKit's Blendshapes. We also designed a face prefab to overlay on the user's face. ARKit’s BlendShapes has around 30 facial gestures that helped us detect facial movements at specific regions of the face. We plan to combine many of these gestures to create complex facial exercises. We will also look into awarding an accuracy score out of 100 for more complex exercises. We will expand on this prototype by adding a timer that calls for the user to hold the facial exercise for a specific amount of time."
        ]
      },
      {
        title: "Choosing the Right Libraries",
        img: "",
        youtubeEmbedCode: "",
        text: [
          "To help users verify the accuracy of facial exercises that involve both the face and the hand, we intend to use hand tracking along with face-tracking simultaneously. We wanted to find face/hand tracking libraries that worked on both Android and iOS.\n",
          "Currently, we found that ARKit’s BlendShapes functionality works well for face-tracking and verifying the accuracy of facial exercises that only involve the face. However, this feature is only available on iOS. We looked into finding other face-tracking libraries with functionalities similar to ARKit’s BlendShapes and hand-tracking libraries that worked well with ARKit and/or worked on Android devices. Following are the options we found this week:\n",
          " - Manomotion: a hand-tracking library that we intend to use in combination with ARKit’s BlendShapes. However, Manomotion is only supported on 2019 Unity Editors which have older versions of ARFoundation. These older versions of ARFoundation may not support newer face-tracking features of ARKit/ARFoundation. ARKit + Manomotion still limits us to only iOS device users. We will verify whether ARKit’s BlendShapes still works properly in 2019 Unity Editors and if so, we will consider Manomotion + ARKit BlendShapes to be a possible combination for our hand and face-tracking libraries.\n",
          " - Alchera: a library that performs both face and hand tracking simultaneously. We were excited to use this library but the GitHub repository for this library was missing a .dll file due to which we couldn’t incorporate the library into our project.\n",
          " - OpenCV: it seems like a good choice for face-tracking but we couldn’t find its free version this week. We’re looking into whether this library would work better than ARKit’s BlendShapes if combined with Manomotion since it is available on both Android and iOS.\n",
          " - ARKit: it has body-tracking functionalities that could be used to detect both the face and the hand. However, it doesn’t provide detailed information about the position of various parts of the hand/facial regions. It also limits our app’s accessibility to iOS.\n",
          "So, we have to choose between ARKit alone, ARKit + Manomotion, and OpenCV + Manomotion."
        ]
      },
      {
        title: "Update (11/21/22)",
        img: "",
        youtubeEmbedCode: "qhpcS3VV8rs",
        text: [
          "The video above is a demo we recorded of both ARKit's face-tracking and Manomotion's front camera hand-tracking (this is a BETA feature). We migrated our face-tracking project to a 2019 Unity Editor from a 2021 version to achieve this as the 2021 editor didn't have the right rendering pipeline for iOS. We found that it's slightly glitchy and are looking for better alternatives."
        ]
      },
      {
        title: "The Face + Hand Problem",
        img: "",
        youtubeEmbedCode: "",
        text: [
          "Since we plan on enabling users to verify the accuracy of facial exercises that involve both the face and hand, there will be instances where the user places their hand on their face. At this time, virtual content would be placed on the user’s face and the user’s hand would have to occlude it, that is, the user’s hand would have to be placed on the content. Virtual content will also be placed on the user's hand at this time.\n",
          "Having the user’s hand occlude the virtual content on their face doesn’t seem doable. After testing the sample ARFoundation project on GitHub and reading documentation sources, we found that occlusion is only supported in the back camera and not in the front camera for Android devices by ARCore and we're still unsure if it is supported for the front camera on Apple.\n",
          "If we don’t find a way to perform occlusion in Apple as well, our last resort is to only overlay virtual content on the hand in these exercises and not overlay anything on the face while still performing face-tracking in the background. The bigger issue is that face-tracking stops when then the user completely covers their nose with their hand. So, as of now, we plan to do away with exercises like these that stop face-tracking."
        ]
      },
      {
        title: "The Accessibility Problem",
        img: "",
        youtubeEmbedCode: "",
        text: [
          "We contacted professionals at Michigan Medicine's Cosmetic Dermatology & Laser Center for facial exercise suggestions and suggestions for the app's future features. We also contacted one of our teammate's parents who is a doctor regarding the same. We learned that we would have to account for face-tracking technology not accurately working on people who have facial deformities. This calls for us to test out more libraries to find the one that has the best face-detection capabilities. We would also need to find people with disabilities who are willing to test our app. OpenCV seems like the best option due to its sophisticated face-detection features. However, we’re still looking for its free version."
        ]
      }
    ]
  }

  const post4 = {
    title: 'November 7 - 13, 2022',
    youtubeEmbedCode: '',
    topics: [
      {
        title: "Project Brainstorm",
        img: "",
        youtubeEmbedCode: "",
        text: [
          "We researched the benefits of facial exercises for aging and for people with disabilities and explored the ARFoundation Face-Tracking Library's functionalities."
        ]
      }
    ]
  }

  return (
    <>
    <Quote text={'Development Timeline'} />
    <div className='bg-img'>
      <Post post={post1} />
      <Post post={post2} />
      <Post post={post3} />
      <Post post={post4} />
      <Spacer color='bg-img grey' />
      <Footer color="grey" />
    </div></>
  );
}

export default DevBlog;