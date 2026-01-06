import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Eye, Shield, Smartphone, ArrowRight, BarChart3, MessageSquare, Clock, Zap } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import heroImg from './assets/hero_child_eye.png';
import motherImg from './assets/mother_smiling.png';
import webcamImg from './assets/webcam_child_face.png';
import browserImg from './assets/study_browser_screen.png';
import consultImg from './assets/consultation_premium.png';
import aiConsultImg from './assets/consultation_robot_v3.png';
import './App.css';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

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
  { grade: '초등', score: 98 },
  { grade: '중1', score: 90 },
  { grade: '중2', score: 55 },
  { grade: '중3', score: 38 },
  { grade: '고1', score: 22 },
];

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <BetaResults />
        <SolutionSection />
        <SystemSection />
        <ReportSection />
        <SocialProofSection />
        <ConsultationForm />
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
      <button className="cta-button" onClick={() => document.getElementById('consultation').scrollIntoView({ behavior: 'smooth' })}>내 아이 집중력 MRI 촬영하기</button>
    </div>
  </header>
);

const HeroSection = () => (
  <section className="hero">
    <div className="hero-bg">
      <img src={heroImg} alt="Focused Eyes" />
      <div className="hero-overlay"></div>
    </div>
    <div className="container hero-content">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-badge-container">
          <span className="hero-badge">골든타임의 경고</span>
        </div>
        <h1>초5~중2, 우리 아이 전두엽을 살릴<br />마지막 <span>골든타임</span>입니다.</h1>
        <p>아이의 의지력을 결정하는 것은 막연한 다짐과 학부모의 압박이 아닌 시스템입니다.</p>
        <div className="hero-actions">
          <button className="primary-btn" onClick={() => document.getElementById('consultation').scrollIntoView({ behavior: 'smooth' })}>내 아이 집중력 MRI 촬영하기 <ArrowRight size={18} /></button>
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
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2>우리 아이, 진짜 공부하고 있을까요?</h2>
        <p>책상 앞 3시간, 하지만 <strong>진짜 몰입은 단 12분</strong>일 수 있습니다.</p>
      </motion.div>

      <motion.div
        className="problem-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="problem-card"
          variants={cardVariants}
        >
          <h3>평균 집중력 실태</h3>
          <div className="stat-value">단 8초</div>
          <p>스마트폰 중독으로 짧아진 뇌의 집중 시간</p>
          <motion.div
            className="chart-container"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={attentionData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#ef4444"
                  fillOpacity={1}
                  fill="url(#colorValue)"
                  animationDuration={2000}
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>
          <p className="card-footer">자극적인 미디어에 중독된 '팝콘 브레인' 현상</p>
        </motion.div>

        <motion.div
          className="problem-card highlight"
          variants={cardVariants}
        >
          <h3>중등 성적 절벽</h3>
          <p>심층 집중력 부재로 인한 성적 급락 곡선</p>
          <motion.div
            className="chart-container"
            initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
            whileInView={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={cliffData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <XAxis dataKey="grade" stroke="#64748B" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                  labelStyle={{ fontWeight: 700, color: '#0F172A' }}
                />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#ef4444"
                  strokeWidth={4}
                  dot={{ r: 6, fill: '#ef4444', strokeWidth: 2, stroke: '#fff' }}
                  activeDot={{ r: 8, strokeWidth: 0 }}
                  animationDuration={2500}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
          <p className="card-footer">초등 상위권 80%가 중학 진학 후 경험하는 현실</p>
          <div className="cliff-warning">
            <p>단순 암기인 초등 공부는 집중력 없이도 가능합니다.<br />
              하지만 사고력을 요하는 고등 지식은 <strong>'심층 집중력'</strong> 없이는 절대 정복할 수 없습니다.</p>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className="golden-time-callout glass"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Clock className="icon" size={32} />
        <p>
          지금이 아이의 뇌의 전두엽을 살릴 <strong>마지막 골든타임</strong>입니다.<br />
          지금 엉덩이 힘을 기르지 못한 아이들은 고등학교 진학 후 성적이 '뚝' 떨어지는 절벽을 경험하게 됩니다.
        </p>
      </motion.div>
    </div>
  </section>
);

const BetaResults = () => (
  <section className="beta-results">
    <div className="container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="section-badge">REAL EVIDENCE</div>
        <h2>[실제 베타 테스터 1개월 변화 수치]</h2>
        <p className="beta-impact-text">수천 개의 데이터가 증명하는 몰입의 힘, 이제 우리 아이의 차례입니다.</p>
      </motion.div>
      <motion.div
        className="beta-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="beta-card" variants={itemVariants} whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.2)" }}>
          <div className="beta-user">A학생 (초6)</div>
          <div className="beta-metric">평균 집중 지속 시간</div>
          <div className="beta-value-group">
            <span className="before">12분</span>
            <ArrowRight className="arrow" />
            <span className="afterhighlight">42분</span>
          </div>
          <div className="beta-growth">250% 상승 🚀</div>
        </motion.div>
        <motion.div className="beta-card" variants={itemVariants} whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.2)" }}>
          <div className="beta-user">B학생 (중2)</div>
          <div className="beta-metric">일일 순공 중 '딴짓 비율'</div>
          <div className="beta-value-group">
            <span className="before">40%</span>
            <ArrowRight className="arrow" />
            <span className="afterhighlight">5% 미만</span>
          </div>
          <div className="beta-growth">획기적 감소 📉</div>
        </motion.div>
      </motion.div>

      <div className="trust-bridge">
        <p>단순한 수치가 아닙니다. <strong>아이의 미래를 바꾸는 실질적인 변화</strong>입니다.</p>
        <div className="line"></div>
      </div>
    </div>
  </section>
);

// ... (other components)

const SolutionSection = () => (
  <section id="solution" className="solution">
    <div className="container solution-layout">
      <motion.div
        className="solution-text"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-badge">AI SOLUTION</div>
        <h2>AI가 되살리는 '엉덩이 힘'</h2>
        <div className="solution-features">
          <div className="feature-item">
            <div className="icon-box"><Eye size={24} /></div>
            <div>
              <h4>0.1초의 빈틈없는 감시</h4>
              <p>저희 AI 학습관은 단순히 캠을 켜놓는 것이 아닙니다. 0.1초 단위 시선 추적 기술을 통해 아이의 뇌가 활성화되는 '진짜 몰입 시간'을 측정합니다.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="icon-box"><Zap size={24} /></div>
            <div>
              <h4>AI 시선 & 자세 분석</h4>
              <p>AI가 시선과 고개 각도를 분석하여 <strong>정면 응시(집중), 옆눈질(분산), 엎드림(피로)</strong>을 실시간 감지합니다.</p>
            </div>
          </div>
        </div>
        <div className="solution-impact-box glass">
          <div className="impact-header">
            <Zap size={20} className="icon" />
            <span>데이터가 만드는 성취감</span>
          </div>
          <ul className="impact-list">
            <li><strong>0.1초 정밀 분석</strong>: 고개 각도와 시선을 즉시 포착하여 리포트</li>
            <li><strong>정량적 데이터 제공</strong>: 막연한 칭찬 대신 숫자로 보여주는 몰입도</li>
            <li><strong>아이 스스로 변화</strong>: 자신의 성장을 확인하며 얻는 공부 자신감</li>
          </ul>
        </div>
      </motion.div>
      <motion.div
        className="solution-visual"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mockup-container">
          <div className="dashboard-mockup dark-glass">
            <div className="mockup-header">
              <span>LIVE Analysis</span>
              <div className="status-dot"></div>
            </div>
            <div className="mockup-body">
              <div className="live-view-grid">
                <div className="webcam-view">
                  <img src={webcamImg} alt="Child Webcam" />
                  <div className="gaze-overlay">
                    <div className="gaze-dot pulse"></div>
                    <div className="gaze-label">Focusing</div>
                  </div>
                </div>
                <div className="browser-view">
                  <img src={browserImg} alt="Study Browser" />
                  <div className="screen-label">Student Screen</div>
                </div>
              </div>
              <div className="metrics">
                <div className="metric"><span>집중도</span><strong>92%</strong></div>
                <div className="metric"><span>순공시간</span><strong>1h 42m</strong></div>
              </div>
            </div>
          </div>
          <img src={motherImg} alt="Mother smiling" className="floating-img" />
        </div>
      </motion.div>
    </div>
  </section>
);

const SystemSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const y2 = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const y3 = useTransform(scrollYProgress, [0, 1], [300, 0]);
  const y4 = useTransform(scrollYProgress, [0, 1], [400, 0]);

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section id="system" className="system" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          style={{ opacity: opacity }}
          transition={{ duration: 0.8 }}
        >
          <h2>상위 1%의 습관, '알림 서비스'</h2>
          <p>감시가 아니라, 아이의 학습 환경을 지키는 가장 확실한 방법입니다.</p>
        </motion.div>

        <div className="kakao-mockup">
          {/* Message 1 */}
          <motion.div className="kakao-msg-wrapper" style={{ y: y1, opacity: opacity }}>
            <div className="kakao-profile"><Shield size={20} fill="#10B981" color="#10B981" /></div>
            <div className="kakao-content">
              <div className="kakao-name">FlowGuard</div>
              <div className="kakao-bubble">
                [격려] OO이가 초집중 상태입니다! (60분 돌파) 🚀
              </div>
            </div>
          </motion.div>
          {/* Message 2 */}
          <motion.div className="kakao-msg-wrapper" style={{ y: y2, opacity: opacity }}>
            <div className="kakao-profile"><Shield size={20} fill="#10B981" color="#10B981" /></div>
            <div className="kakao-content">
              <div className="kakao-name">FlowGuard</div>
              <div className="kakao-bubble warning">
                [주의] OO이가 3분간 자리를 비웠습니다. 확인이 필요합니다. ⚠️
              </div>
            </div>
          </motion.div>
          {/* Message 3 */}
          <motion.div className="kakao-msg-wrapper" style={{ y: y3, opacity: opacity }}>
            <div className="kakao-profile"><Shield size={20} fill="#10B981" color="#10B981" /></div>
            <div className="kakao-content">
              <div className="kakao-name">FlowGuard</div>
              <div className="kakao-bubble">
                수학 공부 종료. ✅<br />
                순공 시간: 1시간 40분<br />
                평균 집중도: 88% (상위 10%)<br />
                📝 OO이의 한 줄 회고: '오늘은 함수 문제를 다 풀어서 뿌듯해요.'
              </div>
            </div>
          </motion.div>
          {/* Message 4 */}
          <motion.div className="kakao-msg-wrapper" style={{ y: y4, opacity: opacity }}>
            <div className="kakao-profile"><Shield size={20} fill="#10B981" color="#10B981" /></div>
            <div className="kakao-content">
              <div className="kakao-name">FlowGuard</div>
              <div className="kakao-bubble clickable">
                📊 [일간 리포트] <br />
                오늘 OO이는 총 3시간 20분간 몰입했습니다.<br />
                오늘 가장 집중력이 높았던 시간은 오후 4시였습니다.<br />
                <span className="link-text">클릭 시 일간 상세 리포트 페이지 접속</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};



// Animated Number Component
const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return <motion.span ref={ref}>{display}</motion.span>;
};

const ReportSection = () => {
  const circumference = 2 * Math.PI * 90; // r=90

  return (
    <section id="report" className="report">
      <div className="container">
        <motion.div
          className="report-card glass"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
        >
          <div className="report-header">
            <h3>오늘의 몰입 리포트</h3>
            <span className="date">2026. 01. 05</span>
          </div>
          <div className="report-grid">
            <div className="main-stats">
              <div className="stat-circle-group">
                <div className="score-circle-wrapper">
                  <svg width="220" height="220" viewBox="0 0 220 220" className="score-svg">
                    <circle cx="110" cy="110" r="90" fill="none" stroke="#e2e8f0" strokeWidth="15" />
                    <motion.circle 
                      cx="110" 
                      cy="110" 
                      r="90" 
                      fill="none" 
                      stroke="#10B981" 
                      strokeWidth="15" 
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      initial={{ strokeDashoffset: circumference }}
                      whileInView={{ strokeDashoffset: circumference * (1 - 0.88) }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                      style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
                    />
                  </svg>
                  <div className="score-content">
                    <span className="label">몰입 점수</span>
                    <span className="value"><AnimatedNumber value={88} /></span>
                    <span className="rank">상위 5%</span>
                  </div>
                </div>
                <div className="eff-metric">
                  <span>학습 효율</span>
                  <strong><AnimatedNumber value={94} />%</strong>
                </div>
              </div>
            </div>
            <div className="report-details">
              <div className="detail-item">
                <div className="detail-header">
                  <span>순도 100% 몰입 시간</span>
                  <strong>2시간 15분</strong>
                </div>
                <p className="detail-sub">전체 학습 시간 중 '진짜 집중한 시간'만 추출하여 표시.</p>
                <div className="progress-bar">
                  <motion.div 
                    className="fill" 
                    initial={{ width: 0 }}
                    whileInView={{ width: '92%' }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                  />
                </div>
              </div>

              <div className="retrospection-grid">
                <div className="child-voice">
                  <strong>아이의 목소리 🗣️</strong>
                  <p>"수학 문제 풀다 막혀서 잠깐 멍때렸어요. 내일은 모르는 건 넘어가고 나중에 풀게요."</p>
                </div>
                <div className="ai-solution">
                  <strong>AI의 솔루션 🤖</strong>
                  <p>"OO이는 오후 4시경 집중력이 급락하는 패턴을 보입니다. 이때 10분간의 스트레칭을 추천합니다."</p>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-container">
            <div className="timeline-header">
              <span>몰입 타임라인</span>
              <span className="legend">
                <i className="dot green"></i> 집중 <i className="dot red"></i> 하락
              </span>
            </div>
            <motion.div 
              className="traffic-light-timeline"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 }
                }
              }}
            >
              <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="timeline-segment green"></motion.div>
              <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="timeline-segment green"></motion.div>
              <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="timeline-segment yellow"></motion.div>
              <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="timeline-segment green"></motion.div>
              <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="timeline-segment red clickable">
                <div className="tooltip-reason">사유: 수학 문제 막힘</div>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="timeline-segment green"></motion.div>
            </motion.div>
            <p className="timeline-hint">세션 종료 시 집중 하락 구간의 사유를 직접 입력해야 합니다.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


const SocialProofSection = () => (
  <section className="social-proof">
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="review-box">
        <blockquote>"아이와 싸우는 시간이 줄었어요. 이제 데이터로 칭찬해주니 아이도 성취감을 느껴요."</blockquote>
        <cite>- 중등 2학년 학부모 김OO님</cite>
      </div>
      <div className="pricing">
        <h3>하루 3,300원</h3>
        <p>아이의 10년 뒤 성적을 바꾸는 가장 저렴한 보험</p>
        <motion.button
          className="final-cta highlight-pulse"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('consultation').scrollIntoView({ behavior: 'smooth' })}
        >
          내 아이 전두엽 깨우기, 지금 시작하세요
        </motion.button>
      </div>
    </motion.div>
  </section>
);

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    grade: '초등 5학년',
    contact: '',
    inquiry: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const timestamp = new Date().toLocaleString();
    const submissionData = {
      ...formData,
      submittedAt: timestamp,
      userAgent: navigator.userAgent
    };

    console.log('Consultation Submitted:', submissionData);
    alert('상담 신청이 완료되었습니다. 전문가가 곧 연락드리겠습니다.');
  };

  return (
    <section id="consultation" className="consultation">
      <div className="container">
        <div className="consult-layout">
          <div className="consult-text">
            <div className="section-badge">무료 상담 신청</div>
            <h2>우리 아이의 공부 정체기,<br /> 전문가와 함께 해결하세요.</h2>
            <p>FlowGuard의 시스템 도입 전, 아이의 성향과 집중력 실태를 무료로 진단해 드립니다.</p>

            <form className="consult-form" onSubmit={handleSubmit}>
              <div className="form-group-row">
                <div className="form-group">
                  <label>학부모 성함</label>
                  <input
                    type="text"
                    placeholder="성함을 입력해주세요"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>아이 학년</label>
                  <select
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                  >
                    <option>초등 5학년</option>
                    <option>초등 6학년</option>
                    <option>중등 1학년</option>
                    <option>중등 2학년</option>
                    <option>중등 3학년</option>
                    <option>고등 1학년</option>
                    <option>고등 2학년</option>
                    <option>고등 3학년</option>
                    <option>기타</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>연락처</label>
                <input
                  type="tel"
                  placeholder="010-0000-0000"
                  required
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>문의 사항 (선택)</label>
                <textarea
                  placeholder="아이의 학습 고민이나 궁금한 점을 자유롭게 적어주세요."
                  rows="3"
                  value={formData.inquiry}
                  onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                무료 상담 전문가 연결하기
              </button>
            </form>
          </div>
          <div className="consult-visual">
            <motion.img
              src={aiConsultImg}
              alt="AI Consultation Robot"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{ maxWidth: '100%', height: 'auto', dropShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="footer" className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="footer-logo">FlowGuard</div>
        <p>&copy; 2026 FlowGuard. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default App;
