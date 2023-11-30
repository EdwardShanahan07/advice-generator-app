const getAdvice = async (api) => {
  const response = await fetch(api);
  const data = await response.json();

  const { id, advice } = data.slip;

  generateAdvice(id, advice);
};

const generateAdvice = (id, advice) => {
  document.getElementById("advice-id").textContent = id;
  document.getElementById("adive-text").textContent = `"${advice}"`;
  console.log(id, advice);
};

document
  .getElementById("new-advice")
  .addEventListener("click", () =>
    getAdvice("https://api.adviceslip.com/advice")
  );
