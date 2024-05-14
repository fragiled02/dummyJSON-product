async function fetch_master(luink) {
    let x = await fetch(luink);
    let y = await x.text();
    let z = await JSON.parse(y);
    return z;
};