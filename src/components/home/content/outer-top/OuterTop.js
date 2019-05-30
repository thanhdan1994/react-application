import React, { Component } from 'react'
import Aside from './aside/Aside';
import Section from './section/Section';

class OuterTop extends Component {
    render() {
        let data = {
            prior1: {
                headline: '​Ăn đất, ăn tất, ăn như xáng xúc',
                description: 'TTO - Về chuyện ăn (hiểu theo nghĩa bóng), hiện nay có câu nói quen thuộc, phổ biến: “Ăn giày, ăn tất, ăn cả đất xung quanh”. Một khi nói đến tất/ ăn tất, tất nhiên ta nghĩ đến hành động ăn tất cả, ăn tất tần tật, không bỏ sót mảy may.',
                thumbnail: 'https://sstaticcuoi.tuoitre.vn/ttc/i/s475/2019/05/23/an-nhu-xang-cap-biem-hoa-1558087125236587509431-1558583038.jpg'
            },
            prior2: {
                headline: '​Bài ca lỗ của ông Điện Lực',
                description: '',
                thumbnail: 'https://sstaticcuoi.tuoitre.vn/ttc/i/s1852/2019/05/07/19-doc-1557212703.jpg'
            },
            prior3: [
                {
                    headline: "'Cường quốc' vàng mã",
                    description: '',
                    thumbnail: 'https://sstaticcuoi.tuoitre.vn/ttc/i/s226/2019/05/03/tranh-1-3-2018-dot-vang-ma-52-1550562919426834498150-1556866083.jpg'
                },
                {
                    headline: "'Cường quốc' vàng mã 1",
                    description: '',
                    thumbnail: 'https://sstaticcuoi.tuoitre.vn/ttc/i/s226/2019/04/25/truyen-tranh-img-2268-1556178421.jpg'
                },
                {
                    headline: "'Cường quốc' vàng mã 2",
                    description: '',
                    thumbnail: 'https://sstaticcuoi.tuoitre.vn/ttc/i/s226/2019/05/03/tranh-1-3-2018-dot-vang-ma-52-1550562919426834498150-1556866083.jpg'
                },
                {
                    headline: "'Cường quốc' vàng mã 3",
                    description: '',
                    thumbnail: 'https://sstaticcuoi.tuoitre.vn/ttc/i/s226/2019/04/25/truyen-tranh-img-2268-1556178421.jpg'
                }
            ]
        }
        return (
            <div className="outer outer-top">
                <Section objectList={data}/>
                <Aside />
            </div>

        )
    }
}

export default OuterTop