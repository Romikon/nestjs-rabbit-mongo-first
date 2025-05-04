"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const dotenv = require("dotenv");
const path_1 = require("path");
dotenv.config({ path: (0, path_1.join)(__dirname, '../../.env') });
const Config = () => {
    return {
        port: parseInt(process.env.PORT || '3000', 10),
        rabbitMQQueue: 'test',
        rabbitMQUrl: 'amqps://nbedmqcr:V1iiXGjjcvVwpc29rcYw_rstIz8_vP-m@kebnekaise.lmq.cloudamqp.com/nbedmqcr',
    };
};
exports.Config = Config;
//# sourceMappingURL=config.js.map