import axios from "axios";

const journalApi = axios.create({
  baseURL: "https://vue-demos-f4d38-default-rtdb.firebaseio.com",
});

export default journalApi;
