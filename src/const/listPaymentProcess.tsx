import { Banknote, BookText, Landmark, Send } from "lucide-react";

export const listPaymentProcess = [
  {
    id: 0,
    title: "Mengisi Form",
    icon: <BookText size={36} />,
    desc: "Pilih jaringan dan koin eceran yang ingin dibeli, isi alamat wallet tujuan dan jumlah koin yang ingin dibeli",
  },
  {
    id: 1,
    title: "Metode Pembayaran",
    icon: <Landmark size={36} />,
    desc: "Pilih metode pembayaran, yaitu: OVO, Dana atau Gopay. Ikuti instruksi yang diberikan",
  },
  {
    id: 2,
    title: "Menunggu Pembayaran",
    icon: <Banknote size={36} />,
    desc: "Lakukan pembayaran dan tunggu sampai pembayaran anda di konfirmasi",
  },
  {
    id: 3,
    title: "Proses Transfer",
    icon: <Send size={36} />,
    desc: "Koin akan otomatis di transfer ke alamat tujuan setelah pembayaran di konfirmasi",
  },
];
