const drugData = [

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
name:"Aspirin",
dosage:"75–325 mg daily",
uses:"Pain, blood thinning",
sideEffects:"Bleeding, stomach upset",
precautions:"Avoid in children with viral illness",
category:"Pain Relief"
},

{
name:"Diclofenac",
dosage:"50 mg twice daily",
uses:"Pain relief",
sideEffects:"Gastric irritation",
precautions:"Take after food",
category:"Pain Relief"
},

{
name:"Tramadol",
dosage:"50–100 mg",
uses:"Moderate pain",
sideEffects:"Dizziness",
precautions:"Avoid alcohol",
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
name:"Levocetirizine",
dosage:"5 mg daily",
uses:"Allergic rhinitis",
sideEffects:"Sleepiness",
precautions:"Use cautiously while driving",
category:"Allergy"
},

{
name:"Loratadine",
dosage:"10 mg daily",
uses:"Allergies",
sideEffects:"Headache",
precautions:"Use cautiously in liver disease",
category:"Allergy"
},

{
name:"Fexofenadine",
dosage:"120–180 mg daily",
uses:"Allergies",
sideEffects:"Nausea",
precautions:"Avoid fruit juice near dosing",
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
name:"Azithromycin",
dosage:"500 mg daily",
uses:"Respiratory infections",
sideEffects:"Nausea",
precautions:"Avoid unnecessary use",
category:"Antibiotics"
},

{
name:"Ciprofloxacin",
dosage:"250–500 mg twice daily",
uses:"UTI, infections",
sideEffects:"Tendon pain",
precautions:"Avoid dairy near dose time",
category:"Antibiotics"
},

{
name:"Doxycycline",
dosage:"100 mg twice daily",
uses:"Acne, infections",
sideEffects:"Photosensitivity",
precautions:"Avoid lying down immediately",
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
name:"Empagliflozin",
dosage:"10–25 mg daily",
uses:"Type 2 diabetes",
sideEffects:"Urinary infections",
precautions:"Drink enough water",
category:"Diabetes"
},

{
name:"Amlodipine",
dosage:"5–10 mg daily",
uses:"Hypertension",
sideEffects:"Swelling, dizziness",
precautions:"Monitor blood pressure",
category:"Heart / BP"
},

{
name:"Atorvastatin",
dosage:"10–40 mg daily",
uses:"High cholesterol",
sideEffects:"Muscle pain",
precautions:"Monitor liver function",
category:"Heart / BP"
},

{
name:"Nitroglycerin",
dosage:"As prescribed",
uses:"Chest pain",
sideEffects:"Headache",
precautions:"Sit while taking",
category:"Heart / BP"
},

{
name:"Omeprazole",
dosage:"20–40 mg daily",
uses:"Acidity, GERD",
sideEffects:"Headache",
precautions:"Long-term use may reduce vitamin B12",
category:"GI"
},

{
name:"Ondansetron",
dosage:"4–8 mg",
uses:"Nausea",
sideEffects:"Constipation",
precautions:"Monitor heart rhythm",
category:"GI"
},

{
name:"Lactulose",
dosage:"15–30 ml",
uses:"Constipation",
sideEffects:"Bloating",
precautions:"Drink enough water",
category:"GI"
},

{
name:"Salbutamol",
dosage:"2–4 mg or inhaler",
uses:"Asthma relief",
sideEffects:"Tremors",
precautions:"Do not overuse inhaler",
category:"Respiratory"
},

{
name:"Prednisolone",
dosage:"5–60 mg daily",
uses:"Inflammation",
sideEffects:"Weight gain",
precautions:"Do not stop abruptly",
category:"Steroids"
},

{
name:"Vitamin D3",
dosage:"600–2000 IU daily",
uses:"Bone health",
sideEffects:"Nausea",
precautions:"Avoid overdose",
category:"Supplements"
},

{
name:"Piroxicam",
dosage:"10–20 mg daily",
uses:"Osteoarthritis",
sideEffects:"stomach pain/acidity",
precautions:"Avoid in peptic ulcer",
category:"Pain Relief"
},

{
name:"Naproxen",
dosage:"250–500 mg twice daily",
uses:"Arthritis",
sideEffects:"Indigestion,Heartburn",
precautions:"Caution in kidney, liver, or heart disease",
category:"Pain Relief"
},

{
name:"Meloxicam",
dosage:"7.5 mg once daily",
uses:"Inflammatory joint conditions",
sideEffects:"Nausea,dizziness",
precautions:"Avoid in NSAID-sensitive asthma",
category:"Pain Relief"
},

{
name:"Ketorolac",
dosage:"10 mg every 4–6 hours",
uses:"Short-term severe pain (post-surgery)",
sideEffects:"Headache,indigestion",
precautions:"Avoid in bleeding disorders",
category:"Pain Relief"
},

{
name:"Codeine",
dosage:"15–60 mg every 4–6 hours",
uses:"Dry cough suppression",
sideEffects:"Drowsiness / sedation",
precautions:"Avoid in severe asthma or breathing problems",
category:"Pain Relief"
},

{
name:"Diphenhydramine",
dosage:"25–50 mg every 4–6 hours",
uses:"Allergic conditions (rhinitis, urticaria, itching)",
sideEffects:"Dry mouth, dry eyes",
precautions:"Avoid alcohol and sedatives",
category:"Allergy"
},

{
name:"Chlorpheniramine",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Allergy"
},

{
name:"Montelukast",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Allergy"
},

{
name:"Clarithromycin",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Antibiotics"
},

{
name:"Cefixime",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Antibiotics"
},

{
name:"Ceftriaxone",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Antibiotics"
},

{
name:"Levofloxacin",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Antibiotics"
},

{
name:"Glimepiride",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Diabetes"
},

{
name:"Sitagliptin",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Diabetes"
},

{
name:"Losartan",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Heart / BP"
},

{
name:"Telmisartan",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Heart / BP"
},

{
name:"Rosuvastatin",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Heart / BP"
},

{
name:"Rabeprazole",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"GI"
},

{
name:"Esomeprazole",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"GI"
},

{
name:"Domperidone",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"GI"
},

,

{
name:"Atenolol",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Heart / BP"
},

{
name:"Bisoprolol",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Heart / BP"
},

{
name:"Carvedilol",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Heart / BP"
},

{
name:"Valsartan",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Heart / BP"
},

{
name:"Hydrochlorothiazide",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Heart / BP"
},

{
name:"Insulin Glargine",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Diabetes"
},

{
name:"Insulin Aspart",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Diabetes"
},

{
name:"Pioglitazone",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Diabetes"
},

{
name:"Vildagliptin",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Diabetes"
},

{
name:"Gliclazide",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Diabetes"
},

{
name:"Fluconazole",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Antifungal"
},

{
name:"Ketoconazole",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Antifungal"
},

{
name:"Itraconazole",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Antifungal"
},

{
name:"Terbinafine",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Antifungal"
},

{
name:"Acyclovir",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Antiviral"
},

{
name:"Valacyclovir",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Antiviral"
},

{
name:"Oseltamivir",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Antiviral"
},

{
name:"Albendazole",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Antiparasitic"
},

{
name:"Mebendazole",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Antiparasitic"
},

{
name:"Ivermectin",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Antiparasitic"
},

,

{
name:"Sertraline",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Mental Health"
},

{
name:"Fluoxetine",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Mental Health"
},

{
name:"Escitalopram",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Mental Health"
},

{
name:"Citalopram",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Mental Health"
},

{
name:"Alprazolam",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Mental Health"
},

{
name:"Diazepam",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Mental Health"
},

{
name:"Clonazepam",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Mental Health"
},

{
name:"Olanzapine",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Mental Health"
},

{
name:"Risperidone",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Mental Health"
},

{
name:"Quetiapine",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Mental Health"
},

{
name:"Levothyroxine",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Hormones"
},

{
name:"Methimazole",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Hormones"
},

{
name:"Prednisone",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Steroids"
},

{
name:"Dexamethasone",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Steroids"
},

{
name:"Hydrocortisone",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Steroids"
},

{
name:"Calcium Carbonate",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Supplements"
},

{
name:"Ferrous Sulfate",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Supplements"
},

{
name:"Vitamin B12",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Supplements"
},

{
name:"Folic Acid",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Supplements"
},

{
name:"Zinc Sulfate",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Supplements"
},

,

{
name:"Tamsulosin",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Urology"
},

{
name:"Finasteride",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Urology"
},

{
name:"Oxybutynin",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Urology"
},

{
name:"Tolterodine",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Urology"
},

{
name:"Sildenafil",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Other"
},

{
name:"Tadalafil",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Other"
},

{
name:"Isotretinoin",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Dermatology"
},

{
name:"Clindamycin",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Dermatology"
},

{
name:"Benzoyl Peroxide",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Dermatology"
},

{
name:"Adapalene",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Dermatology"
},

{
name:"Mupirocin",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Dermatology"
},

{
name:"Loperamide",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"GI"
},

{
name:"Mesalamine",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"GI"
},

{
name:"Bisacodyl",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"GI"
},

{
name:"Sucralfate",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"GI"
},

{
name:"Magnesium Hydroxide",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"GI"
},

{
name:"Warfarin",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Heart / BP"
},

{
name:"Clopidogrel",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Heart / BP"
},

{
name:"Digoxin",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Heart / BP"
},

{
name:"Furosemide",
dosage:"To be added",
uses:"To be added",
sideEffects:"To be added",
precautions:"To be added",
category:"Heart / BP"
},

,

{name:"Gabapentin",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Neurology"},
{name:"Pregabalin",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Neurology"},
{name:"Levetiracetam",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Neurology"},
{name:"Phenytoin",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Neurology"},
{name:"Carbamazepine",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Neurology"},

{name:"Topiramate",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Neurology"},
{name:"Valproic Acid",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Neurology"},
{name:"Lamotrigine",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Neurology"},
{name:"Donepezil",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Neurology"},
{name:"Memantine",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Neurology"},

{name:"Amikacin",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Antibiotics"},
{name:"Meropenem",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Antibiotics"},
{name:"Linezolid",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Antibiotics"},
{name:"Vancomycin",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Antibiotics"},
{name:"Cefuroxime",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Antibiotics"},

{name:"Cefepime",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Antibiotics"},
{name:"Ampicillin",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Antibiotics"},
{name:"Metronidazole",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Antibiotics"},
{name:"Gentamicin",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Antibiotics"},
{name:"Co-Amoxiclav",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Antibiotics"},

{name:"Budesonide",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Respiratory"},
{name:"Formoterol",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Respiratory"},
{name:"Tiotropium",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Respiratory"},
{name:"Ipratropium",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Respiratory"},
{name:"Montelukast",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Respiratory"},

{name:"Insulin Lispro",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Diabetes"},
{name:"Linagliptin",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Diabetes"},
{name:"Canagliflozin",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Diabetes"},
{name:"Dapagliflozin",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Diabetes"},
{name:"Repaglinide",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Diabetes"},

{name:"Aripiprazole",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Mental Health"},
{name:"Haloperidol",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Mental Health"},
{name:"Lithium",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Mental Health"},
{name:"Paroxetine",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Mental Health"},
{name:"Venlafaxine",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Mental Health"},

{name:"Ranitidine",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"GI"},
{name:"Famotidine",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"GI"},
{name:"Hyoscine",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"GI"},
{name:"Senna",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"GI"},
{name:"Psyllium",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"GI"},

{name:"Methotrexate",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Rheumatology"},
{name:"Hydroxychloroquine",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Rheumatology"},
{name:"Sulfasalazine",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Rheumatology"},
{name:"Allopurinol",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Rheumatology"},
{name:"Colchicine",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Rheumatology"},

{name:"Tamoxifen",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Oncology"},
{name:"Letrozole",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Oncology"},
{name:"Anastrozole",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Oncology"},
{name:"Cyclophosphamide",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Oncology"},
{name:"Cisplatin",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Oncology"},

,

{name:"Acyclovir Cream",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Dermatology"},
{name:"Clobetasol",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Dermatology"},
{name:"Tacrolimus",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Dermatology"},
{name:"Calcipotriol",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Dermatology"},
{name:"Minoxidil",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Dermatology"},

{name:"Spironolactone",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Heart / BP"},
{name:"Ramipril",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Heart / BP"},
{name:"Enalapril",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Heart / BP"},
{name:"Lisinopril",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Heart / BP"},
{name:"Diltiazem",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Heart / BP"},

{name:"Nifedipine",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Heart / BP"},
{name:"Verapamil",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Heart / BP"},
{name:"Torsemide",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Heart / BP"},
{name:"Apixaban",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Heart / BP"},
{name:"Rivaroxaban",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Heart / BP"},

{name:"Cefpodoxime",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Antibiotics"},
{name:"Cefazolin",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Antibiotics"},
{name:"Erythromycin",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Antibiotics"},
{name:"Tigecycline",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Antibiotics"},
{name:"Rifampicin",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Antibiotics"},

{name:"Pyrazinamide",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Antibiotics"},
{name:"Ethambutol",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Antibiotics"},
{name:"Isoniazid",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Antibiotics"},
{name:"Clarithromycin SR",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Antibiotics"},
{name:"Nitrofurantoin",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Antibiotics"},

{name:"Duloxetine",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Mental Health"},
{name:"Mirtazapine",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Mental Health"},
{name:"Bupropion",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Mental Health"},
{name:"Buspirone",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Mental Health"},
{name:"Zolpidem",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Mental Health"},

{name:"Melatonin",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Supplements"},
{name:"Omega 3",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Supplements"},
{name:"Vitamin C",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Supplements"},
{name:"Magnesium Citrate",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Supplements"},
{name:"Biotin",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Supplements"},

{name:"Codeine Phosphate",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Pain Relief"},
{name:"Celecoxib",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Pain Relief"},
{name:"Etoricoxib",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Pain Relief"},
{name:"Indomethacin",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Pain Relief"},
{name:"Nabumetone",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Pain Relief"},

{name:"Methocarbamol",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Musculoskeletal"},
{name:"Baclofen",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Musculoskeletal"},
{name:"Tizanidine",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Musculoskeletal"},
{name:"Cyclobenzaprine",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Musculoskeletal"},
{name:"Orphenadrine",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Musculoskeletal"},

{name:"Alendronate",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Bone Health"},
{name:"Risedronate",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Bone Health"},
{name:"Denosumab",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Bone Health"},
{name:"Calcitonin",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Bone Health"},
{name:"Teriparatide",dosage:"To be added",uses:"To be added",sideEffects:"To be added",precautions:"To be added",category:"Bone Health"}

];
