const tmi = [
    {
        question: "나의 최애 머리색은?",
        answer: "흑발에 가까운 진한 고동색",
    },
    {
        question: "민트초코 호 vs. 불호?",
        answer: "호",
    },
    {
        question: "가장 좋아하는 음식은?",
        answer: "파스타",
    },
    {
        question: "가장 좋아하는 색은?",
        answer: "소라색",
    },
    {
        question: "취미로 해보고 싶은 거?",
        answer: "만화 그리기",
    }
];

const question = document.getElementById("question")
const answer = document.getElementById("answer")
const todaysTmi = tmi[Math.floor(Math.random()*tmi.length)]

question.innerText = todaysTmi.question
answer.innerText = todaysTmi.answer