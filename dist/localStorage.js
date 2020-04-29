
// make background orange when checkbox active & global counter
const mainDiv = document.getElementById('main-div');
const boxes = mainDiv.getElementsByTagName('input');
const globalOutput = document.getElementById('globalOutput');

let counter = 0;
let watopiaCounter = 0;
let londonCounter = 0;
let newYorkCounter = 0;
let richmondCounter = 0;
let innsbruckCounter = 0;
let yorkshireCounter = 0;

for(let i = 0; i < boxes.length; i++) {
  if (boxes[i].type === 'checkbox') {
    boxes[i].onclick = (e) => {
      if (boxes[i].checked === true) {
        e.toElement.parentNode.classList.add('bg-orange');
        counter++;
        
        globalOutput.innerHTML = counter;
        if (boxes[i].name === 'watopia') {
          watopiaCounter++;

          document.getElementById('watopiaOutput').innerHTML = watopiaCounter;

          addWatopiaToLS(boxes[i].checked);
        }
        else if (boxes[i].name === 'watopia') {
          watopiaCounter++;

          document.getElementById('watopiaOutput').innerHTML = watopiaCounter;
        }
        else if (boxes[i].name === 'london') {
          londonCounter++;

          document.getElementById('londonOutput').innerHTML = londonCounter;
        }
        else if (boxes[i].name === 'newYork') {
          newYorkCounter++;

          document.getElementById('newYorkOutput').innerHTML = newYorkCounter;
        }
        else if (boxes[i].name === 'richmond') {
          richmondCounter++;

          document.getElementById('richmondOutput').innerHTML = richmondCounter;
        }
        else if (boxes[i].name === 'innsbruck') {
          innsbruckCounter++;

          document.getElementById('innsbruckOutput').innerHTML = innsbruckCounter;
        }
        else if (boxes[i].name === 'yorkshire') {
          yorkshireCounter++;

          document.getElementById('yorkshireOutput').innerHTML = yorkshireCounter;
        }
      } else {
        e.toElement.parentNode.classList.remove('bg-orange');
        counter--;
  
        globalOutput.innerHTML = counter;
        if (boxes[i].name === 'watopia') {
          watopiaCounter--;

          document.getElementById('watopiaOutput').innerHTML = watopiaCounter;
        }
        else if (boxes[i].name === 'watopia') {
          watopiaCounter--;

          document.getElementById('watopiaOutput').innerHTML = watopiaCounter;

          removeWatopiaFromLS(boxes[i]);
        }
        else if (boxes[i].name === 'london') {
          londonCounter--;

          document.getElementById('londonOutput').innerHTML = londonCounter;
        }
        else if (boxes[i].name === 'newYork') {
          newYorkCounter--;

          document.getElementById('newYorkOutput').innerHTML = newYorkCounter;
        }
        else if (boxes[i].name === 'richmond') {
          richmondCounter--;

          document.getElementById('richmondOutput').innerHTML = richmondCounter;
        }
        else if (boxes[i].name === 'innsbruck') {
          innsbruckCounter--;

          document.getElementById('innsbruckOutput').innerHTML = innsbruckCounter;
        }
        else if (boxes[i].name === 'yorkshire') {
          yorkshireCounter--;

          document.getElementById('yorkshireOutput').innerHTML = yorkshireCounter;
        }
      }
    };
  }
}


// Add Watopia to Local Storage
function addWatopiaToLS(watopia) {
  let watopias;
  if (localStorage.getItem('watopias') === null) {
    watopias = [];
  } else {
    watopias = JSON.parse(localStorage.getItem('watopias'));
  }

  watopias.push(watopia);

  localStorage.setItem('watopias', JSON.stringify(watopias));
}

// Remove Watopia from Local Storage
function removeWatopiaFromLS(watopiaItem) {
  let watopias;
  if (localStorage.getItem('watopias') === null) {
    watopias = [];
  } else {
    watopias = JSON.parse(localStorage.getItem('watopias'));
  }

  watopias.forEach(function(watopia, index) {
    if(watopiaItem.textContent === watopia) {
      watopias.splice(index, 1);
    }
  });

  localStorage.setItem('watopias', JSON.stringify(watopias));
}