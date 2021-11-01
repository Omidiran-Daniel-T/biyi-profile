import React, { Component } from "react";
import image from "../images/image.png";
class Profile extends Component {
  render() {
    return (
      <div className="bg-white pt-16">
        <div className="bg-red-00 h-40 flex flex-col items-center justify-center">
          <span className="text-5xl">Profile</span>
          <span className="text-xl text-gray-500">I'm a Web Developer</span>
        </div>
        <div className="bg-blue-00 w-full flex flex-col items-center lg:flex-row lg:justify-evenly lg:w-full px-10">
          <div className="about-me bg-yellow-00 max-w-sm flex flex-col items-center px-5 my-5 py-10 lg:w-1/3">
            <span className="text-3xl">About Me</span>
            <span className="text-center text-lg my-5">
              I am a front-end web developer. I am a javascript developer with
              good knowledge of front-end techniques using React.js.
            </span>
            <span className="text-xl text-gray-500">React JS Developer</span>
          </div>
          <div className="pic bg-yellow-00 py-10 px-5 my-5 lg:w-1/3">
            <img
              src={image}
              alt="profile"
              className="h-48 w-48 rounded-full m-auto"
            />
          </div>
          <div className="details bg-yellow-00 py-10 my-5 text-xl flex flex-col lg:w-1/3 items-center">
            <span className="text-2xl my-5">Details</span>
            <span className="text-gray-800">Name:</span>
            <span className="text-gray-500 font-thin">
              Odebiyi Babatunde Biyi
            </span>
            <span className="text-gray-800">Date of Birth:</span>
            <span className="text-gray-500 font-thin">07-14-1987</span>
            <span className="text-gray-800">Location:</span>
            <span className="text-gray-500 font-thin">Dallas, TX</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
