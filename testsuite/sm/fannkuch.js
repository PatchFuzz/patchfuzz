function fannkuch() {
   var count = Array(8);
   var r = 8;
   var done = 0;
   while (done < 40) {
      
      done += r;
      while (r != 1) { count[r - 1] = r; r--; }
      while (true) {
         count[r] = count[r] - 1;
         if (count[r] > 0) break;
         r++;
      }
   }
   return done;
}
assertEq(fannkuch(), 41);
