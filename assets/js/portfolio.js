const portfolioWrapper = document.querySelector('.portfolio-wrapper');

const getData = async function (url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Address error ${url}, error status ${response.status} !`);
  }
  return await response.json();
}


getData('assets/data.json').then(function(data){
  data.forEach(renderCardProject);
});


function renderCardProject(data){
  console.log(data);
  const  output = `
      <div class="portfolio-item">
        <div class="portfolio-details">
          <a href="${data.image}" class="portfolio-img"><img src="${data.preview}" alt="Portfolio" /></a>
        </div>
      </div>
    `
    portfolioWrapper.insertAdjacentHTML("afterbegin", output);
}