import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Shield, Smartphone, ArrowRight, BarChart3, MessageSquare, Clock, Zap } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import './App.css';

// Mock Data for graphs
const attentionData = [
  { name: 'Start', value: 50 },
  { name: '10m', value: 80 },
  { name: '20m', value: 20 },
  { name: '30m', value: 90 },
  { name: '40m', value: 40 },
  { name: '50m', value: 10 },
];

const cliffData = [
  { grade: '초등', score: 95 },
  { grade: '초6', score: 92 },
  { grade: '중1', score: 85 },
  { grade: '중2', score: 65 },
  { grade: '중3', score: 45 },
  { grade: '고1', score: 30 },
];

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <SystemSection />
        <ReportSection />
        <SocialProofSection />
      </main>
      <Footer />
    </div>
  );
}

const Header = () => (
  <header className="header glass">
    <div className="container header-content">
      <div className="logo">
        <Shield size={24} className="logo-icon" />
        <span>FlowGuard</span>
      </div>
      <nav className="desktop-nav">
        <a href="#problem">위험성</a>
        <a href="#solution">AI솔루션</a>
        <a href="#system">시스템</a>
        <a href="#report">리포트</a>
      </nav>
      <button className="cta-button">무료 체험 신청</button>
    </div>
  </header>
);

const HeroSection = () => (
  <section className="hero">
    <div className="hero-bg">
      <img src="/src/hero_child_eye.png" alt="Focused Eyes" />
      <div className="hero-overlay"></div>
    </div>
    <div className="container hero-content">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-badge">골든타임의 경고</div>
        <h1>초5~중2, 우리 아이 전두엽을 살릴<br />마지막 <span>골든타임</span>입니다.</h1>
        <p>책상 앞 3시간, 하지만 진짜 몰입은 단 12분일 수 있습니다.<br />'공부하는 척'이 아닌 '진짜 공부'를 시작할 때입니다.</p>
        <div className="hero-actions">
          <button className="primary-btn">무료 체험 신청하기 <ArrowRight size={18} /></button>
          <button className="secondary-btn">집중력 자가진단</button>
        </div>
      </motion.div>
    </div>
    <div className="gaze-ui-overlay">
      <div className="gaze-target pulse"></div>
      <div className="gaze-line"></div>
      <div className="gaze-data">0.1s Gaze Tracking ACTIVE</div>
    </div>
  </section>
);

const ProblemSection = () => (
  <section id="problem" className="problem">
    <div className="container">
      <div className="section-header">
        <h2>'팝콘 브레인'과 '중등 절벽'</h2>
        <p>지금 엉덩이 힘을 기르지 못하면 고등학교 성적은 반드시 무너집니다.</p>
      </div>
      
      <div className="problem-grid">
        <div className="problem-card">
          <h3>평균 집중력 실태</h3>
          <div className="stat-value">단 8초</div>
          <p>스마트폰 중독으로 짧아진 뇌의 집중 시간</p>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={attentionData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="value" stroke="#ef4444" fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="card-footer">자극적인 미디어에 중독된 '팝콘 브레인' 현상</p>
        </div>

        <div className="problem-card highlight">
          <h3>중등 성적 절벽</h3>
          <p>심층 집중력 부재로 인한 성적 급락 곡선</p>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={cliffData}>
                <XAxis dataKey="grade" stroke="#44403C" />
                <Tooltip />
                <Line type="step" dataKey="score" stroke="#ef4444" strokeWidth={3} dot={{ r: 6, fill: '#ef4444' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="card-footer">초등 상위권 80%가 중학 진학 후 경험하는 현실</p>
        </div>
      </div>
    </div>
  </section>
);

const SolutionSection = () => (
  <section id="solution" className="solution">
    <div className="container solution-layout">
      <div className="solution-text">
        <div className="section-badge">AI SOLUTION</div>
        <h2>AI가 되살리는 '엉덩이 힘'</h2>
        <div className="solution-features">
          <div className="feature-item">
            <div className="icon-box"><Eye size={24} /></div>
            <div>
              <h4>0.1초 시선 추적</h4>
              <p>눈동자의 흔들림까지 감지하여 '가짜 집중'을 가려냅니다.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="icon-box"><Smartphone size={24} /></div>
            <div>
              <h4>화면 실시간 미러링</h4>
              <p>아이의 화면, 이제 짐작하지 말고 확신하세요. 부모님 폰에서 실시간 확인 가능합니다.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="solution-visual">
        <div className="mockup-container">
          <div className="dashboard-mockup dark-glass">
            <div className="mockup-header">
              <span>LIVE Analysis</span>
              <div className="status-dot"></div>
            </div>
            <div className="mockup-body">
              <div className="gaze-map"></div>
              <div className="metrics">
                <div className="metric"><span>집중도</span><strong>92%</strong></div>
                <div className="metric"><span>순공시간</span><strong>1h 42m</strong></div>
              </div>
            </div>
          </div>
          <img src="/src/mother_smiling.png" alt="Mother smiling" className="floating-img" />
        </div>
      </div>
    </div>
  </section>
);

const SystemSection = () => (
  <section id="system" className="system">
    <div className="container">
      <div className="section-header">
        <h2>상위 1%의 습관, '알림 서비스'</h2>
        <p>감시가 아니라, 아이의 학습 환경을 지키는 가장 확실한 방법입니다.</p>
      </div>
      
      <div className="kakao-container">
        <div className="kakao-header">
          <MessageSquare size={18} />
          <span>FlowGuard 안심 알림</span>
        </div>
        <div className="kakao-messages">
          <div className="msg-row">
            <div className="msg bubble">[격려] OO이가 초집중 상태입니다! (60분 돌파) 🚀</div>
          </div>
          <div className="msg-row alien">
            <div className="msg bubble warning">[주의] OO이가 3분간 자리를 비웠습니다. 확인이 필요합니다. ⚠️</div>
          </div>
          <div className="msg-row">
            <div className="msg bubble">[분석] 지금 OO이가 졸음과 싸우고 있습니다. 따뜻한 차 한 잔 어떨까요? ☕</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ReportSection = () => (
  <section id="report" className="report">
    <div className="container">
      <div className="report-card glass">
        <div className="report-header">
          <h3>오늘의 몰입 리포트</h3>
          <span className="date">2026. 01. 05</span>
        </div>
        <div className="report-grid">
          <div className="main-score">
            <div className="score-circle">
              <span className="label">몰입 점수</span>
              <span className="value">88</span>
              <span className="rank">상위 5%</span>
            </div>
          </div>
          <div className="report-details">
            <div className="detail-item">
              <span>순도 100% 몰입 시간</span>
              <strong>2시간 15분</strong>
              <div className="progress-bar"><div className="fill" style={{width: '75%'}}></div></div>
            </div>
            <div className="ai-comment">
              <Zap size={20} className="icon" />
              <p>"오후 4시 집중력 저하 패턴 발견, 스트레칭 권장."</p>
            </div>
          </div>
        </div>
        <div className="traffic-light-timeline">
          <div className="timeline-segment green"></div>
          <div className="timeline-segment green"></div>
          <div className="timeline-segment yellow"></div>
          <div className="timeline-segment green"></div>
          <div className="timeline-segment red"></div>
          <div className="timeline-segment green"></div>
        </div>
        <p className="timeline-label">아이와 싸우지 마세요. 데이터로 대화하세요.</p>
      </div>
    </div>
  </section>
);

const SocialProofSection = () => (
  <section className="social-proof">
    <div className="container">
      <div className="review-box">
        <blockquote>"아이와 싸우는 시간이 줄었어요. 이제 데이터로 칭찬해주니 아이도 성취감을 느껴요."</blockquote>
        <cite>- 중등 2학년 학부모 김OO님</cite>
      </div>
      <div className="pricing">
        <h3>하루 3,300원</h3>
        <p>아이의 10년 뒤 성적을 바꾸는 가장 저렴한 보험</p>
        <button className="final-cta">내 아이 전두엽 깨우기, 지금 시작하세요</button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="footer-logo">FlowGuard</div>
        <p>&copy; 2026 FlowGuard. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default App;
