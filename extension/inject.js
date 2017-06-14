(function() {
  settings = {}
  chrome.storage.sync.get({
    showPositive: false,
    showNeutral: false,
    showNegative: false,
    showAll: true
  }, function(items) {
    settings.positive = items.showPositive;
    settings.neutral = items.showNeutral;
    settings.negative = items.showNegative;
    settings.showall = items.showAll;
  });
  console.log(settings)
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
        if((response[key] <= -.3) && (settings.showall === true || settings.negative === true)){
           return 'neg1'
        }
        else if((response[key] > 0.3) && (settings.showall === true || settings.positive === true)){
          return 'pos1'
        }
        else if((response[key] > -.3 && response[key] <= 0.3) && (settings.showall === true || settings.neutral === true)){
          return 'neu'
        }
      })
    }
  });
})();
