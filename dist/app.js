// Init LS
const ls = new LS();

document.addEventListener('DOMContentLoaded', ls.loadWatopiafromLS);
document.addEventListener('DOMContentLoaded', ls.loadLondonfromLS);
document.addEventListener('DOMContentLoaded', ls.loadNYCfromLS);
document.addEventListener('DOMContentLoaded', ls.loadRichmondfromLS);
document.addEventListener('DOMContentLoaded', ls.loadInnsbruckfromLS);
document.addEventListener('DOMContentLoaded', ls.loadYorkshirefromLS);

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
      //Check counter before adding anything in case there are saved values already increasing the count
      counter = document.getElementById("globalOutput").innerText;
      if (boxes[i].checked === true) {
        e.toElement.parentNode.classList.add('bg-orange');
        counter++;
        
        globalOutput.innerHTML = counter;
        if (boxes[i].name === 'watopia') {
          //Check counter before adding anything in case there are saved values already increasing the count
          watopiaCounter = document.getElementById("watopiaOutput").innerText;

          watopiaCounter++;

          document.getElementById('watopiaOutput').innerHTML = watopiaCounter;

          ls.addWatopiatoLS(boxes[i]);
        }
        else if (boxes[i].name === 'london') {
          //Check counter before adding anything in case there are saved values already increasing the count
          londonCounter = document.getElementById("londonOutput").innerText;

          londonCounter++;

          document.getElementById('londonOutput').innerHTML = londonCounter;

          ls.addLondontoLS(boxes[i]);
        }
        else if (boxes[i].name === 'newYork') {
          //Check counter before adding anything in case there are saved values already increasing the count
          newYorkCounter = document.getElementById("newYorkOutput").innerText;

          newYorkCounter++;

          document.getElementById('newYorkOutput').innerHTML = newYorkCounter;

          ls.addNYCtoLS(boxes[i]);
        }
        else if (boxes[i].name === 'richmond') {
          richmondCounter++;

          document.getElementById('richmondOutput').innerHTML = richmondCounter;

          ls.addRichmondtoLS(boxes[i]);
        }
        else if (boxes[i].name === 'innsbruck') {
          //Check counter before adding anything in case there are saved values already increasing the count
          innsbruckCounter = document.getElementById("innsbruckOutput").innerText;

          innsbruckCounter++;

          document.getElementById('innsbruckOutput').innerHTML = innsbruckCounter;

          ls.addInnsbrucktoLS(boxes[i]);
        }
        else if (boxes[i].name === 'yorkshire') {
          //Check counter before adding anything in case there are saved values already increasing the count
          yorkshireCounter = document.getElementById("yorkshireOutput").innerText;

          yorkshireCounter++;

          document.getElementById('yorkshireOutput').innerHTML = yorkshireCounter;

          ls.addYorkshiretoLS(boxes[i]);
        }
      } else {
        //Check counter before adding anything in case there are saved values already increasing the count
        counter = document.getElementById("globalOutput").innerText;

        e.toElement.parentNode.classList.remove('bg-orange');
        counter--;
  
        globalOutput.innerHTML = counter;
        if (boxes[i].name === 'watopia') {
          //Check counter before adding anything in case there are saved values already increasing the count
          watopiaCounter = document.getElementById("watopiaOutput").innerText;

          watopiaCounter--;

          document.getElementById('watopiaOutput').innerHTML = watopiaCounter;

          ls.removeWatopiafromLS(boxes[i]);
        }
        else if (boxes[i].name === 'london') {
          //Check counter before adding anything in case there are saved values already increasing the count
          londonCounter = document.getElementById("londonOutput").innerText;

          londonCounter--;

          document.getElementById('londonOutput').innerHTML = londonCounter;

          ls.removeLondonfromLS(boxes[i]);
        }
        else if (boxes[i].name === 'newYork') {
          //Check counter before adding anything in case there are saved values already increasing the count
          newYorkCounter = document.getElementById("newYorkOutput").innerText;

          newYorkCounter--;

          document.getElementById('newYorkOutput').innerHTML = newYorkCounter;

          ls.removeNYCfromLS(boxes[i]);
        }
        else if (boxes[i].name === 'richmond') {
          //Check counter before adding anything in case there are saved values already increasing the count
          richmondCounter = document.getElementById("richmondOutput").innerText;

          richmondCounter--;

          document.getElementById('richmondOutput').innerHTML = richmondCounter;

          ls.removeRichmondfromLS(boxes[i]);
        }
        else if (boxes[i].name === 'innsbruck') {
          //Check counter before adding anything in case there are saved values already increasing the count
          innsbruckCounter = document.getElementById("innsbruckOutput").innerText;

          innsbruckCounter--;

          document.getElementById('innsbruckOutput').innerHTML = innsbruckCounter;

          ls.removeInnsbruckfromLS(boxes[i]);
        }
        else if (boxes[i].name === 'yorkshire') {
          //Check counter before adding anything in case there are saved values already increasing the count
          yorkshireCounter = document.getElementById("yorkshireOutput").innerText;

          yorkshireCounter--;

          document.getElementById('yorkshireOutput').innerHTML = yorkshireCounter;

          ls.removeYorkshirefromLS(boxes[i]);
        }
      }
    };
  }
}

