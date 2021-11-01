import React, { Component } from "react";
class NavBAr extends Component {
  render() {
    return (
      <div className="bg-gray-400 bg-opacity-80 text-gray-200 h-16 flex justify-between px-10 items-center fixed w-full">
        <span>Logo</span>
        <span>Ham</span>
      </div>
    );
  }
}

export default NavBAr;
