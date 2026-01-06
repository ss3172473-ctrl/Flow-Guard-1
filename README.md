# FlowGuard Landing Page

**FlowGuard**는 청소년의 디지털 학습 환경을 개선하고, 스마트폰 과몰입을 방지하는 AI 솔루션의 랜딩 페이지입니다.  
이 프로젝트는 React와 Vite를 기반으로 제작되었으며, 학부모님들의 상담 신청을 받기 위해 Google Sheets와 연동되어 있습니다.

## 🛠 기술 스택 (Tech Stack)

*   **Frontend**: [React](https://reactjs.org/), [Vite](https://vitejs.dev/)
*   **Styling**: Vanilla CSS (Custom Variables System via `index.css`)
*   **Animation**: [Framer Motion](https://www.framer.com/motion/)
*   **Deployment**: [Vercel](https://vercel.com/)
*   **Backend (Form)**: Google Apps Script (GAS) + Google Sheets

## 📂 프로젝트 구조 (Project Structure)

```bash
src/
├── assets/          # 이미지 파일 (로고, 일러스트 등)
├── components/      # React 컴포넌트
│   ├── layout/      # Header, Footer 등 레이아웃 컴포넌트
│   └── sections/    # 페이지의 각 섹션 (Hero, Problem, Solution, Consultation 등)
├── constants/       # 상수 데이터 (애니메이션 설정, 설정 파일 등)
│   ├── config.js    # ★ Google Apps Script URL 설정
│   ├── data.js      # 텍스트, 차트 데이터
│   └── animations.js # Framer Motion 변수
├── App.jsx          # 메인 앱 진입점 (섹션 조립)
└── index.css        # 전역 스타일 및 색상 변수 정의
```

## 🚀 시작하기 (Getting Started)

### 1. 설치 (Installation)
프로젝트를 클론한 후, 의존성을 설치합니다.

```bash
npm install
```

### 2. 개발 서버 실행 (Development)
로컬 환경에서 미리보기를 실행합니다.

```bash
npm run dev
```

### 3. 빌드 (Build)
배포를 위한 프로덕션 빌드를 생성합니다.

```bash
npm run build
```

---

## 📝 상담 신청 폼 연동 (Google Sheet Integration)

이 프로젝트는 별도의 서버 없이 **Google Apps Script**를 백엔드로 사용하여, 폼 데이터를 **Google Sheet**에 직접 저장합니다.

### 설정 방법
1.  **Google Sheet 생성**: 헤더(1행) 작성 필요 없음 (`appendRow` 방식 사용 시)
2.  **Apps Script 작성**: `도구` > `스크립트 편집기`에서 `doPost` 함수 작성.
3.  **웹 앱 배포**:
    *   **Execute as**: `Me` (나)
    *   **Who has access**: `Anyone` (누구나)
4.  **URL 연결**:
    *   배포된 Web App URL을 `src/constants/config.js` 파일의 `GOOGLE_SHEET_API_URL` 상수에 입력합니다.

```javascript
// src/constants/config.js
export const GOOGLE_SHEET_API_URL = "https://script.google.com/macros/s/......./exec";
```

### 주의 사항
*   Apps Script는 **반드시 스프레드시트와 연동된(Container-bound)** 스크립트를 사용하거나, 독립형인 경우 `openById`를 사용해야 합니다.
*   URL이 변경되면 `config.js`를 업데이트하고 다시 빌드/배포해야 합니다.

---

## 🎨 디자인 시스템

`index.css`에 정의된 CSS 변수를 사용하여 디자인 통일성을 유지합니다.

*   `--primary-deep-blue`: 메인 브랜드 컬러 (신뢰, 전문성)
*   `--secondary-emerald`: 강조 컬러 (성공, 해결)
*   `--accent-light-blue`: 배경 및 보조 컬러
*   `--text-dark`: 기본 텍스트
*   `--bg-warm-white`: 배경색

---

## 🚢 배포 (Deployment)

이 프로젝트는 **Vercel**에 최적화되어 있습니다.

```bash
npx vercel --prod
```
