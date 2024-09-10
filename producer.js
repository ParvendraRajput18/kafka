const kafka = require('./client');

async function init() {
    const producer = kafka.producer();
    console.log("connceting the producer");
    await producer.connect();
    console.log("Procuder connceted successfully");

    await producer.send({
        topic: "rider-updates",
        messages: [
            {
                key: 'location-update',
                value: JSON.stringify({ name: 'tony', loc: "south" }),


            }

        ]
    })
    await producer.disconnect();
    console.log("Producer disconncet");
}
init();
