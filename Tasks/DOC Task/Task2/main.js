class Entry {
    constructor (amount, category, date, type) {
        this.amount = parseFloat(amount);
        this.category = category;
        this.date = date;
        this.type = type;
    }

    updateAmount(newAmount) {
        this.amount = parseFloat(newAmount);
    }

    updateCategory(newCategory) {
        this.category = newCategory;
    }
}

let entries = JSON.parse(localStorage.getItem('entries')) || [];

function saveEntries() {
    localStorage.setItem('entries', JSON.stringify(entries));
}

function calculateBalance() {
    let total = 0;
    entries.forEach(entry => {
        if (entry.type === 'income') total += entry.amount;
        else if (entry.type === 'expense') total -= entry.amount;
    });
    document.getElementById('balance').textContent = total.toFixed(2);
}

function renderEntries() {
    const entryList = document.getElementById('entryList');
    const categoryFilter = document.getElementById('categoryFilter').value.toLowerCase();
    entryList.innerHTML = '';

    entries.filter(entry =>
        !categoryFilter || entry.category.toLowerCase().includes(categoryFilter)
    ).forEach((entry, index) => {
        const li = document.createElement('li');
        li.textContent = `${entry.date} | ${entry.category} | ${entry.type} | ${entry.amount.toFixed(2)} `;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            entries.splice(index, 1);
            saveEntries();
            renderEntries();
            calculateBalance();
        });

        li.appendChild(deleteBtn);
        entryList.appendChild(li);
    });
}

document.getElementById('entryForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const amount = document.getElementById('amount').value;
    const category = document.getElementById('category').value;
    const date = document.getElementById('date').value;
    const type = document.getElementById('type').value;

    const newEntry = new Entry(amount, category, date, type);
    entries.push(newEntry);
    saveEntries();
    renderEntries();
    calculateBalance();

    this.reset();
});

document.getElementById('categoryFilter').addEventListener('input', renderEntries);

renderEntries();
calculateBalance();
