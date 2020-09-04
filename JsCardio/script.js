let main = document.createElement('main');
let body = document.querySelector('body')  //Laget et Main Element
body.appendChild(main)                              //Legge Main Elementet Til Body




let paragraph = document.createElement('p');   //Lage en Paragraph
paragraph.className = "cardioP"                           //Gi den en klasse
let text = document.createTextNode("Jeg trener på JavaScript"); //legge til tekst
paragraph.appendChild(text);
main.appendChild(paragraph);                                        //Legge den til main elementet





let select = document.createElement('select');          //Lage en selectboks
let arrayForSelect = [{id:1, data: "Select 1"}, {id:2, data: "Select 2"}, {id:3, data: "Select 3"}];

for (let i = 0; i < arrayForSelect.length; i++) {                  //Populere select basert på et Object eller Array
    let option = document.createElement('option')
    option.value = arrayForSelect[1].id;
    option.innerHTML = arrayForSelect[i].data;
    select.appendChild(option);
}

main.appendChild(select);                               //Sentrere select boksen i main
select.style.position = "absolute";
select.style.top = "50%";
select.style.left = "50%";
select.style.width = "500px";                           //Maks Bredde på 500px




buttonTest = document.createElement('button')
buttonTest.innerHTML = "Test";
buttonReset = document.createElement('button');
buttonReset.innerHTML = "Reset";

main.appendChild(buttonTest)
main.appendChild(buttonReset)



buttonTest.addEventListener('click', function(){
    let theText = text.textContent.split(" ").reverse();
    let theTextArr = [];
    let newText = document.createElement("p");

    for (let i = 0; i < theText.length; i++){

        theTextArr.push(theText[i].substr(1))
        console.log(theTextArr)
    }
    theTextArr.join("")
    newText.textContent = theTextArr.toString()
    main.appendChild(newText)
})

const ul = document.createElement("ul");
ul.innerHTML = '<li>' + '<button onclick="deleteMe(this)">Slett Meg 1 </button>' + '</li>' +
    '<li>' + '<button onclick="deleteMe(this)">Slett Meg 2 </button>' + '</li>' +
    '<li>' + '<button onclick="deleteMe(this)">Slett Meg 3 </button>' + '</li>' +
    '<li>' + '<button onclick="deleteMe(this)">Slett Meg 4 </button>' + '</li>';
main.appendChild(ul)

function deleteMe(button){
    document.querySelector('ul').removeChild(button.parentNode);
}

buttonReset.addEventListener('click',function (){
    const thelist = document.querySelector("ul").getElementsByTagName("li").length;
    if (thelist > 0){
        alert("Du må slette alle først")
    }else {
        document.querySelector("ul").remove();
        const ul = document.createElement("ul");
        ul.innerHTML = '<li>' + '<button onclick="deleteMe(this)">Slett Meg 1 </button>' + '</li>' +
            '<li>' + '<button onclick="deleteMe(this)">Slett Meg 2 </button>' + '</li>' +
            '<li>' + '<button onclick="deleteMe(this)">Slett Meg 3 </button>' + '</li>' +
            '<li>' + '<button onclick="deleteMe(this)">Slett Meg 4 </button>' + '</li>';
        main.appendChild(ul)
    }
})