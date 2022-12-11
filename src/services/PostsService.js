import axios from "axios";
import { AppState } from "../AppState";
import { Post } from "../models/Post.js";
import { api } from "./AxiosService";

class PostsService {
  async getById(postId) {
    const res = await api.get(`api/posts/${postId}`);
  }
  async getAll() {
    const res = await api.get(`api/posts`);
    console.log("[POSTS]", res.data);
    AppState.posts = res.data.posts;
    AppState.previousPage = res.data.newer;
    AppState.nextPage = res.data.older;
  }

  async create(postData) {
    const res = await api.post(`api/posts`, postData);
    console.log("[CREATED POST]", res.data);
    AppState.posts.unshift(res.data);
  }

  async likePost(postId, userId) {
    console.log("[POSTID]", postId + "[USERID]", userId);
    const res = await api.post(`api/posts/${postId}/like`);
    console.log("[CREATED LIKE]", res.data);
  }

  // FIXME this is deleting the post but also hiding all the other posts on delete
  async delete(postId) {
    // debugger;
    const res = await api.delete(`api/posts/${postId}`);
    console.log("[DELETING POST]", res.data);
    AppState.posts = AppState.posts.filter((p) => p.id != postId);
  }

  // TODO come back to this - it was not a requirement for the project
  async edit(postId, postData) {
    const res = await api.put(`api/posts/${postId}`, postData);
    console.log("[EDITED POST]", res.data);
  }

  async search(query) {
    const res = await api.get(`api/posts?query=${query}`);
    console.log("[SEARCH RESULTS]", res.data.posts);
    AppState.posts = res.data.posts;
  }

  async pageNext(nextPage) {
    const res = await axios.get(nextPage);
    console.log("[NEXT PAGE]", res.data);
    AppState.posts = res.data.posts;
    AppState.nextPage = res.data.older;
    AppState.previousPage = res.data.newer;
  }

  async graduated() {
    const res = await api.get(`api/posts`);
    let graduate = res.data.posts;
    graduate = graduate.filter((p) => p.creator.graduated == true);
    console.log("[RES DATA]", res.data.posts, "[GRADUATED]", graduate);
    AppState.posts = graduate;
  }
}

export const postsService = new PostsService();
