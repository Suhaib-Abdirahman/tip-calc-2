console.log("hello");
function calcTip(bill) {
    let tip;

    if (bill >= 50 && bill <= 300)
      tip = bill * 0.15;
    else if (bill > 300)
      tip = bill * 0.20;

    const total = bill + tip;
    return `The bill was ${bill}, the tip was ${tip}, and the total value ${total}`;
  }

  const bill = 289;
  const result = calcTip(bill);
  console.log(result);
