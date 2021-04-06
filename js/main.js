/**
 * Increment counter
 */
function inc() {
  document.getElementById('counter').innerHTML++;
}

/**
 * Decrement counter
*/
function dec() {
  document.getElementById('counter').innerHTML--;
}

/**
 * Get spacial orientation
*/
function manageOrientation(event) {
  document.getElementById('alpha').innerHTML=event.alpha;
  document.getElementById('beta').innerHTML=event.beta;
  document.getElementById('gamma').innerHTML=event.gamma;
  
  if (event.alpha==270 && event.beta==90 && event.gamma==0) {
    document.getElementById('status').innerHTML = "UP";
    inc();
  }
  else if (event.alpha==0 && event.beta==0 && event.gamma==-90) {
    document.getElementById('status').innerHTML = "DOWN";
    dec();
  }

  else {
    document.getElementById('status').innerHTML = "NO";
  }
}

function manageMotion(event) {
  document.getElementById('ax').innerHTML=event.accelerationIncludingGravity.x;
  document.getElementById('ay').innerHTML=event.accelerationIncludingGravity.y;
  document.getElementById('az').innerHTML=event.accelerationIncludingGravity.z;
}

window.addEventListener("deviceorientation", manageOrientation, true);
window.addEventListener("devicemotion", manageMotion, true);
