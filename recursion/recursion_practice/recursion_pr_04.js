function findString(string, index = 0) {
   if (string[0] === "x") return index;

   if (string.length === 0) return -1;

   return findString(string.substring(1), index + 1);
}

console.log(findString("abcdefghijklmnopqrstuvwxyz"));
