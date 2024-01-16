



const dates = [{ year: '2021', month: '10', day: '22', hour: '10', minute: '12', second: '32' },
               { year: '2021', month: '8', day: '3', hour: '9', minute: '9', second: '6' }];

for (let date of dates) {
  const { year, month, day, hour, minute, second } = date;
  const s0 = `${year}-${month}-${day} ${hour}:${minute}:${second}Z`;

  
  

  
  for (let i = 1; i < 10; i++) {
    const s1 = `${'0'.repeat(i) + year}-${month}-${day} ${hour}:${minute}:${second}Z`;
    assertTrue(new Date(s0).getTime() ==  new Date(s1).getTime());
  }

  
  for (let i = 1; i < 10; i++) {
    const s1 = `${year}-${'0'.repeat(i) + month}-${day} ${hour}:${minute}:${second}Z`;
    assertTrue(new Date(s0).getTime() ==  new Date(s1).getTime());
  }

  
  for (let i = 1; i < 10; i++) {
    const s1 = `${year}-${month}-${'0'.repeat(i) + day} ${hour}:${minute}:${second}Z`;
    assertTrue(new Date(s0).getTime() ==  new Date(s1).getTime());
  }

  
  for (let i = 1; i < 10; i++) {
    const s1 = `${year}-${month}-${day} ${'0'.repeat(i) + hour}:${minute}:${second}Z`;
    assertTrue(new Date(s0).getTime() ==  new Date(s1).getTime());
  }

  
  for (let i = 1; i < 10; i++) {
    const s1 = `${year}-${month}-${day} ${hour}:${'0'.repeat(i) + minute}:${second}Z`;
    assertTrue(new Date(s0).getTime() ==  new Date(s1).getTime());
  }

  
  for (let i = 1; i < 10; i++) {
    const s1 = `${year}-${month}-${day} ${hour}:${minute}:${'0'.repeat(i) + second}Z`;
    assertTrue(new Date(s0).getTime() ==  new Date(s1).getTime());
  }

  
  
  assertTrue(new Date(s0).getTime() ==  Date.parse(s0));
}
