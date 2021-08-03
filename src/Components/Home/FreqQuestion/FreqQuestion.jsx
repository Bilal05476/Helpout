import React from "react";
import styles from "./FreqQuestion.module.css";

export const FreqQuestion = () => {
  return (
    <div className={` ${styles.FreqQuestion_mainDiv}`}>
      <h3>Frequently Asked Questions</h3>
      <div>
        <div class={`input-group mb-3 ${styles.FreqQuestion_SearchBox}`}>
          <input
            type="text"
            class="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Button
          </button>
        </div>
      </div>
    </div>
  );
};
