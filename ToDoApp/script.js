
    const modalBtn = document.querySelector('.todoButton')
    const closeBtn = document.querySelector('.closBtn')
    const modal = document.querySelector('.mainModal')
    const create = document.querySelector('.create')
    let allowedDivs = 3;

    modalBtn.onclick = function (){                 //Viser modal når man trykker på Legg til
        modal.style.display = "block"
        console.log(modal.style.display)
    }
    closeBtn.onclick = function (){               //Lukker modal, når man trykker på krysset
        modal.style.display = "none"
    }

    create.onclick = function (){                //Sjekker om det er mer en 3 Cards oppe
        if (allowedDivs > 0){
            cards()
            modal.style.display = "none"
            allowedDivs--
        }
        else {
            alert("Only 3 ToDos allowed")
        }
    }

    const descriptionArea = document.querySelector('#descModal')
    descriptionArea.addEventListener("input", event => {
        const target = event.currentTarget;                                           //Retunerer elementet som event listeneren er koblet mot
        const maxLength = target.getAttribute("maxlength");             //Henter maxlength Attributet til targeten (30)
        const currentLength = target.value.length;                                   //Hvor mange karakterer det er i strengen
        document.querySelector('#charsLeft').innerHTML = `(${maxLength - currentLength})`;  //Karakterer i strengen minus maxLenght Attributtet
    })


    function cards(){                                                                   //Legger til informasjonen fra Modalen til Cards
        let title = document.getElementById("titleModal").value;
        let desc = document.getElementById("descModal").value;
        let auth = document.getElementById("authModal").value;

        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML ="<h3>" + title.charAt(0).toUpperCase() + title.slice(1) + "</h3>" +
            "<p>" + desc.charAt(0).toUpperCase() +  desc.slice(1) + "</p>"  +
            "<p>"+ auth.charAt(0).toUpperCase() + auth.slice(1) +  "</p>" +
            '<input type="button" class="removeC" onclick="removeCard(this)" value="Remove">' +
            "<input type='button' class='completeC' onclick='completeCard(this)' value='Complete'>";

        document.querySelector('.cards').appendChild(div);
        modal.style.display = "none";

    }

    function removeCard(input){                                                                 //Tar vekk Cards
        document.querySelector('.cards').removeChild(input.parentNode);                 //Referer til seg selv (selve cardet)
        allowedDivs ++
    }

    function completeCard(input){                                                               //Henter informasjon fra card til Completed List
        const title = input.parentNode.firstChild.textContent;
        const desc = input.parentNode.firstChild.nextSibling.textContent;
        const author = input.parentNode.firstChild.nextSibling.nextSibling.textContent;
        const date = new Date().toLocaleDateString();
        const info = document.createElement('div');
        info.className = 'completedInfo';
        info.innerHTML = "<ul>" +
                         "<li>" + "<p>" + title + "</p>" + "</li>" +
                         "<li>" + "<p>" + desc + "</p>" + "</li>" +
                         "<li>" + "<p>" + author + "</p>" + "</li>" +
                         "<li>" + "<p>" + date + "</p>" + "</li>" +
                        "</ul>";
        document.querySelector('.TodosInfo').appendChild(info);


        document.querySelector('.cards').removeChild(input.parentNode);
        allowedDivs ++

    }

    function sortDate(){
        const checkBox = document.getElementById('checkDate');
        //Fikk litt lite tid her, måtte fikse de andre innleveringene også :/
    }

