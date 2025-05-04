export declare class CloudAMQP {
    private channel;
    private readonly queue;
    private readonly rabbitmqUrl;
    connect(): Promise<void>;
    sendMessage(message: any): Promise<void>;
}
