let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");
btn.addEventListener("click", async()=>{
    let fact = await getFacts ();
    let p = document.querySelector("#result");
    p.innerText = fact;

})
let btn2 = document.querySelector("#dog");
btn2.addEventListener("click", async()=>{
    let dogPhoto = await getPhoto();
    let img = document.querySelector("#photo");
    img.setAttribute("src",dogPhoto);
     
})

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    }catch (e){
        console.log("Error -" ,e);
        return "No fact found!";
    }
}

async function getPhoto() {
    try {
        let res = await axios.get(url2);
        return res.data.message;
    }catch (e){
        console.log("Error", e);
        return "No photo found!";
    }
}