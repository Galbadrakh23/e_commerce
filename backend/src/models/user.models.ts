import { model, Schema } from "mongoose";

interface IUser {
  _id: Schema.Types.ObjectId;
  firstname: String;
  lastname: String;
  email: String;
  password: String;
  role: String;
  phonenumber: String;
  profile_img: String;
  adress: String;
  updated_at: Date;
  created_at: Date;
}

const userSchema = new Schema<IUser>({
  firstname: {
    type: String,
    // 2дахь Параметр алдааны мсж илгээж болно.
    required: [true, "Хэрэглэгчийн Нэр заавал оруулна."],
  },
  lastname: {
    type: String,
    // 2дахь Параметр алдааны мсж илгээж болно.
    required: [true, "Хэрэглэгчийн Овог заавал оруулна."],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Хэрэглэгчийн имэйл заавал оруулна."],
  },
  password: {
    type: String,
    minlength: [8, "Хэрэглэгчийн нууц үг хамгийн багадаа 8 тэмдэгт байна."],
    required: [true, "Хэрэглэгчийн нууц үг заавал оруулна."],
  },
  phonenumber: Number,

  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  profile_img: {
    type: String,
    default:
      "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg",
  },
  adress: String,
  updated_at: {
    type: Date,
    default: Date.now,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const User = model("User", userSchema);

export default User;
