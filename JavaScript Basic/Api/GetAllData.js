import fetch from "node-fetch";

const GetAllData = async () => {
  try {
    const data = await fetch(
      `https://faris-crud-film.up.railway.app/api/posts/`,
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

export default GetAllData;
