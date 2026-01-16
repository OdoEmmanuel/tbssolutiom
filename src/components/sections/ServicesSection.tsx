import { motion } from "framer-motion";
import {
  Code,
  Layout,
  GraduationCap,
  BarChart3,
  Settings,
  Headphones,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "We build tailored software solutions aligned with your business processes and goals.",
    features: [
      "Web & cloud-based applications",
      "Internal management systems",
      "API & third-party integrations",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Layout,
    title: "Digital Platforms & Portals",
    description:
      "We design secure, user-friendly platforms that streamline operations and engagement.",
    features: [
      "Customer & client portals",
      "Admin dashboards",
      "Workflow automation",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: GraduationCap,
    title: "Learning & Training Solutions",
    description:
      "Digital platforms that support training, education, and capacity building.",
    features: [
      "Learning Management Systems",
      "Online assessments",
      "Training portals & reporting",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & BI",
    description:
      "Turn data into actionable insights for better decision making.",
    features: [
      "Dashboards & reporting",
      "Performance tracking",
      "Operational insights",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Settings,
    title: "IT Consulting & Delivery",
    description:
      "End-to-end technology support for your digital transformation.",
    features: [
      "Requirements analysis",
      "Solution design",
      "Project management",
    ],
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Headphones,
    title: "Managed IT Services",
    description: "Ongoing support to keep your systems running smoothly.",
    features: [
      "Hosting & monitoring",
      "Maintenance & upgrades",
      "Technical support",
    ],
    color: "from-teal-500 to-cyan-500",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

const ServicesSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background" id="services">
      <div className="section-container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-primary/70 mb-3 sm:mb-4">
            What We Do
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4 sm:mb-6">
            Comprehensive IT Solutions
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed px-4">
            We partner with our clients to deliver practical, scalable, and
            secure IT solutions, backed by structured project delivery and
            reliable support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative border border-border p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-card hover:shadow-xl transition-all duration-300"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Gradient accent */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 rounded-t-xl sm:rounded-t-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity`}
              />

              <div
                className={`mb-4 sm:mb-6 inline-flex items-center justify-center size-12 sm:size-14 rounded-xl bg-gradient-to-br ${service.color} text-white shadow-lg`}
              >
                <service.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-primary">
                {service.title}
              </h3>

              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                {service.description}
              </p>

              <ul className="space-y-2 mb-4 sm:mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="text-primary font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
