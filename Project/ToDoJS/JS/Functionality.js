
let addItemId;
// to toggle between landingpage and popup screen
function toggle() {
    const blur = document.getElementById('blur-1');
    blur.classList.toggle('active');
    const Popup = document.getElementById('popup');
    Popup.classList.toggle('active');
}

// to toggle between landingpage and popup_2 screen
function toggle_2(e) {
    const blur = document.getElementById('blur_2');
    blur.classList.toggle('active_2');
    const Popup_2 = document.getElementById('secPopup');
    Popup_2.classList.toggle('active_2');
    addItemId = e;
}

// on clicking add in popup
let inputText = [];
let inputText_2 = [];

// to create todo cards
function addCards() {
    console.log('inside_ADD');
    toggle();

    const span = document.getElementsByClassName('noItems');
    span[0].style.display = 'none';

    const child = document.getElementsByClassName('BodyParent');

    const div = document.createElement("div");
    div.setAttribute("class", "Items");
    child[0].appendChild(div);
    console.log(div);

    catchtext();
    div.setAttribute('id', inputText[inputText.length - 1].id);

    addDetails(child[0], div);
}

// to catch text from input tag and store it with unique id(popup-1)
function catchtext() {
    let todo = document.getElementById('todo').value;

    const tempObj = {
        id: Date.now(),
        text: todo,
    }
    inputText.push(tempObj);
    console.log(inputText);
}

const addDetails = (child, div) => {
    let ptext = document.createElement("a");
    ptext.setAttribute('id', 'text');
    ptext.setAttribute('class', 'title textColorOnWhite');
    ptext.innerText = inputText[inputText.length - 1].text;
    // ptext.addEventListener('click', openIndividual(div.id));
    console.log(div.id);
    ptext.setAttribute('onclick','openIndividual(this.parentElement.id)');

    // child.appendChild(div);
    div.appendChild(ptext); console.log(ptext.innerText);

    const rule = document.createElement("hr");

    const div_2 = document.createElement('div');
    div_2.setAttribute('class', 'itemContains');
    div_2.setAttribute('style', 'text-align:center');

    const anch1 = document.createElement("a");
    const anch2 = document.createElement("a");

    // anch1.setAttribute('id', 'plusIcon');
    anch1.setAttribute('class', 'material-icons anchor pos1');
    anch1.setAttribute('onclick', 'toggle_2(this.parentElement.id)');
    anch1.innerText = 'add_circle';
    // anch2.setAttribute('id', 'trashIcon');
    anch2.setAttribute('class', 'material-icons anchor pos2');
    anch2.setAttribute('onclick', 'del(this)');
    anch2.innerText = 'delete';

    div.appendChild(rule);
    div.appendChild(div_2);
    div.appendChild(anch1);
    div.appendChild(anch2);
}

// Second popup
// to catch text from input tag and store it with unique id(popup-2)
function catchtext_2() {
    let todo_2 = document.getElementById('todo_2').value;

    tempObj_2 = {
        id: Date.now(),
        text: todo_2,
    }
    inputText_2.push(tempObj_2);
    console.log(inputText_2);
}

// Adds the items(task to do) in cards
function addItem() {
    toggle_2(addItemId);

    catchtext_2();

    for (let v of inputText) {
        if (v.id == addItemId) {
            const Items = document.getElementById(`${addItemId}`).children[2];

            // const item = document.getElementsByClassName('itemContains');
            console.log(Items);
            const span = document.createElement('label');
            span.setAttribute('class', 'it');
            span.innerText = inputText_2[inputText_2.length - 1].text;
            span.setAttribute('for', span.innerText);
            Items.appendChild(span);

            const mark = document.createElement('button');
            mark.setAttribute('type', 'button');
            mark.setAttribute('value', span.innerText);
            mark.setAttribute('class', 'done');
            mark.setAttribute('onclick', 'markdone(this)');
            mark.innerText = 'Mark Done';

            Items.appendChild(mark);

            const lb = document.createElement('br');

            Items.appendChild(lb);
        }
    }
}

// to delete cards
function del(e) {
    e.parentElement.remove();
    const child = document.getElementsByClassName('Items');
    console.log(child[0]);
    if (child[0] == undefined) {
        const span = document.getElementsByClassName('noItems');
        span[0].style.display = 'inline';
    }
}

// to make text Line-through
function markdone(e) {
    e.previousElementSibling.style.textDecoration = 'line-through';
    e.style.display = 'none';
}

// Display is changed back to normal
function backToNormal(e) {
    e.style.display = 'none';
    e.nextElementSibling.style.display = 'none';
    e.previousElementSibling.style.display = 'block';

    const acc = document.getElementsByClassName('Items');
    for (let i=0; i<acc.length; i++) {
        if (acc[i].style.display == 'none') {
            acc[i].style.display = 'block';
        }
    }
}

// to open/display only the todo cards clicked on
function openIndividual(e) {
    const acc = document.getElementsByClassName('Items');//206

    const currentDiv = document.getElementById(`${e}`);

    const adText = document.getElementsByClassName('adText');
    console.log(adText[0]);
    adText[0].style.display = 'none';

    const magic_1 = document.getElementById('magic_1');
    magic_1.style.display = 'block';

    const magic_2 = document.getElementById('magic_2');
    magic_2.style.display = 'inline';
    for (let i=0; i<acc.length; i++) {
        if (acc[i].id == e) {
            console.log(acc[i].children[0].innerText);
            magic_2.innerText = acc[i].children[0].innerText;// acc[i].style.display = 'block';
        }
        else {
            console.log(acc[i].id);
            acc[i].style.display = 'none';
        }
    }
}





