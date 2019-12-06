/**
 * port:  port server
 * host: host server
 * username: username for authentication
 * password: username's password for authentication
 * events: this parameter determines whether events are emited.
 **/

var ami = new require('asterisk-manager')('5038','192.168.0.73','hito','asldjk1111sdf1234129867sdlhjkgab123123evlwevlahqwa90a8w798a', true);
// In case of any connectiviy problems we got you coverd.
ami.keepConnected();

ami.on()
ami.on('managerevent', function(evt) {
    if(evt.event === 'QueueCallerAbandon'){
        console.log('Ligacao abandonada -> ');
        console.log(evt);
    }

});
