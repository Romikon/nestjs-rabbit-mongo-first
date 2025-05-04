import * as dotenv from 'dotenv';
import { join } from 'path';

dotenv.config({ path: join(__dirname, '../../.env') });

export const Config = () => {
  return {
    port: parseInt(process.env.PORT || '3000', 10),
    rabbitMQQueue: 'test',
    rabbitMQUrl: 'amqps://nbedmqcr:V1iiXGjjcvVwpc29rcYw_rstIz8_vP-m@kebnekaise.lmq.cloudamqp.com/nbedmqcr',
  };
}
