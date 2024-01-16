








if (this.Intl) {
  assertEquals('pt-BR', Intl.Collator().resolvedOptions().locale);
  assertEquals('pt-BR', Intl.DateTimeFormat().resolvedOptions().locale);
}
