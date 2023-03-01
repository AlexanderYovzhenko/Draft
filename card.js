const numberCard = '1111222233334444';

const formatLookNumbersCard = (numberCard) => {
  const arrNumbersCard = numberCard.split('');

  const result = arrNumbersCard.map((number, index) => {
    
    return index === 4 ? ' ' + number :
           index === 8 || index === 12 ? '  *' : 
           index > 8 ? '*' :
           number;                                 

  });

  return result.join('');
}

console.log(formatLookNumbersCard(numberCard));  