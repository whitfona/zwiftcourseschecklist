class LS {
  constructor() {
  }

  // WATOPIA
  addWatopiatoLS(watopia) {
    let watopiaList;
    if(localStorage.getItem('watopia') === null) {
      watopiaList = [];
    } else {
      watopiaList = JSON.parse(localStorage.getItem('watopia'));
    }
    
    watopiaList.push(watopia.id);

    localStorage.setItem('watopia', JSON.stringify(watopiaList));
  }

  removeWatopiafromLS(item) {
    let watopiaList;
    if(localStorage.getItem('watopia') === null) {
      watopiaList = [];
    } else {
      watopiaList = JSON.parse(localStorage.getItem('watopia'));
    }

    watopiaList.forEach(function(watopiaItem, index) {
      if(item.id === watopiaItem) {
        watopiaList.splice(index, 1);
      }
    });

    localStorage.setItem('watopia', JSON.stringify(watopiaList));
  }

  loadWatopiafromLS() {
    let watopiaList;
    if(localStorage.getItem('watopia') === null) {
      watopiaList = [];
    } else {
      watopiaList = JSON.parse(localStorage.getItem('watopia'));
    }
    
    watopiaList.forEach(function(item) {
    //  NOT SURE WHAT TO PUT IN HERE. I CAN HAVE THE PAGE LOAD WITH THE BOXES STILL CHECKED BUT THEY DON'T GET INCLUDED IN THE COUNTERS AND THEY ARE NOT ORANGE LIKE BEFORE PUT INTO LOCAL STORAGE
    })
  }

   // LONDON
   addLondontoLS(london) {
    let londonList;
    if(localStorage.getItem('london') === null) {
      londonList = [];
    } else {
      londonList = JSON.parse(localStorage.getItem('london'));
    }

    londonList.push(london);

    localStorage.setItem('london', JSON.stringify(londonList));
  }

   // NEW YORK
   addNYCtoLS(nyc) {
    let nycList;
    if(localStorage.getItem('nyc') === null) {
      nycList = [];
    } else {
      nycList = JSON.parse(localStorage.getItem('nyc'));
    }

    nycList.push(nyc);

    localStorage.setItem('nyc', JSON.stringify(nycList));
  }

  // NEW YORK
  addRichmondtoLS(richmond) {
  let richmondList;
  if(localStorage.getItem('richmond') === null) {
    richmondList = [];
  } else {
    richmondList = JSON.parse(localStorage.getItem('richmond'));
  }

  richmondList.push(richmond);

  localStorage.setItem('richmond', JSON.stringify(richmondList));
  }
  
  // INNSBRUCK
  addInnsbrucktoLS(innsbruck) {
  let innsbruckList;
  if(localStorage.getItem('innsbruck') === null) {
    innsbruckList = [];
  } else {
    innsbruckList = JSON.parse(localStorage.getItem('innsbruck'));
  }

  innsbruckList.push(innsbruck);

  localStorage.setItem('innsbruck', JSON.stringify(innsbruckList));
  }

  // INNSBRUCK
  addYorkshiretoLS(yorkshire) {
    let yorkshireList;
    if(localStorage.getItem('yorkshire') === null) {
      yorkshireList = [];
    } else {
      yorkshireList = JSON.parse(localStorage.getItem('yorkshire'));
    }
  
    yorkshireList.push(yorkshire);
  
    localStorage.setItem('yorkshire', JSON.stringify(yorkshireList));
    }
}   