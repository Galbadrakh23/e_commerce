import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";

interface IUser {
  _id: Schema.Types.ObjectId;
  firstname: String;
  lastname: String;
  email: String;
  password: string;
  role: String;
  phonenumber: String;
  profile_img: String;
  address: String;
  otp: String;
  passwordResetToken: String;
  passwordResetTokenExpire: Date;
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
  address: String,
  otp: {
    type: String,
    default: "",
  },
  passwordResetTokenExpire: {
    type: Date,
    default: undefined,
  },
  passwordResetToken: {
    type: String,
    default: "",
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  } else {
    const hashedPassword = bcrypt.hashSync(this.password.toString(), 10);
    this.password = hashedPassword;
    next();
  }
});

const User = model("User", userSchema);

export default User;
