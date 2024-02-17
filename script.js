let key = "47c5ae3c048b4b83aaedf0739389066d";

const getData =async() =>{
    let res = await fetch(`https://newsapi.org/v2/everything?q=india&apiKey=$(key)`);
   let jsonData = await res.json();
   console.log(jsonData)
    console.log(jsonData.articles[0].title);
}
getData();
