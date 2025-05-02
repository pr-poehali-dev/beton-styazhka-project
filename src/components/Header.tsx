import React from 'react';
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/Icon';

const Header: React.FC = () => {
  return (
    <header className="py-4 bg-concrete-50 border-b border-concrete-200">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-concrete-900">СтройКрымСтяжка</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:+79781234567" className="hidden md:flex items-center gap-2 text-concrete-900 font-medium">
            <Icon name="Phone" size={20} />
            +7 978 123-45-67
          </a>
          <Button variant="outline" className="hidden md:flex">
            <Icon name="MessageCircle" className="mr-2" size={18} />
            Написать в WhatsApp
          </Button>
          <Button>
            <Icon name="PhoneCall" className="mr-2" size={18} />
            Позвонить
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;