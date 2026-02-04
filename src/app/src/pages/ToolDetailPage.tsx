import { useParams, Link } from 'react-router-dom';
import { aiWebsites, categories } from '@/data/aiWebsites';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, ArrowLeft, Star } from 'lucide-react';

const pricingColors = {
  '免費': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
  '免費增值': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100',
  '付費': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100',
  '企業版': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100',
};

export function ToolDetailPage() {
  const { id } = useParams<{ id: string }>();
  const tool = aiWebsites.find((w) => w.id === id);

  if (!tool) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">工具未找到</h1>
            <p className="text-muted-foreground mb-6">
              抱歉，找不到您要查找的工具。
            </p>
            <Button asChild>
              <Link to="/">返回首頁</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const category = categories.find((c) => c.id === tool.category);
  const relatedTools = aiWebsites.filter(
    (w) => w.category === tool.category && w.id !== tool.id
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background pt-12 pb-8">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <Button variant="ghost" size="sm" asChild className="gap-2 mb-6">
              <Link to="/">
                <ArrowLeft className="w-4 h-4" />
                返回工具列表
              </Link>
            </Button>

            <div className="flex items-start gap-4 mb-8">
              <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-4xl font-bold text-primary">
                {tool.name.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h1 className="text-4xl sm:text-5xl font-bold">{tool.name}</h1>
                  {tool.featured && (
                    <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {category && (
                    <Badge variant="secondary" className="gap-1">
                      <span className="text-lg">{category.icon}</span>
                      {category.name}
                    </Badge>
                  )}
                  <Badge 
                    variant="secondary" 
                    className={`text-sm font-medium ${pricingColors[tool.pricing]}`}
                  >
                    {tool.pricing}
                  </Badge>
                </div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              {tool.description}
            </p>

            <Button size="lg" asChild className="gap-2">
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>訪問官方網站</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Tags */}
              <div>
                <h2 className="text-xl font-semibold mb-4">主要特性</h2>
                <div className="flex flex-wrap gap-2">
                  {tool.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div>
                <h2 className="text-xl font-semibold mb-4">工具資訊</h2>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">分類</p>
                    <p className="font-medium">{category?.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">定價模式</p>
                    <p className="font-medium">{tool.pricing}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">官方網站</p>
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-primary hover:underline break-all"
                    >
                      {tool.url}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Tools */}
        {relatedTools.length > 0 && (
          <section className="py-12 bg-muted/30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-8">同類其他工具</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedTools.slice(0, 4).map((relatedTool) => (
                  <Link
                    key={relatedTool.id}
                    to={`/tool/${relatedTool.id}`}
                    className="p-4 rounded-lg border border-border/60 hover:border-primary/30 hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-lg font-bold text-primary flex-shrink-0">
                        {relatedTool.name.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold group-hover:text-primary transition-colors">
                          {relatedTool.name}
                        </h3>
                        <p className="text-sm text-muted-foreground truncate">
                          {relatedTool.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
