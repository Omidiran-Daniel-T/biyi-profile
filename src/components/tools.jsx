import React from "react";
class Tools extends React.Component {
  render() {
    return (
      <div className="bg-gray-200 text-lg flex flex-col items-center py-10">
        <span className="text-xl text-gray-800">Tools</span>
        <span className="text-gray-500">HTML</span>
        <span className="text-gray-500">CSS</span>
        <span className="text-gray-500">Javascript</span>
        <span className="text-gray-500">React.js</span>
        <span className="text-gray-500">Redux</span>
        <span className="text-gray-500">Git</span>
        <span className="text-gray-500">Tailwind CSS</span>
        <span className="text-gray-500">Bootstrap</span>
        {/* <span className="text-xl text-gray-800">Others</span> */}
        <span className="text-gray-500">Axios</span>
        <span className="text-gray-500">React Router Dom</span>
        <span className="text-gray-500">. . .</span>
      </div>
    );
  }
}

export default Tools;
