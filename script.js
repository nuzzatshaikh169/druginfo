const drugs = drugData;

let activeFilter = "All";

const searchInput = document.getElementById("searchInput");
const suggestions = document.getElementById("suggestions");


/* STATS */

function renderStats(){

const bar=document.getElementById("statsBar");

const categories=
[...new Set(
drugs.map(d=>d.category)
)].length;

bar.innerHTML=`

<span class="stat-chip">
${drugs.length} drugs
</span>

<span class="stat-chip">
${categories} categories
</span>

<span class="stat-chip">
Reference only
</span>

`;

}


/* FILTERS */

function renderFilters(){

const categories=[

"All",

...new Set(
drugs.map(
d=>d.category
)
)

];

const container=
document.getElementById(
"filters"
);

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


/* DRUG GRID */

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
document.getElementById(
"drugGrid"
);

if(list.length===0){

grid.innerHTML=`
<p>No drugs available</p>
`;

return;

}

grid.innerHTML=

list.map(d=>`

<div
class="drug-pill"
onclick="showCard('${d.name}')">

<div>

${d.name}

</div>

<div class="pill-use">

${d.uses}

</div>

</div>

`).join("");

}


/* AUTOCOMPLETE */

searchInput.addEventListener(
"input",

function(){

const value=

searchInput.value
.trim()
.toLowerCase();

if(value===""){

suggestions.innerHTML="";

suggestions.classList.remove(
"active"
);

return;

}

const matches=

drugs.filter(d=>

d.name
.toLowerCase()
.startsWith(value)

).slice(0,8);

if(matches.length===0){

suggestions.innerHTML="";

suggestions.classList.remove(
"active"
);

return;

}

suggestions.innerHTML=

matches.map(d=>`

<div
class="suggestion-item"
onclick="pickSuggestion('${d.name}')">

<strong>

${d.name}

</strong>

<br>

<small>

${d.category}

</small>

</div>

`).join("");

suggestions.classList.add(
"active"
);

}

);


/* SELECT SUGGESTION */

function pickSuggestion(name){

searchInput.value=name;

suggestions.classList.remove(
"active"
);

showCard(name);

}


/* SEARCH */

function searchDrug(){

const value=

searchInput.value
.trim()
.toLowerCase();

if(value==="") return;

const exact=

drugs.find(d=>

d.name
.toLowerCase()===value

);

if(exact){

showCard(exact.name);

return;

}

const partial=

drugs.filter(d=>

d.name
.toLowerCase()
.includes(value)

);

if(partial.length>0){

showCard(
partial[0].name
);

return;

}

document.getElementById(
"result"
).innerHTML=`

<div
style="
text-align:center;
padding:40px;">

<h3>

Drug not found

</h3>

<p>

Try another drug name

</p>

</div>

`;

}


/* DRUG CARD */

function showCard(name){

const drug=

drugs.find(
d=>d.name===name
);

if(!drug) return;

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
