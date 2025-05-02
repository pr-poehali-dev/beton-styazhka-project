
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/Icon';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-concrete-800 text-white py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-30"></div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Бетонный пол, который не треснет через год
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-concrete-100">
            Полусухая и бетонная стяжка под ключ — быстро, ровно и без головной боли
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md">
            <Button size="lg" className="text-base bg-accent1 hover:bg-accent1-dark button-hover">
              <Icon name="User" className="mr-2" size={18} />
              Позвать мастера
            </Button>
            <Button size="lg" variant="outline" className="text-base border-white text-white hover:bg-white/10 button-hover">
              <Icon name="Phone" className="mr-2" size={18} />
              Позвонить сейчас
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
