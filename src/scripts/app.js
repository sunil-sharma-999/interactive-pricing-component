const priceComp = document.querySelector('.price-comp');
const views = priceComp.querySelector('.pv span');
const price = priceComp.querySelector('.price span');
const range = priceComp.querySelector('#range');
const discount = priceComp.querySelector('.year span');
const toggleBtn = priceComp.querySelector('.toggle');
const t = toggleBtn.querySelector('.t');
const subBtn = document.querySelector('.btn');
const modal = document.querySelector('.modal');

range.value = '3';
range.addEventListener('input', (e) => {
  const val = Number(range.value);
  switch (val) {
    case 1:
      views.textContent = '$10K';
      price.textContent = '$8.00';
      break;
    case 2:
      views.textContent = '$50K';
      price.textContent = '$12.00';
      break;
    case 3:
      views.textContent = '$100K';
      price.textContent = '$16.00';
      break;
    case 4:
      views.textContent = '$500K';
      price.textContent = '$24.00';
      break;
    case 5:
      views.textContent = '$1M';
      price.textContent = '$36.00';
      break;
    default:
      views.textContent = '$100K';
      price.textContent = '$16.00';
  }
});

toggleBtn.addEventListener('click', () => {
  const tVal = toggleBtn.dataset.value;
  t.classList.toggle('month');
  toggleBtn.classList.toggle('month');
  tVal == 'month'
    ? (toggleBtn.dataset.value = 'year')
    : (toggleBtn.dataset.value = 'month');
});

subBtn.addEventListener('click', (e) => {
  const prcieVal = Number(price.textContent.split('$').join('').trim());
  const viewsVal = views.textContent;
  const billType = toggleBtn.dataset.value;
  const discountVal =
    billType == 'month' ? 0 : Number(discount.textContent.replace(/\D/g, ''));
  const totalBill = discountVal
    ? (prcieVal * (100 - discountVal)) / 100
    : prcieVal;
  const data = {
    views: viewsVal,
    price: `$${prcieVal}`,
    'bill-type': billType,
    discount: `${discountVal}%`,
    total: `$${totalBill}`,
  };
  console.log(data);
  modal.style.display = 'flex';
});

modal.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.querySelector('.close').addEventListener('click', () => {
  modal.style.display = 'none';
});
