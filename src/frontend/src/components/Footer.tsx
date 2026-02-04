import { Heart, Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted/30 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="font-semibold">AI 工具集</span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            精心挑選的網路上最佳 AI 工具合集。
          </p>
          
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            用 <Heart className="w-4 h-4 fill-red-500 text-red-500" /> 為 AI 愛好者製作
          </p>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border/40 text-center text-xs text-muted-foreground">
          <p>© 2026 AI 工具集。所有連結均來自公開來源。</p>
        </div>
      </div>
    </footer>
  );
}
