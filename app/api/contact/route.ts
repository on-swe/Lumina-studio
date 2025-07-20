// import { createTransport } from "nodemailer";

// export async function POST(request: Request) {
//   try {
//     const { firstName, lastName, email, projectType, projectDetails } =
//       await request.json();

//     if (!firstName || !lastName || !email || !projectType || !projectDetails) {
//       return new Response(
//         JSON.stringify({ message: "All fields are required" }),
//         {
//           status: 400,
//           headers: { "Content-Type": "application/json" },
//         }
//       );
//     }

//     const transporter = createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.GOOGLE_MAIL, 
//         pass: process.env.GOOGLE_APP_PASSWORD, 
//       },
//     });

//     const mailOptions = {
//       from: process.env.GOOGLE_MAIL,
//       to: process.env.GOOGLE_MAIL, 
//       subject: `New Project Inquiry: ${projectType}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//           <h2 style="color: #7e22ce; border-bottom: 2px solid #7e22ce; padding-bottom: 10px;">
//             New Project Inquiry
//           </h2>
          
//           <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
//             <h3 style="margin-top: 0; color: #374151;">Contact Information</h3>
//             <p><strong>Name:</strong> ${firstName} ${lastName}</p>
//             <p><strong>Email:</strong> ${email}</p>
//             <p><strong>Project Type:</strong> ${projectType}</p>
//           </div>
          
//           <div style="background: #f9fafb; padding: 20px; border-radius: 8px;">
//             <h3 style="margin-top: 0; color: #374151;">Project Details</h3>
//             <p style="line-height: 1.6;">${projectDetails.replace(
//               /\n/g,
//               "<br>"
//             )}</p>
//           </div>
          
//           <div style="margin-top: 30px; padding: 15px; background: #7e22ce; color: white; text-align: center; border-radius: 8px;">
//             <p style="margin: 0;">This message was sent from your website contact form</p>
//           </div>
//         </div>
//       `,
//       replyTo: email, 
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);

//     return new Response(
//       JSON.stringify({ message: "Email sent successfully" }),
//       {
//         status: 200,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return new Response(JSON.stringify({ message: "Failed to send email" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }
