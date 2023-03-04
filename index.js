const loadData = () => {
  const  url = `https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayData(data))
}

const displayData = (aiData) => {
  const dataShow = document.getElementById('show-data');
  const showMore = document.getElementById('show-more');
  if (aiData.length > 3) {
    aiData = aiData.slice(0, 3);
    showMore.classList.remove('d-none');
  }
  else {
    showMore.classList.add('d-none');
  }
  
  
  aiData.data.tools.slice(0, 3).forEach((showAi) => {
    const {id} = showAi;
    const div = document.createElement('div');
    
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
        <button onclick="showModal('${id}')"  class="btn btn-outline-warning p-3 border-0 rounded-4 fs-2"><i class="fa-solid fa-arrow-right"  data-bs-toggle="modal" data-bs-target="#exampleModal"></i></button>
        
        </div>
      </div>
    </div>
    `;
    dataShow.appendChild(div);
  });
  
    
}
document.getElementById('btn-show-more').addEventListener('click', function () {
  

})
loadData();

const showModal = (id) => {
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  fetch(url)
    .then(res => res.json())
    .then(data => showDetail(data.data));
}
const showDetail = modals => {
  
  const modalData = document.getElementById('modal-data');
  modalData.innerHTML = `
  <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">${modals.description}</h5>
        <div class="row row-cols-3 row-cols-md-3 g-4">
        <div class="col">
    <div class="card">
      <div class="card-body">
        <p class="card-text text-warning fs-5">${modals.pricing[0].price}</p></div></div></div>
        <div class="col">
    <div class="card">
      <div class="card-body">
        <p class="card-text text-warning fs-5">${modals.pricing[1].price}</p></div></div></div>
        <div class="col">
    <div class="card">
      <div class="card-body">
        <p class="card-text text-warning fs-6">${modals.pricing[2].price}</p>

        </div>
        </div>
        </div>
        </div>

<div class="row row-cols-2 row-cols-md-2 g-4">
        <div class="col">
    <div class="card">
      <div class="card-body">
       <h3>Features</h3>
       <ul>
       <li>${modals.features[1].feature_name ? modals.features[1].feature_name:'do not found'}</li>
       <li>${modals.features[2].feature_name ? modals.features[2].feature_name:'do not found'}</li>
       <li>${modals.features[3].feature_name ? modals.features[3].feature_name:'do not found'}</li>
       </ul>
      </div>
      </div>
    </div>



        <div class="col">
    <div class="card">
      <div class="card-body">
       <h3>Integrations</h3>
        <ul>
      <li>${modals.integrations[0] ? modals.integrations[0]:'do not found' }</li>
      <li>${modals.integrations[1] ? modals.integrations[1]:'do not found'}</li>
      <li>${modals.integrations[2] ? modals.integrations[2]:'do not found'}</li>
    </ul>
      </div>
      </div>
    </div>
  </div>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card h-100">
      <img  src="${modals.image_link[0]}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${modals.input_output_examples[0].input? modals.input_output_examples[0].input:'do not found'}</h5>
        <p class="card-text">${modals.input_output_examples[0].output? modals.input_output_examples[0].output:'do not found'}</p>
      </div>
    </div>
  </div>
</div>
  `;
   
}

