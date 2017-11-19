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
      <a class="nav-link" href="#${project.label}" data-template="${project.label}">${project.label}</a>
    </li>`);
  });

  // SPA Routing allow browser back and forward
  $(window).on('hashchange load', function() {
    if (window.location.hash) {
      var partial = window.location.hash.replace('#', '');
      if (partial === 'Home') {
        $('#page-title').html(mainHeader);
      } else {
        $('#page-title').text(partial);
      }
      $('#main').load(`/partials/${partial}.html`);
    } else {
      $('#main').load(`/partials/home.html`);
    }
  });
});
