const mediaQuery = window.matchMedia('(min-width: 880px)');
const radioButton = document.getElementById('menu-toggle');
const targetDiv = document.querySelector('.screen-dim');

function handleScreenChange(e) {
  if (e.matches) {
    radioButton.checked = false;
    // Remove the inline style completely so CSS can take back control safely
    targetDiv.style.display = ''; 
  }
}

// 1. Listen for the window resizing/dragging
mediaQuery.addEventListener('change', handleScreenChange);

// 2. RUN IMMEDIATELY ON LOAD: Fixes the initial desktop view bug
handleScreenChange(mediaQuery);
/*document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.topnavitem-kenshi');
    const INTENSITY = 35;

    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            
            const rotateX = (-y * INTENSITY).toFixed(1);
            const rotateY = (x * INTENSITY).toFixed(1);

            button.style.setProperty('--rotateX', `${rotateX}deg`);
            button.style.setProperty('--rotateY', `${rotateY}deg`);
        });

        button.addEventListener('mouseleave', () => {
            button.style.removeProperty('--rotateX');
            button.style.removeProperty('--rotateY');
        });
    });
}); 
*/


/*   css:        will-change: transform;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizeLegibility;
            transform: perspective(1000px) translate3d(0,0,0)
                scale(var(--button-scale, 1)) 
                rotateX(var(--rotateX, 0deg)) 
              rotateY(var(--rotateY, 0deg)); */