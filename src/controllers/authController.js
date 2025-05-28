import userSchema from "../models/authModel/AuthModel.js";
import CustomError from "../utils/customErrorHandler.js";
import { comparePassword, hashPassword } from "../utils/hashPassword.js";
import { generateToken } from "../utils/jwt.js";

// =================================== Register ==========================================
export const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new CustomError("credentials not found", 400);
  }

  const userExist = await userSchema.findOne({ email });
  if (userExist) {
    throw new CustomError("email already exist in the database", 400);
  }

  const passwdHash = await hashPassword(password);
  if (!passwdHash) {
    throw new CustomError("password encryption failed", 400);
  }

  const newUser = new userSchema({
    name: name,
    email: email,
    password: passwdHash,
  });
  await newUser.save();

  return res.status(200).json({
    message: "user registered successfully, please login to continue",
  });
};

// ======================================= login ====================================

export const login = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  if (!email || !password) {
    throw new CustomError("input credentials not found", 404);
  }

  const checkUser = await userSchema.findOne({ email }).select("+password");
  if (!checkUser) {
    throw new CustomError("user not found. Please register", 404);
  }
  console.log(
    "checkUser.password:",
    checkUser.password,
    "Type:",
    typeof checkUser.password
  );

  const validateUser = await comparePassword(password, checkUser.password);
  if (!validateUser) {
    throw new CustomError("wrong password", 400);
  }

  const token = generateToken(checkUser._id);
  if (!token) {
    throw new CustomError("token creation failed", 404);
  }
  console.log("token", token);

  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
  });

  return res.status(200).json({
    message: "user registered successfully",
    token,
    user: {
      name: checkUser.name,
      email: checkUser.name,
    },
  });
};

//  ========================= logout ================================

export const logout = async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: false,
  });

  return res.status(200).json({ message: "user logged out" });
};


// ========================= debug ==================

// export const cookieCheck = async (req, res) => {
//   const token = "12345678"
//   res.cookie("token", token, {
//     httpOnly: true,
//     secure: false,
//   });
//   return res.status(200).json({message:"cookie check success"})
// };
