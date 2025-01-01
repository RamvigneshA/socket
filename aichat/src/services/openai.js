import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, // Note: In production, you should use a backend server
});

export const sendMessage = async (message) => {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: message }],
      model: 'gpt-3.5-turbo',
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error in sending message to OpenAI:', error);
    throw error;
  }
};
