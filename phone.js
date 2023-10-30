const loadphone = async (searchdata, isShowall ) => {
  const url = ` https://openapi.programming-hero.com/api/phones?search=${searchdata}`;
  const res = await fetch(url);
  const data = await res.json();
  const phones = data.data;
  displayPhones(phones, isShowall);
};
const displayPhones = (phones, isShowall) => {
    // 1: get the location
    const phonecontainer = document.getElementById('phone-container')
    // clear container
    phonecontainer.textContent = '';


   
    // for displaying more phone adding show more buddon
    const showbutton =document.getElementById('show-more');

    if(phones.length > 12 ){
        showbutton.classList.remove('hidden')
    }
    else{
        showbutton.classList.add('hidden')
    }

    // console.log('is Show all', isShowall)
    // display only first  12 phone
    if(!isShowall){
      phones = phones.slice(0, 12)
    }
    


  phones.forEach((phone) => {
    // console.log(phone);
    // 2: create a div
    const phoneCard = document.createElement('div');
    phoneCard.classList =`card w-60 bg-base-100 `;
    // 3: set innerthtml
    phoneCard.innerHTML =`
    <div class="card w-60 bg-gray-100 my-10">
            <figure>
              <img
                src="${phone.image}"
                alt="Shoes"
                class="my-4"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title text-center">${phone.brand}</h2>
              <p class="text-xl font-bold text-center">${phone.phone_name}</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary ">Buy Now</button>
              </div>
            </div>
          </div>
    `;
    // console.log(phoneCard)
    // 4: appendChild
    phonecontainer.appendChild(phoneCard)
  });

  toggleLoadingSpinner(false)
};

const handleSearch = ( isShowall) =>{
    toggleLoadingSpinner(true)
    console.log('searching')
    const inputText = document.getElementById('search-input');
    const inputData = inputText.value;
    loadphone(inputData, isShowall)
}

const toggleLoadingSpinner = (isloading) =>{
    const spinner = document.getElementById('loading-spinner');
    if(isloading){
        spinner.classList.remove('hidden')
    }
    else{
        spinner.classList.add('hidden')
    }
}

// handle show all

const handleShowAll  = () =>{
    // const showbutton = documet.getElementById('show-more')
    handleSearch(true)
}
