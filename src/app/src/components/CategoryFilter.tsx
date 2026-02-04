import { categories } from '@/data/aiWebsites';

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`
            px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
            flex items-center gap-2 border
            ${activeCategory === category.id
              ? 'bg-primary text-primary-foreground border-primary shadow-md'
              : 'bg-card text-card-foreground border-border hover:border-primary/50 hover:bg-accent'
            }
          `}
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
}
