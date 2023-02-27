import grpc from "@grpc/grpc-js";
import { Product } from "./grpc.js";

const productService = new Product(
  process.env.PRODUCT_SERVICE_HOST + ":" + process.env.PRODUCT_SERVICE_PORT,
  grpc.credentials.createInsecure()
);

export function getProduct(params) {
  return new Promise((res, rej) =>
    productService.GetProductById(params, (error, value) => {
      if (error) rej(error);
      res(value);
    })
  );
}
