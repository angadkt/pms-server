// src/utils/hashPassword.js
import bcrypt from 'bcryptjs'; // Fix typo: 'bycrypt' → 'bcrypt'
import CustomError from './customErrorHandler.js';

export const hashPassword = async (password) => { // Rename to 'hashPassword' and make async
  if (typeof password !== 'string') {
    password = String(password); // Handle numbers like 12345678
  }
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds); // Add 'await'
};

export const comparePassword = async (plainPsswd, hashedPsswd) => { // Make async
  if (typeof plainPsswd !== 'string') {
    plainPsswd = String(plainPsswd);
  }
  if (typeof hashedPsswd !== 'string') {
    throw new CustomError('Invalid hash format: expected a string', 400);
  }
  return await bcrypt.compare(plainPsswd, hashedPsswd); // Fix typo: 'hashedPassword' → 'hashedPsswd'
};