function doubleUp(low, high) {
    if (low > high) return;
    console.log(low);
    doubleUp(low + 2, high);
}

doubleUp(0, 10);
