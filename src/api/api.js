const BASE_URL = "https://randomuser.me/api";

// Fetch users
export const fetchUsers = (count = 12) => {
  return fetch(`${BASE_URL}/?results=${count}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }
      //first then returns res.json
      return res.json();
    })
    .then((data) => {
      return data.results;
    })
    .catch((err) => {
      console.error("Failed to fetch users:", err);
      throw err;
    });
};

export const sendRequest = (userId) => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId,
      status: "pending",
      createdAt: new Date().toISOString(),
    }),
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Request failed");
    }
    return res.json();
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
