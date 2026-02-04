import { useState, useMemo } from 'react';
import { aiWebsites, categories } from '@/data/aiWebsites';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SearchBar } from '@/components/SearchBar';
import { CategoryFilter } from '@/components/CategoryFilter';
import { WebsiteCard } from '@/components/WebsiteCard';
import { Sparkles, TrendingUp, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredWebsites = useMemo(() => {
    return aiWebsites.filter((website) => {
      const matchesCategory = activeCategory === 'all' || website.category === activeCategory;
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        website.name.toLowerCase().includes(searchLower) ||
        website.description.toLowerCase().includes(searchLower) ||
        website.tags.some((tag) => tag.toLowerCase().includes(searchLower));
      
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const featuredWebsites = useMemo(() => {
    return aiWebsites.filter((website) => website.featured);
  }, []);

  const activeCategoryName = categories.find((c) => c.id === activeCategory)?.name || '全部工具';

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background pt-16 pb-12">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="secondary" className="mb-4 px-3 py-1 text-sm">
                <Sparkles className="w-3.5 h-3.5 mr-1" />
                精選合集
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
                發現最佳
                <br />
                <span className="text-primary">AI 工具</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
                精心挑選的實用 AI 網站合集，包含
                Agentic AI、圖像生成、程式碼助手等。
              </p>
              
              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold">{aiWebsites.length}+</p>
                    <p className="text-sm text-muted-foreground">AI 工具</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold">{categories.length - 1}</p>
                    <p className="text-sm text-muted-foreground">分類</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              <h2 className="text-xl font-semibold">精選工具</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {featuredWebsites.map((website) => (
                <WebsiteCard key={website.id} website={website} />
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Search */}
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            
            {/* Category Filter */}
            <CategoryFilter 
              activeCategory={activeCategory} 
              onCategoryChange={setActiveCategory} 
            />
            
            {/* Results Count */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">
                {activeCategoryName}
              </h2>
              <p className="text-sm text-muted-foreground">
                找到 {filteredWebsites.length} 個{filteredWebsites.length === 1 ? '工具' : '工具'}
              </p>
            </div>
            
            {/* Website Grid */}
            {filteredWebsites.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredWebsites.map((website) => (
                  <WebsiteCard key={website.id} website={website} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium mb-2">找不到工具</h3>
                <p className="text-muted-foreground">
                  請嘗試調整搜尋或分類篩選條件
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
