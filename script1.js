let selectedSkinType = '';

document.getElementById('drySkin').onclick = function () {
  selectedSkinType = 'Dry Skin';
  alert('You selected: ' + selectedSkinType);
};

document.getElementById('sensitiveSkin').onclick = function () {
  selectedSkinType = 'Sensitive Skin';
  alert('You selected: ' + selectedSkinType);
};

document.getElementById('oilySkin').onclick = function () {
  selectedSkinType = 'Oily Skin';
  alert('You selected: ' + selectedSkinType);
};

document.getElementById('normalSkin').onclick = function () {
  selectedSkinType = 'Normal Skin';
  alert('You selected: ' + selectedSkinType);
};

document.getElementById('combinedSkin').onclick = function () {
  selectedSkinType = 'Combined Skin';
  alert('You Selected: ' + selectedSkinType);
};

document.getElementById('nextSkin').onclick = function () {
  if (selectedSkinType === '') {
    alert('Please selected a skin type');
  } else {
    document.getElementById('skinTypeSelection').style.display = 'none';
    document.getElementById('concernSection').style.display = 'block';
  }
};

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('breakouts-btn').onclick = function () {
    // Show alert
    let concernSection = 'Breakouts';
    console.log('Breakouts button clicked!');
    alert('You Selected: ' + concernSection);

    // Hide all products
    document.querySelectorAll('.product-item').forEach(function (item) {
      item.classList.remove('show');
    });

    // Show only the products with class 'breakout-product'
    document.querySelectorAll('.breakout-product').forEach(function (item) {
      item.classList.add('show');
    });

    document.getElementById('product-section').style.display = 'block';

    // Optionally, scroll smoothly to the product section
    document.getElementById('product-section').scrollIntoView({
      behavior: 'smooth',
    });
  };
});
