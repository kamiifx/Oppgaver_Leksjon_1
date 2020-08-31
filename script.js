
    const modalBtn = document.querySelector('.todoButton')
    const closeBtn = document.querySelector('.closBtn')
    const modal = document.querySelector('.mainModal')
    const create = document.querySelector('.create')
    let allowedDivs = 3;

    modalBtn.onclick = function (){
        modal.style.display = "block"
        console.log(modal.style.display)
    }
    closeBtn.onclick = function (){
        modal.style.display = "none"
    }

    create.onclick = function (){
        if (allowedDivs > 0){
            cards()
            modal.style.display = "none"
            allowedDivs--
        }
        else {
            alert("Only 3 ToDos allowed")
        }
    }

    function cards(){
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

    function removeCard(input){
        document.querySelector('.cards').removeChild(input.parentNode);
        allowedDivs ++
    }

    function completeCard(input){
        const title = input.parentNode.firstChild.textContent;
        const desc = input.parentNode.firstChild.nextSibling.textContent;
        const author = input.parentNode.firstChild.nextSibling.nextSibling.textContent;
        const date = new Date().toLocaleDateString();
        const info = document.createElement('div');
        info.className = 'completedInfo';
        info.innerHTML = "<p>" + title + "</p>" +
                         "<p>" + desc + "</p>" +
                         "<p>" + author + "</p>"+
                         "<p>" + date + "</p>";
        document.querySelector('.TodosInfo').appendChild(info);


        document.querySelector('.cards').removeChild(input.parentNode);
        allowedDivs ++

    }


