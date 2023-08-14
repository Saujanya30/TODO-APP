const text_value = ()=>{
    let text_val = document.getElementById('w3review')
    let text_head = document.getElementById('noteHeading')
    console.log(text_val.value);
    console.log(text_head.value);
    if(text_val.value!="" && text_head.value!="") localStorage.setItem(text_head.value, text_val.value)
    text_val.value = "";
    text_head.value = "";
}
// localStorage.removeItem('')
//  YOUR NOTES JS STARTS HERE
const items = { ...localStorage };// to get all items in localstorage
let ihtml = "";
let cnt = 1;
for(let it in items){
    ihtml += `
    <div class="card" id="card${cnt}">
    <h1>Note ${cnt}</h1>
    <button class="deleteBtn" onclick="delNote('${it}', ${cnt})">Delete</button>
    <h3>Note topic - ${it}<h3>
    <p> ${items[it]}</p>
    </div>
    `
    cnt++;
}   
let note_container = document.getElementById('note_container');
if(ihtml!="") note_container.innerHTML = ihtml

const delNote = (note_head_val, note_ind)=>{
    localStorage.removeItem(note_head_val);
    const delind = document.getElementById('card' + note_ind);
    console.log('card' + note_ind)
    delind.remove();
}