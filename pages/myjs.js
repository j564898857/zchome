document.addEventListener('DOMContentLoaded', (event) => {      const button0 = document.getElementById('button0');	const button1 = document.getElementById('button1');      const button2 = document.getElementById('button2');	const button3 = document.getElementById('button3'); 	button0.addEventListener('click', function() {         window.location.href = 'http://14.117.244.34:5681/zchome/common/';     });	    button1.addEventListener('click', function() {         window.location.href = 'http://14.117.244.34:5681/';     });        button2.addEventListener('click', function() {           window.location.href = 'http://192.168.0.152:8080';      });      button3.addEventListener('click', function() {           window.open('http://192.168.0.152:8080', '_blank');      });  });