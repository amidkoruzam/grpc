import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
import { URL } from "url";

const PROTO_PATH =
  new URL(".", import.meta.url).pathname + "../proto/ecommerce.proto";

const packageDefinition = protoLoader.loadSync(PROTO_PATH);

export const ecommerceDescriptor =
  grpc.loadPackageDefinition(packageDefinition);

export const { Product } = ecommerceDescriptor.ecommerce;
