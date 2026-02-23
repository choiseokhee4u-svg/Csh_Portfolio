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
    },

    // === VFX & Technical Art (ArtStation) ===
    {
        id: '43',
        title: 'Unreal engine5 Aura Effect',
        url: 'https://www.artstation.com/api/v2/animation/video_clips/76f0e389-ee1e-455f-bc91-cf63cb8afc3e/embed.html?s=802f21d5c89c2bd398e019f2b7262abdf13f9005584772fba8104089d5e923ba',
        category: 'VFX / Technical Art'
    },
    {
        id: '44',
        title: 'Unreal Engine5 -Niagara Horse Summon _Study',
        url: 'https://www.artstation.com/api/v2/animation/video_clips/3535395c-1559-46f8-a75f-7b668448be05/embed.html?s=3647a6360e7abc400f9e06a91cb320bc5a45f92d2b6a08fd35401a2d146c4e96',
        category: 'VFX / Technical Art'
    },
    {
        id: '45',
        title: 'Unreal engine 5 Niagara Drone Missile Explosion',
        url: 'https://www.artstation.com/api/v2/animation/video_clips/3556f56a-83db-4135-965b-0e7df2d0d76c/embed.html?s=fc65c169ea4f423ef2d3c1b17b5dc4c459f5bf278832130fc047456fefb61cdd',
        category: 'VFX / Technical Art'
    },
    {
        id: '46',
        title: 'Unreal engine 5 VFX Study Stencil Buffer&Exp',
        url: 'https://www.artstation.com/api/v2/animation/video_clips/efff0556-6917-4f12-8b0e-f6062b0a0d72/embed.html?s=c07173bccf414ee6b4c2c36e7272e4b5fb46b35ada42c66d629c70378035a192',
        category: 'VFX / Technical Art'
    },
    {
        id: '47',
        title: 'Unreal engine 5 niagara SkelMorph_exp Study',
        url: 'https://www.artstation.com/api/v2/animation/video_clips/58f714eb-c3e8-44aa-a81d-c37c5e09d0dd/embed.html?s=8d7c0ae24cdac8d9496f676bd650fc2cbdbe8d96e0d35198ea0d3266cb68230d',
        category: 'VFX / Technical Art'
    },
    {
        id: '48',
        title: 'Unreal engine 5 Water Exp Niagara',
        url: 'https://www.artstation.com/api/v2/animation/video_clips/e1d6681a-cf84-431c-a2b4-5a6b089100bd/embed.html?s=862af8bcdd68dec6cac94fc607a811f1affd7335a9c85f07adbcd7ea8e745215',
        category: 'VFX / Technical Art'
    },
    {
        id: '49',
        title: 'Unreal engine 5 niagara Death Vfx',
        url: 'https://www.artstation.com/api/v2/animation/video_clips/e841b36b-7569-4ebc-a834-50fb43d351fa/embed.html?s=fe761ff5b46ed0026b6e7c759b23cccd5955ca063729bc7c4146c08e3e42dcdf',
        category: 'VFX / Technical Art'
    },
    {
        id: '50',
        title: 'Unreal engine 5 niagara Thunder Fx study',
        url: 'https://www.artstation.com/api/v2/animation/video_clips/70296187-111d-4ae0-9805-d42a3817695a/embed.html?s=cb9568fb34cfae2de74c377a40bf633ddbf1042e8cec4685fb257e3368760781',
        category: 'VFX / Technical Art'
    },
    {
        id: '51',
        title: 'Ice Exp Fx Study',
        url: 'https://www.artstation.com/api/v2/animation/video_clips/437d291b-cca0-47a6-98ff-135cddc74d3c/embed.html?s=00dfd4c72a355a8329e79eaf458579c56316613767f13ad79e168cd4b26d053c',
        category: 'VFX / Technical Art'
    },
    {
        id: '52',
        title: 'VFX_Study Ground_Exp',
        url: 'https://www.artstation.com/api/v2/animation/video_clips/90cfb1de-17ca-4ae2-a67d-9e76cd25d6b8/embed.html?s=ae69c289ea30882a4bc51957e2c11129a8f1aabb748891c17320a2191a98b168',
        category: 'VFX / Technical Art'
    },
    {
        id: '53',
        title: 'Unreal engine 5 Niagara Swing Trail Study',
        url: 'https://www.artstation.com/api/v2/animation/video_clips/f4331275-c5ac-45a8-bda4-5486ab695b63/embed.html?s=5892743021e52c022fd9726ceadd7af394d7f2797219c338da75d807755d1467',
        category: 'VFX / Technical Art'
    },
    {
        id: '54',
        title: 'Vfx_Study UE5 Niagara Sword Trail',
        url: 'https://www.artstation.com/api/v2/animation/video_clips/873a6bd6-cf39-457d-8960-168ab8fa11e6/embed.html?s=562a1ec1bf231d98e5dd159aac7cda7977bed9f38d5b4d504263512455afdd4c',
        category: 'VFX / Technical Art'
    },
    {
        id: '55',
        title: 'Vfx_Study UE5 Niagara Shiled',
        url: 'https://www.artstation.com/api/v2/animation/video_clips/946bb4a0-1b49-4ddf-8ff0-1e90b9434757/embed.html?s=1e0d1c6e7a3438b3f688cb1e414e8d4534d64527ab333113f3ee0931ef31113d',
        category: 'VFX / Technical Art'
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
