import axios from "axios";
import React from "react";
import "./Crud.css";
import { useState, useEffect } from "react";

function Crud() {
  const [fetchStatus, setFetchStatus] = useState(true);
  const [currentId, setCurrentId] = useState(-1);
  const [data, setData] = useState("");
  const [sendData, setSendData] = useState({
    title: "",
    desc: "",
  });

  useEffect(() => {
    if (fetchStatus === true) {
      axios
        .get(`https://faris-crud-film.up.railway.app/api/posts/`)
        .then((res) => {
          setData([...res.data]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setFetchStatus(false);
  }, [fetchStatus, setFetchStatus]);

  const handleDelete = (id) => {
    axios
      .delete(`https://faris-crud-film.up.railway.app/api/posts/${id}`)
      .then((res) => {
        console.log("berhasil dihapus!");
        setFetchStatus(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentId === -1) {
      axios
        .post(`https://faris-crud-film.up.railway.app/api/posts/`, sendData)
        .then((res) => {
          console.log("berhasil upload");
          setFetchStatus(true);
          setSendData({
            title: "",
            desc: "",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .put(
          `https://faris-crud-film.up.railway.app/api/posts/${currentId}`,
          sendData
        )
        .then((res) => {
          console.log("berhasil update");
          setFetchStatus(true);
          setSendData({
            title: "",
            desc: "",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setCurrentId(-1);
    setSendData({ title: "", desc: "" });
  };

  const handleEdit = (id) => {
    // let id = event.target.value;
    setCurrentId(id);
    // console.log(id);
    axios
      .get(`https://faris-crud-film.up.railway.app/api/posts/${id}`)
      .then((res) => {
        let data = res.data;
        setSendData({
          title: data.title,
          desc: data.desc,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    if (name === "title") {
      setSendData({ ...sendData, title: value });
    } else if (name === "desc") {
      setSendData({ ...sendData, desc: value });
    }
  };

  return (
    <div className="h-[530px] bg-blue-100 px-3 pt-5">
      <form className="flex items-center flex-col" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 mx-5">
          <label htmlFor="title" className="">
            Title
          </label>
          <input
            id="title"
            type="text"
            name="title"
            placeholder="Masukkan Title"
            value={sendData.title}
            onChange={changeHandler}
          />
        </div>
        <div className="my-4 flex flex-col gap-2 mx-5">
          <label htmlFor="password" className="">
            Describe
          </label>
          <input
            id="desc"
            type="text"
            name="desc"
            placeholder="Masukkan desc"
            value={sendData.desc}
            onChange={changeHandler}
          />
        </div>
        <div className="mt-3 flex gap-2">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-3 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="overflow-scroll mt-5 overflow-custom overflow-x-hidden rounded-md bg-white lg:mx-auto lg:h-[245px]">
        {data &&
          data.map((datas, index) => {
            return (
              <div
                key={index}
                className="flex justify-between items-center px-2 border border-blue-600 rounded-md my-1"
              >
                <div>
                  <p>
                    <span className="font-semibold">Title: </span>
                    {datas.title}
                  </p>
                  <p>
                    <span className="font-semibold">Desc: </span>
                    {datas.desc}
                  </p>
                  {/* <p>
                    <span className="font-semibold">Published: </span>
                    {datas.published === true ? "True" : "False"}
                  </p> */}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(datas.id)}
                    className="bg-blue-600 text-white py-2 px-3 rounded-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      handleDelete(datas.id);
                    }}
                    className="bg-red-600 text-white py-2 px-3 rounded-md"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Crud;
