const profilePicture = require("./picture/profile_picture.jpg");

const project1main = require("./project_1/main_img.png");
const project1secondary = require("./project_1/secondary_img.png");
const project1tertiary = require("./project_1/tertiary_img.png");

const project2main = require("./project_2/main_img.png");
const project2secondary = require("./project_2/secondary_img.png");
const project2tertiary = require("./project_2/tertiary_img.png");

const project3main = require("./project_3/main_img.png");
const project3secondary = require("./project_3/secondary_img.png");
const project3tertiary = require("./project_3/tertiary_img.png");

const project4main = require("./project_4/main_img.png");
const project4secondary = require("./project_4/secondary_img.png");
const project4tertiary = require("./project_4/tertiary_img.png");

const project5main = require("./project_5/main_img.png");
const project5secondary = require("./project_5/secondary_img.png");
const project5tertiary = require("./project_5/tertiary_img.png");

const main = {
    "1": project1main,
    "2": project2main,
    "3": project3main,
    "4": project4main,
    "5": project5main
};
const secondary = {
    "1": project1secondary,
    "2": project2secondary,
    "3": project3secondary,
    "4": project4secondary,
    "5": project5secondary
};
const tertiary = {
    "1": project1tertiary,
    "2": project2tertiary,
    "3": project3tertiary,
    "4": project4tertiary,
    "5": project5tertiary
};

const images = {
    "main": main,
    "secondary": secondary,
    "tertiary": tertiary,
    "picture": profilePicture
}

export default images;