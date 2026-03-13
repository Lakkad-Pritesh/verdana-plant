import React from 'react';
import { motion } from 'motion/react';
import { Droplets, Sun, Wind, Thermometer } from 'lucide-react';

const tips = [
  {
    icon: <Droplets className="w-6 h-6 text-sage" />,
    title: 'Watering',
    description: 'Check the top inch of soil before watering. Most plants prefer to dry out slightly between waterings.'
  },
  {
    icon: <Sun className="w-6 h-6 text-sage" />,
    title: 'Light',
    description: "Understand your plant's light needs. South-facing windows offer bright light, while north-facing are low light."
  },
  {
    icon: <Wind className="w-6 h-6 text-sage" />,
    title: 'Humidity',
    description: 'Tropical plants love humidity. Group plants together or use a pebble tray to increase moisture in the air.'
  },
  {
    icon: <Thermometer className="w-6 h-6 text-sage" />,
    title: 'Temperature',
    description: 'Keep plants away from drafts, AC units, and heating vents. Most prefer temperatures between 65-75°F.'
  }
];

export const PlantCareTips: React.FC = () => {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-serif font-medium text-forest mb-6">
              Plant Care <span className="italic text-terracotta">101</span>
            </h2>
            <p className="text-lg text-forest/70 mb-12 max-w-lg leading-relaxed">
              We want your plants to thrive. Follow these basic guidelines to keep your indoor jungle happy and healthy.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {tips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center mb-4">
                    {tip.icon}
                  </div>
                  <h3 className="text-xl font-medium text-forest mb-2">{tip.title}</h3>
                  <p className="text-sm text-forest/70 leading-relaxed">{tip.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <img
              src="https://westlakehardware.com/wp-content/uploads/2022/07/Caring-For-House-Plants-Summer.jpg"
              alt="Plant care"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
