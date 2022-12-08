const promiseExample = (name) => {
  return new Promise((resolve, reject) => {
    if (!name) {
      reject("Nama Belum diInputkan!");
    } else {
      resolve(`Hi, ${name} salam kenal yaa!`);
    }
  });
};

// promiseExample()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const asyncExample = async () => {
  try {
    const data = await promiseExample("Budi");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

asyncExample();
