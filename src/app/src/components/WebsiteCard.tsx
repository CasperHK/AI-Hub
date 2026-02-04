import { ExternalLink, Star } from 'lucide-react';
import type { AIWebsite } from '@/data/aiWebsites';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface WebsiteCardProps {
  website: AIWebsite;
}

const pricingColors = {
  '免費': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
  '免費增值': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100',
  '付費': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100',
  '企業版': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100',
};

export function WebsiteCard({ website }: WebsiteCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border/60 hover:border-primary/30 flex flex-col h-full">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-lg font-bold text-primary">
              {website.name.charAt(0)}
            </div>
            <div>
              <CardTitle className="text-lg font-semibold leading-tight">
                {website.name}
              </CardTitle>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {website.featured && (
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            )}
            <Badge 
              variant="secondary" 
              className={`text-xs font-medium ${pricingColors[website.pricing]}`}
            >
              {website.pricing}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 pb-3">
        <CardDescription className="text-sm text-muted-foreground leading-relaxed mb-3">
          {website.description}
        </CardDescription>
        <div className="flex flex-wrap gap-1.5">
          {website.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs rounded-md bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button
          variant="outline"
          size="sm"
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
          asChild
        >
          <a
            href={website.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <span>訪問網站</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
