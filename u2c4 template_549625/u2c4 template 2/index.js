// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("form").addEventListener("submit",store_data)
var array=JSON.parse(localStorage.getItem("schedule",JSON.stringify(array)))||[]
function store_data(){
    event.preventDefault()
    obj={
        match_num : masaiForm.matchNum.value,
        teamA: masaiForm.teamA.value,
        teamB: masaiForm.teamB.value,
        date: masaiForm.date.value,
        venue: masaiForm.venue.value
    }
    array.push(obj)
    localStorage.setItem("schedule",JSON.stringify(array))
}
