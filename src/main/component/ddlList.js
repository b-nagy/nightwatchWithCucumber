function getddList(parent, id, json, odjName){

    var container = document.createElement("div");
        container.className = "componentContainer";
        container.id = id + "Container";
    var header = document.createElement("label");
        header.className = "label";
        header.id = id + "Header";
        header.innerText = odjName;
    var inputbox = document.createElement("INPUT");
        inputbox.setAttribute("type", "text");
        inputbox.setAttribute("value", odjName);
        inputbox.id = id;
        inputbox.className = "inputbox";
    var footer = document.createElement("p");
        footer.className = "inputboxFooter-o";
        footer.id = id + "Footer";
        footer.innerText = "error message";
    var listfield = document.createElement("div");
        listfield.classList.add("lf-o");
        
    var castDiv1 = document.createElement("div");
    var castDiv2 = document.createElement("div");
    var castDiv3 = document.createElement("div");

    castDiv1.appendChild(header);
    container.appendChild(castDiv1);

    castDiv2.appendChild(inputbox);
    container.appendChild(castDiv2);

    castDiv3.appendChild(footer);
    container.appendChild(castDiv3);


    container.appendChild(listfield);   
    document.getElementById(parent).appendChild(container);

    var mydata = JSON.parse(json);
        for (i in mydata) {
            var elem = mydata[i];

            for (j in elem) {
                var p = document.createElement("div");
                    p.className = "t"
                    p.innerText = elem[j];
                    p.addEventListener("click", function(){
                        inputbox.value = this.innerText;
                        listfield.classList.remove("lf-i");
                        listfield.classList.add("lf-o");
                    });

                listfield.appendChild(p);
            }
        }
// ---- Function add ---- //
    inputbox.addEventListener("click", function(){
        if(listfield.classList == "lf-o"){
            listfield.classList.remove("lf-o");
            listfield.classList.add("lf-i");
            listfield.style.width = inputbox.offsetWidth + "px";
        } else {
            listfield.classList.remove("lf-i");
            listfield.classList.add("lf-o");
        }       
    });
}