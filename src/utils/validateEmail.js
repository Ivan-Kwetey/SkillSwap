export const validateEmail = (email) => {
  if (!email.trim()) {
    return { valid: false, message: "Please enter your email" };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, message: "Please enter a valid email" };
  }

  return { valid: true };
};
