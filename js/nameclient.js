let btnNext = document.getElementById('btn_next');
let inputPass = document.getElementById('inputPassenger');
let inputChild = document.getElementById('inputChildren');
let children = document.getElementById('children');
let passenger = document.getElementById('passenger');


btnNext.addEventListener('click', () => {
    let nmbPassenger = inputPass.value;
    let nmbChildren = inputChild.value;
    console.log(nmbPassenger);
    console.log(nmbChildren);

    if (nmbChildren > 0 && nmbPassenger == 0) {
        alert("Nous n'acceptons pas que les enfants voyage seul.");
    }
    else if (nmbPassenger === 0) {
        alert('Aucun passager');
        console.log('Aucun passager');
    }
    else {

        document.getElementById('sectionUn').classList.add('hidden');
        document.getElementById('sectionDeux').classList.remove('hidden');
        if (nmbChildren == 0) {


            for (x = 0; x < nmbPassenger; x++) {
                console.log('FOR2')
                addPassenger();
            }
            children.classList.add('hidden');
        }
        
        else
        {
            for (x = 0; x < nmbPassenger; x++) {
                console.log('FOR2')
                addPassenger();
            }
            for (y = 0; y < nmbChildren; y++) {
                console.log('FOR3')
                addChildren();
            }
        }
    }


})



function addPassenger() {
    let newDiv = document.createElement('div');
    let oneInput = document.createElement('input');
    let twoInput = document.createElement('input');
    newDiv.id = x;
    oneInput.setAttribute('type', 'text');
    twoInput.setAttribute('type', 'text');
    oneInput.setAttribute('placeholder', 'Nom');
    twoInput.setAttribute('placeholder', 'Prénom');
    oneInput.classList.add('newInput');
    twoInput.classList.add('newInput');



    document.getElementById('passenger').appendChild(newDiv);
    document.getElementById(x).appendChild(oneInput);
    document.getElementById(x).appendChild(twoInput);
}
function addChildren() {
    let newDiv = document.createElement('div');
    let oneInput = document.createElement('input');
    let twoInput = document.createElement('input');
    newDiv.id = y + 1000;
    oneInput.setAttribute('type', 'text');
    twoInput.setAttribute('type', 'text');

    oneInput.setAttribute('placeholder', 'Nom');
    twoInput.setAttribute('placeholder', 'Prénom');

    oneInput.classList.add('newInput');
    twoInput.classList.add('newInput');



    document.getElementById('children').appendChild(newDiv);
    document.getElementById(y + 1000).appendChild(oneInput);
    document.getElementById(y + 1000).appendChild(twoInput);
}