import {
  GetAllData,
  GetById,
  PostData,
  DeleteData,
  PutData,
} from "./Api/ApiFunctions.js";

//Get All Data
// GetAllData();

//Get Data By Id
// GetById({
//   id: "6391a924c923987032825053",
// });

//Post Data
PostData({
  title: "Mau Post ",
  desc: "ini test yaa hehe",
  published: true,
});

//Delete Data
// DeleteData({ id: "6391a8efc923987032825051" });

//Update Data
// PutData({
//   id: "6391a924c923987032825053",
//   title: "Test Update Terbaru5",
//   desc: "ini test update terbaru5",
//   published: true,
// });
