// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, Send, CheckCircle } from "lucide-react";
// import emailjs from "@emailjs/browser";

// export default function ContactModal({ isOpen, onClose }) {

//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     city: "",
//     budget: "",
//     start: "",
//     manage: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);

//   useEffect(() => {
//     document.body.style.overflow = isOpen ? "hidden" : "auto";
//   }, [isOpen]);

//   const validate = () => {
//     let newErrors = {};

//     if (!formData.name.trim()) newErrors.name = "Full name required";

//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone required";
//     } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
//       newErrors.phone = "Invalid number";
//     }

//     if (!formData.city.trim()) newErrors.city = "City required";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // 🔥 WHATSAPP FUNCTION
//   const sendToWhatsApp = () => {
//     const message = `🚀 New Franchise Enquiry

// 👤 Name: ${formData.name}
// 📞 Phone: ${formData.phone}
// 📍 City: ${formData.city}

// 💰 Budget: ${formData.budget}
// ⏳ Start Time: ${formData.start}
// 👨‍💼 Managed By: ${formData.manage}

// Interested in FarmFresh Juice Franchise. Please guide me.`;

//     const encodedMessage = encodeURIComponent(message);

//     window.open(
//       `https://wa.me/917221892189?text=${encodedMessage}`,
//       "_blank"
//     );
//   };

//   // 🔥 SUBMIT
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     setIsSubmitting(true);

//     try {
//       await emailjs.send(
//         "service_8appqe7",
//         "template_t2v8rno",
//         {
//           name: formData.name,
//           phone: formData.phone,
//           city: formData.city,
//           budget: formData.budget,
//           start: formData.start,
//           manage: formData.manage,
//           time: new Date().toLocaleString(),
//         },
//         "9ITs0pGat0pu-CZqP"
//       );

//       setIsSuccess(true);

//       // 🔥 WHATSAPP TRIGGER
//       sendToWhatsApp();

//       setTimeout(() => {
//         setIsSuccess(false);
//         onClose();
//         setFormData({
//           name: "",
//           phone: "",
//           city: "",
//           budget: "",
//           start: "",
//           manage: "",
//         });
//       }, 2000);

//     } catch (err) {
//       alert("Failed to send enquiry");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">

//           {/* BACKDROP */}
//           <motion.div
//             className="absolute inset-0 bg-black/70"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//           />

//           {/* MODAL */}
//           <motion.div
//             className="relative bg-white w-full max-w-md rounded-2xl p-6 shadow-xl"
//             initial={{ scale: 0.9 }}
//             animate={{ scale: 1 }}
//           >

//             {isSuccess ? (
//               <div className="text-center py-10">
//                 <CheckCircle className="w-14 h-14 text-green-500 mx-auto" />
//                 <h2 className="mt-3 text-xl font-bold">
//                   Enquiry Submitted ✅
//                 </h2>
//                 <p className="text-gray-600">
//                   Our team will contact you soon
//                 </p>
//               </div>
//             ) : (
//               <>
//                 {/* HEADER */}
//                 <div className="flex justify-between items-center mb-4">
//                   <h2 className="text-lg font-bold">
//                     Start Franchise (₹3.99 Lakhs*)
//                   </h2>
//                   <button onClick={onClose}>
//                     <X />
//                   </button>
//                 </div>

//                 <p className="text-sm text-gray-500 mb-4">
//                   *Final investment depends on location & size
//                 </p>

//                 {/* FORM */}
//                 <form onSubmit={handleSubmit} className="space-y-3">

//                   <input
//                     type="text"
//                     placeholder="Full Name"
//                     className="w-full border p-3 rounded-lg"
//                     value={formData.name}
//                     onChange={(e) =>
//                       setFormData({ ...formData, name: e.target.value })
//                     }
//                   />

//                   <input
//                     type="tel"
//                     placeholder="Mobile Number"
//                     className="w-full border p-3 rounded-lg"
//                     value={formData.phone}
//                     onChange={(e) =>
//                       setFormData({ ...formData, phone: e.target.value })
//                     }
//                   />

//                   <input
//                     type="text"
//                     placeholder="City"
//                     className="w-full border p-3 rounded-lg"
//                     value={formData.city}
//                     onChange={(e) =>
//                       setFormData({ ...formData, city: e.target.value })
//                     }
//                   />

//                   <select
//                     className="w-full border p-3 rounded-lg"
//                     onChange={(e) =>
//                       setFormData({ ...formData, budget: e.target.value })
//                     }
//                   >
//                     <option value="">Investment Budget</option>
//                     <option>₹4 – ₹5 Lakhs</option>
//                     <option>₹5 – ₹8 Lakhs</option>
//                     <option>Above ₹8 Lakhs</option>
//                   </select>

//                   <select
//                     className="w-full border p-3 rounded-lg"
//                     onChange={(e) =>
//                       setFormData({ ...formData, start: e.target.value })
//                     }
//                   >
//                     <option value="">When to Start?</option>
//                     <option>Immediately</option>
//                     <option>Within 1 month</option>
//                     <option>Within 3 months</option>
//                   </select>

//                   <select
//                     className="w-full border p-3 rounded-lg"
//                     onChange={(e) =>
//                       setFormData({ ...formData, manage: e.target.value })
//                     }
//                   >
//                     <option value="">Who will manage?</option>
//                     <option>Self</option>
//                     <option>Family</option>
//                     <option>Manager</option>
//                   </select>

//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full bg-black text-white py-3 rounded-lg flex items-center justify-center gap-2"
//                   >
//                     <Send size={16} />
//                     {isSubmitting ? "Sending..." : "Submit Enquiry"}
//                   </button>

//                 </form>
//               </>
//             )}

//           </motion.div>
//         </div>
//       )}
//     </AnimatePresence>
//   );
// }
