const drugs = [

{
name:"Paracetamol",
dosage:"500–650 mg every 4–6 hrs",
uses:"Fever, mild pain",
sideEffects:"Nausea, rash",
precautions:"Avoid overdose in liver disease",
category:"Pain Relief"
},

{
name:"Pantoprazole",
dosage:"40 mg daily",
uses:"Acid reflux",
sideEffects:"Nausea, dizziness",
precautions:"Avoid unnecessary long-term use",
category:"GI"
},

{
name:"Ibuprofen",
dosage:"200–400 mg every 6–8 hrs",
uses:"Pain, inflammation",
sideEffects:"Gastric irritation",
precautions:"Avoid in ulcers and kidney disease",
category:"Pain Relief"
},

{
name:"Cetirizine",
dosage:"10 mg daily",
uses:"Allergy relief",
sideEffects:"Drowsiness, dry mouth",
precautions:"Avoid alcohol while taking",
category:"Allergy"
},

{
name:"Amoxicillin",
dosage:"250–500 mg three times daily",
uses:"Bacterial infections",
sideEffects:"Rash, diarrhea",
precautions:"Complete full course",
category:"Antibiotics"
},

{
name:"Metformin",
dosage:"500–1000 mg twice daily",
uses:"Type 2 diabetes",
sideEffects:"Diarrhea, nausea",
precautions:"Avoid in severe kidney disease",
category:"Diabetes"
},

{
name:"Amlodipine",
dosage:"5–10 mg daily",
uses:"Hypertension",
sideEffects:"Swelling, dizziness",
precautions:"Monitor blood pressure",
category:"Heart / BP"
}

];

let activeFilter="All";

/* STATS */

function renderStats(){

const bar=document.getElementById("statsBar");

const categories=[
...new Set(drugs.map(d=>d.category))
].length;

bar.innerHTML=`

<span class="stat-chip">
${drugs.length} drugs
</span>

<span class="stat-chip">
${categories} categories
</span>

`;

}


/* FILTERS */

function renderFilters(){

const categories=[
"All",
...new Set(drugs.map(d=>d.category))
];

const container=
document.getElementById("filters");

container.innerHTML=
categories.map(cat=>`

<button
class="filter-btn ${cat===activeFilter?"active":""}"
onclick="setFilter('${cat}')">

${cat}

</button>

`).join("");

}

function setFilter(cat){

activeFilter=cat;

renderFilters();

renderGrid();

}


/* GRID */

function renderGrid(){

const list=
activeFilter==="All"
?
drugs
:
drugs.filter(
d=>d.category===activeFilter
);

const grid=
document.getElementById("drugGrid");

grid.innerHTML=
list.map(d=>`

<div class="drug-pill"
onclick="showCard('${d.name}')">

<div>${d.name}</div>

<div class="pill-use">
${d.uses}
</div>

</div>

`).join("");

}


/* LIVE SEARCH + AUTOCOMPLETE */

const searchInput=
document.getElementById("searchInput");

const suggestions=
document.getElementById("suggestions");

searchInput.addEventListener(
"input",
function(){

const value=
searchInput.value
.trim()
.toLowerCase();

if(value===""){

suggestions.innerHTML="";
suggestions.classList.remove("active");

return;

}

const matches=
drugs.filter(d=>
d.name.toLowerCase()
.startsWith(value)
);

if(matches.length===0){

suggestions.innerHTML="";
suggestions.classList.remove("active");

return;

}

suggestions.innerHTML=
matches.map(d=>`

<div
class="suggestion-item"
onclick="pickSuggestion('${d.name}')">

<strong>${d.name}</strong>

<br>

<small>
${d.category}
</small>

</div>

`).join("");

suggestions.classList.add("active");

}
);


function pickSuggestion(name){

searchInput.value=name;

suggestions.classList.remove("active");

showCard(name);

}


/* SEARCH BUTTON */

function searchDrug(){

const value=
searchInput.value
.trim()
.toLowerCase();

const drug=
drugs.find(
d=>d.name
.toLowerCase()===value
);

if(drug){

showCard(drug.name);

}else{

document.getElementById(
"result"
).innerHTML=`

<div
style="
text-align:center;
padding:40px">

<h3>
Drug not found
</h3>

</div>
`;

}

}


/* SHOW CARD */

function showCard(name){

const drug=
drugs.find(
d=>d.name===name
);

document.getElementById(
"result"
).innerHTML=`

<div class="drug-card">

<div class="card-header">

<div>

<div class="drug-name">
${drug.name}
</div>

</div>

</div>

<div class="card-body">

<div class="card-field">

<div class="field-label">
Dosage
</div>

<div>
${drug.dosage}
</div>

</div>

<div class="card-field">

<div class="field-label">
Uses
</div>

<div>
${drug.uses}
</div>

</div>

<div class="card-field">

<div class="field-label">
Side Effects
</div>

<div>
${drug.sideEffects}
</div>

</div>

<div class="card-field">

<div class="field-label">
Precautions
</div>

<div>
${drug.precautions}
</div>

</div>

</div>

</div>

`;

}


/* INITIALIZE */

renderStats();

renderFilters();

renderGrid();
