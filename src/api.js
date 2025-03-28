import axios from "axios";

const API_ENDPOINTS = {
  prime: "http://20.244.56.144/test/primes",
  fibonacci: "http://20.244.56.144/test/fibo",
  random: "http://20.244.56.144/test/random",
  even: "http://localhost:9876/numbers/e",
};

const AUTH_HEADERS = {
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzMTUyMDEzLCJpYXQiOjE3NDMxNTE3MTMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjU2NDljNzI0LTMwOWUtNDkyYi1iNWM2LTc3NjA4ZWE0NjIyMyIsInN1YiI6Im1hbmFzYWJhdGNodTA0QGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6Ikxha2lyZWRkeSBCYWxpIFJlZGR5IENvbGxlZ2UgT2YgRW5naW5lZXJpbmciLCJjbGllbnRJRCI6IjU2NDljNzI0LTMwOWUtNDkyYi1iNWM2LTc3NjA4ZWE0NjIyMyIsImNsaWVudFNlY3JldCI6IlRHZlhDTWhBeWFBbEtJamIiLCJvd25lck5hbWUiOiJCYXRjaHUgTWFuYXNhIiwib3duZXJFbWFpbCI6Im1hbmFzYWJhdGNodTA0QGdtYWlsLmNvbSIsInJvbGxObyI6IjIyNzYxQTEyMDQifQ.Xgi_y2aUZ-QGs6Gt65adNqqo9d5IkT7bBSJ2LlScvcU"
  },
};

export const fetchNumbers = async (type) => {
  try {
    const response = await axios.get(API_ENDPOINTS[type], {
      ...AUTH_HEADERS,
      timeout: 500,
    });
    return response.data.numbers || [];
  } catch (error) {
    console.error("Error fetching numbers:", error);
    return [];
  }
};
