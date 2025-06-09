function toggleFullScreen() {
	var elem = document.getElementById("gm4html5_div_id");
	if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        if (elem.requestFullscreen) {
	        elem.requestFullscreen();
	    } else if (elem.msRequestFullscreen) {
		    elem.msRequestFullscreen();
	    } else if (elem.mozRequestFullScreen) {
		    elem.mozRequestFullScreen();
	    } else if (elem.webkitRequestFullscreen) {
		    elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
	} else {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		}
	}

	window.addEventListener('resize', applyDynamicStyles2);

	applyDynamicStyles2();

}

// Função para verificar e aplicar estilos dinâmicos
function applyDynamicStyles() {
	var viewportWidth = window.innerWidth;
	var viewportHeight = window.innerHeight;
	var dynamicCSS = document.getElementsByTagName("style");

	if (viewportWidth > viewportHeight) {
	  dynamicCSS[0].innerHTML = `
		/* Se o VW for maior que o VH */
		:-webkit-full-screen #canvas {
		  height: auto;
		  width: 100%;
		}
	  `;
	} else {
	  dynamicCSS[0].innerHTML = `
		/* Se o VW for menor que o VH */
		:-webkit-full-screen #canvas {
		  width: auto;
		  height: 100%;
		}
	  `;
	}
  }

  // Função para verificar e aplicar estilos dinâmicos
function applyDynamicStyles2() {
	var viewportWidth = window.innerWidth;
	var viewportHeight = window.innerHeight;
	var dynamicCSS = document.getElementsByTagName("style");

	if (viewportWidth > viewportHeight) {
	  dynamicCSS[0].innerHTML = `
		/* Se o VW for maior que o VH */
		:-webkit-full-screen #canvas {
		  height: 100%;
		  width: 100%;
		}
	  `;
	} else {
	  dynamicCSS[0].innerHTML = `
		/* Se o VW for menor que o VH */
		:-webkit-full-screen #canvas {
		  width: 100%;
		  height: 100%;
		}
	  `;
	}
  }

  // Aplicar estilos dinâmicos na inicialização e sempre que a janela for redimensionada
  applyDynamicStyles(); // Chamar a função uma vez na inicialização