import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@tbssolutions.com",
    href: "mailto:info@tbssolutions.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 XXX XXX XXXX",
    href: "tel:+234XXXXXXXX",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lagos, Nigeria",
    href: null,
  },
];

const ContactSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-card" id="contact">
      <div className="section-container">
        <motion.div
          className="text-center mb-10 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-primary/70 mb-3">
            Contact Us
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4">
            Let's Work Together
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Ready to start your project? Reach out to us and let's discuss how
            we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-background rounded-xl p-6 sm:p-8 lg:p-10 border border-border shadow-md">
              <form className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                  >
                    <Label className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-wide">
                      Full Name
                    </Label>
                    <Input
                      type="text"
                      placeholder="John Doe"
                      required
                      aria-required="true"
                      className="w-full px-4 py-3 border border-border bg-card rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </motion.div>
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <Label className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-wide">
                      Email Address
                    </Label>
                    <Input
                      type="email"
                      placeholder="john@company.com"
                      required
                      aria-required="true"
                      className="w-full px-4 py-3 border border-border bg-card rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </motion.div>
                </div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25, duration: 0.5 }}
                >
                  <Label className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-wide">
                    Organization
                  </Label>
                  <Input
                    type="text"
                    placeholder="Your company name"
                    className="w-full px-4 py-3 border border-border bg-card rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </motion.div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <Label className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-wide">
                    Project Details
                  </Label>
                  <Textarea
                    placeholder="Tell us about your project goals and requirements..."
                    rows={5}
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 border border-border bg-card rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-5 sm:py-6 rounded-xl font-bold text-base sm:text-lg hover:shadow-lg transition-all"
                  >
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="flex gap-4 p-4 sm:p-5 bg-muted/30 rounded-xl sm:rounded-2xl border border-border hover:border-primary/20 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                >
                  <div className="flex-shrink-0 size-10 sm:size-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <info.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider mb-1">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm sm:text-base font-bold text-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm sm:text-base font-bold text-foreground">
                        {info.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Map Placeholder */}
              <motion.div
                className="relative h-48 sm:h-56 lg:h-64 w-full bg-muted rounded-xl sm:rounded-2xl overflow-hidden border border-border"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center grayscale opacity-50"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCtG13PpAIWk3RiYRcVWzyL_suqHcW3AjNwAd2KCJatjM2Bg-Is-jbq9PjZY457dkZ4aSB_ikys1OTouYPxrHs_XgYB7AvVcU8tNPnNE8FGAGkR9H-Z4h9nOcO3LzJsLn57UgT1OLaXAjE8a9-38OaHY9RVQy1gAcecm32juWuQrC8CHjpjW661pmLZU3LKbv8zjY6IqLDeJwcwgA67vk3tkhTJH7q1Vzn9U5QsMKqtlk3sor7XL86JZIPZSYMXJhbSZnentjYfE9g')`,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-card/95 backdrop-blur-sm p-4 sm:p-5 rounded-xl shadow-lg border border-border text-center">
                    <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2" />
                    <p className="text-sm sm:text-base font-bold text-foreground">
                      Lagos, Nigeria
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Serving clients globally
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
