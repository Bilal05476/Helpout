import React from "react";
import styles from "./Footer.module.css";
export const Footer = () => {
  return (
    <div className={`text-center ${styles.Footer_mainDiv}`}>
      <div className="text-white">
        <ul class={`nav justify-content-center fs-4 ${styles.Footer_UL}`}>
          <li class="nav-item">
            <a class="nav-link" href="#/">
              Privacy Policy
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/">
              Terms & Conditions
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link " href="#/">
              FAQs
            </a>
          </li>
        </ul>
      </div>
      <p className={`${styles.Footer_para}`}>Nightkidsnft LLC 20201</p>
    </div>
  );
};
