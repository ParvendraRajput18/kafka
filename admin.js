// admin.js
const kafka = require('./client');  // Import the Kafka instance from client.js

async function init() {
    const admin = kafka.admin();
    console.log("Admin Connecting");
    await admin.connect();  // Use 'await' for asynchronous operations
    console.log("Admin connect success");

    console.log("Creating topic [rider-updates]");
    await admin.createTopics({
        topics: [{  // Corrected 'topic' to 'topics'
            topic: "rider-updates",
            numPartitions: 2,
        }]
    });
    console.log("Topic created success");

    console.log("Disconnecting");
    await admin.disconnect();    
}

init().catch(e => console.error(`Failed to initialize Kafka: ${e.message}`));
