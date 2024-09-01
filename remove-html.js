// Check if the URL ends with .html
if (window.location.pathname.endsWith('.html')) {
    // Redirect to the URL without .html
    window.location.href = window.location.pathname.replace('.html', '') + window.location.search + window.location.hash;
  }
  
