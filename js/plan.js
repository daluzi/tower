var menu = document.getElementById("drop-down-menu");
var Btn = document.getElementById("btn");
 Btn.onclick = function() {
 	menu.style.display = "block";
 }
Btn.onmouseout = function() {
 	menu.style.display = "none";
 }
 
var menuDesc = document.getElementById("drop-down-desc");
var BtnEdit = document.getElementById("btn-edit");
BtnEdit.onclick = function() {
 	menuDesc.style.display = "block";
 }
BtnEdit.onmouseout = function() {
 	menuDesc.style.display = "none";
 }