function unique_paths(rows, columns) {
    if(rows === 1 || columns === 1) return 1;
    return unique_paths(rows -1, columns) + unique_paths(rows, columns - 1);
}


function unique_paths(rows, columns, memo={}) {
    if (rows === 1 || columns === 1) return 1;

    if (!memo[rows]) memo[rows] = {};

    if (memo[rows][columns] !== undefined) return memo[rows][columns];

    memo[rows][columns] = unique_paths(rows - 1, columns, memo) + unique_paths(rows, columns - 1, memo);

    return memo[rows][columns];
}