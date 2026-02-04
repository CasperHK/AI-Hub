export interface BenchmarkMetric {
  name: string;
  description: string;
  unit: string;
}

export interface RankingCriteria {
  name: string;
  description: string;
  weight: number; // 0-1
}

export interface ToolRanking {
  toolId: string;
  toolName: string;
  benchmarks: Record<string, number>;
  rankings: Record<string, number>; // 1-10
  overallScore: number; // 1-10
  pros: string[];
  cons: string[];
  bestFor: string[];
}

export interface CategoryBenchmark {
  categoryId: string;
  categoryName: string;
  benchmarkMetrics: BenchmarkMetric[];
  rankingCriteria: RankingCriteria[];
  tools: ToolRanking[];
  useCaseFilters: Array<{ id: string; name: string; icon: string }>;
}

export const benchmarkData: Record<string, CategoryBenchmark> = {
  agentic: {
    categoryId: 'agentic',
    categoryName: 'Agentic AI',
    benchmarkMetrics: [
      {
        name: '平均回應時間',
        description: '完成一個任務的平均耗時（秒）',
        unit: '秒',
      },
      {
        name: 'API 呼叫速度',
        description: '單次 API 請求的延遲',
        unit: '毫秒',
      },
      {
        name: '並行處理能力',
        description: '同時處理的任務數',
        unit: '任務數',
      },
      {
        name: '成功率',
        description: '任務完成成功率',
        unit: '%',
      },
    ],
    rankingCriteria: [
      {
        name: '工作流程自動化能力',
        description: '是否支援複雜多步驟工作流程',
        weight: 0.25,
      },
      {
        name: 'API 與擴充性',
        description: '是否提供 API 及豐富的整合選項',
        weight: 0.25,
      },
      {
        name: '易用性',
        description: '無程式碼或低程式碼建構難度',
        weight: 0.2,
      },
      {
        name: 'AI 模型選擇',
        description: '支援多個 AI 模型或提供商',
        weight: 0.15,
      },
      {
        name: '社群與支援',
        description: '文件、社群、客服品質',
        weight: 0.15,
      },
    ],
    tools: [
      {
        toolId: 'claude',
        toolName: 'Claude',
        benchmarks: {
          '平均回應時間': 2.5,
          'API 呼叫速度': 450,
          '並行處理能力': 100,
          '成功率': 96,
        },
        rankings: {
          '工作流程自動化能力': 9,
          'API 與擴充性': 9,
          '易用性': 8,
          'AI 模型選擇': 8,
          '社群與支援': 9,
        },
        overallScore: 8.6,
        pros: [
          '強大的推理能力',
          '豐富的 API 文件',
          '支援 MCP 伺服器整合',
          '企業級安全性',
        ],
        cons: [
          '價格相對較高',
          '等待時間可能較長',
        ],
        bestFor: ['複雜推理任務', '企業自動化', '長上下文處理'],
      },
      {
        toolId: 'gumloop',
        toolName: 'Gumloop',
        benchmarks: {
          '平均回應時間': 1.8,
          'API 呼叫速度': 320,
          '並行處理能力': 150,
          '成功率': 93,
        },
        rankings: {
          '工作流程自動化能力': 8,
          'API 與擴充性': 8,
          '易用性': 9,
          'AI 模型選擇': 7,
          '社群與支援': 7,
        },
        overallScore: 7.8,
        pros: [
          '視覺化工作流程建構器',
          '易於上手',
          '多智能體協調功能',
          '快速部署',
        ],
        cons: [
          '模型選擇有限',
          '進階功能需要學習',
        ],
        bestFor: ['快速原型製作', '視覺化自動化', '初學者友善'],
      },
      {
        toolId: 'crewai',
        toolName: 'CrewAI',
        benchmarks: {
          '平均回應時間': 3.2,
          'API 呼叫速度': 380,
          '並行處理能力': 200,
          '成功率': 91,
        },
        rankings: {
          '工作流程自動化能力': 9,
          'API 與擴充性': 9,
          '易用性': 6,
          'AI 模型選擇': 9,
          '社群與支援': 8,
        },
        overallScore: 8.2,
        pros: [
          '開源且高度可自訂',
          '支援多個 AI 模型',
          '企業級架構',
          '豐富的文件',
        ],
        cons: [
          '需要編程知識',
          '部署複雜度較高',
        ],
        bestFor: ['開發者', '自訂解決方案', '大規模部署'],
      },
    ],
    useCaseFilters: [
      { id: 'automation', name: '工作流程自動化', icon: '⚙️' },
      { id: 'integration', name: '系統整合', icon: '🔗' },
      { id: 'customer-support', name: '客服自動化', icon: '💬' },
      { id: 'data-processing', name: '資料處理', icon: '📊' },
    ],
  },

  image: {
    categoryId: 'image',
    categoryName: '圖像生成',
    benchmarkMetrics: [
      {
        name: '圖像生成速度',
        description: '生成一張 1024x1024 圖像的耗時',
        unit: '秒',
      },
      {
        name: '月度生成額度',
        description: '免費方案的月度額度',
        unit: '張/月',
      },
      {
        name: '最高解析度',
        description: '支援的最高圖像解析度',
        unit: 'pixels',
      },
      {
        name: 'API 吞吐量',
        description: '每分鐘可處理的請求數',
        unit: '請求/分鐘',
      },
    ],
    rankingCriteria: [
      {
        name: '圖像品質',
        description: '生成圖像的視覺品質與細節度',
        weight: 0.3,
      },
      {
        name: '風格多樣性',
        description: '支援的藝術風格與效果',
        weight: 0.2,
      },
      {
        name: '提示詞理解',
        description: '對複雜提示詞的理解與執行',
        weight: 0.2,
      },
      {
        name: '編輯功能',
        description: '內置編輯與微調工具',
        weight: 0.15,
      },
      {
        name: '價格效能比',
        description: '成本與品質的平衡',
        weight: 0.15,
      },
    ],
    tools: [
      {
        toolId: 'midjourney',
        toolName: 'Midjourney',
        benchmarks: {
          '圖像生成速度': 45,
          '月度生成額度': 30,
          '最高解析度': 2048,
          'API 吞吐量': 120,
        },
        rankings: {
          '圖像品質': 10,
          '風格多樣性': 9,
          '提示詞理解': 9,
          '編輯功能': 7,
          '價格效能比': 7,
        },
        overallScore: 8.4,
        pros: [
          '最高的圖像品質',
          '獨特的藝術風格',
          '強大的社群',
          '持續創新',
        ],
        cons: [
          '價格較高',
          '編輯功能有限',
          '依賴 Discord 平台',
        ],
        bestFor: ['藝術創作', '高端設計', '創意表現'],
      },
      {
        toolId: 'dalle',
        toolName: 'DALL-E 3',
        benchmarks: {
          '圖像生成速度': 20,
          '月度生成額度': 100,
          '最高解析度': 1792,
          'API 吞吐量': 100,
        },
        rankings: {
          '圖像品質': 8,
          '風格多樣性': 8,
          '提示詞理解': 9,
          '編輯功能': 8,
          '價格效能比': 8,
        },
        overallScore: 8.2,
        pros: [
          '卓越的提示詞理解',
          '快速生成',
          '整合 ChatGPT',
          '易於使用',
        ],
        cons: [
          '風格創新性較低',
          '品質不如 Midjourney',
        ],
        bestFor: ['商業應用', '快速原型', '文字轉圖像'],
      },
      {
        toolId: 'stable-diffusion',
        toolName: 'Stable Diffusion',
        benchmarks: {
          '圖像生成速度': 15,
          '月度生成額度': 9999,
          '最高解析度': 2048,
          'API 吞吐量': 500,
        },
        rankings: {
          '圖像品質': 7,
          '風格多樣性': 9,
          '提示詞理解': 7,
          '編輯功能': 8,
          '價格效能比': 9,
        },
        overallScore: 8.0,
        pros: [
          '開源且免費',
          '高度可自訂',
          '豐富的社群模型',
          '本地部署選項',
        ],
        cons: [
          '圖像品質參差不齊',
          '需要編程知識',
          '優化成本',
        ],
        bestFor: ['開發者', '批量生成', '客製化模型'],
      },
    ],
    useCaseFilters: [
      { id: 'art', name: '藝術創作', icon: '🎨' },
      { id: 'commercial', name: '商業設計', icon: '💼' },
      { id: 'marketing', name: '行銷素材', icon: '📢' },
      { id: 'games', name: '遊戲素材', icon: '🎮' },
    ],
  },

  code: {
    categoryId: 'code',
    categoryName: '程式碼助手',
    benchmarkMetrics: [
      {
        name: '程式碼補全速度',
        description: '從觸發到顯示建議的延遲',
        unit: '毫秒',
      },
      {
        name: 'IDE 整合數量',
        description: '支援的開發環境數量',
        unit: '個',
      },
      {
        name: '程式語言支援',
        description: '支援的程式設計語言',
        unit: '種',
      },
      {
        name: '準確性',
        description: '生成的程式碼符合預期的比率',
        unit: '%',
      },
    ],
    rankingCriteria: [
      {
        name: '程式碼品質',
        description: '生成程式碼的準確性與最佳實踐',
        weight: 0.3,
      },
      {
        name: 'IDE 整合',
        description: '與開發環境的深度整合',
        weight: 0.25,
      },
      {
        name: '上下文理解',
        description: '對專案架構的理解',
        weight: 0.2,
      },
      {
        name: '性能',
        description: '響應速度與資源消耗',
        weight: 0.15,
      },
      {
        name: '隱私與安全',
        description: '程式碼隱私保護程度',
        weight: 0.1,
      },
    ],
    tools: [
      {
        toolId: 'github-copilot',
        toolName: 'GitHub Copilot',
        benchmarks: {
          '程式碼補全速度': 200,
          'IDE 整合數量': 15,
          '程式語言支援': 30,
          '準確性': 85,
        },
        rankings: {
          '程式碼品質': 8,
          'IDE 整合': 9,
          '上下文理解': 8,
          '性能': 8,
          '隱私與安全': 7,
        },
        overallScore: 8.0,
        pros: [
          '最廣泛的 IDE 支援',
          '深度 GitHub 整合',
          '持續改進',
          '企業功能豐富',
        ],
        cons: [
          '需要訂閱',
          '隱私顧慮',
        ],
        bestFor: ['專業開發者', '大型專案', 'GitHub 用戶'],
      },
      {
        toolId: 'cursor',
        toolName: 'Cursor',
        benchmarks: {
          '程式碼補全速度': 150,
          'IDE 整合數量': 10,
          '程式語言支援': 40,
          '準確性': 87,
        },
        rankings: {
          '程式碼品質': 9,
          'IDE 整合': 8,
          '上下文理解': 9,
          '性能': 8,
          '隱私與安全': 8,
        },
        overallScore: 8.4,
        pros: [
          '智能體模式',
          '多模型支援',
          '快速迭代',
          '現代 UI',
        ],
        cons: [
          '社群較小',
          '功能仍在完善',
        ],
        bestFor: ['快速開發', 'AI 驅動工作流程', '創新開發者'],
      },
      {
        toolId: 'tabnine',
        toolName: 'Tabnine',
        benchmarks: {
          '程式碼補全速度': 100,
          'IDE 整合數量': 20,
          '程式語言支援': 25,
          '準確性': 82,
        },
        rankings: {
          '程式碼品質': 7,
          'IDE 整合': 9,
          '上下文理解': 7,
          '性能': 9,
          '隱私與安全': 9,
        },
        overallScore: 8.2,
        pros: [
          '隱私優先',
          '本地部署選項',
          '快速補全',
          '企業就緒',
        ],
        cons: [
          '免費功能有限',
          '品質不如頂級方案',
        ],
        bestFor: ['隱私敏感行業', '企業部署', '本地開發'],
      },
    ],
    useCaseFilters: [
      { id: 'web-dev', name: '網頁開發', icon: '🌐' },
      { id: 'backend', name: '後端開發', icon: '⚙️' },
      { id: 'mobile', name: '行動應用', icon: '📱' },
      { id: 'data-science', name: '資料科學', icon: '📊' },
    ],
  },

  writing: {
    categoryId: 'writing',
    categoryName: '寫作與內容',
    benchmarkMetrics: [
      {
        name: '平均生成時間',
        description: '生成 500 字文章的耗時',
        unit: '秒',
      },
      {
        name: '月度字數額度',
        description: '免費方案的月度字數限制',
        unit: '萬字',
      },
      {
        name: '語言支援',
        description: '支援的語言數量',
        unit: '種',
      },
      {
        name: '內容質量評分',
        description: '生成內容的語法與相關性',
        unit: '%',
      },
    ],
    rankingCriteria: [
      {
        name: '內容品質',
        description: '文本流暢度與專業性',
        weight: 0.3,
      },
      {
        name: '風格多樣性',
        description: '支援的寫作風格與語調',
        weight: 0.2,
      },
      {
        name: '提示詞靈活性',
        description: '對複雜指令的執行能力',
        weight: 0.2,
      },
      {
        name: '編輯工具',
        description: '內置的編輯與優化功能',
        weight: 0.15,
      },
      {
        name: '行業針對性',
        description: '針對特定行業的模板與工具',
        weight: 0.15,
      },
    ],
    tools: [
      {
        toolId: 'chatgpt',
        toolName: 'ChatGPT',
        benchmarks: {
          '平均生成時間': 8,
          '月度字數額度': 999,
          '語言支援': 95,
          '內容質量評分': 92,
        },
        rankings: {
          '內容品質': 9,
          '風格多樣性': 9,
          '提示詞靈活性': 9,
          '編輯工具': 7,
          '行業針對性': 7,
        },
        overallScore: 8.4,
        pros: [
          '最強的自然語言理解',
          '高度靈活',
          '社群龐大',
          '持續更新',
        ],
        cons: [
          '需要訂閱高級功能',
          '無專業編輯工具',
        ],
        bestFor: ['通用寫作', '創意文案', '內容創作者'],
      },
      {
        toolId: 'jasper',
        toolName: 'Jasper',
        benchmarks: {
          '平均生成時間': 5,
          '月度字數額度': 150,
          '語言支援': 29,
          '內容質量評分': 88,
        },
        rankings: {
          '內容品質': 8,
          '風格多樣性': 8,
          '提示詞靈活性': 7,
          '編輯工具': 9,
          '行業針對性': 9,
        },
        overallScore: 8.2,
        pros: [
          '行銷文案特化',
          '品牌語調保持',
          '豐富的編輯工具',
          '團隊協作功能',
        ],
        cons: [
          '價格較高',
          '學習曲線陡',
        ],
        bestFor: ['行銷團隊', '品牌內容', '行銷文案'],
      },
      {
        toolId: 'copyai',
        toolName: 'Copy.ai',
        benchmarks: {
          '平均生成時間': 4,
          '月度字數額度': 200,
          '語言支援': 80,
          '內容質量評分': 85,
        },
        rankings: {
          '內容品質': 7,
          '風格多樣性': 7,
          '提示詞靈活性': 8,
          '編輯工具': 8,
          '行業針對性': 8,
        },
        overallScore: 7.6,
        pros: [
          '易於使用',
          '價格實惠',
          '多用途模板',
          '快速迭代',
        ],
        cons: [
          '內容品質不穩定',
          '高級功能有限',
        ],
        bestFor: ['小企業', '快速內容生成', '預算有限'],
      },
    ],
    useCaseFilters: [
      { id: 'marketing', name: '行銷文案', icon: '📢' },
      { id: 'blog', name: '部落格文章', icon: '📝' },
      { id: 'social-media', name: '社群媒體', icon: '📱' },
      { id: 'email', name: '電子郵件', icon: '📧' },
    ],
  },

  voice: {
    categoryId: 'voice',
    categoryName: '語音與音訊',
    benchmarkMetrics: [
      {
        name: '語音合成速度',
        description: '生成 60 秒音訊的耗時',
        unit: '秒',
      },
      {
        name: '音質評分',
        description: '生成音訊的自然度評分',
        unit: '/10',
      },
      {
        name: '支援語言',
        description: '支援的語言與口音',
        unit: '種',
      },
      {
        name: '月度分鐘額度',
        description: '免費方案的月度時長限制',
        unit: '分鐘',
      },
    ],
    rankingCriteria: [
      {
        name: '音質自然度',
        description: '合成語音的自然度與逼真度',
        weight: 0.3,
      },
      {
        name: '語言支援',
        description: '語言與口音的多樣性',
        weight: 0.25,
      },
      {
        name: '客製化程度',
        description: '語調與情感調整能力',
        weight: 0.2,
      },
      {
        name: '集成便利性',
        description: 'API 與工具整合程度',
        weight: 0.15,
      },
      {
        name: '效能穩定性',
        description: '服務穩定性與可用性',
        weight: 0.1,
      },
    ],
    tools: [
      {
        toolId: 'elevenlabs',
        toolName: 'ElevenLabs',
        benchmarks: {
          '語音合成速度': 3,
          '音質評分': 9.2,
          '支援語言': 29,
          '月度分鐘額度': 10000,
        },
        rankings: {
          '音質自然度': 10,
          '語言支援': 9,
          '客製化程度': 9,
          '集成便利性': 8,
          '效能穩定性': 9,
        },
        overallScore: 9.0,
        pros: [
          '業界最佳語音品質',
          '豐富的語言支援',
          '語音複製功能',
          '快速生成',
        ],
        cons: [
          '價格較高',
          '免費額度有限',
        ],
        bestFor: ['專業配音', '播客製作', '多語言應用'],
      },
      {
        toolId: 'murf',
        toolName: 'Murf AI',
        benchmarks: {
          '語音合成速度': 5,
          '音質評分': 8.5,
          '支援語言': 20,
          '月度分鐘額度': 600,
        },
        rankings: {
          '音質自然度': 8,
          '語言支援': 7,
          '客製化程度': 9,
          '集成便利性': 8,
          '效能穩定性': 8,
        },
        overallScore: 8.0,
        pros: [
          '專業級配音',
          '豐富的聲優選擇',
          '視頻編輯整合',
          '企業功能',
        ],
        cons: [
          '價格偏高',
          '免費版本有限',
        ],
        bestFor: ['企業培訓', '視頻製作', '專業應用'],
      },
      {
        toolId: 'playht',
        toolName: 'Play.ht',
        benchmarks: {
          '語音合成速度': 4,
          '音質評分': 8.0,
          '支援語言': 140,
          '月度分鐘額度': 2000,
        },
        rankings: {
          '音質自然度': 8,
          '語言支援': 10,
          '客製化程度': 7,
          '集成便利性': 9,
          '效能穩定性': 8,
        },
        overallScore: 8.4,
        pros: [
          '最廣泛的語言支援',
          '易於整合',
          '價格實惠',
          '900+ 語音選擇',
        ],
        cons: [
          '音質略低於頂級方案',
          '客製化選項有限',
        ],
        bestFor: ['多語言應用', '全球業務', '成本控制'],
      },
    ],
    useCaseFilters: [
      { id: 'podcasting', name: '播客製作', icon: '🎧' },
      { id: 'voiceover', name: '配音製作', icon: '🎤' },
      { id: 'education', name: '教育應用', icon: '📚' },
      { id: 'accessibility', name: '無障礙應用', icon: '♿' },
    ],
  },

  video: {
    categoryId: 'video',
    categoryName: '影片生成',
    benchmarkMetrics: [
      {
        name: '影片生成速度',
        description: '生成 10 秒影片的耗時',
        unit: '分鐘',
      },
      {
        name: '最高解析度',
        description: '支援的最高影片解析度',
        unit: 'p',
      },
      {
        name: '幀率',
        description: '生成影片的幀率',
        unit: 'fps',
      },
      {
        name: '月度生成額度',
        description: '免費方案的月度額度',
        unit: '分鐘',
      },
    ],
    rankingCriteria: [
      {
        name: '視覺品質',
        description: '生成影片的清晰度與逼真度',
        weight: 0.3,
      },
      {
        name: '動作流暢度',
        description: '角色與物體運動的自然性',
        weight: 0.25,
      },
      {
        name: '提示詞理解',
        description: '對文字描述的執行準確度',
        weight: 0.2,
      },
      {
        name: '編輯功能',
        description: '內置編輯與後製工具',
        weight: 0.15,
      },
      {
        name: '使用便利性',
        description: '使用者介面與工作流程',
        weight: 0.1,
      },
    ],
    tools: [
      {
        toolId: 'sora',
        toolName: 'Sora',
        benchmarks: {
          '影片生成速度': 30,
          '最高解析度': 1080,
          '幀率': 24,
          '月度生成額度': 50,
        },
        rankings: {
          '視覺品質': 9,
          '動作流暢度': 9,
          '提示詞理解': 9,
          '編輯功能': 6,
          '使用便利性': 7,
        },
        overallScore: 8.0,
        pros: [
          '革命性影片生成品質',
          '卓越的動作理解',
          '長時間影片支援',
          '逼真效果',
        ],
        cons: [
          '仍在測試階段',
          '使用限制',
          '價格未公布',
        ],
        bestFor: ['高端製作', '創意實驗', '專業應用'],
      },
      {
        toolId: 'runway',
        toolName: 'Runway',
        benchmarks: {
          '影片生成速度': 15,
          '最高解析度': 1080,
          '幀率': 30,
          '月度生成額度': 500,
        },
        rankings: {
          '視覺品質': 8,
          '動作流暢度': 8,
          '提示詞理解': 8,
          '編輯功能': 9,
          '使用便利性': 8,
        },
        overallScore: 8.2,
        pros: [
          '完整的編輯套件',
          '多種 AI 工具',
          '視頻專用',
          '社群活躍',
        ],
        cons: [
          '訂閱價格較高',
          '生成品質與 Sora 有差距',
        ],
        bestFor: ['專業視頻編輯', '內容創作者', '製片團隊'],
      },
      {
        toolId: 'pika',
        toolName: 'Pika Labs',
        benchmarks: {
          '影片生成速度': 10,
          '最高解析度': 720,
          '幀率': 24,
          '月度生成額度': 1000,
        },
        rankings: {
          '視覺品質': 7,
          '動作流暢度': 7,
          '提示詞理解': 7,
          '編輯功能': 7,
          '使用便利性': 9,
        },
        overallScore: 7.4,
        pros: [
          '簡單易用',
          '快速生成',
          '免費額度寬鬆',
          '社群友善',
        ],
        cons: [
          '品質不如高端方案',
          '功能有限',
        ],
        bestFor: ['初學者', '快速實驗', '社群創意'],
      },
    ],
    useCaseFilters: [
      { id: 'marketing', name: '行銷影片', icon: '📢' },
      { id: 'social', name: '社群短視頻', icon: '📱' },
      { id: 'education', name: '教育內容', icon: '📚' },
      { id: 'commercial', name: '商業製作', icon: '🎬' },
    ],
  },

  productivity: {
    categoryId: 'productivity',
    categoryName: '生產力工具',
    benchmarkMetrics: [
      {
        name: '搜尋響應時間',
        description: '返回搜尋結果的延遲',
        unit: '毫秒',
      },
      {
        name: '支援的整合應用',
        description: '可整合的第三方應用數',
        unit: '個',
      },
      {
        name: '月度使用額度',
        description: '免費方案的月度限制',
        unit: '次',
      },
      {
        name: 'AI 準確性',
        description: '摘要與推薦的準確性',
        unit: '%',
      },
    ],
    rankingCriteria: [
      {
        name: '搜尋品質',
        description: '搜尋結果的相關性與準確性',
        weight: 0.25,
      },
      {
        name: '摘要能力',
        description: '文件與會議摘要的品質',
        weight: 0.2,
      },
      {
        name: '整合程度',
        description: '與常用應用的整合廣度',
        weight: 0.2,
      },
      {
        name: '協作功能',
        description: '團隊協作與分享功能',
        weight: 0.15,
      },
      {
        name: '易用性',
        description: '介面與使用者體驗',
        weight: 0.2,
      },
    ],
    tools: [
      {
        toolId: 'perplexity',
        toolName: 'Perplexity',
        benchmarks: {
          '搜尋響應時間': 800,
          '支援的整合應用': 50,
          '月度使用額度': 9999,
          'AI 準確性': 88,
        },
        rankings: {
          '搜尋品質': 9,
          '摘要能力': 8,
          '整合程度': 7,
          '協作功能': 7,
          '易用性': 9,
        },
        overallScore: 8.0,
        pros: [
          '即時網路搜尋',
          '清晰的來源引用',
          '快速響應',
          '免費額度充裕',
        ],
        cons: [
          '整合功能有限',
          '協作功能基礎',
        ],
        bestFor: ['研究', '即時資訊', '一般使用者'],
      },
      {
        toolId: 'otter',
        toolName: 'Otter.ai',
        benchmarks: {
          '搜尋響應時間': 500,
          '支援的整合應用': 100,
          '月度使用額度': 600,
          'AI 準確性': 91,
        },
        rankings: {
          '搜尋品質': 8,
          '摘要能力': 9,
          '整合程度': 9,
          '協作功能': 8,
          '易用性': 8,
        },
        overallScore: 8.4,
        pros: [
          '精準的會議轉錄',
          '豐富的整合',
          '團隊協作',
          '行動應用',
        ],
        cons: [
          '訂閱費用較高',
          '免費額度有限',
        ],
        bestFor: ['會議紀錄', '遠端工作', '團隊協作'],
      },
      {
        toolId: 'mem',
        toolName: 'Mem',
        benchmarks: {
          '搜尋響應時間': 400,
          '支援的整合應用': 30,
          '月度使用額度': 9999,
          'AI 準確性': 85,
        },
        rankings: {
          '搜尋品質': 7,
          '摘要能力': 7,
          '整合程度': 6,
          '協作功能': 7,
          '易用性': 8,
        },
        overallScore: 7.0,
        pros: [
          '智慧筆記組織',
          '知識管理',
          '免費使用',
          '隱私優先',
        ],
        cons: [
          '社群較小',
          '整合有限',
          '功能不夠全面',
        ],
        bestFor: ['個人知識管理', '隱私敏感用戶', '筆記記錄'],
      },
    ],
    useCaseFilters: [
      { id: 'research', name: '研究工作', icon: '🔍' },
      { id: 'meetings', name: '會議管理', icon: '📞' },
      { id: 'knowledge', name: '知識管理', icon: '📚' },
      { id: 'presentations', name: '簡報製作', icon: '🎯' },
    ],
  },
};
