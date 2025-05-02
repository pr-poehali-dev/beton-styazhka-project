
import React from 'react';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/Icon';

type Promotion = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

const promotions: Promotion[] = [
  {
    id: 1,
    title: 'Скидка 10%',
    description: 'Если не врёте про метраж. Да, мы всё равно перемеряем, но ценим честность с первого звонка 😄',
    icon: 'Percent'
  },
  {
    id: 2,
    title: 'Бесплатный выезд',
    description: 'Если сварите нам кофе ☕ Шутка, выезд всегда бесплатный. Но от кофе не откажемся.',
    icon: 'Coffee'
  },
  {
    id: 3,
    title: 'Второй объект дешевле',
    description: 'Если не будете звонить каждые 15 минут. Доверьтесь профессионалам, и мы сделаем всё быстрее.',
    icon: 'Building'
  },
  {
    id: 4,
    title: 'Бонус от команды',
    description: 'Если у вас собака на объекте, и она не кусается 🐶 Серьёзно, любим животных, которые нас любят.',
    icon: 'Heart'
  }
];

const Promotions: React.FC = () => {
  return (
    <Section 
      id="promotions" 
      title="Акции и бонусы" 
      subtitle="Мы не заманиваем низкими ценами, но любим порадовать клиентов"
      className="py-16 bg-concrete-100"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {promotions.map((promo) => (
          <Card key={promo.id} className="p-6 border-concrete-200 hover:border-accent1 hover:shadow-md transition">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-accent1 rounded-full text-white">
                <Icon name={promo.icon} size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">{promo.title}</h3>
                <p className="text-concrete-700">{promo.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Promotions;
