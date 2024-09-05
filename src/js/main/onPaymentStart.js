import fetchIntentionStatus from './fetchIntentionStatus';

async function onPaymentStart(e) {
  const orderIdFieldName = 'order-id';
  const orderAmountFieldName = 'order-amount';
  const paymentDescFieldName = 'payment-description';

  const widgetData = e.currentTarget;
  const fetchIntentionStatusData = {};

  fetchIntentionStatusData[orderIdFieldName] = widgetData.attributes[orderIdFieldName].nodeValue;
  fetchIntentionStatusData[orderAmountFieldName] = widgetData.attributes[orderAmountFieldName].nodeValue;
  fetchIntentionStatusData[paymentDescFieldName] = widgetData.attributes[paymentDescFieldName].nodeValue;

  fetchIntentionStatus(fetchIntentionStatusData);
}

export default onPaymentStart;
