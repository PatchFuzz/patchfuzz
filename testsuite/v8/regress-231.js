






























var re = /Ggcy\b[^D]*D((?:(?=([^G]+))\2|G(?!gcy\b[^D]*D))*?)GIgcyD/;

var str = 'GgcyDGgcy.saaaa.aDGaaa.aynaaaaaaaaacaaaaagcaaaaaaaancaDGgnayr' +
    '.aryycnaaaataaaa.aryyacnaaataaaa.aaaaraaaaa.aaagaaaaaaaaDGgaaaaDGga' +
    '.aaagaaaaaaaaDGga.nyataaaaragraa.anyataaagaca.agayraaarataga.aaacaa' +
    '.aaagaa.aaacaaaDGaaa.aynaaaaaaaaacaaaaagcaaaaaacaagaa.agayraaaGgaaa' +
    '.trgaaaaaagaatGanyara.caagaaGaD.araaaa_aat_aayDDaaDGaaa.aynaaaaaaaa' +
    'acaaaaagcaaaaaacaaaaa.agayraaaGgaaa.trgaaaaaaatGanyaraDDaaDGacna.ay' +
    'naaaaaaaaacaaaaagcaaaaaacaaaraGgaaa.naaaaagaaaaaaraynaaGanyaraDDaaD' +
    'aGgaaa.saaangaaaaraaaGgaaa.trgaaaragaaaarGanyaraDDDaGIacnaDGIaaaDGI' +
    'aaaDGIgaDGga.anyataaagaca.agayraaaaagaa.aaaaa.cnaaaata.aca.aca.aca.' +
    'acaaaDGgnayr.aaaaraaaaa.aaagaaaaaaaaDGgaaaaDGgaDGga.aayacnaaaaa.ayn' +
    'aaaaaaaaacaaaaagcaaaaaanaraDGaDacaaaaag_anaraGIaDGIgaDGIgaDGgaDGga.' +
    'aayacnaaaaa.aaagaaaaaaaaDGaa.aaagaaaaaaaa.aaaraaaa.aaaanaraaaa.IDGI' +
    'gaDGIgaDGgaDGga.aynaaaaaaaaacaaaaagcaaaaaaaraaaa.anyataaagacaDaGgaa' +
    'a.trgGragaaaacgGaaaaaaaG_aaaaa_Gaaaaaaaaa,.aGanar.anaraDDaaGIgaDGga' +
    '.aynaaaaaaaaacaaaaagcaaaaaaanyara.anyataaagacaDGaDaaaaag_caaaaag_an' +
    'araGIaDGIgaDGIgaDGgaDGga.aynaaaaaaaaacaaaaagcaaaaaaaraaaa.anyataaag' +
    'acaDaGgaaa.trgGragaaaacgGaaaaaaaG_aaaaa_aaaaaa,.aaaaacaDDaaGIgaDGga' +
    '.aynaaaaaaaaacaaaaagcaaaaaaanyara.anyataaagacaDGaDataaac_araaaaGIaD' +
    'GIgaDGIgaDaagcyaaGgaDGga.aayacnaaaaa.aaagaaaaaaaaDGaa.aaagaaaaaaaa.' +
    'aaaraaaa.aaaanaraaaa.IDGIgaDGIgaDGgcy.asaadanyaga.aa.aaaDGgaDGga.ay' +
    'naaaaaaaaacaaaaagcaaaaaaaraaaa.anyataaagacaDaGgaaa.trgGragaaaacgGaa' +
    'aaaaaG_aaaaa_DaaaaGaa,.aDanyagaaDDaaGIgaDGga.aynaaaaaaaaacaaaaagcaa' +
    'aaaaanyara.anyataaagacaDGaDadanyagaaGIaDGIgaDGIgaDGIgcyDGgcy.asaaga' +
    'cras.agra_yratga.aa.aaaarsaaraa.aa.agra_yratga.aa.aaaDGgaDGga.aynaa' +
    'aaaaaaacaaaaagcaaaaaaaraaaa.anyataaagacaDaGgaaa.trgGragaaaacgGaaaaa' +
    'aaG_aaaaa_aGaaaaaaGaa,.aaratgaaDDaaGIgaDGga.aynaaaaaaaaacaaaaagcaaa' +
    'aaaanyara.anyataaagacaDGaDaagra_yratgaaGIaDGIgaDGIgaDGIgcyDGgcy.asa' +
    'agacras.aratag.aa.aaaarsaaraa.aa.aratag.aa.aaaDGgaDGga.aynaaaaaaaaa' +
    'caaaaagcaaaaaaaraaaa.anyataaagacaDaGgaaa.trgGragaaaacgGaaaaaaaG_aaa' +
    'aa_aaaaaGa,.aaratagaDDaaGIgaDGga.aynaaaaaaaaacaaaaagcaaaaaaanyara.a' +
    'nyataaagacaDGaDaaratagaGIaDGIgaDGIgaDGIgcyDGgcy.asaagacras.gaaax_ar' +
    'atag.aa.aaaarsaaraa.aa.gaaax_aratag.aa.aaaDGgaDGga.aynaaaaaaaaacaaa' +
    'aagcaaaaaaaraaaa.anyataaagacaDaGgaaa.trgGragaaaacgGaaaaaaaG_aaaaa_G' +
    'aaaaaaaaaGa,.aaratagaDDaaGIgaDGga.aynaaaaaaaaacaaaaagcaaaaaaanyara.' +
    'anyataaagacaDGaDagaaax_aratagaGIaDGIgaDGIgaDGIgcyDGgcy.asaagacras.c' +
    'ag_aaar.aa.aaaarsaaraa.aa.cag_aaar.aa.aaaDGgaDGga.aynaaaaaaaaacaaaa' +
    'agcaaaaaaaraaaa.anyataaagacaDaGgaaa.trgGragaaaacgGaaaaaaaG_aaaaa_aa' +
    'Gaaaaa,.aaagaaaraDDaaGIgaDGga.aynaaaaaaaaacaaaaagcaaaaaaanyara.anya' +
    'taaagacaDGaDacag_aaaraGIaDGIgaDGIgaDGIgcyDGgcy.asaagacras.aaggaata_' +
    'aa_cynaga_cc.aa.aaaarsaaraa.aa.aaggaata_aa_cynaga_cc.aa.aaaDGgaDGga' +
    '.aynaaaaaaaaacaaaaagcaaaaaaaraaaa.anyataaagacaDaGgaaa.trgGragaaaacg' +
    'GaaaaaaaG_aaaaa_aaGGaaaa_aa_aaaaGa_aaa,.aaynagaIcagaDDaaGIgaDGga.ay' +
    'naaaaaaaaacaaaaagcaaaaaaanyara.anyataaagacaDGaDaaaggaata_aa_cynaga_' +
    'ccaGIaDGIgaDGIgaDGIgcyDGgcy.asaagacras.syaara_aanargra.aa.aaaarsaar' +
    'aa.aa.syaara_aanargra.aa.aaaDGgaDGga.aynaaaaaaaaacaaaaagcaaaaaaaraa' +
    'aa.anyataaagacaDaGgaaa.trgGragaaaacgGaaaaaaaG_aaaaa_aaaaaaaaaaaGaaa' +
    ',.aaanargraaDDaaGIgaDGga.aynaaaaaaaaacaaaaagcaaaaaaanyara.anyataaag' +
    'acaDGaDasyaara_aanargraaGIaDGIgaDGIgaDGIgcyDGgcy.asaagacras.cynag_a' +
    'anargra.aa.aaaarsaaraa.aa.cynag_aanargra.aa.aaaDGgaDGga.aynaaaaaaaa' +
    'acaaaaagcaaaaaaaraaaa.anyataaagacaDaGgaaa.trgGragaaaacgGaaaaaaaG_aa' +
    'aaa_aaaaGaaaaaGaaa,.aaanargraaDDaaGIgaDGga.aynaaaaaaaaacaaaaagcaaaa' +
    'aaanyara.anyataaagacaDGaDacynag_aanargraaGIaDGIgaDGIgaDGIgcyDGgaDGg' +
    'a.aynaaaaaaaaacaaaaagcaaaaaaaraaaa.anyataaagacaDaGgaaa.trgGragaaaac' +
    'gGaaaaaaaG';



var res = re.test(str);
assertTrue(res);
