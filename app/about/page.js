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
                            <p className="text-center text-3xl font-bold">Core values</p>
                            <div className="w full grid grid-cols-3 justify-items-center">
                                <div>
                                    <p>Knowledge and Learning</p>
                                </div>
                                <div>
                                    <p>Patient and Personal focus</p>
                                </div>
                                <div>
                                <p>Continuous improvement</p>
                                </div>
                            </div>
                        </div>
                    </div>

                   {/* Hospital name  */}
                    <div className="w-full col-span-2">
                        <p className="text-center text-2xl font-bold">โรงพยาบาลโคกโพธิ์ไชย</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
