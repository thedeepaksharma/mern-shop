import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzI5YmM4MzY2NTAzYWIyYTFlYmUxNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NDk2NzEyNSwiZXhwIjoxNjY1MTM5OTI1fQ.EiQ95fGJWjCuJ51EIRwqGrD7XQS-dHy5SpfhmGAoP2c";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
