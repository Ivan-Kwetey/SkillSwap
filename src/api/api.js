const BASE_URL = "https://randomuser.me/api";

// Fetch users
export const fetchUsers = (count = 12) => {
  return fetch(`${BASE_URL}/?results=${count}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }
      return res.json(); //first then returns res.json
    })
    .then((data) => {
      return data.results;
    })
    .catch((err) => {
      console.error("Failed to fetch users:", err);
      throw err;
    });
};

// Simulate sending a skill request
export const sendRequest = (userId) => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId }),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error("Failed to send request:", err);
      throw err;
    });
};

// Simulate canceling a skill request
export const cancelRequest = (requestId) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${requestId}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error("Failed to cancel request:", err);
      throw err;
    });
};
