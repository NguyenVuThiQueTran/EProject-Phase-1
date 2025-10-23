require('dotenv').config();

module.exports = {
    mongoURI: process.env.MONGODB_ORDER_URI || 'mongodb://mymongodb:27017/order_db',
    rabbitMQURI: process.env.RABBITMQ_URL || 'amqp://rabbitmq',
    rabbitMQQueue: 'orders',
    port: process.env.PORT || 3002
};
