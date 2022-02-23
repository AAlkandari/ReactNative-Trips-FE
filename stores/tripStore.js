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

  removeTrips = async (tripId) => {
    try {
      await api.delete(`/trips/${tripId}`);
      this.trips = this.trips.filter((trip) => trip._id !== tripId);
    } catch (error) {
      console.log(
        "🚀 ~ file: tripStore.js ~ line 26 ~ TripStore ~ removeTrips= ~ error",
        error
      );
    }
  };
  updateTrips = async (tripId) => {
    try {
      await api.put(`/trips/${updatedTrips._id}`);
      let tripsUpdate = this.trips.map((trip) =>
        trip._id === tripsUpdate._id ? response.data : trip
      );
      this.trips = tripsUpdate;
    } catch (error) {
      console.log(
        "🚀 ~ file: tripStore.js ~ line 37 ~ TripStore ~ updateTrips= ~ error",
        error
      );
    }
  };
}
const tripStore = new TripStore();
tripStore.fetchTrips();

export default tripStore;
