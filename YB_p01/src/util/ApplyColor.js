const SetBackground = color => {
    switch (color) {
        case 'red': return 'red';
        case 'green': return 'green';
        case 'orange': return 'orange';
        case 'blue': return 'blue';
        case 'violet': return 'violet';
        case 'pink': return 'pink';
        case 'black': return 'black';
        default: return 'bg-black';
    }
}
//
export { SetBackground };