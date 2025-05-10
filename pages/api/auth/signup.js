import User from "../../../models/user";
import bcryptjs from "bcryptjs";
import db from "../../../utils/db";

async function handler(req, res) {
  const { handles, password } = req.body;

  if (req.method === "POST") {
    try {
      await db.connect();

      const userExistsA = await User.findOne({
        handles: {
          instagram: handles.instagram,
        },
      });

      const userExistsB = await User.findOne({
        handles: {
          twitter: handles.twitter,
        },
      });

      const userExistsC = await User.findOne({
        handles: {
          email: handles.email,
        },
      });

      if (userExistsA || userExistsB) {
        console.log(userExistsA || userExistsB || userExistsC);
        res.status(422).json({
          message: "User already exit",
          success: false,
        });
        await db.disconnect();
        return;
      }
      const code = Math.floor(100000 + Math.random() * 900000);
      const newUser = new User({
        ...req.body,
        verificationCode: code,
        password: bcryptjs.hashSync(password, 16),
      });
      const user = await newUser.save();

      await db.disconnect();
      return res.status(201).json({
        user: user,
        message: "Account successfully registered",
        success: true,
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
        success: false,
      });
    }
  }
}
export default handler;
