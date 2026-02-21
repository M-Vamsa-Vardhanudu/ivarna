import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { Check, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { GoogleLogin } from "@react-oauth/google";

interface RegistrationFormData {
  name: string;
  rollNumber: string;
  year: string;
  section: string;
  event: string;
  transactionId: string;
  email: string;
}

interface GoogleUser {
  email: string;
}

export function RegistrationForm({ selectedEvent }: { selectedEvent: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [user, setUser] = useState<GoogleUser | null>(null);

  const { register, handleSubmit, formState: { errors }, reset, setValue } =
    useForm<RegistrationFormData>({
      defaultValues: {
        event: selectedEvent,
        email: ""
      }
    });

  useEffect(() => {
    if (selectedEvent) {
      setValue("event", selectedEvent);
    }
  }, [selectedEvent, setValue]);

  const handleGoogleSuccess = async (credentialResponse: any) => {
    try {
      const token = credentialResponse.credential;

      const response = await fetch("https://ivarna.onrender.com/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      const googleUser = result.user;
      setUser(googleUser);
      toast.success("Google login successful");

    } catch (error: any) {
      toast.error(error.message || "Google login failed");
    }
  };

  const onSubmit = async (data: RegistrationFormData) => {
    try {
      if (!user) {
        toast.error("Please login with Google first");
        return;
      }

      setIsSubmitting(true);

      const payload = {
        ...data,
        loggedemail: user.email
      };

      const response = await fetch("https://ivarna.onrender.com/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      setIsSuccess(true);
      toast.success("Registration successful!");
      reset();
      setUser(null);

      setTimeout(() => setIsSuccess(false), 5000);

    } catch (error: any) {
      toast.error(error.message || "Registration failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-24 bg-slate-900">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8">

          <h2 className="text-3xl text-white mb-4" id="registration">Registration</h2>

          {!user ? (
            <GoogleLogin onSuccess={handleGoogleSuccess} onError={() => toast.error("Google login failed")} />
          ) : (
            <p className="text-green-400">Logged in as: {user.email}</p>
          )}

          <div className="h-4"></div>

          {isSuccess ? (
            <motion.div className="bg-green-500/10 p-6 rounded-xl text-center">
              <Check className="text-green-400 w-10 h-10" />
              <h3 className="text-white mt-2">Success</h3>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

              <input {...register("name", { required: true })}
                placeholder="Full Name"
                className="w-full p-3 bg-slate-900 border border-slate-700 text-white"
              />
              {errors.name && <span className="text-red-500">Required</span>}

              <input {...register("rollNumber", { required: true })}
                placeholder="Roll Number"
                className="w-full p-3 bg-slate-900 border border-slate-700 text-white"
              />

              <select {...register("year", { required: true })}
                className="w-full p-3 bg-slate-900 border border-slate-700 text-white">
                <option value="">Year</option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
              </select>

              <input {...register("section", { required: true })}
                placeholder="Section"
                className="w-full p-3 bg-slate-900 border border-slate-700 text-white"
              />
              {errors.section && <span className="text-red-500">Required</span>}

              <input {...register("email", { required: true })}
                placeholder="College Email"
                className="w-full p-3 bg-slate-900 border border-slate-700 text-white"
              />
              {errors.email && <span className="text-red-500">Required</span>}

              <select {...register("event", { required: true })}
                className="w-full p-3 bg-slate-900 border border-slate-700 text-white">
                <option value="">Event</option>
                <option value="Project Expo">Project Expo</option>
                <option value="Mystery of Doors & Memory Lane">Mystery of Doors</option>
                <option value="Hyperlink Hustle">Hyperlink Hustle</option>
              </select>

              <input {...register("transactionId", { required: true })}
                placeholder="Transaction ID"
                className="w-full p-3 bg-slate-900 border border-slate-700 text-white"
              />
              {errors.transactionId && <span className="text-red-500">Required</span>}

              <button type="submit" disabled={isSubmitting}
                className="w-full bg-blue-600 text-white p-3">
                {isSubmitting ? <Loader2 className="animate-spin" /> : "Register"}
              </button>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}