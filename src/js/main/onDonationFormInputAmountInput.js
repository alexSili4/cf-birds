import validateValue from '/js/validateValue';

function onDonationFormInputAmountInput(e) {
  const regex = /^[0-9]+$/;

  const isValidValue = validateValue({ e, regex });

  if (!isValidValue) {
    return;
  }
}

export default onDonationFormInputAmountInput;
