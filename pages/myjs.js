document.addEventListener('DOMContentLoaded', (event) => {      const button1 = document.getElementById('button1');      const button2 = document.getElementById('button2');	const button3 = document.getElementById('button3');         button1.addEventListener('click', function() {         window.location.href = 'http://14.117.218.67:5681/';     });        button2.addEventListener('click', function() {           window.location.href = 'http://192.168.0.152:8080';      });      button3.addEventListener('click', function() {           window.open('http://192.168.0.152:8080', '_blank');      });  });