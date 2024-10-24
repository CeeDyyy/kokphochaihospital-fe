'use client'

export default function About() {

    return (
        <div className="lg:px-32 2xl:px-96">
            <div className="h-full flex flex-col items-center pt-32">
                <p className="text-6xl mb-12">About</p>
                <div className="grid md:grid-cols-2 w-full gap-12 justify-items-center">

                    <div className="w-full col-start-2">
                        <div className="py-8 bg-gradient-to-r from-[#FFFFFF] from-0% via-[#BCEAFF] via-30% to-[#FFFFFF] to-100%">
                            <p className="text-3xl text-[#1E88E5] mb-4 font-bold">Vision</p>
                            <p>โรงพยาบาลโคกโพธิ์ไชย เป็นโรงพยาบาลที่ดูแลสุขภาพประชาชนอย่างมีคุณภาพ<br />
                                ตามหลักเวชศาสตร์ครอบครัว โดยชุมชนมีส่วนร่วมเพื่อประชาชนสุขภาพดี</p>
                        </div>
                    </div>

                    {/* Mission */}
                    <div className="w-full col-end-2 ">
                        <div className="py-8 bg-gradient-to-r from-[#FFFFFF] from-0% via-[#BCEAFF] via-30% to-[#FFFFFF] to-100%">
                            <p className="text-3xl text-[#1E88E5] mb-4 font-bold">Mission</p>
                            <ul className="list-disc">
                                <li>พัฒนาระบบบริการสุขภาพที่มีคุณภาพ</li>
                                <li>เสริมสร้างสุขภาพทุกลุ่มวัย ประชาชน ท้องถิ่นและภาคีเครือข่ายมีส่วนร่วมในการจัดการสุขภาพอย่างเข้มแข็งและยั่งยืน</li>
                                <li>ป็นองค์กรแห่งการเรียนรู้โดยใช้เทคโนโลยี นวัตกรรมที่ทันสมัย การบริหารจัดการที่มีประสิทธิภาพ</li>
                                <li>มุ่งสู่การพัฒนาเป็นหน่วยบริการรับส่งต่อโดยการดูแลผู้ป่วยแบบองค์รวม</li>
                            </ul>
                        </div>
                    </div>

                    {/* Core values */}
                    <div className="w-full col-span-2">
                        <div className="py-8 bg-gradient-to-r from-[#FFFFFF] from-0% via-[#BCEAFF] via-30% to-[#FFFFFF] to-100%">
                            <p className="text-center text-3xl font-bold mb-6">Core values</p>
                            <div className="w full grid grid-cols-3 justify-items-center">
                                <div className="justify-items-center">
                                    <div className="rounded-full bg-[#1E88E5] justify-items-center aspect-square w-10 content-center mb-2">
                                        <p className="text-white font-bold text-3xl">K</p>
                                    </div>
                                    <p>Knowledge and Learning</p>
                                </div>

                                <div className="justify-items-center">
                                    <div className="rounded-full bg-[#1E88E5] justify-items-center aspect-square w-10 content-center mb-2">
                                        <p className="text-white font-bold text-3xl">P</p>
                                    </div>
                                    <p>Patient and Personal focus</p>
                                </div>

                                <div className="justify-items-center">
                                    <div className="rounded-full bg-[#1E88E5] justify-items-center aspect-square w-10 content-center mb-2">
                                        <p className="text-white font-bold text-3xl">C</p>
                                    </div>
                                    <p>Continuous improvement</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hospital name  */}
                    <div className="w-full col-span-2 justify-items-center">
                        <div className="flex gap-x-8 md:w-3/5">
                            <img width={200}
                                src="https://kokphochaihospital.wordpress.com/wp-content/uploads/2020/04/e0b897e0b8b3e0b980e0b899e0b8b5e0b8a2e0b89ae0b89ae0b8b8e0b884e0b8a5e0b8b2e0b881e0b8a3_e0b991e0b998e0b990e0b999e0b992e0b995_0013.jpg" />
                            <div>
                                <p className="text-2xl font-bold mb-5">โรงพยาบาลโคกโพธิ์ไชย</p>
                                <p>โรงพยาบาลโคกโพธิ์ไชย เป็นโรงพยาบาลชุมชน ระดับ F3 สังกัดกระทรวงสาธารณสุข ตั้งอยู่เลขที่ 63 ม.8 ต.บ้านโคก อ.โคกโพธิ์ไชย จ.ขอนแก่น ห่างจากจังหวัดขอนแก่น 76 กิโลเมตร เปิดให้บริการเมื่อที่ 16 ธันวาคม พ.ศ. 2556</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
