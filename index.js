const access_key="bUb2SXkWGZcBuz-O5g1Gkim2ToOJrTiiyPM4QAEGOzM"

const formEl=document.querySelector("form")
const inputEl=document.getElementById("search-input")
const searchResults=document.querySelector(".search-results")
const showMore=document.getElementById("show-more-button")

let inputData=""//this iput data will store all the keywords any user searches in the input section.
let page=1;

function searchImages(){
    inputData=inputEl.value;
    //now what we will do is whenver the user searches a for any image and  after clicking on the search button images realted from that search will be fetched from the API so for that we have to create a dynamic URL.
    const url= `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${access_key}`
}