export default function Footer() {

  return (
    <footer className="md:px-96 bg-green-200">
      <div className="p-8 bg-white">
        <div className="grid grid-cols-2">
          <p>โรงพยาบาลโคกโพธิ์ไชย</p>
          <div className="flex gap-x-8">
            <div>
              <p>เวลาทำการ</p>
              <p>จันทร์ - ศุกร์ เปิด 8:00 - 16:00 น.</p>
              <p>เสาร์ - อาทิตย์ : ปิดทำการ</p>
              <p>แผนกอุบัติเหตุฉุกเฉิน (ER)</p>
              <p>เปิดทำการตลอด 24 ชม.</p>
            </div>
            <div>
              <p>ที่อยู่</p>
              <p>
                โรงพยาบาลโคกโพธิ์ไชย
                63 ม.8 ต.บ้านโคก
                อ.โคกโพธิ์ไชย จ.ขอนแก่น 40160
              </p>
            </div>
          </div>
        </div>
        <hr className="m-8" />
      </div>
    </footer>
  );
}
