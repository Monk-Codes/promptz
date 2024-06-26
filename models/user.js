import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
 email: {
  type: String,
  required: [true, "Email must be provided"],
  unique: [true, "Email is required"],
 },
 username: {
  type: String,
  required: [true, "Username must be provided"],
  match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"],
 },
 image: {
  type: String,
 },
});
const User = models.User || model("User", UserSchema);
export default User;
