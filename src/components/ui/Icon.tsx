import React from "react";
import * as LucideIcons from "lucide-react";

interface IconProps {
  name: keyof typeof LucideIcons | string;
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  fallback?: keyof typeof LucideIcons;
}

const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 24, 
  color, 
  strokeWidth = 2, 
  className = "", 
  fallback = "CircleAlert" 
}) => {
  let IconComponent = (LucideIcons as any)[name];
  
  if (!IconComponent && fallback) {
    IconComponent = (LucideIcons as any)[fallback];
  }

  if (!IconComponent) return null;

  return (
    <IconComponent 
      size={size} 
      color={color} 
      strokeWidth={strokeWidth} 
      className={className} 
    />
  );
};

export default Icon;