import { useParams, Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Star, Filter, X } from 'lucide-react';
import { benchmarkData } from '@/data/benchmarks';
import { categories } from '@/data/aiWebsites';

export function CategoryBenchmarkPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [selectedUseCase, setSelectedUseCase] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'overall' | 'name'>('overall');

  const categoryBenchmark = benchmarkData[categoryId || ''];
  const categoryInfo = categories.find((c) => c.id === categoryId);

  if (!categoryBenchmark || !categoryInfo) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">分類未找到</h1>
            <p className="text-muted-foreground mb-6">
              抱歉，找不到該分類的基準測試資訊。
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

  const sortedTools = useMemo(() => {
    const tools = [...categoryBenchmark.tools];
    if (sortBy === 'overall') {
      return tools.sort((a, b) => b.overallScore - a.overallScore);
    }
    return tools.sort((a, b) => a.toolName.localeCompare(b.toolName));
  }, [categoryBenchmark.tools, sortBy]);

  const getRankColor = (score: number) => {
    if (score >= 9) return 'text-red-600 font-bold';
    if (score >= 8) return 'text-orange-600 font-bold';
    if (score >= 7) return 'text-yellow-600 font-semibold';
    return 'text-slate-600';
  };

  const getScoreBarColor = (score: number) => {
    if (score >= 9) return 'bg-red-500';
    if (score >= 8) return 'bg-orange-500';
    if (score >= 7) return 'bg-yellow-500';
    return 'bg-blue-500';
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background pt-12 pb-8">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <Button variant="ghost" size="sm" asChild className="gap-2 mb-6">
              <Link to="/">
                <ArrowLeft className="w-4 h-4" />
                返回首頁
              </Link>
            </Button>

            <div className="flex items-center gap-4 mb-6">
              <div className="text-3xl">{categoryInfo.icon}</div>
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-2">
                  {categoryInfo.name} 排名與基準測試
                </h1>
                <p className="text-muted-foreground">
                  詳細的性能指標與功能評估，幫助您選擇最適合的工具
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 border-b border-border/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium">使用案例篩選：</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedUseCase(null)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedUseCase === null
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  全部
                </button>
                {categoryBenchmark.useCaseFilters.map((useCase) => (
                  <button
                    key={useCase.id}
                    onClick={() => setSelectedUseCase(useCase.id)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors gap-1 flex items-center ${
                      selectedUseCase === useCase.id
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    <span>{useCase.icon}</span>
                    {useCase.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">排序方式：</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'overall' | 'name')}
                className="px-3 py-1.5 rounded-md border border-input bg-background text-sm"
              >
                <option value="overall">總體評分 (從高到低)</option>
                <option value="name">工具名稱 (A-Z)</option>
              </select>
            </div>
          </div>
        </section>

        {/* Benchmark Metrics Section */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">效能基準測試指標</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {categoryBenchmark.benchmarkMetrics.map((metric, idx) => (
                <Card key={idx} className="border-border/60">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                      <span className="text-lg">📊</span>
                      {metric.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {metric.description}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      單位: <span className="font-mono">{metric.unit}</span>
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Ranking Criteria Section */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">功能評分標準</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {categoryBenchmark.rankingCriteria.map((criteria, idx) => (
                <Card key={idx} className="border-border/60">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                      <span className="text-lg">⭐</span>
                      {criteria.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      {criteria.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-secondary rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{ width: `${criteria.weight * 100}%` }}
                        />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground">
                        {(criteria.weight * 100).toFixed(0)}%
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Ranking Section */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">工具排名</h2>
            <div className="space-y-6">
              {sortedTools.map((tool, idx) => (
                <Card key={tool.toolId} className="border-border/60 overflow-hidden">
                  <CardHeader className="pb-4 bg-muted/50">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="text-4xl font-bold text-muted-foreground/40">
                          #{idx + 1}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{tool.toolName}</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {tool.bestFor.join(' • ')}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold mb-1">
                          <span className={getRankColor(tool.overallScore)}>
                            {tool.overallScore.toFixed(1)}
                          </span>
                          <span className="text-base text-muted-foreground">/10</span>
                        </div>
                        <p className="text-xs text-muted-foreground">總體評分</p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-6">
                    {/* Benchmarks */}
                    <div className="mb-8">
                      <h4 className="font-semibold mb-4 flex items-center gap-2">
                        <span className="text-lg">📊</span>
                        效能基準測試
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {Object.entries(tool.benchmarks).map(([metricName, value]) => (
                          <div key={metricName}>
                            <p className="text-sm font-medium mb-1">{metricName}</p>
                            <p className="text-lg font-bold text-primary">
                              {value}
                              <span className="text-xs text-muted-foreground ml-1">
                                {
                                  categoryBenchmark.benchmarkMetrics.find(
                                    (m) => m.name === metricName
                                  )?.unit
                                }
                              </span>
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Rankings */}
                    <div className="mb-8">
                      <h4 className="font-semibold mb-4 flex items-center gap-2">
                        <span className="text-lg">⭐</span>
                        功能評分
                      </h4>
                      <div className="space-y-3">
                        {Object.entries(tool.rankings).map(([criterieName, score]) => (
                          <div key={criterieName}>
                            <div className="flex items-center justify-between mb-1">
                              <p className="text-sm font-medium">{criterieName}</p>
                              <span className={getRankColor(score)}>
                                {score}/10
                              </span>
                            </div>
                            <div className="w-full bg-secondary rounded-full h-2">
                              <div
                                className={`${getScoreBarColor(score)} h-2 rounded-full transition-all`}
                                style={{ width: `${(score / 10) * 100}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pros & Cons */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <span className="text-green-600">✓</span>
                          優點
                        </h4>
                        <ul className="space-y-2">
                          {tool.pros.map((pro, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex gap-2">
                              <span className="text-green-600 flex-shrink-0">+</span>
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <span className="text-red-600">✗</span>
                          缺點
                        </h4>
                        <ul className="space-y-2">
                          {tool.cons.map((con, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex gap-2">
                              <span className="text-red-600 flex-shrink-0">-</span>
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">快速對比</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/60">
                    <th className="text-left font-semibold py-3 px-4 bg-muted/50">工具</th>
                    <th className="text-center font-semibold py-3 px-4 bg-muted/50">總體評分</th>
                    {categoryBenchmark.rankingCriteria
                      .slice(0, 3)
                      .map((criteria) => (
                        <th
                          key={criteria.name}
                          className="text-center font-semibold py-3 px-4 bg-muted/50"
                        >
                          <span className="text-xs">{criteria.name}</span>
                        </th>
                      ))}
                  </tr>
                </thead>
                <tbody>
                  {sortedTools.map((tool) => (
                    <tr key={tool.toolId} className="border-b border-border/30 hover:bg-muted/50">
                      <td className="py-3 px-4 font-medium">{tool.toolName}</td>
                      <td className="text-center py-3 px-4">
                        <Badge variant="secondary" className="justify-center">
                          {tool.overallScore.toFixed(1)}/10
                        </Badge>
                      </td>
                      {categoryBenchmark.rankingCriteria.slice(0, 3).map((criteria) => (
                        <td key={criteria.name} className="text-center py-3 px-4">
                          <span className={getRankColor(tool.rankings[criteria.name])}>
                            {tool.rankings[criteria.name]}/10
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Legend */}
        <section className="py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="font-semibold mb-4">評分說明</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-red-500" />
                <span className="text-sm">9.0 - 10.0 (優秀)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-orange-500" />
                <span className="text-sm">8.0 - 8.9 (很好)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-yellow-500" />
                <span className="text-sm">7.0 - 7.9 (良好)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-500" />
                <span className="text-sm">6.0 - 6.9 (及格)</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
