import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: "http://captkakao.su",
});

class AfishaService {
  getAllCinemasByCity() {
    var city_id = localStorage.getItem("city_id")
      ? localStorage.getItem("city_id")
      : 3;
    return axiosInstance.get("/cinema/city/" + city_id);
  }

  getCinemaById(id) {
    return axiosInstance.get("/cinema/" + id);
  }

  createCinema(cinema) {
    return axiosInstance.post("/cinema", cinema);
  }

  deleteCinema(id) {
    return axiosInstance.delete("/cinema", id);
  }

  updateCinema(cinema) {
    return axiosInstance.put("/cinema/" + cinema.id, cinema);
  }

  getArticle(id) {
    return axiosInstance.get("/article/" + id);
  }

  loadingGif() {
    const gif = (
      <div class="text-center mt-5">
        <div
          class="spinner-border"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span class="sr-only"></span>
        </div>
      </div>
    );
    return gif;
  }

  getMovieById(id) {
    return axiosInstance.get("/movie/" + id);
  }

  youtube_parser(url) {
    if (url.substr(0, 17) === "https://youtu.be/") {
      var short_url = url.substr(17, url.length);
      return short_url;
    }
  }

  
}
export default new AfishaService();
