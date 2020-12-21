

const restApi = (email, name, msg) => {
  fetch("https://jsonplaceholder.typicode.com/posts/", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      name: name,
      msg: msg,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
};

export default restApi;
