var eventList = [
  {
    eventId: 1648626757453,
    eventName: "Meeting Concert Baroque vs Rock",
    eventDate: "2020-01-27",
    ageDefinition: false
  },
  {
    eventId: 1549626757629,
    eventName: "Grand opening of new Club",
    eventDate: "2019-04-14",
    ageDefinition: true
  },
  {
    eventId: 1247626757813,
    eventName: "Concert «The Organ World of Fantasy: Hogwarts and the Lord of the Rings»",
    eventDate: "2019-02-19",
    ageDefinition: false
  },
  {
    eventId: 1948626757981,
    eventName: "Party at the music club-restaurant Rhythm & Blues Café",
    eventDate: "2019-02-02",
    ageDefinition: true
  },
  {
    eventId: 2156623047461,
    eventName: "The exhibition «Viva la vida. Frida Kahlo and Diego Rivera.»",
    eventDate: "2019-12-07",
    ageDefinition: false
  }
];

function addEvent(){
  var list = document.getElementById("list");
  var eventName = document.getElementById("eventName");
  var date = document.getElementById("date");
  var checkbox = document.getElementById("checkbox").checked;
  var id = new Date().valueOf()

  alert("Event added!")  

  if(eventName.value == "" || date.value == ""){
    alert("Empty field!")
    return
  }

  eventList.push({
    eventId: id,
    eventName: eventName.value,
    eventDate: date.value,
    ageDefinition: checkbox
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
    '<li class="list-group-item">' + 
    eventName.value + ': ' + '<button type="button"id="'+
    id +'" onclick="deleteEvent(this.id)" class="close" aria-label="Close"> <span aria-hidden="true">&times;</span> </button><div class=" '+ 
    isShow +' "> <p class="text-danger">18+</p> </div><div class="text-right">'+
    date.value + '</div></li>'
  );
}
console.log(eventList)

function listGenerate(){
  eventList.map(function(event) {
    var list = document.getElementById("list");    

    var isShow;

    if(event.ageDefinition){
      isShow = ""
    }
    else{
      isShow = "d-none";
    }

    list.insertAdjacentHTML(
      "afterend",
      '<li class="list-group-item">' + 
       event.eventName + ': ' + ' <button type="button" id="'+
       event.eventId +'" onclick="deleteEvent(this.id)" class="close" aria-label="Close"> <span aria-hidden="true">&times;</span> </button><div class=" ' + 
       isShow + ' "> <p class="text-danger">18+</p> </div><div class="text-right"> ' + 
       event.eventDate + '</div> </li>'
    );
  });
}

function deleteEvent(id){
  console.log(id)
  eventList = eventList.filter(event => event.eventId != id)
  console.log(eventList)
  alert("Event deleted!")
}

function ageList(){
  var minAge = []
  eventList.map(function(event){
    if(!event.ageDefinition)
    minAge.push(event)
  });
  console.log(minAge)
}

function adults(){
  var adultsStarDiez = []
  eventList.map(function(event){
  if(!event.ageDefinition){
    adultsStarDiez.push("*" + event.eventName);
  }
  else{
    adultsStarDiez.push("#" + event.eventName);}
  });
  console.log(adultsStarDiez)
}