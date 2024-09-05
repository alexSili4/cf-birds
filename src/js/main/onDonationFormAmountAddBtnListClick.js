import refs from './refs';

function onDonationFormAmountAddBtnListClick(e) {
  const targetBtn = e.target.closest('.js-donation-form-amount-add-btn');
  targetBtn.blur();

  const { amount } = targetBtn.dataset;
  const { value: donationFormInputAmountValue } = refs.donationFormInputAmount;
  const updatedAmountValue = Number(donationFormInputAmountValue) + Number(amount);

  refs.donationFormInputAmount.value = updatedAmountValue;

  const amountValue = Number(refs.donationFormInputAmount.value);

  const payDisabledAttributeValue = amountValue ? 'false' : 'true';
  refs.paymentsWidget.setAttribute('pay-disabled', payDisabledAttributeValue);

  const orderAmountAttributeValue = amountValue ? String(amountValue) : '1';
  refs.paymentsWidget.setAttribute('order-amount', orderAmountAttributeValue);
}

export default onDonationFormAmountAddBtnListClick;
