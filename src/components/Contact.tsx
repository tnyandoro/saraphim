import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Turnstile } from "@marsidev/react-turnstile";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const [verificationEmail, setVerificationEmail] = useState("");
  const [verificationSent, setVerificationSent] = useState(false);
  const [verified, setVerified] = useState(false);
  const [code, setCode] = useState("");
  const [userCode, setUserCode] = useState("");
  const [codeTimestamp, setCodeTimestamp] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");

  const generateCode = () =>
    Math.floor(100000 + Math.random() * 900000).toString();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleVerificationEmailChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => setVerificationEmail(e.target.value);

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserCode(e.target.value);

  const sendVerificationCode = () => {
    if (!verificationEmail) {
      alert("Please enter your email to receive the verification code.");
      return;
    }
    if (!turnstileToken) {
      alert("Please complete the security verification.");
      return;
    }

    const newCode = generateCode();
    setCode(newCode);
    setCodeTimestamp(Date.now());

    emailjs
      .send(
        "service_24l7vr7",
        "template_dq1hssg",
        {
          to_email: verificationEmail,
          name: formData.name || "User",
          code: newCode,
        },
        "hen2oVLMvjW_dAuP3"
      )
      .then(() => {
        setVerificationSent(true);
        alert("Verification code sent to your email!");
      })
      .catch((err) => {
        console.error("Verification email error:", err);
        alert("Failed to send verification code. Please try again.");
      });
  };

  const verifyCode = () => {
    if (!codeTimestamp) return alert("No code sent yet.");
    const now = Date.now();
    if (now - codeTimestamp > 5 * 60 * 1000) {
      alert("Verification code expired. Please request a new code.");
      setVerified(false);
      setVerificationSent(false);
      return;
    }
    if (userCode === code) {
      alert("Email verified successfully!");
      setVerified(true);
    } else {
      alert("Incorrect code. Please try again.");
      setVerified(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!verified) {
      alert("Please verify your email before submitting the form.");
      return;
    }
    if (!turnstileToken) {
      alert("Please complete the security verification.");
      return;
    }

    emailjs
      .send(
        "service_24l7vr7",
        "template_ldar97e",
        formData,
        "hen2oVLMvjW_dAuP3"
      )
      .then(() => {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: "", email: "", organization: "", message: "" });
          setUserCode("");
          setVerified(false);
          setVerificationSent(false);
          setVerificationEmail("");
          setTurnstileToken("");
        }, 3000);
      })
      .catch((err) => {
        console.error("Contact form send error:", err);
        alert("Failed to send form. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-seraphim-dark mb-6">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-seraphim-orange mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how Saraphim can strengthen your security posture
            today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* --- Cloudflare Turnstile --- */}
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-seraphim-dark">
                    Security Verification
                  </label>
                  <Turnstile
                    siteKey="0x4AAAAAACLjc39Dfh_K3A59"
                    onSuccess={(token) => setTurnstileToken(token)}
                    onError={() => setTurnstileToken("")}
                    onExpire={() => setTurnstileToken("")}
                    options={{
                      theme: "light",
                      size: "normal",
                    }}
                  />
                </div>

                {/* --- Email Verification Section --- */}
                {!verified && (
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-seraphim-dark">
                      Verify Your Email
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={verificationEmail}
                        onChange={handleVerificationEmailChange}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-seraphim-orange outline-none"
                        disabled={verificationSent}
                      />
                      <button
                        type="button"
                        onClick={sendVerificationCode}
                        disabled={verificationSent || !turnstileToken}
                        className="px-4 py-3 bg-seraphim-orange text-white rounded-lg hover:bg-orange-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {verificationSent ? "Sent" : "Send Code"}
                      </button>
                    </div>

                    {verificationSent && !verified && (
                      <div className="flex gap-2 mt-2">
                        <input
                          type="text"
                          placeholder="Enter verification code"
                          value={userCode}
                          onChange={handleCodeChange}
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-seraphim-orange outline-none"
                        />
                        <button
                          type="button"
                          onClick={verifyCode}
                          className="px-4 py-3 bg-seraphim-dark text-white rounded-lg hover:bg-gray-800 transition-all"
                        >
                          Verify
                        </button>
                      </div>
                    )}

                    {verified && (
                      <div className="text-green-600 font-semibold mt-2">
                        Email verified ✅
                      </div>
                    )}
                  </div>
                )}

                {/* --- Contact Form Fields --- */}
                <div>
                  <label className="block text-sm font-semibold text-seraphim-dark mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-seraphim-orange outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-seraphim-dark mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-seraphim-orange outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-seraphim-dark mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Your Company Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-seraphim-orange outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-seraphim-dark mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your security needs..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-seraphim-orange outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted || !verified || !turnstileToken}
                  className="w-full px-8 py-4 bg-seraphim-orange text-white rounded-lg font-semibold text-lg hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right: Contact Info & Why Seraphim */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-seraphim-dark to-gray-800 rounded-2xl p-8 md:p-10 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-seraphim-orange" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Our Location</div>
                    <div className="text-gray-300">
                      18 Flamboyant Street
                      <br />
                      Edleen Kempton Park 1619
                      <br />
                      South Africa
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-seraphim-orange" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email Us</div>
                    <a
                      href="mailto:tshikanihasani@gmail.com"
                      className="text-seraphim-orange hover:underline"
                    >
                      tshikanihasani@saraphim.co.za
                    </a>
                    <br />
                    <a
                      href="mailto:info@saraphim.co.za"
                      className="text-seraphim-orange hover:underline"
                    >
                      info@saraphim.co.za
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-seraphim-orange" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Call Us</div>
                    <a
                      href="tel:+27795771773"
                      className="text-seraphim-orange hover:underline"
                    >
                      +27 (79) 577-1773
                    </a>
                    <br />
                    <span className="text-gray-300 text-sm">
                      Mon-Fri 9:00 AM - 6:00 PM EST
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-seraphim-dark mb-4">
                Why Seraphim?
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-seraphim-orange flex-shrink-0 mt-0.5" />
                  <span>Experts in integrated security framework</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-seraphim-orange flex-shrink-0 mt-0.5" />
                  <span>15+ years of proven cybersecurity expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-seraphim-orange flex-shrink-0 mt-0.5" />
                  <span>ISO 27001 and SOC 2 certified operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-seraphim-orange flex-shrink-0 mt-0.5" />
                  <span>24/7 incident response support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
