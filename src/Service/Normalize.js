import { normalize, schema } from "normalizr";

export default (data, action) => {
  const userSchema = new schema.Entity(action, {}, { idAttribute: "name" });
  const userListSchema = new schema.Array(userSchema);
  return normalize(data, userListSchema);
};
