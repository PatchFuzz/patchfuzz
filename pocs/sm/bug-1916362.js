gczeal(0);
gcparam("highFrequencyTimeLimit", 1000);

print(gcparam('highFrequencyMode'), 0);

gc();
gc();
print(gcparam('highFrequencyMode'), 1);

sleep(1.1);
print(gcparam('highFrequencyMode'), 1);
gc();
print(gcparam('highFrequencyMode'), 0);
