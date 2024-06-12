document.addEventListener('DOMContentLoaded', function () {
  const img = document.querySelector('.productImage')

  const updateImage = () => {
    if (window.matchMedia('(max-width: 570px)').matches) {
      img.src = './images/image-product-mobile.jpg'
    } else {
      img.src = './images/image-product-desktop.jpg' // Change to your desktop image path
    }
  }

  updateImage()

  window.addEventListener('resize', updateImage)
})
