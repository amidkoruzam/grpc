import grpc from "@grpc/grpc-js";
import { getOrder } from "./features.js";

const server = new grpc.Server();

server.addService(orderServiceProto.OrderService.service, {
  getOrder,
});

server.bindAsync(
  `0.0.0.0:${process.env.ORDER_SERVICE_PORT}`,
  grpc.ServerCredentials.createInsecure(),
  (error) => {
    if (error) console.error(error);
  }
);
