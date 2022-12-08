import fetch from "node-fetch";

const getData = async () => {
  try {
    fetch(`https://faris-crud-film.up.railway.app/api/posts/`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  } catch (error) {
    console.log(error);
  }
};

getData();
