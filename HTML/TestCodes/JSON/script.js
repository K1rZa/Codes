let meetup = {
    title: "Conference",
    room: {
      number: 23,
      participants: ["john", "ann"]
    }
  };
  
  console.log( JSON.stringify(meetup) );
  /* вся структура преобразована в строку:
  {
    "title":"Conference",
    "room":{"number":23,"participants":["john","ann"]},
  }
  */