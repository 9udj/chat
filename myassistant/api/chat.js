export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { messages } = req.body;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1024,
        system: `أنت مساعد شخصي ذكي وودود، تتكلم بالعامية السعودية بشكل طبيعي.
اهتمامات صاحبك:
- أمن سيبراني: تنبهه فوراً لأي خطر أو ثغرة بـ ⚠️
- شبكات وسيرفرات وترابط شبكي
- تطوير إمبدد (STM32, microcontrollers, bootloader)
- تصفح وأفكار تقنية عامة

أسلوبك: مباشر، ودود، محاور. ردود مختصرة وعملية.
إذا ذكر خطر أمني → نبهه فوراً.
إذا طلب ترتيب أفكار → استخدم نقاط مرتبة.
تذكره بمشاريعه لما يناسب.`,
        messages
      })
    });

    const data = await response.json();
    res.status(200).json({ reply: data.content?.[0]?.text || 'حدث خطأ.' });
  } catch (e) {
    res.status(500).json({ reply: 'ما قدرت أتصل بالخادم.' });
  }
}
