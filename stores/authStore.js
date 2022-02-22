import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";
import api from "./api";
import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStore {
  user = null;
  // loading = true;

  constructor() {
    makeAutoObservable(this, {});
  }
  setUser = (token) => {
    console.log("🚀 ~ file: authStore.js ~ line 14 ~ AuthStore ~ token", token);
    AsyncStorage.setItem("myToken", token);
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  signIn = async (user) => {
    try {
      const resp = await api.post("/signin", user);
      console.log(
        "🚀 ~ file: authStore.js ~ line 24 ~ AuthStore ~ signIn= ~ resp",
        resp
      );
      this.setUser(resp.data.token);
    } catch (error) {
      console.log(
        "🚀 ~ file: authStore.js ~ line 25 ~ AuthStore ~ signIn= ~ error",
        error
      );
    }
  };

  signUp = async (user) => {
    try {
      const resp = await api.post("/signup", user);
      this.setUser(resp.data.token);
    } catch (error) {
      console.log(
        "🚀 ~ file: authStore.js ~ line 37 ~ AuthStore ~ signUp= ~ error",
        error
      );
    }
  };
  signout = async () => {
    delete api.defaults.headers.common.Authorization;
    this.user = null;
    await AsyncStorage.removeItem("myToken");
    // navigation.Replace("OnBoardScreen");
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now();
      const user = decode(token);
      if (user.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.signOut();
      }
    }
  };
}

const authstore = new AuthStore();
authstore.checkForToken();
export default authstore;
