
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from '@/components/ui/Icon';

const promotions = [
  {
    icon: "BadgePercent", 
    title: "Скидка 10%",
    description: "Если не врёте про метраж 😄 Серьёзно, мы ценим честность и точные данные. Это экономит время всем."
  },
  {
    icon: "Coffee",
    title: "Бесплатный выезд",
    description: "Если сварите нам кофе ☕ Мы всегда на ногах и кофе — наше топливо. Хороший кофе = хорошее настроение."
  },
  {
    icon: "Building2",
    title: "Второй объект дешевле",
    description: "Если не будете звонить каждые 15 минут с вопросом «Как там дела?» Доверие — лучший бонус для нас."
  },
  {
    icon: "Dog",
    title: "Дополнительный бонус",
    description: "Если у вас на объекте собака, и она не кусается 🐶 Мы любим животных, особенно дружелюбных."
  }
];

const Promotions: React.FC = () => {
  return (
    <section id="promotions" className="py-16 bg-gradient-to-b from-concrete-100 to-white">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Акции и бонусы <span className="text-concrete-500">(с юмором)</span></h2>
        <p className="text-concrete-600 text-lg text-center mb-10 max-w-3xl mx-auto">
          Мы ценим простоту и человеческий подход, поэтому наши акции — такие же.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {promotions.map((promo, index) => (
            <Card key={index} className="bg-white border border-concrete-200 hover:shadow-md transition-all">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-accent1/10 text-accent1 rounded-full flex items-center justify-center mb-3">
                  <Icon name={promo.icon} size={24} />
                </div>
                <CardTitle className="text-xl">{promo.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-concrete-600">{promo.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;
