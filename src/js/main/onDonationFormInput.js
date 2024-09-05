import refs from './refs';

function onDonationFormInput(e) {
  const donationFormData = {};
  const formData = new FormData(e.currentTarget);
  formData.forEach((value, key) => {
    donationFormData[key] = value;
  });

  const amountValue = Number(donationFormData.sum);

  const payDisabledAttributeValue = amountValue ? 'false' : 'true';
  refs.paymentsWidget.setAttribute('pay-disabled', payDisabledAttributeValue);

  const orderAmountAttributeValue = amountValue ? String(amountValue) : '1';
  refs.paymentsWidget.setAttribute('order-amount', orderAmountAttributeValue);

  const paymentDescAttributeValue = donationFormData.firstName ? donationFormData.firstName : '';
  refs.paymentsWidget.setAttribute('payment-description', paymentDescAttributeValue);
}

export default onDonationFormInput;
