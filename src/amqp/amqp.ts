import * as amqp from 'amqplib';
import { Config } from '../config/config';

export class CloudAMQP {
  private channel: amqp.Channel;
  private readonly queue = Config().rabbitMQQueue;
  private readonly rabbitmqUrl = Config().rabbitMQUrl;

  async connect() {
    const connection = await amqp.connect(this.rabbitmqUrl);
    this.channel = await connection.createChannel();
    await this.channel.assertQueue(this.queue, { durable: true });
  }

  async sendMessage(message: any) {
    await this.connect();
    const messageBuffer = Buffer.from(JSON.stringify(message));
    this.channel.sendToQueue(this.queue, messageBuffer);
  }
}