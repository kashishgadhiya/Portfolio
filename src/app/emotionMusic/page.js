import React from 'react';
import ProjectDetails from "../components/ProjectDetails";

const EmotionBasedMusicPlayerPage = () => {
  return (
    <ProjectDetails
      title="Emotion-Based Music Player"
      mainimg="/Emotion.png" 
      intro="Our Emotion-Based Music Player personalizes your music experience based on your emotional state. By detecting facial expressions with OpenCV and using machine learning algorithms to classify these emotions, the player generates playlists that match your mood. This innovative technology enhances user engagement and satisfaction, with applications in entertainment, mental health, and human-computer interaction. Future enhancements include integrating Spotify and expanding the range of detectable emotional states."
      techs={["Python", "OpenCV", "Tkinter", "NumPy", "glob", "random", "Eel", "argparse"]}
      technicalDetails="The Emotion-Based Music Player leverages several key technologies to deliver a personalized music experience. Python serves as the core programming language, handling the primary logic and functionality. OpenCV is utilized for computer vision capabilities, specifically to capture video input from the webcam and detect facial landmarks and expressions. Machine learning algorithms classify these facial expressions into specific emotional states such as happiness, sadness, and anger. Tkinter provides a user-friendly graphical user interface (GUI), while Eel creates a web-based frontend that communicates with the Python backend. NumPy supports essential numerical operations for data processing, and additional libraries such as os, random, glob, and argparse handle file operations, generate random elements, match file patterns, and parse command-line arguments, respectively. These technologies work together to analyze facial expressions, recognize emotions, and generate emotion-based playlists, ensuring a responsive and engaging user experience. Future updates will aim to integrate Spotify for a more extensive music library and expand the range of detectable emotional states for an even richer experience."
      futureScope="Future enhancements for the Emotion-Based Music Player include integrating Spotify to play music directly from its vast library and adding more emotional states to provide an even more personalized music experience. These updates aim to expand the system's capabilities, offering a richer and more diverse user experience."
      conclusion="Our Emotion-Based Music Player represents a significant advancement in the field of human-computer interaction and emotional computing. By combining Python programming with OpenCV's computer vision capabilities, we've created a system that not only understands human emotions but also responds to them in a meaningful way through music. We believe this technology has the potential to revolutionize how we experience and interact with music in various aspects of our lives."
      screenshots={[
        "/Emotion.png", 
        "/emotion_2.png"
      ]}
      githubLink="https://github.com/kashishgadhiya/EMOTION_BASED-MUSIC-PLAYER"
      liveLink=""
    />
  );
};

export default EmotionBasedMusicPlayerPage;
