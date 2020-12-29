var bill = document.querySelector(".bill");
var paid = document.querySelector(".paid");
var balance = document.querySelector(".balance");
var result = document.querySelector(".result");
var form = document.querySelector(".form1");
var dB = {
  2000: 0,
  500: 0,
  200: 0,
  100: 0,
  50: 0,
  20: 0,
  10: 0,
  5: 0,
  2: 0,
  1: 0
};

balance.addEventListener("click", function () {
  dB = {
    2000: 0,
    500: 0,
    200: 0,
    100: 0,
    50: 0,
    20: 0,
    10: 0,
    5: 0,
    2: 0,
    1: 0
  };
  var billcost = parseInt(bill.value, 10);
  var paidcost = parseInt(paid.value, 10);
  var rem = 0;
  var quot = 0;
  var newq = 0;
  var bal = paidcost - billcost;
  result.innerText = "";
  if (billcost <= paidcost) {
    balance.innerText = bal + " ₹";
    if (bal !== 0) {
      if (bal >= 2000) {
        quot = bal / 2000;
        newq = parseInt(quot, 10);
        rem = bal % 2000;
        dB[2000] = newq;
        bal = rem;
      }
      if (500 <= bal && bal < 2000) {
        quot = bal / 500;
        newq = parseInt(quot, 10);
        rem = bal % 500;
        dB[500] = newq;
        bal = rem;
      }
      if (200 <= bal && bal < 500) {
        quot = bal / 200;
        newq = parseInt(quot, 10);

        rem = bal % 200;
        dB[200] = newq;
        bal = rem;
      }
      if (100 <= bal && bal < 200) {
        quot = bal / 100;
        newq = parseInt(quot, 10);
        rem = bal % 100;
        dB[100] = newq;
        bal = rem;
      }
      if (50 <= bal && bal < 100) {
        quot = bal / 50;
        newq = parseInt(quot, 10);
        rem = bal % 50;
        dB[50] = newq;
        bal = rem;
      }
      if (20 <= bal && bal < 50) {
        quot = bal / 20;
        newq = parseInt(quot, 10);
        rem = bal % 20;
        dB[20] = newq;
        bal = rem;
      }
      if (10 <= bal && bal < 20) {
        quot = bal / 10;
        newq = parseInt(quot, 10);
        rem = bal % 10;
        dB[10] = newq;
        bal = rem;
      }
      if (5 <= bal && bal < 10) {
        quot = bal / 5;
        newq = parseInt(quot, 10);
        rem = bal % 5;
        dB[5] = newq;
        bal = rem;
      }
      if (2 <= bal && bal < 5) {
        quot = bal / 2;
        newq = parseInt(quot, 10);
        rem = bal % 2;
        dB[2] = newq;
        bal = rem;
      }
      if (bal === 1) {
        quot = bal / 1;
        newq = parseInt(quot, 10);
        rem = bal % 1;
        dB[1] = newq;
        bal = rem;
      }
    }

    var newValues = Object.values(dB);
    var newKeys = Object.keys(dB);

    for (var i = 0; i < newKeys.length; i++) {
      if (newValues[i] !== 0) {
        //console.log(newKeys[i] +" = "+ newValues[i])
        var list = document.createElement("pre");
        var text = document.createTextNode(
          " ₹" + newKeys[i] + "  =     " + newValues[i]
        );
        list.appendChild(text);
        result.appendChild(list);
      }
    }
  } else {
    bal = paidcost - billcost;
    balance.innerHTML = "BALANCE";
    result.innerText = "";

    form.reset();
    alert("Please pay remaining Amount:" + bal + "₹");
  }
});
