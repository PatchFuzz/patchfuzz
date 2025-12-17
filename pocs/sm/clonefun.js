BeatDetektor = function()
{
    this.config = BeatDetektor.config;

    print(this.config.a, 0);
    print(this.config.b, 1);
}

BeatDetektor.config_default = { a:0, b:1 };
BeatDetektor.config = BeatDetektor.config_default;

var bd = new BeatDetektor();

print(bd.config === BeatDetektor.config, true);
