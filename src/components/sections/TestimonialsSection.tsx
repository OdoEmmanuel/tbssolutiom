import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "TBS Solutions didn't just build us a platform; they became an extension of our technical leadership. Their commitment to architectural integrity and scalable systems has been a game-changer for our global operations.",
    author: "Jonathan Vickers",
    role: "CTO, Global Logistics Inc.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCdOYBKMl_WBDyN3jsT578ubRBSjQOmKfJiJdK_pYsdPkVvjvhuGgilla91p8fr4Bf47ILrpeiJDtqj7p5rT881AdcT5OGroMcdn2LZh6tjGCkRaMs4SKbPHe9T8JF2yat6MDdFQZSLX5IsHgjAPF_x0apIoxSpgFQsv7xfctrhPisPKB-KumOpMRZ9YCEWiO8WBDBwHy5FB02a5YvH_xMPhIMzAigIHk_yhfXyJZjudsBC7bR0HdOecEgtqUZDgpO1SBP6Dht6jkw",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "The LMS platform TBS built for us transformed our training delivery. Our completion rates increased by 40% and our trainers love how easy it is to manage courses.",
    author: "Sarah Mitchell",
    role: "Head of Training, EduPro Academy",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Working with TBS Solutions was seamless. They understood our unique challenges as an NGO and delivered a solution that was both powerful and budget-friendly.",
    author: "Michael Okonkwo",
    role: "Executive Director, Community Impact Foundation",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection > 0) {
        return prev === testimonials.length - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? testimonials.length - 1 : prev - 1;
    });
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="py-16 sm:py-20 bg-muted/30" id="testimonials">
      <div className="section-container">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-primary/70 mb-3">
            Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Don't just take our word for it. Here's what our partners have to
            say about working with TBS Solutions.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto px-4">
          <div className="relative bg-card rounded-2xl sm:rounded-3xl shadow-xl border border-border overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-4 sm:top-8 left-4 sm:left-8 opacity-10">
              <Quote className="w-12 h-12 text-primary" />
            </div>

            <div className="relative p-6 sm:p-10 lg:p-12 min-h-80 sm:min-h-87.5 flex items-center">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="w-full"
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4 sm:mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                          />
                        )
                      )}
                    </div>

                    <blockquote className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-foreground mb-6 sm:mb-8 max-w-3xl">
                      "{testimonials[currentIndex].quote}"
                    </blockquote>

                    <div className="flex flex-col items-center">
                      <div
                        className="size-14 sm:size-16 lg:size-20 rounded-full bg-cover bg-center ring-4 ring-muted mb-3 sm:mb-4"
                        style={{
                          backgroundImage: `url('${testimonials[currentIndex].image}')`,
                        }}
                      />
                      <h4 className="font-bold text-base sm:text-lg text-foreground">
                        {testimonials[currentIndex].author}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 sm:gap-4">
              {/* <button
                onClick={() => paginate(-1)}
                className="p-1.5 sm:p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </button> */}

              <div className="flex gap-1.5 sm:gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? "w-6 sm:w-8 h-2 bg-primary"
                        : "w-2 h-2 bg-border hover:bg-primary/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              {/* <button
                onClick={() => paginate(1)}
                className="p-1.5 sm:p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
