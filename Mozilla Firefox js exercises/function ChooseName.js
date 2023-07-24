function chooseName() {
    const names = ['John', 'Alice', 'Bob', 'Emma', 'David', 'Eva'];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}