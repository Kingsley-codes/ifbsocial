import { getSession } from 'next-auth/react';
import User from '../../../models/user';
import bcryptjs from 'bcryptjs';
import db from '../../../utils/db';

async function handler(req, res) {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).send('signin required');
  }
  if (req.method === 'PUT') {
    await db.connect();
    try {
      const user = await User.findOne({
        email: session.user.email,
      });

      const { name, email, password } = req.body;
      const updatedUser = await User.findById(user._id);
      updatedUser.name = name;
      updatedUser.email = email;
      if (password) {
        updatedUser.password = bcryptjs.hashSync(password, 16);
      }

      await updatedUser.save();

      await db.disconnect();
      return res.status(201).send({
        message: 'Profile updated',
      });
    } catch (err) {
      await db.disconnect();
      return res.status(500).json({
        message: err.message,
        success: false,
      });
    }
  }
}

export default handler;
