this.x = 'global x';
print(x);
delete x;
print(this.x);

this.y = 'global y';
print(y);
delete y;
print(this.y);

print('letconst_global_shadow_deleted_2.js');
