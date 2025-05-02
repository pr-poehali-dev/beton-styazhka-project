
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Icon from '@/components/ui/Icon';

const testimonials = [
  {
    text: "Думал опять через ж... будет. А нет — сделали ровно, как обещали. Заказывал полусухую стяжку, сделали за 2 дня, уже стелю ламинат.",
    name: "Александр",
    location: "Симферополь",
    rating: 5
  },
  {
    text: "Работают чётко, не выпендриваются. Сэкономили мне и время, и нервы. Приехали вовремя, сделали всё по договору, цена не изменилась.",
    name: "Марина",
    location: "Ялта",
    rating: 5
  },
  {
    text: "Позвонил — на следующий день приехали. Через 2 дня был пол. Вот и весь сказ. Рекомендую этих ребят, если нужна качественная стяжка.",
    name: "Дмитрий",
    location: "Евпатория",
    rating: 5
  },
  {
    text: "Делали бетонный пол в гараже. Ровный как стекло, машина не скатывается даже без ручника. Спасибо за работу!",
    name: "Сергей",
    location: "Севастополь",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-concrete-800 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Отзывы наших клиентов</h2>
        <p className="text-concrete-300 text-lg text-center mb-10 max-w-3xl mx-auto">
          Вот что говорят те, кто уже заказал у нас стяжку. Никаких выдуманных историй — только реальные отзывы.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-concrete-700 border-none hover:bg-concrete-600 transition-colors">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Icon key={i} name="Star" className="text-accent1" size={20} />
                  ))}
                </div>
                <p className="mb-4 text-concrete-100">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-concrete-500 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-concrete-300 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
