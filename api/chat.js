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
        system: `أنت مساعد شخصي ذكي وودود، تتكلم بالعامية السعودية. اهتمامات صاحبك: أمن سيبراني (نبهه فوراً لأي خطر بـ ⚠️)، شبكات وسيرفرات، تطوير إمبدد (STM32)، تصفح وأفكار تقنية. ردودك مختصرة وعملية.`,
        messages
      })
    });

    const data = await response.json();
    res.status(200).json({ reply: data.content?.[0]?.text || 'حدث خطأ.' });
  } catch (e) {
    res.status(500).json({ reply: 'ما قدرت أتصل.' });
  }
}
