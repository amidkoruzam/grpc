const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const PROTO_PATH = __dirname + "../proto/ecommerce.proto";

const packageDefinition = protoLoader.loadSync(PROTO_PATH);

export const orderServiceProto =
  grpc.loadPackageDefinition(packageDefinition).OrderService;
