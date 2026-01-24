function showProject(id) {
  document.querySelectorAll('.project').forEach(p => {
    p.classList.remove('active');
  });

  document.getElementById(id).classList.add('active');
}

function openLightbox(img) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  lightboxImg.src = img.src;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

showProject('project1');

