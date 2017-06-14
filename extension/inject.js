(function() {
  chrome.storage.sync.get({
    showPositive: false,
    showNeutral: false,
    showNegative: false,
    showAll: true
  }, function(items) {
    console.log(items.showPositive, items.showNeutral, items.showNegative, items.showAll);
  });
  let $grabFromPage = $('div.commentarea div.md')
  let $url = window.location.pathname;
  let textToEval = {};
  $grabFromPage.addClass(function(index){
    return 'reddex' + index;
  });
  $grabFromPage.each(function(index){
    textToEval[$grabFromPage[index].className.split(' ')[1]] = $grabFromPage[index].innerText;
  });
  textToEval.url = $url.split('/')[2]
  console.log(textToEval)
  $.ajax({
    url: 'https://reddex.herokuapp.com/inbound',
    method: 'POST',
    data: textToEval
  })
  .then(function(response){
    console.log(response)
    for(key in response){
      $('.' + key).addClass(function(index){
        if(response[key] <= -.3){
           return 'neg1'
        }
        else if(response[key] > 0.3){
          return 'pos1'
        }
        else{
          return 'neu'
        }
      })
    }
  });
})();
