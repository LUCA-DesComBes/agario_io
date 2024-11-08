let circles = document.getElementsByClassName("circle"),
	// KEYS = {},
	players = [];
let mousex = 0;
let mousey = 0;
let click = false;
const move = (e) => {
	// KEYS[e.key] = e.type == "mousemove";
	mousex = e.clientX;
	mousey = e.clientY;
};
window.addEventListener("mouseup", () => {
	click = false;
});
window.addEventListener("mousedown", () => {
    let randomColor = Math.floor(Math.random()*4294967294).toString(16);
    let borderColor = Math.floor(Math.random()*4294967294).toString(16);
    let size = Math.random()*100;
	let circle = document.createElement("div");
	circle.className = "circle";
	players.push({
		x: mousex,
		y: mousey,
        
	});
    circle.style.border = `7px solid #${borderColor}`
    circle.style.backgroundColor = `#${randomColor}`
	circle.style.height = `${size}px`;
	circle.style.width = `${size}px`;
	circle.style.top = `${mousey}px`;
	circle.style.left = `${mousex}px`;
	document.body.appendChild(circle);
	circles = document.getElementsByClassName("circle");
	click = true;
});
window.addEventListener("mousemove", move);
setInterval(() => {
	// if(KEYS["ArrowLeft"]){
	//     player.x--;
	// }
	// if(KEYS["ArrowUp"]){
	//     player.y--;
	// }
	// if(KEYS["ArrowRight"]){
	//     player.x++;
	// }
	// if(KEYS["ArrowDown"]){
	//     player.y++;
	// }
	let circle = circles[circles.length - 1];
	let player = players[players.length - 1];
	if (click == true) {
		player.x = mousex - 25;
		player.y = mousey - 25;
	}
	circle.style.top = `${player.y}px`;
	circle.style.left = `${player.x}px`;
}, 1000 / 60);
