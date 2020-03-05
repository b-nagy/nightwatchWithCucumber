function getInputBox(parent, id, objName) {

    var container = document.createElement("div");
        container.className = "componentContainer";
        container.id = id + "Container";
    var header = document.createElement("label");
        header.className = "label";
        header.id = id + "Header";
        header.innerText = objName;
    var footer = document.createElement("label");
        footer.className = "inputboxFooter";
        footer.id = id + "Footer";
        footer.innerText = "error message";
    var x = document.createElement("INPUT");
        x.setAttribute("type", "text");
        x.setAttribute("value", "");
        x.id = id;
        x.className = "inputbox";

    var castDiv1 = document.createElement("div");
    var castDiv2 = document.createElement("div");
    var castDiv3 = document.createElement("div");

    castDiv1.appendChild(header);
    container.appendChild(castDiv1);
    
    castDiv2.appendChild(x);
    container.appendChild(castDiv2);
    
    castDiv3.appendChild(footer);
    container.appendChild(castDiv3);

    document.getElementById(parent).appendChild(container);

    x.addEventListener("keyup", function(){
        if(this.value == ""){
            footer.style.visibility = "visible";
            x.style.borderColor  = "red";
        } else {
            footer.style.visibility = "hidden"; 
            x.style.borderColor  = "#9E9E9E";
        }
    });
    
    

}