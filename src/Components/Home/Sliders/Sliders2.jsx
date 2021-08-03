import React from "react";
import styles from "./sliders2.module.css";

export const Sliders2 = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        class={`carousel slide ${styles.Sliders_mainDiv}`}
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class={`active ${styles.Sliders2Buton}`}
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            class={`active ${styles.Sliders2Buton}`}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            class={`active ${styles.Sliders2Buton}`}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
            class={`active ${styles.Sliders2Buton}`}
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <h1 className={`${styles.Carousel_h1}`}>Welcome To NightKids.io</h1>
            <p className={`${styles.Carousel_para}`}>
              Becoming the member of Nightkids.io is the onlzy a way to purchase
              the exculsive NFT ArtWork
            </p>
            <button className={`${styles.Carousel_button}`}>Learn More</button>
          </div>
          <div class="carousel-item">
            <h1 className={`${styles.Carousel_h1}`}>5,555 Memberships</h1>
            <p className={`${styles.Carouselpara2}`}>
              Our website will mint 5,555 membership ERC-721 tokens. The initial
              sale for the 5,555 memberships will be minted on our membership
              page
            </p>

            <button className={`${styles.Carousel_button2}`}>Learn More</button>
          </div>
          <div class="carousel-item">
            <h1 className={` ${styles.Carousel_h1}`}>Never Slept on,</h1>
            <p className={` ${styles.Carouselpara3}`}>
              We work with artists because we believe in the power of the
              community. By using grassroots method of the community. By Using
              grassroots method of finding artists, our goal those artists with
              unique and innovation of art
            </p>
            <button className={` ${styles.Carousel_button3}`}>
              Learn More
            </button>
          </div>
          <div class="carousel-item">
            <h1 className={` ${styles.Carousel_h1}`}>Only bet on.</h1>

            <p className={` ${styles.Carouselpara4}`}>
              We want to create collections that innovate spaces.
            </p>
            <button className={` ${styles.Carousel_button4}`}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
