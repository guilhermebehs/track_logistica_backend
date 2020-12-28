import io from './socket';
import amqp from 'amqplib/callback_api';


 function consume(){
    amqp.connect('amqp://localhost', function (error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function (error1, channel) {
        if (error1) {
            throw error1;
        }
        var queue = 'track';

        channel.assertQueue(queue, {
            durable: false
        });

       
        channel.consume(queue, function (data: any) {
            const client = io();
            
            const {latitude,longitude} = JSON.parse(data.content.toString())
            //Socket Trigger All Clients
            client.emit("updateData", {latitude,longitude});
        }, {
            noAck: true
        });
    });
});
}

consume()