import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactModal({ isOpen, onClose }) {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // 🔒 Lock scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // ✅ VALIDATION
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Invalid number";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_cnejjpk",        // ✅ Replace if needed
        "template_5vp7u8l",       // ✅ Replace if needed
        {
          name: formData.name,
          phone: formData.phone,
          city: formData.city,
        },
        "rGp0-DjGBC_5kazg0"       // ✅ Replace if needed
      );

      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setFormData({
          name: "",
          phone: "",
          city: "",
        });
      }, 2000);

    } catch (err) {
      console.error(err);
      alert("Email failed. Check EmailJS setup");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">

          {/* BACKDROP */}
          <motion.div
            className="absolute inset-0 bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* MODAL */}
          <motion.div
            className="relative bg-white w-full max-w-md rounded-2xl p-6 shadow-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >

            {isSuccess ? (
              <div className="text-center py-10">
                <CheckCircle className="w-14 h-14 text-green-500 mx-auto" />
                <h2 className="mt-3 text-xl font-bold">
                  Enquiry Submitted ✅
                </h2>
                <p className="text-gray-600">
                  Our team will contact you soon
                </p>
              </div>
            ) : (
              <>
                {/* HEADER */}
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-bold">
                    Farm Fresh Franchise
                  </h2>
                  <button onClick={onClose}>
                    <X />
                  </button>
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-3">

                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border p-3 rounded-lg"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs">{errors.name}</p>
                  )}

                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="w-full border p-3 rounded-lg"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs">{errors.phone}</p>
                  )}

                  <input
                    type="text"
                    placeholder="City"
                    className="w-full border p-3 rounded-lg"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                  />
                  {errors.city && (
                    <p className="text-red-500 text-xs">{errors.city}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-600 text-white py-3 rounded-lg flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    {isSubmitting ? "Sending..." : "Submit Enquiry"}
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