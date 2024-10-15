"use client";
import { div } from "framer-motion/client";
import styles from "./page.module.css"; // Import the CSS module
import React, { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const pictures = document.querySelectorAll<HTMLDivElement>(
      `.${styles.Picture}`
    );
    let previousTouch: Touch | undefined = undefined;

    function updateElementPosition(
      element: HTMLElement,
      event: MouseEvent | TouchEvent
    ): void {
      let movementX: number, movementY: number;

      if (event.type === "touchmove") {
        const touch = (event as TouchEvent).touches[0];
        movementX = previousTouch ? touch.clientX - previousTouch.clientX : 0;
        movementY = previousTouch ? touch.clientY - previousTouch.clientY : 0;
        previousTouch = touch;
      } else {
        movementX = (event as MouseEvent).movementX;
        movementY = (event as MouseEvent).movementY;
      }

      const elementY = parseInt(element.style.top || "0") + movementY;
      const elementX = parseInt(element.style.left || "0") + movementX;

      element.style.top = `${elementY}px`;
      element.style.left = `${elementX}px`;
    }

    function startDrag(
      element: HTMLElement,
      event: MouseEvent | TouchEvent
    ): void {
      const updateFunction = (event: MouseEvent | TouchEvent) =>
        updateElementPosition(element, event);
      const stopFunction = () =>
        stopDrag({ update: updateFunction, stop: stopFunction });
      document.addEventListener("mousemove", updateFunction);
      document.addEventListener("touchmove", updateFunction);
      document.addEventListener("mouseup", stopFunction);
      document.addEventListener("touchend", stopFunction);
    }

    function stopDrag(functions: {
      update: (event: MouseEvent | TouchEvent) => void;
      stop: () => void;
    }): void {
      previousTouch = undefined;
      document.removeEventListener("mousemove", functions.update);
      document.removeEventListener("touchmove", functions.update);
      document.removeEventListener("mouseup", functions.stop);
      document.removeEventListener("touchend", functions.stop);
    }

    pictures.forEach((picture) => {
      const range = 100;
      const randomX = Math.random() * (range * 2) - range;
      const randomY = Math.random() * (range * 2) - range;
      const randomRotate = Math.random() * (range / 2) - range / 4;
      const startFunction = (event: MouseEvent | TouchEvent) =>
        startDrag(picture as HTMLElement, event);
      (picture as HTMLElement).style.top = `${randomY}px`;
      (picture as HTMLElement).style.left = `${randomX}px`;
      (
        picture as HTMLElement
      ).style.transform = `translate(-50%, -50%) rotate(${randomRotate}deg)`;
      picture.addEventListener("mousedown", startFunction);
      picture.addEventListener("touchstart", startFunction);
    });
  }, []);

  return (
    <div className={styles.body}>
      <div className={styles.Container}>
        <div className={styles.Picture}>
          <img
            className={styles["Picture-img"]}
            src="https://i.imgur.com/Gyww7Fj.jpeg"
            alt=""
          />
          <div className={styles["Picture-note"]}>
            <span>Ocean</span>
          </div>
        </div>

        <div className={styles.Picture}>
          <img
            className={styles["Picture-img"]}
            src="https://i.imgur.com/62nReAb.jpeg"
            alt=""
          />
          <div className={styles["Picture-note"]}>
            <span>Sky, grass and Butterflies</span>
          </div>
        </div>

        <div className={styles.Picture}>
          <img
            className={styles["Picture-img"]}
            src="https://i.imgur.com/XomHqlb.jpeg"
            alt=""
          />
          <div className={styles["Picture-note"]}>
            <span>Green</span>
          </div>
        </div>

        <div className={styles.Picture}>
          <img
            className={styles["Picture-img"]}
            src="https://i.imgur.com/Ernurym.jpeg"
            alt=""
          />
          <div className={styles["Picture-note"]}>
            <span>Firework</span>
          </div>
        </div>

        <div className={styles.Picture}>
          <img
            className={styles["Picture-img"]}
            src="https://i.imgur.com/abIn3bp.jpeg"
            alt=""
          />
          <div className={styles["Picture-note"]}>
            <span>Blue</span>
          </div>
        </div>
      </div>
    </div>
  );
}
