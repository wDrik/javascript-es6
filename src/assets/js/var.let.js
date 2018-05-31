const user = { name: 'Iorgen' };

user.name = 'Wildrik!';

console.log(user.name);

// ---------- x ----------

function test(x) {
    let y = 2;

    if (x > 5) {
        let y = 4;
        console.log(x, y);
    }
}

test(10);