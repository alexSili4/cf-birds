import fetchIntentionStatus from './fetchIntentionStatus';

async function onPaymentStart(e) {
  const orderIdFieldName = 'order-id';
  const orderAmountFieldName = 'order-amount';
  const paymentDescFieldName = 'payment-description';
  const branchIdFieldName = 'branch-id';

  const widgetData = e.currentTarget;
  const fetchIntentionStatusData = {};

  fetchIntentionStatusData[orderIdFieldName] = widgetData.attributes[orderIdFieldName].nodeValue;
  fetchIntentionStatusData[orderAmountFieldName] = widgetData.attributes[orderAmountFieldName].nodeValue;
  fetchIntentionStatusData[paymentDescFieldName] = widgetData.attributes[paymentDescFieldName].nodeValue;
  fetchIntentionStatusData[branchIdFieldName] = widgetData.attributes[branchIdFieldName].nodeValue;

  fetchIntentionStatus(fetchIntentionStatusData);
}

export default onPaymentStart;
