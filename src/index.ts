let firstReceiver;

function getIndexForReceiver(listOfPersons) {
  const randomNumber = Math.floor(Math.random() * (listOfPersons.length - 1));

  if (firstReceiver === randomNumber) {
    return getIndexForReceiver(listOfPersons);
  }

  return randomNumber;
}


export function secretSanta(listOfPersons: string[]) {
  if (listOfPersons.length < 2) {
    throw new Error('Not enough participants')
  }

  const indexReceiver = getIndexForReceiver(listOfPersons);
  const listOfReceiverIds = [indexReceiver];

  for (let i = 1; i < listOfPersons.length; i++) {
    while (true) {
      const newIndexReceiver = getIndexForReceiver(listOfPersons);

      if (!listOfReceiverIds.includes(newIndexReceiver)) {
        if (newIndexReceiver !== i) {
          listOfReceiverIds.push(newIndexReceiver);
          break;
        }
      }
    }
  }


  return listOfPersons.reverse();
}
