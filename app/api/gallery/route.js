import { promises as fs } from 'fs';
import path from 'path';

export async function GET(req) {  // No `res` in app directory API routes
    return new Response(JSON.stringify({
        galleries: [
            {
                title: "งานผ้าป่าโรงพยาบาล 21 มกราคม 2565",
                image: "https://kokphochaihospital.wordpress.com/wp-content/uploads/2022/01/img_2631-1.jpg",
                url: "https://photos.app.goo.gl/kUYpw4iQGQrhA1m46",
                date: "2022-01-21"
            },
            {
                title: "งานผ้าป่าโรงพยาบาล 17 มกราคม 2563",
                image: "https://kokphochaihospital.wordpress.com/wp-content/uploads/2020/04/dsc_5579.jpg",
                url: "https://photos.app.goo.gl/YG6BcUXVUD1Pdaf26",
                date: "2020-01-17"
            },
            {
                title: "สงกรานต์ 2562",
                image: "https://kokphochaihospital.wordpress.com/wp-content/uploads/2020/04/dsc_0283.jpg",
                url: "https://photos.app.goo.gl/t2dBhs6nUM476QYj7",
                date: "2019-04-13"
            }
        ]
    }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}
