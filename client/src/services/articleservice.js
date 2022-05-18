import axios from "axios";

/**
 * Current issue: This file doesn't have many comments to explain what is going on here. 
 * This file also only contains skeleton code, as these functions must be used in other
 * files. 
 * Code Author: Tarun Ramachandran
 * Code Reviewer: Maliha
 */

//gets all articles from the MongoDB
const getAllArticles = async () => {
  return axios.get("/api/articles").then((articles) => articles);
};

const postArticle = async (article) => {
  //return axios.post("/api/articles", article).then((articles) => articles.data);
  return axios.post("/api/articles", article);
}

export { getAllArticles, postArticle };