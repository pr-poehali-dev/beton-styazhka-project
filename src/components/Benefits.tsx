
import React from 'react';
import { Section } from '@/components/ui/section';
import Icon from '@/components/ui/Icon';

type Benefit = {
  id: number;
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    id: 1,
    title: 'Работаем по всему Крыму',
    description: 'Симферополь, Севастополь, Ялта, Евпатория — везде доберёмся. Ни одного заказа не оставили без внимания.'
  },
  {
    id: 2,
    title: 'Не опаздываем, не пропадаем',
    description: 'Никаких "может приедем, а может нет". Сказали в четверг — значит будем в четверг. А не через неделю.'
  },
  {
    id: 3,
    title: 'Приезжаем со своим инструментом',
    description: 'Не просим "одолжить перфоратор" или "найти удлинитель". У нас всё своё, профессиональное, проверенное.'
  },
  {
    id: 4,
    title: 'Гарантия по договору',
    description: 'Даём гарантию в бумажном виде, а не на словах. Если что-то пойдёт не так — починим бесплатно.'
  },
  {
    id: 5,
    title: 'Делаем как себе',
    description: 'Можно ходить без стяжки, но мы бы не советовали. У нас стандарт — сделать так, чтобы не стыдно было.'
  }
];

const Benefits: React.FC = () => {
  return (
    <Section 
      id="benefits" 
      title="Преимущества" 
      subtitle="То, что отличает нас от тех, кто просто болтает"
      className="py-16"
    >
      <div className="space-y-6">
        {benefits.map((benefit) => (
          <div key={benefit.id} className="flex items-start gap-4 p-4 rounded-lg hover:bg-concrete-100 transition-colors">
            <div className="flex-shrink-0 mt-1">
              <div className="w-8 h-8 flex items-center justify-center bg-accent1 rounded-full text-white">
                <Icon name="Check" size={18} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">{benefit.title}</h3>
              <p className="text-concrete-700">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Benefits;
