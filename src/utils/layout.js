const generateRandomColor = () => ['red', 'blue', 'gray', 'green', 'yellow', 'purple', 'indigo', 'pink'][Math.floor(Math.random() * 7)];
const generateRandomHue = () => `${Math.floor(Math.random() * (7 - 4 + 1)) + 4}00`;

export { 
    generateRandomColor,
    generateRandomHue
}