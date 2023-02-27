import { getProduct } from "./api";

export async function getOrder(call, callback) {
  const params = call.request;
  const products = await getProduct("param");

  callback({ msg: "hello" });
}
