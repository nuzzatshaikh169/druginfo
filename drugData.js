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
dosage:"4 mg every 4–6 hours",
uses:"relief of allergic conditions",
sideEffects:"Drowsiness (very common)",
precautions:"Avoid alcohol (increases sedation)",
category:"Allergy"
},

{
name:"Montelukast",
dosage:"10 mg once daily",
uses:"Bronchial asthma",
sideEffects:"Abdominal pain,cough",
precautions:"Not for acute asthma attack emergencies",
category:"Allergy"
},

{
name:"Clarithromycin",
dosage:"250 mg every 12 hours",
uses:"to treat various bacterial infections",
sideEffects:"Nausea,vomiting",
precautions:"Avoid self-medication with antibiotics",
category:"Antibiotics"
},

{
name:"Cefixime",
dosage:"200 mg every 12 hours",
uses:"Respiratory tract infections",
sideEffects:"Diarrhea,stomach pain",
precautions:"Avoid if allergic to cephalosporins or penicillins",
category:"Antibiotics"
},

{
name:"Ceftriaxone",
dosage:"1–2 g once daily",
uses:"Lower respiratory tract infections (pneumonia, bronchitis)",
sideEffects:"Pain at injection site",
precautions:"Avoid in patients with severe allergy to cephalosporins or penicillins",
category:"Antibiotics"
},

{
name:"Levofloxacin",
dosage:"250 mg once daily",
uses:"Urinary tract infections",
sideEffects:"Diarrhea,headache",
precautions:"Do not take with antacids, iron, or calcium simultaneously",
category:"Antibiotics"
},

{
name:"Glimepiride",
dosage:"1–2 mg once daily",
uses:"Type 2 diabetes mellitus",
sideEffects:"Low blood sugar (hypoglycemia)",
precautions:"Avoid alcohol because it may increase risk of low blood sugar",
category:"Diabetes"
},

{
name:"Sitagliptin",
dosage:"100 mg once daily",
uses:"Lowering blood sugar levels",
sideEffects:"Sore throat",
precautions:"Not used for Type 1 Diabetes mellitus",
category:"Diabetes"
},

{
name:"Losartan",
dosage:"50 mg once daily",
uses:"To be addedSometimes used in heart failure.",
sideEffects:"Dizziness,backpain",
precautions:"Avoid during pregnancy because it may harm the baby",
category:"Heart / BP"
},

{
name:"Telmisartan",
dosage:"40 mg once daily",
uses:"Protection of kidneys in some diabetic patients",
sideEffects:"Diarrhea",
precautions:"Alcohol may increase dizziness and low blood pressure",
category:"Heart / BP"
},

{
name:"Rosuvastatin",
dosage:"5–10 mg once daily",
uses:"Reduce the risk of heart attack and stroke",
sideEffects:"Severe muscle pain or dark urine",
precautions:"Not recommended during pregnancy or breastfeeding",
category:"Heart / BP"
},

{
name:"Rabeprazole",
dosage:"20 mg once daily",
uses:"Healing of stomach and duodenal ulcers",
sideEffects:"Nausea or vomiting",
precautions:"Do not use without medical advice for long duration",
category:"GI"
},

{
name:"Esomeprazole",
dosage:"20–40 mg once daily",
uses:"Healing of stomach and duodenal ulcers",
sideEffects:"Abdominal pain",
precautions:"Use carefully in pregnancy and breastfeeding (only if prescribed)",
category:"GI"
},

{
name:"Domperidone",
dosage:"10 mg 2–3 times daily",
uses:"Bloating and fullness after meals",
sideEffects:"Abdominal cramps,headache",
precautions:"Avoid in patients with heart disease or arrhythmia",
category:"GI"
},

,

{
name:"Atenolol",
dosage:"25–50 mg once daily",
uses:"High blood pressure (hypertension)",
sideEffects:"Slow heartbeat,cold hands and feets",
precautions:"Monitor blood pressure and pulse regularly",
category:"Heart / BP"
},

{
name:"Bisoprolol",
dosage:"5 mg once daily",
uses:"Angina (chest pain)",
sideEffects:"Headache,Slow heartbeat",
precautions:"May hide symptoms of low blood sugar in diabetic patients",
category:"Heart / BP"
},

{
name:"Carvedilol",
dosage:"6.25 mg twice daily",
uses:"Certain heart rhythm conditions.",
sideEffects:"Low blood pressure,Slow heartbeat",
precautions:"May mask symptoms of low blood sugar",
category:"Heart / BP"
},

{
name:"Valsartan",
dosage:"80–160 mg once daily",
uses:"High blood pressure (hypertension)",
sideEffects:"Low blood pressure,Increased potassium levels",
precautions:"Avoid potassium supplements or salt substitutes unless advised",
category:"Heart / BP"
},

{
name:"Hydrochlorothiazide",
dosage:"12.5–25 mg once daily",
uses:"Prevention of kidney stones in some patients",
sideEffects:"Frequent urination,Dizziness,Weakness",
precautions:"May increase blood sugar and uric acid levels",
category:"Heart / BP"
},

{
name:"Insulin Glargine",
dosage:"10 units once daily",
uses:"Type 1 diabetes mellitus,Type 2 diabetes mellitus",
sideEffects:"Weight gain,Injection site reactions",
precautions:"Always carry glucose or sugar source",
category:"Diabetes"
},

{
name:"Insulin Aspart",
dosage:"Dose is individualized based on blood glucose",
uses:"Used along with long-acting insulin",
sideEffects:"Low blood sugar (hypoglycemia),Weight gain",
precautions:"Monitor blood glucose frequently",
category:"Diabetes"
},

{
name:"Pioglitazone",
dosage:"15 mg or 30 mg once daily",
uses:"Helps reduce blood sugar levels over long term",
sideEffects:"Muscle pain,Upper respiratory infection",
precautions:"Avoid in active bladder cancer,Weight monitoring is important",
category:"Diabetes"
},

{
name:"Vildagliptin",
dosage:"50 mg once or twice daily",
uses:"Helps control fasting and post-meal blood sugar",
sideEffects:"Fatigue,Mild gastrointestinal discomfort",
precautions:"Monitor liver function tests regularly",
category:"Diabetes"
},

{
name:"Gliclazide",
dosage:"40–80 mg once daily",
uses:"Stimulating insulin release from pancreatic beta cells",
sideEffects:"Stomach upset,Headache",
precautions:"Do not skip meals after taking medicine",
category:"Diabetes"
},

{
name:"Fluconazole",
dosage:"50–100 mg once daily",
uses:"Prevention of fungal infections in low immunity patients",
sideEffects:"Dizziness,Skin rash",
precautions:"Long-term use requires liver function monitoring",
category:"Antifungal"
},

{
name:"Ketoconazole",
dosage:"200 mg once daily",
uses:"Fungal skin infections (tinea infections),Dandruff",
sideEffects:"Skin irritation,nausea",
precautions:"Oral ketoconazole should be avoided unless absolutely necessary",
category:"Antifungal"
},

{
name:"Itraconazole",
dosage:"100–200 mg once daily",
uses:"Skin fungal infections",
sideEffects:"Diarrhea,Rash",
precautions:"Not recommended in pregnancy unless essential",
category:"Antifungal"
},

{
name:"Terbinafine",
dosage:"250 mg once daily",
uses:"Ringworm (tinea infections),Athlete’s foot,Jock itch",
sideEffects:"Rash,Taste disturbance (loss or change of taste)",
precautions:"Stop and consult doctor if symptoms of liver damage appear",
category:"Antifungal"
},

{
name:"Acyclovir",
dosage:"200–800 mg, 2–5 times daily",
uses:"Treatment of Herpes Simplex Virus (HSV) infections",
sideEffects:"Nausea and vomiting",
precautions:"Maintain adequate hydration during therapy",
category:"Antiviral"
},

{
name:"Valacyclovir",
dosage:"500 mg–1 g daily or twice daily",
uses:"Treatment of herpes simplex infections",
sideEffects:"Abdominal pain",
precautions:"Dose adjustment may be required in elderly patients",
category:"Antiviral"
},

{
name:"Oseltamivir",
dosage:"500 mg–1 g daily or twice daily",
uses:"Chickenpox",
sideEffects:"Abdominal pain",
precautions:"Maintain proper hydration during treatment",
category:"Antiviral"
},

{
name:"Albendazole",
dosage:"400 mg single dose commonly used for intestinal worms",
uses:"Treatment of worm infections",
sideEffects:"Temporary hair loss",
precautions:"Avoid use during pregnancy, especially first trimester",
category:"Antiparasitic"
},

{
name:"Mebendazole",
dosage:"100 mg single dose, may repeat after 2 weeks",
uses:"Treatment of intestinal worm infections",
sideEffects:"Dizziness",
precautions:"Maintain proper hygiene to prevent reinfection",
category:"Antiparasitic"
},

{
name:"Ivermectin",
dosage:"150–200 mcg/kg as a single oral dose",
uses:"Fatigue",
sideEffects:"Skin rash or itching",
precautions:"Take on an empty stomach with water unless advised otherwise",
category:"Antiparasitic"
},

,

{
name:"Sertraline",
dosage:"50–200 mg daily",
uses:"Depression,Anxiety disorderss",
sideEffects:"Insomnia or drowsiness",
precautions:"Avoid alcohol during treatment",
category:"Mental Health"
},

{
name:"Fluoxetine",
dosage:"Usually 20 mg once daily initially",
uses:"Panic disorder,Bulimia nervosa",
sideEffects:"Loss of appetite",
precautions:"Do not stop medication suddenly",
category:"Mental Health"
},

{
name:"Escitalopram",
dosage:"Usually 5–10 mg once daily initially",
uses:"Generalized Anxiety Disorder (GAD)",
sideEffects:"Increased sweating",
precautions:"Avoid alcohol during treatment",
category:"Mental Health"
},

{
name:"Citalopram",
dosage:"Usually 20 mg once daily",
uses:"Obsessive Compulsive Disorder (OCD)",
sideEffects:"Insomnia,Increased sweating",
precautions:"Monitor for mood changes or suicidal thoughts",
category:"Mental Health"
},

{
name:"Alprazolam",
dosage:"Usually 0.25–0.5 mg taken 2–3 times daily",
uses:"Short-term relief of anxiety symptoms",
sideEffects:"Poor coordination",
precautions:"Do not stop suddenly without medical advice",
category:"Mental Health"
},

{
name:"Diazepam",
dosage:"2–10 mg, 2–4 times daily",
uses:"Seizures and epilepsy",
sideEffects:"Fatigue,Muscle weakness",
precautions:"Do not stop medication suddenly",
category:"Mental Health"
},

{
name:"Clonazepam",
dosage:"0.25–0.5 mg twice daily",
uses:"Seizure disorders and epilepsy",
sideEffects:"Memory problems,Difficulty concentrating",
precautions:"May cause dependence with long-term use",
category:"Mental Health"
},

{
name:"Olanzapine",
dosage:"5–10 mg once daily",
uses:"Schizophrenia",
sideEffects:"Increased appetite,Dizziness",
precautions:"Monitor weight, blood sugar, and cholesterol regularlyd",
category:"Mental Health"
},

{
name:"Risperidone",
dosage:"1–2 mg daily initially",
uses:"Schizophrenia",
sideEffects:"Tremors or muscle stiffness",
precautions:"Avoid alcohol during treatment",
category:"Mental Health"
},

{
name:"Quetiapine",
dosage:"25–50 mg daily",
uses:"Psychotic disorders",
sideEffects:"Constipation,Fatigue",
precautions:"Monitor blood sugar, weight, and cholesterol regularly",
category:"Mental Health"
},

{
name:"Levothyroxine",
dosage:"25–100 mcg once daily",
uses:"Hypothyroidism",
sideEffects:"Insomnia,Increased appetite",
precautions:"Avoid taking with calcium or iron supplements simultaneously",
category:"Hormones"
},

{
name:"Methimazole",
dosage:"Graves’ disease",
uses:"5–30 mg daily",
sideEffects:"Skin rash or itching",
precautions:"Report symptoms like fever or sore throat immediately (risk of low white blood cells)",
category:"Hormones"
},

{
name:"Prednisone",
dosage:"5–60 mg daily",
uses:"Asthma and inflammatory conditions",
sideEffects:"Increased blood sugar,Stomach irritation",
precautions:"Avoid close contact with infections while on therapy",
category:"Steroids"
},

{
name:"Dexamethasone",
dosage:"0.5–10 mg daily",
uses:"Inflammatory and autoimmune disorders",
sideEffects:"Increased blood sugar",
precautions:"Use cautiously in diabetic, hypertensive, and elderly patients",
category:"Steroids"
},

{
name:"Hydrocortisone",
dosage:"20–30 mg daily",
uses:"Allergic and inflammatory conditions",
sideEffects:"Increased appetite,Mood changes",
precautions:"Monitor blood sugar and blood pressure during long-term use",
category:"Steroids"
},

{
name:"Calcium Carbonate",
dosage:"500–1250 mg taken 1–3 times daily",
uses:"Osteoporosis prevention and treatment",
sideEffects:"Constipation,Bloating",
precautions:"Avoid excessive intake to prevent kidney stones or high calcium levels",
category:"Supplements"
},

{
name:"Ferrous Sulfate",
dosage:"200–325 mg taken 1–3 times daily",
uses:"Iron deficiency anemia",
sideEffects:"Dark-colored stools",
precautions:"Vitamin C may improve iron absorption",
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
