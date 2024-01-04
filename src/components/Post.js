import React from 'react';
import '../App.css';
import './Post.css';

function Post({ post }) {
    return (
        <>
            <div className='post-container'>
                <div className='post-content'>
                    <h1>{post.title}</h1>
                    <p>{post.date}</p>
                    <p>{post.greeting}</p>
                    {post.youtubeEmbedCode === "" ? (<></>) : (
                                <div className='post-video'>
                                    <iframe title="Youtube Player" src={`https://www.youtube.com/embed/${post.youtubeEmbedCode}`}/>
                                </div>
                            )}
                    <ul className='post-topics'>
                        {post.topics.map((topic) =>
                            <li key={topic.id} className='post-topic'>
                                <h1>{topic.title}</h1>
                                {topic.img === "" ? (<></>) : (
                                    <img src={process.env.PUBLIC_URL + `/img/${topic.img}`}></img>
                                )}
                                {topic.youtubeEmbedCode === "" ? (<></>) : (
                                    <div className='post-video'><iframe title="Youtube Player" src={`https://www.youtube.com/embed/${topic.youtubeEmbedCode}`}/>
                                    </div>
                                )}
                                <p>{topic.text.map((text) =>
                                    <p>{text}</p>
                                )}</p>
                            </li> 
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Post;
