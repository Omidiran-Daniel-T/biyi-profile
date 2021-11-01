import React from "react";
class Footer extends React.Component {
  render() {
    return (
      <div className="bg-gray-400 text-gray-800 py-10 flex flex-col items-center">
        <span className="font-semibold my-5">Contact</span>
        <span>Mobile:</span>
        <span className="text-gray-500">(469)775-7923</span>
        <span>Email:</span>
        <span className="text-gray-500">iyabafe@gmail.com</span>
      </div>
    );
  }
}

export default Footer;
