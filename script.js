function showProject(id) {
  document.querySelectorAll('.project').forEach(p => {
    p.classList.remove('active');
  });

  document.getElementById(id).classList.add('active');
}

// Show first project by default
showProject('project1');
