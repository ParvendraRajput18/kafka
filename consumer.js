
const kafka = require("./client")

async function init() {
    const consumer = kafka.consumer({groupId: "user-1"});
    console.log("connecting the consumer");
    await consumer.connect();
    await consumer.subscribe({topics: ["rider-updates"]})
    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
          console.log(
            `${group}: [${topic}]: PART:${partition}:`,
            message.value.toString()
          );
        },
      });
    
    
    await consumer.disconnect();
    console.log("Disconnected the consumer");

}
init();