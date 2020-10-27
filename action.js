/*ASSIGNMENT
Rifate (con immagini a piacere e con il vostro gusto grafico) lo slider di immagini in jQuery come l'abbiamo visto stamattina.
Aggiungete anche i pallini che si "muovono" di pari passo con le immagini.
BONUS: cliccando su un pallino, si attiva l'immagine corrispondente.
Ad esempio: sto visualizzando la prima immagine, clicco sul quarto pallino e si attiva direttamente la quarta immagine
(oltre al pallino corrispondente ovviamente!)
*/

$(document).ready(function() {
  // --------------------- Prev arrow ---------------------
  // Clicking on prev-arrow to switch to the previous picture
  $('.prev > i').click(function() {
    // Storing current picture position (of ".active") in a variable
    var current_img = $('.active');
    // Hiding current picture
    current_img.removeClass('active');
    // Checking if there is any previous picture
    if (current_img.prev().length) {
      // Showing previous picture
      current_img.prev().addClass('active');
    } else {
      // Showing last picture (restart from the end)
      $('.slides > img:last-child').addClass('active');
    }
  });

  // --------------------- Next arrow ---------------------
  // Clicking on next-arrow to switch to the following picture
  $('.next > i').click(function() {
    // Storing current picture position (of ".active") in a variable
    var current_img = $('.active');
    // Hiding current picture
    current_img.removeClass('active');
    if(current_img.next().length) {
      // Showing following picture
      current_img.next().addClass('active');
    } else {
      // Showing the first picture (restart from the beginning)
      $('.slides > img:first-child').addClass('active');
    }
  });
});
