// Saves options to chrome.storage
function save_options() {
  var positive = document.getElementById('positive').checked;
  var neutral = document.getElementById('neutral').checked;
  var negative = document.getElementById('negative').checked;
  var all = document.getElementById('all').checked;
  console.log(positive, neutral, negative, all);
  // var color = document.getElementById('color').value;
  // var likesColor = document.getElementById('like').checked;
  chrome.storage.sync.set({
    showPositive: positive,
    showNeutral: neutral,
    showNegative: negative,
    showAll: all
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value of show all.
  chrome.storage.sync.get({
    showPositive: false,
    showNeutral: false,
    showNegative: false,
    showAll: true
  }, function(items) {
    document.getElementById('positive').checked = items.showPositive;
    document.getElementById('neutral').checked = items.showNeutral;
    document.getElementById('negative').checked = items.showNegative;
    document.getElementById('all').checked = items.showAll;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);