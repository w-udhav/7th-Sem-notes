function milna(permission) {
  return new Promise((resolve, reject) => {
    if (permission) {
      resolve("Jab we met");
    } else {
      reject("No");
    }
  });
}

function movie(movie) {
  return new Promise((resolve, reject) => {
    if (movie === "The Matrix") {
      resolve("The Matrix is a great movie");
    } else {
      reject("I don't know that movie");
    }
  });
}

// milna(true)
//   .then((data) => {
//     console.log(data);
//     return movie(data);
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

function download(url) {
  return new Promise((resolve, reject) => {
    let url_ = url.split(":")[0];
    if (url_ !== "http" && url_ !== "https") {
      reject("Only HTTP(s) supported");
    }
    setTimeout(() => {
      resolve(url.split("/").pop());
    }, 3000);
  });
}

function compress(file) {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject("No file to compress");
    }
    setTimeout(() => {
      resolve(file.split(".")[0] + ".zip");
    }, 1000);
  });
}

function upload(cFile) {
  return new Promise((resolve, reject) => {
    if (!cFile) {
      reject("No file to upload");
    }
    setTimeout(() => {
      resolve(`https://file.io/${cFile}`);
    }, 2000);
  });
}

download("http://example.com/file.txt")
  .then((file) => {
    console.log(`Downloaded: ${file}`);
    return compress(file);
  })
  .then((compressedFile) => {
    console.log(`Compressed: ${compressedFile}`);
    return upload(compressedFile);
  })
  .then((uploadUrl) => {
    console.log(`Uploaded to: ${uploadUrl}`);
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });
