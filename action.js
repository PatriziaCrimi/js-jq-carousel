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
    // Storing current circle position (full circle) in a variable
    var current_circle = $('.circles > .fas');
    // Hiding current picture
    current_img.removeClass('active');
    // Emptying the current full circle
    current_circle.toggleClass('fas far');
    // Checking if there is any previous picture
    if (current_img.prev().length) {
      // Showing previous picture
      current_img.prev().addClass('active');
      // Selecting the corresponding previous circle (make it full)
      current_circle.prev().toggleClass('fas far');
    } else {
      // Showing last picture (restart from the end)
      $('.slides > img:last-child').addClass('active');
      // Selecting the corresponding last circle (make it full)
      $('.circles > i:last-child').toggleClass('fas far');
    }
  });

  // --------------------- Next arrow ---------------------
  // Clicking on next-arrow to switch to the following picture
  $('.next > i').click(function() {
    // Storing current picture position (of ".active") in a variable
    var current_img = $('.active');
    // Storing current circle position (full circle) in a variable
    var current_circle = $('.circles > .fas');
    // Hiding current picture
    current_img.removeClass('active');
    // Emptying the current full circle
    current_circle.toggleClass('fas far');
    // Checking if there is any following picture
    if(current_img.next().length) {
      // Showing following picture
      current_img.next().addClass('active');
      // Selecting the corresponding following circle (make it full)
      current_circle.next().toggleClass('fas far');
    } else {
      // Showing the first picture (restart from the beginning)
      $('.slides > img:first-child').addClass('active');
      // Selecting the corresponding first circle (make it full)
      $('.circles > i:first-child').toggleClass('fas far');
    }
  });
});
