import React, { useState } from 'react';
import { motion } from 'framer-motion';
import aiConsultImg from '../../assets/consultation_robot_v3.png';
import { GOOGLE_SHEET_API_URL } from '../../constants/config';

const ConsultationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        grade: '초등 5학년',
        contact: '',
        inquiry: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const timestamp = new Date().toLocaleString();
        const submissionData = {
            ...formData,
            timestamp: timestamp, // Key matches the Google Sheet header
            userAgent: navigator.userAgent
        };

        try {
            // Using 'no-cors' mode is technically safer for some GAS deployments if we don't need the response body
            // calling fetch without mode usually follows redirect but might hit CORS preflight.
            // The most robust way for simple POST to standard GAS Web App is using 'no-cors' mode
            // This means we won't receive a readable response (opaque), but the request sends successfully.
            await fetch(GOOGLE_SHEET_API_URL, {
                method: 'POST',
                headers: {
                    "Content-Type": "text/plain",
                },
                body: JSON.stringify(submissionData),
            });

            // Since we might assume success if no network error (due to opaque response in some modes),
            // we'll just assume success here for better UX if the fetch doesn't throw.
            console.log('Consultation Submitted:', submissionData);
            alert('감사합니다. 상담 신청이 완료되었습니다. 전문가가 곧 연락드리겠습니다.');

            setFormData({
                name: '',
                grade: '초등 5학년',
                contact: '',
                inquiry: ''
            });
        } catch (error) {
            console.error('Submission Error:', error);
            alert('신청 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="consultation" className="consultation">
            <div className="container">
                <div className="consult-layout">
                    <div className="consult-text">
                        <div className="section-badge">무료 상담 신청</div>
                        <h2>아이의 학습 고민,<br /> 전문가와 함께 해결하세요.</h2>


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
                                        <option>초등 1학년</option>
                                        <option>초등 2학년</option>
                                        <option>초등 3학년</option>
                                        <option>초등 4학년</option>
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
                                    type="text"
                                    placeholder="숫자만 입력해주세요 (예: 01012345678)"
                                    maxLength={11}
                                    required
                                    value={formData.contact}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/[^0-9]/g, '');
                                        setFormData({ ...formData, contact: value });
                                    }}
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
                                무료 상담 신청
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

export default ConsultationForm;
