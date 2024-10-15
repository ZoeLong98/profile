"use client";
import $ from "jquery";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";

const initializeFolders = () => {
  // get all folders in our .directory-list
  const allFolders = $(`.${styles["directory-list"]} li > ul`);
  allFolders.each(function () {
    // add the folder class to the parent <li>
    const folderAndName = $(this).parent();
    folderAndName.addClass(styles["folder"]);

    // backup this inner <ul>
    const backupOfThisFolder = $(this);
    // then delete it
    $(this).remove();
    // add an <a> tag to whats left ie. the folder name
    folderAndName.wrapInner("<a href='#' />");
    // then put the inner <ul> back
    folderAndName.append(backupOfThisFolder);

    // now add a slideToggle to the <a> we just added
    folderAndName.find("a").click(function (e) {
      $(this).siblings("ul").slideToggle("slow");
      e.preventDefault();
    });
  });
};

export default function Page() {
  const [selectedUrl, setSelectedUrl] = useState<string>(
    "https://nbviewer.org/github/ZoeLong98/LearningML/blob/main/LinearRegression.ipynb"
  );

  // Handle click event to update the selected URL
  const handleClick = (url: string) => {
    setSelectedUrl(url);
  };
  useEffect(() => {
    initializeFolders();
  }, []);

  return (
    <div className="flex bg-white">
      <div className={styles["box"]}>
        <ul className={styles["directory-list"]}>
          <li>
            Coursework
            <ul>
              <li
                onClick={() => handleClick("/PCA.html")}
                className="hover:cursor-pointer"
              >
                PCA
              </li>
              <li
                onClick={() => handleClick("/FeatureSelection_Relief.html")}
                className="hover:cursor-pointer"
              >
                FS-Relief
              </li>
              <li
                onClick={() => handleClick("/NavieBayes.html")}
                className="hover:cursor-pointer"
              >
                NavieBayes
              </li>
              <li
                onClick={() => handleClick("/decisionTree.html")}
                className="hover:cursor-pointer"
              >
                Decision Tree
              </li>
              <li
                onClick={() =>
                  handleClick(
                    "https://nbviewer.org/github/ZoeLong98/LearningML/blob/main/LinearRegression.ipynb"
                  )
                }
                className="whitespace-nowrap hover:cursor-pointer"
              >
                Linear Regression
              </li>
            </ul>
          </li>
          <li>
            Relative Paper
            <ul>
              <li
                onClick={() =>
                  handleClick("/Baidu_KDD_Cup_2022_Workshop_paper_0353.pdf")
                }
                className="hover:cursor-pointer"
              >
                KDD_Cup_2022_PaddlePaddle
                <br />
                9th_Place_Solution
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <iframe
        src={selectedUrl}
        width="100%"
        className="m-10 min-h-screen"
      ></iframe>
    </div>
  );
}
