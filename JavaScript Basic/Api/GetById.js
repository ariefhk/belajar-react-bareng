import fetch from "node-fetch";

const GetById = async ({ id }) => {
  try {
    const data = await fetch(
      `https://faris-crud-film.up.railway.app/api/posts/${id}`,
      {
        method: "GET",
      }
    ).then((response) => response.json());

    //Print Hasil
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default GetById;
