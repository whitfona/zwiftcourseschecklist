class LS {
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
     //Get counter values
     let watopiaOutput = document.getElementById("watopiaOutput").innerText;
     let globalOutput = document.getElementById("globalOutput").innerText;
    if(localStorage.getItem('watopia') === null) {
      watopiaList = [];
    } else {
      watopiaList = JSON.parse(localStorage.getItem('watopia'));
    }
    
    watopiaList.forEach(function(item) {
      //Set check boxes to checked for all the elements in watopiaList and apply the orange class the checkbox parent
      document.getElementById(item).checked = true;
      document.getElementById(item).parentNode.classList.add('bg-orange');
      //Increase the counters by one for each item
      watopiaOutput++;
      globalOutput++;
    })

    document.getElementById("watopiaOutput").innerText = watopiaOutput;
    document.getElementById("globalOutput").innerText = globalOutput;
  }

   // LONDON
   addLondontoLS(london) {
    let londonList;
    if(localStorage.getItem('london') === null) {
      londonList = [];
    } else {
      londonList = JSON.parse(localStorage.getItem('london'));
    }
    
    londonList.push(london.id);

    localStorage.setItem('london', JSON.stringify(londonList));
  }

  removeLondonfromLS(item) {
    let londonList;
    if(localStorage.getItem('london') === null) {
      londonList = [];
    } else {
      londonList = JSON.parse(localStorage.getItem('london'));
    }

    londonList.forEach(function(londonItem, index) {
      if(item.id === londonItem) {
        londonList.splice(index, 1);
      }
    });

    localStorage.setItem('london', JSON.stringify(londonList));
  }

  loadLondonfromLS() {
    let londonList;
     //Get counter values
     let londonOutput = document.getElementById("londonOutput").innerText;
     let globalOutput = document.getElementById("globalOutput").innerText;
    if(localStorage.getItem('london') === null) {
      londonList = [];
    } else {
      londonList = JSON.parse(localStorage.getItem('london'));
    }
    
    londonList.forEach(function(item) {
      //Set check boxes to checked for all the elements in londonList and apply the orange class the checkbox parent
      document.getElementById(item).checked = true;
      document.getElementById(item).parentNode.classList.add('bg-orange');
      //Increase the counters by one for each item
      londonOutput++;
      globalOutput++;
    })

    document.getElementById("londonOutput").innerText = londonOutput;
    document.getElementById("globalOutput").innerText = globalOutput;
  }

   // NEW YORK
   addNYCtoLS(nyc) {
    let nycList;
    if(localStorage.getItem('nyc') === null) {
      nycList = [];
    } else {
      nycList = JSON.parse(localStorage.getItem('nyc'));
    }

    nycList.push(nyc.id);

    localStorage.setItem('nyc', JSON.stringify(nycList));
  }

  removeNYCfromLS(item) {
    let nycList;
    if(localStorage.getItem('nyc') === null) {
      nycList = [];
    } else {
      nycList = JSON.parse(localStorage.getItem('nyc'));
    }

    nycList.forEach(function(nycItem, index) {
      if(item.id === nycItem) {
        nycList.splice(index, 1);
      }
    });

    localStorage.setItem('nyc', JSON.stringify(nycList));
  }

  loadNYCfromLS() {
    let nycList;
     //Get counter values
     let nycOutput = document.getElementById("newYorkOutput").innerText;
     let globalOutput = document.getElementById("globalOutput").innerText;
    if(localStorage.getItem('nyc') === null) {
      nycList = [];
    } else {
      nycList = JSON.parse(localStorage.getItem('nyc'));
    }
    
    nycList.forEach(function(item) {
      //Set check boxes to checked for all the elements in nycList and apply the orange class the checkbox parent
      document.getElementById(item).checked = true;
      document.getElementById(item).parentNode.classList.add('bg-orange');
      //Increase the counters by one for each item
      nycOutput++;
      globalOutput++;
    })

    document.getElementById("newYorkOutput").innerText = nycOutput;
    document.getElementById("globalOutput").innerText = globalOutput;
  }

  // RICHMOND
  addRichmondtoLS(richmond) {
  let richmondList;
  if(localStorage.getItem('richmond') === null) {
    richmondList = [];
  } else {
    richmondList = JSON.parse(localStorage.getItem('richmond'));
  }

  richmondList.push(richmond.id);

  localStorage.setItem('richmond', JSON.stringify(richmondList));
  }

  removeRichmondfromLS(item) {
    let richmondList;
    if(localStorage.getItem('richmond') === null) {
      richmondList = [];
    } else {
      richmondList = JSON.parse(localStorage.getItem('richmond'));
    }

    richmondList.forEach(function(richmondItem, index) {
      if(item.id === richmondItem) {
        richmondList.splice(index, 1);
      }
    });

    localStorage.setItem('richmond', JSON.stringify(richmondList));
  }

  loadRichmondfromLS() {
    let richmondList;
     //Get counter values
     let richmondOutput = document.getElementById("richmondOutput").innerText;
     let globalOutput = document.getElementById("globalOutput").innerText;
    if(localStorage.getItem('richmond') === null) {
      richmondList = [];
    } else {
      richmondList = JSON.parse(localStorage.getItem('richmond'));
    }
    
    richmondList.forEach(function(item) {
      //Set check boxes to checked for all the elements in richmondList and apply the orange class the checkbox parent
      document.getElementById(item).checked = true;
      document.getElementById(item).parentNode.classList.add('bg-orange');
      //Increase the counters by one for each item
      richmondOutput++;
      globalOutput++;
    })

    document.getElementById("richmondOutput").innerText = richmondOutput;
    document.getElementById("globalOutput").innerText = globalOutput;
  }
  
  // INNSBRUCK
  addInnsbrucktoLS(innsbruck) {
  let innsbruckList;
  if(localStorage.getItem('innsbruck') === null) {
    innsbruckList = [];
  } else {
    innsbruckList = JSON.parse(localStorage.getItem('innsbruck'));
  }

  innsbruckList.push(innsbruck.id);

  localStorage.setItem('innsbruck', JSON.stringify(innsbruckList));
  }

  removeInnsbruckfromLS(item) {
    let innsbruckList;
    if(localStorage.getItem('innsbruck') === null) {
      innsbruckList = [];
    } else {
      innsbruckList = JSON.parse(localStorage.getItem('innsbruck'));
    }

    innsbruckList.forEach(function(innsbruckItem, index) {
      if(item.id === innsbruckItem) {
        innsbruckList.splice(index, 1);
      }
    });

    localStorage.setItem('innsbruck', JSON.stringify(innsbruckList));
  }

  loadInnsbruckfromLS() {
    let innsbruckList;
     //Get counter values
     let innsbruckOutput = document.getElementById("innsbruckOutput").innerText;
     let globalOutput = document.getElementById("globalOutput").innerText;
    if(localStorage.getItem('innsbruck') === null) {
      innsbruckList = [];
    } else {
      innsbruckList = JSON.parse(localStorage.getItem('innsbruck'));
    }
    
    innsbruckList.forEach(function(item) {
      //Set check boxes to checked for all the elements in innsbruckList and apply the orange class the checkbox parent
      document.getElementById(item).checked = true;
      document.getElementById(item).parentNode.classList.add('bg-orange');
      //Increase the counters by one for each item
      innsbruckOutput++;
      globalOutput++;
    })

    document.getElementById("innsbruckOutput").innerText = innsbruckOutput;
    document.getElementById("globalOutput").innerText = globalOutput;
  }

  // YORKSHIRE
  addYorkshiretoLS(yorkshire) {
    let yorkshireList;
    if(localStorage.getItem('yorkshire') === null) {
      yorkshireList = [];
    } else {
      yorkshireList = JSON.parse(localStorage.getItem('yorkshire'));
    }
  
    yorkshireList.push(yorkshire.id);
  
    localStorage.setItem('yorkshire', JSON.stringify(yorkshireList));
    }

    removeYorkshirefromLS(item) {
      let yorkshireList;
      if(localStorage.getItem('yorkshire') === null) {
        yorkshireList = [];
      } else {
        yorkshireList = JSON.parse(localStorage.getItem('yorkshire'));
      }
  
      yorkshireList.forEach(function(yorkshireItem, index) {
        if(item.id === yorkshireItem) {
          yorkshireList.splice(index, 1);
        }
      });
  
      localStorage.setItem('yorkshire', JSON.stringify(yorkshireList));
    }
  
    loadYorkshirefromLS() {
      let yorkshireList;
       //Get counter values
       let yorkshireOutput = document.getElementById("yorkshireOutput").innerText;
       let globalOutput = document.getElementById("globalOutput").innerText;
      if(localStorage.getItem('yorkshire') === null) {
        yorkshireList = [];
      } else {
        yorkshireList = JSON.parse(localStorage.getItem('yorkshire'));
      }
      
      yorkshireList.forEach(function(item) {
        //Set check boxes to checked for all the elements in yorkshireList and apply the orange class the checkbox parent
        document.getElementById(item).checked = true;
        document.getElementById(item).parentNode.classList.add('bg-orange');
        //Increase the counters by one for each item
        yorkshireOutput++;
        globalOutput++;
      })
  
      document.getElementById("yorkshireOutput").innerText = yorkshireOutput;
      document.getElementById("globalOutput").innerText = globalOutput;
    }
}   