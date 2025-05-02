
import React from 'react';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/Icon';

type Service = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

const services: Service[] = [
  {
    id: 1,
    title: 'Полусухая стяжка пола',
    description: 'Идеальна для квартир и офисов. Быстро сохнет, не даёт усадки, можно ходить уже через 12 часов.',
    icon: 'LayoutGrid'
  },
  {
    id: 2,
    title: 'Бетонная стяжка',
    description: 'Классическое решение для гаражей и производств. Прочная основа, которая выдержит даже станок.',
    icon: 'Square'
  },
  {
    id: 3,
    title: 'Затирка поверхности',
    description: 'Гладкая финишная отделка без бугров и впадин. Чтобы потом не спотыкаться о собственный пол.',
    icon: 'Sandwatch'
  },
  {
    id: 4,
    title: 'Шлифовка и топинг',
    description: 'Делаем пол прочнее и пылеотталкивающим. Особенно нужно для гаражей и мастерских.',
    icon: 'Shuffle'
  },
  {
    id: 5,
    title: 'Нарезка швов',
    description: 'Не дадим полу растрескаться от перепадов температуры. Правильные швы — залог долговечности.',
    icon: 'Scissors'
  },
  {
    id: 6,
    title: 'Армирование',
    description: 'Усиливаем бетон сеткой или фиброволокном. Для тех, кто планирует поставить что-то тяжелее дивана.',
    icon: 'Grid'
  }
];

const Services: React.FC = () => {
  return (
    <Section 
      id="services" 
      title="Услуги" 
      subtitle="Делаем полы, а не обещания. Просто. Честно. Надёжно."
      className="py-16 bg-concrete-100"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="p-6 hover:shadow-lg transition-shadow border-concrete-200 hover:border-accent1">
            <div className="mb-4 p-3 inline-flex rounded-full bg-concrete-200">
              <Icon name={service.icon} size={24} className="text-concrete-800" />
            </div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-concrete-700">{service.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Services;
