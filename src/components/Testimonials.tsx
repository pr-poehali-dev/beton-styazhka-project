
import React from 'react';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/Icon';

type Testimonial = {
  id: number;
  text: string;
  author: string;
  location: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: 'Думал опять через ж... будет. А нет — сделали ровно, как обещали. Теперь и гараж закажу у них же.',
    author: 'Андрей',
    location: 'Симферополь'
  },
  {
    id: 2,
    text: 'Работают чётко, не выпендриваются. Сэкономили мне и время, и нервы. Пришли, сделали, убрали за собой.',
    author: 'Елена',
    location: 'Ялта'
  },
  {
    id: 3,
    text: 'Позвонил — на следующий день приехали. Через 2 дня был пол. Вот и весь сказ. Цена как обещали, без "внезапных" доплат.',
    author: 'Михаил',
    location: 'Севастополь'
  }
];

const Testimonials: React.FC = () => {
  return (
    <Section 
      id="testimonials" 
      title="Отзывы наших клиентов" 
      subtitle="Что говорят те, у кого уже ровный пол"
      className="py-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="p-6 bg-white hover:shadow-lg transition-shadow relative">
            <div className="absolute -top-3 left-6 text-accent1 text-5xl">"</div>
            <div className="pt-4">
              <p className="mb-4 text-concrete-700 italic relative z-10">{testimonial.text}</p>
              <div className="flex items-center gap-2">
                <div className="flex-shrink-0 bg-concrete-200 w-8 h-8 rounded-full flex items-center justify-center">
                  <Icon name="User" size={16} className="text-concrete-700" />
                </div>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-concrete-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
