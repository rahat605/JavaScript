let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async()=>{
    let country = document.querySelector("input").value;
    console.log(country);
    let college = await getCollege(country);
    console.log("college"); 
});
async function getCollege(country) {
    try{
       let res = await axios.get(url+country);
       return res.data;
    }catch(e){
        console.log("Error",e);
        return [];
    }
    
}