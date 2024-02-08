/*  hey.js -  1.0.0
 *
 *  File: hey.js
 *  Author: Paulo Nunes
 *  Source: https://github.com/syndicatefx/hey.js
 *  License: MIT
 */


// Append dialog =====================================================================================

function addHey() {

  document.body.insertAdjacentHTML('afterbegin', '<div role="alertdialog" tabindex="0" aria-labelledby="hey-message" id="hey-overlay" class="hey-overlay"><div role="document" tabindex="0" id="hey-box" class="hey-box"><div id="hey-message" class="hey-box__message"></div><div id="hey-actions" class="hey-box__btn-group"></div></div></div>');
  
  // Set keyboard focus only on dialog
  var dialog = document.getElementById("hey-box");
  document.addEventListener("focus", function (event) {
    if (!dialog.contains(event.target)) {
      event.stopPropagation();
      dialog.focus();
    }
  }, true);
}

// Remove dialog =====================================================================================

function removeHey() {

  var heyOverlay = document.getElementById('hey-overlay');
  heyOverlay.parentNode.removeChild(heyOverlay);

}

// Remove dialog on ESC key press ====================================================================

document.addEventListener("keydown", function (event) {

  if (event.keyCode == 27) {
    removeHey()
  }

});

// Alert dialog ======================================================================================

function heyAlert() {
  this.show = function (dialog) {
    addHey();

    document.getElementById('hey-message').innerHTML = dialog;
    document.getElementById('hey-actions').innerHTML = '<button class="hey-button" id="focused" onclick="heyAlert.ok()">OK</button>';
    document.getElementById('focused').focus();
  }
  this.ok = function () {
    removeHey();
  }
}

var heyAlert = new heyAlert();

// Confirm dialog =====================================================================================

function heyConfirm() {
  this.show = function (dialog, op) {
    addHey();

    document.getElementById('hey-message').innerHTML = dialog;
    document.getElementById('hey-actions').innerHTML = '<button class="hey-button hey-button--small" onclick="heyConfirm.yes(\'' + op + '\')">Yes</button> <button class="hey-button hey-button--small" id="focused" onclick="heyConfirm.no()">No</button>';
    document.getElementById('focused').focus();
  }
  this.no = function () {
    removeHey();
  }
  this.yes = function (op) {
    window[op]();
    removeHey();
  }
}

var heyConfirm = new heyConfirm();

// Prompt dialog =======================================================================================

function heyPrompt() {
  this.show = function (dialog, func) {
    addHey();

    document.getElementById('hey-message').innerHTML = dialog;
    document.getElementById('hey-message').innerHTML += '<input class="hey-input" id="heyPrompt-value">';
    document.getElementById('hey-actions').innerHTML = '<button class="hey-button hey-button--small" onclick="heyPrompt.ok(\'' + func + '\')">OK</button> <button class="hey-button hey-button--small" onclick="heyPrompt.cancel()">Cancel</button>';
    document.getElementById('heyPrompt-value').focus();
  }
  this.cancel = function () {
    removeHey();
  }
  this.ok = function (func) {
    var heyPromptValue = document.getElementById('heyPrompt-value').value;
    if(heyPromptValue !== "") {
      window[func](heyPromptValue);
      removeHey();
    } else {
      document.getElementById('heyPrompt-value').classList.add("hey-input--required");
    }
  }
}

var heyPrompt = new heyPrompt();
