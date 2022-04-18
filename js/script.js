'use strict';

const btnHistory = document.querySelector('.history')
const btnSave = document.querySelector('.save')
const result = document.querySelector('.output-container')
const minimize = document.querySelector('.minimize')
const run = document.querySelector('run')

const htmlEditor = document.getElementById('htmlCode')
const cssEditor = document.getElementById('cssCode')
const jsEditor = document.getElementById('jsCode')

function runCode(){
    let htmlCode = htmlEditor.value;
	let cssCode = "<style>" + cssEditor.value + "</style>";
	let jsCode = "<scri" + "pt>" + jsEditor.value + "</scri" + "pt>";
	let previewWindow = document.querySelector("#result-window").contentWindow.document;
	previewWindow.open();
	previewWindow.write(htmlCode+cssCode+jsCode);
	previewWindow.close();
}

document.querySelector("#runBtn").addEventListener("click",function(){
	runCode()
});

document.addEventListener('keydown', (event)=> {    
  let isSKey = event.key === "s" || event.key ==="S";
  let isMetaKey =  event.metaKey;
  if( isMetaKey && isSKey) {
    console.log("CTRL + S pressed");
    runCode()
  }
});

function store (){
    let template = prompt("Please enter your template name!");
    if (template != null) {
      var itemLink = document.createElement("a");
      itemLink.href = "#";
      itemLink.innerText = template
      document.getElementById("history-dropdown").appendChild(itemLink)
    }
}
document.querySelector("#saveBtn").addEventListener("click",function(){
    store ()
});

minimize.addEventListener("click",function(){
	result.style.width ="100%";
    document.querySelector('.editor-boxs').style.width ="80%";
});
