import fetch from "node-fetch";
import GetAllData from "./GetAllData.js";

const PutData = async ({ id, title, desc, published }) => {
  try {
    const datas = {
      title: title,
      desc: desc,
      published: published,
    };

    const data = await fetch(
      `https://faris-crud-film.up.railway.app/api/posts/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datas),
      }
    ).then((response) => response.json());

    //Print Output response
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default PutData;
