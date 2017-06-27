var socket = io.connect('http://localhost:4000');

var message = document.getElementById('message'),
	handle = document.getElementById('handle'),
	btn = document.getElementById('send'),
	feedback = document.getElementById('feedback'),
	output = document.getElementById('output');

	btn.addEventListener('click',function(){
		socket.emit('chat',{
			message:message.value,
			handle:handle.value
		});
	});

	message.addEventListener('keypress',function(){
		socket.emit('typing',handle.value);
	});

	socket.on('chat',function(data){
			feedback.innerHTML = '';
			output.innerHTML +='<p><strong>'+data.handle+':</strong>'+data.message+'</p>';
			message.value = '';
			handle.value = '';
	});

	socket.on('typing',function(data){
		feedback.innerHTML = '<p><em>' + data +'is typing a message ...</em></p>';
	});
