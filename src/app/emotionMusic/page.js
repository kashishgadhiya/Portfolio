import Image from "next/image";
import Link from "next/link";
import Github from "../components/icons/Github";

import emotion from "../../../public/Emotion.png";
import emotion_2 from "../../../public/emotion_2.png";

export default function emotionMusic() {
  return (
    <>
      <section className="mx-auto lg:mt-32 mt-10 text-white pageone mb-5 ">
        <h1 className="text-white font-semibold lg:text-5xl text-4xl">
          Emotion-Based Music Player
        </h1>

        {/* <div className="flex gap-3 item-center my-5">
          <Link
        
            href={
              "https://github.com/kashishgadhiya/EMOTION_BASED-MUSIC-PLAYER"
            }
            className="hover:bg-zinc-600 rounded-full hover:p-0.5"
          >
            <Github className=" hover:bg-black" />
          </Link>
        </div> */}
      

        <Image
          src={emotion}
          width={800}
          className="mx-auto my-10"
          alt="img"
        ></Image>
        <h2 className="font-semibold text-4xl ">Introduction</h2>
        <p className="text-lg text-zinc-500 my-3">
          Our Emotion-Based Music Player personalizes your music experience
          based on your emotional state. By detecting facial expressions with
          OpenCV and using machine learning algorithms to classify these
          emotions, the player generates playlists that match your mood. This
          innovative technology enhances user engagement and satisfaction, with
          applications in entertainment, mental health, and human-computer
          interaction. Future enhancements include integrating Spotify and
          expanding the range of detectable emotional states. Explore our
          project and see how we revolutionize your music experience!
        </p>

        <h2 className="font-semibold text-4xl mt-3">Technologies Used</h2>
        <div className="mt-3">
          <div className="text-lg text-zinc-500 my-3">
            <p>- Python</p>
            <p>- Open Cv</p>
            <p>- tkinter</p>
            <p>- Numpy</p>
            <p>- glob</p>
            <p>- random</p>
            <p>- eel</p>
            <p>- argparse</p>
          </div>
        </div>

        {/* 2 */}
        <h2 className="font-semibold text-4xl mt-3 ">Technical Details</h2>
        <p className="text-lg text-zinc-500 my-3">
          The Emotion-Based Music Player leverages several key technologies to
          deliver a personalized music experience. Python serves as the core
          programming language, handling the primary logic and functionality.
          OpenCV is utilized for computer vision capabilities, specifically to
          capture video input from the webcam and detect facial landmarks and
          expressions. Machine learning algorithms classify these facial
          expressions into specific emotional states such as happiness, sadness,
          and anger. Tkinter provides a user-friendly graphical user interface
          (GUI), while Eel creates a web-based frontend that communicates with
          the Python backend. NumPy supports essential numerical operations for
          data processing, and additional libraries such as os, random, glob,
          and argparse handle file operations, generate random elements, match
          file patterns, and parse command-line arguments, respectively. These
          technologies work together to analyze facial expressions, recognize
          emotions, and generate emotion-based playlists, ensuring a responsive
          and engaging user experience. Future updates will aim to integrate
          Spotify for a more extensive music library and expand the range of
          detectable emotional states for an even richer experience.
        </p>

        <h2 className="font-semibold text-4xl mt-3 ">How It Works?</h2>
        <p className="text-lg text-zinc-500 my-3">
          The Emotion-Based Music Player utilizes OpenCV to analyze live or
          recorded video input, detecting facial landmarks and expressions.
          Machine learning algorithms then classify these facial expressions
          into specific emotional states such as happiness, sadness, and anger.
          Based on the detected emotion, the system retrieves music tracks from
          a pre-defined database or streaming service that corresponds to the
          identified emotional state. Additionally, users can provide feedback
          on the
        </p>

        <h2 className="font-semibold text-4xl mt-3">Future Scope</h2>
        <div className=" text-xl  text-zinc-500 flex flex-col mt-3">
          Future enhancements for the Emotion-Based Music Player include
          integrating Spotify to play music directly from its vast library and
          adding more emotional states to provide an even more personalized
          music experience. These updates aim to expand the system&apos;s
          capabilities, offering a richer and more diverse user experience.
        </div>

        {/* last */}
        <h2 className="text-3xl mt-2 font-semibold">Conclusion</h2>
        <p className="text-lg text-zinc-500 my-3">
          Our Emotion-Based Music Player represents a significant advancement in
          the field of human-computer interaction and emotional computing. By
          combining Python programming with OpenCV&apos;s computer vision
          capabilities, we&apos;ve created a system that not only understands
          human emotions but also responds to them in a meaningful way through
          music. We believe this technology has the potential to revolutionize
          how we experience and interact with music in various aspects of our
          lives.
        </p>

        {/* img */}
        <Image
          src={emotion_2}
          width={800}
          className="mx-auto my-10"
          alt="img"
        ></Image>
      </section>
    </>
  );
}
