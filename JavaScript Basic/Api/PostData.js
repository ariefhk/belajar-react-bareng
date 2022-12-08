import fetch from "node-fetch";

const PostData = async ({ title, desc, published }) => {
  try {
    const datas = {
      title: title,
      desc: desc,
      published: published,
    };

    const data = await fetch(
      `https://faris-crud-film.up.railway.app/api/posts/`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datas),
      }
    ).then((response) => response.json());

    //Print Hasil
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default PostData;
