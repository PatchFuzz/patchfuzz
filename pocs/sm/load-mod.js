function loadMod(name) {
  return decompressLZ4(os.file.readFile(libdir + "gen/" + name, "binary").buffer)
}
