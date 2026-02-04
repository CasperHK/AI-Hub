import { Link } from 'react-router-dom';
import { BarChart3 } from 'lucide-react';
import { categories } from '@/data/aiWebsites';

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2 justify-center mb-6">
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

      {/* Benchmark Button */}
      {activeCategory !== 'all' && (
        <div className="flex justify-center">
          <Link
            to={`/category/${activeCategory}/benchmark`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/30 bg-primary/5 hover:bg-primary/10 text-primary transition-colors text-sm font-medium"
          >
            <BarChart3 className="w-4 h-4" />
            查看此分類的排名與基準測試
          </Link>
        </div>
      )}
    </div>
  );
}
