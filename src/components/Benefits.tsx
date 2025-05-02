
import React from 'react
};

export default Icon;
</pp';
import Icon from '@/components/-write>ui/Icon';

const benefits = [

<pp-write filepath="
  {
    iconsrc/pages/Index: "MapPin",
    title.tsx">
import: "Работа React from 'reactем по всему Крыму",';
import Header from '@/components/
    description: "От КерHeader';
import Hero from '@/components/чи до СевHero';
import Services from '@/components/Services';
import Benefitsастополя — приедем в любую from '@/components/Benefits';
import Process точку полуостр from '@/components/Process';
importова без доплат за Promotions from '@/components километраж."
  /Promotions';},
  {
import Testimonials from '@/components/
    icon: "Clock",
    title:Testimonials';
import Faq from "Не опаздываем и '@/components/Faq';
import Contact from '@/components не пропадаем",
    /Contact';
import Footer from '@/componentsdescription: "Сказ/Footer';

const Index: React.FC = () => {
  return (
    <div className="minали в среду — знач-h-screen">
      <Header />ит в среду. И
      <main>
        <Hero />
        <Services />
        <Benefits не через 3 недели после />
        <Process />
        <Promotions />
        <Testimonials /> предоплаты, а
        <Faq />
        <Contact />
       как договорились."
  </main>
      <Footer />
    },
  {
    icon: "</div>
  );
};

export defaultHammer",
    title: "При Index;
</ppезжаем со своим инструмент-write>ом",
    description: "Не н

🏗️ Создужно искать специальную технал одностраничныйику и материалы. У сайт для компании нас всё с собой и по бетонным всегда в рабочем состоянии."
   стяжкам в},
  {
    icon: "File Крыму. Сайт содText",
    title: "Гержит все необходимые разарантия по договору",
    descriptionделы: главный: "Никаких устных об экран с призывом к действиюещаний. Офици, услуги, преимущества, этапы работ, акции, отзывы, FAQ и контактную информальный договор иацию. Д гарантия до 5 лет на все виды работ."изайн выполнен в б
  },
  {
    icon: "ThumbsUp",етонной цветовой гам
    title: "Делаем как себме с желтыми акцентамие",
    description: "Можно, сохраняя жить без стя прямой и честжки, но мы бы не советовали.ный тон общения от лица реальных Как и экономить на кач мастеров.естве материалов."
  }
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-16">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Чем мы отличаемся от других</h2>
        <p className="text-concrete-600 text-lg text-center mb-10 max-w-3xl mx-auto">
          Не прячемся за красивыми словами. Просто делаем свою работу хорошо.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-item">
              <div className="shrink-0 bg-accent1 text-white p-3 rounded-lg">
                <Icon name={benefit.icon} size={24} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">{benefit.title}</h3>
                <p className="text-concrete-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
