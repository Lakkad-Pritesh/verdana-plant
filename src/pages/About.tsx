import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="pt-15 bg-cream">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-80 flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200" 
          alt="Greenhouse" 
          className="absolute inset-0 w-full h-full object-cover opacity-45" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-b from-cream/10 to-cream/80"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-forest mb-6">Our Roots</h1>
          <p className="text-forest/80 text-lg">Cultivating a greener world, one home at a time.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-forest mb-6">The Verdana Story</h2>
              <p className="text-forest/80 mb-4 leading-relaxed text-lg">
                Founded in 2020, Verdana started as a small greenhouse project with a simple mission: to make plant parenthood accessible and joyful for everyone.
              </p>
              <p className="text-forest/80 leading-relaxed text-lg">
                We partner directly with sustainable growers to bring you the healthiest, most vibrant plants. Every plant is hand-selected, carefully nurtured, and safely delivered to your door with detailed care instructions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://www.ugaoo.com/cdn/shop/articles/f477c449cf_23084844-727f-4352-b795-f9b4d9789196.jpg?v=1738329291" 
                alt="Plant care" 
                className="rounded-3xl w-full h-64 object-cover shadow-lg" 
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1604762524889-3e2fcc145683?w=600" 
                alt="Nursery" 
                className="rounded-3xl w-full h-64 object-cover shadow-lg translate-y-8" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Values */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif text-forest mb-12">Our Core Values</h2>
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-forest/5">
                <div className="text-4xl mb-4">
                  <img
                  src="https://thumbs.dreamstime.com/b/environmental-earth-friendly-round-green-icon-symbol-badge-leaf-label-sign-website-renewable-sustainable-product-181099744.jpg"
                  className="rounded-full"
                />
                </div>
                <h3 className="text-xl font-medium text-forest mb-2">Sustainability</h3>
                <p className="text-forest/70 text-sm">We use eco-friendly packaging and partner with ethical growers who prioritize the environment.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-forest/5">
                <div className="text-4xl mb-4">
                  <img
                    src="https://img.freepik.com/free-vector/premium-certified-quality-stamp_78370-1800.jpg?semt=ais_rp_50_assets&w=740&q=80"
                    className="rounded-full"
                  />
                  </div>
                <h3 className="text-xl font-medium text-forest mb-2">Quality First</h3>
                <p className="text-forest/70 text-sm">Every plant is inspected for health and vitality before it ever leaves our greenhouse.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-forest/5">
                <div className="text-4xl mb-4">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/071/674/350/non_2x/green-tree-of-knowledge-logo-with-open-book-education-vector.jpg"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-medium text-forest mb-2">Education</h3>
                <p className="text-forest/70 text-sm">We don't just sell plants; we provide the knowledge you need to help them thrive.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
