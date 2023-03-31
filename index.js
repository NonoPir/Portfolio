"use strict";

const nightMode = document.querySelector("body");
const header = document.querySelector(".header");
const myName = document.querySelector(".name1");
const bio = document.querySelector(".bio");
const aboutMe = document.querySelector("#about_me");
const education = document.querySelector(".edu");
const mySkills = document.querySelector("#my_skills");
const contactMe = document.querySelector("#cm");

document.querySelector(".mode").addEventListener("click", function () {
  nightMode.classList.add("night_mode");
  header.classList.add("night_mode");
  myName.classList.add("night_mode");
  bio.classList.add("night_mode");
  aboutMe.classList.add("night_mode");
  education.classList.add("night_mode");
  mySkills.classList.add("night_mode");
  contactMe.classList.add("night_mode");
  document.querySelector("#about1").classList.add("night_mode");
  document.querySelector(".uil").style.color = "#000000";
  document.querySelector(".uil2").style.color = "#000000";
  document.getElementsByTagName(".a").classList.add = "hover_color";
});

document.querySelector(".mode2").addEventListener("click", function () {
  nightMode.classList.remove("night_mode");
  header.classList.remove("night_mode");
  myName.classList.remove("night_mode");
  bio.classList.remove("night_mode");
  aboutMe.classList.remove("night_mode");
  education.classList.remove("night_mode");
  mySkills.classList.remove("night_mode");
  contactMe.classList.remove("night_mode");
  document.querySelector("#about1").classList.remove("night_mode");
  document.querySelector(".uil2").style.color = "#babddb";
  document.querySelector(".uil").style.color = "#babddb";
});
