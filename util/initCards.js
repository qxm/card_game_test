export const CARD_PAIRS_VALUE = 6

export default (pair) => {
    var values = [];
    for (var i=1; i<=100; i++) {
        values.push(i);
    }
    values.sort(() => Math.random() - 0.5);
    var result = [];
    for (var i = 0; i<pair*2;i+=2) {
       var value = values[i];
       result.push({id: i, value:value, displayValue: '?', flipState: 0});
       result.push({id: i+1, value:value, displayValue: '?', flipState: 0});
    }

    return result.sort(() => Math.random() - 0.5);

}




