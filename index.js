const loadData = () => {
    url = ` https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayData(data))
}

const displayData = (aiData) => {
  const dataShow = document.getElementById('show-data');
  console.log(aiData)
  aiData.data.tools.forEach(showAi => {

    const div = document.createElement('div');
    
       console.log(showAi)
    div.classList.add('col');
    div.innerHTML = `
    <div class="card h-100">
      <img src="${showAi.image}" class="card-img-top" alt="...">
      <div class="card-body">
      <h3>Features</h3>
        <ol>
       <li>${showAi.features[0]}</li>
       <li>${showAi.features[1]}</li>
       <li>${showAi.features[2]}</li>
      </ol>
      </div>
      <div class="card-footer d-flex justify-content-between">
      <div>
      <h5 class="card-title">${showAi.name}</h5>
      <p><i class="fa-solid fa-calendar-days"></i> ${showAi.published_in}</p>
      </div>
        <div>
        <button  class="btn btn-outline-warning p-3 border-0 rounded-4 fs-2"><i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    </div>
    `;
    dataShow.appendChild(div);
  });
  
    
}



loadData();