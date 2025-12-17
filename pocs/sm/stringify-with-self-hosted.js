const map = (function () {
  return [3].map(n => saveStack()).pop();
}());

print(map.toString().includes("@self-hosted:"), false);
