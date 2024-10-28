export type SiteConfig = typeof siteConfig

export const siteConfig = {
  title: 'PPDB Al Akhyar Islamic School',
  description:
    'Daftar sekarang di Al Akhyar Islamic School, sekolah Islam terbaik yang mengedepankan pendidikan holistik untuk anak. Temukan lingkungan belajar yang mendukung perkembangan akademis, karakter, dan spiritual anak melalui kurikulum Merdeka dan pendekatan Beyond Centers and Circle Time (BCCT). Pendaftaran PPDB terbuka untuk tingkat TK hingga SMA. ',
  keywords:
    'PPDB Al Akhyar Islamic School, sekolah Islam terbaik, pendidikan holistik, sekolah Islam Makassar, TK Islam, SD Islam, SMP Islam, SMA Islam, kurikulum Merdeka, BCCT, PPDB Alakhyar, sekolah islam, sekolah islam makassar, SD, SMP, SMA, TK, PAUD, Alakhyar, Alakhyar Islamic School, PPDB, Penerimaan Peserta Didik Baru, PPDB Alakhyar, PPDB Alakhyar Islamic School, PPDB Makassar, PPDB Sekolah Islam, PPDB Sekolah Islam Makassar, PPDB SD, PPDB SMP, PPDB SMA, PPDB TK, PPDB PAUD',
  mainNav: [
    {
      title: 'Home',
      key: 'home',
      href: '/',
    },
    {
      title: 'Jadwal',
      key: 'jadwal',
      href: '/jadwal',
    },
    {
      title: 'Jenjang',
      key: 'jenjang',
      children: [
        {
          title: 'TK',
          href: '/jenjang/tk',
        },
        {
          title: 'SD',
          href: '/jenjang/sd',
        },
        {
          title: 'SMP',
          href: '/jenjang/smp',
        },
        {
          title: 'SMA',
          href: '/jenjang/sma',
        },
      ],
    },
  ],
  links: {
    instagram: 'https://instagram.com/alakhyar_is',
    // github: "https://github.com/shadcn/ui",
    // docs: "https://ui.shadcn.com",
  },
}
