(function() {
  let $grabFromPage = $('div.commentarea div.md p')
  let textToEval = {};
  $grabFromPage.addClass(function(index){
    return 'reddex' + index;
  });
  // console.log($grabFromPage)
  $grabFromPage.each(function(index){
    textToEval[$grabFromPage[index].className] = $grabFromPage[index].innerText;
  });
  console.log(textToEval)
  $.post('https://reddex.herokuapp.com/inbound', textToEval, function(response){
    console.log(response)
  });
  // document.body.style.backgroundColor="red";

})();
