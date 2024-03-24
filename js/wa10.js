document.addEventListener("DOMContentLoaded", function() {
    var customName = document.getElementById('customname');
    var randomize = document.querySelector('.randomize');
    var story = document.querySelector('.story');
    var ukCheckbox = document.getElementById("uk");
  
    function randomValueFromArray(array) {
      return array[Math.floor(Math.random() * array.length)];
    }
  
    var storyText = 'The clock struck midnight, so :insertx: decided to explore. As they wandered into :inserty:, they stumbled upon something unexpected. Suddenly, :insertz:. Everyone was astonished, but considering that :insertx: had a pet dragon, it wasn\'t entirely surprising.';
  
    var insertX = ['Alice', 'The Wizard', 'The Pirate King'];
    var insertY = ['the enchanted forest', 'the abandoned castle', 'the mystical cave'];
    var insertZ = ['the trees began to sing', 'a rainbow appeared in the sky', 'a talking rabbit emerged from a hole'];
  
    randomize.addEventListener('click', result);
  
    function result() {
      var newStory = storyText;
      var xItem = randomValueFromArray(insertX);
      var yItem = randomValueFromArray(insertY);
      var zItem = randomValueFromArray(insertZ);
  
      newStory = newStory.replace(/:insertx:/g, customName.value);
      newStory = newStory.replace(':inserty:', yItem);
      newStory = newStory.replace(':insertz:', zItem);
  
      if (ukCheckbox.checked) {
        var weight = Math.round(21) + ' stone';
        var temperature = Math.round(34) + ' centigrade';
        newStory = newStory.replace('300 pounds', weight);
        newStory = newStory.replace('94 fahrenheit', temperature);
      }
  
      story.textContent = newStory;
      story.style.visibility = 'visible';
    }
  });
  