const access_key="bUb2SXkWGZcBuz-O5g1Gkim2ToOJrTiiyPM4QAEGOzM"

const formEl=document.querySelector("form")
const inputEl=document.getElementById("search-input")
const searchResults=document.querySelector(".search-results")
const showMore=document.getElementById("show-more-button")

let inputData=""//this iput data will store all the keywords any user searches in the input section.
let page=1;

async function searchImages(){
    inputData=inputEl.value;
    //now what we will do is whenver the user searches a for any image and  after clicking on the search button images realted from that search will be fetched from the API so for that we have to create a dynamic URL.
    const url= `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${access_key}`
    // now to fetch the images from the URL we need an async function that would actually fetch the images
    const response=await fetch(url);//this will actually fetch the images based on the query..
    const data = await response.json();//now all the data fetched will be converted int ojson format and will be stored in the variabel data.

    // all the data fetched will be in json format
    const result =data.results;

    if(page===1)
        searchResults.innerHTML=""


    result.map((results)=>{
        const imageWrapper=document.createElement("div");
        imageWrapper.classList.add("search-result");
        const image=document.createElement("img");

        image.src=results.urls.small;
        image.alt=results.alt_description;
        //since we have 3 things in the anchor tag portion ,so we are ac
        const imageLink=document.createElement("a");

        imageLink.href=results.links.html;
        imageLink.target="_blank";

        imageLink.textContent=results.alt_description;
// after creating the div , image and anchor tag we will now append it.. in our webpage.
        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);


    });
    page++;

    if(page>1)
        showMore.style.display="block"
}
//when anyone clicks on the search button so the event  submit will be triggererd adn then within it we will call the search function.
formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    page=1;
    searchImages();
})

showMore.addEventListener("click",()=>{
    searchImages();
})