import { motion } from "framer-motion";
import {
  Users,
  FileCheck,
  BarChart2,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import { Button } from "../ui/button";

const features = [
  {
    icon: Users,
    title: "Course & User Management",
    description: "Easily manage courses, modules, and learner enrollments",
  },
  {
    icon: FileCheck,
    title: "Assessments & Certifications",
    description: "Create quizzes, exams, and issue certificates automatically",
  },
  {
    icon: BarChart2,
    title: "Analytics & Reporting",
    description: "Track progress and generate detailed performance reports",
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly Access",
    description: "Learn on any device with responsive, modern design",
  },
];

const ProductSection = () => {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-card overflow-hidden"
      id="product"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-primary/70 mb-3">
              Our Product
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-primary mb-4 sm:mb-6 leading-tight">
              TBS LMS
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              A flexible, customizable learning management system designed for
              organizations delivering training and education. Built to scale
              with your needs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex gap-3 sm:gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                >
                  <div className="flex-shrink-0 size-10 sm:size-12 rounded-xl bg-primary/5 flex items-center justify-center">
                    <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-primary mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground px-6 sm:px-8 py-5 sm:py-6 rounded-xl font-bold flex items-center justify-center gap-2 cursor-pointer duration-300 transition-colors"
              >
                Request Demo
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-border px-6 sm:px-8 py-5 sm:py-6 rounded-xl font-bold duration-300 transition-colors cursor-pointer"
              >
                View Features
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative aspect-square sm:aspect-4/3 lg:aspect-square rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 border border-border">
              <img src="/bank.jpg" alt="bank image" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
