import React, { Component } from "react";
class NavBAr extends React.Component {
  render() {
    return (
      <div className="bg-gray-500 text-gray-200 h-16 flex justify-between px-10 items-center">
        <span>Logo</span>
        <span>Ham</span>
      </div>
    );
  }
}

export default NavBAr;
