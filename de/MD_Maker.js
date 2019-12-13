/*jshint esversion: 6 */
'use strict'

const fs = require("fs");

/**Read Table of Contents*/
const chapterTitles = fs.readFileSync('00-Inhaltsverzeichniss.txt').toString().replace(/\n/g,"").split(/\r+/);
 
//Prepare Chapter Titles for Filenames
const chapterFileNames = chapterTitles.map((title, index) => {
  title = `${1 + index.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}-${title.trim().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"").replace(/ /g, "_")}`;
  return title;
});

//create .md files with chapterFileNames
chapterFileNames.forEach((fileName, index) => {
  fs.writeFile(`${fileName}.md`, `${chapterTitles[index]}`, (err) => {
    if (err) throw err;
    console.log(`${fileName}.md was created`);
  });
});

console.log(chapterFileNames);
