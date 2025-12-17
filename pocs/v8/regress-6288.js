if (this.Intl) {
  print('pt-BR', Intl.Collator().resolvedOptions().locale);
  print('pt-BR', Intl.DateTimeFormat().resolvedOptions().locale);
}
