import { motion } from "framer-motion";

const partners = [
  "HDFC Bank", "ICICI Bank", "Axis Bank", "SBI", "Kotak Mahindra",
  "Yes Bank", "IndusInd Bank", "IDFC First", "RBL Bank", "Bajaj Finserv"
];

export const PartnerLogosSection = () => {
  return (
    <section className="py-12 bg-background border-y border-border/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8 font-medium">
          Trusted by
        </p>
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-12"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...partners, ...partners].map((partner, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 px-6 py-3 text-muted-foreground/60 hover:text-primary transition-colors font-medium whitespace-nowrap"
              >
                {partner}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
