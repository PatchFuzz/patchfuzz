let binary = new Binary;

binary.emit_header();
binary.emit_section(kTypeSectionCode, section => {
  section.emit_u32v(1); 
  section.emit_u8(kWasmFunctionTypeForm);
  section.emit_u32v(0); 
  section.emit_u32v(0); 
});
binary.emit_section(kFunctionSectionCode, section => {
  section.emit_u32v(1); 
  section.emit_u32v(0); 
});

binary.emit_u8(kCodeSectionCode);
binary.emit_u8(0x02); 
binary.emit_u8(0x01); 
binary.emit_u8(0x40); 


let buffer = new ArrayBuffer(binary.length);
let view = new Uint8Array(buffer);
for (let i = 0; i < binary.length; i++) {
  view[i] = binary[i] | 0;
}
WebAssembly.validate(buffer);
