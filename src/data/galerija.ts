export type GalerijaCjelina = 'rakije' | 'vocnjak' | 'vazduh' | 'sajmovi';

export type GalerijaSnimak = {
  id: string;
  cjelina: GalerijaCjelina;
  opis: string;
  /** Snimci u sirini zauzimaju dvije kolone u mrezi, uspravni jednu. */
  sirok: boolean;
};

export const galerijaCjeline: { kljuc: GalerijaCjelina | 'sve'; naziv: string }[] = [
  { kljuc: 'sve', naziv: 'Sve' },
  { kljuc: 'rakije', naziv: 'Rakije' },
  { kljuc: 'vocnjak', naziv: 'Voćnjak' },
  { kljuc: 'vazduh', naziv: 'Iz vazduha' },
  { kljuc: 'sajmovi', naziv: 'Sajmovi' }
];

/* Redoslijed nije po datoteci nego po tome kako se snimci smjenjuju u mrezi:
   rakije otvaraju stranicu, pa voćnjak, pa pogled iz vazduha i sajmovi. */
export const galerijaSnimci: GalerijaSnimak[] = [
  { id: 'rakija-01', cjelina: 'rakije', opis: 'Poklon paket sa četiri rakije Davidović', sirok: true },
  { id: 'rakija-02', cjelina: 'rakije', opis: 'Dunja Barrique u flaši', sirok: false },
  { id: 'rakija-03', cjelina: 'rakije', opis: 'Šljiva i Dunja Prestige jedna uz drugu', sirok: false },
  { id: 'rakija-04', cjelina: 'rakije', opis: 'Šljiva Prestige uz napunjenu čašu', sirok: false },
  { id: 'rakija-05', cjelina: 'rakije', opis: 'Čaša rakije pred flašom', sirok: false },
  { id: 'rakija-06', cjelina: 'rakije', opis: 'Čaša rakije uz dvije flaše Šljive Prestige', sirok: false },
  { id: 'rakija-07', cjelina: 'rakije', opis: 'Flaša Šljive Prestige na drvenom stolu', sirok: false },
  { id: 'rakija-08', cjelina: 'rakije', opis: 'Rakija u čaši pred zidom od cigle', sirok: false },
  { id: 'rakija-09', cjelina: 'rakije', opis: 'Četiri flaše rakije na stolu', sirok: true },
  { id: 'rakija-10', cjelina: 'rakije', opis: 'Nazdravljanje čašama rakije', sirok: false },

  { id: 'vocnjak-01', cjelina: 'vocnjak', opis: 'Redovi voćaka u proljeće', sirok: true },
  { id: 'vocnjak-02', cjelina: 'vocnjak', opis: 'Staza kroz voćnjak', sirok: true },
  { id: 'vocnjak-03', cjelina: 'vocnjak', opis: 'Traktor u radu među voćkama', sirok: true },
  { id: 'vocnjak-04', cjelina: 'vocnjak', opis: 'Voćnjak pod travom', sirok: true },
  { id: 'vocnjak-05', cjelina: 'vocnjak', opis: 'Voćke na proljetnom suncu', sirok: true },
  { id: 'vocnjak-06', cjelina: 'vocnjak', opis: 'Voćka pred listanje', sirok: false },
  { id: 'vocnjak-07', cjelina: 'vocnjak', opis: 'Cvijet voćke izbliza', sirok: true },
  { id: 'vocnjak-08', cjelina: 'vocnjak', opis: 'Traktor među rascvjetalim voćkama', sirok: true },
  { id: 'vocnjak-09', cjelina: 'vocnjak', opis: 'Grana u cvatu', sirok: true },
  { id: 'vocnjak-10', cjelina: 'vocnjak', opis: 'Zrele šljive na grani', sirok: false },
  { id: 'vocnjak-11', cjelina: 'vocnjak', opis: 'Kruške pred berbu', sirok: false },
  { id: 'vocnjak-12', cjelina: 'vocnjak', opis: 'Pokošeni redovi u voćnjaku', sirok: false },
  { id: 'vocnjak-13', cjelina: 'vocnjak', opis: 'Kruška na grani', sirok: false },
  { id: 'vocnjak-14', cjelina: 'vocnjak', opis: 'Šljive u punoj zrelosti', sirok: false },
  { id: 'vocnjak-15', cjelina: 'vocnjak', opis: 'Voćka pod vedrim nebom', sirok: false },
  { id: 'vocnjak-16', cjelina: 'vocnjak', opis: 'Kruške u voćnjaku pred berbu', sirok: false },
  { id: 'vocnjak-17', cjelina: 'vocnjak', opis: 'Šljive na grani pred berbu', sirok: false },
  { id: 'vocnjak-18', cjelina: 'vocnjak', opis: 'Voćnjak u cvatu', sirok: true },
  { id: 'vocnjak-19', cjelina: 'vocnjak', opis: 'Gajbe pune ubranih krušaka', sirok: false },

  { id: 'vazduh-01', cjelina: 'vazduh', opis: 'Voćnjak i imanje iz vazduha', sirok: true },
  { id: 'vazduh-02', cjelina: 'vazduh', opis: 'Redovi voćaka snimljeni iz vazduha', sirok: true },
  { id: 'vazduh-03', cjelina: 'vazduh', opis: 'Voćnjak na padini iz vazduha', sirok: true },
  { id: 'vazduh-04', cjelina: 'vazduh', opis: 'Zasad voćaka iz vazduha', sirok: true },
  { id: 'vazduh-05', cjelina: 'vazduh', opis: 'Kuća i voćnjak iz vazduha', sirok: true },
  { id: 'vazduh-06', cjelina: 'vazduh', opis: 'Traktor među redovima voćaka', sirok: true },
  { id: 'vazduh-07', cjelina: 'vazduh', opis: 'Voćnjak u proljeće iz vazduha', sirok: true },
  { id: 'vazduh-08', cjelina: 'vazduh', opis: 'Voćnjak uz šumu iz vazduha', sirok: true },
  { id: 'vazduh-09', cjelina: 'vazduh', opis: 'Imanje Davidović iz vazduha', sirok: true },
  { id: 'vazduh-10', cjelina: 'vazduh', opis: 'Redovi voćaka do horizonta', sirok: true },
  { id: 'vazduh-11', cjelina: 'vazduh', opis: 'Prolaz kroz voćnjak iz vazduha', sirok: true },
  { id: 'vazduh-12', cjelina: 'vazduh', opis: 'Voćnjak i okolna polja iz vazduha', sirok: true },
  { id: 'vazduh-13', cjelina: 'vazduh', opis: 'Mladi zasad iz vazduha', sirok: true },
  { id: 'vazduh-14', cjelina: 'vazduh', opis: 'Voćnjak u punom listu iz vazduha', sirok: true },
  { id: 'vazduh-15', cjelina: 'vazduh', opis: 'Traktor u voćnjaku snimljen iz vazduha', sirok: true },
  { id: 'vazduh-16', cjelina: 'vazduh', opis: 'Padina pod voćnjakom iz vazduha', sirok: true },

  { id: 'sajam-01', cjelina: 'sajmovi', opis: 'Štand rakije Davidović na sajmu', sirok: false },
  { id: 'sajam-02', cjelina: 'sajmovi', opis: 'Flaše i poklon kutije na štandu', sirok: true },
  { id: 'sajam-03', cjelina: 'sajmovi', opis: 'Izloženi proizvodi na sajamskom štandu', sirok: false }
];

export const malaSlika = (id: string) => `/galerija/${id}-mala.jpg`;
export const velikaSlika = (id: string) => `/galerija/${id}.jpg`;
