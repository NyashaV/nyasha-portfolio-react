import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <footer className="mb-5 mt-5 text-center">
        <div className="contactBox">
          <h3>For further communication</h3>
          <a className="btn linkButton mt-3 mb-4" href="/contact">
            Contact me
          </a>
        </div>
        <a href="mailto:ny_vanessa@hotmail.co.uk">ny_vanessa@hotmail.co.uk</a>
        <p className="mt-4">
          <a
            href="https://www.linkedin.com/in/nyasha-tavatya-534581204/?originalSubdomain=uk"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>{" "}
          </a>
          <a href="https://github.com/NyashaV" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-square-github"></i>
          </a>
        </p>
        <p>This website was coded by Nyasha Tavatya</p>
      </footer>
    </div>
  );
}
