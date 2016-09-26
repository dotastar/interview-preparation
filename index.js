const allUniq = (str) => {
    const uniq = new Set();

    for (const c of str) {
        if (uniq.has(c)) return false;
        uniq.add(c);
    }

    return true;
}

console.log(allUniq('asdf'))