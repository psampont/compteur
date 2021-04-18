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
  document.getElementById('alpha').innerHTML=Math.round(event.alpha);
  document.getElementById('beta').innerHTML=Math.round(event.beta);
  document.getElementById('gamma').innerHTML=Math.round(event.gamma);
  
  if (event.gamma<=-80 || event.gamma>=80) {
    document.getElementById('orientation_status').innerHTML = "ON";
  }
  else {
    document.getElementById('orientation_status').innerHTML = "OFF";
  }
}

function manageMotion(event) {
  document.getElementById('ax').innerHTML=Math.round(event.accelerationIncludingGravity.x);
  document.getElementById('ay').innerHTML=Math.round(event.accelerationIncludingGravity.y);
  document.getElementById('az').innerHTML=Math.round(event.accelerationIncludingGravity.z);
  
  if (event.accelerationIncludingGravity.y >= 8) {
    document.getElementById('acceration_status').innerHTML = "UP";
    if (document.getElementById('orientation_status').innerHTML = "ON") inc();
  }
  else if (event.accelerationIncludingGravity.x >= 8 && event.accelerationIncludingGravity.y < 2) {
    document.getElementById('acceration_status').innerHTML = "DOWN";
    if (document.getElementById('orientation_status').innerHTML = "ON") dec();
  }
  else {
    document.getElementById('acceration_status').innerHTML = "NO";
  }
}


window.addEventListener("deviceorientation", manageOrientation, true);
window.addEventListener("devicemotion", manageMotion, true);
