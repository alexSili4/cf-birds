import refs from './refs';

const fetchIntentionStatus = async (data) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };

  try {
    await fetch('/intention-status', options);
  } catch (error) {
    console.log(error);
  } finally {
    refs.paymentsWidget['pre-payment-completed'] = 'true';
  }
};

export default fetchIntentionStatus;
