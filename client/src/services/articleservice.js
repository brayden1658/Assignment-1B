import axios from "axios";

/**
 * Current issue: This file doesn't have many comments to explain what is going on here. 
 * Code Author: Tarun Ramachandran
 * Code Reviewer: Maliha
 */
const getAllArticles = async () => {
  return axios.get("/api/articles").then((articles) => articles.data);
};

const postArticle = async (article) => {
  return axios.post("/api/articles", article).then((articles) => articles.data);
}

export { getAllArticles, postArticle };