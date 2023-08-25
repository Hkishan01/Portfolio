import React from "react";
import Img from "./pro1.png";
import Img1 from "./pro12.png";

const Project = () => {
  return (
    <div className="project">
      {/* first project */}
      <div id="pro1">
        <h1>Smart Notes</h1>
        <div id="all">
          <div id="left">
            <div id="tech">
              <div id="one">
                <h2> Tech stack:</h2>
              </div>
              <p> HTML, CSS, JavaScript, Node.js, Express.js, Mongodb</p>
            </div>
            <p>
              "Smart Notes: A reliable note-taking website with robust user
              authentication. Capture, store, and manage your thoughts securely.
              Your ideas, protected and accessible whenever you need them."
            </p>
          </div>
          <div id="right">
            <div id="image">
              <img src={Img} alt="" />
              <img src={Img1} alt="" />
            </div>
            <div id="btn">
              <button>Live</button>
              <button>repo</button>
            </div>
          </div>
        </div>
      </div>

      {/* second project */}

      <div id="pro2">
        <h1>Smart Notes</h1>
        <div id="all">
          <div id="right">
            <div id="image">
              <img src={Img} alt="" />
              <img src={Img1} alt="" />
            </div>
            <div id="btn">
              <button>Live</button>
              <button>repo</button>
            </div>
          </div>
          <div id="left">
            <div id="tech">
              <div id="one">
                <h2> Tech stack:</h2>
              </div>
              <p> HTML, CSS, JavaScript, Node.js, Express.js, Mongodb</p>
            </div>
            <p>
              "Smart Notes: A reliable note-taking website with robust user
              authentication. Capture, store, and manage your thoughts securely.
              Your ideas, protected and accessible whenever you need them."
            </p>
          </div>
        </div>
      </div>

      {/* third project */}

      <div id="pro3">
        <h1>Smart Notes</h1>
        <div id="all">
          <div id="left">
            <div id="tech">
              <div id="one">
                <h2> Tech stack:</h2>
              </div>
              <p> HTML, CSS, JavaScript, Node.js, Express.js, Mongodb</p>
            </div>
            <p>
              "Smart Notes: A reliable note-taking website with robust user
              authentication. Capture, store, and manage your thoughts securely.
              Your ideas, protected and accessible whenever you need them."
            </p>
          </div>
          <div id="right">
            <div id="image">
              <img src={Img} alt="" />
              <img src={Img1} alt="" />
            </div>
            <div id="btn">
              <button>Live</button>
              <button>repo</button>
            </div>
          </div>
        </div>
      </div>

      {/* fourth project */}

      <div id="pro4">
        <h1>Smart Notes</h1>
        <div id="all">
          <div id="right">
            <div id="image">
              <img src={Img} alt="" />
              <img src={Img1} alt="" />
            </div>
            <div id="btn">
              <button>Live</button>
              <button>repo</button>
            </div>
          </div>
          <div id="left">
            <div id="tech">
              <div id="one">
                <h2> Tech stack:</h2>
              </div>
              <p> HTML, CSS, JavaScript, Node.js, Express.js, Mongodb</p>
            </div>
            <p>
              "Smart Notes: A reliable note-taking website with robust user
              authentication. Capture, store, and manage your thoughts securely.
              Your ideas, protected and accessible whenever you need them."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
