export default function Accordion() {
  const dataAccordion = [
    {
      question: "Apakah melayani proses shoot video?",
      answer:
        "Tidak, saya hanya melayani untuk proses edit video nya saja. Karena untuk saat ini saya belum ada alat yang memadai untuk proses shoot",
    },
    {
      question: "Apakah bisa refund?",
      answer: "Boleh, asalkan video masih belum pada fase sedang di edit",
    },
    {
      question: "Apakah bisa revisi?",
      answer:
        "Tentu saja bisa, untuk revisi boleh dilakukan berkali-kali, asal masih dalam response selama 23jam 59menit setelah video selesai dan diberikan ke anda. Jika lebih dari itu, maka video dinyatakan sudah sesuai",
    },
    {
      question: "Untuk biaya nya setiap video berapa?",
      answer:
        "Untuk setiap video yang kita edit bisa berkisar di harga IDR 75.000 dengan durasi video 10 menit. dan tentu semakin kompleks video yang diinginkan juga harga pervideo akan disesuaikan",
    },
    {
      question: "Bagaimana mengirim video bahannya?",
      answer:
        "Setiap bahan yang dikirm , langsung bisa diupload di google drive masing-masing. Dengan banyak video, sesuaikan dengan kebutuhan dan keinginan anda",
    },
    {
      question: "Apakah bisa 1 hari jadi?",
      answer:
        "Ini juga sesuai dengan permintaan dan durasi video yang diedit. bisa lebih cepat dan bisa juga membutuhkan waktu lebih terutama jika ada revisi dan lain sebagainnya",
    },
    {
      question: "Hasil akhirnya benaran bagus?",
      answer:
        "Tentu saja saya akan melakukan pengeditan semaksimal mungkin untuk video anda, namun tidak dipungkiri untuk kualitas dari bahan video yang dikirimkan ke saya juga akan berpengaruh ke hasil akhir",
    },
  ];
  return (
    <>
      {dataAccordion.map((data, index) => (
        <div
          className="collapse collapse-arrow bg-#1d232a border border-base-300"
          key={index}
        >
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-white">
            {data.question}
          </div>
          <div className="collapse-content text-sm text-white">
            {data.answer}
          </div>
        </div>
      ))}
    </>
  );
}
