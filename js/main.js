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
  
  if (event.alpha==270 && event.beta==90 && event.gamma==0) {
    document.getElementById('status').innerHTML = "UP";
    inc();
  }
  else if (event.alpha==0 && event.beta==0 && event.gamma==-90) {
    document.getElementById('orientation_status').innerHTML = "DOWN";
    dec();
  }
  else {
    document.getElementById('orientation_status').innerHTML = "NO";
  }
}

function manageMotion(event) {
  document.getElementById('ax').innerHTML=Math.round(event.accelerationIncludingGravity.x);
  document.getElementById('ay').innerHTML=Math.round(event.accelerationIncludingGravity.y);
  document.getElementById('az').innerHTML=Math.round(event.accelerationIncludingGravity.z);
  
  if (event.accelerationIncludingGravity.x >= 8) {
    if (event.accelerationIncludingGravity.y >= 8) {
      document.getElementById('acceration_status').innerHTML = "UP";
      inc();
    }
    else if (event.accelerationIncludingGravity.x >= 8 && event.accelerationIncludingGravity.y < 2) {
      document.getElementById('acceration_status').innerHTML = "DOWN";
      dec();
    }
    else {
      document.getElementById('acceration_status').innerHTML = "ON";
    }
  }
  else {
    document.getElementById('acceration_status').innerHTML = "OFF";
  }
}


window.addEventListener("deviceorientation", manageOrientation, true);
window.addEventListener("devicemotion", manageMotion, true);
