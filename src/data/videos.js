// All portfolio videos extracted from the Wix portfolio site
const allVideos = [
    // === G-Star & Cinematic Trailers ===
    {
        id: '41',
        title: '[Knight Crows] Cinematic Trailer',
        url: 'https://www.youtube.com/embed/QOncAUfbHDA',
        category: 'Cinematic Trailer'
    },
    {
        id: '1',
        title: '[Project Q] G-Star 2024 Special Trailer 4K',
        url: 'https://www.youtube.com/embed/rewe8ZRbxEs',
        category: 'Cinematic Trailer'
    },
    {
        id: '2',
        title: '[Project S] G-Star 2024 Special Trailer 4K',
        url: 'https://www.youtube.com/embed/QH4Phb2wOvI',
        category: 'Cinematic Trailer'
    },
    {
        id: '3',
        title: '[Teaser] Mirage, a new world of NFT gaming',
        url: 'https://www.youtube.com/embed/zjsVCBasYxY',
        category: 'Teaser Trailer'
    },

    // === MIR4 시리즈 ===
    {
        id: '4',
        title: '[미르4] 게임 특징 열세번째: 비천약탈전',
        url: 'https://www.youtube.com/embed/DM0Qfg3qlDo',
        category: 'In-game Cinematic'
    },
    {
        id: '5',
        title: '[MIR4] Eighth: Class Combat/Introduction Video',
        url: 'https://www.youtube.com/embed/V9zs9wA4RZw',
        category: 'Combat & Action Sequence'
    },
    {
        id: '6',
        title: '[미르4] 신규 직업 석궁사 스킬 미리보기',
        url: 'https://www.youtube.com/embed/p6E02XV1F38',
        category: 'Skill Presentation'
    },
    {
        id: '7',
        title: '[미르4] 게임 특징 열두번째: 원정대',
        url: 'https://www.youtube.com/embed/JPomKrIV3bc',
        category: 'In-game Cinematic'
    },
    {
        id: '8',
        title: '[미르4] 게임 특징 열한번째: 즉위식',
        url: 'https://www.youtube.com/embed/oqojGKNcfFg',
        category: 'In-game Cinematic'
    },
    {
        id: '9',
        title: '[미르4] 게임 특징 열번째: 쟁(爭)',
        url: 'https://www.youtube.com/embed/y6bUeztAxHc',
        category: 'In-game Cinematic'
    },
    {
        id: '10',
        title: '[미르4] 게임 특징 아홉번째: 표국통행권',
        url: 'https://www.youtube.com/embed/afB9RicHq7o',
        category: 'In-game Cinematic'
    },
    {
        id: '11',
        title: '[미르4] 게임 특징 여덟번째: 미르 대륙의 탐험 전리품',
        url: 'https://www.youtube.com/embed/hzMx76nYZzg',
        category: 'In-game Cinematic'
    },
    {
        id: '12',
        title: '[미르4] 게임 특징 일곱번째: 비천공성전',
        url: 'https://www.youtube.com/embed/CJJOt9a-fjM',
        category: 'In-game Cinematic'
    },
    {
        id: '13',
        title: '[미르4] 게임 특징 여섯번째: 비곡점령전',
        url: 'https://www.youtube.com/embed/5aSAuv3KQfc',
        category: 'In-game Cinematic'
    },
    {
        id: '14',
        title: '[미르4] 게임 특징 다섯번째: 프리루팅',
        url: 'https://www.youtube.com/embed/kapf9KKSDqg',
        category: 'In-game Cinematic'
    },
    {
        id: '15',
        title: '[미르4] 게임 특징 네번째: 문파',
        url: 'https://www.youtube.com/embed/YTXI5kE9Q7A',
        category: 'In-game Cinematic'
    },
    {
        id: '16',
        title: '[미르4] 게임 특징 세번째: 정령',
        url: 'https://www.youtube.com/embed/r2LfmwnWMTU',
        category: 'In-game Cinematic'
    },
    {
        id: '17',
        title: '[미르4] 게임 특징 두번째: 금난전권',
        url: 'https://www.youtube.com/embed/OlIVM15oRy4',
        category: 'In-game Cinematic'
    },
    {
        id: '18',
        title: '[미르4] 게임 특징 첫번째: 오리엔탈 무브먼트',
        url: 'https://www.youtube.com/embed/oVQ8A3iW7LI',
        category: 'In-game Cinematic'
    },

    // === 3on3 FreeStyle ===
    {
        id: '19',
        title: 'New Character Spotlight: Jason | 3on3 FreeStyle',
        url: 'https://www.youtube.com/embed/y0-ZYDrO2xY',
        category: 'Game Promo'
    },
    {
        id: '20',
        title: '[Xbox One] Big Update Coming Soon | 3on3 FreeStyle',
        url: 'https://www.youtube.com/embed/GAE4-KuU0X0',
        category: 'Game Promo'
    },
    {
        id: '21',
        title: 'New Character Spotlight: Rebecca | 3on3 FreeStyle',
        url: 'https://www.youtube.com/embed/q1RwnKTEl8w',
        category: 'Game Promo'
    },
    {
        id: '22',
        title: '[PS4] Special Winter Updates(Dec.13th) | 3on3 FreeStyle',
        url: 'https://www.youtube.com/embed/KRFVHyl_lpU',
        category: 'Game Promo'
    },

    // === 광고/CF 작업 ===
    {
        id: '23',
        title: '[엠에스코] DPC 2019 Branding Campaign: SKINSHOT LED MASK',
        url: 'https://www.youtube.com/embed/V0xcnbNRdfs',
        category: 'Commercial / CF'
    },
    {
        id: '24',
        title: '[엠에스코] DPC 2019 Branding Campaign: SKIN RUB SPA',
        url: 'https://www.youtube.com/embed/GX6Kz3XI2Kc',
        category: 'Commercial / CF'
    },
    {
        id: '25',
        title: '[엠에스코] DPC 2019 Branding Campaign: BRAND TVC',
        url: 'https://www.youtube.com/embed/mFYhyGnQtb8',
        category: 'Commercial / CF'
    },
    {
        id: '26',
        title: 'DPC 핑크 아우라 쿠션 덕후들의 리얼 간증 스토리',
        url: 'https://www.youtube.com/embed/G8gmBZlyPFk',
        category: 'Commercial / CF'
    },
    {
        id: '27',
        title: "에어부산 '코타키나발루편'",
        url: 'https://www.youtube.com/embed/7TKdqgGR_Ps',
        category: 'Commercial / CF'
    },
    {
        id: '28',
        title: '[SK가스] 딸과의 첫 여행(Full ver.)',
        url: 'https://www.youtube.com/embed/kkix-T_YG6M',
        category: 'Commercial / CF'
    },
    {
        id: '29',
        title: '[SK가스] 세상에서 가장 큰 도넛(Full ver.)',
        url: 'https://www.youtube.com/embed/dBL9YYrWdVc',
        category: 'Commercial / CF'
    },
    {
        id: '30',
        title: '[SK가스] 택배는 사랑을 싣고(Full ver.)',
        url: 'https://www.youtube.com/embed/UYjOdjrXxlc',
        category: 'Commercial / CF'
    },
    {
        id: '31',
        title: '[SK가스] 달려라 푸른 버스(Full ver.)',
        url: 'https://www.youtube.com/embed/gaH8iFtrvd0',
        category: 'Commercial / CF'
    },
    {
        id: '32',
        title: '[쏘카 비즈니스] 장거리 출장도 걱정없다',
        url: 'https://www.youtube.com/embed/lfEKDVUvP8s',
        category: 'Commercial / CF'
    },
    {
        id: '33',
        title: '[CELLRETURN] 글로벌 No1.을 위해_TVC 30s',
        url: 'https://www.youtube.com/embed/V8Wh_cYDY2g',
        category: 'Commercial / CF'
    },
    {
        id: '34',
        title: '황정민과 함께하는 우체국 금융서비스_버스편',
        url: 'https://www.youtube.com/embed/etq3W662CMo',
        category: 'Commercial / CF'
    },
    {
        id: '35',
        title: '황정민의 우체국 보험-뮤지컬편-이혁준 크리에이티브 디렉터',
        url: 'https://www.youtube.com/embed/R3DSPN2jlQ0',
        category: 'Commercial / CF'
    },
    {
        id: '36',
        title: '[VISION] 원카: 이서진 편',
        url: 'https://www.youtube.com/embed/3uhDDgBoKCI',
        category: 'Commercial / CF'
    },
    {
        id: '37',
        title: '[VISION] 정로환_김준현편',
        url: 'https://www.youtube.com/embed/bzLmmZmrHis',
        category: 'Commercial / CF'
    },
    {
        id: '38',
        title: 'FEEL THE AURA, DPC 핑크 아우라 쿠션 페이스 리프트',
        url: 'https://www.youtube.com/embed/VgMh_OSXZnA',
        category: 'Commercial / CF'
    },
    {
        id: '39',
        title: "천연사이다 광고 '천사의 비밀' 편",
        url: 'https://www.youtube.com/embed/Jf_GMY80J4w',
        category: 'Commercial / CF'
    },
    {
        id: '40',
        title: '블랙 미러 | 통합 예고편 | Netflix',
        url: 'https://www.youtube.com/embed/aE8tkxjueoE',
        category: 'Editing / VFX'
    },
    {
        id: '42',
        title: '[셀리턴 New TVCF] 당신만을 위한 완성맞춤 - 이민호,강소라,박서준의 LED마스크',
        url: 'https://www.youtube.com/embed/L_I4nMkZPNI',
        category: 'Commercial / CF'
    }
];

// ============================================
// 남은 Wix 직접 업로드 영상 (YouTube 업로드 필요) — 10개
// ============================================
// 1. 20220225_MIR_VV_PREVIEW (미르 VV 프리뷰)
// 2. 20210308_비천공성전_광고소재_수정6 (비천공성전 광고소재)
// 3. 현대 VR
// 4. 0428_최석희_ITZY_브랜드메이킹_ALT_VER_v03 (ITZY 브랜드메이킹)
// 5. 0429_itzy_테이핑_v04 (ITZY 테이핑)
// 6. 20200427_ITZY구김종이_A_V05 (ITZY 구김종이)
// 7. 0423_ITZY_그라데이션_편_자막 (ITZY 그라데이션)
// 8. 강남필라테스_fix_0322.mp4 (강남필라테스)
// 9. 제주도_맨즈_안다르 (제주도 맨즈 안다르)
// 10. TRIVAGO_30s_ORIGINAL (트리바고 30초)
// ============================================

export default allVideos;
