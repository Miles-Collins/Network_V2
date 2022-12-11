import axios from "axios";
import { AppState } from "../AppState";
import { api } from "./AxiosService";

let queries = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let rando = queries[Math.floor(Math.random() * queries.length)];

class ProfileService {
  async getProfiles() {
    let res = await api.get("api/profiles?query=" + rando);
    console.log("[PROFILES]", res.data);
    AppState.peopleYouMayKnow = res.data;
    console.log("[PEOPLE]", res.data);
  }
  async getProfileById(id) {
    let res = await api.get(`api/profiles/${id}`);
    console.log("[GETTING PROFILE BY ID]", res.data);
    AppState.activeProfile = res.data;
  }

  async getPostsById(id) {
    let res = await api.get(`api/profiles/${id}/posts`);
    console.log("[PROFILE POSTS]", res.data.posts);
    AppState.profilePost = res.data.posts;
    AppState.profilePreviousPage = res.data.older;
    AppState.profileNextPage = res.data.newer;
    // console.log(
    //   "[PROFILE PREVIOUS PAGE]",
    //   res.data.older + "[PROFILE NEXT PAGE]".res.data.newer
    // );
  }

  doTheThing() {
    AppState.theThing = !AppState.theThing;
  }

  async pageNext(nextPage) {
    const res = await axios.get(nextPage);
    console.log("[PROFILE NEXT PAGE]", res.data);
  }
}

export const profileService = new ProfileService();
