// const { readFile } = require("fs");

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

async function fetch() {
  // Simulating an API request
  const user = { id: 1, name: "Pushkar" };

  return new Promise((resolve) => {
    resolve(user);
  });
}

// Function to process user data using Async/Await
async function process() {
  try {
    const data = await fetch();
    console.log("Processing user data:", data);
    console.log("User data processed successfully.");
  } catch (error) {
    console.error("Error:", error);
  }
}

// Using Async/Await
process();
