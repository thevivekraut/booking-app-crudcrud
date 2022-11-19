const submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const emailId = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  // if (emailId.length > 0 && name.length > 0) {
    const object = {
      name: name,
      emailId: emailId
    };

    axios.post("https://crudcrud.com/api/ad59e0e3d2ac45ebbb2a6f8fc4e63d3a/user",  object)
    .then((response) => {
       addNewLineElement(response.data);
       console.log(response)
     })
     .catch((err)=> {
       document.body.innerHTML = document.body.innerHTML ="<h4>Something went Wrong</h4>"; 
       console.log(err)
     })
});
   

  var keys = Object.keys(localStorage),
  i = keys.length; 
  let stringifiedDetailsOfPeople, detailsOfPeople;


  axios.get("https://crudcrud.com/api/ad59e0e3d2ac45ebbb2a6f8fc4e63d3a/user")
  .then((response) => {
      console.log(response.data);
    
      response.data.forEach((key) => {
       console.log(key);
       
      addNewLineElement(key);
      });
  });

  
function addNewLineElement(object) {
  const ul = document.getElementById("users");
  const li = document.createElement("li");
  li.appendChild(
    document.createTextNode(object.name + " " + object.emailId + " ")
  );
  console.log(document.createElement("i"));
  const a1 = document.createElement("input");
  a1.id = "viv";
  a1.type = "button";
  a1.value = "Edit";
  a1.addEventListener("click", () => {
    console.log(object);
    document.getElementById("name").value = object.name;
    document.getElementById("email").value = object.emailId;
    li.remove();
  });
  
  console.log(a1);
  li.appendChild(a1);

  const a = document.createElement("input");
  a.type = "button";
  a.value = "delete";
  a.addEventListener("click", () => {
    localStorage.removeItem("userDetails" + object.emailId);
    li.remove();
  });
  console.log(a);
  li.appendChild(a);
  console.log(li);
  ul.appendChild(li);
}
