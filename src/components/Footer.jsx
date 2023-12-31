import React from "react";

const Footer = () => {
  return (
    <div className="footer" id="ftr">
      <div id="h12">
        <h1>Social</h1>
      </div>
      <div id="av">
        <a href="">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-leetcode-3521542-2944960.png?f=webp"
            alt=""
          />
        </a>
        <a href="">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </a>
        <a href="https://www.linkedin.com/in/harikishan-yadav-a9950422a/">
          <img
            src="https://img.freepik.com/free-icon/linkedin_318-187585.jpg?w=2000"
            alt=""
          />
        </a>
        <a href=" https://twitter.com/Hkishan_yadav?t=eT5ZdBvJCGWoSJhrKuXdZg&s=08 ">
          <img
            src="https://seeklogo.com/images/T/twitter-x-logo-19D2657BAA-seeklogo.com.png?v=638258000400000000"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
