# مساعدي الشخصي 🤖

مساعد ذكي شخصي مبني على Claude — متخصص في أمن سيبراني، شبكات، وإمبدد.

---

## خطوات التشغيل على Vercel (5 دقائق)

### 1. احصل على API Key من Anthropic
- روح على: https://console.anthropic.com
- سجل دخول → API Keys → Create Key
- انسخ الـ Key

### 2. ارفع المشروع على GitHub
- روح على: https://github.com/new
- اسم المشروع: `my-assistant`
- ارفع الملفات (api/chat.js, public/index.html, public/manifest.json, vercel.json)

### 3. ربط Vercel
- روح على: https://vercel.com
- سجل دخول بـ GitHub
- New Project → اختار الريبو
- قبل Deploy، اضغط Environment Variables:
  - الاسم: `ANTHROPIC_API_KEY`
  - القيمة: المفتاح اللي نسخته
- اضغط Deploy ✅

### 4. من الجوال
- افتح الرابط اللي طلع من Vercel
- في المتصفح اضغط "إضافة للشاشة الرئيسية"
- يصير تطبيق على جوالك مباشرة 📱

---

## المميزات
- ✅ ذاكرة دائمة (يتذكر محادثاتك)
- ✅ تنبيهات أمان فورية
- ✅ يعرف اهتماماتك
- ✅ يشتغل من الجوال كتطبيق
- ✅ مجاني على Vercel
