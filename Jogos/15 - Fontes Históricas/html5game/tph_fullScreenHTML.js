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

	applyDynamicStyles();

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
		  height: 100%;
		  width: auto;
		}
	  `;
	} else {
	  dynamicCSS[0].innerHTML = `
		/* Se o VW for menor que o VH */
		:-webkit-full-screen #canvas {
		  width: 100%;
		  height: auto;
		}
	  `;
	}
  }

  // Aplicar estilos dinâmicos na inicialização e sempre que a janela for redimensionada
  window.addEventListener('resize', applyDynamicStyles);
  applyDynamicStyles(); // Chamar a função uma vez na inicialização