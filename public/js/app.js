$(() => {
    const user = prompt("Whats your name?");
    const socket = io();

    $('form').submit(() => {
        socket.emit('chat message', {"user": user ,"msg": $('#message').val()});
        $('#message').val('');
        return false;
    });

    socket.on('chat message', data => {
        $('#messages').append($('<li>').text(data.user+": " + data.msg));
        window.scrollTo(0, document.body.scrollHeight);
    });

});