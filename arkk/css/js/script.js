function formatPrice(number) {
    return number.toLocaleString('da-DK');
  }
  
  function calculateTotal() {
    let total = 0;
    document.querySelectorAll('.checkbox:checked').forEach(el => {
      total += parseFloat(el.getAttribute('data-price')) || 0;
    });
    document.querySelectorAll('.numberInput').forEach(el => {
      const val = parseInt(el.value);
      if (!isNaN(val) && val > 0) {
        const unitPrice = parseFloat(el.getAttribute('data-price'));
        total += unitPrice * val;
      }
    });
    if (document.getElementById('discount').checked) {
      total *= 0.8;
    }
    document.getElementById('totalPrice').textContent = formatPrice(Math.round(total));
  }
  
  function resetAll() {
    document.querySelectorAll('.checkbox').forEach(cb => cb.checked = false);
    document.querySelectorAll('.numberInput').forEach(input => input.value = 0);
    document.getElementById('discount').checked = false;
    calculateTotal();
  }
  
  document.querySelectorAll('.checkbox, .numberInput, #discount').forEach(el => {
    el.addEventListener('input', calculateTotal);
    el.addEventListener('change', calculateTotal);
  });
  
  calculateTotal();
  