import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";

// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   .currentUser.accessToken;
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGZiZTUwMmQwN2VjMmVmNzlkOWZlYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDgzNjAyOCwiZXhwIjoxNjQ1MDk1MjI4fQ.8DlJBvOr7602hJK4KimKYY5-MBtYJ1S581MSR8djrlA` },
});
