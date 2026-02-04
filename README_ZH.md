# 🤖 AI-Hub：人工智能工具排名與基準測試平台

> 發現、比較和評估頂級 AI 工具的完整平台 | Discover, Compare & Benchmark Top AI Tools

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0-brightgreen.svg)

---

## ✨ 平台特色

### 🎯 全面的評估體系
- **7 大核心分類**：Agentic AI、圖像生成、寫作與內容、程式碼助手、語音與音訊、影片生成、生產力工具
- **多維度評分**：支援工作流程自動化、API 擴展性、易用性、模型選擇、社群支援等多個維度
- **實時排名系統**：動態計算和展示各工具在不同分類中的排名

### 💼 專業的設計架構
- **全棧應用**：前端採用 React + TypeScript + Tailwind CSS，後端採用 Go + Goravel 框架
- **響應式設計**：完美適配桌面、平板和行動裝置
- **高性能渲染**：Vite 構建優化，快速加載和流暢交互

### 🔍 智能搜尋與篩選
- **分類篩選系統**：快速定位所需的 AI 工具類別
- **高級搜尋功能**：支援工具名稱、特性等多維度搜尋
- **實時數據更新**：始終展示最新的工具評分和排名

---

## 📋 目錄

- [快速開始](#-快速開始)
- [系統需求](#-系統需求)
- [安裝指南](#-安裝指南)
- [項目結構](#-項目結構)
- [技術棧](#-技術棧)
- [主要功能](#-主要功能)
- [開發指南](#-開發指南)
- [貢獻指南](#-貢獻指南)
- [許可證](#-許可證)

---

## 🚀 快速開始

### 最快上手方式（3 分鐘）

#### 方式一：使用容器化部署（推薦）

```bash
# 1. 克隆項目
git clone https://github.com/yourusername/AI-Hub.git
cd AI-Hub

# 2. 啟動容器服務
cd src/backend
docker-compose up -d

# 3. 前端開發
cd ../../src/frontend
pnpm install
pnpm dev

# 4. 訪問應用
# 前端：http://localhost:5173
# 後端 API：http://localhost:8000
```

#### 方式二：本地直接部署

```bash
# 後端設置
cd src/backend
go mod download
go run main.go

# 前端設置（新終端）
cd src/frontend
pnpm install
pnpm dev
```

### 🎯 首次使用指南

#### 第 1 步：訪問主頁
```
瀏覽 http://localhost:5173
查看所有 AI 工具分類卡片
```

#### 第 2 步：選擇感興趣的分類
```
點擊任意分類（例如：Agentic AI、圖像生成等）
查看該分類內的所有工具
```

#### 第 3 步：查看排名與基準測試
```
點擊「查看此分類的排名與基準測試」按鈕
進入排名詳情頁面，查看工具評分對比
```

#### 第 4 步：深入了解工具詳情
```
點擊具體工具卡片
查看完整的評分指標、特色功能、定價信息等
```

---

## 💻 系統需求

### 最小要求
| 項目 | 要求 |
|------|------|
| **Node.js** | ≥ 18.0.0 |
| **Go** | ≥ 1.21 |
| **npm/pnpm** | ≥ 8.0.0 |
| **Docker** | ≥ 20.10.0 (可選) |

### 推薦環境
```
系統：Windows 10/11、macOS 12+、Ubuntu 20.04+
內存：至少 8 GB RAM
存儲：至少 2 GB 可用空間
```

---

## 📦 安裝指南

### 前置準備

#### 1. 安裝依賴工具
```bash
# 驗證 Node.js 版本
node --version    # 應該 ≥ 18.0.0

# 驗證 Go 版本
go version        # 應該 ≥ 1.21

# 安裝 pnpm（如未安裝）
npm install -g pnpm
```

#### 2. 克隆項目
```bash
git clone https://github.com/yourusername/AI-Hub.git
cd AI-Hub
```

### 後端安裝

```bash
# 進入後端目錄
cd src/backend

# 下載依賴
go mod download
go mod tidy

# 編譯項目（可選）
go build -o ai-hub main.go

# 運行服務
go run main.go
# 或使用編譯後的二進制
./ai-hub
```

### 前端安裝

```bash
# 進入前端目錄
cd src/frontend

# 安裝依賴
pnpm install

# 開發服務（包含熱重載）
pnpm dev

# 生產構建
pnpm build

# 預覽構建結果
pnpm preview
```

### 使用 Docker 部署

```bash
cd src/backend

# 構建並運行
docker-compose up -d

# 查看日誌
docker-compose logs -f

# 停止服務
docker-compose down
```

---

## 📁 項目結構

```
AI-Hub/
├── src/
│   ├── backend/                    # Go 後端服務
│   │   ├── app/
│   │   │   ├── facades/           # 服務 Facade 層
│   │   │   └── http/
│   │   │       └── controllers/   # 控制器
│   │   ├── bootstrap/             # 應用啟動配置
│   │   ├── config/                # 配置文件
│   │   ├── database/
│   │   │   └── migrations/        # 數據庫遷移
│   │   ├── routes/                # 路由定義
│   │   ├── main.go                # 入口文件
│   │   ├── go.mod                 # Go 依賴管理
│   │   └── docker-compose.yml    # Docker 編排
│   │
│   └── frontend/                   # React 前端應用
│       ├── src/
│       │   ├── components/        # React 組件
│       │   │   ├── ui/           # UI 基礎組件庫
│       │   │   └── *.tsx         # 業務組件
│       │   ├── pages/            # 頁面組件
│       │   ├── data/             # 靜態數據
│       │   ├── hooks/            # 自定義 Hook
│       │   ├── lib/              # 工具函數
│       │   ├── App.tsx           # 主應用組件
│       │   └── main.tsx          # 前端入口
│       ├── package.json
│       ├── vite.config.ts        # Vite 配置
│       ├── tailwind.config.js    # Tailwind CSS 配置
│       └── tsconfig.json         # TypeScript 配置
│
├── docs/                           # 文檔
│   ├── README.md                  # 本文件
│   ├── QUICK_REFERENCE.md         # 快速參考指南
│   ├── BENCHMARK_GUIDE.md         # 基準測試詳細指南
│   ├── USAGE_EXAMPLES.md          # 使用示例
│   ├── IMPLEMENTATION_SUMMARY.md  # 實現細節
│   └── FINAL_SUMMARY.md           # 項目總結
│
└── LICENSE                         # MIT 許可證
```

---

## 🔧 技術棧

### 前端技術
```
├─ React 18.x              # UI 框架
├─ TypeScript 5.x          # 靜態類型檢查
├─ Vite 5.x                # 極速打包工具
├─ Tailwind CSS 3.x        # 工具類 CSS 框架
├─ React Router            # 路由管理
└─ Axios                   # HTTP 客戶端
```

### 後端技術
```
├─ Go 1.21+                # 編程語言
├─ Goravel                 # Web 框架
├─ GORM                    # ORM 框架
├─ PostgreSQL/MySQL        # 數據庫
└─ Docker                  # 容器化部署
```

---

## ⭐ 主要功能

### 1. 工具分類與展示
- ✅ 7 大核心分類頁面
- ✅ 響應式卡片設計
- ✅ 工具詳情頁面
- ✅ 快速預覽窗口

### 2. 排名與基準測試
- ✅ 多維度評分系統
- ✅ 實時排名計算
- ✅ 評分對比表格
- ✅ 趨勢分析圖表

### 3. 搜尋與篩選
- ✅ 全局搜尋功能
- ✅ 分類快速篩選
- ✅ 多條件組合搜尋
- ✅ 搜尋結果高亮

### 4. 數據管理
- ✅ 結構化數據存儲
- ✅ RESTful API 接口
- ✅ 數據驗證與淨化
- ✅ 實時數據更新

---

## 🛠️ 開發指南

### 本地開發流程

#### 1. 啟動開發環境
```bash
# 啟動後端（終端 1）
cd src/backend && go run main.go

# 啟動前端開發服務（終端 2）
cd src/frontend && pnpm dev
```

#### 2. 開發常用命令

```bash
# 前端開發
pnpm dev          # 啟動開發伺服器（熱更新）
pnpm build        # 生產構建
pnpm preview      # 預覽構建結果
pnpm lint         # 代碼檢查

# 後端開發
go run main.go    # 運行開發服務
go build          # 編譯為二進制
go test ./...     # 運行測試
```

#### 3. 代碼風格規範
- 前端：遵循 ESLint 配置
- 後端：遵循 Go 官方代碼風格
- 使用 TypeScript 進行類型檢查
- 使用 Prettier 進行代碼格式化

### API 集成示例

```javascript
// 在 React 組件中調用後端 API
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api'
});

// 獲取分類排名
const getCategoryBenchmark = async (category) => {
  try {
    const response = await api.get(`/category/${category}/benchmark`);
    return response.data;
  } catch (error) {
    console.error('API 錯誤:', error);
  }
};
```

---

## 🤝 貢獻指南

我們歡迎各種形式的貢獻！無論是報告 Bug、提交功能建議還是代碼貢獻。

### 貢獻流程

#### 1. Fork 項目
```bash
# 在 GitHub 上 Fork 本倉庫
```

#### 2. 創建功能分支
```bash
git checkout -b feature/your-feature-name
```

#### 3. 提交代碼
```bash
# 確保代碼通過測試和 Lint
git add .
git commit -m "feat: add your feature description"
git push origin feature/your-feature-name
```

#### 4. 提交 Pull Request
```
在 GitHub 上創建 Pull Request
填寫清晰的 PR 描述
等待代碼審查和合併
```

### 提交規範
```
feat:     新功能
fix:      Bug 修復
docs:     文檔更新
style:    代碼風格（不影響功能）
refactor: 代碼重構
test:     測試相關
chore:    構建、依賴更新等
```

---

## 📚 更多資源

### 詳細文檔
- 📖 [快速參考指南](QUICK_REFERENCE.md) - 5 分鐘快速上手
- 📖 [基準測試詳細指南](BENCHMARK_GUIDE.md) - 完整功能說明
- 📖 [使用示例](USAGE_EXAMPLES.md) - 實際使用場景
- 📖 [實現細節](IMPLEMENTATION_SUMMARY.md) - 技術架構深析
- 📖 [項目總結](FINAL_SUMMARY.md) - 整體項目概覽

### 快速導航
```
新用戶       → 先讀 QUICK_REFERENCE.md
了解功能     → 再讀 BENCHMARK_GUIDE.md
看實際例子   → 然後看 USAGE_EXAMPLES.md
開發者       → 深入 IMPLEMENTATION_SUMMARY.md
項目經理     → 查看 FINAL_SUMMARY.md
```

---

## 🐛 常見問題

### Q1: 如何訪問應用？
A: 前端默認運行在 `http://localhost:5173`，後端 API 在 `http://localhost:8000`

### Q2: 如何修改數據？
A: 編輯 `src/frontend/src/data/aiWebsites.ts` 中的工具數據，或通過後端 API 接口

### Q3: 可以自定義分類嗎？
A: 可以，編輯後端配置文件並更新前端對應組件，詳見開發指南

### Q4: 如何部署到生產環境？
A: 使用 `pnpm build` 構建前端，使用 `go build` 編譯後端，然後部署二進制文件

---

## 📊 項目統計

| 指標 | 數值 |
|------|------|
| **核心分類** | 7 個 |
| **評估工具** | 20+ 個 |
| **評分維度** | 5 個 |
| **前端組件** | 30+ 個 |
| **代碼行數** | 5000+ 行 |

---

## 📝 更新日誌

### v1.0 (2025-02-04)
- ✨ 正式發布 AI-Hub 平台
- 🎯 支持 7 大分類的工具展示
- 📊 實現多維度評分與排名系統
- 🔍 完整的搜尋與篩選功能
- 📱 全平台響應式設計

---

## 👥 作者與聯絡

**開發者**：AI-Hub Team  
**郵箱**：support@ai-hub.example.com  
**網站**：https://ai-hub.example.com

---

## 📄 許可證

本項目採用 [MIT 許可證](LICENSE) - 詳見 LICENSE 文件

```
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...
```

---

## 🙏 致謝

感謝所有為本項目做出貢獻的開發者和用戶！

特別感謝：
- React 社區提供的優秀工具和最佳實踐
- Goravel 框架的強大功能和文檔
- Tailwind CSS 帶來的卓越開發體驗

---

## ⭐ 如果有幫助，請給我們一個 Star！

**[↑ 返回頂部](#-ai-hub人工智能工具排名與基準測試平台)**

---

<p align="center">
  <strong>Made with ❤️ by AI-Hub Team</strong>
</p>
