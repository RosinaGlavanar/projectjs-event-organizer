// Късно видях, че всички функционалности които са описани трябва да бъдат
// реализирани в рамките на конзолно приложение и затова имам малко "дизайн".

// Направих Основни задачи и Допълнителни задачи част 1.
var eventList = [
  {
    eventId: 1648626757453,
    eventName: "Meeting Concert Baroque vs Rock",
    eventDate: "2020-01-27",
    ageDefinition: false,
    clients: [
      {
        clientId: 1,
        clientName: "Qetya",
        sex: "m",
        age: 23
      },
      {
        clientId: 2,
        clientName: "Wetya",
        sex: "m",
        age: 35
      },
      {
        clientId: 3,
        clientName: "Retya",
        sex: "f",
        age: 17
      },
      {
        clientId: 4,
        clientName: "Tetya",
        sex: "f",
        age: 18
      },
      {
        clientId: 5,
        clientName: "Setya",
        sex: "f",
        age: 25
      }
    ]
  },
  {
    eventId: 1549626757629,
    eventName: "Grand opening of new Club",
    eventDate: "2019-04-14",
    ageDefinition: true,
    clients: [
      {
        clientId: 1,
        clientName: "Qetya",
        sex: "m",
        age: 23
      },
      {
        clientId: 2,
        clientName: "Wetya",
        sex: "m",
        age: 35
      },
      {
        clientId: 3,
        clientName: "Retya",
        sex: "f",
        age: 17
      },
      {
        clientId: 4,
        clientName: "Tetya",
        sex: "f",
        age: 18
      },
      {
        clientId: 5,
        clientName: "Setya",
        sex: "f",
        age: 25
      },
      {
        clientId: 6,
        clientName: "Detya",
        sex: "f",
        age: 20
      }
    ]
  },
  {
    eventId: 1247626757813,
    eventName:
      "Concert «The Organ World of Fantasy: Hogwarts and the Lord of the Rings»",
    eventDate: "2019-02-19",
    ageDefinition: false,
    clients: [
      {
        clientId: 1,
        clientName: "Qetya",
        sex: "m",
        age: 23
      },
      {
        clientId: 2,
        clientName: "Wetya",
        sex: "m",
        age: 35
      },
      {
        clientId: 3,
        clientName: "Retya",
        sex: "f",
        age: 17
      },
      {
        clientId: 4,
        clientName: "Tetya",
        sex: "f",
        age: 18
      }
    ]
  },
  {
    eventId: 1948626757981,
    eventName: "Party at the music club-restaurant Rhythm & Blues Café",
    eventDate: "2019-02-02",
    ageDefinition: true,
    clients: [
      {
        clientId: 1,
        clientName: "Qetya",
        sex: "m",
        age: 23
      },
      {
        clientId: 2,
        clientName: "Wetya",
        sex: "m",
        age: 35
      },
      {
        clientId: 3,
        clientName: "Retya",
        sex: "f",
        age: 17
      },
      {
        clientId: 4,
        clientName: "Tetya",
        sex: "f",
        age: 18
      },
      {
        clientId: 5,
        clientName: "Setya",
        sex: "f",
        age: 25
      },
      {
        clientId: 6,
        clientName: "Detya",
        sex: "m",
        age: 27
      },
      {
        clientId: 7,
        clientName: "Fetya",
        sex: "f",
        age: 20
      }
    ]
  },
  {
    eventId: 2156623047461,
    eventName: "The exhibition «Viva la vida. Frida Kahlo and Diego Rivera.»",
    eventDate: "2019-12-07",
    ageDefinition: false,
    clients: [
      {
        clientId: 1,
        clientName: "Qetya",
        sex: "m",
        age: 23
      },
      {
        clientId: 2,
        clientName: "Wetya",
        sex: "m",
        age: 35
      },
      {
        clientId: 3,
        clientName: "Retya",
        sex: "f",
        age: 17
      },
      {
        clientId: 4,
        clientName: "Tetya",
        sex: "f",
        age: 18
      },
      {
        clientId: 5,
        clientName: "Setya",
        sex: "f",
        age: 25
      }
    ]
  }
];

// 4. Създава ново събитие. Ако потребителя не подаде флаг, указващ
// дали събитието е подходящо за непълнолетни, то по подразбиране е.
function addEvent(){
  var list = document.getElementById("list");
  var eventName = document.getElementById("eventName");
  var date = document.getElementById("date"); // 2. Добавете възможност за запазване на текуща дата на събитието.
  var checkbox = document.getElementById("checkbox").checked;
  var id = new Date().valueOf(); // 5. Регистрира събитие по уникален идентификатор.
  alert("Event added!");

  // Задължителни атрибути на събитието са неговото име и дата.
  if (eventName.value == "" || date.value == ""){
    alert("Empty field!");
    return;
  }

  eventList.push({
    eventId: id,
    eventName: eventName.value,
    eventDate: date.value,
    ageDefinition: checkbox
  });

  var isShow;

  if (checkbox) {
    isShow = "";
  } else {
    isShow = "d-none";
  }

  list.insertAdjacentHTML(
    "afterend",
    '<li class="list-group-item">' +
      eventName.value +
      ": " +
      '<button type="button"id="' +
      id +
      '" onclick="deleteEvent(this.id)" class="close" aria-label="Close"> <span aria-hidden="true">&times;</span> </button><div class=" ' +
      isShow +
      ' "> <p class="text-danger">18+</p> </div><div class="text-right">' +
      date.value +
      "</div></li>"
  );
}
console.log(eventList);

// 2. Извежда всички вече съхранени събития, и визуализира цялата необходима информация за тях.
function listGenerate(){
  eventList.map(function(event){
    var list = document.getElementById("list");

    var isShow;

    if(event.ageDefinition){
      isShow = "";
    } else{
      isShow = "d-none";
    }
// 1. Съхранява в колекция списък с всички събития, които са организирани.
    list.insertAdjacentHTML(
      "afterend",
      '<li class="list-group-item">' +
        event.eventName +
        ": " +
        ' <button type="button" id="' +
        event.eventId +
        '" onclick="deleteEvent(this.id)" class="close" aria-label="Close"> <span aria-hidden="true">&times;</span> </button><div class=" ' +
        isShow +
        ' "> <p class="text-danger">18+</p> </div><div class="text-right"> ' +
        event.eventDate +
        "</div> </li>"
    );
  });
}

// 3. Изтрива събитие по уникален идентификатор, и извежда съобщение за успешно извършена операция.
function deleteEvent(id){
  console.log(id);
  eventList = eventList.filter(event => event.eventId != id);
  console.log(eventList);
  alert("Event deleted!");
}

// 4. Изведете всички събития които са подходящи за малолетни посетители.
function ageList(){
  var minAge = [];
  eventList.map(function(event){
    if(!event.ageDefinition) minAge.push(event);
  });
  console.log(minAge);
}

// 5. Изведете всички събития като ги групирате, събитията които са предназначени
// за пълнолетни посетители трябва да имат звездичка пред името си “*”,
// а тези подходящи за непълнолетни диез “#”
function adults(){
  var adultsStarDiez = [];
  eventList.map(function(event){
    if(!event.ageDefinition) {
      adultsStarDiez.push("*" + event.eventName);
    }
    else{
      adultsStarDiez.push("#" + event.eventName);
    }
  });
  console.log(adultsStarDiez);
}

// 6. Създайте механизъм за филтриране на събития по определен критерии.
// Функцията трябва да има възможност да получава име и да визуализира
// само тези събития, които отговарят на критериите.
function filterItems(eventName){
  var eventNameFiltred = [];
  for(var i = 0; i < eventList.length; i++){
      if(eventList[i].eventName == eventName){
        eventNameFiltred.push(eventList[i]);
      }  
    }
  console.log(eventNameFiltred)  
}

let client1 = {
  clientId: 1,
  name: "Petya",
  sex: "m",
  age: 23
};

// 6. Добавете клиент към вече създадено събитие. Ако възрастта на клиента не му
// позволява да присъства на събитието, известете с помощта на необходимото съобщение.
function addClientToEvent(clientId, client){
  let event = eventList.find(x => x.eventId === clientId);
  if(typeof event !== "undefined"){
    if(event.ageDefinition && client.age >= 18){
      event.clients.push(client);
    }
    else{
      alert("Age does not allow!");
    }
  }
}

// 7. Визуализирайте списък с всички клиенти които присъстват на определено събитие.
// eventList.find(x=>x.eventId === 1648626757453).clients

// Предоставете възможност да бъдат филтрирани по пол,  
// тоест да се визуализират само мъжете или само жените.
// eventList.find(x=>x.eventId === 1648626757453).clients.filter(x=>x.sex === "f")

// 8. Премахнете присъстващ потребител от събитието.
function removeClient(eId, cId){
  var removeClient = eventList
    .find(x => x === eId)
    .clients.map(function(client){
      return client.clientId;
    })
    .indexOf(cId);
  eventList.find(x => x.id === eId).
  clients.splice(removeClient, 1);
}

// 3. Създайте функционалност за извеждане на събитието с най-много 
// добавени клиенти. Ако такова не съществува(всички са с равен брой)
// или не съществуват - изведете необходимите съобщения, по ваш избор.
function maxClients(){
  let maxC = eventList[0].clients.length;
  let eId = 0;
  for(i = 1; i < eventList.length; i++){
    if(eventList[i].clients.length > maxC){
      maxC = eventList[i].clients.length;
      eId = i;
    }
  }
  console.log(eventList[eId]);
}