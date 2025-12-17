{
  let called = false;
  async function testSyncThrowIsRejection() {
    await using x = {
      [Symbol.dispose]() {
        throw 1;
      }
    }
  }
  testSyncThrowIsRejection().catch(e => {
    called = true;
    print(e, 1);
  });
  drainJobQueue();
  print(called, true);
}
