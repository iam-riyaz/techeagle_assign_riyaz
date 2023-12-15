import * as userService from "../services/user.services.js";
import bcrypt from "bcrypt";
import { generateJwtToken } from "../utils/generateJWTtoken/generateJwtToken.js";

export const signUp = async (req, res) => {
  try {
    const { name, email, password, address,role } = req.body;

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const user = await userService.signUp({
      name,
      email,
      password: hashedPassword,
      address,
      role
    });
    res.status(201).send({ status: "success", user });
  } catch (err) {
    res.status(500).send({ status: "error", err });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userService.getUserByEmail({ email });

    if (!user) {
      return res.status(400).send("email is not registered");
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).send("password is not matched");
    }

    const token = generateJwtToken(user);

    // Create a new object without the password key
    const userWithoutPassword = { ...user.toObject() };
    delete userWithoutPassword.password;

    res.status(200).send({
      status: "success",
      data: { userWithoutPassword, token },
    });
  } catch (err) {
    res.status(500).send({ status: "error", err });
  }
};
