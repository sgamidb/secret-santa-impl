let firstReceiver: number;

function getIndexForReceiver(listOfPersons: string[]): number {
  const randomNumber = Math.round(Math.random() * (listOfPersons.length - 1));

  if (firstReceiver === randomNumber) {
    return getIndexForReceiver(listOfPersons);
  }

  return randomNumber;
}


function generation(listOfPersons: string[], indexReceiver: number) {
  const listOfReceiverIds = [indexReceiver];

  for (let i = 1; i < listOfPersons.length; i++) {

    if (listOfPersons.length -1 === i && !listOfReceiverIds.includes(i)) {
      return null;
    }

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
  return listOfReceiverIds;
}

export function secretSanta(listOfPersons: string[]) {
  if (listOfPersons.length < 2) {
    throw new Error('Not enough participants')
  }

  const indexReceiver = getIndexForReceiver(listOfPersons);
  let outputList = null;

  while (outputList === null) {
    outputList = generation(listOfPersons, indexReceiver);
  }

  return outputList.map((index) => listOfPersons[index]);
}
