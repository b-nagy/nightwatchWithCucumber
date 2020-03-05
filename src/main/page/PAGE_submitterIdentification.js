function PAGE_submitterIdentification(){

    var content = document.createElement("div");
        content.classList.add("content");
       
    var boxheader = document.createElement("div");
        boxheader.classList.add("box-header");
        boxheader.innerText = "My header";

    content.appendChild(boxheader);
      

    var tr = document.createElement("div");
        tr.id = "tr1";
        tr.className = "tr";
    

    var td = document.createElement("div");
        td.id = "td1";
        td.className = "td";
    tr.appendChild(td);

    var td = document.createElement("div");
        td.id = "td2";
        td.className = "td";
    tr.appendChild(td);

    var td = document.createElement("div");
        td.id = "td3";
        td.className = "td";
    tr.appendChild(td);

    content.appendChild(tr);

    var tr = document.createElement("div");
        tr.id = "tr2";
        tr.className = "tr";
    

    var td = document.createElement("div");
        td.id = "td4";
        td.className = "td";
    tr.appendChild(td);

    content.appendChild(tr);

    var boxfooter = document.createElement("div");
        boxfooter.classList.add("box-footer");

    var button = document.createElement("button");
        button.innerText = "VISSZA";
        button.classList.add("button-back");
    
    boxfooter.appendChild(button);
    content.appendChild(boxfooter);

    var button = document.createElement("button");
        button.innerText = "keresés";
        button.classList.add("button-active");
    
    boxfooter.appendChild(button);

    content.appendChild(boxfooter);
    document.getElementById("container").appendChild(content);
    



    getddList('td1', 'presentedby', presentedby, 'Előterjesztő');
    getddList('td2', 'identificationmode', identificationMode, 'Személyazonosítás módja');
    getInputBox('td3', 'documentidentification', 'Személyazonosításra bemutatott okmány azonosítója'); 
    getddList('td4', 'documenttype', documentType, 'Igényelt okmány típusa');
    
}