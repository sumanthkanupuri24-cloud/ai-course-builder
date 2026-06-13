import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

const COURSE_LAYOUT_SYSTEM_PROMPT = `You are a course curriculum designer. Always respond with valid JSON only, no markdown, no explanation.
The JSON must follow this exact structure:
{
  "course": {
    "name": "string",
    "description": "string",
    "category": "string",
    "topic": "string",
    "level": "string",
    "duration": "string",
    "noOfChapters": number,
    "chapters": [
      {
        "name": "string",
        "about": "string",
        "duration": "string"
      }
    ]
  }
}`;

const CHAPTER_CONTENT_SYSTEM_PROMPT =
  "You are an expert technical educator. Always respond with valid JSON only, no markdown, no explanation.";

const QUIZ_SYSTEM_PROMPT = `You are a quiz generator for educational courses. Always respond with valid JSON only, no markdown, no explanation.
The JSON must follow this exact structure:
{
  "quiz": [
    {
      "question": "string",
      "options": ["string", "string", "string", "string"],
      "correctAnswer": number,
      "explanation": "string"
    }
  ]
}
Where correctAnswer is the 0-based index of the correct option. Generate exactly 5 questions.`;

const createChatSession = (systemPrompt) => ({
  sendMessage: async (userMessage) => {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage },
      ],
      response_format: { type: "json_object" },
    });

    const text = completion.choices[0].message.content;
    return {
      response: {
        text: () => text,
      },
    };
  },
});

export const GenerateCourseLayout_AI = createChatSession(COURSE_LAYOUT_SYSTEM_PROMPT);
export const GenerateChapterContent_AI = createChatSession(CHAPTER_CONTENT_SYSTEM_PROMPT);
export const GenerateQuiz_AI = createChatSession(QUIZ_SYSTEM_PROMPT);