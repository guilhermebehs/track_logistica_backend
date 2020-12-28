import amqp from 'amqplib/callback_api';


export default function publish(queueName: string, data: any){
   
    const rabbitUrl = 'amqp://localhost';
    
    amqp.connect(rabbitUrl, function (error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function (error1, channel) {
            if (error1) {
                throw error1;
            }

            var queue = queueName;

            channel.assertQueue(queue, {
                durable: false
            });
            channel.sendToQueue(queue, Buffer.from(JSON.stringify(data)));
        });

        setTimeout(function () {
            connection.close();
        }, 1000);
    });
}
