import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-card overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="section-container relative">
        <div className="py-10 lg:py-12">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="flex min-h-112.5 sm:min-h-125 lg:min-h-150 flex-col justify-center items-start px-6 sm:px-10 lg:px-10 py-12 relative bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(to right, hsl(210 67% 33% / 0.95) 0%, hsl(210 67% 33% / 0.7) 50%, hsl(210 67% 33% / 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAgjne0Tve0V04F1AP2xaOLLt6najh687bBs5RX0scpczUAd2qu70PQoMj4pJfYcAlVQY5m0Crg61j_stfGpW9j7QQRDWy7O2zMBTrpXrOjcFnLLYVYMjpap0rlt-hKvnfL5tFgvucnAxrNxzmTacse5BsV-q2SyN6kU-50NgufZ5pZobeJDsmecm1di2I0ewpTbWpEVKpG1iwBqwQveRk_lmsRPbfA8Bpg05FCwgG1GT1oJLKsR4lpN-3SgG-5065FMawp32T-u9A")`,
              }}
            >
              <motion.div
                className="max-w-2xl space-y-4 sm:space-y-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-primary-foreground/90 text-xs sm:text-sm font-medium">
                    Innovative IT Solutions
                  </span>
                </motion.div>

                <motion.h1
                  className="text-primary-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.7 }}
                >
                  Your Partner in{" "}
                  <span className="relative">
                    Digital Excellence
                    <motion.span
                      className="absolute -bottom-1 left-0 h-1 bg-linear-to-r from-blue-400 to-cyan-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                    />
                  </span>
                </motion.h1>

                <motion.p
                  className="text-primary-foreground/80 text-base sm:text-lg font-normal leading-relaxed max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                >
                  We help businesses and institutions design, build, and manage
                  digital platforms that improve efficiency and support
                  sustainable growth.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.7 }}
                >
                  <Button
                    size="lg"
                    className="bg-primary-foreground text-primary px-6 sm:px-8 py-5 sm:py-6 rounded-xl text-sm sm:text-base font-bold hover:bg-primary-foreground/90 duration-300 cursor-pointer transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    Schedule Consultation
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary-foreground/30 text-primary-foreground backdrop-blur-sm px-6 sm:px-8 py-5 sm:py-6 rounded-xl text-sm sm:text-base font-bold hover:bg-primary-foreground/10 duration-300 cursor-pointer transition-all bg-transparent flex items-center justify-center gap-2"
                  >
                    <Play className="w-4 h-4" />
                    Watch Demo
                  </Button>
                </motion.div>

                <motion.div
                  className="flex flex-wrap gap-2 sm:gap-8 pt-6 sm:pt-8 border-t border-primary-foreground/10 mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  {[
                    { value: "50+", label: "Clients Served" },
                    { value: "100+", label: "Projects Delivered" },
                    { value: "99%", label: "Client Satisfaction" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
                    >
                      <div className="text-lg sm:text-2xl font-black text-primary-foreground">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm text-primary-foreground/60">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
