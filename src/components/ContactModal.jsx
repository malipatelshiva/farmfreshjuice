import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactModal({ isOpen, onClose }) {

  // ================= FORM STATE =================
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    budget: "",
    startTime: "",
    manager: "",
    sopAgreement: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // ================= BODY SCROLL LOCK =================
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // ================= VALIDATION =================
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";

    if (!formData.phone.trim()) {
      newErrors.phone = "Mobile number required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid Indian mobile number";
    }

    if (!formData.city.trim()) newErrors.city = "City required";
    if (!formData.budget) newErrors.budget = "Select budget";
    if (!formData.startTime) newErrors.startTime = "Select start time";
    if (!formData.manager) newErrors.manager = "Select manager";
    if (!formData.sopAgreement) newErrors.sopAgreement = "Select option";
    if (!formData.consent) newErrors.consent = "Accept consent";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ================= SUBMIT =================
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          phone: formData.phone,
          city: formData.city,
          budget: formData.budget,
          start_time: formData.startTime,
          manager: formData.manager,
          sop: formData.sopAgreement,
          consent: formData.consent ? "Accepted" : "No",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setFormData({
          name: "",
          phone: "",
          city: "",
          budget: "",
          startTime: "",
          manager: "",
          sopAgreement: "",
          consent: false,
        });
      }, 2500);

    } catch (error) {
      console.error("EMAIL ERROR:", error);
      alert("Failed to send enquiry");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ================= UI =================
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">

          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70"
          />

          {/* MODAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative bg-white rounded-2xl w-full max-w-lg p-6"
          >

            {isSuccess ? (
              <div className="text-center p-10">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                <h2 className="text-xl font-bold mt-4">Submitted Successfully</h2>
              </div>
            ) : (
              <>
                {/* HEADER */}
                <div className="flex justify-between mb-4">
                  <h2 className="font-bold text-lg">Franchise Enquiry</h2>
                  <button onClick={onClose}><X /></button>
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-3">

                  <input
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e)=>setFormData({...formData,name:e.target.value})}
                    className="w-full border p-2 rounded"
                  />
                  {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}

                  <input
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e)=>setFormData({...formData,phone:e.target.value})}
                    className="w-full border p-2 rounded"
                  />
                  {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}

                  <input
                    placeholder="City"
                    value={formData.city}
                    onChange={(e)=>setFormData({...formData,city:e.target.value})}
                    className="w-full border p-2 rounded"
                  />

                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded"
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </button>

                </form>
              </>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}