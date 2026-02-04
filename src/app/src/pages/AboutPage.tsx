import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Sparkles, 
  Target, 
  Zap, 
  Globe, 
  Bookmark,
  ArrowLeft,
  Lightbulb,
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background pt-16 pb-12">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="mb-6">
              <Button variant="ghost" size="sm" asChild className="gap-2">
                <Link to="/">
                  <ArrowLeft className="w-4 h-4" />
                  返回首頁
                </Link>
              </Button>
            </div>
            
            <div className="text-center">
              <Badge variant="secondary" className="mb-4 px-3 py-1 text-sm">
                <Sparkles className="w-3.5 h-3.5 mr-1" />
                關於本站
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                發現 AI 的
                <span className="text-primary">無限可能</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                AI 工具集是一個精心策劃的平台，幫助您發現最適合的 AI 工具，
                從 Agentic AI 到圖像生成，從程式碼助手到語音合成，一應俱全。
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-semibold">我們的使命</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  在 AI 技術日新月異的今天，每天都有數十個新的 AI 工具問世。
                  我們的使命是幫助您從茫茫工具海中，快速找到最適合您需求的解決方案。
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  無論您是開發者、設計師、內容創作者還是商業人士，
                  我們都致力於為您提供最新、最實用的 AI 工具資訊。
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                  <Zap className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-1">快速發現</h3>
                  <p className="text-sm text-muted-foreground">按分類和標籤快速篩選</p>
                </div>
                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                  <Globe className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-1">全球精選</h3>
                  <p className="text-sm text-muted-foreground">來自世界各地的優質工具</p>
                </div>
                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                  <Bookmark className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-1">精心策劃</h3>
                  <p className="text-sm text-muted-foreground">每個工具都經過篩選</p>
                </div>
                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                  <Lightbulb className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-1">持續更新</h3>
                  <p className="text-sm text-muted-foreground">緊跟 AI 發展趨勢</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Overview */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-semibold mb-4">收錄分類</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                我們將 AI 工具分為七大類別，涵蓋各種應用場景
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  icon: '🤖',
                  title: 'Agentic AI',
                  desc: '智能體 AI 工具，如 Gumloop、Claude、CrewAI 等',
                  count: '8+ 工具'
                },
                {
                  icon: '🎨',
                  title: '圖像生成',
                  desc: 'AI 圖像創作工具，如 Midjourney、DALL-E、Stable Diffusion',
                  count: '8+ 工具'
                },
                {
                  icon: '✍️',
                  title: '寫作與內容',
                  desc: 'AI 寫作助手，如 ChatGPT、Jasper、Copy.ai',
                  count: '7+ 工具'
                },
                {
                  icon: '💻',
                  title: '程式碼助手',
                  desc: 'AI 程式設計工具，如 GitHub Copilot、Cursor、Tabnine',
                  count: '9+ 工具'
                },
                {
                  icon: '🎙️',
                  title: '語音與音訊',
                  desc: 'AI 語音合成工具，如 ElevenLabs、Murf AI、Descript',
                  count: '6+ 工具'
                },
                {
                  icon: '🎬',
                  title: '影片生成',
                  desc: 'AI 影片創作工具，如 Sora、Runway、Pika',
                  count: '7+ 工具'
                },
                {
                  icon: '⚡',
                  title: '生產力工具',
                  desc: '提升效率的 AI 工具，如 Perplexity、Notion AI',
                  count: '8+ 工具'
                },
                {
                  icon: '📊',
                  title: '持續增加',
                  desc: '我們會不斷添加新的優質 AI 工具',
                  count: '更多...'
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{item.desc}</p>
                  <Badge variant="secondary" className="text-xs">{item.count}</Badge>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-semibold mb-4">如何使用</h2>
              <p className="text-muted-foreground">
                簡單三步，找到您需要的 AI 工具
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: '選擇分類',
                  desc: '點擊頂部分類標籤，快速篩選您感興趣的工具類型'
                },
                {
                  step: '02',
                  title: '搜尋工具',
                  desc: '使用搜尋框，按名稱、描述或標籤查找特定工具'
                },
                {
                  step: '03',
                  title: '訪問網站',
                  desc: '點擊「訪問網站」按鈕，直接前往工具官網體驗'
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">{item.step}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Guide */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-semibold mb-4">價格標籤說明</h2>
              <p className="text-muted-foreground">
                我們為每個工具標註了價格類型，方便您快速了解
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  label: '免費',
                  color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
                  desc: '可免費使用，無需付費'
                },
                {
                  label: '免費增值',
                  color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100',
                  desc: '基礎功能免費，進階功能需付費'
                },
                {
                  label: '付費',
                  color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100',
                  desc: '需要付費訂閱才能使用'
                },
                {
                  label: '企業版',
                  color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100',
                  desc: '面向企業客戶的解決方案'
                }
              ].map((item, index) => (
                <div key={index} className="p-4 rounded-xl bg-card border border-border text-center">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${item.color}`}>
                    {item.label}
                  </span>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                開始探索 AI 工具
              </h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                瀏覽我們精心策劃的 AI 工具合集，找到適合您的解決方案
              </p>
              <Button size="lg" asChild>
                <Link to="/">
                  <Zap className="w-4 h-4 mr-2" />
                  開始探索
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 border-t border-border/60">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-3 text-sm text-muted-foreground">
              <Shield className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p>
                免責聲明：本網站收錄的所有 AI 工具連結均來自公開來源。
                我們不對這些工具的服務品質、安全性或隱私政策負責。
                使用前請仔細閱讀各工具的服務條款和隱私政策。
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
