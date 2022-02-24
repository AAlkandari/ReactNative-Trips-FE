import { makeAutoObservable } from "mobx";
import api from "./api";

class ProfileStore {
  constructor() {
    makeAutoObservable(this);
  }

  userProfile = null;
  profiles = [];
  isloading = true;

  listProfiles = async () => {
    try {
      const res = await api.get("/profiles");
      this.profiles = res.data;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };

  setUserProfile = (userId) => {
    const findProfile = this.profiles.find(
      (profile) => userId === profile.user._id
    );
    this.userProfile = findProfile;
  };

  assignProfileToUser = async () => {
    try {
      const res = await api.get(`profiles/newUser/`);
      this.profiles.push(res.data);
      this.userProfile = res.data;
    } catch (error) {
      console.log(error);
    }
  };

  editProfile = async (editedProfile, profileId, navigation) => {
    try {
      const findProfile = this.profiles.find(
        (profile) => profile._id === profileId
      );
      const res = await api.put(`/profiles/${profileId}`, editedProfile);
      this.userProfile = res.data;
      navigation.navigate("UserProfile", { profile: this.userProfile });
    } catch (error) {
      console.log(error);
    }
  };
}

const profileStore = new ProfileStore();
profileStore.listProfiles();
export default profileStore;
