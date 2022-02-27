//add button
let addButton=document.querySelector("input[type=button]");

let studentNameTextBox=document.querySelector("input[name=studentName]");
let studentGradeTextBox=document.querySelector("input[name=studentGrade]");
let studentsTable=document.createElement("table");
document.body.append(studentsTable);


function createTD(value)
{
    let tdObject=document.createElement("td");
    tdObject.innerText=value;//studentNameTextBox.value;
    return tdObject;
}
addButton.addEventListener("click",function(){

// studentsTable.innerHTML+="<tr><td></td><td></td><td ></td></tr>"


   let department=document.querySelector("input[name=Department]:checked").value;

   //value;  one tr , 2 tds
    let trObject=document.createElement("tr");
    trObject.classList.add(department);
    
    //name
    
    let tdObject=createTD(studentNameTextBox.value);
    tdObject=tdObject.innerText;
    tdObject = tdObjectstudetName = tdObject[0].toUpperCase() + tdObject.substr(1);[0].toUpperCase() + tdObject.substr(1);
    //console.log(tdObject)
    allName=allName+","+tdObject
    console.log(allName)
    trObject.append(tdObject);

   //grade
   tdObject=createTD(studentGradeTextBox.value);

   trObject.append(tdObject);


    //delete
     deleteButton=document.createElement("button");
     deleteButton.innerText="DELETE";

    deleteButton.onclick=function(){
        // this-->   --? tr
        // trObject.remove();
        this.parentElement.parentElement.remove();
        // this.closest("tr").remove()
    }
    
    tdObject=document.createElement("td");
    tdObject.append(deleteButton)
    trObject.append(tdObject);

   studentsTable.append(trObject); 


} );//add student recored


