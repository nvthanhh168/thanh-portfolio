/**
 * ====================================================================
 * THÀNH AI BOT - CUTE WANDERING AI ASSISTANT (POWERED BY GOOGLE GEMINI)
 * Portfolio Nguyễn Viết Thành | System & Network Engineer
 * ====================================================================
 */

(function () {
    'use strict';

    // 1. CẤU HÌNH API & THÔNG TIN HỆ THỐNG
    const DEFAULT_API_KEY = typeof atob === "function" ? atob("QVEuQWI4Uk42THNBNDhrT2JkZnRFOW1MVFV0YVdIdVdrWVZ6eEVqeGhybllQbGFmOWhLTFE=") : "";
    const GEMINI_MODELS = ["gemini-3.5-flash", "gemini-3.8-flash", "gemini-flash-latest"];
    
    const getApiKey = () => localStorage.getItem('portfolio_gemini_api_key') || DEFAULT_API_KEY;

    // Ngữ cảnh hệ thống chi tiết cho AI (System Prompt)
    const SYSTEM_INSTRUCTION = `
Bạn là "Thành Bot" (hoặc "CyberBot"), một trợ lý AI thông minh, cực kỳ dễ thương, thân thiện, lễ phép và dí dỏm trên trang web Portfolio của Kỹ sư Nguyễn Viết Thành.

THÔNG TIN VỀ NGUYỄN VIẾT THÀNH (PROFILE CONTEXT):
- Họ và tên: Nguyễn Viết Thành
- Nghề nghiệp / Chức danh: System & Network Engineer (Kỹ sư Hệ thống & Hạ tầng Mạng doanh nghiệp).
- Định hướng nghề nghiệp: Hướng tới IT Infrastructure Manager, IT Manager và Chief Information Officer (CIO).
- Kỹ năng & Kinh nghiệm thực tế:
  + Quản trị hệ thống Microsoft 365, Windows Server, Active Directory (AD DS), Group Policy (GPO), DNS, DHCP.
  + Hạ tầng mạng doanh nghiệp: Routing & Switching, VLAN, VPN Site-to-Site, Remote Access, QoS, NAT.
  + Tường lửa & Bảo mật: Sophos XGS Firewall, IPS/IDS, Endpoint Security, Central Intercept X, XDR, Email Security chống Phishing, Zero-Trust Network Access (ZTNA).
  + Mạng không dây & SDN: TP-Link Omada SDN Controller, khảo sát sóng RF, Seamless Roaming (802.11k/v/r).
  + Cân bằng tải & SD-WAN: Peplink Balance multi-WAN, SpeedFusion Bandwidth Bonding, WAN Smoothing, Hot Failover, InControl2 Cloud.
- Danh sách 10 Chứng chỉ Quốc tế đã đạt được:
  1. Sophos Firewall Administrator v22.0 (CT80) - Tường lửa XGS, VPN, NAT, Routing, IPS.
  2. Sophos Endpoint Administrator v6.0 (CT15) - Bảo mật điểm cuối, diệt mã độc, ransomware, XDR.
  3. Sophos Email v4.0 (CT45) - Bảo mật thư điện tử, chống phishing, mã hóa email gateway.
  4. Sophos Wireless v3.0 (CT90) - Thiết kế wifi doanh nghiệp, tối ưu Access Point trên Cloud.
  5. Sophos Workspace Protection v1.0 (CT55) - Môi trường số, phân quyền Zero-Trust ZTNA.
  6. Omada Certified Network Administrator (OCNA) Routing & Switching - Quản trị Switch/Router TP-Link Omada SDN.
  7. Omada Certified Network Administrator (OCNA) Wireless - Quản trị Wifi SDN, roaming và phát sóng vô tuyến.
  8. Peplink Certified Engineer (PCE) - Kỹ sư cân bằng tải SpeedFusion Bonding, Hot Failover.
  9. Peplink Certified Associate (PCA) - Vận hành đa WAN Peplink Balance, MAX router di động.
  10. Peplink Certified Sales Specialist (PCSS) - Tư vấn giải pháp kiến trúc mạng SD-WAN.
- Thông tin liên hệ:
  + Số điện thoại: 0364 892 201
  + Email: thanhnv168@gmail.com
  + Địa chỉ: Thành Phố Hồ Chí Minh, Việt Nam
  + Facebook: https://www.facebook.com/nvthanhhhhh
  + GitHub: https://github.com/nvthanhh168
  + File CV có sẵn trên web: "System & Network Engineer VN.pdf" (bản Việt) và "System & Network Engineer EN.pdf" (bản Anh).
- Các trang tính năng trên website:
  + Trang nghe nhạc trực tuyến: music.html
  + Kho lưu trữ tài liệu: storage.html
  + Blog chia sẻ kiến thức: blog.html
  + Cổng quản trị: admin.html

NHIỆM VỤ VÀ PHẠM VI TRẢ LỜI CỦA BẠN:
1. Trả lời chi tiết, chính xác các câu hỏi về Nguyễn Viết Thành (tiểu sử, kỹ năng, kinh nghiệm, 10 chứng chỉ, cách liên hệ hoặc xin CV).
2. TRẢ LỜI MỌI CÂU HỎI NGOÀI PROFILE: Bạn là một AI đa năng, nên bạn CÓ THỂ và RẤT SẴN SÀNG trả lời bất kỳ câu hỏi nào ngoài đời sống, kiến thức công nghệ thông tin, lập trình, khoa học, mẹo vặt, thời tiết, giải trí... mà người dùng hỏi bạn. Hãy trả lời chuẩn xác, dễ hiểu và thú vị!
3. Phong cách giao tiếp: Dễ thương, ấm áp, dùng các biểu tượng emoji phù hợp (🤖, ✨, 🚀, 💬, 👨‍💻, 🏆). Khi nói về anh Thành hãy xưng là "anh Thành" và xưng "mình" / "em" với người dùng.
4. Ngôn ngữ: Tự động phát hiện và trả lời theo ngôn ngữ của người dùng (Tiếng Việt hoặc Tiếng Anh).
5. Trình bày: Dùng định dạng Markdown đẹp mắt (gạch đầu dòng, in đậm từ khóa quan trọng).
`.trim();

    // 2. CÂU HỎI / LỜI CHÀO NGẪU NHIÊN CỦA BOT KHI ĐI DẠO ("LÂU LÂU NÓ HỎI")
    const RANDOM_PROMPTS_VN = [
        "Chào bạn! Cần mình giúp gì không? Mình là AI của anh Thành nè! 🤖✨",
        "Bạn có muốn xem nhanh danh sách 10 chứng chỉ quốc tế của anh Thành không? 🏆",
        "Cần lấy số điện thoại, email hay tải CV của anh Thành không bạn? 📄",
        "Bạn cần tư vấn giải pháp mạng, Firewall Sophos hay Peplink không? Hỏi mình nhé! 🌐",
        "Mình được tích hợp Google Gemini AI, hỏi mình bất cứ điều gì trong hay ngoài profile nhé! 🚀",
        "Hôm nay bạn thế nào? Cứ thoải mái tâm sự hoặc hỏi bài tập IT với mình nha! 💬"
    ];

    const RANDOM_PROMPTS_EN = [
        "Hi there! Need any help? I'm Thanh's AI Assistant! 🤖✨",
        "Would you like to see Thanh's 10 international certifications? 🏆",
        "Looking for Thanh's contact info or resume download? 📄",
        "Ask me anything about enterprise networking, Sophos firewalls, or general tech! 🚀",
        "I'm powered by Google Gemini AI. Ask me about Thanh's profile or any general topic! 💬"
    ];

    const isEnglishPage = document.documentElement.lang === 'en' || window.location.pathname.includes('-en');
    const PROMPT_LIST = isEnglishPage ? RANDOM_PROMPTS_EN : RANDOM_PROMPTS_VN;

    // 3. INJECT CSS STYLES CHO AI BOT & CHAT WINDOW
    const botStyles = `
/* ===== CUTE AI BOT & CHAT WINDOW STYLES ===== */
#cute-ai-bot-root {
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 9999;
    font-family: inherit;
    user-select: none;
    -webkit-user-select: none;
}

/* Container con bot */
.ai-bot-avatar-wrap {
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    filter: drop-shadow(0 10px 20px rgba(14, 165, 233, 0.35));
}

.ai-bot-avatar-wrap:hover {
    transform: scale(1.1) translateY(-4px);
    filter: drop-shadow(0 14px 28px rgba(14, 165, 233, 0.5));
}

/* Hiệu ứng bay bổng đung đưa nhẹ nhàng */
.ai-bot-floating {
    animation: botFloat 3.6s ease-in-out infinite;
}

@keyframes botFloat {
    0%, 100% {
        transform: translateY(0px) rotate(0deg);
    }
    30% {
        transform: translateY(-8px) rotate(-2deg);
    }
    70% {
        transform: translateY(-4px) rotate(3deg);
    }
}

/* Hiệu ứng đi dạo (Patrolling / Wandering) */
.ai-bot-wandering {
    animation: botWander 16s ease-in-out infinite;
}

@keyframes botWander {
    0%, 100% {
        transform: translate(0px, 0px);
    }
    25% {
        transform: translate(-35px, -6px);
    }
    50% {
        transform: translate(-65px, 2px);
    }
    75% {
        transform: translate(-25px, -4px);
    }
}

/* Vòng phát sáng radar xung quanh bot */
.ai-bot-halo {
    position: absolute;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(14, 165, 233, 0.4) 0%, rgba(99, 102, 241, 0) 70%);
    animation: haloPulse 2.8s ease-out infinite;
    pointer-events: none;
    z-index: -1;
}

@keyframes haloPulse {
    0% { transform: scale(0.85); opacity: 0.8; }
    50% { transform: scale(1.35); opacity: 0.3; }
    100% { transform: scale(0.85); opacity: 0.8; }
}

/* Bóng mờ dưới chân bot */
.ai-bot-shadow {
    position: absolute;
    bottom: -10px;
    width: 44px;
    height: 8px;
    background: rgba(0, 0, 0, 0.35);
    border-radius: 50%;
    filter: blur(3px);
    animation: shadowScale 3.6s ease-in-out infinite;
    z-index: -2;
}

@keyframes shadowScale {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(0.7); opacity: 0.25; }
}

/* Bong bóng hội thoại (Speech Bubble) */
.ai-bot-speech-bubble {
    position: absolute;
    bottom: 78px;
    right: 0;
    width: 250px;
    background: rgba(15, 23, 42, 0.94);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1.5px solid rgba(56, 189, 248, 0.35);
    border-radius: 18px 18px 4px 18px;
    padding: 12px 14px;
    box-shadow: 0 16px 36px -6px rgba(0, 0, 0, 0.5), 0 0 18px rgba(14, 165, 233, 0.2);
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transform: translateY(12px) scale(0.92);
    transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
    z-index: 10;
    pointer-events: auto;
}

.ai-bot-speech-bubble.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0) scale(1);
}

.ai-bot-bubble-tail {
    position: absolute;
    bottom: -8px;
    right: 24px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid rgba(56, 189, 248, 0.35);
}

.ai-bot-bubble-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
}

.ai-bot-bubble-tag {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #38bdf8;
    display: flex;
    align-items: center;
    gap: 4px;
}

.ai-bot-bubble-close {
    background: transparent;
    border: none;
    color: #94a3b8;
    font-size: 13px;
    cursor: pointer;
    line-height: 1;
    padding: 2px 4px;
    border-radius: 4px;
    transition: color 0.2s;
}

.ai-bot-bubble-close:hover {
    color: #f8fafc;
    background: rgba(255, 255, 255, 0.1);
}

.ai-bot-bubble-text {
    font-size: 12px;
    line-height: 1.45;
    color: #e2e8f0;
    margin: 0;
}

/* Khung Chat Modal hoàn chỉnh */
.ai-chat-window {
    position: absolute;
    bottom: 84px;
    right: 0;
    width: 375px;
    max-width: calc(100vw - 32px);
    height: 560px;
    max-height: calc(100vh - 120px);
    background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    box-shadow: 0 24px 60px -12px rgba(0, 0, 0, 0.7), 0 0 30px rgba(14, 165, 233, 0.25);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px) scale(0.95);
    transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
    z-index: 100;
}

.ai-chat-window.open {
    opacity: 1;
    visibility: visible;
    transform: translateY(0) scale(1);
}

/* Chat Header */
.ai-chat-header {
    padding: 14px 18px;
    background: linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.95));
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
}

.ai-chat-header-info {
    display: flex;
    align-items: center;
    gap: 10px;
}

.ai-chat-header-avatar {
    width: 36px;
    height: 36px;
    border-radius: 12px;
    background: linear-gradient(135deg, #0ea5e9, #6366f1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 16px;
    box-shadow: 0 4px 12px rgba(14, 165, 233, 0.4);
    position: relative;
}

.ai-chat-online-badge {
    position: absolute;
    bottom: -2px;
    right: -2px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #10b981;
    border: 2px solid #0f172a;
    animation: statusPulse 2s infinite;
}

@keyframes statusPulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.2); opacity: 0.8; }
}

.ai-chat-title {
    font-size: 14px;
    font-weight: 700;
    color: #f8fafc;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 6px;
}

.ai-chat-badge-model {
    font-size: 9px;
    padding: 2px 6px;
    border-radius: 6px;
    background: rgba(14, 165, 233, 0.15);
    color: #38bdf8;
    border: 1px solid rgba(56, 189, 248, 0.3);
    font-family: monospace;
}

.ai-chat-subtitle {
    font-size: 11px;
    color: #94a3b8;
    margin: 2px 0 0 0;
}

.ai-chat-header-actions {
    display: flex;
    align-items: center;
    gap: 6px;
}

.ai-chat-action-btn {
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #cbd5e1;
    width: 28px;
    height: 28px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 12px;
    transition: all 0.2s;
}

.ai-chat-action-btn:hover {
    background: rgba(255, 255, 255, 0.15);
    color: #fff;
    transform: scale(1.05);
}

/* Suggestion Chips */
.ai-chat-chips {
    padding: 10px 14px 6px 14px;
    display: flex;
    gap: 6px;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    flex-shrink: 0;
    background: rgba(15, 23, 42, 0.5);
}

.ai-chat-chips::-webkit-scrollbar {
    display: none;
}

.ai-chip {
    white-space: nowrap;
    font-size: 11px;
    font-weight: 500;
    color: #cbd5e1;
    background: rgba(30, 41, 59, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 5px 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    flex-shrink: 0;
}

.ai-chip:hover {
    background: rgba(14, 165, 233, 0.2);
    border-color: rgba(56, 189, 248, 0.4);
    color: #38bdf8;
    transform: translateY(-1px);
}

/* Chat Messages Stream */
.ai-chat-messages {
    flex: 1;
    padding: 16px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 14px;
    scroll-behavior: smooth;
}

/* Tùy chỉnh thanh cuộn tin nhắn */
.ai-chat-messages::-webkit-scrollbar {
    width: 6px;
}
.ai-chat-messages::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 3px;
}

/* Message Bubble */
.ai-msg {
    display: flex;
    gap: 10px;
    max-width: 88%;
    animation: msgFadeIn 0.3s ease;
}

@keyframes msgFadeIn {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
}

.ai-msg-bot {
    align-self: flex-start;
}

.ai-msg-user {
    align-self: flex-end;
    flex-direction: row-reverse;
}

.ai-msg-avatar {
    width: 28px;
    height: 28px;
    border-radius: 10px;
    background: linear-gradient(135deg, #0ea5e9, #6366f1);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    flex-shrink: 0;
    box-shadow: 0 2px 8px rgba(14, 165, 233, 0.3);
}

.ai-msg-bubble {
    padding: 11px 14px;
    border-radius: 18px;
    font-size: 12.5px;
    line-height: 1.55;
    word-break: break-word;
}

.ai-msg-bot .ai-msg-bubble {
    background: rgba(30, 41, 59, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #f1f5f9;
    border-top-left-radius: 4px;
}

.ai-msg-user .ai-msg-bubble {
    background: linear-gradient(135deg, #0ea5e9, #6366f1);
    color: #ffffff;
    border-top-right-radius: 4px;
    box-shadow: 0 4px 14px rgba(14, 165, 233, 0.3);
}

.ai-msg-bubble p {
    margin: 0 0 6px 0;
}
.ai-msg-bubble p:last-child {
    margin: 0;
}

.ai-msg-bubble ul, .ai-msg-bubble ol {
    margin: 4px 0 6px 18px;
    padding: 0;
}

.ai-msg-bubble li {
    margin-bottom: 3px;
}

.ai-msg-bubble strong {
    color: #38bdf8;
    font-weight: 600;
}

.ai-msg-user .ai-msg-bubble strong {
    color: #ffffff;
}

.ai-msg-bubble a {
    color: #38bdf8;
    text-decoration: underline;
    font-weight: 600;
}

.ai-msg-bubble code {
    background: rgba(0, 0, 0, 0.3);
    padding: 2px 5px;
    border-radius: 4px;
    font-family: monospace;
    font-size: 11.5px;
}

/* Typing Indicator */
.ai-typing-indicator {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px 12px;
}

.ai-typing-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #38bdf8;
    animation: typingBounce 1.4s infinite ease-in-out;
}

.ai-typing-dot:nth-child(1) { animation-delay: 0s; }
.ai-typing-dot:nth-child(2) { animation-delay: 0.2s; }
.ai-typing-dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes typingBounce {
    0%, 80%, 100% { transform: translateY(0); opacity: 0.5; }
    40% { transform: translateY(-6px); opacity: 1; }
}

/* Chat Input Bar */
.ai-chat-input-bar {
    padding: 12px 14px;
    background: rgba(15, 23, 42, 0.95);
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
}

.ai-chat-input {
    flex: 1;
    background: rgba(30, 41, 59, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 14px;
    padding: 10px 14px;
    color: #fff;
    font-size: 12.5px;
    outline: none;
    transition: all 0.2s ease;
    font-family: inherit;
}

.ai-chat-input:focus {
    border-color: #0ea5e9;
    box-shadow: 0 0 12px rgba(14, 165, 233, 0.3);
    background: rgba(30, 41, 59, 0.9);
}

.ai-chat-send-btn {
    width: 38px;
    height: 38px;
    border-radius: 12px;
    background: linear-gradient(135deg, #0ea5e9, #6366f1);
    border: none;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
    flex-shrink: 0;
    box-shadow: 0 4px 12px rgba(14, 165, 233, 0.35);
}

.ai-chat-send-btn:hover {
    transform: scale(1.08);
    box-shadow: 0 6px 18px rgba(14, 165, 233, 0.5);
}

.ai-chat-send-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
}

/* Responsive cho màn hình điện thoại */
@media (max-width: 480px) {
    #cute-ai-bot-root {
        bottom: 18px;
        right: 18px;
    }
    .ai-chat-window {
        width: calc(100vw - 28px);
        height: 75vh;
        bottom: 74px;
        right: 0;
    }
    .ai-bot-speech-bubble {
        width: 220px;
        bottom: 70px;
    }
}
`;

    // 4. INJECT HTML VÀO TRANG
    function initBotDOM() {
        if (document.getElementById('cute-ai-bot-root')) return;

        // Thêm CSS vào head
        const styleTag = document.createElement('style');
        styleTag.id = 'cute-ai-bot-styles';
        styleTag.textContent = botStyles;
        document.head.appendChild(styleTag);

        // Tạo root container
        const rootDiv = document.createElement('div');
        rootDiv.id = 'cute-ai-bot-root';

        rootDiv.innerHTML = `
            <!-- Bong bóng hỏi thăm ngẫu nhiên (Speech Bubble) -->
            <div id="aiBotBubble" class="ai-bot-speech-bubble">
                <div class="ai-bot-bubble-tail"></div>
                <div class="ai-bot-bubble-header">
                    <span class="ai-bot-bubble-tag"><i class="fas fa-sparkles"></i> Thành AI</span>
                    <button class="ai-bot-bubble-close" id="aiBotBubbleClose" title="Đóng">&times;</button>
                </div>
                <p class="ai-bot-bubble-text" id="aiBotBubbleText">Bạn cần giúp gì không? Mình là trợ lý AI của anh Thành nè! 🤖✨</p>
            </div>

            <!-- Khung Chat Modal hoàn chỉnh -->
            <div id="aiChatWindow" class="ai-chat-window">
                <!-- Header -->
                <div class="ai-chat-header">
                    <div class="ai-chat-header-info">
                        <div class="ai-chat-header-avatar">
                            <i class="fas fa-robot"></i>
                            <span class="ai-chat-online-badge"></span>
                        </div>
                        <div>
                            <h4 class="ai-chat-title">
                                Thành AI Bot 
                                <span class="ai-chat-badge-model">Gemini 3.5</span>
                            </h4>
                            <p class="ai-chat-subtitle">Trợ lý Portfolio & Kỹ thuật thông minh</p>
                        </div>
                    </div>
                    <div class="ai-chat-header-actions">
                        <button class="ai-chat-action-btn" id="aiChatClearBtn" title="Làm mới hội thoại">
                            <i class="fas fa-redo-alt"></i>
                        </button>
                        <button class="ai-chat-action-btn" id="aiChatCloseBtn" title="Đóng chat">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>

                <!-- Suggestion Chips -->
                <div class="ai-chat-chips" id="aiChatChips">
                    <button class="ai-chip" data-question="Nguyễn Viết Thành là ai? Hãy giới thiệu chi tiết.">👨‍💻 Anh Thành là ai?</button>
                    <button class="ai-chip" data-question="Anh Thành có những chứng chỉ quốc tế nào?">📜 Danh sách 10 chứng chỉ</button>
                    <button class="ai-chip" data-question="Kỹ năng chuyên môn nổi bật của anh Thành là gì?">🛠️ Kỹ năng & Kinh nghiệm</button>
                    <button class="ai-chip" data-question="Cho mình xin số điện thoại, email và cách liên hệ anh Thành?">📞 Liên hệ & CV</button>
                    <button class="ai-chip" data-question="Bạn có thể giải thích mô hình OSI trong mạng máy tính không?">🌐 Hỏi kiến thức IT</button>
                </div>

                <!-- Messages Stream -->
                <div class="ai-chat-messages" id="aiChatMessages">
                    <div class="ai-msg ai-msg-bot">
                        <div class="ai-msg-avatar"><i class="fas fa-robot"></i></div>
                        <div class="ai-msg-bubble">
                            <p>Xin chào! Mình là <strong>Thành AI Assistant</strong> 🤖✨</p>
                            <p>Mình có thể giải đáp chi tiết về kinh nghiệm, chứng chỉ, kỹ năng của anh Thành hoặc <strong>bất kỳ câu hỏi nào trong & ngoài profile</strong>. Bạn cần giúp gì không?</p>
                        </div>
                    </div>
                </div>

                <!-- Input Bar -->
                <form class="ai-chat-input-bar" id="aiChatForm" onsubmit="return false;">
                    <input type="text" id="aiChatInput" class="ai-chat-input" placeholder="Hỏi bot bất cứ điều gì..." autocomplete="off">
                    <button type="submit" id="aiChatSendBtn" class="ai-chat-send-btn" title="Gửi tin nhắn">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </form>
            </div>

            <!-- Avatar Con Bot Cute (SVG) -->
            <div id="aiBotAvatar" class="ai-bot-avatar-wrap ai-bot-floating ai-bot-wandering" title="Nhấp vào để chat cùng Thành AI">
                <div class="ai-bot-halo"></div>
                
                <!-- SVG Robot Chibi Siêu Dễ Thương -->
                <svg width="68" height="68" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <!-- Gradient Thân Bot -->
                        <linearGradient id="botHeadGrad" x1="20" y1="15" x2="80" y2="85" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stop-color="#ffffff"/>
                            <stop offset="45%" stop-color="#e2e8f0"/>
                            <stop offset="100%" stop-color="#94a3b8"/>
                        </linearGradient>
                        <!-- Gradient Màn Hình Visor -->
                        <linearGradient id="botVisorGrad" x1="25" y1="35" x2="75" y2="65" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stop-color="#090d16"/>
                            <stop offset="100%" stop-color="#0f172a"/>
                        </linearGradient>
                        <!-- Gradient Mắt Neon Cyan -->
                        <linearGradient id="botEyeGrad" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stop-color="#38bdf8"/>
                            <stop offset="100%" stop-color="#0ea5e9"/>
                        </linearGradient>
                        <!-- Glow Ánh Sáng -->
                        <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="2.5" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </defs>

                    <!-- Lửa Thruster phản lực bay phía dưới -->
                    <ellipse cx="50" cy="85" rx="14" ry="5" fill="#38bdf8" opacity="0.8" filter="url(#neonGlow)"/>
                    <ellipse cx="50" cy="87" rx="8" ry="3" fill="#ffffff" opacity="0.95"/>

                    <!-- Đệm cánh tai bên trái & phải -->
                    <rect x="14" y="44" width="7" height="16" rx="3.5" fill="#64748b"/>
                    <rect x="15" y="46" width="3" height="12" rx="1.5" fill="#38bdf8" filter="url(#neonGlow)"/>

                    <rect x="79" y="44" width="7" height="16" rx="3.5" fill="#64748b"/>
                    <rect x="82" y="46" width="3" height="12" rx="1.5" fill="#38bdf8" filter="url(#neonGlow)"/>

                    <!-- Đầu & Thân Robot hình tròn bo mượt -->
                    <rect x="20" y="24" width="60" height="56" rx="28" fill="url(#botHeadGrad)" stroke="#cbd5e1" stroke-width="2.5"/>

                    <!-- Ăng-ten trên đầu -->
                    <line x1="50" y1="24" x2="50" y2="10" stroke="#64748b" stroke-width="3" stroke-linecap="round"/>
                    <circle cx="50" cy="8" r="5" fill="#38bdf8" filter="url(#neonGlow)"/>
                    <circle cx="50" cy="8" r="2.5" fill="#ffffff"/>

                    <!-- Màn hình mặt kính đen Visor -->
                    <rect x="27" y="36" width="46" height="30" rx="15" fill="url(#botVisorGrad)" stroke="#38bdf8" stroke-width="1.5" stroke-opacity="0.4"/>

                    <!-- Đôi mắt cười / nhấp nháy phát sáng cực dễ thương (Anime Eyes) -->
                    <g id="botEyesNormal">
                        <!-- Mắt trái -->
                        <ellipse cx="40" cy="50" rx="4.5" ry="6.5" fill="url(#botEyeGrad)" filter="url(#neonGlow)"/>
                        <circle cx="41.5" cy="48" r="1.8" fill="#ffffff"/>
                        <!-- Mắt phải -->
                        <ellipse cx="60" cy="50" rx="4.5" ry="6.5" fill="url(#botEyeGrad)" filter="url(#neonGlow)"/>
                        <circle cx="61.5" cy="48" r="1.8" fill="#ffffff"/>
                        <!-- Nụ cười nhỏ -->
                        <path d="M47 54 Q50 57 53 54" stroke="#38bdf8" stroke-width="1.5" stroke-linecap="round" fill="none"/>
                    </g>

                    <!-- Má hồng phấn Kawaii Blush -->
                    <circle cx="34" cy="56" r="3" fill="#f43f5e" opacity="0.6" filter="url(#neonGlow)"/>
                    <circle cx="66" cy="56" r="3" fill="#f43f5e" opacity="0.6" filter="url(#neonGlow)"/>

                    <!-- Huy hiệu logo ngực / viền trang trí -->
                    <circle cx="50" cy="73" r="3" fill="#6366f1" filter="url(#neonGlow)"/>
                </svg>

                <div class="ai-bot-shadow"></div>
            </div>
        `;

        document.body.appendChild(rootDiv);
    }

    // 5. QUẢN LÝ TƯƠNG TÁC GIAO DIỆN & TRẠNG THÁI
    let chatHistory = [];
    let isProcessing = false;
    let bubbleTimeout = null;

    function bindBotEvents() {
        const avatar = document.getElementById('aiBotAvatar');
        const bubble = document.getElementById('aiBotBubble');
        const bubbleText = document.getElementById('aiBotBubbleText');
        const bubbleClose = document.getElementById('aiBotBubbleClose');
        const chatWindow = document.getElementById('aiChatWindow');
        const chatCloseBtn = document.getElementById('aiChatCloseBtn');
        const chatClearBtn = document.getElementById('aiChatClearBtn');
        const chatForm = document.getElementById('aiChatForm');
        const chatInput = document.getElementById('aiChatInput');
        const chipsContainer = document.getElementById('aiChatChips');

        // Bật / tắt mở cửa sổ Chat khi click Bot
        avatar.addEventListener('click', () => {
            toggleChatWindow();
            hideBubble();
        });

        // Click vào Bong bóng nói -> Mở ngay Chat và gửi câu hỏi gợi ý
        bubble.addEventListener('click', (e) => {
            if (e.target.id === 'aiBotBubbleClose') return;
            openChatWindow();
            hideBubble();
        });

        // Đóng bong bóng nói
        bubbleClose.addEventListener('click', (e) => {
            e.stopPropagation();
            hideBubble();
        });

        // Nút đóng chat
        chatCloseBtn.addEventListener('click', () => closeChatWindow());

        // Nút làm mới hội thoại
        chatClearBtn.addEventListener('click', () => {
            if (confirm(isEnglishPage ? "Clear conversation history?" : "Làm mới toàn bộ lịch sử trò chuyện?")) {
                chatHistory = [];
                const messagesContainer = document.getElementById('aiChatMessages');
                messagesContainer.innerHTML = `
                    <div class="ai-msg ai-msg-bot">
                        <div class="ai-msg-avatar"><i class="fas fa-robot"></i></div>
                        <div class="ai-msg-bubble">
                            <p>${isEnglishPage ? "Conversation reset! How can I assist you today? 🤖✨" : "Đã làm mới hội thoại! Bạn cần mình hỗ trợ thông tin gì nè? 🤖✨"}</p>
                        </div>
                    </div>
                `;
            }
        });

        // Gửi tin nhắn từ Form
        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = chatInput.value.trim();
            if (text) {
                sendMessage(text);
                chatInput.value = '';
            }
        });

        // Click Gợi ý (Chips)
        chipsContainer.querySelectorAll('.ai-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                const question = chip.getAttribute('data-question');
                if (question) {
                    sendMessage(question);
                }
            });
        });

        // Khi hover vào Bot: tạm dừng animation đi dạo để người dùng dễ bấm
        avatar.addEventListener('mouseenter', () => {
            avatar.classList.remove('ai-bot-wandering');
        });
        avatar.addEventListener('mouseleave', () => {
            if (!chatWindow.classList.contains('open')) {
                avatar.classList.add('ai-bot-wandering');
            }
        });

        // Tự động chào hỏi định kỳ (Wandering & Proactive Prompts)
        startProactivePrompts();
    }

    function toggleChatWindow() {
        const chatWindow = document.getElementById('aiChatWindow');
        const avatar = document.getElementById('aiBotAvatar');
        if (chatWindow.classList.contains('open')) {
            closeChatWindow();
        } else {
            openChatWindow();
        }
    }

    function openChatWindow() {
        const chatWindow = document.getElementById('aiChatWindow');
        const avatar = document.getElementById('aiBotAvatar');
        const chatInput = document.getElementById('aiChatInput');

        chatWindow.classList.add('open');
        avatar.classList.remove('ai-bot-wandering'); // Dừng đi dạo khi đang mở chat
        setTimeout(() => chatInput && chatInput.focus(), 300);
    }

    function closeChatWindow() {
        const chatWindow = document.getElementById('aiChatWindow');
        const avatar = document.getElementById('aiBotAvatar');

        chatWindow.classList.remove('open');
        avatar.classList.add('ai-bot-wandering'); // Tiếp tục đi dạo
    }

    // Hiện bong bóng thoại ngẫu nhiên
    function showBubble(text) {
        const bubble = document.getElementById('aiBotBubble');
        const bubbleText = document.getElementById('aiBotBubbleText');
        const chatWindow = document.getElementById('aiChatWindow');

        if (chatWindow.classList.contains('open')) return; // Đang mở chat thì không hiện bubble

        bubbleText.textContent = text;
        bubble.classList.add('active');

        // Tự động ẩn bong bóng sau 8 giây
        if (bubbleTimeout) clearTimeout(bubbleTimeout);
        bubbleTimeout = setTimeout(() => {
            hideBubble();
        }, 8500);
    }

    function hideBubble() {
        const bubble = document.getElementById('aiBotBubble');
        if (bubble) bubble.classList.remove('active');
        if (bubbleTimeout) clearTimeout(bubbleTimeout);
    }

    // Bộ đếm thời gian hỏi thăm định kỳ ("Lâu lâu nó hỏi bạn cần giúp gì không")
    function startProactivePrompts() {
        // Lần đầu chào sau 4 giây khi vào trang
        setTimeout(() => {
            const initialGreeting = isEnglishPage 
                ? "Hello! Need any help? I'm Thanh's AI assistant! 🤖✨"
                : "Chào bạn! Cần mình giúp gì không? Mình là AI của anh Thành nè! 🤖✨";
            showBubble(initialGreeting);
        }, 4000);

        // Lặp lại ngẫu nhiên mỗi 38 - 50 giây
        setInterval(() => {
            const randomPrompt = PROMPT_LIST[Math.floor(Math.random() * PROMPT_LIST.length)];
            showBubble(randomPrompt);
        }, 42000);
    }

    // 6. XỬ LÝ GỬI VÀ NHẬN TIN NHẮN TỪ GEMINI API
    async function sendMessage(userText) {
        if (isProcessing) return;

        const messagesContainer = document.getElementById('aiChatMessages');
        const sendBtn = document.getElementById('aiChatSendBtn');
        const chatInput = document.getElementById('aiChatInput');

        // 1. Thêm tin nhắn của User vào giao diện
        appendMessage('user', userText);
        chatHistory.push({ role: 'user', parts: [{ text: userText }] });

        // 2. Hiển thị Typing Indicator
        const typingId = 'typing-' + Date.now();
        const typingEl = document.createElement('div');
        typingEl.id = typingId;
        typingEl.className = 'ai-msg ai-msg-bot';
        typingEl.innerHTML = `
            <div class="ai-msg-avatar"><i class="fas fa-robot"></i></div>
            <div class="ai-msg-bubble ai-typing-indicator">
                <span class="ai-typing-dot"></span>
                <span class="ai-typing-dot"></span>
                <span class="ai-typing-dot"></span>
            </div>
        `;
        messagesContainer.appendChild(typingEl);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        isProcessing = true;
        sendBtn.disabled = true;

        try {
            // 3. Gọi Google Gemini API
            const botReply = await callGeminiAPI(chatHistory);
            
            // Xóa typing indicator
            const el = document.getElementById(typingId);
            if (el) el.remove();

            // Hiển thị câu trả lời của Bot
            appendMessage('bot', botReply);
            chatHistory.push({ role: 'model', parts: [{ text: botReply }] });

        } catch (error) {
            console.error("Gemini API Error:", error);
            const el = document.getElementById(typingId);
            if (el) el.remove();

            const fallbackMsg = isEnglishPage
                ? "Sorry, I'm experiencing a brief connection hiccup. Please ask again or feel free to check out Thanh's certificates directly on the page! ✨"
                : "Ôi bạn ơi, kết nối của mình vừa chập chờn một chút. Bạn thử gửi lại câu hỏi nhé hoặc xem các mục chứng chỉ ngay trên trang nha! ✨";
            appendMessage('bot', fallbackMsg);
        } finally {
            isProcessing = false;
            sendBtn.disabled = false;
            chatInput && chatInput.focus();
        }
    }

    // Hàm gọi Google Gemini API với cơ chế tự động thử model khả dụng
    async function callGeminiAPI(history) {
        const apiKey = getApiKey();
        let lastError = null;

        // Cắt bớt lịch sử hội thoại nếu quá dài để tiết kiệm context
        const recentHistory = history.slice(-8);

        for (const model of GEMINI_MODELS) {
            try {
                const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
                
                const payload = {
                    system_instruction: {
                        parts: [{ text: SYSTEM_INSTRUCTION }]
                    },
                    contents: recentHistory,
                    generationConfig: {
                        temperature: 0.7,
                        maxOutputTokens: 600,
                        topP: 0.95
                    }
                };

                const response = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (!response.ok) {
                    const errData = await response.json().catch(() => ({}));
                    throw new Error(`Model ${model} returned ${response.status}: ${JSON.stringify(errData)}`);
                }

                const result = await response.json();
                if (result.candidates && result.candidates[0] && result.candidates[0].content) {
                    return result.candidates[0].content.parts[0].text;
                }
            } catch (err) {
                lastError = err;
                console.warn(`Fallback to next model from ${model}:`, err.message);
            }
        }

        throw lastError || new Error("All Gemini models failed to respond.");
    }

    // Hiển thị tin nhắn lên UI với format Markdown cơ bản
    function appendMessage(sender, text) {
        const messagesContainer = document.getElementById('aiChatMessages');
        const msgDiv = document.createElement('div');
        msgDiv.className = `ai-msg ai-msg-${sender}`;

        const formattedHtml = formatMarkdown(text);

        if (sender === 'bot') {
            msgDiv.innerHTML = `
                <div class="ai-msg-avatar"><i class="fas fa-robot"></i></div>
                <div class="ai-msg-bubble">${formattedHtml}</div>
            `;
        } else {
            msgDiv.innerHTML = `
                <div class="ai-msg-bubble">${escapeHtml(text)}</div>
            `;
        }

        messagesContainer.appendChild(msgDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Helper format Markdown đơn giản & an toàn
    function formatMarkdown(text) {
        if (!text) return '';
        let escaped = escapeHtml(text);

        // Bold: **text**
        escaped = escaped.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        // Italic: *text*
        escaped = escaped.replace(/\*(.*?)\*/g, '<em>$1</em>');
        // Inline code: `text`
        escaped = escaped.replace(/`([^`]+)`/g, '<code>$1</code>');
        // Links: [text](url)
        escaped = escaped.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

        // Danh sách gạch đầu dòng: - item hoặc * item
        const lines = escaped.split('\n');
        let inList = false;
        let htmlLines = [];

        for (let line of lines) {
            line = line.trim();
            if (line.startsWith('- ') || line.startsWith('* ')) {
                if (!inList) {
                    htmlLines.push('<ul>');
                    inList = true;
                }
                htmlLines.push(`<li>${line.substring(2)}</li>`);
            } else {
                if (inList) {
                    htmlLines.push('</ul>');
                    inList = false;
                }
                if (line) {
                    htmlLines.push(`<p>${line}</p>`);
                }
            }
        }
        if (inList) htmlLines.push('</ul>');

        return htmlLines.join('');
    }

    function escapeHtml(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    // 7. KHỞI CHẠY KHI TRANG SẴN SÀNG
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initBotDOM();
            bindBotEvents();
        });
    } else {
        initBotDOM();
        bindBotEvents();
    }

})();
