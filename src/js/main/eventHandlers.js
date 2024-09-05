import refs from './refs';
import onDonationFormSubmit from './onDonationFormSubmit';
import onPaymentStart from './onPaymentStart';
import onDonationFormInput from './onDonationFormInput';
import onDonationFormAmountAddBtnListClick from './onDonationFormAmountAddBtnListClick';
import onDonationFormInputAmountInput from './onDonationFormInputAmountInput';

refs.donationFormAmountAddBtnList.addEventListener('click', onDonationFormAmountAddBtnListClick);

refs.donationForm.addEventListener('input', onDonationFormInput);

refs.donationForm.addEventListener('submit', onDonationFormSubmit);

refs.paymentsWidget.addEventListener('paymentStarted', onPaymentStart);

refs.donationFormInputAmount.addEventListener('input', onDonationFormInputAmountInput);
