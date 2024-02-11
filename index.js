const sliderItems = document.querySelector('.slider-items');
let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % 8; // Cambia 8 al número total de imágenes
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + 8) % 8; // Cambia 8 al número total de imágenes
  updateSlider();
}

function updateSlider() {
  const transformValue = -currentIndex * 40 + '%';
  sliderItems.style.transform = 'translateX(' + transformValue + ')';
}

$(document).ready(function () {
  // Mueve la lógica para abrir el modalAvon a $(document).ready
  $('#modalAvon').on('show.bs.modal', function (e) {
    console.log('avon');
    $.ajax({
      url: '/modals/modalAvon.html',
      dataType: 'html',
      success: function (data) {
        $('#modalAvon .modal-body').html(data);
      },
      error: function (xhr, status, error) {
        console.error('Error al cargar el contenido:', error);
      },
    });
  });
});
