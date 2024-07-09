function download(url, cb) {
  let url_ = url.split(":")[0];
  if (url_ !== "http" && url_ !== "https") {
    return cb(new Error("Only HTTP(s) supported"));
  }
  setTimeout(() => {
    let filename = url.split("/").pop();
    cb(null, filename);
  }, 3000);
}

function compress(file, cb) {
  setTimeout(() => {
    const compressedFile = file.split(".")[0] + ".zip";
    cb(null, compressedFile);
  }, 1000);
}

function upload(cFile, cb) {
  setTimeout(() => {
    const uploadedFile = `https://file.io/${cFile}`;
    cb(null, uploadedFile);
  }, 2000);
}

download("http://movies.com/movie1.mp4", function (err, filename) {
  if (err) return console.log(err);
  console.log("Download complete as", filename);

  compress(filename, function (err, compressedFile) {
    if (err) return console.log(err);
    console.log("Compression complete as", compressedFile);

    upload(compressedFile, function (err, uploadedFile) {
      if (err) return console.log(err);
      console.log("Upload complete as", uploadedFile);
    });
  });
});
