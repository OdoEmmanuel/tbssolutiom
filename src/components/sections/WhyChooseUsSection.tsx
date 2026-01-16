import { motion } from "framer-motion";
import { Check } from "lucide-react";

const reasons = [
  {
    title: "Business-Focused Technology",
    description:
      "We align technology with your business goals, not the other way around.",
  },
  {
    title: "Scalable & Secure Solutions",
    description:
      "Built to grow with your organization while maintaining top-tier security.",
  },
  {
    title: "SME-Friendly Pricing",
    description:
      "Enterprise-quality solutions at prices that work for your budget.",
  },
  {
    title: "Clear Communication & Delivery",
    description:
      "Transparent processes with regular updates and on-time delivery.",
  },
  {
    title: "Long-Term Partnership Approach",
    description: "We're invested in your success beyond project completion.",
  },
  {
    title: "Dedicated Support Team",
    description: "Get help when you need it with our responsive support team.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background" id="about">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-primary/60" />

              {/* Pattern Overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-8 lg:p-12 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-primary-foreground mb-2 sm:mb-4">
                    5+
                  </div>
                  <div className="text-base sm:text-lg lg:text-xl text-primary-foreground/90 font-medium">
                    Years of Excellence
                  </div>
                </motion.div>

                <motion.div
                  className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-primary-foreground/20 w-full"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <p className="text-primary-foreground/80 text-sm sm:text-base leading-relaxed italic">
                    "Delivering practical, scalable technology solutions that
                    drive real business results."
                  </p>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 size-16 sm:size-24 bg-muted rounded-xl sm:rounded-2xl -z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
            />
            <motion.div
              className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 size-12 sm:size-16 bg-primary/20 rounded-lg sm:rounded-xl -z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
            />
          </motion.div>
          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-primary/70 mb-3">
              Why Choose Us
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4 sm:mb-6 leading-tight">
              We're More Than Just a Technology Vendor
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              At TBS Solutions, we believe in building lasting relationships
              with our clients. We're committed to understanding your unique
              challenges and delivering solutions that make a real difference.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  className="flex gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index, duration: 0.4 }}
                >
                  <div className="flex-shrink-0 size-5 sm:size-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-foreground mb-0.5">
                      {reason.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
