$(document).ready(function() {

    /////////////////////////
   /// Handle navigation
  /////////////////////////

  // Load front page
  const mainHeader = '<img src="/assets/company-logos/gdt-logo.png" alt="GDT Logo"> Agile Operations';
  $('#main').load(`/partials/Home.html`);
  $('#page-title').html(mainHeader);

  // Generate navigation bar
  projects.forEach(project => {
    $('#navbar').append(`<li class="nav-item">
      <a class="nav-link" href="#" data-template="${project.label}">${project.label}</a>
    </li>`);
  })

  // Load each partial into main page
  $('[data-template]').click(function(e) {
    e.preventDefault();
    let partial = $(this).data('template');
    if (partial === 'Home') {
      $('#page-title').html(mainHeader);
    } else {
      $('#page-title').text(partial);
    }
    $('#main').load(`/partials/${partial}.html`);
  });

});