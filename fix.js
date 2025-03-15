// Fix me problem

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i);
}

async function task() {
  try {
    const valueA = await functionA();
    const valueB = await functionB(valueA);
    const valueC = await functionD(valueB);
    return await functionD(valueC);
  } catch (error) {
    console.log(error);
  }
}

task(1);
