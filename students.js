const students = [
    {
        "id": "hoshino",
        "name": "호시노",
        "fullName": "타카나시 호시노",
        "school": "아비도스",
        "club": "대책위원회",
        "aliases": [
            "호시노"
        ],
        "voice": "조경이",
        "image": "assets/images/hoshino.webp"
    },
    {
        "id": "shiroko",
        "name": "시로코",
        "fullName": "스나오오카미 시로코",
        "school": "아비도스",
        "club": "대책위원회",
        "aliases": [
            "시로코"
        ],
        "voice": "이다은",
        "image": "assets/images/shiroko.webp"
    },
    {
        "id": "nonomi",
        "name": "노노미",
        "fullName": "이자요이 노노미",
        "school": "아비도스",
        "club": "대책위원회",
        "aliases": [
            "노노미"
        ],
        "voice": "이보희",
        "image": "assets/images/nonomi.webp"
    },
    {
        "id": "serika",
        "name": "세리카",
        "fullName": "쿠로미 세리카",
        "school": "아비도스",
        "club": "대책위원회",
        "aliases": [
            "세리카"
        ],
        "voice": "김보나",
        "image": "assets/images/serika.webp"
    },
    {
        "id": "ayane",
        "name": "아야네",
        "fullName": "오쿠소라 아야네",
        "school": "아비도스",
        "club": "대책위원회",
        "aliases": [
            "아야네"
        ],
        "voice": "방시우",
        "image": "assets/images/ayane.webp"
    },
    {
        "id": "yume",
        "name": "유메",
        "fullName": "쿠치나시 유메",
        "school": "아비도스",
        "club": "아비도스 학생회",
        "aliases": [
            "유메"
        ],
        "voice": "김도희",
        "image": "assets/images/yume.webp"
    },
    {
        "id": "aru",
        "name": "아루",
        "fullName": "리쿠하치마 아루",
        "school": "게헨나",
        "club": "흥신소86",
        "aliases": [
            "아루"
        ],
        "voice": "권지애",
        "image": "assets/images/aru.webp"
    },
    {
        "id": "mutsuki",
        "name": "무츠키",
        "fullName": "아사기 무츠키",
        "school": "게헨나",
        "club": "흥신소86",
        "aliases": [
            "무츠키"
        ],
        "voice": "장미",
        "image": "assets/images/mutsuki.webp"
    },
    {
        "id": "kayoko",
        "name": "카요코",
        "fullName": "오니카타 카요코",
        "school": "게헨나",
        "club": "흥신소86",
        "aliases": [
            "카요코"
        ],
        "voice": "김이안",
        "image": "assets/images/kayoko.webp"
    },
    {
        "id": "haruka",
        "name": "하루카",
        "fullName": "이구사 하루카",
        "school": "게헨나",
        "club": "흥신소86",
        "aliases": [
            "하루카"
        ],
        "voice": "정혜원",
        "image": "assets/images/haruka.webp"
    },
    {
        "id": "akari",
        "name": "아카리",
        "fullName": "와니부치 아카리",
        "school": "게헨나",
        "club": "미식연구회",
        "aliases": [
            "아카리"
        ],
        "voice": "박이서",
        "image": "assets/images/akari.webp"
    },
    {
        "id": "izumi",
        "name": "이즈미",
        "fullName": "시시도우 이즈미",
        "school": "게헨나",
        "club": "미식연구회",
        "aliases": [
            "이즈미"
        ],
        "voice": "박하진",
        "image": "assets/images/izumi.webp"
    },
    {
        "id": "junko",
        "name": "준코",
        "fullName": "아카시 준코",
        "school": "게헨나",
        "club": "미식연구회",
        "aliases": [
            "준코"
        ],
        "voice": "신온유",
        "image": "assets/images/junko.webp"
    },
    {
        "id": "haruna",
        "name": "하루나",
        "fullName": "쿠로다테 하루나",
        "school": "게헨나",
        "club": "미식연구회",
        "aliases": [
            "하루나"
        ],
        "voice": "이보희",
        "image": "assets/images/haruna.webp"
    },
    {
        "id": "hina",
        "name": "히나",
        "fullName": "소라사키 히나",
        "school": "게헨나",
        "club": "선도부",
        "aliases": [
            "히나"
        ],
        "voice": "박신희",
        "image": "assets/images/hina.webp"
    },
    {
        "id": "ako",
        "name": "아코",
        "fullName": "아마우 아코",
        "school": "게헨나",
        "club": "선도부",
        "aliases": [
            "아코"
        ],
        "voice": "김예림",
        "image": "assets/images/ako.webp"
    },
    {
        "id": "chinatsu",
        "name": "치나츠",
        "fullName": "히노미야 치나츠",
        "school": "게헨나",
        "club": "선도부",
        "aliases": [
            "치나츠"
        ],
        "voice": "김현지",
        "image": "assets/images/chinatsu.webp"
    },
    {
        "id": "iori",
        "name": "이오리",
        "fullName": "시로미 이오리",
        "school": "게헨나",
        "club": "선도부",
        "aliases": [
            "이오리"
        ],
        "voice": "강규리",
        "image": "assets/images/iori.webp"
    },
    {
        "id": "juri",
        "name": "주리",
        "fullName": "우시마키 주리",
        "school": "게헨나",
        "club": "급양부",
        "aliases": [
            "주리"
        ],
        "voice": "신온유",
        "image": "assets/images/juri.webp"
    },
    {
        "id": "fuuka",
        "name": "후우카",
        "fullName": "아이키요 후우카",
        "school": "게헨나",
        "club": "급양부",
        "aliases": [
            "후우카"
        ],
        "voice": "이주은",
        "image": "assets/images/fuuka.webp"
    },
    {
        "id": "makoto",
        "name": "마코토",
        "fullName": "하누마 마코토",
        "school": "게헨나",
        "club": "만마전",
        "aliases": [
            "마코토"
        ],
        "voice": "최현지",
        "image": "assets/images/makoto.webp"
    },
    {
        "id": "iroha",
        "name": "이로하",
        "fullName": "나츠메 이로하",
        "school": "게헨나",
        "club": "만마전",
        "aliases": [
            "이로하"
        ],
        "voice": "유혜지",
        "image": "assets/images/iroha.webp"
    },
    {
        "id": "satsuki",
        "name": "사츠키",
        "fullName": "쿄고쿠 사츠키",
        "school": "게헨나",
        "club": "만마전",
        "aliases": [
            "사츠키"
        ],
        "voice": "장채연",
        "image": "assets/images/satsuki.webp"
    },
    {
        "id": "chiaki",
        "name": "치아키",
        "fullName": "모토미야 치아키",
        "school": "게헨나",
        "club": "만마전",
        "aliases": [
            "치아키"
        ],
        "voice": "김예령",
        "image": "assets/images/chiaki.webp"
    },
    {
        "id": "ibuki",
        "name": "이부키",
        "fullName": "탄가 이부키",
        "school": "게헨나",
        "club": "만마전",
        "aliases": [
            "이부키"
        ],
        "voice": "권선영",
        "image": "assets/images/ibuki.webp"
    },
    {
        "id": "sena",
        "name": "세나",
        "fullName": "히무로 세나",
        "school": "게헨나",
        "club": "응급의학부",
        "aliases": [
            "세나"
        ],
        "voice": "강은애",
        "image": "assets/images/sena.webp"
    },
    {
        "id": "kasumi",
        "name": "카스미",
        "fullName": "키누가와 카스미",
        "school": "게헨나",
        "club": "온천개발부",
        "aliases": [
            "카스미"
        ],
        "voice": "정유정",
        "image": "assets/images/kasumi.webp"
    },
    {
        "id": "megu",
        "name": "메구",
        "fullName": "시모쿠라 메구",
        "school": "게헨나",
        "club": "온천개발부",
        "aliases": [
            "메구"
        ],
        "voice": "이세레나",
        "image": "assets/images/megu.webp"
    },
    {
        "id": "kirara",
        "name": "키라라",
        "fullName": "요자쿠라 키라라",
        "school": "게헨나",
        "club": "반짝반짝부",
        "aliases": [
            "키라라"
        ],
        "voice": "오은수",
        "image": "assets/images/kirara.webp"
    },
    {
        "id": "erika",
        "name": "에리카",
        "fullName": "하타미 에리카",
        "school": "게헨나",
        "club": "반짝반짝부",
        "aliases": [
            "에리카"
        ],
        "voice": "배서우",
        "image": "assets/images/erika.webp"
    },
    {
        "id": "rio",
        "name": "리오",
        "fullName": "츠카츠키 리오",
        "school": "밀레니엄",
        "club": "세미나",
        "aliases": [
            "리오"
        ],
        "voice": "김푸름",
        "image": "assets/images/rio.webp"
    },
    {
        "id": "yuuka",
        "name": "유우카",
        "fullName": "하야세 유우카",
        "school": "밀레니엄",
        "club": "세미나",
        "aliases": [
            "유우카"
        ],
        "voice": "신나리",
        "image": "assets/images/yuuka.webp"
    },
    {
        "id": "noa",
        "name": "노아",
        "fullName": "우시오 노아",
        "school": "밀레니엄",
        "club": "세미나",
        "aliases": [
            "노아"
        ],
        "voice": "채림",
        "image": "assets/images/noa.webp"
    },
    {
        "id": "koyuki",
        "name": "코유키",
        "fullName": "쿠로사키 코유키",
        "school": "밀레니엄",
        "club": "세미나",
        "aliases": [
            "코유키"
        ],
        "voice": "김보나",
        "image": "assets/images/koyuki.webp"
    },
    {
        "id": "yuzu",
        "name": "유즈",
        "fullName": "하나오카 유즈",
        "school": "밀레니엄",
        "club": "게임개발부",
        "aliases": [
            "유즈"
        ],
        "voice": "장미",
        "image": "assets/images/yuzu.webp"
    },
    {
        "id": "momoi",
        "name": "모모이",
        "fullName": "사이바 모모이",
        "school": "밀레니엄",
        "club": "게임개발부",
        "aliases": [
            "모모이"
        ],
        "voice": "정해은",
        "image": "assets/images/momoi.webp"
    },
    {
        "id": "midori",
        "name": "미도리",
        "fullName": "사이바 미도리",
        "school": "밀레니엄",
        "club": "게임개발부",
        "aliases": [
            "미도리"
        ],
        "voice": "천송이",
        "image": "assets/images/midori.webp"
    },
    {
        "id": "aris",
        "name": "아리스",
        "fullName": "텐도 아리스",
        "school": "밀레니엄",
        "club": "게임개발부",
        "aliases": [
            "아리스"
        ],
        "voice": "김가령",
        "image": "assets/images/aris.webp"
    },
    {
        "id": "kei",
        "name": "케이",
        "fullName": "텐도 케이",
        "school": "밀레니엄",
        "club": "게임개발부",
        "aliases": [
            "케이"
        ],
        "voice": "김가령",
        "image": "assets/images/kei.webp"
    },
    {
        "id": "neru",
        "name": "네루",
        "fullName": "미카모 네루",
        "school": "밀레니엄",
        "club": "C&C",
        "aliases": [
            "네루"
        ],
        "voice": "김보민",
        "image": "assets/images/neru.webp"
    },
    {
        "id": "asuna",
        "name": "아스나",
        "fullName": "이치노세 아스나",
        "school": "밀레니엄",
        "club": "C&C",
        "aliases": [
            "아스나"
        ],
        "voice": "김한나",
        "image": "assets/images/asuna.webp"
    },
    {
        "id": "akane",
        "name": "아카네",
        "fullName": "무로카사 아카네",
        "school": "밀레니엄",
        "club": "C&C",
        "aliases": [
            "아카네"
        ],
        "voice": "김이안",
        "image": "assets/images/akane.webp"
    },
    {
        "id": "karin",
        "name": "카린",
        "fullName": "카쿠다테 카린",
        "school": "밀레니엄",
        "club": "C&C",
        "aliases": [
            "카린"
        ],
        "voice": "박하진",
        "image": "assets/images/karin.webp"
    },
    {
        "id": "toki",
        "name": "토키",
        "fullName": "아스마 토키",
        "school": "밀레니엄",
        "club": "C&C",
        "aliases": [
            "토키"
        ],
        "voice": "김연우",
        "image": "assets/images/toki.webp"
    },
    {
        "id": "chihiro",
        "name": "치히로",
        "fullName": "카가미 치히로",
        "school": "밀레니엄",
        "club": "베리타스",
        "aliases": [
            "치히로"
        ],
        "voice": "김현지",
        "image": "assets/images/chihiro.webp"
    },
    {
        "id": "kotama",
        "name": "코타마",
        "fullName": "오토세 코타마",
        "school": "밀레니엄",
        "club": "베리타스",
        "aliases": [
            "코타마"
        ],
        "voice": "이은조",
        "image": "assets/images/kotama.webp"
    },
    {
        "id": "maki",
        "name": "마키",
        "fullName": "코누리 마키",
        "school": "밀레니엄",
        "club": "베리타스",
        "aliases": [
            "마키"
        ],
        "voice": "변혜숙",
        "image": "assets/images/maki.webp"
    },
    {
        "id": "hare",
        "name": "하레",
        "fullName": "오마가리 하레",
        "school": "밀레니엄",
        "club": "베리타스",
        "aliases": [
            "하레"
        ],
        "voice": "이달래",
        "image": "assets/images/hare.webp"
    },
    {
        "id": "hibiki",
        "name": "히비키",
        "fullName": "네코즈카 히비키",
        "school": "밀레니엄",
        "club": "엔지니어부",
        "aliases": [
            "히비키"
        ],
        "voice": "박시윤",
        "image": "assets/images/hibiki.webp"
    },
    {
        "id": "utaha",
        "name": "우타하",
        "fullName": "시라이시 우타하",
        "school": "밀레니엄",
        "club": "엔지니어부",
        "aliases": [
            "우타하"
        ],
        "voice": "손선영",
        "image": "assets/images/utaha.webp"
    },
    {
        "id": "kotori",
        "name": "코토리",
        "fullName": "토요미 코토리",
        "school": "밀레니엄",
        "club": "엔지니어부",
        "aliases": [
            "코토리"
        ],
        "voice": "비주언",
        "image": "assets/images/kotori.webp"
    },
    {
        "id": "eimi",
        "name": "에이미",
        "fullName": "이즈미모토 에이미",
        "school": "밀레니엄",
        "club": "초현상특무부",
        "aliases": [
            "에이미"
        ],
        "voice": "문지영",
        "image": "assets/images/eimi.webp"
    },
    {
        "id": "himari",
        "name": "히마리",
        "fullName": "아케보시 히마리",
        "school": "밀레니엄",
        "club": "초현상특무부",
        "aliases": [
            "히마리"
        ],
        "voice": "김채린",
        "image": "assets/images/himari.webp"
    },
    {
        "id": "sumire",
        "name": "스미레",
        "fullName": "오토하나 스미레",
        "school": "밀레니엄",
        "club": "트레이닝부",
        "aliases": [
            "스미레"
        ],
        "voice": "김채하",
        "image": "assets/images/sumire.webp"
    },
    {
        "id": "rei",
        "name": "레이",
        "fullName": "노마사 레이",
        "school": "밀레니엄",
        "club": "트레이닝부",
        "aliases": [
            "레이"
        ],
        "voice": "김서현",
        "image": "assets/images/rei.webp"
    },
    {
        "id": "mika",
        "name": "미카",
        "fullName": "미소노 미카",
        "school": "트리니티",
        "club": "티파티",
        "aliases": [
            "미카"
        ],
        "voice": "강은애",
        "image": "assets/images/mika.webp"
    },
    {
        "id": "nagisa",
        "name": "나기사",
        "fullName": "키리후지 나기사",
        "school": "트리니티",
        "club": "티파티",
        "aliases": [
            "나기사"
        ],
        "voice": "김순미",
        "image": "assets/images/nagisa.webp"
    },
    {
        "id": "seia",
        "name": "세이아",
        "fullName": "유리조노 세이아",
        "school": "트리니티",
        "club": "티파티",
        "aliases": [
            "세이야"
        ],
        "voice": "이이로",
        "image": "assets/images/seia.webp"
    },
    {
        "id": "hanako",
        "name": "하나코",
        "fullName": "우라와 하나코",
        "school": "트리니티",
        "club": "보충수업부",
        "aliases": [
            "하나코"
        ],
        "voice": "이새아",
        "image": "assets/images/hanako.webp"
    },
    {
        "id": "hifumi",
        "name": "히후미",
        "fullName": "아지타니 히후미",
        "school": "트리니티",
        "club": "보충수업부",
        "aliases": [
            "히후미"
        ],
        "voice": "박신희",
        "image": "assets/images/hifumi.webp"
    },
    {
        "id": "azusa",
        "name": "아즈사",
        "fullName": "시라스 아즈사",
        "school": "트리니티",
        "club": "보충수업부",
        "aliases": [
            "아즈사"
        ],
        "voice": "김예림",
        "image": "assets/images/azusa.webp"
    },
    {
        "id": "koharu",
        "name": "코하루",
        "fullName": "시모에 코하루",
        "school": "트리니티",
        "club": "보충수업부",
        "aliases": [
            "코하루"
        ],
        "voice": "김성화",
        "image": "assets/images/koharu.webp"
    },
    {
        "id": "tsurugi",
        "name": "츠루기",
        "fullName": "켄자키 츠루기",
        "school": "트리니티",
        "club": "정의실현부",
        "aliases": [
            "츠루기"
        ],
        "voice": "천지선",
        "image": "assets/images/tsurugi.webp"
    },
    {
        "id": "hasumi",
        "name": "하스미",
        "fullName": "하네카와 하스미",
        "school": "트리니티",
        "club": "정의실현부",
        "aliases": [
            "하스미"
        ],
        "voice": "박리나",
        "image": "assets/images/hasumi.webp"
    },
    {
        "id": "ichika",
        "name": "이치카",
        "fullName": "나카마사 이치카",
        "school": "트리니티",
        "club": "정의실현부",
        "aliases": [
            "이치카"
        ],
        "voice": "방시우",
        "image": "assets/images/ichika.webp"
    },
    {
        "id": "mashiro",
        "name": "마시로",
        "fullName": "시즈야마 마시로",
        "school": "트리니티",
        "club": "정의실현부",
        "aliases": [
            "마시로"
        ],
        "voice": "비주언",
        "image": "assets/images/mashiro.webp"
    },
    {
        "id": "sakurako",
        "name": "사쿠라코",
        "fullName": "우타즈미 사쿠라코",
        "school": "트리니티",
        "club": "시스터후드",
        "aliases": [
            "사쿠라코"
        ],
        "voice": "이다은",
        "image": "assets/images/sakurako.webp"
    },
    {
        "id": "hinata",
        "name": "히나타",
        "fullName": "와카바 히나타",
        "school": "트리니티",
        "club": "시스터후드",
        "aliases": [
            "히나타"
        ],
        "voice": "송하림",
        "image": "assets/images/hinata.webp"
    },
    {
        "id": "mari",
        "name": "마리",
        "fullName": "이오치 마리",
        "school": "트리니티",
        "club": "시스터후드",
        "aliases": [
            "마리"
        ],
        "voice": "신나리",
        "image": "assets/images/mari.webp"
    },
    {
        "id": "mine",
        "name": "미네",
        "fullName": "아오모리 미네",
        "school": "트리니티",
        "club": "구호기사단",
        "aliases": [
            "미네"
        ],
        "voice": "안영미",
        "image": "assets/images/mine.webp"
    },
    {
        "id": "serina",
        "name": "세리나",
        "fullName": "스미 세리나",
        "school": "트리니티",
        "club": "구호기사단",
        "aliases": [
            "세리나"
        ],
        "voice": "이달래",
        "image": "assets/images/serina.webp"
    },
    {
        "id": "hanae",
        "name": "하나에",
        "fullName": "아사가오 하나에",
        "school": "트리니티",
        "club": "구호기사단",
        "aliases": [
            "하나에"
        ],
        "voice": "민아",
        "image": "assets/images/hanae.webp"
    },
    {
        "id": "ui",
        "name": "우이",
        "fullName": "코제키 우이",
        "school": "트리니티",
        "club": "도서부",
        "aliases": [
            "우이"
        ],
        "voice": "이새아",
        "image": "assets/images/ui.webp"
    },
    {
        "id": "shimiko",
        "name": "시미코",
        "fullName": "엔도우 시미코",
        "school": "트리니티",
        "club": "도서부",
        "aliases": [
            "시미코"
        ],
        "voice": "김나혜",
        "image": "assets/images/shimiko.webp"
    },
    {
        "id": "airi",
        "name": "아이리",
        "fullName": "쿠리무라 아이리",
        "school": "트리니티",
        "club": "디저트부",
        "aliases": [
            "아이리"
        ],
        "voice": "오로아",
        "image": "assets/images/airi.webp"
    },
    {
        "id": "kazusa",
        "name": "카즈사",
        "fullName": "쿄야마 카즈사",
        "school": "트리니티",
        "club": "디저트부",
        "aliases": [
            "카즈사"
        ],
        "voice": "박시윤",
        "image": "assets/images/kazusa.webp"
    },
    {
        "id": "yoshimi",
        "name": "요시미",
        "fullName": "이바라기 요시미",
        "school": "트리니티",
        "club": "디저트부",
        "aliases": [
            "요시미"
        ],
        "voice": "김순미",
        "image": "assets/images/yoshimi.webp"
    },
    {
        "id": "natsu",
        "name": "나츠",
        "fullName": "유토리 나츠",
        "school": "트리니티",
        "club": "디저트부",
        "aliases": [
            "나츠"
        ],
        "voice": "강새봄",
        "image": "assets/images/natsu.webp"
    },
    {
        "id": "suzumi",
        "name": "스즈미",
        "fullName": "모리즈키 스즈미",
        "school": "트리니티",
        "club": "자경단",
        "aliases": [
            "스즈미"
        ],
        "voice": "김윤채",
        "image": "assets/images/suzumi.webp"
    },
    {
        "id": "reisa",
        "name": "레이사",
        "fullName": "우자와 레이사",
        "school": "트리니티",
        "club": "자경단",
        "aliases": [
            "레이사"
        ],
        "voice": "채림",
        "image": "assets/images/reisa.webp"
    },
    {
        "id": "rabu",
        "name": "라브",
        "fullName": "코마카제 라브",
        "school": "트리니티",
        "club": "무소속",
        "aliases": [
            "라브"
        ],
        "voice": "김설아",
        "image": "assets/images/rabu.webp"
    },
    {
        "id": "niya",
        "name": "니야",
        "fullName": "아마치 니야",
        "school": "백귀야행",
        "club": "음양부",
        "aliases": [
            "니야"
        ],
        "voice": "성예원",
        "image": "assets/images/niya.webp"
    },
    {
        "id": "kaho",
        "name": "카호",
        "fullName": "쿠와카미 카호",
        "school": "백귀야행",
        "club": "음양부",
        "aliases": [
            "카호"
        ],
        "voice": "안영미",
        "image": "assets/images/kaho.webp"
    },
    {
        "id": "chise",
        "name": "치세",
        "fullName": "와라쿠 치세",
        "school": "백귀야행",
        "club": "음양부",
        "aliases": [
            "치세"
        ],
        "voice": "김한나",
        "image": "assets/images/chise.webp"
    },
    {
        "id": "nagusa",
        "name": "나구사",
        "fullName": "고료 나구사",
        "school": "백귀야행",
        "club": "백화요란",
        "aliases": [
            "나구사"
        ],
        "voice": "박송",
        "image": "assets/images/nagusa.webp"
    },
    {
        "id": "kikyou",
        "name": "키쿄",
        "fullName": "키류 키쿄",
        "school": "백귀야행",
        "club": "백화요란",
        "aliases": [
            "키쿄"
        ],
        "voice": "유영",
        "image": "assets/images/kikyou.webp"
    },
    {
        "id": "renge",
        "name": "렌게",
        "fullName": "후와 렌게",
        "school": "백귀야행",
        "club": "백화요란",
        "aliases": [
            "렌게"
        ],
        "voice": "송하림",
        "image": "assets/images/renge.webp"
    },
    {
        "id": "yukari",
        "name": "유카리",
        "fullName": "카데노코지 유카리",
        "school": "백귀야행",
        "club": "백화요란",
        "aliases": [
            "유카리"
        ],
        "voice": "이세레나",
        "image": "assets/images/yukari.webp"
    },
    {
        "id": "kuzunoha",
        "name": "쿠즈노하",
        "fullName": "쿠즈노하",
        "school": "백귀야행",
        "club": "백화요란",
        "aliases": [
            "쿠즈노하"
        ],
        "voice": null,
        "image": "assets/images/kuzunoha.webp"
    },
    {
        "id": "ayame",
        "name": "아야메",
        "fullName": "나나카도 아야메",
        "school": "백귀야행",
        "club": "백화요란",
        "aliases": [
            "아야메"
        ],
        "voice": null,
        "image": "assets/images/ayame.webp"
    },
    {
        "id": "tsubaki",
        "name": "츠바키",
        "fullName": "카스가 츠바키",
        "school": "백귀야행",
        "club": "수행부",
        "aliases": [
            "츠바키"
        ],
        "voice": "손정민",
        "image": "assets/images/tsubaki.webp"
    },
    {
        "id": "mimori",
        "name": "미모리",
        "fullName": "미즈하 미모리",
        "school": "백귀야행",
        "club": "수행부",
        "aliases": [
            "미모리"
        ],
        "voice": "류지아",
        "image": "assets/images/mimori.webp"
    },
    {
        "id": "kaede",
        "name": "카에데",
        "fullName": "이사미 카에데",
        "school": "백귀야행",
        "club": "수행부",
        "aliases": [
            "카에데"
        ],
        "voice": "강규리",
        "image": "assets/images/kaede.webp"
    },
    {
        "id": "izuna",
        "name": "이즈나",
        "fullName": "쿠다 이즈나",
        "school": "백귀야행",
        "club": "인법연구부",
        "aliases": [
            "이즈나"
        ],
        "voice": "김예림",
        "image": "assets/images/izuna.webp"
    },
    {
        "id": "michiru",
        "name": "미치루",
        "fullName": "치도리 미치루",
        "school": "백귀야행",
        "club": "인법연구부",
        "aliases": [
            "미치루"
        ],
        "voice": "손선영",
        "image": "assets/images/michiru.webp"
    },
    {
        "id": "tsukuyo",
        "name": "츠쿠요",
        "fullName": "오노 츠쿠요",
        "school": "백귀야행",
        "club": "인법연구부",
        "aliases": [
            "츠쿠요"
        ],
        "voice": "원에스더",
        "image": "assets/images/tsukuyo.webp"
    },
    {
        "id": "shizuko",
        "name": "시즈코",
        "fullName": "카와와 시즈코",
        "school": "백귀야행",
        "club": "마츠리부",
        "aliases": [
            "시즈코"
        ],
        "voice": "김가령",
        "image": "assets/images/shizuko.webp"
    },
    {
        "id": "pina",
        "name": "피나",
        "fullName": "아사히나 피나",
        "school": "백귀야행",
        "club": "마츠리부",
        "aliases": [
            "피나"
        ],
        "voice": "박이서",
        "image": "assets/images/pina.webp"
    },
    {
        "id": "umika",
        "name": "우미카",
        "fullName": "사토하마 우미카",
        "school": "백귀야행",
        "club": "마츠리부",
        "aliases": [
            "우미카"
        ],
        "voice": "강한별",
        "image": "assets/images/umika.webp"
    },
    {
        "id": "wakamo",
        "name": "와카모",
        "fullName": "코사카 와카모",
        "school": "백귀야행",
        "club": "무소속",
        "aliases": [
            "와카모"
        ],
        "voice": "김연우",
        "image": "assets/images/wakamo.webp"
    },
    {
        "id": "arata",
        "name": "아라타",
        "fullName": "아라타",
        "school": "백귀야행",
        "club": "길거리 망량즈",
        "aliases": [
            "아라타"
        ],
        "voice": null,
        "image": "assets/images/arata.webp"
    },
    {
        "id": "natsuki",
        "name": "나츠키",
        "fullName": "아사쿠사 나츠키",
        "school": "백귀야행",
        "club": "인력거부",
        "aliases": [
            "나츠키"
        ],
        "voice": null,
        "image": "assets/images/natsuki.webp"
    },
    {
        "id": "kisaki",
        "name": "키사키",
        "fullName": "류우게 키사키",
        "school": "산해경",
        "club": "현룡문",
        "aliases": [
            "키사키"
        ],
        "voice": "강시현",
        "image": "assets/images/kisaki.webp"
    },
    {
        "id": "mina",
        "name": "미나",
        "fullName": "코노에 미나",
        "school": "산해경",
        "club": "현룡문",
        "aliases": [
            "미나"
        ],
        "voice": "문지영",
        "image": "assets/images/mina.webp"
    },
    {
        "id": "shun",
        "name": "슌",
        "fullName": "스노하라 슌",
        "school": "산해경",
        "club": "매화원",
        "aliases": [
            "슌"
        ],
        "voice": "문유정",
        "image": "assets/images/shun.webp"
    },
    {
        "id": "kokona",
        "name": "코코나",
        "fullName": "스노하라 코코나",
        "school": "산해경",
        "club": "매화원",
        "aliases": [
            "코코나"
        ],
        "voice": "조경이",
        "image": "assets/images/kokona.webp"
    },
    {
        "id": "rumi",
        "name": "루미",
        "fullName": "아케시로 루미",
        "school": "산해경",
        "club": "현무상회",
        "aliases": [
            "루미"
        ],
        "voice": "정유정",
        "image": "assets/images/rumi.webp"
    },
    {
        "id": "reijo",
        "name": "레이죠",
        "fullName": "카야마 레이죠",
        "school": "산해경",
        "club": "현무상회",
        "aliases": [
            "레이죠"
        ],
        "voice": "이다슬",
        "image": "assets/images/reijo.webp"
    },
    {
        "id": "saya",
        "name": "사야",
        "fullName": "야쿠시 사야",
        "school": "산해경",
        "club": "연단방",
        "aliases": [
            "사야"
        ],
        "voice": "정해은",
        "image": "assets/images/saya.webp"
    },
    {
        "id": "kai",
        "name": "카이",
        "fullName": "신타니 카이",
        "school": "산해경",
        "club": "연단방",
        "aliases": [
            "카이"
        ],
        "voice": null,
        "image": "assets/images/kai.webp"
    },
    {
        "id": "kanae",
        "name": "카나에",
        "fullName": "미야우치 카나에",
        "school": "산해경",
        "club": "현룡문",
        "aliases": [
            "카나에"
        ],
        "voice": null,
        "image": "assets/images/kanae.webp"
    },
    {
        "id": "cherino",
        "name": "체리노",
        "fullName": "렌카와 체리노",
        "school": "붉은겨울",
        "club": "사무국",
        "aliases": [
            "체리노"
        ],
        "voice": "장미",
        "image": "assets/images/cherino.webp"
    },
    {
        "id": "tomoe",
        "name": "토모에",
        "fullName": "사시로 토모에",
        "school": "붉은겨울",
        "club": "사무국",
        "aliases": [
            "토모에"
        ],
        "voice": "신송이",
        "image": "assets/images/tomoe.webp"
    },
    {
        "id": "marina",
        "name": "마리나",
        "fullName": "이케쿠라 마리나",
        "school": "붉은겨울",
        "club": "사무국",
        "aliases": [
            "마리나"
        ],
        "voice": "오로아",
        "image": "assets/images/marina.webp"
    },
    {
        "id": "nodoka",
        "name": "노도카",
        "fullName": "아마미 노도카",
        "school": "붉은겨울",
        "club": "227호 특별반",
        "aliases": [
            "노도카"
        ],
        "voice": "손선영",
        "image": "assets/images/nodoka.webp"
    },
    {
        "id": "shigure",
        "name": "시구레",
        "fullName": "마요이 시구레",
        "school": "붉은겨울",
        "club": "227호 특별반",
        "aliases": [
            "시구레"
        ],
        "voice": "원에스더",
        "image": "assets/images/shigure.webp"
    },
    {
        "id": "momizi",
        "name": "모미지",
        "fullName": "아키이즈미 모미지",
        "school": "붉은겨울",
        "club": "지식해방전선",
        "aliases": [
            "모미지"
        ],
        "voice": "유영",
        "image": "assets/images/momizi.webp"
    },
    {
        "id": "meru",
        "name": "메루",
        "fullName": "히메키 메루",
        "school": "붉은겨울",
        "club": "지식해방전선",
        "aliases": [
            "메루"
        ],
        "voice": "김나혜",
        "image": "assets/images/meru.webp"
    },
    {
        "id": "takane",
        "name": "타카네",
        "fullName": "미요시 타카네",
        "school": "붉은겨울",
        "club": "출판부",
        "aliases": [
            "타카네"
        ],
        "voice": "윤은서",
        "image": "assets/images/takane.webp"
    },
    {
        "id": "yakumo",
        "name": "야쿠모",
        "fullName": "아라마키 야쿠모",
        "school": "붉은겨울",
        "club": "출판부",
        "aliases": [
            "야쿠모"
        ],
        "voice": "서다혜",
        "image": "assets/images/yakumo.webp"
    },
    {
        "id": "minori",
        "name": "미노리",
        "fullName": "야스모리 미노리",
        "school": "붉은겨울",
        "club": "용역부",
        "aliases": [
            "미노리"
        ],
        "voice": "박리나",
        "image": "assets/images/minori.webp"
    },
    {
        "id": "kanna",
        "name": "칸나",
        "fullName": "오가타 칸나",
        "school": "발키리",
        "club": "공안국",
        "aliases": [
            "칸나"
        ],
        "voice": "김현심",
        "image": "assets/images/kanna.webp"
    },
    {
        "id": "konoka",
        "name": "코노카",
        "fullName": "시마 코노카",
        "school": "발키리",
        "club": "공안국",
        "aliases": [
            "코노카"
        ],
        "voice": "윤승희",
        "image": "assets/images/konoka.webp"
    },
    {
        "id": "kirino",
        "name": "키리노",
        "fullName": "나가츠카사 키리노",
        "school": "발키리",
        "club": "생활안전국",
        "aliases": [
            "키리노"
        ],
        "voice": "민아",
        "image": "assets/images/kirino.webp"
    },
    {
        "id": "fubuki",
        "name": "후부키",
        "fullName": "네무가키 후부키",
        "school": "발키리",
        "club": "생활안전국",
        "aliases": [
            "후부키"
        ],
        "voice": "천송이",
        "image": "assets/images/fubuki.webp"
    },
    {
        "id": "misuzu",
        "name": "미스즈",
        "fullName": "칸바라 미스즈",
        "school": "발키리",
        "club": "교정국",
        "aliases": [
            "미스즈"
        ],
        "voice": null,
        "image": "assets/images/misuzu.webp"
    },
    {
        "id": "miyako",
        "name": "미야코",
        "fullName": "츠키유키 미야코",
        "school": "SRT",
        "club": "RABBIT 소대",
        "aliases": [
            "미야코"
        ],
        "voice": "김채린",
        "image": "assets/images/miyako.webp"
    },
    {
        "id": "saki",
        "name": "사키",
        "fullName": "소라이 사키",
        "school": "SRT",
        "club": "RABBIT 소대",
        "aliases": [
            "사키"
        ],
        "voice": "손정민",
        "image": "assets/images/saki.webp"
    },
    {
        "id": "moe",
        "name": "모에",
        "fullName": "카제쿠라 모에",
        "school": "SRT",
        "club": "RABBIT 소대",
        "aliases": [
            "모에"
        ],
        "voice": "권다예",
        "image": "assets/images/moe.webp"
    },
    {
        "id": "miyu",
        "name": "미유",
        "fullName": "카스미자와 미유",
        "school": "SRT",
        "club": "RABBIT 소대",
        "aliases": [
            "미유"
        ],
        "voice": "김채하",
        "image": "assets/images/miyu.webp"
    },
    {
        "id": "yukino",
        "name": "유키노",
        "fullName": "시치도 유키노",
        "school": "SRT",
        "club": "FOX 소대",
        "aliases": [
            "유키노"
        ],
        "voice": null,
        "image": "assets/images/yukino.webp"
    },
    {
        "id": "niko",
        "name": "니코",
        "fullName": "요시노 니코",
        "school": "SRT",
        "club": "FOX 소대",
        "aliases": [
            "니코"
        ],
        "voice": "노유진",
        "image": "assets/images/niko.webp"
    },
    {
        "id": "kurumi",
        "name": "쿠루미",
        "fullName": "타카쿠라 쿠루미",
        "school": "SRT",
        "club": "FOX 소대",
        "aliases": [
            "쿠루미"
        ],
        "voice": "안아라",
        "image": "assets/images/kurumi.webp"
    },
    {
        "id": "otogi",
        "name": "오토기",
        "fullName": "텐진야마 오토기",
        "school": "SRT",
        "club": "FOX 소대",
        "aliases": [
            "오토기"
        ],
        "voice": "배하경",
        "image": "assets/images/otogi.webp"
    },
    {
        "id": "saori",
        "name": "사오리",
        "fullName": "조마에 사오리",
        "school": "아리우스",
        "club": "스쿼드",
        "aliases": [
            "사오리"
        ],
        "voice": "이명희",
        "image": "assets/images/saori.webp"
    },
    {
        "id": "atsuko",
        "name": "아츠코",
        "fullName": "하카리 아츠코",
        "school": "아리우스",
        "club": "스쿼드",
        "aliases": [
            "아츠코"
        ],
        "voice": "김성화",
        "image": "assets/images/atsuko.webp"
    },
    {
        "id": "misaki",
        "name": "미사키",
        "fullName": "이마시노 미사키",
        "school": "아리우스",
        "club": "스쿼드",
        "aliases": [
            "미사키"
        ],
        "voice": "유혜지",
        "image": "assets/images/misaki.webp"
    },
    {
        "id": "hiyori",
        "name": "히요리",
        "fullName": "츠치나가 히요리",
        "school": "아리우스",
        "club": "스쿼드",
        "aliases": [
            "히요리"
        ],
        "voice": "이보용",
        "image": "assets/images/hiyori.webp"
    },
    {
        "id": "subaru",
        "name": "스바루",
        "fullName": "카케하시 스바루",
        "school": "아리우스",
        "club": "니코메디아 트룹",
        "aliases": [
            "스바루"
        ],
        "voice": "이눈솔",
        "image": "assets/images/subaru.webp"
    },
    {
        "id": "maia",
        "name": "마이아",
        "fullName": "타치기 마이아",
        "school": "아리우스",
        "club": "니코메디아 트룹",
        "aliases": [
            "마이아"
        ],
        "voice": null,
        "image": "assets/images/maia.webp"
    },
    {
        "id": "hikari",
        "name": "히카리",
        "fullName": "타치바나 히카리",
        "school": "하이랜더",
        "club": "CCC",
        "aliases": [
            "히카리"
        ],
        "voice": "방연지",
        "image": "assets/images/hikari.webp"
    },
    {
        "id": "nozomi",
        "name": "노조미",
        "fullName": "타치바나 노조미",
        "school": "하이랜더",
        "club": "CCC",
        "aliases": [
            "노조미"
        ],
        "voice": "장예나",
        "image": "assets/images/nozomi.webp"
    },
    {
        "id": "aoba",
        "name": "아오바",
        "fullName": "우츠미 아오바",
        "school": "하이랜더",
        "club": "화물운송관리부",
        "aliases": [
            "아오바"
        ],
        "voice": "미소",
        "image": "assets/images/aoba.webp"
    },
    {
        "id": "suo",
        "name": "스오우",
        "fullName": "아사기리 스오우",
        "school": "하이랜더",
        "club": "감리실",
        "aliases": [
            "스오우"
        ],
        "voice": null,
        "image": "assets/images/suo.webp"
    },
    {
        "id": "kanoe",
        "name": "카노에",
        "fullName": "이타가키 카노에",
        "school": "와일드헌트",
        "club": "오컬트 연구회",
        "aliases": [
            "카노에"
        ],
        "voice": "김유림",
        "image": "assets/images/kanoe.webp"
    },
    {
        "id": "eri",
        "name": "에리",
        "fullName": "시라오 에리",
        "school": "와일드헌트",
        "club": "오컬트 연구회",
        "aliases": [
            "에리"
        ],
        "voice": "주예진",
        "image": "assets/images/eri.webp"
    },
    {
        "id": "rena",
        "name": "레나",
        "fullName": "키누이 레나",
        "school": "와일드헌트",
        "club": "오컬트 연구회",
        "aliases": [
            "레나"
        ],
        "voice": "정운",
        "image": "assets/images/rena.webp"
    },
    {
        "id": "tsumugi",
        "name": "츠무기",
        "fullName": "시이나 츠무기",
        "school": "와일드헌트",
        "club": "오컬트 연구회",
        "aliases": [
            "츠무기"
        ],
        "voice": null,
        "image": "assets/images/tsumugi.webp"
    },
    {
        "id": "miyo",
        "name": "미요",
        "fullName": "사쿠라이 미요",
        "school": "와일드헌트",
        "club": "특수교역부",
        "aliases": [
            "미요"
        ],
        "voice": "김아롱",
        "image": "assets/images/miyo.webp"
    },
    {
        "id": "fuyu",
        "name": "후유",
        "fullName": "와카사 후유",
        "school": "와일드헌트",
        "club": "특수교역부",
        "aliases": [
            "후유"
        ],
        "voice": "차영희",
        "image": "assets/images/fuyu.webp"
    },
    {
        "id": "ritsu",
        "name": "리츠",
        "fullName": "우스바 리츠",
        "school": "와일드헌트",
        "club": "특수교역부",
        "aliases": [
            "리츠"
        ],
        "voice": "김진아",
        "image": "assets/images/ritsu.webp"
    },
    {
        "id": "hiromi",
        "name": "히로미",
        "fullName": "히로미",
        "school": "와일드헌트",
        "club": "감리실",
        "aliases": [
            "히로미"
        ],
        "voice": null,
        "image": "assets/images/hiromi.webp"
    },
    {
        "id": "akira",
        "name": "아키라",
        "fullName": "키요스미 아키라",
        "school": "와일드헌트",
        "club": "감리실",
        "aliases": [
            "아키라",
            "미리아"
        ],
        "voice": null,
        "image": "assets/images/akira.webp"
    },
    {
        "id": "kokoro",
        "name": "코코로",
        "fullName": "토미 코코로",
        "school": "오디세이아",
        "club": "다이빙부",
        "aliases": [
            "코코로"
        ],
        "voice": null,
        "image": "assets/images/kokoro.webp"
    },
    {
        "id": "kotone",
        "name": "코토네",
        "fullName": "후치가미 코토네",
        "school": "오디세이아",
        "club": "다이빙부",
        "aliases": [
            "코토네"
        ],
        "voice": null,
        "image": "assets/images/kotone.webp"
    },
    {
        "id": "arona",
        "name": "아로나",
        "fullName": "아로나",
        "school": "샬레",
        "club": "샬레",
        "aliases": [
            "아로나"
        ],
        "voice": "김하루",
        "image": "assets/images/arona.webp"
    },
    {
        "id": "plana",
        "name": "프라나",
        "fullName": "프라나",
        "school": "샬레",
        "club": "샬레",
        "aliases": [
            "프라나"
        ],
        "voice": "김하루",
        "image": "assets/images/plana.webp"
    },
    {
        "id": "gun",
        "name": "총학생회장",
        "fullName": "총학생회장",
        "school": "총학생회",
        "club": "총학생회",
        "aliases": [
            "총학생회장"
        ],
        "voice": "김하루",
        "image": "assets/images/gun.webp"
    },
    {
        "id": "rin",
        "name": "린",
        "fullName": "나나가미 린",
        "school": "총학생회",
        "club": "통괄실",
        "aliases": [
            "린"
        ],
        "voice": "권다예",
        "image": "assets/images/rin.webp"
    },
    {
        "id": "kaya",
        "name": "카야",
        "fullName": "시라누이 카야",
        "school": "총학생회",
        "club": "방위실",
        "aliases": [
            "카야"
        ],
        "voice": null,
        "image": "assets/images/kaya.webp"
    },
    {
        "id": "ayumu",
        "name": "아유무",
        "fullName": "이와비츠 아유무",
        "school": "총학생회",
        "club": "조정실",
        "aliases": [
            "아유무"
        ],
        "voice": "권영지",
        "image": "assets/images/ayumu.webp"
    },
    {
        "id": "momoka",
        "name": "모모카",
        "fullName": "유라키 모모카",
        "school": "총학생회",
        "club": "교통실",
        "aliases": [
            "모모카"
        ],
        "voice": "김나율",
        "image": "assets/images/momoka.webp"
    },
    {
        "id": "aoi",
        "name": "아오이",
        "fullName": "오키 아오이",
        "school": "총학생회",
        "club": "재무실",
        "aliases": [
            "아오이"
        ],
        "voice": "김보민",
        "image": "assets/images/aoi.webp"
    },
    {
        "id": "haine",
        "name": "하이네",
        "fullName": "하이네",
        "school": "총학생회",
        "club": "체육실",
        "aliases": [
            "하이네"
        ],
        "voice": null,
        "image": "assets/images/haine.webp"
    },
    {
        "id": "sumomo",
        "name": "스모모",
        "fullName": "스모모",
        "school": "총학생회",
        "club": "??실",
        "aliases": [
            "스모모"
        ],
        "voice": null,
        "image": "assets/images/sumomo.webp"
    },
    {
        "id": "sora",
        "name": "소라",
        "fullName": "소라",
        "school": "엔젤24",
        "club": "엔젤24",
        "aliases": [
            "소라"
        ],
        "voice": "류지아",
        "image": "assets/images/sora.png"
    },
    {
        "id": "miku",
        "name": "미쿠",
        "fullName": "하츠네 미쿠",
        "school": "콜라보레이션",
        "club": "보컬로이드",
        "aliases": [
            "미쿠"
        ],
        "voice": null,
        "image": "assets/images/miku.webp"
    },
    {
        "id": "shokuhou",
        "name": "쇼쿠호",
        "fullName": "쇼쿠호 미사키",
        "school": "콜라보레이션",
        "club": "어과초T",
        "aliases": [
            "쇼쿠호",
            "미사키"
        ],
        "voice": null,
        "image": "assets/images/shokuhou.webp"
    },
    {
        "id": "saten",
        "name": "사텐",
        "fullName": "사텐 루이코",
        "school": "콜라보레이션",
        "club": "어과초T",
        "aliases": [
            "사텐",
            "루이코"
        ],
        "voice": null,
        "image": "assets/images/saten.webp"
    },
    {
        "id": "misaka",
        "name": "미사카",
        "fullName": "미사카 미코토",
        "school": "콜라보레이션",
        "club": "어과초T",
        "aliases": [
            "미사카",
            "미코토"
        ],
        "voice": null,
        "image": "assets/images/misaka.webp"
    },
    {
        "id": "mai",
        "name": "마이",
        "fullName": "카자마키 마이",
        "school": "크로노스",
        "club": "보도부",
        "aliases": [
            "마이"
        ],
        "voice": null,
        "image": "assets/images/mai.webp"
    },
    {
        "id": "sinon",
        "name": "시논",
        "fullName": "카와루 시논",
        "school": "크로노스",
        "club": "보도부",
        "aliases": [
            "시논"
        ],
        "voice": "권선영",
        "image": "assets/images/sinon.webp"
    }
];
