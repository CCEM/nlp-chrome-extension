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
  $.ajax({
    url: 'https://reddex.herokuapp.com/inbound',
    method: 'POST',
    data: textToEval
  })
  .then(function(response){
    $grabFromPage.removeClass('neu neg1 neg2 pos1 pos2')
    for(key in response){
      $('.' + key).addClass(function(index){
        if((response[key] <= -0.65) && (settings.showall === true || settings.negative === true)){
           return 'neg2'
        }
        else if((response[key] <= -0.35) && (settings.showall === true || settings.negative === true)) {
          return 'neg1'
        }
        else if((response[key] > 0.65) && (settings.showall === true || settings.positive === true)) {
          return 'pos2'
        }
        else if((response[key] > 0.35) && (settings.showall === true || settings.positive === true)){
          return 'pos1'
        }
        else if((response[key] > -0.35 && response[key] <= 0.35) && (settings.showall === true || settings.neutral === true)){
          return 'neu'
        }
      })
    }
  });
})();
