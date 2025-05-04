"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudAMQP = void 0;
const amqp = require("amqplib");
const config_1 = require("../config/config");
class CloudAMQP {
    channel;
    queue = (0, config_1.Config)().rabbitMQQueue;
    rabbitmqUrl = (0, config_1.Config)().rabbitMQUrl;
    async connect() {
        const connection = await amqp.connect(this.rabbitmqUrl);
        this.channel = await connection.createChannel();
        await this.channel.assertQueue(this.queue, { durable: true });
    }
    async sendMessage(message) {
        await this.connect();
        const messageBuffer = Buffer.from(JSON.stringify(message));
        this.channel.sendToQueue(this.queue, messageBuffer);
    }
}
exports.CloudAMQP = CloudAMQP;
//# sourceMappingURL=amqp.js.map