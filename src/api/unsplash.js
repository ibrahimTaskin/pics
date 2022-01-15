import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/search/photos",
  headers: {
    Authorization: "Client-ID rrs09zMrC_TmTd441Tt695ppSfs-IBDhD6NaN70X8XA",
  },
});
