// write js code here corresponding to matches.html
var input=JSON.parse(localStorage.getItem("schedule"))
// console.log(input)
var output=JSON.parse(localStorage.getItem("favourites"))||[];

document.querySelector("#filterVenue").addEventListener("change",filter_data)

function filter_data(){
    var check=document.querySelector("#filterVenue").value
    var fil_list=input.filter(function(ele){
        return ele.venue==check;
    })
    display_match(fil_list);
}

display_match(input);

function display_match(data)
{
document.querySelector("tbody").innerHTML="";
data.forEach(function(ele){
    var tr=document.createElement("tr")

    var td1=document.createElement("td")
    td1.innerText=ele.match_num

    var td2=document.createElement("td")
    td2.innerText=ele.teamA

    var td3=document.createElement("td")
    td3.innerText=ele.teamB

    var td4=document.createElement("td")
    td4.innerText=ele.date

    var td5=document.createElement("td")
    td5.innerText=ele.venue

    var td6=document.createElement("td")
    td6.innerText="Favourites"
    td6.style.color="green"
    td6.style.cursor="Pointer"
    td6.addEventListener("click",function(){
        store_fav(ele)
    })

    tr.append(td1,td2,td3,td4,td5,td6)
    document.querySelector("tbody").append(tr)

})
}

function store_fav(ele){
output.push(ele)
localStorage.setItem("favourites",JSON.stringify(output))
}
