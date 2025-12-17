var hits = 0;
function Herd(n) {
    print(arguments.length, 1);
    print(n, 5);
    hits++;
}
Herd.of = Array.of;
Herd.of("sheep", "cattle", "elephants", "whales", "seals");
print(hits, 1);
