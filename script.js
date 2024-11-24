const letterStructure = {
    prefixes: {
        'a': ['asp', 'ach', 'aim', 'act', 'arise'],
        'b': ['bri', 'boost', 'bel', 'be', 'bloom'],
        'c': ['cre', 'clari', 'courage', 'climb', 'cult'],
        'd': ['dri', 'dream', 'dare', 'dev', 'dive'],
        'e': ['elev', 'enlight', 'empow', 'ex', 'evo'],
        'f': ['flou', 'flour', 'for', 'fuel', 'find'],
        'g': ['grow', 'glow', 'gain', 'gri', 'go'],
        'h': ['hope', 'heigh', 'heal', 'hustle', 'hum'],
        'i': ['inspi', 'ignite', 'impact', 'improve', 'inv'],
        'j': ['joy', 'journey', 'jubil', 'jump', 'just'],
        'k': ['kind', 'keep', 'kno', 'kale', 'kick'],
        'l': ['lift', 'live', 'lead', 'leap', 'learn'],
        'm': ['mot', 'mind', 'move', 'moti', 'max'],
        'n': ['nourish', 'new', 'nex', 'navi', 'nurture'],
        'o': ['overcome', 'opti', 'open', 'orig', 'out'],
        'p': ['pro', 'pursue', 'power', 'posit', 'peak'],
        'q': ['quest', 'quench', 'qual', 'quick', 'quote'],
        'r': ['rise', 'reach', 'rev', 'real', 'rally'],
        's': ['shine', 'strive', 'suc', 'soar', 'seek'],
        't': ['thrive', 'try', 'triumph', 'turn', 'tune'],
        'u': ['uplift', 'unite', 'urge', 'util', 'up'],
        'v': ['victory', 'vibe', 'vision', 'vital', 'val'],
        'w': ['win', 'wisdom', 'work', 'wish', 'way'],
        'x': ['xcel', 'xtra', 'xen', 'xplore', 'xpress'],
        'y': ['yearn', 'youth', 'yoke', 'yell', 'yonder'],
        'z': ['zeal', 'zenith', 'zoom', 'zest', 'zone']
    },
    suffixes: [
        'ix', 'us', 'um', 'on', 'ar',
        'io', 'ia', 'ex', 'ax', 'ox',
        'yx', 'is', 'os', 'er', 'or',
        'al', 'ic', 'id', 'en', 'yn'
    ],
    connectors: ['i', 'o', 'e', 'a', 'y']
};

function generateWord(startingLetter = null) {
    const letter = startingLetter || 
        String.fromCharCode(97 + Math.floor(Math.random() * 26)); // Випадкова літера від a до z
    const prefix = letterStructure.prefixes[letter] ? letterStructure.prefixes[letter][Math.floor(Math.random() * letterStructure.prefixes[letter].length)] : '';
    const suffix = letterStructure.suffixes[Math.floor(Math.random() * letterStructure.suffixes.length)];
    const connector = letterStructure.connectors[Math.floor(Math.random() * letterStructure.connectors.length)];
    return prefix + connector + suffix;
}

document.getElementById('generateBtn').addEventListener('click', generateChannelNames);

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert(`Копійовано: ${text}`);
    }).catch(err => {
        console.error('Помилка копіювання: ', err);
    });
}

function generateChannelNames() {
    const namesContainer = document.getElementById('names');
    namesContainer.innerHTML = ''; // Очищення поперед ніх назв
    for (let i = 0; i < 26; i++) {
        const letter = String.fromCharCode(97 + i); // Літери від a до z
        const name = generateWord(letter);
        const nameElement = document.createElement('div');
        nameElement.textContent = name.charAt(0).toUpperCase() + name.slice(1); // Перше велике

        const copyButton = document.createElement('button');
        copyButton.textContent = 'Копіювати';
        copyButton.style.float = 'right';
        copyButton.style.fontSize = '0.8em';
        copyButton.addEventListener('click', () => copyToClipboard(nameElement.textContent));

        nameElement.appendChild(copyButton);
        namesContainer.appendChild(nameElement);
    }
}