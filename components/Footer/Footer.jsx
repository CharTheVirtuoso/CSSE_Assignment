import "./Footer.css";
import {
  UilFacebookF,
  UilInstagram,
  UilLinkedin,
  UilTwitter,
  UilWhatsapp,
} from "@iconscout/react-unicons";

export default function Footer() {
  return (
    <div className="footer">
      <img
        // src="https://firebasestorage.googleapis.com/v0/b/vedra-8d493.appspot.com/o/W.png?alt=media&token=87a8af90-8889-4e84-9553-bc22b39b1d62"
        // alt=""
      />
      <div className="footerBottomCont">
        <ul>
          <li>
            <UilFacebookF />
          </li>
          <li>
            <UilInstagram />
          </li>
          <li>
            <UilLinkedin />
          </li>
          <li>
            <UilTwitter />
          </li>
          <li>
            <UilWhatsapp />
          </li>
        </ul>
      </div>
      <span>
        Sysco.com © Copyright 1997-2023 , LLC. All rights reserved. Sysco®
      </span>
    </div>
  );
}