import { model, Schema } from "mongoose";

interface IWishlist {
  user: Schema.Types.ObjectId;
  products: [{ product: Schema.Types.ObjectId }];
}

const wishListSchema = new Schema<IWishlist>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const WishList = model("Wishlist", wishListSchema);

export default WishList;
