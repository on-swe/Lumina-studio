// // app/api/newsletter/route.js
// import { createTransport } from "nodemailer";

// export async function POST(request: Request) {
//   try {
//     const { email } = await request.json();

//     // Validation
//     if (!email) {
//       return new Response(JSON.stringify({ message: "Email is required" }), {
//         status: 400,
//         headers: { "Content-Type": "application/json" },
//       });
//     }

//     // Email validation regex
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return new Response(JSON.stringify({ message: "Invalid email format" }), {
//         status: 400,
//         headers: { "Content-Type": "application/json" },
//       });
//     }

//     const transporter = createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.GOOGLE_MAIL,
//         pass: process.env.GOOGLE_APP_PASSWORD,
//       },
//     });

//     // Notify Me
//     const notificationMail = {
//       from: process.env.GOOGLE_MAIL,
//       to: process.env.GOOGLE_MAIL,
//       subject: "New Newsletter Subscription",
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//           <h2 style="color: #7e22ce; border-bottom: 2px solid #7e22ce; padding-bottom: 10px;">
//             New Newsletter Subscription
//           </h2>
          
//           <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
//             <h3 style="margin-top: 0; color: #374151;">Subscriber Information</h3>
//             <p><strong>Email:</strong> ${email}</p>
//             <p><strong>Subscribed at:</strong> ${new Date().toLocaleString()}</p>
//           </div>
          
//           <div style="margin-top: 30px; padding: 15px; background: #7e22ce; color: white; text-align: center; border-radius: 8px;">
//             <p style="margin: 0;">New subscriber added to your newsletter list!</p>
//           </div>
//         </div>
//       `,
//     };

//     // Send welcome email to subscriber
//     const welcomeMail = {
//       from: process.env.GOOGLE_MAIL,
//       to: email,
//       subject: "Welcome to Raqeem - رَقيم Newsletter! 🎉",
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #7e22ce; padding: 10px; border-radius: 20px;">
          
//           <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
//             <div style="text-align: center; margin-bottom: 30px;">
//               <h1 style="color: #7e22ce; margin: 0; font-size: 28px; font-weight: bold;">
//                 Welcome to Raqeem - رَقيم!
//               </h1>
//               <p style="color: #666; margin: 10px 0 0 0; font-size: 16px;">Raqeem - رَقيم Where Innovation Meets Excellence</p>
//             </div>
            
//             <div style="background: linear-gradient(135deg, #7e22ce, #a855f7); height: 4px; border-radius: 2px; margin: 30px 0;"></div>
            
//             <div style="margin: 30px 0;">
//               <h2 style="color: #374151; font-size: 20px; margin-bottom: 15px;">Thank you for joining our community!</h2>
//               <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
//                 We're thrilled to have you on board! You've just subscribed to receive the latest insights on:
//               </p>
              
//               <div style="background: #f8fafc; padding: 20px; border-radius: 10px; border-left: 4px solid #7e22ce; margin: 20px 0;">
//                 <ul style="color: #374151; margin: 0; padding-left: 20px; line-height: 1.8;">
//                   <li><strong>Software Development</strong> - Latest technologies and best practices</li>
//                   <li><strong>Digital Marketing</strong> - Strategies that drive real results</li>
//                   <li><strong>Cloud Solutions</strong> - Scalable and secure cloud innovations</li>
//                   <li><strong>Tech Trends</strong> - What's shaping the future of technology</li>
//                 </ul>
//               </div>
//             </div>
            
//             <div style="text-align: center; margin: 30px 0;">
//               <div style="background: linear-gradient(135deg, #7e22ce, #a855f7); padding: 15px 30px; border-radius: 25px; display: inline-block;">
//                 <p style="color: white; margin: 0; font-weight: bold;">🎯 Get ready for premium content delivered straight to your inbox!</p>
//               </div>
//             </div>
            
//             <div style="border-top: 1px solid #e5e7eb; padding-top: 25px; margin-top: 30px;">
//               <p style="color: #666; font-size: 14px; text-align: center; margin: 0;">
//                 Follow us on social media for daily updates and behind-the-scenes content
//               </p>
//               <div style="text-align: center; margin-top: 15px;">
//                 <a href="#" style="color: #7e22ce; text-decoration: none; margin: 0 10px; font-weight: bold;">Facebook</a>
//                 <a href="#" style="color: #7e22ce; text-decoration: none; margin: 0 10px; font-weight: bold;">Instagram</a>
//                 <a href="#" style="color: #7e22ce; text-decoration: none; margin: 0 10px; font-weight: bold;">LinkedIn</a>
//                 <a href="#" style="color: #7e22ce; text-decoration: none; margin: 0 10px; font-weight: bold;">Twitter</a>
//               </div>
//             </div>
//           </div>
          
//           <div style="text-align: center; margin-top: 20px;">
//             <p style="color: white; font-size: 12px; margin: 0;">
//               © 2025 <strong> Raqeem - رَقيم.</strong> All rights reserved.
//             </p>
//           </div>
//         </div>
//       `,
//     };

//     // Send both emails
//     await Promise.all([
//       transporter.sendMail(notificationMail),
//       transporter.sendMail(welcomeMail),
//     ]);

//     return new Response(
//       JSON.stringify({
//         message: "Subscription successful! Welcome email sent.",
//       }),
//       {
//         status: 200,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   } catch (error) {
//     console.error("Error processing newsletter subscription:", error);
//     return new Response(
//       JSON.stringify({
//         message: "Failed to process subscription",
//       }),
//       {
//         status: 500,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   }
// }
