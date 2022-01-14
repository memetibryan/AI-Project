var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

  function inWords (num) {
    if ((num = num.toString()).length > 9) return 'overflow';
      n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
      str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'million ' : '';
      str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'hundred ' : '';
      str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
      str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
      str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
    return str;
   }

  function formFunction() {
    document. getElementById("display").style.display="block";
    document.getElementById("ldate").innerHTML = document.getElementById("fdate").value;
    document.getElementById("name").innerHTML = document.getElementById("fname").value;
    document.getElementById('lamount').innerHTML = inWords(document.getElementById('amount').value);
    document.getElementById("lacc").innerHTML = document.getElementById("acc").value;

  // new SpeechSynthesisUtterance object
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'en-US';
    utter.text = "The Amount is" + inWords(document.getElementById('amount').value);
    utter.volume = 0.5;

  // event after text has been spoken
    utter.onend = function() {
    alert('CHEQUE WRITTEN SUCCESSFULLY');
  }

  // speak
    window.speechSynthesis.speak(utter);
  }