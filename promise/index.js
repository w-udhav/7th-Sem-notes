function sum(a, b) {
  return new Promise((resolve, reject) => {
    let flag = false;
    if (flag) return reject("Error");

    let result = a + b;
    resolve(result);
  });
}

sum(2, 3)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

document.getElementById("btn").addEventListener("click", async () => {
  const data = await fetchData("https://api.sampleapis.com/avatar/info");
  document.getElementById("data").innerHTML = `<pre>${JSON.stringify(
    data,
    null,
    2
  )}</pre>`;
});
