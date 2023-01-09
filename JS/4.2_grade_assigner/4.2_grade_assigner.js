const getMark = (points) => {
    if (points >= 0 && points <= 64) return "F";
    if (points >= 65 && points <= 69) return "D";
    if (points >= 70 && points <= 79) return "C";
    if (points >= 80 && points <= 89) return "B";
    if (points >= 90 && points <= 100) return "A";
};

console.log(getMark(100));
