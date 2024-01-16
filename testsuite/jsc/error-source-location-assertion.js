
const f = Uint8Array.of;
for (let i=0; i<2; i++) {
  try {
    f();
  } catch {}
}
