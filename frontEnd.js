document.getElementById("submitButton").addEventListener("click", () =>{
  const department = document.getElementById("inlineFormCustomSelect").value;
  console.log(department)

  document.location.href = `/doctors.html?department=${department}`
});