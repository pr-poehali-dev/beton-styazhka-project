
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-200 py-10">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">БетонПро</h3>
            <p className="text-zinc-400">
              Делаем полы. Ровно, по-человечески, без нервов. 
              Работаем по всему Крыму.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <a href="tel:+79781234567" className="hover:text-yellow-500">+7 978 123-45-67</a>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <a href="mailto:info@betonpro.ru" className="hover:text-yellow-500">info@betonpro.ru</a>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={16} />
                <span>Пн-Сб: 8:00 - 20:00</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Мессенджеры</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-zinc-800 hover:bg-zinc-700 p-2 rounded-full transition-colors">
                <Icon name="MessageCircle" className="text-yellow-500" size={20} />
              </a>
              <a href="#" className="bg-zinc-800 hover:bg-zinc-700 p-2 rounded-full transition-colors">
                <Icon name="Send" className="text-yellow-500" size={20} />
              </a>
              <a href="#" className="bg-zinc-800 hover:bg-zinc-700 p-2 rounded-full transition-colors">
                <Icon name="Instagram" className="text-yellow-500" size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            © 2025 БетонПро. Все права защищены.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#" className="text-zinc-400 hover:text-yellow-500">Политика конфиденциальности</a>
            <a href="#" className="text-zinc-400 hover:text-yellow-500">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
