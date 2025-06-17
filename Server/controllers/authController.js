import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

import userModel from "../models/usermodel.js"; // adjust the path if needed

export const register = async (req, res) => {
  // Destructure all required fields from the request body
  const { name, phone, email, password, companyName, isAgency } = req.body;

  // Validate required fields
  if (!name || !phone || !email || !password || isAgency === undefined) {
    return res.json({ success: false, message: "Missing required fields" });
  }

  try {
    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save new user
    const user = new userModel({
      name,
      phone,
      email,
      password: hashedPassword,
      companyName,
      isAgency,
    });

    await user.save();

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Set token as cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    console.log(`✅ User registered: ${email} (${name})`);

    // Respond with success
    res.json({
      success: true,
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        isAgency: user.isAgency,
        companyName: user.companyName,
      },
    });

  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};


export const login = async (req, res) => {
  // Destructure email and password from request body
  const { email, password } = req.body;

  // Validate input fields
  if (!email || !password) {
    return res.json({
      success: false,
      message: "Email and password are required",
    });
  }

  try {
    // Check if user with provided email exists
    const user = await usermodel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "Invalid email" });
    }

    // Compare provided password with stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid Password" });
    }

    // Generate a new JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // Set token in cookie with security settings
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
        // ✅ Add login success log
    console.log(`✅ User logged in: ${email}`);


    // Respond with success message
    res.json({
      success: true,
      message: "User Login successfully",
    });
  } catch (error) {
    // Handle any errors
    res.json({ success: false, message: error.message });
  }
};








export const isAuthenticated=async(req,res)=>{
  try {
return res.json({success:true})
  } catch (error) {
    return res.json({success:false,message:error.message})

  }
};
