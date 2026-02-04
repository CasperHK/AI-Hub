import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative max-w-xl mx-auto mb-8">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      <Input
        type="text"
        placeholder="搜尋 AI 工具，按名稱、描述或標籤..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 pr-4 py-3 h-12 text-base rounded-xl border-border/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
