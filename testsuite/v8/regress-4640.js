




assertTrue(new Date('275760-10-14') == 'Invalid Date');
assertTrue(new Date('275760-09-23') == 'Invalid Date');
assertTrue(new Date('+275760-09-24') == 'Invalid Date');
assertTrue(new Date('+275760-10-13') == 'Invalid Date');


assertTrue(new Date('275760-09-24') == 'Invalid Date');
assertTrue(new Date('275760-10-13') == 'Invalid Date');
assertTrue(new Date('+275760-10-13 ') == 'Invalid Date');


assertTrue(new Date('100000-10-13') != 'Invalid Date');
assertTrue(new Date('+100000-10-13') != 'Invalid Date');
assertTrue(new Date('+100000-10-13 ') != 'Invalid Date');
