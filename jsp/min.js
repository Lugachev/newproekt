let body = document.getElementsByTagName('body');
let BigBlock = document.getElementById('btn');

function createBigBlock()
{
	let BB = document.createElement('div');
	BB.style.zIndex = "4";
	BB.style.position = "fixed";
	BB.style.left = "0";
	BB.style.top = "0";
	BB.style.width = "100vw";
	BB.style.height = "100vh";
	BB.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
	BB.addEventListener ("click", function(){BB.remove(); MB.remove();})
	body[0].append(BB);

	let MB = document.createElement('div');
	MB.style.position = "fixed";
	MB.style.zIndex = "4";
	MB.style.top = "25%";
	MB.style.left = "25%";
	MB.style.width = "50vw";
	MB.style.height = "50vh";
	MB.style.borderRadius = "10px";
	MB.style.backgroundColor = "white";
	body[0].append(MB);
}

BigBlock.addEventListener ("click", createBigBlock);








