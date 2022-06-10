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
  register(data) {
    return axiosInstance.post("/auth/register", data);
  }
  get_today_tomorrow() {
    return axiosInstance.get("/today_tomorrow");
  }
  get_todays_date() {
    axiosInstance.get("/today_tomorrow").then((res) => {
      return res.data.today;
    });
  }
  confirm_email(mail) {
    return axiosInstance.post("/email-confirmation/send", {
      email: mail,
    });
  }
  send_code_email(mail, code) {
    return axiosInstance.post("/email-confirmation/confirm", {
      email: mail,
      code: code,
    });
  }

  get_all_cities() {
    return axiosInstance.get("/cities");
  }

  get_movies_now() {
    return axiosInstance.get("/movie/showing/now");
  }
  get_movies_soon() {
    return axiosInstance.get("/movie/showing/soon");
  }
  get_movies_kids() {
    return axiosInstance.get("/movie/showing/kids");
  }

  get_cinemas_by_city_id(id) {
    return axiosInstance.get("/cinema/city/" + id);
  }
  get_seances_by_movie(id, dateTime) {
    return axiosInstance.get(`/movie/${id}/seances?datetime=${dateTime}`);
  }
  get_seances_by_cinema(id, dateTime) {
    return axiosInstance.get(`/cinema/${id}/seances?datetime=${dateTime}`);
  }
  get_id_of_city(city_name) {
    const data = [];
    this.get_all_cities().then((res) => {
      data.push(res.data.data);
      console.log(res.data.data);
    });
    const user_city = localStorage.getItem("city_name")
      ? localStorage.getItem("city_name")
      : city_name;
    data.forEach((city) => {
      if (user_city === city.name) {
        localStorage.setItem("city_id");
      }
    });
  }
  get_news() {
    return axiosInstance.get("/news");
  }
  get_news_by_id(id) {
    return axiosInstance.get("/news/" + id);
  }
  decode_text(text) {
    const new_text = text.replace(/(?:\r\n|\r|\n)/g, "<br>");
    return new_text;
  }
}
export default new AfishaService();
