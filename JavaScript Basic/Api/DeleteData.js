import fetch from "node-fetch";

const DeleteData = async ({ id }) => {
  try {
    const data = await fetch(
      `https://faris-crud-film.up.railway.app/api/posts/${id}`,
      {
        method: "DELETE",
      }
    ).then((response) => response.json());

    //Print Response
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default DeleteData;
