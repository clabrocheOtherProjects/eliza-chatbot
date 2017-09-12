$('.submit').click(function () {
  let userinput = $('.userInput').val();
  $(".userInput").val('');
  let sanitizeUserInput = sanitize(userinput);
  const bot = searchAReply(sanitizeUserInput);

  display(userinput, bot);
});

function display (userText, botText) {
  $('.box .user .text').text(userText);
  $('.box .bot .text').text(botText);
}

function sanitize (string) {
  string = string
    .toLowerCase()
    .replace(/-/gi, ' ')
    .replace(/ as /gi, ' ')
    .replace(/ a /gi, ' ')
    .replace(/[^\w\s\d]/gi, '');
  return string.trim();
}

function searchAReply (string) {
  let reply = '';
  for (var i = 0; i < inputData.length; i++) {
    var line = inputData[i];
    for (var j = 0; j < inputData.length; j++) {
      var input = inputData[i][j];
      console.log(input, string);
      if (string.includes(input)) {
        console.log('found', input, string);
        reply += replyData[i][Math.floor(Math.random() * replyData[i].length)];
      }
    }
  }
  if (!reply.length) reply = 'Peut-être bien, peut-être pas...';
  return reply;
}

$(".triggerHelp").click(function() {
  console.log("lkjlkj");
  $(".help").slideToggle("slow");
});
