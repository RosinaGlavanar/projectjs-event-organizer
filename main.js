var inputArray = [
  {
    title: "Grand opening of new Club",
    dateTime: "21-10-2019",
    isAdulthood: false
  },
  {
    title: "Grand opening of new Club",
    dateTime: "21-10-2018",
    isAdulthood: true
  },
  {
    title: "Grand opening of new Club",
    dateTime: "21-10-2019",
    isAdulthood: false
  },
  {
    title: "Grand opening of new Club",
    dateTime: "21-10-2018",
    isAdulthood: true
  }
];

function addEvent()
{
  var list = document.getElementById("list");
  var eventName = document.getElementById("eventName");
  var date = document.getElementById("date");
  var checkbox = document.getElementById("checkbox").checked;

  if( eventName.value == "" || date.value == "" ){
    alert("Empty field")
    return
  }

  inputArray.push({
    title: eventName,
    dateTime: date,
    isAdulthood: checkbox
  })

  var isShow;

  if(checkbox){
    isShow = ""
  }
  else{
    isShow = "d-none";
  }

  list.insertAdjacentHTML(
    "afterend",
    '<li class="list-group-item">' + eventName + ': ' + '<div class=" '+ isShow +' "> <p class="text-danger">18+</p> </div><div class="text-right">'+ date + '</div></li>'
  );
}

function listGenerate(){
  inputArray.map(function(obj) {
    var list = document.getElementById("list");    

    var isShow;

    if( obj.isAdulthood  )
    {
      isShow = ""
    }
    else
    {
      isShow = "d-none";
    }

    list.insertAdjacentHTML(
      "afterend",
      '<li class="list-group-item">' + obj.title + ': ' + '<div class=" ' + isShow + ' "> <p class="text-danger">18+</p> </div><div class="text-right"> ' + obj.dateTime + '</div> </li>'
    );
  });
}

// _.uniqueId ( 'contact_');