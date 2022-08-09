let alartFlag;
let notsAR;
let notesLS

let submitToDo = document.getElementById('submitToDo');
let ToDoCard = document.getElementById('ToDoCard');
let titleToDo = document.getElementById('titleToDo');
let descriptToDo = document.getElementById('descriptToDo');
let alldeletebtn = document.getElementsByClassName('deletebtn');
showCard();

submitToDo.addEventListener('click', (e => {
    if (descriptToDo.value != "" && titleToDo.value != "") {

        let str = `<div class="card" style="width: 18rem; margin: 3px">
    <div class="card-body text-center">
      <h5 class="card-title">${titleToDo.value}</h5>
      <p class="card-text">${descriptToDo.value}</p>
      <button type="submit" class="btn btn-primary deletebtn")">Delete</button>
    </div>
  </div>`
        ToDoCard.innerHTML += str;
       

/// local storage
     notesLS = localStorage.getItem('notesLS');
     console.log(notesLS)
     if(notesLS == null)
     {
       notsAR=[];
     }

     let notesObj={
        title: titleToDo.value,
        des: descriptToDo.value,
     }

     notsAR.push(notesObj);
     localStorage.setItem('notesLS', JSON.stringify(notsAR));
    
     titleToDo.value = "";
     descriptToDo.value = "";

    }
    else {
        let alart = document.getElementById('alart');

        if (descriptToDo.value == "" && titleToDo.value == "") {
            console.log('both missing');
            alartFlag = "   Title & Description are missing..."
        }
        else if (descriptToDo.value == "") {
            console.log('Description missing');
            alartFlag = "  Description is missing..."
        }
        else if (titleToDo.value == "") {
            console.log('Title missing');
            alartFlag = "  Title is missing..."
        }
        alart.innerHTML = `<div class="alert alert-danger d-flex align-items-center" role="alert">
                <b>Alert :</b> &nbsp ${alartFlag}
              </div>`
        setTimeout(() => {
            alart.innerHTML = "";
        }, 2000);
    }
    deleteCardFun();

}))

function showCard(){
    notesLS = localStorage.getItem('notesLS');
    console.log(notesLS)
    if(notesLS != null)
    {
        notsAR = JSON.parse(notesLS);
      console.log(notsAR);
      console.log(notsAR.length);
      console.log(notsAR[0]);
      for(let i=0; i<notsAR.length; i++)
      {
        let str = `<div class="card" style="width: 18rem; margin: 3px">
        <div class="card-body text-center">
          <h5 class="card-title">${notsAR[i].title}</h5>
          <p class="card-text">${notsAR[i].des}</p>
          <button type="submit" class="btn btn-primary deletebtn")">Delete</button>
        </div>
      </div>`
            ToDoCard.innerHTML += str;
      }
      
    //   LSdata.splice(0, 1);
    //   console.log(LSdata);
    deleteCardFun();
    }  
}


function deleteCardFun(){
    alldeletebtn = document.getElementsByClassName('deletebtn');
    // for (const dltbtn of alldeletebtn) {
    //     dltbtn.addEventListener('click', ((e, index) => {
    //         e.target.parentElement.parentElement.remove();
    //     }))
    // }

    Array.from(alldeletebtn).forEach((dltbtn, index) => {
        dltbtn.addEventListener('click', ((e ) => {
            e.target.parentElement.parentElement.remove();
            notsAR.splice(index,1);
            localStorage.setItem('notesLS', JSON.stringify(notsAR));
        }))
        console.log(dltbtn);
       
    })
}






