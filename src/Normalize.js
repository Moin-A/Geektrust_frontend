import { normalize, schema } from "normalizr";

const userSchema = new schema.Entity("vehicle", {}, { idAttribute: "name" });
const userListSchema = new schema.Array(userSchema);

export default (data) => {
  return normalize(data, userListSchema);
};
