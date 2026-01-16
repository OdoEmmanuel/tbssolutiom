import { motion } from "framer-motion";

const industries = [
  "SMEs",
  "Training Providers",
  "Corporate Organizations",
  "NGOs",
  "Professional Bodies",
  "Educational Institutions",
  "Government Agencies",
  "Healthcare Providers",
];

const TrustBadges = () => {
  return (
    <section className="py-12 sm:py-20 bg-card overflow-hidden border-y border-border">
      <div className="section-container mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-xs sm:text-lg font-bold uppercase tracking-widest text-muted-foreground mb-2">
            Trusted by Leading Organizations
          </p>
          <p className="text-sm text-muted-foreground/70">
            Partnering with businesses across multiple industries
          </p>
        </motion.div>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-4 sm:gap-6"
            animate={{ x: [0, -1920] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...industries, ...industries, ...industries].map(
              (industry, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-4 sm:px-6 py-2 sm:py-3 bg-muted/50 rounded-full border border-border hover:border-primary/30 hover:bg-primary/5 transition-colors cursor-default"
                >
                  <span className="text-xs sm:text-sm font-semibold text-foreground whitespace-nowrap uppercase">
                    {industry}
                  </span>
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
