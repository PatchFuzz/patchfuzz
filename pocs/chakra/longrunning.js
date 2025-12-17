var seconds = 0;
function finish() {
    print('pass');
    if (++seconds < 65) {
        print(finish, 1000);
    }
}
print(finish, 1000);
