$(() => {
    const socket = io();

    $('form').submit(() => {
        socket.emit('chat message', $('#message').val());
        $('#message').val('');
        return false;
    });

    socket.on('chat message', msg => {
        $('#messages').append($('<li>').text("User: " + msg));
        window.scrollTo(0, document.body.scrollHeight);
    });

});