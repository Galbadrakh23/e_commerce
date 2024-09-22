import mongoose from "mongoose";

export const connectDB = async (uri: string) => {
  try {
    const con = await mongoose.connect(uri);
    console.log("DataBase connection success", con.connection.host);
  } catch (error) {
    console.log("DataBase connection failed", error);
  }
};
