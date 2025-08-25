import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "nileshkumarsingh060@gmail.com",   
    pass: "wtez klhc yovu xptu"    
  }
});

export const sendStudentMail = async (user) => {
  try {
    await transporter.sendMail({
      from: `"User Data   " <nileshkumarsingh060@gmail.com>`,
      to: user.email,
      subject: "egistration Successful ",
      html: `
        <h2>Welcome, ${user.name}!</h2>
        <p>Your student profile has been successfully created.</p>
        <p><b>Email:</b> ${user.email}</p>
        <p>Thank you for registering with us!</p>
      `
    });
    console.log("Email sent successfully");
  } catch (err) {
    console.error("Error sending email:", err);
  }
};
