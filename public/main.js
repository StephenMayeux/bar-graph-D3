$(document).ready(function() {
  $.getJSON(
    "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json",
    function(data) {
      const dataset = data.data;

      document.write(dataset);
    }
  );
});
