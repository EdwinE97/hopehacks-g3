const docData = [{
    "name": "Stephen Abelson",
    "id": 1,
    "location": 28205,
    "department": "Surgery"
  },
  {
    "name": "Jeffrey Bailey",
    "id": 2,
    "location": 28202,
    "department": "Sport Medicine"
  },
  {
    "name": "Charles Diaz",
    "id": 3,
    "location": 28208,
    "department": "Sport Medicine"
  },
  {
    "name": "Daniel Farmer",
    "id": 4,
    "location": 28210,
    "department": "Family Medicine"
  },
  {
    "name": "Steven Gaston",
    "id": 5,
    "location": 28213,
    "department": "Family Medicine"
  },
  {
    "name": "Paul Haas",
    "id": 6,
    "location": 28213,
    "department": "Surgery"
  },
  {
    "name": "Elizabeth Irani",
    "id": 7,
    "location": 28210,
    "department": "Family Medicine"
  },
  {
    "name": "Susan Lee",
    "id": 8,
    "location": 28207,
    "department": "Surgery"
  },
  {
    "name": "Mary Nagarij",
    "id": 9,
    "location": 28202,
    "department": "Family Medicine"
  },
  {
    "name": "Joseph Page",
    "id": 10,
    "location": 28205,
    "department": "Surgery"
  }
]



function docTemplate(doc) {
  return `
      <div class="doctors">
      
      <h2 class="doc-name">${doc.name} <span class="location">(${doc.department})</span><span class="location">(${doc.location})</span></h2>
     
      </div>
    `;
}
//get department querry param
//make backend call to get list of doctors using dep var
//use doctors json to fill out template
document.getElementById("app").innerHTML = `
    <h1 class="app-title">Doctors (${docData.length} results)</h1>
    ${docData.map(docTemplate).join("")}
    <p class="footer">These ${docData.length} doctors were added recently. Check back soon for updates.</p>
  `;
 
  fetch(`/doctor/${docData.department}`,{
    method: "GET",
    
  }).then((response) => {
    return response.json();

  }).then((body)=>{
    console.log(body)
  })
