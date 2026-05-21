<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>MedRef — Drug Reference</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet"/>
  <style>
    :root {
      --bg: #f7f3ee;
      --surface: #ffffff;
      --border: #e2d9ce;
      --text: #1a1410;
      --muted: #7a6e65;
      --accent: #c0392b;
      --accent-light: #fdf0ef;
      --accent2: #2c7a4b;
      --accent2-light: #edf7f2;
      --tag-bg: #f0ebe4;
      --shadow: 0 2px 20px rgba(26,20,16,0.08);
      --shadow-hover: 0 8px 40px rgba(26,20,16,0.14);
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'DM Sans', sans-serif;
      background: var(--bg);
      color: var(--text);
      min-height: 100vh;
    }

    /* ── Header ── */
    header {
      background: var(--text);
      color: var(--bg);
      padding: 18px 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .logo {
      font-family: 'DM Serif Display', serif;
      font-size: 1.5rem;
      letter-spacing: -0.02em;
    }
    .logo span { color: var(--accent); }
    .badge {
      font-family: 'DM Mono', monospace;
      font-size: 0.68rem;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.2);
      padding: 4px 10px;
      border-radius: 20px;
      color: #d8cfc7;
    }

    /* ── Hero / Search ── */
    .hero {
      text-align: center;
      padding: 60px 20px 40px;
    }
    .hero h1 {
      font-family: 'DM Serif Display', serif;
      font-size: clamp(2rem, 5vw, 3.2rem);
      letter-spacing: -0.03em;
      line-height: 1.1;
      margin-bottom: 10px;
    }
    .hero p {
      color: var(--muted);
      font-size: 1rem;
      font-weight: 300;
      margin-bottom: 36px;
    }

    .search-wrap {
      max-width: 560px;
      margin: 0 auto;
      position: relative;
    }
    .search-wrap input {
      width: 100%;
      padding: 16px 60px 16px 22px;
      border: 2px solid var(--border);
      border-radius: 50px;
      font-family: 'DM Sans', sans-serif;
      font-size: 1rem;
      background: var(--surface);
      color: var(--text);
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    .search-wrap input:focus {
      border-color: var(--accent);
      box-shadow: 0 0 0 4px rgba(192,57,43,0.1);
    }
    .search-wrap input::placeholder { color: #bbb; }

    .search-btn {
      position: absolute;
      right: 8px; top: 50%;
      transform: translateY(-50%);
      background: var(--accent);
      color: white;
      border: none;
      border-radius: 50px;
      padding: 9px 20px;
      font-family: 'DM Sans', sans-serif;
      font-size: 0.85rem;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.2s, transform 0.15s;
    }
    .search-btn:hover { background: #a93226; transform: translateY(-50%) scale(1.03); }

    /* ── Suggestions dropdown ── */
    .suggestions {
      position: absolute;
      top: calc(100% + 6px);
      left: 0; right: 0;
      background: var(--surface);
      border: 1.5px solid var(--border);
      border-radius: 16px;
      overflow: hidden;
      box-shadow: var(--shadow-hover);
      z-index: 100;
      display: none;
    }
    .suggestions.active { display: block; }
    .suggestion-item {
      padding: 11px 22px;
      cursor: pointer;
      font-size: 0.95rem;
      transition: background 0.15s;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .suggestion-item:hover { background: var(--accent-light); }
    .suggestion-item .s-icon {
      width: 28px; height: 28px;
      background: var(--tag-bg);
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.75rem;
      color: var(--muted);
    }

    /* ── Stats bar ── */
    .stats-bar {
      max-width: 900px;
      margin: 0 auto 16px;
      padding: 0 20px;
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }
    .stat-chip {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 5px 14px;
      font-size: 0.78rem;
      color: var(--muted);
      font-family: 'DM Mono', monospace;
    }

    /* ── Main layout ── */
    main {
      max-width: 900px;
      margin: 0 auto;
      padding: 0 20px 60px;
    }

    /* ── Drug card ── */
    .drug-card {
      background: var(--surface);
      border: 1.5px solid var(--border);
      border-radius: 20px;
      overflow: hidden;
      box-shadow: var(--shadow);
      animation: slideUp 0.35s ease;
      margin-bottom: 20px;
    }
    @keyframes slideUp {
      from { opacity:0; transform:translateY(18px); }
      to   { opacity:1; transform:translateY(0); }
    }

    .card-header {
      background: var(--text);
      color: var(--bg);
      padding: 24px 32px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 16px;
    }
    .drug-name {
      font-family: 'DM Serif Display', serif;
      font-size: 2rem;
      letter-spacing: -0.02em;
      line-height: 1.1;
    }
    .drug-idx {
      font-family: 'DM Mono', monospace;
      font-size: 0.7rem;
      color: #888;
      margin-top: 4px;
    }
    .copy-btn {
      background: rgba(255,255,255,0.1);
      border: 1px solid rgba(255,255,255,0.2);
      color: white;
      border-radius: 10px;
      padding: 7px 14px;
      font-size: 0.78rem;
      cursor: pointer;
      font-family: 'DM Mono', monospace;
      transition: background 0.2s;
      white-space: nowrap;
    }
    .copy-btn:hover { background: rgba(255,255,255,0.2); }

    .card-body {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0;
    }
    .card-field {
      padding: 22px 28px;
      border-bottom: 1px solid var(--border);
      border-right: 1px solid var(--border);
    }
    .card-field:nth-child(2n) { border-right: none; }
    .card-field:nth-last-child(-n+2) { border-bottom: none; }
    .field-label {
      font-family: 'DM Mono', monospace;
      font-size: 0.65rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--muted);
      margin-bottom: 6px;
    }
    .field-value {
      font-size: 0.95rem;
      line-height: 1.5;
      font-weight: 400;
    }
    .field-icon {
      display: inline-block;
      width: 8px; height: 8px;
      border-radius: 50%;
      margin-right: 6px;
    }
    .icon-dosage  { background: #3498db; }
    .icon-uses    { background: #2ecc71; }
    .icon-side    { background: #e67e22; }
    .icon-precaution { background: #9b59b6; }

    /* Full-width field if odd last */
    .card-field.full { grid-column: 1 / -1; border-right: none; }

    /* ── Browse grid ── */
    .section-title {
      font-family: 'DM Serif Display', serif;
      font-size: 1.35rem;
      margin-bottom: 16px;
      letter-spacing: -0.01em;
    }
    .drug-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
      gap: 10px;
    }
    .drug-pill {
      background: var(--surface);
      border: 1.5px solid var(--border);
      border-radius: 12px;
      padding: 12px 16px;
      cursor: pointer;
      transition: border-color 0.2s, box-shadow 0.2s, transform 0.15s;
      font-size: 0.9rem;
      font-weight: 400;
    }
    .drug-pill:hover {
      border-color: var(--accent);
      box-shadow: 0 4px 14px rgba(192,57,43,0.12);
      transform: translateY(-2px);
    }
    .drug-pill .pill-use {
      font-size: 0.72rem;
      color: var(--muted);
      margin-top: 3px;
      font-family: 'DM Mono', monospace;
    }

    /* ── No result ── */
    .no-result {
      text-align: center;
      padding: 50px 20px;
      animation: slideUp 0.3s ease;
    }
    .no-result .nr-icon { font-size: 3rem; margin-bottom: 14px; }
    .no-result h3 {
      font-family: 'DM Serif Display', serif;
      font-size: 1.4rem;
      margin-bottom: 8px;
    }
    .no-result p { color: var(--muted); font-size: 0.9rem; }

    /* ── Category filters ── */
    .filters {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-bottom: 20px;
    }
    .filter-btn {
      padding: 6px 16px;
      border-radius: 20px;
      border: 1.5px solid var(--border);
      background: var(--surface);
      font-size: 0.82rem;
      cursor: pointer;
      transition: all 0.18s;
      font-family: 'DM Sans', sans-serif;
      color: var(--text);
    }
    .filter-btn.active, .filter-btn:hover {
      background: var(--text);
      color: var(--bg);
      border-color: var(--text);
    }

    /* ── Divider ── */
    .divider {
      height: 1px;
      background: var(--border);
      margin: 32px 0;
    }

    /* ── Footer ── */
    footer {
      text-align: center;
      padding: 24px;
      font-size: 0.78rem;
      color: var(--muted);
      border-top: 1px solid var(--border);
    }

    @media (max-width: 600px) {
      header { padding: 14px 20px; }
      .hero { padding: 36px 16px 28px; }
      .card-body { grid-template-columns: 1fr; }
      .card-field { border-right: none !important; }
      .card-field:nth-last-child(-n+2) { border-bottom: 1px solid var(--border); }
      .card-field:last-child { border-bottom: none; }
      .drug-name { font-size: 1.6rem; }
    }
  </style>
</head>
<body>

<header>
  <div class="logo">Med<span>Ref</span></div>
  <span class="badge">42 drugs · reference only</span>
</header>

<div class="hero">
  <h1>Drug Reference</h1>
  <p>Dosage · Uses · Side Effects · Precautions</p>
  <div class="search-wrap">
    <input type="text" id="searchInput" placeholder="Search a drug… e.g. Ibuprofen" autocomplete="off" />
    <button class="search-btn" onclick="searchDrug()">Search</button>
    <div class="suggestions" id="suggestions"></div>
  </div>
</div>

<main>
  <div class="stats-bar" id="statsBar"></div>
  <div id="result"></div>

  <div class="divider"></div>

  <div class="section-title">Browse All Drugs</div>
  <div class="filters" id="filters"></div>
  <div class="drug-grid" id="drugGrid"></div>
</main>

<footer>
  ⚠️ For educational reference only. Always consult a qualified healthcare professional.
</footer>

<script>
const drugs = [
  { name:"Paracetamol", dosage:"500–650 mg every 4–6 hrs", uses:"Fever, mild pain", sideEffects:"Nausea, rash", precautions:"Avoid overdose in liver disease", category:"Pain Relief" },
  { name:"Ibuprofen", dosage:"200–400 mg every 6–8 hrs", uses:"Pain, inflammation", sideEffects:"Gastric irritation", precautions:"Avoid in ulcers and kidney disease", category:"Pain Relief" },
  { name:"Aspirin", dosage:"75–325 mg daily", uses:"Pain, blood thinning", sideEffects:"Bleeding, stomach upset", precautions:"Avoid in children with viral illness", category:"Pain Relief" },
  { name:"Cetirizine", dosage:"10 mg daily", uses:"Allergy relief", sideEffects:"Drowsiness, dry mouth", precautions:"Avoid alcohol while taking", category:"Allergy" },
  { name:"Levocetirizine", dosage:"5 mg daily", uses:"Allergic rhinitis", sideEffects:"Sleepiness", precautions:"Use cautiously while driving", category:"Allergy" },
  { name:"Diphenhydramine", dosage:"25–50 mg", uses:"Allergy, cold symptoms", sideEffects:"Sedation, dizziness", precautions:"Avoid operating machinery", category:"Allergy" },
  { name:"Loratadine", dosage:"10 mg daily", uses:"Allergies", sideEffects:"Headache, fatigue", precautions:"Use cautiously in liver disease", category:"Allergy" },
  { name:"Fexofenadine", dosage:"120–180 mg daily", uses:"Allergies", sideEffects:"Headache, nausea", precautions:"Avoid fruit juice with dose", category:"Allergy" },
  { name:"Omeprazole", dosage:"20–40 mg daily", uses:"Acidity, GERD", sideEffects:"Headache, diarrhea", precautions:"Long-term use may lower vitamin B12", category:"GI / Acidity" },
  { name:"Pantoprazole", dosage:"40 mg daily", uses:"Acid reflux", sideEffects:"Dizziness, nausea", precautions:"Avoid unnecessary long-term use", category:"GI / Acidity" },
  { name:"Metformin", dosage:"500–1000 mg twice daily", uses:"Type 2 diabetes", sideEffects:"Diarrhea, nausea", precautions:"Avoid in severe kidney disease", category:"Diabetes" },
  { name:"Empagliflozin", dosage:"10–25 mg daily", uses:"Type 2 diabetes", sideEffects:"Urinary infections", precautions:"Drink enough water", category:"Diabetes" },
  { name:"Amlodipine", dosage:"5–10 mg daily", uses:"Hypertension", sideEffects:"Swelling, dizziness", precautions:"Monitor blood pressure", category:"Heart / BP" },
  { name:"Atorvastatin", dosage:"10–40 mg daily", uses:"High cholesterol", sideEffects:"Muscle pain", precautions:"Monitor liver function", category:"Heart / BP" },
  { name:"Nitroglycerin", dosage:"As prescribed", uses:"Chest pain", sideEffects:"Headache", precautions:"Sit while taking", category:"Heart / BP" },
  { name:"Amoxicillin", dosage:"250–500 mg three times daily", uses:"Bacterial infections", sideEffects:"Rash, diarrhea", precautions:"Complete full course", category:"Antibiotics" },
  { name:"Azithromycin", dosage:"500 mg daily", uses:"Respiratory infections", sideEffects:"Nausea", precautions:"Avoid unnecessary use", category:"Antibiotics" },
  { name:"Ciprofloxacin", dosage:"250–500 mg twice daily", uses:"UTIs, infections", sideEffects:"Tendon pain", precautions:"Avoid dairy near dose time", category:"Antibiotics" },
  { name:"Doxycycline", dosage:"100 mg twice daily", uses:"Acne, infections", sideEffects:"Photosensitivity", precautions:"Avoid lying down immediately", category:"Antibiotics" },
  { name:"Fluconazole", dosage:"150–400 mg", uses:"Fungal infections", sideEffects:"Headache", precautions:"Monitor liver health", category:"Antifungal" },
  { name:"Albendazole", dosage:"400 mg single dose", uses:"Worm infestations", sideEffects:"Abdominal pain", precautions:"Avoid during pregnancy", category:"Antiparasitic" },
  { name:"Acyclovir", dosage:"200–400 mg", uses:"Herpes infections", sideEffects:"Headache", precautions:"Maintain hydration", category:"Antiviral" },
  { name:"Oseltamivir", dosage:"75 mg twice daily", uses:"Influenza", sideEffects:"Nausea", precautions:"Start early after symptoms", category:"Antiviral" },
  { name:"Salbutamol", dosage:"2–4 mg or inhaler", uses:"Asthma relief", sideEffects:"Tremors", precautions:"Do not overuse inhaler", category:"Respiratory" },
  { name:"Prednisolone", dosage:"5–60 mg daily", uses:"Inflammation", sideEffects:"Weight gain", precautions:"Do not stop abruptly", category:"Steroids" },
  { name:"Diclofenac", dosage:"50 mg twice daily", uses:"Pain relief", sideEffects:"Gastric irritation", precautions:"Take after food", category:"Pain Relief" },
  { name:"Tramadol", dosage:"50–100 mg", uses:"Moderate pain", sideEffects:"Dizziness", precautions:"Avoid alcohol", category:"Pain Relief" },
  { name:"Diazepam", dosage:"2–10 mg", uses:"Anxiety, seizures", sideEffects:"Drowsiness", precautions:"Risk of dependence", category:"Mental Health" },
  { name:"Alprazolam", dosage:"0.25–0.5 mg", uses:"Anxiety", sideEffects:"Sleepiness", precautions:"Avoid abrupt discontinuation", category:"Mental Health" },
  { name:"Sertraline", dosage:"50–100 mg daily", uses:"Depression", sideEffects:"Nausea", precautions:"May take weeks to work", category:"Mental Health" },
  { name:"Ondansetron", dosage:"4–8 mg", uses:"Nausea", sideEffects:"Constipation", precautions:"Monitor heart rhythm", category:"GI / Acidity" },
  { name:"Lactulose", dosage:"15–30 ml", uses:"Constipation", sideEffects:"Bloating", precautions:"Drink enough water", category:"GI / Acidity" },
  { name:"Levothyroxine", dosage:"As prescribed", uses:"Hypothyroidism", sideEffects:"Palpitations", precautions:"Take on empty stomach", category:"Hormones" },
  { name:"Allopurinol", dosage:"100–300 mg daily", uses:"Gout prevention", sideEffects:"Rash", precautions:"Maintain hydration", category:"Other" },
  { name:"Calcium Carbonate", dosage:"500–1000 mg", uses:"Calcium deficiency", sideEffects:"Constipation", precautions:"Avoid excess use", category:"Supplements" },
  { name:"Vitamin D3", dosage:"600–2000 IU daily", uses:"Bone health", sideEffects:"Nausea", precautions:"Avoid overdose", category:"Supplements" },
  { name:"Ferrous Sulfate", dosage:"325 mg daily", uses:"Iron deficiency anemia", sideEffects:"Constipation", precautions:"Keep away from children", category:"Supplements" },
  { name:"ORS Solution", dosage:"As needed", uses:"Dehydration", sideEffects:"Bloating", precautions:"Prepare correctly", category:"Other" },
  { name:"Sildenafil", dosage:"25–100 mg", uses:"Erectile dysfunction", sideEffects:"Headache", precautions:"Avoid with nitrates", category:"Other" },
  { name:"Tamsulosin", dosage:"0.4 mg daily", uses:"Benign prostate enlargement", sideEffects:"Dizziness", precautions:"Rise slowly from sitting", category:"Other" },
  { name:"Methotrexate", dosage:"Weekly dose as prescribed", uses:"Rheumatoid arthritis", sideEffects:"Liver toxicity", precautions:"Take only once weekly", category:"Other" },
  { name:"Isotretinoin", dosage:"0.5–1 mg/kg daily", uses:"Severe acne", sideEffects:"Dry skin", precautions:"Avoid pregnancy", category:"Other" }
];

let activeFilter = "All";

/* ── Stats bar ── */
function renderStats() {
  const bar = document.getElementById("statsBar");
  const categories = [...new Set(drugs.map(d => d.category))].length;
  bar.innerHTML = `
    <span class="stat-chip">${drugs.length} drugs</span>
    <span class="stat-chip">${categories} categories</span>
    <span class="stat-chip">reference only</span>
  `;
}

/* ── Filter buttons ── */
function renderFilters() {
  const categories = ["All", ...new Set(drugs.map(d => d.category))];
  const container = document.getElementById("filters");
  container.innerHTML = categories.map(cat => `
    <button class="filter-btn ${cat === activeFilter ? 'active' : ''}" onclick="setFilter('${cat}')">${cat}</button>
  `).join("");
}

function setFilter(cat) {
  activeFilter = cat;
  renderFilters();
  renderGrid();
}

/* ── Grid ── */
function renderGrid(subset) {
  const list = subset || (activeFilter === "All" ? drugs : drugs.filter(d => d.category === activeFilter));
  const grid = document.getElementById("drugGrid");
  if (list.length === 0) {
    grid.innerHTML = `<p style="color:var(--muted);font-size:0.9rem;grid-column:1/-1">No drugs in this category.</p>`;
    return;
  }
  grid.innerHTML = list.map(d => `
    <div class="drug-pill" onclick="showCard('${d.name.replace(/'/g,"\\'")}')">
      <div>${d.name}</div>
      <div class="pill-use">${d.uses.split(",")[0]}</div>
    </div>
  `).join("");
}

/* ── Autocomplete suggestions ── */
const searchInput = document.getElementById("searchInput");
const suggestionsDiv = document.getElementById("suggestions");

searchInput.addEventListener("input", () => {
  const val = searchInput.value.trim().toLowerCase();
  if (!val) { suggestionsDiv.classList.remove("active"); return; }
  const matches = drugs.filter(d => d.name.toLowerCase().includes(val)).slice(0, 6);
  if (!matches.length) { suggestionsDiv.classList.remove("active"); return; }
  suggestionsDiv.innerHTML = matches.map(d => `
    <div class="suggestion-item" onclick="pickSuggestion('${d.name.replace(/'/g,"\\'")}')">
      <div class="s-icon">💊</div>
      <div>
        <div style="font-weight:500">${d.name}</div>
        <div style="font-size:0.72rem;color:var(--muted)">${d.category}</div>
      </div>
    </div>
  `).join("");
  suggestionsDiv.classList.add("active");
});

searchInput.addEventListener("keydown", e => {
  if (e.key === "Enter") { suggestionsDiv.classList.remove("active"); searchDrug(); }
  if (e.key === "Escape") suggestionsDiv.classList.remove("active");
});

document.addEventListener("click", e => {
  if (!e.target.closest(".search-wrap")) suggestionsDiv.classList.remove("active");
});

function pickSuggestion(name) {
  searchInput.value = name;
  suggestionsDiv.classList.remove("active");
  showCard(name);
}

/* ── Show drug card ── */
function showCard(name) {
  const drug = drugs.find(d => d.name.toLowerCase() === name.toLowerCase());
  if (!drug) return;
  const idx = drugs.indexOf(drug) + 1;
  const result = document.getElementById("result");
  result.innerHTML = `
    <div class="drug-card">
      <div class="card-header">
        <div>
          <div class="drug-name">${drug.name}</div>
          <div class="drug-idx">#${String(idx).padStart(2,"0")} · ${drug.category}</div>
        </div>
        <button class="copy-btn" onclick="copyInfo('${drug.name.replace(/'/g,"\\'")}')">⎘ Copy</button>
      </div>
      <div class="card-body">
        <div class="card-field">
          <div class="field-label"><span class="field-icon icon-dosage"></span>Dosage</div>
          <div class="field-value">${drug.dosage}</div>
        </div>
        <div class="card-field">
          <div class="field-label"><span class="field-icon icon-uses"></span>Uses</div>
          <div class="field-value">${drug.uses}</div>
        </div>
        <div class="card-field">
          <div class="field-label"><span class="field-icon icon-side"></span>Side Effects</div>
          <div class="field-value">${drug.sideEffects}</div>
        </div>
        <div class="card-field">
          <div class="field-label"><span class="field-icon icon-precaution"></span>Precautions</div>
          <div class="field-value">${drug.precautions}</div>
        </div>
      </div>
    </div>
  `;
  result.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

/* ── Copy drug info ── */
function copyInfo(name) {
  const drug = drugs.find(d => d.name === name);
  if (!drug) return;
  const text = `${drug.name}\nDosage: ${drug.dosage}\nUses: ${drug.uses}\nSide Effects: ${drug.sideEffects}\nPrecautions: ${drug.precautions}`;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.querySelector(".copy-btn");
    if (btn) { btn.textContent = "✓ Copied"; setTimeout(() => btn.textContent = "⎘ Copy", 1800); }
  });
}

/* ── Main search ── */
function searchDrug() {
  const val = searchInput.value.trim();
  if (!val) {
    document.getElementById("result").innerHTML = `
      <div class="no-result">
        <div class="nr-icon">🔍</div>
        <h3>Type a drug name</h3>
        <p>Enter a medication name above and press Search.</p>
      </div>`;
    return;
  }
  const drug = drugs.find(d => d.name.toLowerCase() === val.toLowerCase());
  if (drug) {
    showCard(drug.name);
  } else {
    // Fuzzy: partial match
    const partial = drugs.filter(d => d.name.toLowerCase().includes(val.toLowerCase()));
    if (partial.length === 1) {
      showCard(partial[0].name);
    } else if (partial.length > 1) {
      document.getElementById("result").innerHTML = `
        <div class="no-result">
          <div class="nr-icon">🤔</div>
          <h3>Did you mean one of these?</h3>
          <p style="margin-bottom:14px">Multiple matches for "<strong>${val}</strong>"</p>
          <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center">
            ${partial.map(d => `<button class="filter-btn" onclick="showCard('${d.name.replace(/'/g,"\\'")}');searchInput.value='${d.name.replace(/'/g,"\\'")}'">${d.name}</button>`).join("")}
          </div>
        </div>`;
    } else {
      document.getElementById("result").innerHTML = `
        <div class="no-result">
          <div class="nr-icon">❌</div>
          <h3>Drug not found</h3>
          <p>No results for "<strong>${val}</strong>". Try browsing the list below.</p>
        </div>`;
    }
  }
}

/* ── Init ── */
renderStats();
renderFilters();
renderGrid();
</script>
</body>
</html>
