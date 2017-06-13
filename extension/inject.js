(function() {
  let $grabFromPage = $('div.commentarea div.md')
  let textToEval = {};
  $grabFromPage.addClass(function(index){
    return 'reddex' + index;
  });
  $grabFromPage.each(function(index){
    textToEval[$grabFromPage[index].className.split(' ')[1]] = $grabFromPage[index].innerText;
  });
  console.log(textToEval)
  $.ajax({
    url: 'https://reddex.herokuapp.com/inbound',
    method: 'POST',
    data: textToEval
  })
  .then(console.log('hi'))
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
  // $.post('https://reddex.herokuapp.com/inbound', textToEval, function(response){
  //   console.log(response)
  //   for(key in response){
  //     $('.' + key).addClass(function(index){
  //       if(response[key] <= -.3){
  //         return 'neg1'
  //       }
  //       else if(response[key] > 0.3){
  //         return 'pos1'
  //       }
  //       else{
  //         return 'neu'
  //       }
  //     })
  //   }
  // });
})();
