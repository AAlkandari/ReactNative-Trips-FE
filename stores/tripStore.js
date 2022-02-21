import { makeAutoObservable } from "mobx";
import api from "./api";

class TripStore {
  trips = [];

  constructor() {
    makeAutoObservable(this);
  }

  isLoading = true;

  fetchTrips = async () => {
    try {
      const res = await api.get("/trips");
      this.trips = res.data;
      this.isLoading = false;
    } catch (error) {
      console.log("error In FetchTrips");
    }
  };
}
const tripStore = new TripStore();
tripStore.fetchTrips();

export default tripStore;
