function getList(id){
    var list = document.createElement("ul");
    list.className = "a";
    var listElem;
        for( i = 0; i < 3; i++){
            listElem = document.createElement("li");
            listElem.innerText = "my list " + (i + 1);
            listElem.addEventListener("mouseover", mouseOver, true);
            listElem.addEventListener("mouseout", mouseOut, true);
            list.appendChild(listElem);
        }
    document.getElementById(id).appendChild(list);
}