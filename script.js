var vid = document.getElementById("myVideo"); 

function playVid() { 
  vid.play(); 
} 

function pauseVid() { 
  vid.pause(); 
} 








// Emply Details



const api_url="https://api.github.com/users";


function emplydetails(){

    // Toggle Button

  var x = document.getElementById("empList");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }



async function getdata(url){
   await fetch(url).then((res)=>{
        console.log(res);
        return res.json();

    }).then((data)=>{
        console.log(data);
        if (data) {
            hideloader();     
        }
        show(data);
    })   
}

getdata(api_url);

function hideloader(){
    document.getElementById('loading').style.display='none';

    document.getElementById('loading1').style.display='none';

    document.getElementById('loading2').style.display='none';
}

function show(data){
    let table=
    `<tr>
    <th><h3>Id</h3></th>
    <th><h3>UserName</h3></th>
    <th><h3>Avatar</h3></th>
    <th><h3>Url</h3></th>
    <th><h3>Respo Url</h3></th>
    <th><h3>Type</h3></th>
    <th><h3>Edit</h3></th>
    <th><h3>Delete</h3></th>
    </tr>`;


    for(let tbl of data){
        table += 
        `<tr>
        <td>  ${tbl.id}.  </td>
        <td>  ${tbl.login}  </td>
        <td>  <img src="${tbl.avatar_url}" width="150px" height="150px" alt="img">     </td>
        <td>  ${tbl.url}  </td>
        <td>  ${tbl.repos_url}  </td>
        <td>  ${tbl.type}  </td>
        <td>  <button type="submit" class="emplytext-button btn btn-warning" onclick="onEditForm()">Edit Details</button>  </td>
        <td>  <button type="submit" class="emplytext-button btn btn-danger" onclick="onDelForm()">Delete Details</button>  </td>
        </tr>`;
    }

    document.getElementById("empList").innerHTML=table;
}
}










// let arr=new Array();



// // Add Data

// function onFormSubmit(){
// getData();

// arr.push({
//     empcode:document.getElementById("empcode").value,
//     name:document.getElementById("name").value,
//     salary:document.getElementById("salary").value,
//     city:document.getElementById("city").value
// });


// localStorage.setItem("localData" , JSON.stringify(arr));

// showData();

// }




// // get Details

// function getData(){
//     let str=localStorage.getItem("localData");

//     if(str !=null)
//         arr=JSON.parse(str);

// }



// // show Details

// function showData(){
//     getData();
   
//     let table=document.getElementById("empList");

//     let x= table.rows.length; 
    
//     while(--x){
//         table.deleteRow(x);
//     }

//     for(i=0; i<arr.length;i++){

        
//     let tbl=table.insertRow();

//     let cell1=tbl.insertCell();
//     let cell2=tbl.insertCell();
//     let cell3=tbl.insertCell();
//     let cell4=tbl.insertCell();
//     let cell5=tbl.insertCell();
//     let cell6=tbl.insertCell();


//     const uid = document.getElementById("Uid").innerHTML = Math.random().toString(14).slice(4);
    
    
//     cell1.innerHTML=uid;                 //Unique id  
//     cell2.innerHTML=arr[i].empcode;
//     cell3.innerHTML=arr[i].name ;
//     cell4.innerHTML=arr[i].salary  ;
//     cell5.innerHTML=arr[i].city ;

//     cell6.innerHTML='<button type="submit" class="emplytext-button btn btn-warning" onclick="onEditForm()">Edit Details</button>  &nbsp; &nbsp;  <button type="submit" class="emplytext-button btn btn-danger" onclick="onDelForm()">Delete Details</button>' ;
    
// }

// }



// // Edit Details

// function onEditForm(uid){

//     localStorage.getItem("localData");

//         let findItem = arr.find((arrItem)=>{return arrItem.uid=arr});

//         console.log(findItem.uid);

//         arr.find((x) => x.empcode === "1");
//         arr.find((x) => x.name === "Sachin Saurabh");
//         arr.find((x) => x.salary === "10000");
//         arr.find((x) => x.city === "Pune");
 
//         document.getElementById("empcode").text="MS507";
//         document.getElementById("empcode").value="MS507";

//         document.getElementById("name").text="Ravi Kumar";
//         document.getElementById("name").value="Ravi Kumar";

//         document.getElementById("salary").text="20000";
//         document.getElementById("salary").value="20000";

//         document.getElementById("city").text="Patna";
//         document.getElementById("city").value="Patna";


// }
 




// // Delete Details

// function onDelForm(index){

//     if (confirm('Are you want to delete this Emply Detail ?')) {
//         let del = localStorage.getItem("localData");
//         let json = JSON.parse(del);
//         json.splice(index, 0);
//         localStorage.setItem("localData", JSON.stringify(json));
//         showData();
//     }

// }
