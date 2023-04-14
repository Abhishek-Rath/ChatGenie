const options = [
    {
        name: 'TL;DR',
        id: 'tldr',
        description: "Summarize text by adding a 'tl;dr:' to the end of a text passage",
        option: {
            model: "text-davinci-003",
            temperature: 0.7,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 1,
        }
    },
    {
        name: "Grammar Correction",
        id: "grammar",
        description: "Corrects grammar according to standard English",
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        name: "Calculate time complexity of code",
        id: "time-complexity",
        description: "Find the time complexity of a given code",
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\n"],
        }
    },

]

export default options;