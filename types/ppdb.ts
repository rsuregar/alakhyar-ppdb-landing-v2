export interface ComingSoon {
  title: string;
  subtitle: string;
  description: string;
  tahun_ajaran: string;
  show: boolean;
}

export interface AdditionalPromo {
  promo: string;
  title: string;
  subtitle: string;
  diskon: Diskon;
  voucher: string;
}

export interface Diskon {
  formulir: string;
  biaya_pendidikan: string;
}

export interface BerkasOrKeterangan {
  tkit: string[];
  sdit: string[];
  smpit: string[];
  smait: string[];
}

interface Gelombang {
  id: string;
  diskon_alumni: string | number;
  diskon_umum: string | number;
}

interface Prestasi {
  tingkat: string;
  nilai: string;
}

interface DetailBiaya {
  formulir: number;
  uang_pangkal: number;
  infaq_sarpras?: number;
  infaq_sarpras_a?: number;
  infaq_sarpras_b?: number;
  mos: number | string;
  spp: number;
  kegiatan: number;
  total_biaya?: number;
  total_biaya_a?: number;
  total_biaya_b?: number;
  tahfidz?: number;
  diskon_1: number;
  diskon_2: number;
  gelombang: Gelombang[];
  diskon?: string[];
  diskons?: string[];
  discon_image: string;
  prestasi?: Prestasi[];
}

export interface Biaya {
  tkit: DetailBiaya;
  sdit: DetailBiaya;
  smpit: DetailBiaya;
  smait: DetailBiaya;
}

interface OpenHouse {
  tkit: string;
  sdit: string;
  smpit: string;
  smait: string;
}

interface Observasi {
  tkit: string;
  sdit: string;
  smpit: string;
  smait: string;
}

interface MOS {
  tkit: boolean | string;
  sdit: boolean | string;
  smpit: string;
  smait: string;
}

interface KBM {
  tkit: string;
  sdit: string;
  smpit: string;
  smait: string;
}

interface Kuota {
  tkit: number;
  sdit: number;
  smpit: number;
  smait: number;
}

export interface Jadwal {
  buka: string;
  test: string;
  pengumuman: string | null;
  heregistrasi: string;
  openhouse: OpenHouse;
  observasi: Observasi;
  observasi_2: Observasi;
  mos: MOS;
  kbm: KBM;
  batch2: string;
  kuota: Kuota;
}

interface TestMasuk {
    tkit: string;
    sdit: string;
    smpit: string;
    smait: string;
  }
  
  interface Perlengkapan {
    tkit: string[];
    sdit: string[];
    smpit: string[];
    smait: string[];
  }
  
  interface BankDetail {
    bank: string;
    rekening: string;
    penerima: string;
  }
  
  interface Pembayaran {
    tkit: BankDetail[];
    official: BankDetail[];
  }
  
  interface Kontak {
    tkit: string;
    official: string;
  }
  
  interface WhatsApp {
    tkit: string;
    official: string;
  }
  
  export interface InfoSekolah {
    test_masuk: TestMasuk;
    perlengkapan: Perlengkapan;
    pembayaran: Pembayaran;
    resi: string;
    kontak: Kontak;
    whatsApp: WhatsApp;
  }
