import { makeAutoObservable } from "mobx";
import api from "./api";

class TripStore {
  trips = [];
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchTrips = async () => {
    try {
      const res = await api.get("/trips");
      this.trips = res.data;
      this.isLoading = false;
    } catch (error) {
      console.log("error In FetchTrips");
    }
  };

  createTrip = async (trip, navigation) => {
    const formData = new FormData();
    for (const key in trip) formData.append(key, trip[key]);
    try {
      const response = await api.post("/trips", trip);
      this.trips.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };
}
const tripStore = new TripStore();
tripStore.fetchTrips();

export default tripStore;
