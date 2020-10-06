const ONE_TO_NINETEEN = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
'seventeen', 'eighteen', 'nineteen'];
const TWENTY_TO_NINETY = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
 'ninety'];

module.exports = function toReadable (number) {
    str = number.toString();
    //0
    if(number === 0) return "zero";
    //1 - 19
    if(number < 20) return ONE_TO_NINETEEN[number];

    switch(str.length){
      case 2://20 - 99
        return str[1] === "0" ? TWENTY_TO_NINETY[str[0]] : `${TWENTY_TO_NINETY[str[0]]} ${ONE_TO_NINETEEN[str[1]]}`;
      case 3://100 - 999
        if(str[2] === "0" && str[1] === "0")
            return `${ONE_TO_NINETEEN[str[0]]} hundred`;
        else if((str[1] + str[2]) < 20)
            return `${ONE_TO_NINETEEN[str[0]]} hundred ${ONE_TO_NINETEEN[Number(str[1] + str[2])]}`;
        else
            return `${ONE_TO_NINETEEN[str[0]]} hundred ${TWENTY_TO_NINETY[str[1]]}` + (str[2] === "0" ? "" : ` ${ONE_TO_NINETEEN[str[2]]}`);
    }
}