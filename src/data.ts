import { Question, Flashcard, Stage, Achievement, TextbookLesson } from './types';

export const ALL_STAGES: Stage[] = [
  {
    "id": 1,
    "title": "Stage 1: 热身组 Warmup",
    "subtitle": "The Foundation: Basic Vocal Mimicry",
    "progressPercent": 100,
    "locked": false,
    "lessons": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "themeColor": "bg-primary"
  },
  {
    "id": 2,
    "title": "Stage 2: 核心组 Core Stamina",
    "subtitle": "High-frequency grammar nerve firing",
    "progressPercent": 50,
    "locked": false,
    "lessons": [
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24
    ],
    "themeColor": "bg-secondary-container"
  },
  {
    "id": 3,
    "title": "Stage 3: 爆发组 Speed Burst",
    "subtitle": "Extreme vocal speed and acoustic precision",
    "progressPercent": 0,
    "locked": true,
    "lessons": [
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39
    ],
    "themeColor": "bg-neutral-400"
  },
  {
    "id": 4,
    "title": "Stage 4: 抗阻组 Resistance Focus",
    "subtitle": "Complex contractions & multi-vowel reps",
    "progressPercent": 0,
    "locked": true,
    "lessons": [
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57
    ],
    "themeColor": "bg-neutral-400"
  },
  {
    "id": 5,
    "title": "Stage 5: 力量泵 Vocal Pump",
    "subtitle": "Deep pharyngeal power & high intensity",
    "progressPercent": 0,
    "locked": true,
    "lessons": [
      58,
      59,
      60,
      61,
      62,
      63,
      64,
      65,
      66,
      67,
      68,
      69,
      70,
      71,
      72,
      73,
      74,
      75,
      76
    ],
    "themeColor": "bg-neutral-400"
  },
  {
    "id": 6,
    "title": "Stage 6: 耐力级 Stamina Pro",
    "subtitle": "Longer structural combinations without pausing",
    "progressPercent": 0,
    "locked": true,
    "lessons": [
      77,
      78,
      79,
      80,
      81,
      82,
      83,
      84,
      85,
      86,
      87,
      88,
      89,
      90,
      91,
      92,
      93,
      94
    ],
    "themeColor": "bg-neutral-400"
  },
  {
    "id": 7,
    "title": "Stage 7: 双核并联 Dual-Core Sync",
    "subtitle": "Simultaneous listen-respond subconscious loops",
    "progressPercent": 0,
    "locked": true,
    "lessons": [
      95,
      96,
      97,
      98,
      99,
      100,
      101,
      102,
      103,
      104,
      105,
      106,
      107,
      108,
      109,
      110,
      111,
      112,
      113
    ],
    "themeColor": "bg-neutral-400"
  },
  {
    "id": 8,
    "title": "Stage 8: 神经直联 Neural Hook",
    "subtitle": "Business contexts fired at lightspeed",
    "progressPercent": 0,
    "locked": true,
    "lessons": [
      114,
      115,
      116,
      117,
      118,
      119,
      120,
      121,
      122,
      123,
      124,
      125,
      126,
      127,
      128,
      129,
      130
    ],
    "themeColor": "bg-neutral-400"
  },
  {
    "id": 9,
    "title": "Stage 9: 条件反射 Reflex Lock",
    "subtitle": "Eliminating the internal translation layer",
    "progressPercent": 0,
    "locked": true,
    "lessons": [
      131,
      132,
      133,
      134,
      135,
      136,
      137,
      138,
      139,
      140,
      141,
      142,
      143,
      144,
      145
    ],
    "themeColor": "bg-neutral-400"
  },
  {
    "id": 10,
    "title": "Stage 10: 脑髓极化 Brainstem Polish",
    "subtitle": "Complex colloquial speech-part reflexes",
    "progressPercent": 0,
    "locked": true,
    "lessons": [
      146,
      147,
      148,
      149,
      150,
      151,
      152,
      153,
      154,
      155,
      156,
      157,
      158,
      159,
      160,
      161,
      162
    ],
    "themeColor": "bg-neutral-400"
  },
  {
    "id": 11,
    "title": "Stage 11: 极限过载 Overload Limit",
    "subtitle": "Elite linguistic muscle control and pacing",
    "progressPercent": 0,
    "locked": true,
    "lessons": [
      163,
      164,
      165,
      166,
      167,
      168,
      169,
      170,
      171,
      172,
      173,
      174,
      175,
      176,
      177
    ],
    "themeColor": "bg-neutral-400"
  },
  {
    "id": 12,
    "title": "Stage 12: 终极母语 Native Instinct",
    "subtitle": "Flawless non-thinking automatic articulation",
    "progressPercent": 0,
    "locked": true,
    "lessons": [
      178,
      179,
      180,
      181,
      182,
      183,
      184,
      185,
      186,
      187,
      188,
      189,
      190,
      191
    ],
    "themeColor": "bg-neutral-400"
  }
];

export const STAGE_LESSONS_MAP: Record<number, number[]> = {
  "1": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "2": [
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24
  ],
  "3": [
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39
  ],
  "4": [
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57
  ],
  "5": [
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76
  ],
  "6": [
    77,
    78,
    79,
    80,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    90,
    91,
    92,
    93,
    94
  ],
  "7": [
    95,
    96,
    97,
    98,
    99,
    100,
    101,
    102,
    103,
    104,
    105,
    106,
    107,
    108,
    109,
    110,
    111,
    112,
    113
  ],
  "8": [
    114,
    115,
    116,
    117,
    118,
    119,
    120,
    121,
    122,
    123,
    124,
    125,
    126,
    127,
    128,
    129,
    130
  ],
  "9": [
    131,
    132,
    133,
    134,
    135,
    136,
    137,
    138,
    139,
    140,
    141,
    142,
    143,
    144,
    145
  ],
  "10": [
    146,
    147,
    148,
    149,
    150,
    151,
    152,
    153,
    154,
    155,
    156,
    157,
    158,
    159,
    160,
    161,
    162
  ],
  "11": [
    163,
    164,
    165,
    166,
    167,
    168,
    169,
    170,
    171,
    172,
    173,
    174,
    175,
    176,
    177
  ],
  "12": [
    178,
    179,
    180,
    181,
    182,
    183,
    184,
    185,
    186,
    187,
    188,
    189,
    190,
    191
  ]
};

export const ALL_QUESTIONS: Question[] = [
  {
    "id": "s1_l1_q1",
    "stageId": 1,
    "lessonId": 1,
    "questionText": "What's this?",
    "expectedAnswer": "It's a pen",
    "questionTextZh": "这是什么？",
    "expectedAnswerZh": "这是一支笔"
  },
  {
    "id": "s1_l1_q2",
    "stageId": 1,
    "lessonId": 1,
    "questionText": "Is this a pen?",
    "expectedAnswer": "Yes, it's a pen",
    "questionTextZh": "这是一支笔吗？",
    "expectedAnswerZh": "是的，这是一支笔"
  },
  {
    "id": "s1_l1_q3",
    "stageId": 1,
    "lessonId": 1,
    "questionText": "Is this a pen?",
    "expectedAnswer": "No, it isn't a pen; it's a pencil",
    "questionTextZh": "这是一支笔吗？",
    "expectedAnswerZh": "不，这不是一支笔；它是一支钢笔。这是一支铅笔"
  },
  {
    "id": "s1_l1_q4",
    "stageId": 1,
    "lessonId": 1,
    "questionText": "Is this a pencil?",
    "expectedAnswer": "No, it isn't a pencil; it's a book",
    "questionTextZh": "这是一支铅笔吗？",
    "expectedAnswerZh": "不，这不是一支铅笔；而是一支铅笔。这是一本书"
  },
  {
    "id": "s1_l1_q5",
    "stageId": 1,
    "lessonId": 1,
    "questionText": "Is the pen short?",
    "expectedAnswer": "No, the pen isn't short; it's long",
    "questionTextZh": "笔短吗？",
    "expectedAnswerZh": "不，这支笔并不短；它是短的。很长"
  },
  {
    "id": "s1_l1_q6",
    "stageId": 1,
    "lessonId": 1,
    "questionText": "Is the pencil long?",
    "expectedAnswer": "No, the pencil isn't long; it's short",
    "questionTextZh": "铅笔长吗？",
    "expectedAnswerZh": "不，铅笔不长；它很短"
  },
  {
    "id": "s1_l1_q7",
    "stageId": 1,
    "lessonId": 1,
    "questionText": "Is the room short?",
    "expectedAnswer": "No, the room isn't short; it's long",
    "questionTextZh": "房间短吗？",
    "expectedAnswerZh": "不，房间并不短；很长"
  },
  {
    "id": "s1_l1_q8",
    "stageId": 1,
    "lessonId": 1,
    "questionText": "Is the table small?",
    "expectedAnswer": "No, the table isn't small; it's large",
    "questionTextZh": "桌子小吗？",
    "expectedAnswerZh": "不，桌子不小；它很大"
  },
  {
    "id": "s1_l1_q9",
    "stageId": 1,
    "lessonId": 1,
    "questionText": "Is the box large?",
    "expectedAnswer": "No, the box isn't large; it's small",
    "questionTextZh": "盒子大吗？",
    "expectedAnswerZh": "不，盒子不大；它很小"
  },
  {
    "id": "s1_l1_q10",
    "stageId": 1,
    "lessonId": 1,
    "questionText": "Is (London) a village?",
    "expectedAnswer": "No, (London) isn't a village; it's a city",
    "questionTextZh": "（伦敦）是一个村庄吗？",
    "expectedAnswerZh": "不，（伦敦）不是一个村庄；它是一个村庄。这是一座城市"
  },
  {
    "id": "s1_l1_q11",
    "stageId": 1,
    "lessonId": 1,
    "questionText": "Is (Windsor) a city?",
    "expectedAnswer": "No, (Windsor) isn't a city; it's a town",
    "questionTextZh": "温莎是一座城市吗？",
    "expectedAnswerZh": "不，（温莎）不是一座城市；这是一个城镇"
  },
  {
    "id": "s1_l1_q12",
    "stageId": 1,
    "lessonId": 1,
    "questionText": "Is (Grantchester) a town?",
    "expectedAnswer": "No, (Grantchester) isn't a town; it's a village",
    "questionTextZh": "（格兰切斯特）是一个城镇吗？",
    "expectedAnswerZh": "不，（格兰切斯特）不是一个城镇；它是一个城镇。这是一个村庄"
  },
  {
    "id": "s1_l1_q13",
    "stageId": 1,
    "lessonId": 1,
    "questionText": "Is the table long or short?",
    "expectedAnswer": "The table's long.",
    "questionTextZh": "桌子是长还是短？",
    "expectedAnswerZh": "桌子很长。"
  },
  {
    "id": "s1_l1_q14",
    "stageId": 1,
    "lessonId": 1,
    "questionText": "Is a city large or small?",
    "expectedAnswer": "A city's large",
    "questionTextZh": "城市是大还是小？",
    "expectedAnswerZh": "一个城市的大"
  },
  {
    "id": "s1_l1_q15",
    "stageId": 1,
    "lessonId": 1,
    "questionText": "What's this?",
    "expectedAnswer": "It's a man. It's a woman. It's a boy. It's a girl.",
    "questionTextZh": "这是什么？",
    "expectedAnswerZh": "这是一个男人。这是一个女人。这是一个男孩。这是一个女孩。"
  },
  {
    "id": "s1_l1_q16",
    "stageId": 1,
    "lessonId": 1,
    "questionText": "Is this a girl?",
    "expectedAnswer": "No, it isn't a girl; it's a man",
    "questionTextZh": "这是一个女孩吗？",
    "expectedAnswerZh": "不，这不是一个女孩；而是一个女孩。这是一个男人"
  },
  {
    "id": "s1_l1_q17",
    "stageId": 1,
    "lessonId": 1,
    "questionText": "Is this a man?",
    "expectedAnswer": "No, it isn't a man; it's a woman",
    "questionTextZh": "这是一个男人吗？",
    "expectedAnswerZh": "不，这不是一个人；而是一个人。这是一个女人"
  },
  {
    "id": "s1_l1_q18",
    "stageId": 1,
    "lessonId": 1,
    "questionText": "Is this a woman?",
    "expectedAnswer": "No, it isn't a woman; it's a boy",
    "questionTextZh": "这是女人吗？",
    "expectedAnswerZh": "不，这不是一个女人；而是一个女人。这是一个男孩"
  },
  {
    "id": "s1_l1_q19",
    "stageId": 1,
    "lessonId": 1,
    "questionText": "Is this a boy?",
    "expectedAnswer": "No, it isn't a boy; it's a girl",
    "questionTextZh": "这是男孩吗？",
    "expectedAnswerZh": "不，这不是一个男孩，而是一个男孩。这是一个女孩"
  },
  {
    "id": "s1_l1_q20",
    "stageId": 1,
    "lessonId": 1,
    "questionText": "Is the pen in the book?",
    "expectedAnswer": "No, the pen isn't in the book; it's under the book",
    "questionTextZh": "笔在书里吗？",
    "expectedAnswerZh": "不，笔不在书里；它在书的下面"
  },
  {
    "id": "s1_l1_q21",
    "stageId": 1,
    "lessonId": 1,
    "questionText": "Is the pen under the book?",
    "expectedAnswer": "No, the pen isn't under the book; it's on the book",
    "questionTextZh": "笔在书下面吗？",
    "expectedAnswerZh": "不，笔不在书下面；而是在书下面。这是书上的"
  },
  {
    "id": "s1_l1_q22",
    "stageId": 1,
    "lessonId": 1,
    "questionText": "Is this Anna Brown?",
    "expectedAnswer": "No, it isn't Anna Brown; it's Mr Brown",
    "questionTextZh": "这是安娜·布朗吗？",
    "expectedAnswerZh": "不，这不是安娜·布朗；她是安娜·布朗。这是布朗先生"
  },
  {
    "id": "s1_l1_q23",
    "stageId": 1,
    "lessonId": 1,
    "questionText": "Is this Mr Brown?",
    "expectedAnswer": "No, it isn't Mr Brown; it's Mrs Brown",
    "questionTextZh": "这是布朗先生吗？",
    "expectedAnswerZh": "不，这不是布朗先生；他是布朗先生。这是布朗夫人"
  },
  {
    "id": "s1_l1_q24",
    "stageId": 1,
    "lessonId": 1,
    "questionText": "Is this Mrs Brown?",
    "expectedAnswer": "No, it isn't Mrs Brown; it's Jack Brown",
    "questionTextZh": "这是布朗夫人吗？",
    "expectedAnswerZh": "不，这不是布朗夫人；她是布朗夫人。这是杰克·布朗"
  },
  {
    "id": "s1_l1_q25",
    "stageId": 1,
    "lessonId": 1,
    "questionText": "Is this Jack Brown?",
    "expectedAnswer": "No, it isn't Jack Brown; it's Anna Brown",
    "questionTextZh": "这是杰克·布朗吗？",
    "expectedAnswerZh": "不，这不是杰克·布朗；他是杰克·布朗。这是安娜·布朗"
  },
  {
    "id": "s1_l1_q26",
    "stageId": 1,
    "lessonId": 1,
    "questionText": "What colour's this pencil?",
    "expectedAnswer": "This pencil's black, white etc.",
    "questionTextZh": "这支铅笔是什么颜色的？",
    "expectedAnswerZh": "这支铅笔有黑色、白色等。"
  },
  {
    "id": "s1_l1_q27",
    "stageId": 1,
    "lessonId": 1,
    "questionText": "Where's the pen?",
    "expectedAnswer": "The pen's on the book",
    "questionTextZh": "笔在哪里？",
    "expectedAnswerZh": "笔在书上"
  },
  {
    "id": "s1_l1_q28",
    "stageId": 1,
    "lessonId": 1,
    "questionText": "Where's the book?",
    "expectedAnswer": "The book's on the table",
    "questionTextZh": "书在哪里？",
    "expectedAnswerZh": "书在桌子上"
  },
  {
    "id": "s1_l1_q29",
    "stageId": 1,
    "lessonId": 1,
    "questionText": "Where's the pen?",
    "expectedAnswer": "The pen's under the table",
    "questionTextZh": "笔在哪里？",
    "expectedAnswerZh": "笔在桌子底下"
  },
  {
    "id": "s1_l1_q30",
    "stageId": 1,
    "lessonId": 1,
    "questionText": "Where's the picture?",
    "expectedAnswer": "The picture's on the wall",
    "questionTextZh": "图片在哪里？",
    "expectedAnswerZh": "照片挂在墙上"
  },
  {
    "id": "s1_l1_q31",
    "stageId": 1,
    "lessonId": 1,
    "questionText": "Where's the light?",
    "expectedAnswer": "The light's on the ceiling",
    "questionTextZh": "光在哪里？",
    "expectedAnswerZh": "灯在天花板上"
  },
  {
    "id": "s1_l2_q1",
    "stageId": 1,
    "lessonId": 2,
    "questionText": "Am I ..?",
    "expectedAnswer": "Yes, you're ",
    "questionTextZh": "我是..吗？",
    "expectedAnswerZh": "是的，你是"
  },
  {
    "id": "s1_l2_q2",
    "stageId": 1,
    "lessonId": 2,
    "questionText": "Are you ..?",
    "expectedAnswer": "Yes, I'm ",
    "questionTextZh": "你是 ..？",
    "expectedAnswerZh": "是的，我是"
  },
  {
    "id": "s1_l2_q3",
    "stageId": 1,
    "lessonId": 2,
    "questionText": "Is he Mr Brown?",
    "expectedAnswer": "Yes, he's Mr Brown",
    "questionTextZh": "他是布朗先生吗？",
    "expectedAnswerZh": "是的，他是布朗先生"
  },
  {
    "id": "s1_l2_q4",
    "stageId": 1,
    "lessonId": 2,
    "questionText": "Is she Mrs Brown?",
    "expectedAnswer": "Yes, she's Mrs Brown",
    "questionTextZh": "她是布朗夫人吗？",
    "expectedAnswerZh": "是的，她是布朗夫人"
  },
  {
    "id": "s1_l2_q5",
    "stageId": 1,
    "lessonId": 2,
    "questionText": "Am I Mrs Brown?",
    "expectedAnswer": "No, you aren't Mrs Brown; you're Mr Brown.",
    "questionTextZh": "我是布朗夫人吗？",
    "expectedAnswerZh": "不，你不是布朗夫人；你是布朗夫人。你是布朗先生。"
  },
  {
    "id": "s1_l2_q6",
    "stageId": 1,
    "lessonId": 2,
    "questionText": "Are you Mr Brown?",
    "expectedAnswer": "No, I'm not Mr Brown; I'm Jack Brown.",
    "questionTextZh": "您是布朗先生吗？",
    "expectedAnswerZh": "不，我不是布朗先生；我是布朗先生。我是杰克·布朗。"
  },
  {
    "id": "s1_l2_q7",
    "stageId": 1,
    "lessonId": 2,
    "questionText": "Is he Mr Smith?",
    "expectedAnswer": "No, he isn't Mr Smith; he's Mr Brown",
    "questionTextZh": "他是史密斯先生吗？",
    "expectedAnswerZh": "不，他不是史密斯先生；他不是史密斯先生。他是布朗先生"
  },
  {
    "id": "s1_l2_q8",
    "stageId": 1,
    "lessonId": 2,
    "questionText": "Is she Mr Brown?",
    "expectedAnswer": "No, she isn't Mr Brown; she's Mrs Brown",
    "questionTextZh": "她是布朗先生吗？",
    "expectedAnswerZh": "不，她不是布朗先生；她不是布朗先生。她是布朗夫人"
  },
  {
    "id": "s1_l2_q9",
    "stageId": 1,
    "lessonId": 2,
    "questionText": "Where's the table?",
    "expectedAnswer": "The table's in front of me",
    "questionTextZh": "桌子在哪里？",
    "expectedAnswerZh": "桌子在我面前"
  },
  {
    "id": "s1_l2_q10",
    "stageId": 1,
    "lessonId": 2,
    "questionText": "Is the wall in front of you?",
    "expectedAnswer": "No, the wall isn't in front of me; it's behind me",
    "questionTextZh": "你面前是墙吗？",
    "expectedAnswerZh": "不，墙不在我面前；墙不在我面前；它在我身后"
  },
  {
    "id": "s1_l2_q11",
    "stageId": 1,
    "lessonId": 2,
    "questionText": "Is the table behind me?",
    "expectedAnswer": "No, the table isn't behind you; it's in front of you",
    "questionTextZh": "桌子在我后面吗？",
    "expectedAnswerZh": "不，桌子不在你身后，而是在你身后。它就在你面前"
  },
  {
    "id": "s1_l2_q12",
    "stageId": 1,
    "lessonId": 2,
    "questionText": "Where's the house?",
    "expectedAnswer": "The house is behind him",
    "questionTextZh": "房子在哪儿？",
    "expectedAnswerZh": "房子在他身后"
  },
  {
    "id": "s1_l2_q13",
    "stageId": 1,
    "lessonId": 2,
    "questionText": "Where's the house?",
    "expectedAnswer": "The house is behind her",
    "questionTextZh": "房子在哪儿？",
    "expectedAnswerZh": "房子在她身后"
  },
  {
    "id": "s1_l2_q14",
    "stageId": 1,
    "lessonId": 2,
    "questionText": "Are you behind her?",
    "expectedAnswer": "No, I'm not behind her; I'm in front of her",
    "questionTextZh": "你在她身后吗？",
    "expectedAnswerZh": "不，我不在她身后；我在她身后。我在她面前"
  },
  {
    "id": "s1_l2_q15",
    "stageId": 1,
    "lessonId": 2,
    "questionText": "Am I in front of him?",
    "expectedAnswer": "No, you aren't in front of him; you're behind him",
    "questionTextZh": "我在他面前吗？",
    "expectedAnswerZh": "不，你不在他面前；你在他身后"
  },
  {
    "id": "s1_l2_q16",
    "stageId": 1,
    "lessonId": 2,
    "questionText": "Are you standing on the floor?",
    "expectedAnswer": "No, I'm not standing on the floor; I'm sitting on the chair",
    "questionTextZh": "你站在地板上吗？",
    "expectedAnswerZh": "不，我没有站在地板上；我没有站在地板上。我坐在椅子上"
  },
  {
    "id": "s1_l2_q17",
    "stageId": 1,
    "lessonId": 2,
    "questionText": "Am I sitting on the chair?",
    "expectedAnswer": "No, you aren't sitting on the chair; you're standing on the floor",
    "questionTextZh": "我坐在椅子上吗？",
    "expectedAnswerZh": "不，你不是坐在椅子上；而是你坐在椅子上。你站在地板上"
  },
  {
    "id": "s1_l2_q18",
    "stageId": 1,
    "lessonId": 2,
    "questionText": "Are you standing in front of me?",
    "expectedAnswer": "No, I'm not standing in front of you; I'm sitting in front of you",
    "questionTextZh": "你站在我面前吗？",
    "expectedAnswerZh": "不，我不是站在你面前；我坐在你面前"
  },
  {
    "id": "s1_l2_q19",
    "stageId": 1,
    "lessonId": 2,
    "questionText": "Am I putting the book on the ʞoor?",
    "expectedAnswer": "No, you aren't putting the book on the floor; you're taking the book from the table",
    "questionTextZh": "我把书放在地板上了吗？",
    "expectedAnswerZh": "不，你不是把书放在地板上；而是把书放在地板上。你从桌子上拿走书"
  },
  {
    "id": "s1_l2_q20",
    "stageId": 1,
    "lessonId": 2,
    "questionText": "Am I taking the pen from the table?",
    "expectedAnswer": "No, you aren't taking the pen from the table; you're putting the book on the table",
    "questionTextZh": "我要从桌子上拿笔吗？",
    "expectedAnswerZh": "不，你不会从桌子上拿走笔；你会从桌子上拿走笔。你把书放在桌子上"
  },
  {
    "id": "s1_l2_q21",
    "stageId": 1,
    "lessonId": 2,
    "questionText": "Am I closing the door?",
    "expectedAnswer": "No, you aren't closing the door; you're opening the book",
    "questionTextZh": "我关门了吗？",
    "expectedAnswerZh": "不，你不是在关门；而是在关门。你正在打开书"
  },
  {
    "id": "s1_l2_q22",
    "stageId": 1,
    "lessonId": 2,
    "questionText": "Am I opening the window?",
    "expectedAnswer": "No, you aren't opening the window; you're closing the book",
    "questionTextZh": "我打开窗户吗？",
    "expectedAnswerZh": "不，你没有打开窗户；你没有打开窗户。你正在合上书"
  },
  {
    "id": "s1_l2_q23",
    "stageId": 1,
    "lessonId": 2,
    "questionText": "What am I doing?",
    "expectedAnswer": "You're taking the book from the table",
    "questionTextZh": "我在做什么？",
    "expectedAnswerZh": "你从桌子上拿走书"
  },
  {
    "id": "s1_l2_q24",
    "stageId": 1,
    "lessonId": 2,
    "questionText": "What am I doing?",
    "expectedAnswer": "You're opening the book",
    "questionTextZh": "我在做什么？",
    "expectedAnswerZh": "你正在打开书"
  },
  {
    "id": "s1_l2_q25",
    "stageId": 1,
    "lessonId": 2,
    "questionText": "What am I doing?",
    "expectedAnswer": "You're closing the book",
    "questionTextZh": "我在做什么？",
    "expectedAnswerZh": "你正在合上书"
  },
  {
    "id": "s1_l2_q26",
    "stageId": 1,
    "lessonId": 2,
    "questionText": "What am I doing?",
    "expectedAnswer": "You're putting the book on the table",
    "questionTextZh": "我在做什么？",
    "expectedAnswerZh": "你把书放在桌子上"
  },
  {
    "id": "s1_l2_q27",
    "stageId": 1,
    "lessonId": 2,
    "questionText": "Which pencil's black?",
    "expectedAnswer": "This pencil's black",
    "questionTextZh": "哪种铅笔是黑色的？",
    "expectedAnswerZh": "这支铅笔是黑色的"
  },
  {
    "id": "s1_l2_q28",
    "stageId": 1,
    "lessonId": 2,
    "questionText": "Which pencil's white?",
    "expectedAnswer": "This pencil's white",
    "questionTextZh": "哪种铅笔是白色的？",
    "expectedAnswerZh": "这支铅笔是白色的"
  },
  {
    "id": "s1_l2_q29",
    "stageId": 1,
    "lessonId": 2,
    "questionText": "Which pencil's green?",
    "expectedAnswer": "This pencil's green",
    "questionTextZh": "哪支铅笔是绿色的？",
    "expectedAnswerZh": "这支铅笔是绿色的"
  },
  {
    "id": "s1_l2_q30",
    "stageId": 1,
    "lessonId": 2,
    "questionText": "Which pencil's brown?",
    "expectedAnswer": "This pencil's brown",
    "questionTextZh": "哪种铅笔是棕色的？",
    "expectedAnswerZh": "这支铅笔是棕色的"
  },
  {
    "id": "s1_l2_q31",
    "stageId": 1,
    "lessonId": 2,
    "questionText": "Which book's open?",
    "expectedAnswer": "This book's open",
    "questionTextZh": "哪本书打开了？",
    "expectedAnswerZh": "这本书已经打开了"
  },
  {
    "id": "s1_l2_q32",
    "stageId": 1,
    "lessonId": 2,
    "questionText": "Which book's closed?",
    "expectedAnswer": "This book's closed",
    "questionTextZh": "哪本书关了？",
    "expectedAnswerZh": "这本书已经关了"
  },
  {
    "id": "s1_l3_q1",
    "stageId": 1,
    "lessonId": 3,
    "questionText": "What colour's this pencil?",
    "expectedAnswer": "This pencil's black",
    "questionTextZh": "这支铅笔是什么颜色的？",
    "expectedAnswerZh": "这支铅笔是黑色的"
  },
  {
    "id": "s1_l3_q2",
    "stageId": 1,
    "lessonId": 3,
    "questionText": "What colour's that pencil?",
    "expectedAnswer": "That pencil's white",
    "questionTextZh": "那支铅笔是什么颜色的？",
    "expectedAnswerZh": "那支铅笔是白色的"
  },
  {
    "id": "s1_l3_q3",
    "stageId": 1,
    "lessonId": 3,
    "questionText": "Where's this pencil?",
    "expectedAnswer": "This pencil's on the Chart",
    "questionTextZh": "这支铅笔在哪里？",
    "expectedAnswerZh": "这支铅笔在图表上"
  },
  {
    "id": "s1_l3_q4",
    "stageId": 1,
    "lessonId": 3,
    "questionText": "Where's that pencil?",
    "expectedAnswer": "That pencil's on the wall",
    "questionTextZh": "那支铅笔在哪里？",
    "expectedAnswerZh": "那支铅笔在墙上"
  },
  {
    "id": "s1_l3_q5",
    "stageId": 1,
    "lessonId": 3,
    "questionText": "What's the plural of \"book\"?",
    "expectedAnswer": "The plural of \"book\" is \"books\"",
    "questionTextZh": "“书”的复数是什么？",
    "expectedAnswerZh": "“书”的复数是“书”"
  },
  {
    "id": "s1_l3_q6",
    "stageId": 1,
    "lessonId": 3,
    "questionText": "What's the plural of \"clock\"?",
    "expectedAnswer": "The plural of \"clock\" is \"clocks\"",
    "questionTextZh": "“时钟”的复数是什么？",
    "expectedAnswerZh": "“时钟”的复数是“clocks”"
  },
  {
    "id": "s1_l3_q7",
    "stageId": 1,
    "lessonId": 3,
    "questionText": "What's the plural of \"wall\"?",
    "expectedAnswer": "The plural of \"wall\" is \"walls\"",
    "questionTextZh": "“墙”的复数是什么？",
    "expectedAnswerZh": "“墙”的复数是“walls”"
  },
  {
    "id": "s1_l3_q8",
    "stageId": 1,
    "lessonId": 3,
    "questionText": "Are we sitting?",
    "expectedAnswer": "Yes, we're sitting",
    "questionTextZh": "我们坐着吗？",
    "expectedAnswerZh": "是的，我们坐着"
  },
  {
    "id": "s1_l3_q9",
    "stageId": 1,
    "lessonId": 3,
    "questionText": "Where are we sitting?",
    "expectedAnswer": "We're sitting on the chairs",
    "questionTextZh": "我们坐在哪里？",
    "expectedAnswerZh": "我们坐在椅子上"
  },
  {
    "id": "s1_l3_q10",
    "stageId": 1,
    "lessonId": 3,
    "questionText": "Are they standing?",
    "expectedAnswer": "Yes, they're standing",
    "questionTextZh": "他们站着吗？",
    "expectedAnswerZh": "是的，他们站着"
  },
  {
    "id": "s1_l3_q11",
    "stageId": 1,
    "lessonId": 3,
    "questionText": "Where are they standing?",
    "expectedAnswer": "They're standing in front of the house",
    "questionTextZh": "他们站在哪里？",
    "expectedAnswerZh": "他们站在房子前面"
  },
  {
    "id": "s1_l3_q12",
    "stageId": 1,
    "lessonId": 3,
    "questionText": "Are we standing?",
    "expectedAnswer": "No, we aren't standing; we're sitting",
    "questionTextZh": "我们站着吗？",
    "expectedAnswerZh": "不，我们不是站着，而是站着。我们坐着"
  },
  {
    "id": "s1_l3_q13",
    "stageId": 1,
    "lessonId": 3,
    "questionText": "Are we sitting on the ʞoor?",
    "expectedAnswer": "No, we aren't sitting on the floor; we're sitting on the chairs",
    "questionTextZh": "我们坐在地板上吗？",
    "expectedAnswerZh": "不，我们不是坐在地板上；而是坐在地板上。我们坐在椅子上"
  },
  {
    "id": "s1_l3_q14",
    "stageId": 1,
    "lessonId": 3,
    "questionText": "Are they sitting?",
    "expectedAnswer": "No, they aren't sitting; they're standing",
    "questionTextZh": "他们坐着吗？",
    "expectedAnswerZh": "不，他们不是坐着；而是坐着。他们站着"
  },
  {
    "id": "s1_l3_q15",
    "stageId": 1,
    "lessonId": 3,
    "questionText": "Are they standing behind the house?",
    "expectedAnswer": "No, they aren't standing behind the house; they're standing in front of the house",
    "questionTextZh": "他们站在房子后面吗？",
    "expectedAnswerZh": "不，他们不是站在房子后面；而是站在房子后面。他们站在房子前面"
  },
  {
    "id": "s1_l3_q16",
    "stageId": 1,
    "lessonId": 3,
    "questionText": "What colour's this pencil?",
    "expectedAnswer": "This pencil's red, blue etc.",
    "questionTextZh": "这支铅笔是什么颜色的？",
    "expectedAnswerZh": "这支铅笔有红色、蓝色等。"
  },
  {
    "id": "s1_l3_q17",
    "stageId": 1,
    "lessonId": 3,
    "questionText": "What colour are these pencils?",
    "expectedAnswer": "These pencils are black and green",
    "questionTextZh": "这些铅笔是什么颜色的？",
    "expectedAnswerZh": "这些铅笔是黑色和绿色的"
  },
  {
    "id": "s1_l3_q18",
    "stageId": 1,
    "lessonId": 3,
    "questionText": "What colour are those pencils?",
    "expectedAnswer": "Those pencils are white and brown",
    "questionTextZh": "这些铅笔是什么颜色的？",
    "expectedAnswerZh": "这些铅笔是白色和棕色的"
  },
  {
    "id": "s1_l3_q19",
    "stageId": 1,
    "lessonId": 3,
    "questionText": "Where are these pencils?",
    "expectedAnswer": "These pencils are on the Chart",
    "questionTextZh": "这些铅笔在哪里？",
    "expectedAnswerZh": "这些铅笔在图表上"
  },
  {
    "id": "s1_l3_q20",
    "stageId": 1,
    "lessonId": 3,
    "questionText": "Where are those pencils?",
    "expectedAnswer": "Those pencils are on the wall",
    "questionTextZh": "那些铅笔在哪里？",
    "expectedAnswerZh": "那些铅笔在墙上"
  },
  {
    "id": "s1_l3_q21",
    "stageId": 1,
    "lessonId": 3,
    "questionText": "What colour are these chairs?",
    "expectedAnswer": "These chairs are black.",
    "questionTextZh": "这些椅子是什么颜色的？",
    "expectedAnswerZh": "这些椅子是黑色的。"
  },
  {
    "id": "s1_l3_q22",
    "stageId": 1,
    "lessonId": 3,
    "questionText": "What colour are those chairs?",
    "expectedAnswer": "Those chairs are black.",
    "questionTextZh": "那些椅子是什么颜色的？",
    "expectedAnswerZh": "那些椅子是黑色的。"
  },
  {
    "id": "s1_l3_q23",
    "stageId": 1,
    "lessonId": 3,
    "questionText": "What's the plural of \"man\"?",
    "expectedAnswer": "The plural of \"man\" is \"men\"",
    "questionTextZh": "“人”的复数形式是什么？",
    "expectedAnswerZh": "“man”的复数是“men”"
  },
  {
    "id": "s1_l3_q24",
    "stageId": 1,
    "lessonId": 3,
    "questionText": "What's the plural of \"woman\"?",
    "expectedAnswer": "The plural of \"woman\" is \"women\"",
    "questionTextZh": "“女人”的复数是什么？",
    "expectedAnswerZh": "“女人”的复数是“女人”"
  },
  {
    "id": "s1_l3_q25",
    "stageId": 1,
    "lessonId": 3,
    "questionText": "What are these?",
    "expectedAnswer": "These are clothes",
    "questionTextZh": "这些是什么？",
    "expectedAnswerZh": "这些是衣服"
  },
  {
    "id": "s1_l3_q26",
    "stageId": 1,
    "lessonId": 3,
    "questionText": "What's this?",
    "expectedAnswer": "It's a shoe, boot etc.",
    "questionTextZh": "这是什么？",
    "expectedAnswerZh": "是鞋子、靴子等。"
  },
  {
    "id": "s1_l3_q27",
    "stageId": 1,
    "lessonId": 3,
    "questionText": "What are these?",
    "expectedAnswer": "These are trousers",
    "questionTextZh": "这些是什么？",
    "expectedAnswerZh": "这是裤子"
  },
  {
    "id": "s1_l3_q28",
    "stageId": 1,
    "lessonId": 3,
    "questionText": "What letter's this?",
    "expectedAnswer": "A, B, etc.",
    "questionTextZh": "这是什么字母？",
    "expectedAnswerZh": "A、B 等"
  },
  {
    "id": "s1_l3_q29",
    "stageId": 1,
    "lessonId": 3,
    "questionText": "What are these?",
    "expectedAnswer": "These are the five vowels",
    "questionTextZh": "这些是什么？",
    "expectedAnswerZh": "这是五个元音"
  },
  {
    "id": "s1_l3_q30",
    "stageId": 1,
    "lessonId": 3,
    "questionText": "What are the ʝve vowels?",
    "expectedAnswer": "The five vowels are A, E, I ,O, U",
    "questionTextZh": "ʝve 元音是什么？",
    "expectedAnswerZh": "五个元音是 A、E、I、O、U"
  },
  {
    "id": "s1_l3_q31",
    "stageId": 1,
    "lessonId": 3,
    "questionText": "Is the letter B a vowel?",
    "expectedAnswer": "No, the letter B isn't a vowel; it's a consonant",
    "questionTextZh": "字母 B 是元音吗？",
    "expectedAnswerZh": "不，字母 B 不是元音；这是一个辅音"
  },
  {
    "id": "s1_l3_q32",
    "stageId": 1,
    "lessonId": 3,
    "questionText": "Which letter's before E?",
    "expectedAnswer": "D's before E",
    "questionTextZh": "E之前是哪个字母？",
    "expectedAnswerZh": "D 在 E 之前"
  },
  {
    "id": "s1_l3_q33",
    "stageId": 1,
    "lessonId": 3,
    "questionText": "Which letter's after I?",
    "expectedAnswer": "J's after I",
    "questionTextZh": "I 之后是哪个字母？",
    "expectedAnswerZh": "J在我之后"
  },
  {
    "id": "s1_l3_q34",
    "stageId": 1,
    "lessonId": 3,
    "questionText": "Which letter's before Z?",
    "expectedAnswer": "Y's before Z",
    "questionTextZh": "Z 之前是哪个字母？",
    "expectedAnswerZh": "Y 在 Z 之前"
  },
  {
    "id": "s1_l3_q35",
    "stageId": 1,
    "lessonId": 3,
    "questionText": "Which letter's after G?",
    "expectedAnswer": "H's after G",
    "questionTextZh": "G后面是哪个字母？",
    "expectedAnswerZh": "H在G之后"
  },
  {
    "id": "s1_l4_q1",
    "stageId": 1,
    "lessonId": 4,
    "questionText": "Which letter's between D and F?",
    "expectedAnswer": "E's between D and F",
    "questionTextZh": "D 和 F 之间是哪个字母？",
    "expectedAnswerZh": "E 位于 D 和 F 之间"
  },
  {
    "id": "s1_l4_q2",
    "stageId": 1,
    "lessonId": 4,
    "questionText": "Which letter's between H and J?",
    "expectedAnswer": "I's between H and J",
    "questionTextZh": "H 和 J 之间是哪个字母？",
    "expectedAnswerZh": "我在H和J之间"
  },
  {
    "id": "s1_l4_q3",
    "stageId": 1,
    "lessonId": 4,
    "questionText": "Which letter's between Q and S?",
    "expectedAnswer": "R's between Q and S",
    "questionTextZh": "Q 和 S 之间是哪个字母？",
    "expectedAnswerZh": "R 位于 Q 和 S 之间"
  },
  {
    "id": "s1_l4_q4",
    "stageId": 1,
    "lessonId": 4,
    "questionText": "Where's the table?",
    "expectedAnswer": "The table's in front of us",
    "questionTextZh": "桌子在哪里？",
    "expectedAnswerZh": "桌子就在我们前面"
  },
  {
    "id": "s1_l4_q5",
    "stageId": 1,
    "lessonId": 4,
    "questionText": "Are the walls in front of us?",
    "expectedAnswer": "No, the walls aren't in front of us; they're behind us",
    "questionTextZh": "我们面前是墙壁吗？",
    "expectedAnswerZh": "不，墙不在我们面前；墙不在我们面前；他们在我们身后"
  },
  {
    "id": "s1_l4_q6",
    "stageId": 1,
    "lessonId": 4,
    "questionText": "Is the table behind us?",
    "expectedAnswer": "No, the table isn't behind us; it's in front of us",
    "questionTextZh": "桌子在我们后面吗？",
    "expectedAnswerZh": "不，桌子不在我们身后；它不在我们身后。它就在我们面前"
  },
  {
    "id": "s1_l4_q7",
    "stageId": 1,
    "lessonId": 4,
    "questionText": "Where's the house?",
    "expectedAnswer": "The house's behind them",
    "questionTextZh": "房子在哪儿？",
    "expectedAnswerZh": "房子在他们身后"
  },
  {
    "id": "s1_l4_q8",
    "stageId": 1,
    "lessonId": 4,
    "questionText": "Are you behind them?",
    "expectedAnswer": "No, I'm not behind them; I'm in front of them",
    "questionTextZh": "你在他们后面吗？",
    "expectedAnswerZh": "不，我并不落后于他们；我并不落后于他们。我在他们面前"
  },
  {
    "id": "s1_l4_q9",
    "stageId": 1,
    "lessonId": 4,
    "questionText": "Am I in front of them?",
    "expectedAnswer": "No, you aren't in front of them; you're behind them",
    "questionTextZh": "我在他们面前吗？",
    "expectedAnswerZh": "不，你不在他们面前；你在他们后面"
  },
  {
    "id": "s1_l4_q10",
    "stageId": 1,
    "lessonId": 4,
    "questionText": "Am I a student?",
    "expectedAnswer": "No, you aren't a student; you're the teacher",
    "questionTextZh": "我是学生吗？",
    "expectedAnswerZh": "不，你不是学生；你是老师"
  },
  {
    "id": "s1_l4_q11",
    "stageId": 1,
    "lessonId": 4,
    "questionText": "Are you the teacher?",
    "expectedAnswer": "No, I'm not the teacher; I'm a student",
    "questionTextZh": "你是老师吗？",
    "expectedAnswerZh": "不，我不是老师；我是老师。我是一名学生"
  },
  {
    "id": "s1_l4_q12",
    "stageId": 1,
    "lessonId": 4,
    "questionText": "What number's this?",
    "expectedAnswer": "30, 40 etc.",
    "questionTextZh": "这是什么号码？",
    "expectedAnswerZh": "30、40 等"
  },
  {
    "id": "s1_l4_q13",
    "stageId": 1,
    "lessonId": 4,
    "questionText": "What numbers are these?",
    "expectedAnswer": "30–13; 40–14 etc.",
    "questionTextZh": "这些是什么数字？",
    "expectedAnswerZh": "30–13； 40–14 等"
  },
  {
    "id": "s1_l4_q14",
    "stageId": 1,
    "lessonId": 4,
    "questionText": "What number's this?",
    "expectedAnswer": "313 1,815 1,950,630",
    "questionTextZh": "这是什么号码？",
    "expectedAnswerZh": "313 1,815 1,950,630"
  },
  {
    "id": "s1_l4_q15",
    "stageId": 1,
    "lessonId": 4,
    "questionText": "What's this?",
    "expectedAnswer": "It's 2 + 2 = 4 how much",
    "questionTextZh": "这是什么？",
    "expectedAnswerZh": "2 + 2 = 4 是多少"
  },
  {
    "id": "s1_l4_q16",
    "stageId": 1,
    "lessonId": 4,
    "questionText": "How much is 13 plus 5?",
    "expectedAnswer": "13 plus 5 equals 18",
    "questionTextZh": "13加5等于多少？",
    "expectedAnswerZh": "13 加 5 等于 18"
  },
  {
    "id": "s1_l4_q17",
    "stageId": 1,
    "lessonId": 4,
    "questionText": "How much is?",
    "expectedAnswer": "18 + 40 5 + 10",
    "questionTextZh": "多少钱？",
    "expectedAnswerZh": "18+40 5+10"
  },
  {
    "id": "s1_l4_q18",
    "stageId": 1,
    "lessonId": 4,
    "questionText": "Is there a pen on this book?",
    "expectedAnswer": "Yes, there's a pen on this book",
    "questionTextZh": "这本书上有笔吗？",
    "expectedAnswerZh": "是的，这本书上有一支笔"
  },
  {
    "id": "s1_l4_q19",
    "stageId": 1,
    "lessonId": 4,
    "questionText": "Is there a light on the ceiling?",
    "expectedAnswer": "Yes, there's a light on the ceiling",
    "questionTextZh": "天花板上有灯吗？",
    "expectedAnswerZh": "是的，天花板上有一盏灯"
  },
  {
    "id": "s1_l4_q20",
    "stageId": 1,
    "lessonId": 4,
    "questionText": "Is there a bag in this room?",
    "expectedAnswer": "Yes, there's a bag in this room",
    "questionTextZh": "这个房间里有包吗？",
    "expectedAnswerZh": "是的，这个房间里有一个包"
  },
  {
    "id": "s1_l4_q21",
    "stageId": 1,
    "lessonId": 4,
    "questionText": "Is there a pen on the book?",
    "expectedAnswer": "Yes, there's a pen on the book",
    "questionTextZh": "书上有笔吗？",
    "expectedAnswerZh": "是的，书上有一支笔"
  },
  {
    "id": "s1_l4_q22",
    "stageId": 1,
    "lessonId": 4,
    "questionText": "Are there two pens on the book now?",
    "expectedAnswer": "Yes, there are two pens",
    "questionTextZh": "现在书上有两支笔吗？",
    "expectedAnswerZh": "是的，有两支笔"
  },
  {
    "id": "s1_l4_q23",
    "stageId": 1,
    "lessonId": 4,
    "questionText": "Are there (12) chairs in this room?",
    "expectedAnswer": "Yes, there are (12) chairs in this room",
    "questionTextZh": "这个房间里有 (12) 张椅子吗？",
    "expectedAnswerZh": "是的，这个房间有（12）把椅子"
  },
  {
    "id": "s1_l4_q24",
    "stageId": 1,
    "lessonId": 4,
    "questionText": "Are there (2) pictures on these walls?",
    "expectedAnswer": "Yes, there are (2) pictures on these walls",
    "questionTextZh": "这些墙上有 (2) 张照片吗？",
    "expectedAnswerZh": "是的，这些墙上有 (2) 张照片"
  },
  {
    "id": "s1_l4_q25",
    "stageId": 1,
    "lessonId": 4,
    "questionText": "Is there a pen on the book?",
    "expectedAnswer": "No, there isn't a pen on the book",
    "questionTextZh": "书上有笔吗？",
    "expectedAnswerZh": "不，书上没有笔"
  },
  {
    "id": "s1_l4_q26",
    "stageId": 1,
    "lessonId": 4,
    "questionText": "Is there a book on the ʞoor?",
    "expectedAnswer": "No, there isn't a book on the floor",
    "questionTextZh": "地上有一本书吗？",
    "expectedAnswerZh": "不，地板上没有书"
  },
  {
    "id": "s1_l4_q27",
    "stageId": 1,
    "lessonId": 4,
    "questionText": "Is there a clock on the table?",
    "expectedAnswer": "No, there isn't a clock on the table",
    "questionTextZh": "桌子上有钟吗？",
    "expectedAnswerZh": "不，桌子上没有时钟"
  },
  {
    "id": "s1_l4_q28",
    "stageId": 1,
    "lessonId": 4,
    "questionText": "Are there three clocks on that wall?",
    "expectedAnswer": "No, there aren't three clocks on that wall; there's one clock on that wall",
    "questionTextZh": "那堵墙上有三个钟吗？",
    "expectedAnswerZh": "不，那堵墙上并没有三个钟，而是三个钟。那堵墙上有一个钟"
  },
  {
    "id": "s1_l4_q29",
    "stageId": 1,
    "lessonId": 4,
    "questionText": "Are there a hundred pictures in this room?",
    "expectedAnswer": "No, there aren't a hundred pictures in this room; there are only four pictures in this room.",
    "questionTextZh": "这个房间里有一百张照片吗？",
    "expectedAnswerZh": "不，这个房间里没有一百张照片；这个房间里只有四张照片。"
  },
  {
    "id": "s1_l4_q30",
    "stageId": 1,
    "lessonId": 4,
    "questionText": "Are there a thousand chairs in this room?",
    "expectedAnswer": "No, there aren't a thousand chairs in this room; there are only ten chairs in this room.",
    "questionTextZh": "这个房间里有一千张椅子吗？",
    "expectedAnswerZh": "不，这个房间里没有一千张椅子；这个房间里只有十把椅子。"
  },
  {
    "id": "s1_l4_q31",
    "stageId": 1,
    "lessonId": 4,
    "questionText": "Is the chair high?",
    "expectedAnswer": "No, the chair isn't high; it's low",
    "questionTextZh": "椅子高吗？",
    "expectedAnswerZh": "不，椅子不高；很低"
  },
  {
    "id": "s1_l4_q32",
    "stageId": 1,
    "lessonId": 4,
    "questionText": "Is the wall low?",
    "expectedAnswer": "No, the wall isn't low; it's high",
    "questionTextZh": "墙低吗？",
    "expectedAnswerZh": "不，墙并不低；很高"
  },
  {
    "id": "s1_l4_q33",
    "stageId": 1,
    "lessonId": 4,
    "questionText": "Is the table high?",
    "expectedAnswer": "No, the table isn't high; it's low",
    "questionTextZh": "桌子高吗？",
    "expectedAnswerZh": "不，桌子不高；很低"
  },
  {
    "id": "s1_l5_q1",
    "stageId": 1,
    "lessonId": 5,
    "questionText": "What's he/she doing?",
    "expectedAnswer": "He's/She's taking the book",
    "questionTextZh": "他/她在做什么？",
    "expectedAnswerZh": "他/她正在拿书"
  },
  {
    "id": "s1_l5_q2",
    "stageId": 1,
    "lessonId": 5,
    "questionText": "What's he/she doing?",
    "expectedAnswer": "He's/She's opening the book",
    "questionTextZh": "他/她在做什么？",
    "expectedAnswerZh": "他/她正在打开这本书"
  },
  {
    "id": "s1_l5_q3",
    "stageId": 1,
    "lessonId": 5,
    "questionText": "What's he/she doing?",
    "expectedAnswer": "He's/She's closing the book",
    "questionTextZh": "他/她在做什么？",
    "expectedAnswerZh": "他/她正在合上书"
  },
  {
    "id": "s1_l5_q4",
    "stageId": 1,
    "lessonId": 5,
    "questionText": "What's he/she doing?",
    "expectedAnswer": "He's/She's putting the book on the table",
    "questionTextZh": "他/她在做什么？",
    "expectedAnswerZh": "他/她正在把书放在桌子上"
  },
  {
    "id": "s1_l5_q5",
    "stageId": 1,
    "lessonId": 5,
    "questionText": "Where's the black pencil?",
    "expectedAnswer": "The black pencil's here in front of me",
    "questionTextZh": "黑色铅笔在哪里？",
    "expectedAnswerZh": "黑色铅笔就在我面前"
  },
  {
    "id": "s1_l5_q6",
    "stageId": 1,
    "lessonId": 5,
    "questionText": "Where's the white pencil?",
    "expectedAnswer": "The white pencil's there on the wall",
    "questionTextZh": "白铅笔在哪里？",
    "expectedAnswerZh": "墙上有一支白铅笔"
  },
  {
    "id": "s1_l5_q7",
    "stageId": 1,
    "lessonId": 5,
    "questionText": "Are you sitting there?",
    "expectedAnswer": "No, I'm not sitting there; I'm sitting here",
    "questionTextZh": "你坐在那里吗？",
    "expectedAnswerZh": "不，我没有坐在那里；我没有坐在那里。我坐在这里"
  },
  {
    "id": "s1_l5_q8",
    "stageId": 1,
    "lessonId": 5,
    "questionText": "Is the white pencil here in front of you?",
    "expectedAnswer": "No, the white pencil isn't here in front of me; it's there on the Chart",
    "questionTextZh": "白铅笔在你面前吗？",
    "expectedAnswerZh": "不，白铅笔不在我面前；而是在我面前。它就在图表上"
  },
  {
    "id": "s1_l5_q9",
    "stageId": 1,
    "lessonId": 5,
    "questionText": "What's the capital of England?",
    "expectedAnswer": "London's the capital of England",
    "questionTextZh": "英国的首都是哪里？",
    "expectedAnswerZh": "伦敦是英格兰的首都"
  },
  {
    "id": "s1_l5_q10",
    "stageId": 1,
    "lessonId": 5,
    "questionText": "What's the capital of Russia?",
    "expectedAnswer": "Moscow's the capital of Russia",
    "questionTextZh": "俄罗斯的首都是哪里？",
    "expectedAnswerZh": "莫斯科是俄罗斯的首都"
  },
  {
    "id": "s1_l5_q11",
    "stageId": 1,
    "lessonId": 5,
    "questionText": "What's the capital of Greece?",
    "expectedAnswer": "Athens's the capital of Greece",
    "questionTextZh": "希腊的首都是哪里？",
    "expectedAnswerZh": "雅典是希腊的首都"
  },
  {
    "id": "s1_l5_q12",
    "stageId": 1,
    "lessonId": 5,
    "questionText": "What's the capital of China?",
    "expectedAnswer": "Beĳing's the capital of China",
    "questionTextZh": "中国的首都是哪里？",
    "expectedAnswerZh": "北京是中国的首都"
  },
  {
    "id": "s1_l5_q13",
    "stageId": 1,
    "lessonId": 5,
    "questionText": "What am I doing?",
    "expectedAnswer": "You're reading the book",
    "questionTextZh": "我在做什么？",
    "expectedAnswerZh": "你正在看书"
  },
  {
    "id": "s1_l5_q14",
    "stageId": 1,
    "lessonId": 5,
    "questionText": "What am I doing?",
    "expectedAnswer": "You're writing in the book",
    "questionTextZh": "我在做什么？",
    "expectedAnswerZh": "你在书上写着"
  },
  {
    "id": "s1_l5_q15",
    "stageId": 1,
    "lessonId": 5,
    "questionText": "Am I writing in the book?",
    "expectedAnswer": "No, you aren't writing in the book; you're reading the book",
    "questionTextZh": "我写在书上吗？",
    "expectedAnswerZh": "不，你不是在书中写；而是在书中。你正在看书"
  },
  {
    "id": "s1_l5_q16",
    "stageId": 1,
    "lessonId": 5,
    "questionText": "Am I reading the book?",
    "expectedAnswer": "No, you aren't reading the book; you're writing in the book",
    "questionTextZh": "我在看书吗？",
    "expectedAnswerZh": "不，你没有在读这本书；你在读这本书。你在书上写"
  },
  {
    "id": "s1_l5_q17",
    "stageId": 1,
    "lessonId": 5,
    "questionText": "What's this?",
    "expectedAnswer": "It's a coat, dress etc.",
    "questionTextZh": "这是什么？",
    "expectedAnswerZh": "就是大衣、裙子之类的。"
  },
  {
    "id": "s1_l5_q18",
    "stageId": 1,
    "lessonId": 5,
    "questionText": "What are these?",
    "expectedAnswer": "These are tights",
    "questionTextZh": "这些是什么？",
    "expectedAnswerZh": "这些是紧身衣"
  },
  {
    "id": "s1_l5_q19",
    "stageId": 1,
    "lessonId": 5,
    "questionText": "How many pictures are there on these walls?",
    "expectedAnswer": "There are four pictures on these walls.",
    "questionTextZh": "这些墙上有多少张照片？",
    "expectedAnswerZh": "这些墙上有四幅画。"
  },
  {
    "id": "s1_l5_q20",
    "stageId": 1,
    "lessonId": 5,
    "questionText": "How many clocks are there in this room?",
    "expectedAnswer": "There's one clock in this",
    "questionTextZh": "这个房间里有多少个钟？",
    "expectedAnswerZh": "这里面有一个时钟"
  },
  {
    "id": "s1_l5_q21",
    "stageId": 1,
    "lessonId": 5,
    "questionText": "How many chairs are there in this room?",
    "expectedAnswer": "There are ten chairs in this room.",
    "questionTextZh": "这个房间里有几把椅子？",
    "expectedAnswerZh": "这个房间里有十把椅子。"
  },
  {
    "id": "s1_l5_q22",
    "stageId": 1,
    "lessonId": 5,
    "questionText": "How many teachers are there in this room?",
    "expectedAnswer": "There's one teacher in this room",
    "questionTextZh": "这个房间里有多少位老师？",
    "expectedAnswerZh": "这个房间里有一位老师"
  },
  {
    "id": "s1_l5_q23",
    "stageId": 1,
    "lessonId": 5,
    "questionText": "What am I doing?",
    "expectedAnswer": "You're going to the door",
    "questionTextZh": "我在做什么？",
    "expectedAnswerZh": "你要走到门口"
  },
  {
    "id": "s1_l5_q24",
    "stageId": 1,
    "lessonId": 5,
    "questionText": "What am I doing?",
    "expectedAnswer": "You're going to the window",
    "questionTextZh": "我在做什么？",
    "expectedAnswerZh": "你走到窗边"
  },
  {
    "id": "s1_l5_q25",
    "stageId": 1,
    "lessonId": 5,
    "questionText": "Where am I going?",
    "expectedAnswer": "You're going to the wall",
    "questionTextZh": "我要去哪里？",
    "expectedAnswerZh": "你会走到墙边"
  },
  {
    "id": "s1_l5_q26",
    "stageId": 1,
    "lessonId": 5,
    "questionText": "Am I going to the door?",
    "expectedAnswer": "No, you aren't going to the door; you're going to the window",
    "questionTextZh": "我去门口吗？",
    "expectedAnswerZh": "不，你不会走到门口；你要去窗边"
  },
  {
    "id": "s1_l6_q1",
    "stageId": 1,
    "lessonId": 6,
    "questionText": "Is Greece in Asia?",
    "expectedAnswer": "No, Greece isn't in Asia; it's in Europe",
    "questionTextZh": "希腊属于亚洲吗",
    "expectedAnswerZh": "不，希腊不在亚洲；希腊不在亚洲。这是在欧洲"
  },
  {
    "id": "s1_l6_q2",
    "stageId": 1,
    "lessonId": 6,
    "questionText": "Is India in Europe?",
    "expectedAnswer": "No, India isn't in Europe; it's in Asia",
    "questionTextZh": "印度属于欧洲吗？",
    "expectedAnswerZh": "不，印度不在欧洲；印度不在欧洲。它在亚洲"
  },
  {
    "id": "s1_l6_q3",
    "stageId": 1,
    "lessonId": 6,
    "questionText": "Are France and Italy in Asia?",
    "expectedAnswer": "No, France and Italy aren't in Asia; they're in Europe",
    "questionTextZh": "法国和意大利是亚洲的吗？",
    "expectedAnswerZh": "不，法国和意大利不在亚洲；他们在欧洲"
  },
  {
    "id": "s1_l6_q4",
    "stageId": 1,
    "lessonId": 6,
    "questionText": "What are the cardinal numbers?",
    "expectedAnswer": "The cardinal numbers",
    "questionTextZh": "什么是基数词？",
    "expectedAnswerZh": "基数词"
  },
  {
    "id": "s1_l6_q5",
    "stageId": 1,
    "lessonId": 6,
    "questionText": "What are the ordinal numbers?",
    "expectedAnswer": "The ordinal numbers are 1st, 2nd, 3rd, etc.",
    "questionTextZh": "什么是序数词？",
    "expectedAnswerZh": "序数词有第一、第二、第三等。"
  },
  {
    "id": "s1_l6_q6",
    "stageId": 1,
    "lessonId": 6,
    "questionText": "Which is the first letter of the alphabet?",
    "expectedAnswer": "A's the first letter of the alphabet",
    "questionTextZh": "字母表中的第一个字母是哪个？",
    "expectedAnswerZh": "A是字母表中的第一个字母"
  },
  {
    "id": "s1_l6_q7",
    "stageId": 1,
    "lessonId": 6,
    "questionText": "Which is the third letter of the alphabet?",
    "expectedAnswer": "C's the third letter of the alphabet",
    "questionTextZh": "字母表中的第三个字母是哪个？",
    "expectedAnswerZh": "C是字母表中的第三个字母"
  },
  {
    "id": "s1_l6_q8",
    "stageId": 1,
    "lessonId": 6,
    "questionText": "Which is the fifth letter of the alphabet?",
    "expectedAnswer": "E's the fifth letter",
    "questionTextZh": "字母表中的第五个字母是哪个？",
    "expectedAnswerZh": "E是第五个字母"
  },
  {
    "id": "s1_l6_q9",
    "stageId": 1,
    "lessonId": 6,
    "questionText": "Which is the twelfth letter of the alphabet?",
    "expectedAnswer": "L's the twelfth letter of the alphabet",
    "questionTextZh": "字母表中的第十二个字母是哪个？",
    "expectedAnswerZh": "L是字母表中的第十二个字母"
  },
  {
    "id": "s1_l6_q10",
    "stageId": 1,
    "lessonId": 6,
    "questionText": "Which is the thirteenth letter of the alphabet?",
    "expectedAnswer": "M's the thirteenth letter of the alphabet",
    "questionTextZh": "字母表中的第 13 个字母是哪个？",
    "expectedAnswerZh": "M是字母表中的第13个字母"
  },
  {
    "id": "s1_l6_q11",
    "stageId": 1,
    "lessonId": 6,
    "questionText": "Which is the twentieth letter of the alphabet?",
    "expectedAnswer": "T's the twentieth letter of the alphabet",
    "questionTextZh": "字母表中的第二十个字母是哪个？",
    "expectedAnswerZh": "T是字母表中的第二十个字母"
  },
  {
    "id": "s1_l6_q12",
    "stageId": 1,
    "lessonId": 6,
    "questionText": "Which is the twenty-ʝrst letter?",
    "expectedAnswer": "U's the twenty-first letter",
    "questionTextZh": "第二十个字母是哪个？",
    "expectedAnswerZh": "U是第二十一个字母"
  },
  {
    "id": "s1_l6_q13",
    "stageId": 1,
    "lessonId": 6,
    "questionText": "Which is the twenty-third letter?",
    "expectedAnswer": "W's the twenty-third letter",
    "questionTextZh": "第二十三个字母是哪一个？",
    "expectedAnswerZh": "W是第二十三个字母"
  },
  {
    "id": "s1_l6_q14",
    "stageId": 1,
    "lessonId": 6,
    "questionText": "Which is the twenty-ʝfth letter?",
    "expectedAnswer": "Y's the twenty-fifth letter",
    "questionTextZh": "第二十个字母是哪一个？",
    "expectedAnswerZh": "Y是第二十五个字母"
  },
  {
    "id": "s1_l6_q15",
    "stageId": 1,
    "lessonId": 6,
    "questionText": "Which's the last letter of the alphabet?",
    "expectedAnswer": "Z's the last letter",
    "questionTextZh": "字母表中的最后一个字母是哪个？",
    "expectedAnswerZh": "Z是最后一个字母"
  },
  {
    "id": "s1_l6_q16",
    "stageId": 1,
    "lessonId": 6,
    "questionText": "Is A the last letter of the alphabet?",
    "expectedAnswer": "No, A isn't the last letter of the alphabet; it's the first letter of the alphabet",
    "questionTextZh": "A是字母表的最后一个字母吗？",
    "expectedAnswerZh": "不，A 不是字母表中的最后一个字母；它是字母表中的最后一个字母。这是字母表的第一个字母"
  },
  {
    "id": "s1_l6_q17",
    "stageId": 1,
    "lessonId": 6,
    "questionText": "What's he/she doing?",
    "expectedAnswer": "He's/She's giving you the book",
    "questionTextZh": "他/她在做什么？",
    "expectedAnswerZh": "他/她正在给你这本书"
  },
  {
    "id": "s1_l6_q18",
    "stageId": 1,
    "lessonId": 6,
    "questionText": "What's he/she doing?",
    "expectedAnswer": "He's/She's giving him/her the book",
    "questionTextZh": "他/她在做什么？",
    "expectedAnswerZh": "他/她正在给他/她这本书"
  },
  {
    "id": "s1_l6_q19",
    "stageId": 1,
    "lessonId": 6,
    "questionText": "Are you (French) or (German?",
    "expectedAnswer": "No, I'm not (French) or",
    "questionTextZh": "你是（法国人）还是（德国人？",
    "expectedAnswerZh": "不，我不是（法国人）或者"
  },
  {
    "id": "s1_l6_q20",
    "stageId": 1,
    "lessonId": 6,
    "questionText": "Am I (Italian) or (French?",
    "expectedAnswer": "No, you aren't (Italian) or",
    "questionTextZh": "我是（意大利人）还是（法国人？",
    "expectedAnswerZh": "不，你不是（意大利语）或"
  },
  {
    "id": "s1_l6_q21",
    "stageId": 1,
    "lessonId": 6,
    "questionText": "Are the students German or English?",
    "expectedAnswer": "The students are English.",
    "questionTextZh": "学生是德国人还是英国人？",
    "expectedAnswerZh": "学生都是英国人。"
  },
  {
    "id": "s1_l6_q22",
    "stageId": 1,
    "lessonId": 6,
    "questionText": "Is this your book?",
    "expectedAnswer": "No, it isn't my book; it's your book",
    "questionTextZh": "这是你的书吗？",
    "expectedAnswerZh": "不，这不是我的书；这不是我的书。这是你的书"
  },
  {
    "id": "s1_l6_q23",
    "stageId": 1,
    "lessonId": 6,
    "questionText": "Is that my dress?",
    "expectedAnswer": "No, it isn't your dress; it's my dress",
    "questionTextZh": "那是我的衣服吗？",
    "expectedAnswerZh": "不，这不是你的衣服；而是你的衣服。这是我的衣服"
  },
  {
    "id": "s1_l6_q24",
    "stageId": 1,
    "lessonId": 6,
    "questionText": "Are these his boots?",
    "expectedAnswer": "No, they aren't his boots; they're her boots",
    "questionTextZh": "这是他的靴子吗？",
    "expectedAnswerZh": "不，这不是他的靴子；而是他的。这是她的靴子"
  },
  {
    "id": "s1_l6_q25",
    "stageId": 1,
    "lessonId": 6,
    "questionText": "Are these her shoes?",
    "expectedAnswer": "No, they aren't her shoes; they're his shoes",
    "questionTextZh": "这是她的鞋子吗？",
    "expectedAnswerZh": "不，这不是她的鞋子；而是她的鞋子。这是他的鞋子"
  },
  {
    "id": "s1_l6_q26",
    "stageId": 1,
    "lessonId": 6,
    "questionText": "Is this his bag?",
    "expectedAnswer": "No, it isn't his bag; it's her bag",
    "questionTextZh": "这是他的包吗？",
    "expectedAnswerZh": "不，这不是他的包；这不是他的。这是她的包"
  },
  {
    "id": "s1_l6_q27",
    "stageId": 1,
    "lessonId": 6,
    "questionText": "Is this her suit?",
    "expectedAnswer": "No, it isn't her suit; it's his suit",
    "questionTextZh": "这是她的套装吗？",
    "expectedAnswerZh": "不，这不是她的套装；而是她的衣服。这是他的西装"
  },
  {
    "id": "s1_l6_q28",
    "stageId": 1,
    "lessonId": 6,
    "questionText": "What colour's his suit?",
    "expectedAnswer": "His suit's black",
    "questionTextZh": "他的西装是什么颜色的？",
    "expectedAnswerZh": "他的西装是黑色的"
  },
  {
    "id": "s1_l6_q29",
    "stageId": 1,
    "lessonId": 6,
    "questionText": "Are these our shoes?",
    "expectedAnswer": "No, they aren't our shoes; they're their shoes",
    "questionTextZh": "这是我们的鞋子吗？",
    "expectedAnswerZh": "不，它们不是我们的鞋子；它们是我们的鞋子。他们是他们的鞋子"
  },
  {
    "id": "s1_l6_q30",
    "stageId": 1,
    "lessonId": 6,
    "questionText": "What colour are their shoes?",
    "expectedAnswer": "Their shoes are black",
    "questionTextZh": "他们的鞋子是什么颜色的？",
    "expectedAnswerZh": "他们的鞋子是黑色的"
  },
  {
    "id": "s1_l6_q31",
    "stageId": 1,
    "lessonId": 6,
    "questionText": "Are these their books?",
    "expectedAnswer": "No, these aren't their books; they're our books",
    "questionTextZh": "这些是他们的书吗？",
    "expectedAnswerZh": "不，这些不是他们的书；而是他们的书。它们是我们的书"
  },
  {
    "id": "s1_l6_q32",
    "stageId": 1,
    "lessonId": 6,
    "questionText": "Where are our books?",
    "expectedAnswer": "Our books are on the table(s)",
    "questionTextZh": "我们的书在哪里？",
    "expectedAnswerZh": "我们的书在桌子上"
  },
  {
    "id": "s1_l6_q33",
    "stageId": 1,
    "lessonId": 6,
    "questionText": "Are all the walls in this room white (or green or blue etc?",
    "expectedAnswer": "Yes, all the walls in this room are white",
    "questionTextZh": "这个房间里的所有墙壁都是白色的（还是绿色或蓝色等？",
    "expectedAnswerZh": "是的，这个房间的所有墙壁都是白色的"
  },
  {
    "id": "s1_l6_q34",
    "stageId": 1,
    "lessonId": 6,
    "questionText": "Are all the books in this room English books?",
    "expectedAnswer": "Yes, all the books in this",
    "questionTextZh": "这个房间里的书都是英文书吗？",
    "expectedAnswerZh": "是的，这本书里的所有书"
  },
  {
    "id": "s1_l6_q35",
    "stageId": 1,
    "lessonId": 6,
    "questionText": "Are all the students sitting?",
    "expectedAnswer": "Yes, all the students are sitting",
    "questionTextZh": "同学们都坐了吗？",
    "expectedAnswerZh": "是的，所有的学生都坐着"
  },
  {
    "id": "s1_l7_q1",
    "stageId": 1,
    "lessonId": 7,
    "questionText": "What's the plural of \"person\"?",
    "expectedAnswer": "The plural of \"person\" is \"people\"",
    "questionTextZh": "“人”的复数形式是什么？",
    "expectedAnswerZh": "“人”的复数是“人”"
  },
  {
    "id": "s1_l7_q2",
    "stageId": 1,
    "lessonId": 7,
    "questionText": "How many people are there in this room?",
    "expectedAnswer": "There are twelve people in this room.",
    "questionTextZh": "这个房间里有多少人？",
    "expectedAnswerZh": "这个房间里有十二个人。"
  },
  {
    "id": "s1_l7_q3",
    "stageId": 1,
    "lessonId": 7,
    "questionText": "How many people are there in this town?",
    "expectedAnswer": "There are millions of people in this town.",
    "questionTextZh": "这个镇上有多少人？",
    "expectedAnswerZh": "这个镇上有数百万人。"
  },
  {
    "id": "s1_l7_q4",
    "stageId": 1,
    "lessonId": 7,
    "questionText": "What am I doing?",
    "expectedAnswer": "You're coming from the door",
    "questionTextZh": "我在做什么？",
    "expectedAnswerZh": "你从门口来"
  },
  {
    "id": "s1_l7_q5",
    "stageId": 1,
    "lessonId": 7,
    "questionText": "Am I coming from the window?",
    "expectedAnswer": "No, you aren't coming from the window; you're going to the window",
    "questionTextZh": "我是从窗户进来的吗？",
    "expectedAnswerZh": "不，你不是从窗户进来的；你是从窗户进来的。你要去窗边"
  },
  {
    "id": "s1_l7_q6",
    "stageId": 1,
    "lessonId": 7,
    "questionText": "Am I going to the window?",
    "expectedAnswer": "No, you aren't going to the window; you're coming from the window",
    "questionTextZh": "我要去窗边吗？",
    "expectedAnswerZh": "不，你不会走到窗边；你从窗口过来"
  },
  {
    "id": "s1_l7_q7",
    "stageId": 1,
    "lessonId": 7,
    "questionText": "What am I doing?",
    "expectedAnswer": "You're touching the wall",
    "questionTextZh": "我在做什么？",
    "expectedAnswerZh": "你正在触摸墙壁"
  },
  {
    "id": "s1_l7_q8",
    "stageId": 1,
    "lessonId": 7,
    "questionText": "What am I doing?",
    "expectedAnswer": "You're touching the picture",
    "questionTextZh": "我在做什么？",
    "expectedAnswerZh": "你正在触摸图片"
  },
  {
    "id": "s1_l7_q9",
    "stageId": 1,
    "lessonId": 7,
    "questionText": "What's he doing?",
    "expectedAnswer": "He's touching his ear.",
    "questionTextZh": "他在做什么？",
    "expectedAnswerZh": "他正在摸他的耳朵。"
  },
  {
    "id": "s1_l7_q10",
    "stageId": 1,
    "lessonId": 7,
    "questionText": "What's this?",
    "expectedAnswer": "It's a sentence",
    "questionTextZh": "这是什么？",
    "expectedAnswerZh": "是一句话"
  },
  {
    "id": "s1_l7_q11",
    "stageId": 1,
    "lessonId": 7,
    "questionText": "What's this?",
    "expectedAnswer": "It's a word",
    "questionTextZh": "这是什么？",
    "expectedAnswerZh": "是一句话"
  },
  {
    "id": "s1_l7_q12",
    "stageId": 1,
    "lessonId": 7,
    "questionText": "How many words are there in this sentence?",
    "expectedAnswer": "There are seven words",
    "questionTextZh": "这句话有多少个字？",
    "expectedAnswerZh": "有七个字"
  },
  {
    "id": "s1_l7_q13",
    "stageId": 1,
    "lessonId": 7,
    "questionText": "Which's the ʝrst word of this sentence?",
    "expectedAnswer": "\"Verbs\" is the first word of this sentence",
    "questionTextZh": "这句话的第一个词是什么？",
    "expectedAnswerZh": "“动词”是这句话的第一个词"
  },
  {
    "id": "s1_l7_q14",
    "stageId": 1,
    "lessonId": 7,
    "questionText": "Which's the third word of this sentence?",
    "expectedAnswer": "\"Words\" is the third word of this sentence",
    "questionTextZh": "这句话的第三个词是哪个？",
    "expectedAnswerZh": "“词”是这句话的第三个词"
  },
  {
    "id": "s1_l7_q15",
    "stageId": 1,
    "lessonId": 7,
    "questionText": "Which's the ʝfth word of this sentence?",
    "expectedAnswer": "\"Use\" is the fifth word of this sentence",
    "questionTextZh": "这句话的第 5 个词是哪个？",
    "expectedAnswerZh": "“用”是这句话的第五个词"
  },
  {
    "id": "s1_l7_q16",
    "stageId": 1,
    "lessonId": 7,
    "questionText": "Which's the sixth word?",
    "expectedAnswer": "\"For\" is the sixth word of this sentence",
    "questionTextZh": "第六个字是哪个？",
    "expectedAnswerZh": "“为”是这句话的第六个词"
  },
  {
    "id": "s1_l7_q17",
    "stageId": 1,
    "lessonId": 7,
    "questionText": "Which's the last word?",
    "expectedAnswer": "\"Actions\" is the last word of this sentence",
    "questionTextZh": "最后一个词是哪个？",
    "expectedAnswerZh": "“行动”是这句话的最后一个词"
  },
  {
    "id": "s1_l7_q18",
    "stageId": 1,
    "lessonId": 7,
    "questionText": "What's this?",
    "expectedAnswer": "It's a question mark",
    "questionTextZh": "这是什么？",
    "expectedAnswerZh": "这是一个问号"
  },
  {
    "id": "s1_l7_q19",
    "stageId": 1,
    "lessonId": 7,
    "questionText": "What's this?",
    "expectedAnswer": "It's a full stop",
    "questionTextZh": "这是什么？",
    "expectedAnswerZh": "这是一个句号"
  },
  {
    "id": "s1_l7_q20",
    "stageId": 1,
    "lessonId": 7,
    "questionText": "What's this?",
    "expectedAnswer": "It's a comma",
    "questionTextZh": "这是什么？",
    "expectedAnswerZh": "这是一个逗号"
  },
  {
    "id": "s1_l7_q21",
    "stageId": 1,
    "lessonId": 7,
    "questionText": "What's this?",
    "expectedAnswer": "It's a colon",
    "questionTextZh": "这是什么？",
    "expectedAnswerZh": "这是一个冒号"
  },
  {
    "id": "s1_l7_q22",
    "stageId": 1,
    "lessonId": 7,
    "questionText": "What's this?",
    "expectedAnswer": "It's a semi-colon",
    "questionTextZh": "这是什么？",
    "expectedAnswerZh": "这是一个分号"
  },
  {
    "id": "s1_l7_q23",
    "stageId": 1,
    "lessonId": 7,
    "questionText": "What word's this?",
    "expectedAnswer": "It's the word \"umbrella\"",
    "questionTextZh": "这是什么字？",
    "expectedAnswerZh": "就是“雨伞”这个词"
  },
  {
    "id": "s1_l7_q24",
    "stageId": 1,
    "lessonId": 7,
    "questionText": "Is there an umbrella on the table?",
    "expectedAnswer": "No, there isn't an umbrella on the table",
    "questionTextZh": "桌子上有伞吗？",
    "expectedAnswerZh": "不，桌子上没有雨伞"
  },
  {
    "id": "s1_l7_q25",
    "stageId": 1,
    "lessonId": 7,
    "questionText": "What's he/she doing?",
    "expectedAnswer": "He's/She's pronouncing the word \"what\"",
    "questionTextZh": "他/她在做什么？",
    "expectedAnswerZh": "他/她正在发音“what”这个词"
  },
  {
    "id": "s1_l7_q26",
    "stageId": 1,
    "lessonId": 7,
    "questionText": "Pronounce this word, please?",
    "expectedAnswer": "Colour",
    "questionTextZh": "请发音这个词好吗？",
    "expectedAnswerZh": "颜色"
  },
  {
    "id": "s1_l7_q27",
    "stageId": 1,
    "lessonId": 7,
    "questionText": "What's he/she doing?",
    "expectedAnswer": "He's/She's pronouncing the word \"colour\"",
    "questionTextZh": "他/她在做什么？",
    "expectedAnswerZh": "他/她正在发音“颜色”这个词"
  },
  {
    "id": "s1_l7_q28",
    "stageId": 1,
    "lessonId": 7,
    "questionText": "Pronounce these words, please?",
    "expectedAnswer": "a book – an umbrella; the book – the umbrella",
    "questionTextZh": "请发音这些词好吗？",
    "expectedAnswerZh": "一本书——一把雨伞；书——伞"
  },
  {
    "id": "s1_l7_q29",
    "stageId": 1,
    "lessonId": 7,
    "questionText": "What's this?",
    "expectedAnswer": "This is the body",
    "questionTextZh": "这是什么？",
    "expectedAnswerZh": "这是身体"
  },
  {
    "id": "s1_l7_q30",
    "stageId": 1,
    "lessonId": 7,
    "questionText": "Is this her body?",
    "expectedAnswer": "No, it isn't her body; it's your body",
    "questionTextZh": "这是她的身体吗？",
    "expectedAnswerZh": "不，这不是她的身体，而是她的身体。这是你的身体"
  },
  {
    "id": "s1_l7_q31",
    "stageId": 1,
    "lessonId": 7,
    "questionText": "What part of the body is this?",
    "expectedAnswer": "This part of the body is the foot",
    "questionTextZh": "这是身体的哪一部分？",
    "expectedAnswerZh": "身体的这个部分是脚"
  },
  {
    "id": "s1_l7_q32",
    "stageId": 1,
    "lessonId": 7,
    "questionText": "What's the plural of \"foot\"?",
    "expectedAnswer": "The plural of \"foot\" is \"feet\"",
    "questionTextZh": "“脚”的复数是什么？",
    "expectedAnswerZh": "“脚”的复数是“脚”"
  },
  {
    "id": "s1_l7_q33",
    "stageId": 1,
    "lessonId": 7,
    "questionText": "What's this?",
    "expectedAnswer": "It's a leg, the back, an arm, a wrist etc.",
    "questionTextZh": "这是什么？",
    "expectedAnswerZh": "它是腿、背部、手臂、手腕等。"
  },
  {
    "id": "s1_l7_q34",
    "stageId": 1,
    "lessonId": 7,
    "questionText": "2 + 2 = 7: is that right?",
    "expectedAnswer": "No, it isn't right; it's wrong",
    "questionTextZh": "2 + 2 = 7：是这样吗？",
    "expectedAnswerZh": "不，这是不对的；这是错误的"
  },
  {
    "id": "s1_l7_q35",
    "stageId": 1,
    "lessonId": 7,
    "questionText": "The wall's high: is that wrong?",
    "expectedAnswer": "No, it isn't wrong; it's right",
    "questionTextZh": "墙很高：这是错的吗？",
    "expectedAnswerZh": "不，这并没有错；是的"
  },
  {
    "id": "s1_l7_q36",
    "stageId": 1,
    "lessonId": 7,
    "questionText": "Is it right you're Mr Brown?",
    "expectedAnswer": "No, it isn't right I'm Mr Brown; it's wrong. I'm Jack Brown.",
    "questionTextZh": "你是布朗先生吗？",
    "expectedAnswerZh": "不，我是布朗先生不对；我是布朗先生，这是不对的。这是错误的。我是杰克·布朗。"
  },
  {
    "id": "s1_l8_q1",
    "stageId": 1,
    "lessonId": 8,
    "questionText": "What's this?",
    "expectedAnswer": "It's a question",
    "questionTextZh": "这是什么？",
    "expectedAnswerZh": "这是一个问题"
  },
  {
    "id": "s1_l8_q2",
    "stageId": 1,
    "lessonId": 8,
    "questionText": "What's this?",
    "expectedAnswer": "It's an answer",
    "questionTextZh": "这是什么？",
    "expectedAnswerZh": "这是一个答案"
  },
  {
    "id": "s1_l8_q3",
    "stageId": 1,
    "lessonId": 8,
    "questionText": "Is this an answer?",
    "expectedAnswer": "No, it isn't an answer; it's a question",
    "questionTextZh": "这是一个答案吗？",
    "expectedAnswerZh": "不，这不是一个答案；而是一个答案。这是一个问题"
  },
  {
    "id": "s1_l8_q4",
    "stageId": 1,
    "lessonId": 8,
    "questionText": "What's the meaning of the word \"use\" in ..?",
    "expectedAnswer": "The meaning of the word \"use\" in  is \"\"",
    "questionTextZh": ".. 中的“使用”一词是什么意思？",
    "expectedAnswerZh": "中“使用”一词的含义是“”"
  },
  {
    "id": "s1_l8_q5",
    "stageId": 1,
    "lessonId": 8,
    "questionText": "What's the meaning of the word \"table\" in ..?",
    "expectedAnswer": "The meaning of the word \"table\" in  is \"\"",
    "questionTextZh": ".. 中的“表”一词是什么意思？",
    "expectedAnswerZh": "中“表”这个词的意思是“”"
  },
  {
    "id": "s1_l8_q6",
    "stageId": 1,
    "lessonId": 8,
    "questionText": "What's the meaning of the word \"for\" in ..?",
    "expectedAnswer": "The meaning of the word \"for\" in  is \"\"",
    "questionTextZh": ".. 中的“for”一词是什么意思？",
    "expectedAnswerZh": "中“for”的意思是“”"
  },
  {
    "id": "s1_l8_q7",
    "stageId": 1,
    "lessonId": 8,
    "questionText": "What's the meaning of the word \"chair\" in ..?",
    "expectedAnswer": "The meaning of the word \"chair\" in  is \"\"",
    "questionTextZh": ".. 中的“椅子”一词是什么意思？",
    "expectedAnswerZh": "中“椅子”一词的意思是“”"
  },
  {
    "id": "s1_l8_q8",
    "stageId": 1,
    "lessonId": 8,
    "questionText": "What's the meaning of the word \"action\" in ..?",
    "expectedAnswer": "The meaning of the word \"action\" in  is \"\" name",
    "questionTextZh": "..中的“行动”一词是什么意思？",
    "expectedAnswerZh": "“行动”一词的含义是“名称”"
  },
  {
    "id": "s1_l8_q9",
    "stageId": 1,
    "lessonId": 8,
    "questionText": "What's my name?",
    "expectedAnswer": "Your name's Mr Brown.",
    "questionTextZh": "我叫什么名字？",
    "expectedAnswerZh": "你的名字是布朗先生。"
  },
  {
    "id": "s1_l8_q10",
    "stageId": 1,
    "lessonId": 8,
    "questionText": "What's your name?",
    "expectedAnswer": "My name's Jack.",
    "questionTextZh": "你叫什么名字？",
    "expectedAnswerZh": "我叫杰克。"
  },
  {
    "id": "s1_l8_q11",
    "stageId": 1,
    "lessonId": 8,
    "questionText": "What's his name?",
    "expectedAnswer": "His name's Mr Brown",
    "questionTextZh": "他叫什么名字？",
    "expectedAnswerZh": "他的名字叫布朗先生"
  },
  {
    "id": "s1_l8_q12",
    "stageId": 1,
    "lessonId": 8,
    "questionText": "What's her name?",
    "expectedAnswer": "Her name's Mrs Brown",
    "questionTextZh": "她叫什么名字？",
    "expectedAnswerZh": "她的名字叫布朗夫人"
  },
  {
    "id": "s1_l8_q13",
    "stageId": 1,
    "lessonId": 8,
    "questionText": "What's this?",
    "expectedAnswer": "It's the head etc.",
    "questionTextZh": "这是什么？",
    "expectedAnswerZh": "就是头之类的。"
  },
  {
    "id": "s1_l8_q14",
    "stageId": 1,
    "lessonId": 8,
    "questionText": "What am I doing?",
    "expectedAnswer": "You're going to the window",
    "questionTextZh": "我在做什么？",
    "expectedAnswerZh": "你走到窗边"
  },
  {
    "id": "s1_l8_q15",
    "stageId": 1,
    "lessonId": 8,
    "questionText": "What am I doing?",
    "expectedAnswer": "You're coming from the window",
    "questionTextZh": "我在做什么？",
    "expectedAnswerZh": "你从窗户走来"
  },
  {
    "id": "s1_l8_q16",
    "stageId": 1,
    "lessonId": 8,
    "questionText": "Are you going to the window?",
    "expectedAnswer": "No, I'm not going to the window; I'm remaining on the chair",
    "questionTextZh": "你要去窗口吗？",
    "expectedAnswerZh": "不，我不会走到窗边；我仍坐在椅子上"
  },
  {
    "id": "s1_l8_q17",
    "stageId": 1,
    "lessonId": 8,
    "questionText": "Am I remaining on the chair?",
    "expectedAnswer": "No, you aren't remaining on the chair; you're going to the window",
    "questionTextZh": "我还坐在椅子上吗？",
    "expectedAnswerZh": "不，你不会留在椅子上；你会继续坐在椅子上。你要去窗边"
  },
  {
    "id": "s1_l8_q18",
    "stageId": 1,
    "lessonId": 8,
    "questionText": "What's the name of your country?",
    "expectedAnswer": "China is the name of my country.",
    "questionTextZh": "你的国家叫什么名字？",
    "expectedAnswerZh": "中国是我的国家的名字。"
  },
  {
    "id": "s1_l8_q19",
    "stageId": 1,
    "lessonId": 8,
    "questionText": "What am I doing?",
    "expectedAnswer": "You're translating a sentence",
    "questionTextZh": "我在做什么？",
    "expectedAnswerZh": "你正在翻译一个句子"
  },
  {
    "id": "s1_l8_q20",
    "stageId": 1,
    "lessonId": 8,
    "questionText": "What's he doing?",
    "expectedAnswer": "He's translating a sentence from English into Chinese.",
    "questionTextZh": "他在做什么？",
    "expectedAnswerZh": "他正在把一个句子从英文翻译成中文。"
  },
  {
    "id": "s1_l8_q21",
    "stageId": 1,
    "lessonId": 8,
    "questionText": "Who am I?",
    "expectedAnswer": "You're Mr Smith",
    "questionTextZh": "我是谁？",
    "expectedAnswerZh": "你是史密斯先生"
  },
  {
    "id": "s1_l8_q22",
    "stageId": 1,
    "lessonId": 8,
    "questionText": "Who are you?",
    "expectedAnswer": "I'm Mr Rossi",
    "questionTextZh": "你是谁？",
    "expectedAnswerZh": "我是罗西先生"
  },
  {
    "id": "s1_l8_q23",
    "stageId": 1,
    "lessonId": 8,
    "questionText": "Who's he?",
    "expectedAnswer": "He's Jack Brown",
    "questionTextZh": "他是谁？",
    "expectedAnswerZh": "他是杰克·布朗"
  },
  {
    "id": "s1_l8_q24",
    "stageId": 1,
    "lessonId": 8,
    "questionText": "Who's she?",
    "expectedAnswer": "She's Anna Brown",
    "questionTextZh": "她是谁？",
    "expectedAnswerZh": "她是安娜·布朗"
  },
  {
    "id": "s1_l8_q25",
    "stageId": 1,
    "lessonId": 8,
    "questionText": "Who are they?",
    "expectedAnswer": "They're Mr and Mrs Brown",
    "questionTextZh": "他们是谁？",
    "expectedAnswerZh": "他们是布朗先生和布朗夫人"
  },
  {
    "id": "s1_l8_q26",
    "stageId": 1,
    "lessonId": 8,
    "questionText": "How many things are there on this book?",
    "expectedAnswer": "There are three things on that book",
    "questionTextZh": "这本书里有多少东西？",
    "expectedAnswerZh": "那本书上写了三件事"
  },
  {
    "id": "s1_l8_q27",
    "stageId": 1,
    "lessonId": 8,
    "questionText": "What's the name of this thing?",
    "expectedAnswer": "The name of that thing is a tie",
    "questionTextZh": "这个东西叫什么名字？",
    "expectedAnswerZh": "那东西的名字是领带"
  },
  {
    "id": "s1_l8_q28",
    "stageId": 1,
    "lessonId": 8,
    "questionText": "What colour's this thing?",
    "expectedAnswer": "This thing's red",
    "questionTextZh": "这东西是什么颜色的？",
    "expectedAnswerZh": "这东西是红色的"
  },
  {
    "id": "s1_l8_q29",
    "stageId": 1,
    "lessonId": 8,
    "questionText": "Is Mr Brown short?",
    "expectedAnswer": "No, Mr Brown isn't short; he's tall",
    "questionTextZh": "布朗先生矮吗？",
    "expectedAnswerZh": "不，布朗先生并不矮；他个子很高。他很高"
  },
  {
    "id": "s1_l8_q30",
    "stageId": 1,
    "lessonId": 8,
    "questionText": "Is Anna Brown tall?",
    "expectedAnswer": "No, Anna Brown isn't tall; she's short",
    "questionTextZh": "安娜·布朗高吗？",
    "expectedAnswerZh": "不，安娜·布朗个子不高；她个子不高。她很矮"
  },
  {
    "id": "s1_l8_q31",
    "stageId": 1,
    "lessonId": 8,
    "questionText": "Are the people of Scandinavia short?",
    "expectedAnswer": "No, the people of Scandinavia",
    "questionTextZh": "斯堪的纳维亚半岛的人矮吗？",
    "expectedAnswerZh": "不，斯堪的纳维亚人民"
  },
  {
    "id": "s1_l8_q32",
    "stageId": 1,
    "lessonId": 8,
    "questionText": "What's this?/ It's a pen./ Is this/ a pencil/ or a book?/ Is the/ long table/ black?/ No,?",
    "expectedAnswer": "it isn't;/ it's white./ The short box/ is green./ A city is large/ but a village/ is small./ Is Mr Brown/ a man?/ Yes, he is./ Is Anna Brown/ a boy or a girl?/ She's a girl./ One, two, three,/ four, five./ Is the clock/ on the table/ or under the chair?/ No,/ it's on the wall./ What colour/ is the ceiling?",
    "questionTextZh": "这是什么？/这是一支钢笔。/这是/一支铅笔/还是一本书？//长桌/是黑色的吗？/不是，？",
    "expectedAnswerZh": "不是；/它是白色的。/短盒子/是绿色的。/城市很大/但村庄/很小。/布朗先生/是个男人吗？/是的，他是。/安娜·布朗/是男孩还是女孩？/她是女孩。/一、二、三、/四、五。/时钟/在桌子上/还是在椅子下面？/不，/在墙上。/天花板是什么颜色？"
  },
  {
    "id": "s1_l9_q1",
    "stageId": 1,
    "lessonId": 9,
    "questionText": "What's this?",
    "expectedAnswer": "It's a pen",
    "questionTextZh": "这是什么？",
    "expectedAnswerZh": "这是一支笔"
  },
  {
    "id": "s1_l9_q2",
    "stageId": 1,
    "lessonId": 9,
    "questionText": "What am I doing?",
    "expectedAnswer": "You're asking him/her a question",
    "questionTextZh": "我在做什么？",
    "expectedAnswerZh": "你在问他/她一个问题"
  },
  {
    "id": "s1_l9_q3",
    "stageId": 1,
    "lessonId": 9,
    "questionText": "What's this?",
    "expectedAnswer": "It's a hand",
    "questionTextZh": "这是什么？",
    "expectedAnswerZh": "这是一只手"
  },
  {
    "id": "s1_l9_q4",
    "stageId": 1,
    "lessonId": 9,
    "questionText": "Am I asking him/her a question?",
    "expectedAnswer": "Yes, you're asking him/her a question",
    "questionTextZh": "我在问他/她问题吗？",
    "expectedAnswerZh": "是的，你在问他/她一个问题"
  },
  {
    "id": "s1_l9_q5",
    "stageId": 1,
    "lessonId": 9,
    "questionText": "What's this?",
    "expectedAnswer": "It's a head",
    "questionTextZh": "这是什么？",
    "expectedAnswerZh": "这是一个头"
  },
  {
    "id": "s1_l9_q6",
    "stageId": 1,
    "lessonId": 9,
    "questionText": "What's he/she doing?",
    "expectedAnswer": "He's/She's answering your question",
    "questionTextZh": "他/她在做什么？",
    "expectedAnswerZh": "他/她正在回答你的问题"
  },
  {
    "id": "s1_l9_q7",
    "stageId": 1,
    "lessonId": 9,
    "questionText": "What's this?",
    "expectedAnswer": "It's a mouth",
    "questionTextZh": "这是什么？",
    "expectedAnswerZh": "是一张嘴"
  },
  {
    "id": "s1_l9_q8",
    "stageId": 1,
    "lessonId": 9,
    "questionText": "Is he/she answering my question?",
    "expectedAnswer": "Yes, he's/she's answering your question",
    "questionTextZh": "他/她在回答我的问题吗？",
    "expectedAnswerZh": "是的，他/她正在回答你的问题"
  },
  {
    "id": "s1_l9_q9",
    "stageId": 1,
    "lessonId": 9,
    "questionText": "What's the meaning of the verb \"to have\"?",
    "expectedAnswer": "The meaning of the verb \"to have\" is \"拥有\".",
    "questionTextZh": "动词“有”是什么意思？",
    "expectedAnswerZh": "动词“to have”的意思是“拥有”。"
  },
  {
    "id": "s1_l9_q10",
    "stageId": 1,
    "lessonId": 9,
    "questionText": "What's the contraction of \"I have, you have\" etc?",
    "expectedAnswer": "I've, you've etc.",
    "questionTextZh": "“我有，你有”等的缩写是什么？",
    "expectedAnswerZh": "我有，你有等等。"
  },
  {
    "id": "s1_l9_q11",
    "stageId": 1,
    "lessonId": 9,
    "questionText": "Have I got two eyes?",
    "expectedAnswer": "Yes, you've got two eyes",
    "questionTextZh": "我有两只眼睛吗？",
    "expectedAnswerZh": "是的，你有两只眼睛"
  },
  {
    "id": "s1_l9_q12",
    "stageId": 1,
    "lessonId": 9,
    "questionText": "Have you got two ears?",
    "expectedAnswer": "Yes, I've got two ears",
    "questionTextZh": "你有两只耳朵吗？",
    "expectedAnswerZh": "是的，我有两只耳朵"
  },
  {
    "id": "s1_l9_q13",
    "stageId": 1,
    "lessonId": 9,
    "questionText": "Has he got two legs?",
    "expectedAnswer": "Yes, he's got two legs",
    "questionTextZh": "他有两条腿吗？",
    "expectedAnswerZh": "是的，他有两条腿"
  },
  {
    "id": "s1_l9_q14",
    "stageId": 1,
    "lessonId": 9,
    "questionText": "Has she got two hands?",
    "expectedAnswer": "Yes, she's got two hands",
    "questionTextZh": "她有两只手吗？",
    "expectedAnswerZh": "是的，她有两只手"
  },
  {
    "id": "s1_l9_q15",
    "stageId": 1,
    "lessonId": 9,
    "questionText": "Have we got two heads?",
    "expectedAnswer": "Yes, we've got two heads",
    "questionTextZh": "我们有两个头吗？",
    "expectedAnswerZh": "是的，我们有两个头"
  },
  {
    "id": "s1_l9_q16",
    "stageId": 1,
    "lessonId": 9,
    "questionText": "Have they got four arms?",
    "expectedAnswer": "Yes, they've got four arms",
    "questionTextZh": "他们有四只手臂吗？",
    "expectedAnswerZh": "是的，他们有四只手臂"
  },
  {
    "id": "s1_l9_q17",
    "stageId": 1,
    "lessonId": 9,
    "questionText": "Are there any books on this table?",
    "expectedAnswer": "Yes, there are some",
    "questionTextZh": "这张桌子上有书吗？",
    "expectedAnswerZh": "是的，有一些"
  },
  {
    "id": "s1_l9_q18",
    "stageId": 1,
    "lessonId": 9,
    "questionText": "Are there any pictures on these walls?",
    "expectedAnswer": "Yes, there are some pictures on these walls",
    "questionTextZh": "这些墙上有照片吗？",
    "expectedAnswerZh": "是的，这些墙上有一些照片"
  },
  {
    "id": "s1_l9_q19",
    "stageId": 1,
    "lessonId": 9,
    "questionText": "Have you got any shoes on your feet?",
    "expectedAnswer": "Yes, I've got some",
    "questionTextZh": "你脚上有鞋吗？",
    "expectedAnswerZh": "是的，我有一些"
  },
  {
    "id": "s1_l9_q20",
    "stageId": 1,
    "lessonId": 9,
    "questionText": "Are there any books on the floor?",
    "expectedAnswer": "No, there aren't any",
    "questionTextZh": "地板上有书吗？",
    "expectedAnswerZh": "不，没有"
  },
  {
    "id": "s1_l9_q21",
    "stageId": 1,
    "lessonId": 9,
    "questionText": "Are there any pictures on that chair?",
    "expectedAnswer": "No, there aren't any pictures on that chair",
    "questionTextZh": "那张椅子上有照片吗？",
    "expectedAnswerZh": "不，那张椅子上没有任何照片"
  },
  {
    "id": "s1_l9_q22",
    "stageId": 1,
    "lessonId": 9,
    "questionText": "Are there any chairs on the table?",
    "expectedAnswer": "No, there aren't any",
    "questionTextZh": "桌子上有椅子吗？",
    "expectedAnswerZh": "不，没有"
  },
  {
    "id": "s1_l9_q23",
    "stageId": 1,
    "lessonId": 9,
    "questionText": "How many books are there on the table?",
    "expectedAnswer": "There are four books on the table.",
    "questionTextZh": "桌子上有多少本书？",
    "expectedAnswerZh": "桌子上有四本书。"
  },
  {
    "id": "s1_l9_q24",
    "stageId": 1,
    "lessonId": 9,
    "questionText": "How many books are there on the ʞoor?",
    "expectedAnswer": "There are none",
    "questionTextZh": "地上有多少本书？",
    "expectedAnswerZh": "没有"
  },
  {
    "id": "s1_l9_q25",
    "stageId": 1,
    "lessonId": 9,
    "questionText": "How many pictures are there on these walls?",
    "expectedAnswer": "There are four pictures on these walls.",
    "questionTextZh": "这些墙上有多少张照片？",
    "expectedAnswerZh": "这些墙上有四幅画。"
  },
  {
    "id": "s1_l9_q26",
    "stageId": 1,
    "lessonId": 9,
    "questionText": "How many pictures are there on that chair?",
    "expectedAnswer": "There are none",
    "questionTextZh": "那张椅子上有多少张照片？",
    "expectedAnswerZh": "没有"
  },
  {
    "id": "s1_l9_q27",
    "stageId": 1,
    "lessonId": 9,
    "questionText": "How many students are there in this classroom?",
    "expectedAnswer": "There are ten students in this classroom.",
    "questionTextZh": "这间教室有多少名学生？",
    "expectedAnswerZh": "这间教室里有十名学生。"
  },
  {
    "id": "s1_l9_q28",
    "stageId": 1,
    "lessonId": 9,
    "questionText": "How many students are there sitting on the ʞoor?",
    "expectedAnswer": "There are none",
    "questionTextZh": "地板上坐着多少名学生？",
    "expectedAnswerZh": "没有"
  },
  {
    "id": "s2_l14_q1",
    "stageId": 2,
    "lessonId": 14,
    "questionText": "Do you prefer studying English quickly or slowly?",
    "expectedAnswer": "I prefer studying English quickly because it improves my speaking speed and helps me think without translating.",
    "questionTextZh": "你更倾向于快速地还是缓慢地学习英语？",
    "expectedAnswerZh": "我更喜欢快速地学英语，因为能改进口语语速，帮我不用在脑中翻译就能直接用英语思考。",
    "questionTextJa": "英語を早く学ぶのとゆっくり学ぶのと、どちらが好みですか？",
    "expectedAnswerJa": "英語を早く学ぶのが好みです。スピーキングスピードが向上し、翻訳せず考えるのに役立つからです。",
    "questionTextVi": "Bạn thích học tiếng Anh nhanh hay chậm?",
    "expectedAnswerVi": "Tôi thích học tiếng Anh nhanh vì nó cải thiện hành động nói và giúp tôi tư duy không cần dịch.",
    "questionTextTh": "คุณชอบเรียนภาษาอังกฤษแบบรวดเร็วหรือแบบช้าๆ?",
    "expectedAnswerTh": "ฉันชอบเรียนภาษาอังกฤษแบบรวดเร็ว เพราะมันช่วยเพิ่มความเร็วในการพูดและช่วยให้คิดได้โดยไม่ต้องแปล",
    "questionTextId": "Apakah Anda lebih suka belajar bahasa Inggris dengan cepat atau lambat?",
    "expectedAnswerId": "Saya lebih suka belajar bahasa Inggris dengan cepat karena meningkatkan kecepatan berbicara saya dan membantu saya berpikir tanpa menerjemahkan.",
    "questionTextHi": "क्या आप अंग्रेजी जल्दी सीखना पसंद करते हैं या धीरे?",
    "expectedAnswerHi": "मैं अंग्रेजी जल्दी सीखना पसंद करता हूँ क्योंकि यह मेरी बोलने की गति को सुधारता है और मुझे बिना अनुवाद किए सोचने में मदद करता है।"
  },
  {
    "id": "s2_l14_q2",
    "stageId": 2,
    "lessonId": 14,
    "questionText": "Is it easy to express deep thoughts in a foreign language?",
    "expectedAnswer": "No, it isn't easy to express deep thoughts in a foreign language; it requires a lot of vocabulary practice and fluency.",
    "questionTextZh": "在外语中表达深刻的思想容易吗？",
    "expectedAnswerZh": "不，在外语中表达深刻的思想不容易；这需要做大量的词汇练习和流利度训练。",
    "questionTextJa": "外国語で深い考えを表現するのは簡単ですか？",
    "expectedAnswerJa": "いいえ、外国語で深い考えを表現するのは簡単ではありません。多くの語彙練習と流暢さが必要です。",
    "questionTextVi": "Có dễ dàng để diễn tả suy nghĩ sâu sắc bằng ngoại ngữ không?",
    "expectedAnswerVi": "Không, không dễ dàng diễn tả suy nghĩ sâu sắc bằng ngoại ngữ; việc này đòi hỏi luyện tập nhiều từ vựng và sự trôi chảy.",
    "questionTextTh": "การแสดงความคิดเห็นที่ลึกซึ้งในภาษาต่างประเทศทำได้ง่ายไหม?",
    "expectedAnswerTh": "ไม่ การแสดงความคิดเห็นที่ลึกซึ้งในภาษาต่างประเทศนั้นไม่ง่ายเลย ต้องอาศัยการฝึกฝนคำศัพท์และความสะกดคล่องแคล่วอย่างมาก",
    "questionTextId": "Apakah mudah mengungkapkan pikiran yang mendalam dalam bahasa asing?",
    "expectedAnswerId": "Tidak, tidak mudah mengungkapkan pikiran mendalam dalam bahasa asing; itu membutuhkan banyak latihan kosakata dan kelancaran.",
    "questionTextHi": "क्या किसी विदेशी भाषा में गहरे विचारों को व्यक्त करना आसान है?",
    "expectedAnswerHi": "नहीं, विदेशी भाषा में गहरे विचारों को व्यक्त करना आसान नहीं है; इसके लिए बहुत सारे शब्दावली अभ्यास और प्रवाह की आवश्यकता होती है।"
  },
  {
    "id": "s2_l14_q3",
    "stageId": 2,
    "lessonId": 14,
    "questionText": "What do we do when we make a grammatical mistake?",
    "expectedAnswer": "When we make a grammatical mistake, we repeat the sentence correctly immediately after the teacher's correction.",
    "questionTextZh": "当我们犯语法错误时，我们会做什么？",
    "expectedAnswerZh": "当我们犯语法错误时，我们在老师纠错后立刻正确地重复全句。",
    "questionTextJa": "文法のミスをしたとき、私たちはどうしますか？",
    "expectedAnswerJa": "文法ミスをしたときは、先生が訂正した直後に文を正しく繰り返します。",
    "questionTextVi": "Chúng ta làm gì khi mắc lỗi ngữ pháp?",
    "expectedAnswerVi": "Khi mắc lỗi ngữ pháp, chúng ta lập tức lặp lại câu đúng ngay sau khi giáo viên sửa lỗi.",
    "questionTextTh": "พวกเราทำอย่างไรเมื่อทำผิดหลักไวยากรณ์?",
    "expectedAnswerTh": "เมื่อเราทำผิดหลักไวยากรณ์ เราจะออกเสียงประโยคที่ถูกต้องทันทีหลังจากได้รับการแก้ไขจากครู",
    "questionTextId": "Apa yang kita lakukan saat membuat kesalahan tata bahasa?",
    "expectedAnswerId": "Saat kami membuat kesalahan tata bahasa, kami segera mengulangi kalimat dengan benar setelah koreksi guru.",
    "questionTextHi": "जब हम व्याकरण की गलती करते हैं तो हम क्या करते हैं?",
    "expectedAnswerHi": "जब हम व्याकरण की गलती करते हैं, तो हम शिक्षक के सुधार के तुरंत बाद वाक्य को सही ढंग से दोहराते हैं।"
  },
  {
    "id": "s3_q1",
    "stageId": 3,
    "lessonId": 21,
    "questionText": "Which is the easiest language in the world to learn?",
    "expectedAnswer": "There is no single easiest language in the world to learn, but English has relatively simple grammar compared to other languages.",
    "questionTextZh": "世界上最容易学的语言是哪一种？",
    "expectedAnswerZh": "世界上没有单一的一种最容易学的语言，但相比其他语言，英语的语法相对简单。",
    "questionTextJa": "世界で最も簡単に学べる言語はどれですか？",
    "expectedAnswerJa": "世界にこれ一つだけで最も簡単だという言語はありませんが、英語は他の言語と比べて文法が比較的単純です。",
    "questionTextVi": "Ngôn ngữ nào dễ học nhất thế giới?",
    "expectedAnswerVi": "Không có một ngôn ngữ đơn nhất nào dễ nhất thế giới, nhưng tiếng Anh có ngữ pháp tương đối đơn giản so với các ngôn ngữ khác.",
    "questionTextTh": "ภาษาใดที่เรียนง่ายที่สุดในโลก?",
    "expectedAnswerTh": "ไม่มีภาษาใดภาษาหนึ่งที่เรียนง่ายที่สุดในโลก แต่ภาษาอังกฤษมีไวยากรณ์ที่ค่อนข้างง่ายเมื่อเทียบกับภาษาอื่น",
    "questionTextId": "Bahasa apa yang paling mudah dipelajari di dunia?",
    "expectedAnswerId": "Tidak ada satu pun bahasa yang paling mudah dipelajari di dunia, tetapi bahasa Inggris memiliki tata bahasa yang relatif sederhana dibandingkan bahasa lain.",
    "questionTextHi": "सीखने के लिए दुनिया की सबसे आसान भाषा कौन सी है?",
    "expectedAnswerHi": "सीखने के लिए दुनिया में कोई एक सबसे आसान भाषा नहीं है, लेकिन अन्य भाषाओं की तुलना में अंग्रेजी में अपेक्षाकृत सरल व्याकरण है।"
  },
  {
    "id": "s3_q2",
    "stageId": 3,
    "lessonId": 22,
    "questionText": "What is the opposite of the word 'cheap'?",
    "expectedAnswer": "The opposite of the word 'cheap' is 'expensive'.",
    "questionTextZh": "单词 'cheap' (便宜) 的反义词是什么？",
    "expectedAnswerZh": "单词 'cheap' 的反义词是 'expensive' (昂贵)。",
    "questionTextJa": "「cheap（安い）」という言葉の反対語は何ですか？",
    "expectedAnswerJa": "「cheap」という言葉の反対語は「expensive（高い）」です。",
    "questionTextVi": "Trái nghĩa của từ 'cheap' là gì?",
    "expectedAnswerVi": "Trái nghĩa của từ 'cheap' là 'expensive'.",
    "questionTextTh": "คำตรงข้ามของคำว่า 'cheap' คืออะไร?",
    "expectedAnswerTh": "คำตรงข้ามของคำว่า 'cheap' คือ 'expensive'",
    "questionTextId": "Apa lawan kata dari 'cheap'?",
    "expectedAnswerId": "Lawan kata dari 'cheap' adalah 'expensive'.",
    "questionTextHi": "शब्द 'cheap' का विपरीत शब्द क्या है?",
    "expectedAnswerHi": "शब्द 'cheap' का विपरीत 'expensive' है।"
  },
  {
    "id": "s3_q3",
    "stageId": 3,
    "lessonId": 23,
    "questionText": "Do you have to write many letters in your job?",
    "expectedAnswer": "No, I don't have to write many letters in my job, but I sometimes write emails.",
    "questionTextZh": "在你的工作中，你必须写很多信件吗？",
    "expectedAnswerZh": "不，我在工作中不需要写很多信件，但有时会写电子邮件。",
    "questionTextJa": "仕事でたくさんの手紙を書く必要がありますか？",
    "expectedAnswerJa": "いいえ、仕事でたくさんの手紙を書く必要はありませんが、時々メールを書きます。",
    "questionTextVi": "Bạn có phải viết nhiều thư trong công việc của mình không?",
    "expectedAnswerVi": "Không, tôi không phải viết nhiều thư trong công việc, nhưng đôi khi tôi viết email.",
    "questionTextTh": "คุณต้องเขียนจดหมายจำนวนมากในงานของคุณใช่ไหม?",
    "expectedAnswerTh": "ไม่ใช่ ฉันไม่ต้องเขียนจดหมายจำนวนมากในงานของฉัน แต่ฉันเขียนอีเมลเป็นบางครั้ง",
    "questionTextId": "Apakah Anda harus menulis banyak surat dalam pekerjaan Anda?",
    "expectedAnswerId": "Tidak, saya tidak harus menulis banyak surat dalam pekerjaan saya, tetapi terkadang saya menulis email.",
    "questionTextHi": "क्या आपको अपने काम में कई पत्र लिखने पड़ते हैं?",
    "expectedAnswerHi": "नहीं, मुझे अपने काम में कई पत्र नहीं लिखने पड़ते, लेकिन मैं कभी-कभी ईमेल लिखता हूँ।"
  },
  {
    "id": "s4_l42_q1",
    "stageId": 4,
    "lessonId": 42,
    "questionText": "Is there any difference between the words 'quickly' and 'fast'?",
    "expectedAnswer": "Yes, there is a difference. Quickly refers to the speed at which an action is done, whereas fast describes the high rate of motion of an object.",
    "questionTextZh": "词汇 'quickly' 和 'fast' 之间有什么区别吗？",
    "expectedAnswerZh": "是的，两者有区别。Quickly是指做动作的速度，而fast描述的是物体处于高运动速率状态。",
    "questionTextJa": "「quickly」と「fast」という言葉の間に違いはありますか？",
    "expectedAnswerJa": "はい、違いがあります。「quickly」は動作が行われる速度を指し、一方「fast」は物体の高い運動速度を表します。",
    "questionTextVi": "Có sự khác biệt nào giữa các từ 'quickly' và 'fast' không?",
    "expectedAnswerVi": "Có, có sự khác biệt. 'Quickly' nói về tốc độ hành động được thực hiện, trong khi 'fast' mô tả vận tốc chuyển động cao của một vật thể.",
    "questionTextTh": "มีความแตกต่างระหว่างคำว่า 'quickly' และ 'fast' หรือไม่?",
    "expectedAnswerTh": "ใช่ มีความแตกต่าง 'quickly' หมายถึงความเร็วในกระทำสิ่งใดสิ่งหนึ่ง ในขณะที่ 'fast' อธิบายถึงอัตราความเร็วในการเคลื่อนที่ของวัตถุ",
    "questionTextId": "Apakah ada perbedaan antara kata 'quickly' dan 'fast'?",
    "expectedAnswerId": "Ya, ada perbedaan. 'Quickly' mengacu pada kecepatan suatu tindakan dilakukan, sedangkan 'fast' menggambarkan tingkat pergerakan objek yang tinggi.",
    "questionTextHi": "क्या 'quickly' और 'fast' शब्दों के बीच कोई अंतर है?",
    "expectedAnswerHi": "हाँ, एक अंतर है। 'Quickly' उस गति को संदर्भित करता है जिस पर कोई कार्य किया जाता है, जबकि 'fast' किसी वस्तु की गति की उच्च दर का वर्णन करता है।"
  },
  {
    "id": "s4_l42_q2",
    "stageId": 4,
    "lessonId": 42,
    "questionText": "What happens if you speak too slowly during a vocal muscle-reflex repetition?",
    "expectedAnswer": "If I speak too slowly during a vocal muscle repetition, the AI trainer pushes me to answer instantly, forging high-frequency muscle memory.",
    "questionTextZh": "如果你在口语肌肉反射训练中说得太慢，会发生什么？",
    "expectedAnswerZh": "如果温习中我说得太慢，系统会通过瞬时出击节奏训导我，在毫秒级反应中构建舌部肌肉记忆。",
    "questionTextJa": "VocalGymドリル中に話すのが遅すぎるとどうなりますか？",
    "expectedAnswerJa": "話すのが遅すぎると、AIコーチは即座に筋肉反射を働かせて、母国語のリズムで発音するよう導きます。",
    "questionTextVi": "Điều gì xảy ra nếu bạn nói quá chậm trong khi luyện phản xạ cơ miệng?",
    "expectedAnswerVi": "Nếu tôi nói quá chậm, HLV AI sẽ ngay lập tức hối thúc tôi nói theo quán tính, buộc cơ miệng vận động cực độ.",
    "questionTextTh": "มีอะไรเกิดขึ้นเมื่อพูดช้าเกินไปในระบบฝึกสะท้อนกลับกล้ามเนื้อปาก?",
    "expectedAnswerTh": "เมื่อฉันตอบช้าไป ระบบจะเร่งจังหวะให้ตอบอย่างทันท่วงที เพื่อสร้างเงื่อนไขสะท้อนกลับอัตโนมัติ",
    "questionTextId": "Apa yang terjadi jika Anda berbicara terlalu lambat selama latihan refleks otot vokal?",
    "expectedAnswerId": "Jika saya berbicara terlalu lambat, sistem akan mendesak saya menjawab spontan guna menempa memori refleks vokal.",
    "questionTextHi": "यदि आप मौखिक मांसपेशी-प्रतिबिंब अभ्यास के दौरान बहुत धीरे बोलते हैं तो क्या होता है?",
    "expectedAnswerHi": "यदि मैं बहुत धीरे बोलता हूँ, तो AI ट्रेनर मुझे तुरंत प्रतिक्रिया देने के लिए मजबूर करेगा ताकि स्वाभाविक मांसपेशी स्मृति बने।"
  },
  {
    "id": "s4_l42_q3",
    "stageId": 4,
    "lessonId": 42,
    "questionText": "Could you tell me the difference between 'as well' and 'too'?",
    "expectedAnswer": "There is virtually no difference between 'as well' and 'too'. Both are placed at the end of affirmative sentences, though 'as well' is slightly more formal.",
    "questionTextZh": "你能告诉我 'as well' 和 'too' 的区别吗？",
    "expectedAnswerZh": "这两者实质上没有区别。它们都放在肯定句句尾，不过 'as well' 会稍微更为正式一点。",
    "questionTextJa": "「as well」と「too」の違いを教えていただけますか？",
    "expectedAnswerJa": "「as well」と「too」にほとんど違いはありません。どちらも肯定文の最後に置かれますが、「as well」の方がややフォーマルです。",
    "questionTextVi": "Bạn có thể cho tôi biết sự khác biệt giữa 'as well' và 'too' không?",
    "expectedAnswerVi": "Hầu như không có sự khác biệt giữa 'as well' và 'too'. Cả hai đều được đặt ở cuối câu khẳng định, mặc dù 'as well' trang trọng hơn một chút.",
    "questionTextTh": "คุณช่วยบอกความแตกต่างระหว่างคำว่า 'as well' และ 'too' ได้ไหม?",
    "expectedAnswerTh": "แทบจะไม่มีความแตกต่างระหว่างคำว่า 'as well' และ 'too' ทั้งสองคำนี้จะวางไว้ที่ท้ายประโยคบอกเล่า แต่ 'as well' จะเป็นทางการมากกว่าเล็กน้อย",
    "questionTextId": "Bisakah Anda memberi tahu saya perbedaan antara 'as well' dan 'too'?",
    "expectedAnswerId": "Sebenarnya hampir tidak ada perbedaan antara 'as well' dan 'too'. Keduanya diletakkan di akhir kalimat afirmatif, meskipun 'as well' sedikit lebih formal.",
    "questionTextHi": "क्या आप मुझे 'as well' और 'too' के बीच का अंतर बता सकते हैं?",
    "expectedAnswerHi": "'as well' और 'too' के बीच लगभग कोई अंतर नहीं है। दोनों को सकारात्मक वाक्यों के अंत में रखा जाता है, हालांकि 'as well' थोड़ा अधिक औपचारिक है।"
  },
  {
    "id": "s4_l42_q4",
    "stageId": 4,
    "lessonId": 42,
    "questionText": "Does the word 'inevitable' mean something can be easily avoided?",
    "expectedAnswer": "No, the word 'inevitable' does not mean something can be avoided; it means it is absolutely certain to happen and unable to be prevented.",
    "questionTextZh": "单词 'inevitable' (不可避免) 是指事情可以轻易避免吗？",
    "expectedAnswerZh": "不，单词 'inevitable' 不是指事情可以被避免；它意味着必将发生且无法被预防。",
    "questionTextJa": "「inevitable」という言葉は、何かを簡単に回避できるという意味ですか？",
    "expectedAnswerJa": "いいえ、「inevitable」は回避できるという意味ではありません。絶対に起こることが確実で、防ぐことができないという意味です。",
    "questionTextVi": "Từ 'inevitable' có nghĩa là một cái gì đó có thể dễ dàng tránh được không?",
    "expectedAnswerVi": "Không, từ 'inevitable' không có nghĩa là điều gì đó có thể tránh được; nó có nghĩa là nó hoàn toàn chắc chắn sẽ xảy ra và không thể ngăn chặn.",
    "questionTextTh": "คำว่า 'inevitable' หมายถึงสิ่งที่หลีกเลี่ยงได้ง่ายใช่หรือไม่?",
    "expectedAnswerTh": "ไม่ใช่ คำว่า 'inevitable' ไม่ได้หมายถึงสิ่งที่หลีกเลี่ยงได้ แต่หมายถึงสิ่งที่แน่นอนว่าจะเกิดขึ้นและไม่สามารถป้องกันได้",
    "questionTextId": "Apakah kata 'inevitable' berarti sesuatu dapat dengan mudah dihindari?",
    "expectedAnswerId": "Tidak, kata 'inevitable' tidak berarti sesuatu dapat dihindari; itu berarti sesuatu yang benar-benar pasti terjadi dan tidak dapat dicegah.",
    "questionTextHi": "क्या 'inevitable' शब्द का अर्थ है कि किसी चीज़ से आसानी से बचा जा सकता है?",
    "expectedAnswerHi": "नहीं, 'inevitable' शब्द का अर्थ यह नहीं है कि किसी चीज़ से बचा जा सकता है; इसका अर्थ है कि यह पूरी तरह से निश्चित है और इसे रोका नहीं जा सकता।"
  },
  {
    "id": "s5_q1",
    "stageId": 5,
    "lessonId": 51,
    "questionText": "What would you do if you won the lottery tomorrow?",
    "expectedAnswer": "If I won the lottery tomorrow, I would travel around the world and invest in my education."
  },
  {
    "id": "s5_q2",
    "stageId": 5,
    "lessonId": 52,
    "questionText": "Is it essential to write down new vocabulary to remember it?",
    "expectedAnswer": "Yes, it is essential or at least very helpful to write down new vocabulary to reinforce what we learn."
  },
  {
    "id": "s6_q1",
    "stageId": 6,
    "lessonId": 61,
    "questionText": "What does the expression 'by all means' signify?",
    "expectedAnswer": "The expression 'by all means' signifies giving permission or expressing strong agreement enthusiastically."
  },
  {
    "id": "s6_q2",
    "stageId": 6,
    "lessonId": 62,
    "questionText": "Do you think playing video games can improve your cognitive skills?",
    "expectedAnswer": "Yes, I think playing specific video games can improve cognitive skills, such as hand-eye coordination."
  },
  {
    "id": "s7_q1",
    "stageId": 7,
    "lessonId": 71,
    "questionText": "What does it mean to set off for a journey?",
    "expectedAnswer": "To set off for a journey means to start traveling or begin a trip to a certain destination."
  },
  {
    "id": "s7_q2",
    "stageId": 7,
    "lessonId": 72,
    "questionText": "Would you rather have a boring job with high pay or an exciting job with low pay?",
    "expectedAnswer": "I would rather have an exciting job with low pay because job satisfaction is more important than wealth alone."
  },
  {
    "id": "s8_q1",
    "stageId": 8,
    "lessonId": 81,
    "questionText": "How do you define the term 'investment risk' in high-stake markets?",
    "expectedAnswer": "Investment risk is defined as the probability or likelihood of occurrence of a financial loss relative to expected returns."
  },
  {
    "id": "s9_q1",
    "stageId": 9,
    "lessonId": 91,
    "questionText": "Is a compromise always necessary during a complex business negotiation?",
    "expectedAnswer": "Yes, a compromise is often necessary during a negotiation to find common ground and establish mutual benefit."
  },
  {
    "id": "s10_q1",
    "stageId": 10,
    "lessonId": 101,
    "questionText": "What represents the highest peak of lexical proficiency in a speech?",
    "expectedAnswer": "The highest peak of lexical proficiency is represented by precise word choices, elegant idioms, and natural rhythm."
  },
  {
    "id": "s11_q1",
    "stageId": 11,
    "lessonId": 111,
    "questionText": "Does standard mastery of a language prevent you from making minor lapses?",
    "expectedAnswer": "No, standard mastery of a language does not prevent minor lapses, but it allows you to correct yourself instantly."
  },
  {
    "id": "s12_q1",
    "stageId": 12,
    "lessonId": 121,
    "questionText": "What is the ultimate benefit of achieving complete verbal fluency under pressure?",
    "expectedAnswer": "The ultimate benefit is the capacity to think, react, and converse with high speed, accuracy, and emotional resonance in any context."
  }
];

export const ALL_FLASHCARDS: Flashcard[] = [
  {
    "id": "fc_s1_pen",
    "stageId": 1,
    "word": "Pen",
    "phonetics": "/pen/",
    "definition": "An instrument for writing or drawing with ink.",
    "example": "This is a pen.",
    "isNew": true,
    "wordZh": "钢笔",
    "definitionZh": "用于用墨水书写或绘画的工具。",
    "exampleZh": "这是一支钢笔。"
  },
  {
    "id": "fc_s1_pencil",
    "stageId": 1,
    "word": "Pencil",
    "phonetics": "/ˈpen.səl/",
    "definition": "An instrument for writing or drawing, consisting of a thin stick of graphite.",
    "example": "This is a pencil.",
    "isNew": true,
    "wordZh": "铅笔",
    "definitionZh": "由石墨薄棒组成的用于书写或绘画的工具。",
    "exampleZh": "这是一支铅笔。"
  },
  {
    "id": "fc_s1_book",
    "stageId": 1,
    "word": "Book",
    "phonetics": "/bʊk/",
    "definition": "A written or printed work consisting of pages glued or sewn together.",
    "example": "This is a book.",
    "isNew": true,
    "wordZh": "书本",
    "definitionZh": "由粘合或缝合在一起的页面组成的写有字或印有字的作品。",
    "exampleZh": "这是一本书。"
  },
  {
    "id": "fc_s1_a",
    "stageId": 1,
    "word": "A",
    "phonetics": "/æɪ/",
    "definition": "The name of the Latin script letter A/a.",
    "example": "This is the word A.",
    "isNew": true,
    "wordZh": "一不定冠词",
    "definitionZh": "拉丁字母 A/a 的名称。",
    "exampleZh": "这是A字。"
  },
  {
    "id": "fc_s1_what_is__what_s_",
    "stageId": 1,
    "word": "What is (What's)",
    "phonetics": "/wɔt/",
    "definition": "(usually followed by \"with,\" but also sometimes \"would\" or \"might,\" especially in finance) In some manner or degree; in part; partly. See also what with",
    "example": "The market will calculate these higher risks in their funding costs what might result in higher lending rates.",
    "isNew": true,
    "wordZh": "是什么缩写形式",
    "definitionZh": "（通常后面跟“with”，但有时也用“would”或“might”，尤其是在金融领域）以某种方式或程度；部分；部分。另请参阅与什么",
    "exampleZh": "市场将在其融资成本中计算这些较高的风险，这可能会导致更高的贷款利率。"
  },
  {
    "id": "fc_s1_this",
    "stageId": 1,
    "word": "This",
    "phonetics": "/ðəs/",
    "definition": "To the degree or extent indicated.",
    "example": "Do we need this many recommendations?",
    "isNew": true,
    "wordZh": "这",
    "definitionZh": "达到指定的程度或程度。",
    "exampleZh": "我们需要这么多建议吗？"
  },
  {
    "id": "fc_s1_it_is___it_s",
    "stageId": 1,
    "word": "It is / It's",
    "phonetics": "/ɪt/",
    "definition": "The person who chases and tries to catch the other players in the playground game of tag.",
    "example": "In the next game, Adam and Tom will be it…",
    "isNew": true,
    "wordZh": "它是缩写形式",
    "definitionZh": "在操场上的捉人游戏中追逐并试图抓住其他玩家的人。",
    "exampleZh": "在下一场比赛中，亚当和汤姆将是……"
  },
  {
    "id": "fc_s1_table",
    "stageId": 1,
    "word": "Table",
    "phonetics": "/ˈteɪ.bəl/",
    "definition": "A piece of furniture with a flat top and one or more legs.",
    "example": "The book is on the table.",
    "isNew": true,
    "wordZh": "桌子",
    "definitionZh": "具有平坦顶面和一个或多个支腿的家具。",
    "exampleZh": "书在桌子上。"
  },
  {
    "id": "fc_s1_chair",
    "stageId": 1,
    "word": "Chair",
    "phonetics": "/tʃeər/",
    "definition": "A seat for one person, with a support for the back.",
    "example": "I am sitting on the chair.",
    "isNew": true,
    "wordZh": "椅子",
    "definitionZh": "供一人坐的椅子，带有靠背支撑。",
    "exampleZh": "我坐在椅子上。"
  },
  {
    "id": "fc_s1_light",
    "stageId": 1,
    "word": "Light",
    "phonetics": "/laɪt/",
    "definition": "A source of illumination, especially an electric lamp.",
    "example": "The light is on the ceiling.",
    "isNew": true,
    "wordZh": "灯",
    "definitionZh": "照明源，尤指电灯。",
    "exampleZh": "灯在天花板上。"
  },
  {
    "id": "fc_s1_wall",
    "stageId": 1,
    "word": "Wall",
    "phonetics": "/wɔːl/",
    "definition": "A continuous vertical structure that encloses or divides an area.",
    "example": "The picture is on the wall.",
    "isNew": true,
    "wordZh": "墙壁",
    "definitionZh": "封闭或分隔区域的连续垂直结构。",
    "exampleZh": "照片在墙上。"
  },
  {
    "id": "fc_s1_floor",
    "stageId": 1,
    "word": "Floor",
    "phonetics": "/flɔːr/",
    "definition": "The lower surface of a room, on which one stands or walks.",
    "example": "I am standing on the floor.",
    "isNew": true,
    "wordZh": "地板",
    "definitionZh": "房间的下表面，供人站立或行走。",
    "exampleZh": "我站在地板上。"
  },
  {
    "id": "fc_s1_room",
    "stageId": 1,
    "word": "Room",
    "phonetics": "/ruːm/",
    "definition": "A part of a building enclosed by walls.",
    "example": "The room is large.",
    "isNew": true,
    "wordZh": "房间",
    "definitionZh": "由墙壁封闭的建筑物的一部分。",
    "exampleZh": "这个房间很大。"
  },
  {
    "id": "fc_s1_ceiling",
    "stageId": 1,
    "word": "Ceiling",
    "phonetics": "/ˈsiː.lɪŋ/",
    "definition": "The upper interior surface of a room.",
    "example": "The light is on the ceiling.",
    "isNew": true,
    "wordZh": "天花板",
    "definitionZh": "房间的上内部表面。",
    "exampleZh": "灯在天花板上。"
  },
  {
    "id": "fc_s1_window",
    "stageId": 1,
    "word": "Window",
    "phonetics": "/ˈwɪn.dəʊ/",
    "definition": "An opening in the wall of a building to let in light and air.",
    "example": "The window is closed.",
    "isNew": true,
    "wordZh": "窗",
    "definitionZh": "建筑物墙壁上的开口，用于引入光线和空气。",
    "exampleZh": "窗户关着。"
  },
  {
    "id": "fc_s1_door",
    "stageId": 1,
    "word": "Door",
    "phonetics": "/dɔːr/",
    "definition": "A barrier used to close an entrance.",
    "example": "The door is open.",
    "isNew": true,
    "wordZh": "门",
    "definitionZh": "用于封闭入口的屏障。",
    "exampleZh": "门开着。"
  },
  {
    "id": "fc_s1_clock",
    "stageId": 1,
    "word": "Clock",
    "phonetics": "/klɒk/",
    "definition": "An instrument for measuring and showing time.",
    "example": "The clock is on the wall.",
    "isNew": true,
    "wordZh": "时钟",
    "definitionZh": "用于测量和显示时间的工具。",
    "exampleZh": "时钟在墙上。"
  },
  {
    "id": "fc_s1_box",
    "stageId": 1,
    "word": "Box",
    "phonetics": "/bɒks/",
    "definition": "A container, typically rectangular, with a lid.",
    "example": "The box is small.",
    "isNew": true,
    "wordZh": "盒子",
    "definitionZh": "有盖的容器，通常为长方形。",
    "exampleZh": "盒子很小。"
  },
  {
    "id": "fc_s1_picture",
    "stageId": 1,
    "word": "Picture",
    "phonetics": "/ˈpɪk.tʃər/",
    "definition": "A painting, drawing, or photograph.",
    "example": "The picture is on the wall.",
    "isNew": true,
    "wordZh": "照片",
    "definitionZh": "画作、绘画或照片。",
    "exampleZh": "照片在墙上。"
  },
  {
    "id": "fc_s1_is_this__",
    "stageId": 1,
    "word": "Is this \"",
    "phonetics": "/is this \"/",
    "definition": "Meaning of the word is this \".",
    "example": "This is the word is this \".",
    "isNew": true,
    "wordZh": "这是吗",
    "definitionZh": "这个词的意思是这个”。",
    "exampleZh": "就是这个词就是这个”。"
  },
  {
    "id": "fc_s1_yes",
    "stageId": 1,
    "word": "Yes",
    "phonetics": "/jes/",
    "definition": "Used to give an affirmative response.",
    "example": "Is this a pen? Yes, it is.",
    "isNew": true,
    "wordZh": "是的",
    "definitionZh": "用于给出肯定的回答。",
    "exampleZh": "这是一支钢笔吗？是的，它是。"
  },
  {
    "id": "fc_s1_no__it_is_not__isn_t_",
    "stageId": 1,
    "word": "No, it is not (isn't)",
    "phonetics": "/no, it is not (isn't)/",
    "definition": "Meaning of the word no, it is not (isn't).",
    "example": "This is the word no, it is not (isn't).",
    "isNew": true,
    "wordZh": "不它不是缩写形式",
    "definitionZh": "“不”这个词的意思是“不是”（is not）。",
    "exampleZh": "这是“不”这个词，它不是（不是）。"
  },
  {
    "id": "fc_s1_long",
    "stageId": 1,
    "word": "Long",
    "phonetics": "/lɒŋ/",
    "definition": "Measuring a great distance from end to end.",
    "example": "This table is long.",
    "isNew": true,
    "wordZh": "长的",
    "definitionZh": "从一端到另一端测量有很长距离的。",
    "exampleZh": "这张桌子很长。"
  },
  {
    "id": "fc_s1_short",
    "stageId": 1,
    "word": "Short",
    "phonetics": "/ʃɔːt/",
    "definition": "Measuring a small distance from end to end.",
    "example": "This pencil is short.",
    "isNew": true,
    "wordZh": "短的",
    "definitionZh": "从一端到另一端测量只有很短距离的。",
    "exampleZh": "这支铅笔很短。"
  },
  {
    "id": "fc_s1_the",
    "stageId": 1,
    "word": "The",
    "phonetics": "/ðiː/",
    "definition": "The definite article, referring to specific things.",
    "example": "The book is on the table.",
    "isNew": true,
    "wordZh": "这个那个定冠词",
    "definitionZh": "定冠词，指向特定的事物。",
    "exampleZh": "那本书在桌子上。"
  },
  {
    "id": "fc_s1_contraction",
    "stageId": 1,
    "word": "Contraction",
    "phonetics": "/kɒnˈtɹæk.ʃən/",
    "definition": "A period of economic decline or negative growth.",
    "example": "The country's economic contraction was caused by high oil prices.",
    "isNew": true,
    "wordZh": "缩写式",
    "definitionZh": "经济衰退或负增长的时期。",
    "exampleZh": "该国经济萎缩是由高油价造成的。"
  },
  {
    "id": "fc_s1_large",
    "stageId": 1,
    "word": "Large",
    "phonetics": "/lɑːdʒ/",
    "definition": "Of considerable or relatively great size.",
    "example": "London is a large city.",
    "isNew": true,
    "wordZh": "大的",
    "definitionZh": "相当大或相对尺寸较大的。",
    "exampleZh": "伦敦是一个大城市。"
  },
  {
    "id": "fc_s1_small",
    "stageId": 1,
    "word": "Small",
    "phonetics": "/smɔːl/",
    "definition": "Size that is less than normal or average.",
    "example": "This is a small box.",
    "isNew": true,
    "wordZh": "小的",
    "definitionZh": "尺寸小于正常或平均水平的。",
    "exampleZh": "这是一个小盒子。"
  },
  {
    "id": "fc_s1_city",
    "stageId": 1,
    "word": "City",
    "phonetics": "/ˈsɪt.i/",
    "definition": "A large town, typically an important human settlement.",
    "example": "London is a city.",
    "isNew": true,
    "wordZh": "城市",
    "definitionZh": "大型城镇，通常是重要的人类定居点。",
    "exampleZh": "伦敦是一个城市。"
  },
  {
    "id": "fc_s1_town",
    "stageId": 1,
    "word": "Town",
    "phonetics": "/taʊn/",
    "definition": "An urban area that has a name, defined boundaries, and local government, that is larger than a village.",
    "example": "Windsor is a town.",
    "isNew": true,
    "wordZh": "镇",
    "definitionZh": "具有名称、明确边界和地方政府，且大于村庄的市区。",
    "exampleZh": "温莎是一个镇。"
  },
  {
    "id": "fc_s1_village",
    "stageId": 1,
    "word": "Village",
    "phonetics": "/ˈvɪl.ɪdʒ/",
    "definition": "A group of houses and associated buildings, larger than a hamlet and smaller than a town, situated in a rural area.",
    "example": "Grantchester is a village.",
    "isNew": true,
    "wordZh": "村",
    "definitionZh": "位于农村地区，比村落大、比城镇小的一组房屋及相关建筑。",
    "exampleZh": "格兰切斯特是一个村。"
  },
  {
    "id": "fc_s1_or",
    "stageId": 1,
    "word": "Or",
    "phonetics": "/ɔːr/",
    "definition": "Used to link alternatives.",
    "example": "Is the table long or short?",
    "isNew": true,
    "wordZh": "或者",
    "definitionZh": "用于连接可选择的事物。",
    "exampleZh": "桌子是长还是短？"
  },
  {
    "id": "fc_s1_man",
    "stageId": 1,
    "word": "Man",
    "phonetics": "/mæn/",
    "definition": "An adult human male.",
    "example": "He is a man.",
    "isNew": true,
    "wordZh": "男人",
    "definitionZh": "成年男子。",
    "exampleZh": "他是一个男人。"
  },
  {
    "id": "fc_s1_woman",
    "stageId": 1,
    "word": "Woman",
    "phonetics": "/ˈwʊm.ən/",
    "definition": "An adult human female.",
    "example": "She is a woman.",
    "isNew": true,
    "wordZh": "妇女",
    "definitionZh": "成年女子。",
    "exampleZh": "她是一个妇女。"
  },
  {
    "id": "fc_s1_boy",
    "stageId": 1,
    "word": "Boy",
    "phonetics": "/bɔɪ/",
    "definition": "A male child or young man.",
    "example": "He is a boy.",
    "isNew": true,
    "wordZh": "男孩",
    "definitionZh": "男孩子或年轻男子。",
    "exampleZh": "他是个男孩。"
  },
  {
    "id": "fc_s1_girl",
    "stageId": 1,
    "word": "Girl",
    "phonetics": "/ɡɜːl/",
    "definition": "A female child or young woman.",
    "example": "She is a girl.",
    "isNew": true,
    "wordZh": "女孩",
    "definitionZh": "女孩子或年轻女子。",
    "exampleZh": "她是个女孩。"
  },
  {
    "id": "fc_s1_on",
    "stageId": 1,
    "word": "On",
    "phonetics": "/ɒn/",
    "definition": "To switch on",
    "example": "Can you on the light?",
    "isNew": true,
    "wordZh": "在之上",
    "definitionZh": "开启",
    "exampleZh": "你能开灯吗？"
  },
  {
    "id": "fc_s1_under",
    "stageId": 1,
    "word": "Under",
    "phonetics": "/ˈʊndə/",
    "definition": "Under anesthesia, especially general anesthesia; sedated.",
    "example": "Ensure the patient is sufficiently under.",
    "isNew": true,
    "wordZh": "在之下",
    "definitionZh": "麻醉下，尤其是全身麻醉下；镇静剂。",
    "exampleZh": "确保患者处于足够低的位置。"
  },
  {
    "id": "fc_s1_in",
    "stageId": 1,
    "word": "In",
    "phonetics": "/ɪn/",
    "definition": "A position of power or influence, or a way to get it.",
    "example": "His parents got him an in with the company.",
    "isNew": true,
    "wordZh": "在里面",
    "definitionZh": "权力或影响力的地位，或者获得它的方式。",
    "exampleZh": "他的父母让他加入了这家公司。"
  },
  {
    "id": "fc_s1_mr",
    "stageId": 1,
    "word": "Mr",
    "phonetics": "/mr/",
    "definition": "Meaning of the word mr.",
    "example": "This is the word mr.",
    "isNew": true,
    "wordZh": "先生",
    "definitionZh": "先生这个词的意思",
    "exampleZh": "这是先生的话。"
  },
  {
    "id": "fc_s1_mrs",
    "stageId": 1,
    "word": "Mrs",
    "phonetics": "/mrs/",
    "definition": "Meaning of the word mrs.",
    "example": "This is the word mrs.",
    "isNew": true,
    "wordZh": "太太",
    "definitionZh": "夫人这个词的意思",
    "exampleZh": "这是夫人这个词。"
  },
  {
    "id": "fc_s1_black",
    "stageId": 1,
    "word": "Black",
    "phonetics": "/blak/",
    "definition": "(in chess and similar games) The person playing with the black set of pieces.",
    "example": "At this point black makes a disastrous move.",
    "isNew": true,
    "wordZh": "黑色",
    "definitionZh": "（在国际象棋和类似游戏中）玩黑色棋子的人。",
    "exampleZh": "此时，黑棋做出了灾难性的一步。"
  },
  {
    "id": "fc_s1_white",
    "stageId": 1,
    "word": "White",
    "phonetics": "/waɪt/",
    "definition": "Bright and colourless; reflecting equal quantities of all frequencies of visible light.",
    "example": "Write in black ink on white paper.",
    "isNew": true,
    "wordZh": "白色",
    "definitionZh": "明亮无色；反射等量的所有频率的可见光。",
    "exampleZh": "用黑色墨水在白纸上书写。"
  },
  {
    "id": "fc_s1_green",
    "stageId": 1,
    "word": "Green",
    "phonetics": "/ɡɹiːn/",
    "definition": "Having green as its color.",
    "example": "The former flag of Libya is fully green.",
    "isNew": true,
    "wordZh": "绿色",
    "definitionZh": "以绿色为其颜色。",
    "exampleZh": "利比亚前国旗是全绿色的。"
  },
  {
    "id": "fc_s1_brown",
    "stageId": 1,
    "word": "Brown",
    "phonetics": "/bɹaʊn/",
    "definition": "A colour like that of chocolate or coffee.",
    "example": "The browns and greens in this painting give it a nice woodsy feel.",
    "isNew": true,
    "wordZh": "棕色",
    "definitionZh": "类似巧克力色或咖啡色的颜色。",
    "exampleZh": "这幅画中的棕色和绿色给人一种很好的森林感觉。"
  },
  {
    "id": "fc_s1_what_colour_",
    "stageId": 1,
    "word": "What colour?",
    "phonetics": "/wɔt/",
    "definition": "(usually followed by \"with,\" but also sometimes \"would\" or \"might,\" especially in finance) In some manner or degree; in part; partly. See also what with",
    "example": "The market will calculate these higher risks in their funding costs what might result in higher lending rates.",
    "isNew": true,
    "wordZh": "什么颜色",
    "definitionZh": "（通常后面跟“with”，但有时也用“would”或“might”，尤其是在金融领域）以某种方式或程度；部分；部分。另请参阅与什么",
    "exampleZh": "市场将在其融资成本中计算这些较高的风险，这可能会导致更高的贷款利率。"
  },
  {
    "id": "fc_s1_where",
    "stageId": 1,
    "word": "Where",
    "phonetics": "/wɛə(ɹ)/",
    "definition": "The place in which something happens.",
    "example": "A good article will cover the who, the what, the when, the where, the why and the how.",
    "isNew": true,
    "wordZh": "哪里",
    "definitionZh": "某事发生的地方。",
    "exampleZh": "一篇好的文章将涵盖人物、事件、时间、地点、原因和方式。"
  },
  {
    "id": "fc_s1_i_am___i_m",
    "stageId": 1,
    "word": "I am / I'm",
    "phonetics": "/i am / i'm/",
    "definition": "The name of the Latin-script letter I.",
    "example": "the position of an i-dot (the dot of an i)",
    "isNew": true,
    "wordZh": "我是缩写形式",
    "definitionZh": "拉丁字母 I 的名称。",
    "exampleZh": "i-dot 的位置（i 的点）"
  },
  {
    "id": "fc_s1_you_are___you_re",
    "stageId": 1,
    "word": "You are / You're",
    "phonetics": "/jʉː/",
    "definition": "(object pronoun) The people spoken, or written to, as an object.",
    "example": "Both of you should get ready now.",
    "isNew": true,
    "wordZh": "你是缩写形式",
    "definitionZh": "（宾语代词）作为宾语说话或写信的人。",
    "exampleZh": "你们俩现在应该做好准备了。"
  },
  {
    "id": "fc_s1_he_is___he_s",
    "stageId": 1,
    "word": "He is / He's",
    "phonetics": "/hi/",
    "definition": "A male.",
    "example": "Is your cat a he or a she?",
    "isNew": true,
    "wordZh": "他是缩写形式",
    "definitionZh": "一名男性。",
    "exampleZh": "你的猫是公猫还是母猫？"
  },
  {
    "id": "fc_s1_she_is___she_s",
    "stageId": 1,
    "word": "She is / She's",
    "phonetics": "/ʃiː/",
    "definition": "A female.",
    "example": "Pat is definitely a she.",
    "isNew": true,
    "wordZh": "她是缩写形式",
    "definitionZh": "一名女性。",
    "exampleZh": "帕特绝对是个女人。"
  },
  {
    "id": "fc_s1_i_am_not___i_m_not",
    "stageId": 1,
    "word": "I am not / I'm not",
    "phonetics": "/i am not / i'm not/",
    "definition": "The name of the Latin-script letter I.",
    "example": "the position of an i-dot (the dot of an i)",
    "isNew": true,
    "wordZh": "的否定形式缩写形式",
    "definitionZh": "拉丁字母 I 的名称。",
    "exampleZh": "i-dot 的位置（i 的点）"
  },
  {
    "id": "fc_s1_you_are",
    "stageId": 1,
    "word": "You are",
    "phonetics": "/jʉː/",
    "definition": "(object pronoun) The people spoken, or written to, as an object.",
    "example": "Both of you should get ready now.",
    "isNew": true,
    "wordZh": "的否定形式缩写形式",
    "definitionZh": "（宾语代词）作为宾语说话或写信的人。",
    "exampleZh": "你们俩现在应该做好准备了。"
  },
  {
    "id": "fc_s1_he_is_not___he_isn_t",
    "stageId": 1,
    "word": "He is not / He isn't",
    "phonetics": "/hi/",
    "definition": "A male.",
    "example": "Is your cat a he or a she?",
    "isNew": true,
    "wordZh": "的否定形式缩写形式",
    "definitionZh": "一名男性。",
    "exampleZh": "你的猫是公猫还是母猫？"
  },
  {
    "id": "fc_s1_she_is_not___she_isn_t",
    "stageId": 1,
    "word": "She is not / She isn't",
    "phonetics": "/ʃiː/",
    "definition": "A female.",
    "example": "Pat is definitely a she.",
    "isNew": true,
    "wordZh": "的否定形式缩写形式",
    "definitionZh": "一名女性。",
    "exampleZh": "帕特绝对是个女人。"
  },
  {
    "id": "fc_s1_it_is_not___it_isn_t",
    "stageId": 1,
    "word": "It is not / It isn't",
    "phonetics": "/ɪt/",
    "definition": "The person who chases and tries to catch the other players in the playground game of tag.",
    "example": "In the next game, Adam and Tom will be it…",
    "isNew": true,
    "wordZh": "的否定形式缩写形式",
    "definitionZh": "在操场上的捉人游戏中追逐并试图抓住其他玩家的人。",
    "exampleZh": "在下一场比赛中，亚当和汤姆将是……"
  },
  {
    "id": "fc_s1_in_front_of",
    "stageId": 1,
    "word": "In front of",
    "phonetics": "/ɪn/",
    "definition": "A position of power or influence, or a way to get it.",
    "example": "His parents got him an in with the company.",
    "isNew": true,
    "wordZh": "在的前面",
    "definitionZh": "权力或影响力的地位，或者获得它的方式。",
    "exampleZh": "他的父母让他加入了这家公司。"
  },
  {
    "id": "fc_s1_behind",
    "stageId": 1,
    "word": "Behind",
    "phonetics": "/bəˈhaɪnd/",
    "definition": "Toward the back part or rear; backward.",
    "example": "to look behind",
    "isNew": true,
    "wordZh": "在的后面",
    "definitionZh": "朝向后部或后部；落后。",
    "exampleZh": "向后看"
  },
  {
    "id": "fc_s1_me",
    "stageId": 1,
    "word": "Me",
    "phonetics": "/miː/",
    "definition": "As the direct object of a verb.",
    "example": "Can you hear me?",
    "isNew": true,
    "wordZh": "我宾格",
    "definitionZh": "作为动词的直接宾语。",
    "exampleZh": "你能听到我吗？"
  },
  {
    "id": "fc_s1_you",
    "stageId": 1,
    "word": "You",
    "phonetics": "/jʉː/",
    "definition": "(object pronoun) The people spoken, or written to, as an object.",
    "example": "Both of you should get ready now.",
    "isNew": true,
    "wordZh": "你宾格",
    "definitionZh": "（宾语代词）作为宾语说话或写信的人。",
    "exampleZh": "你们俩现在应该做好准备了。"
  },
  {
    "id": "fc_s1_him",
    "stageId": 1,
    "word": "Him",
    "phonetics": "/əm/",
    "definition": "A male person.",
    "example": "I think this bird is a him, but it may be a her.",
    "isNew": true,
    "wordZh": "他宾格",
    "definitionZh": "一个男性。",
    "exampleZh": "我认为这只鸟是他的，但也可能是她的。"
  },
  {
    "id": "fc_s1_her",
    "stageId": 1,
    "word": "Her",
    "phonetics": "/ə(ɹ)/",
    "definition": "A female person or animal.",
    "example": "I think this bird is a him, but it may be a her.",
    "isNew": true,
    "wordZh": "她宾格",
    "definitionZh": "女性或动物。",
    "exampleZh": "我认为这只鸟是他的，但也可能是她的。"
  },
  {
    "id": "fc_s1_house",
    "stageId": 1,
    "word": "House",
    "phonetics": "/hʌʊs/",
    "definition": "A structure built or serving as an abode of human beings.",
    "example": "This is my house and my family's ancestral home.",
    "isNew": true,
    "wordZh": "房屋",
    "definitionZh": "建造或用作人类住所的建筑物。",
    "exampleZh": "这是我的家，也是我家的祖屋。"
  },
  {
    "id": "fc_s1_standing",
    "stageId": 1,
    "word": "Standing",
    "phonetics": "/ˈstændɪŋ/",
    "definition": "Performed from an erect position.",
    "example": "standing ovation",
    "isNew": true,
    "wordZh": "正站在现在分词形式",
    "definitionZh": "从直立位置进行。",
    "exampleZh": "起立鼓掌"
  },
  {
    "id": "fc_s1_sitting",
    "stageId": 1,
    "word": "Sitting",
    "phonetics": "/ˈsɪtɪŋ/",
    "definition": "A period during which one is seated for a specific purpose.",
    "example": "Due to the sheer volume of guests, we had to have two sittings for the meal.",
    "isNew": true,
    "wordZh": "正坐在现在分词形式",
    "definitionZh": "一个人为了特定目的而坐着的一段时间。",
    "exampleZh": "由于客人太多，我们不得不坐两顿饭。"
  },
  {
    "id": "fc_s1_taking_from",
    "stageId": 1,
    "word": "Taking from",
    "phonetics": "/ˈteɪkɪŋ/",
    "definition": "To get into one's hands, possession or control, with or without force.",
    "example": "I'll take that plate off the table.",
    "isNew": true,
    "wordZh": "正从拿走现在分词形式",
    "definitionZh": "进入某人的手中、拥有或控制，无论是否使用武力。",
    "exampleZh": "我会把桌子上的盘子拿走。"
  },
  {
    "id": "fc_s1_putting_on",
    "stageId": 1,
    "word": "Putting on",
    "phonetics": "[ˈpʰʊɾɪŋ]",
    "definition": "To place something somewhere.",
    "example": "She put her books on the table.",
    "isNew": true,
    "wordZh": "正放在现在分词形式",
    "definitionZh": "将某物放置在某处。",
    "exampleZh": "她把书放在桌子上。"
  },
  {
    "id": "fc_s1_opening",
    "stageId": 1,
    "word": "Opening",
    "phonetics": "/ˈəʊ.pənɪŋ/",
    "definition": "To make something accessible or allow for passage by moving from a shut position.",
    "example": "Turn the doorknob to open the door.",
    "isNew": true,
    "wordZh": "正打开现在分词形式",
    "definitionZh": "通过从关闭位置移动来使某物可接近或允许通过。",
    "exampleZh": "转动门把手打开门。"
  },
  {
    "id": "fc_s1_closing",
    "stageId": 1,
    "word": "Closing",
    "phonetics": "/ˈkləʊzɪŋ/",
    "definition": "The act by which something is closed.",
    "example": "openings and closings of doors",
    "isNew": true,
    "wordZh": "正关上正合上现在分词形式",
    "definitionZh": "关闭某事物的行为。",
    "exampleZh": "门的打开和关闭"
  },
  {
    "id": "fc_s1_doing",
    "stageId": 1,
    "word": "Doing",
    "phonetics": "/ˈduːɪŋ/",
    "definition": "To perform; to execute.",
    "example": "All you ever do is surf the Internet. What will you do this afternoon?",
    "isNew": true,
    "wordZh": "正在做的现在分词形式",
    "definitionZh": "执行；执行。",
    "exampleZh": "您所做的就是上网冲浪。今天下午你要做什么？"
  },
  {
    "id": "fc_s1_what_am_i_doing_",
    "stageId": 1,
    "word": "What am I doing?",
    "phonetics": "/wɔt/",
    "definition": "(usually followed by \"with,\" but also sometimes \"would\" or \"might,\" especially in finance) In some manner or degree; in part; partly. See also what with",
    "example": "The market will calculate these higher risks in their funding costs what might result in higher lending rates.",
    "isNew": true,
    "wordZh": "我正在做什么",
    "definitionZh": "（通常后面跟“with”，但有时也用“would”或“might”，尤其是在金融领域）以某种方式或程度；部分；部分。另请参阅与什么",
    "exampleZh": "市场将在其融资成本中计算这些较高的风险，这可能会导致更高的贷款利率。"
  },
  {
    "id": "fc_s1_which",
    "stageId": 1,
    "word": "Which",
    "phonetics": "/wɪt͡ʃ/",
    "definition": "(interrogative) What one or ones (of those mentioned or implied).",
    "example": "By now, you must surely know which is which.",
    "isNew": true,
    "wordZh": "哪个",
    "definitionZh": "（疑问）（提到或暗示的）一个或多个。",
    "exampleZh": "到现在为止，您一定知道哪个是哪个。"
  },
  {
    "id": "fc_s1_open",
    "stageId": 1,
    "word": "Open",
    "phonetics": "/ˈəʊ.pən/",
    "definition": "Not physically drawn together, closed, folded or contracted; extended",
    "example": "an open hand; an open flower",
    "isNew": true,
    "wordZh": "打开的",
    "definitionZh": "没有物理上拉在一起、闭合、折叠或收缩；扩展",
    "exampleZh": "张开的手；一朵开放的花"
  },
  {
    "id": "fc_s1_closed",
    "stageId": 1,
    "word": "Closed",
    "phonetics": "/kləʊzd/",
    "definition": "Not public.",
    "example": "closed source  a closed committee",
    "isNew": true,
    "wordZh": "合上的",
    "definitionZh": "不公开。",
    "exampleZh": "闭源  闭门委员会"
  },
  {
    "id": "fc_s1_that",
    "stageId": 1,
    "word": "That",
    "phonetics": "/ˈðæt/",
    "definition": "(degree) To a given extent or degree.",
    "example": "\"The ribbon was that thin.\" \"I disagree, I say it was not that thin, it was thicker... or maybe thinner...\"",
    "isNew": true,
    "wordZh": "那个",
    "definitionZh": "（程度）达到给定的范围或程度。",
    "exampleZh": "“丝带就是这么薄。” “我不同意，我说不是那么薄，是更厚……或者更薄……”"
  },
  {
    "id": "fc_s1_chart",
    "stageId": 1,
    "word": "Chart",
    "phonetics": "/tʃɑːt/",
    "definition": "To draw or figure out (a route or plan).",
    "example": "Let's chart how we're going to get from here to there.",
    "isNew": true,
    "wordZh": "表格",
    "definitionZh": "画出或算出（路线或计划）。",
    "exampleZh": "让我们绘制一下我们将如何从这里到达那里。"
  },
  {
    "id": "fc_s1_plural",
    "stageId": 1,
    "word": "Plural",
    "phonetics": "/ˈplɔː.ɹəl/",
    "definition": "(grammar) The plural number.",
    "example": "This is the word Plural.",
    "isNew": true,
    "wordZh": "复数",
    "definitionZh": "（语法）复数。",
    "exampleZh": "这是复数这个词。"
  },
  {
    "id": "fc_s1_of",
    "stageId": 1,
    "word": "Of",
    "phonetics": "/ɔv/",
    "definition": "Expressing distance or motion.",
    "example": "This is the word Of.",
    "isNew": true,
    "wordZh": "的",
    "definitionZh": "表达距离或运动。",
    "exampleZh": "这是“的”这个词。"
  },
  {
    "id": "fc_s1_etc",
    "stageId": 1,
    "word": "Etc",
    "phonetics": "/ˌɛt ˈsɛt(ə)ɹə/",
    "definition": "Alternative form of etc.",
    "example": "This is the word Etc.",
    "isNew": true,
    "wordZh": "等",
    "definitionZh": "等的替代形式",
    "exampleZh": "这是“等等”这个词。"
  },
  {
    "id": "fc_s1_we_are___we_re",
    "stageId": 1,
    "word": "We are / We're",
    "phonetics": "/wiː/",
    "definition": "(personal) The plural form of you, including everyone being addressed.",
    "example": "How are we all tonight?",
    "isNew": true,
    "wordZh": "我们是缩写形式",
    "definitionZh": "（个人）您的复数形式，包括所有被提及的人。",
    "exampleZh": "今晚我们都怎么样？"
  },
  {
    "id": "fc_s1_they_are___they_re",
    "stageId": 1,
    "word": "They are / They're",
    "phonetics": "/ðeɪ/",
    "definition": "(the third-person plural) A group of people, animals, plants or objects previously mentioned.",
    "example": "Dogs may bark if they want to be fed.",
    "isNew": true,
    "wordZh": "他们是缩写形式",
    "definitionZh": "（第三人称复数）前面提到的一群人、动物、植物或物体。",
    "exampleZh": "如果狗想吃东西，它们可能会吠叫。"
  },
  {
    "id": "fc_s1_we_are",
    "stageId": 1,
    "word": "We are",
    "phonetics": "/wiː/",
    "definition": "(personal) The plural form of you, including everyone being addressed.",
    "example": "How are we all tonight?",
    "isNew": true,
    "wordZh": "的否定形式缩写形式",
    "definitionZh": "（个人）您的复数形式，包括所有被提及的人。",
    "exampleZh": "今晚我们都怎么样？"
  },
  {
    "id": "fc_s1_red",
    "stageId": 1,
    "word": "Red",
    "phonetics": "/ɹɛd/",
    "definition": "Having red as its color.",
    "example": "The girl wore a red skirt.",
    "isNew": true,
    "wordZh": "红色",
    "definitionZh": "以红色为颜色。",
    "exampleZh": "那女孩穿着一条红色的裙子。"
  },
  {
    "id": "fc_s1_blue",
    "stageId": 1,
    "word": "Blue",
    "phonetics": "/bluː/",
    "definition": "Blue clothing",
    "example": "The boys in blue marched to the pipers.",
    "isNew": true,
    "wordZh": "蓝色",
    "definitionZh": "蓝色服装",
    "exampleZh": "蓝衣男孩向风笛手行进。"
  },
  {
    "id": "fc_s1_yellow",
    "stageId": 1,
    "word": "Yellow",
    "phonetics": "/jɛlə/",
    "definition": "Related to the Liberal Democrats.",
    "example": "2012 March 2, Andrew Grice, \"Yellow rebels take on Clegg over NHS 'betrayal'\", The Independent",
    "isNew": true,
    "wordZh": "黄色",
    "definitionZh": "与自由民主党有关。",
    "exampleZh": "2012 年 3 月 2 日，安德鲁·格莱斯 (Andrew Grice)，“黄色叛军因 NHS‘背叛’而攻击克莱格”，《独立报》"
  },
  {
    "id": "fc_s1_grey",
    "stageId": 1,
    "word": "Grey",
    "phonetics": "/ɡɹeɪ/",
    "definition": "Having a color.",
    "example": "Wash colored items separately from whites and darks to prevent the colors from bleeding.",
    "isNew": true,
    "wordZh": "灰色",
    "definitionZh": "有颜色。",
    "exampleZh": "将有色物品与白色和深色物品分开洗涤，以防止颜色渗色。"
  },
  {
    "id": "fc_s1_these",
    "stageId": 1,
    "word": "These",
    "phonetics": "/ðiːz/",
    "definition": "The thing, item, etc. being indicated.",
    "example": "This isn't the item that I ordered.",
    "isNew": true,
    "wordZh": "这些",
    "definitionZh": "所指示的事物、物品等。",
    "exampleZh": "这不是我订购的商品。"
  },
  {
    "id": "fc_s1_those",
    "stageId": 1,
    "word": "Those",
    "phonetics": "/ðəʊz/",
    "definition": "(demonstrative) The thing, person, idea, quality, event, action or time indicated or understood from context, especially if more remote geographically, temporally or mentally than one designated as \"this\", or if expressing distinction.",
    "example": "He went home, and after that I never saw him again.",
    "isNew": true,
    "wordZh": "那些",
    "definitionZh": "（指示性）从上下文中指示或理解的事物、人、想法、质量、事件、动作或时间，特别是如果在地理上、时间上或精神上比指定为“这个”的人更遥远，或者表达区别。",
    "exampleZh": "他回家了，之后我就再也没有见过他。"
  },
  {
    "id": "fc_s1_and",
    "stageId": 1,
    "word": "And",
    "phonetics": "/and/",
    "definition": "In rhythm, the second half of a divided beat.",
    "example": "This is the word And.",
    "isNew": true,
    "wordZh": "和",
    "definitionZh": "在节奏上，后半部分是分开的节拍。",
    "exampleZh": "这是“和”这个词。"
  },
  {
    "id": "fc_s1_men__plural_of_man_",
    "stageId": 1,
    "word": "Men (plural of man)",
    "phonetics": "/mɛn/",
    "definition": "An adult male human.",
    "example": "The show is especially popular with middle-aged men.",
    "isNew": true,
    "wordZh": "的复数形式",
    "definitionZh": "成年男性人类。",
    "exampleZh": "该节目尤其受到中年男性的欢迎。"
  },
  {
    "id": "fc_s1_women__plural_of_woman_",
    "stageId": 1,
    "word": "Women (plural of woman)",
    "phonetics": "/ˈwɪmən/",
    "definition": "An adult female human.",
    "example": "This is the word Women (plural of woman).",
    "isNew": true,
    "wordZh": "的复数形式",
    "definitionZh": "成年女性人类。",
    "exampleZh": "这是“Women”（女人的复数）这个词。"
  },
  {
    "id": "fc_s1_say",
    "stageId": 1,
    "word": "Say",
    "phonetics": "/seɪ/",
    "definition": "To pronounce.",
    "example": "Please say your name slowly and clearly.",
    "isNew": true,
    "wordZh": "说",
    "definitionZh": "发音。",
    "exampleZh": "请缓慢而清晰地说出你的名字。"
  },
  {
    "id": "fc_s1_clothes",
    "stageId": 1,
    "word": "Clothes",
    "phonetics": "/kləʊ(ð)z/",
    "definition": "(in idioms) Priesthood, clergy.",
    "example": "He is a respected man of the cloth.",
    "isNew": true,
    "wordZh": "衣服",
    "definitionZh": "（习语）神职人员，神职人员。",
    "exampleZh": "他是一位受人尊敬的布衣人。"
  },
  {
    "id": "fc_s1_shoe",
    "stageId": 1,
    "word": "Shoe",
    "phonetics": "/ʃuː/",
    "definition": "A protective covering for the foot, with a bottom part composed of thick leather or plastic sole and often a thicker heel, and a softer upper part made of leather or synthetic material. Shoes generally do not extend above the ankle, as opposed to boots, which do.",
    "example": "Get your shoes on now, or you'll be late for school.",
    "isNew": true,
    "wordZh": "鞋",
    "definitionZh": "足部的保护层，底部由厚皮革或塑料鞋底组成，通常有较厚的鞋跟，上部较软，由皮革或合成材料制成。鞋子通常不会延伸到脚踝以上，而靴子则可以。",
    "exampleZh": "现在穿上鞋子，不然你上学就要迟到了。"
  },
  {
    "id": "fc_s1_boot",
    "stageId": 1,
    "word": "Boot",
    "phonetics": "/buːt/",
    "definition": "To kick.",
    "example": "I booted the ball toward my teammate.",
    "isNew": true,
    "wordZh": "靴子",
    "definitionZh": "踢。",
    "exampleZh": "我把球踢向我的队友。"
  },
  {
    "id": "fc_s1_sock",
    "stageId": 1,
    "word": "Sock",
    "phonetics": "/sɒk/",
    "definition": "A knitted or woven covering for the foot.",
    "example": "This is the word Sock.",
    "isNew": true,
    "wordZh": "短袜",
    "definitionZh": "脚部的针织或机织覆盖物。",
    "exampleZh": "这是袜子这个词。"
  },
  {
    "id": "fc_s1_trousers",
    "stageId": 1,
    "word": "Trousers",
    "phonetics": "/ˈtɹaʊzəz/",
    "definition": "An article of clothing that covers the part of the body between the waist and the ankles or knees, and is divided into a separate part for each leg.",
    "example": "The trousers need to be shortened.",
    "isNew": true,
    "wordZh": "裤子",
    "definitionZh": "一种衣服，覆盖腰部和脚踝或膝盖之间的身体部分，并分为每条腿的单独部分。",
    "exampleZh": "裤子需要改短。"
  },
  {
    "id": "fc_s1_jacket",
    "stageId": 1,
    "word": "Jacket",
    "phonetics": "/ˈd͡ʒæk.ɪt/",
    "definition": "The tough outer skin of a baked potato.",
    "example": "Cook the potatoes in their jackets.",
    "isNew": true,
    "wordZh": "夹克",
    "definitionZh": "烤土豆的坚韧外皮。",
    "exampleZh": "把土豆放在夹克里煮。"
  },
  {
    "id": "fc_s1_suit",
    "stageId": 1,
    "word": "Suit",
    "phonetics": "/s(j)uːt/",
    "definition": "A set of clothes to be worn together, now especially a man's matching jacket and trousers (also business suit or lounge suit), or a similar outfit for a woman.",
    "example": "Nick hired a navy-blue suit for the wedding.",
    "isNew": true,
    "wordZh": "套装",
    "definitionZh": "一套可以一起穿的衣服，现在特别是男士配套的夹克和裤子（也可以是商务套装或休闲套装），或者是女士的类似服装。",
    "exampleZh": "尼克为婚礼雇了一套深蓝色西装。"
  },
  {
    "id": "fc_s1_shirt",
    "stageId": 1,
    "word": "Shirt",
    "phonetics": "/ʃɜːt/",
    "definition": "An article of clothing that is worn on the upper part of the body, and often has sleeves, either long or short, that cover the arms.",
    "example": "It can take a while to learn how to iron a shirt properly.",
    "isNew": true,
    "wordZh": "衬衫",
    "definitionZh": "穿在上半身的衣服，通常有长袖或短袖，覆盖手臂。",
    "exampleZh": "学习如何正确熨烫衬衫可能需要一段时间。"
  },
  {
    "id": "fc_s1_tie",
    "stageId": 1,
    "word": "Tie",
    "phonetics": "/taɪ/",
    "definition": "The situation in which two or more participants in a competition are placed equally.",
    "example": "It's two outs in the bottom of the ninth, tie score.",
    "isNew": true,
    "wordZh": "领带",
    "definitionZh": "比赛中两名或两名以上参赛者获得同等名次的情况。",
    "exampleZh": "第九局下半局两出局，比分打平。"
  },
  {
    "id": "fc_s1_hat",
    "stageId": 1,
    "word": "Hat",
    "phonetics": "[hat]",
    "definition": "A covering for the head, often in the approximate form of a cone or a cylinder closed at its top end, and sometimes having a brim and other decoration.",
    "example": "This is the word Hat.",
    "isNew": true,
    "wordZh": "帽子",
    "definitionZh": "头部的覆盖物，通常呈顶端封闭的圆锥体或圆柱体的近似形状，有时具有边缘和其他装饰。",
    "exampleZh": "这是帽子这个词。"
  },
  {
    "id": "fc_s1_bag",
    "stageId": 1,
    "word": "Bag",
    "phonetics": "/ˈbæːɡ/",
    "definition": "One’s preference.",
    "example": "Acid House is not my bag: I prefer the more traditional styles of music.",
    "isNew": true,
    "wordZh": "书包",
    "definitionZh": "一个人的喜好。",
    "exampleZh": "Acid House 不是我的菜：我更喜欢更传统的音乐风格。"
  },
  {
    "id": "fc_s1_alphabet",
    "stageId": 1,
    "word": "Alphabet",
    "phonetics": "/ˈæl.fə.bɛt/",
    "definition": "The set of letters used when writing in a language.",
    "example": "In the first year of school, pupils are taught to recite the alphabet.",
    "isNew": true,
    "wordZh": "字母表",
    "definitionZh": "用某种语言书写时使用的字母集。",
    "exampleZh": "在学校的第一年，学生们被教导背诵字母表。"
  },
  {
    "id": "fc_s1_letter",
    "stageId": 1,
    "word": "Letter",
    "phonetics": "/-ɾə(ɹ)/",
    "definition": "A symbol in an alphabet.",
    "example": "There are twenty-six letters in the English alphabet.",
    "isNew": true,
    "wordZh": "字母",
    "definitionZh": "字母表中的符号。",
    "exampleZh": "英文字母表中有二十六个字母。"
  },
  {
    "id": "fc_s1_vowel",
    "stageId": 1,
    "word": "Vowel",
    "phonetics": "/vaʊl/",
    "definition": "A sound produced by the vocal cords with relatively little restriction of the oral cavity, forming the prominent sound of a syllable.",
    "example": "This is the word Vowel.",
    "isNew": true,
    "wordZh": "元音",
    "definitionZh": "声带发出的声音，口腔限制相对较少，形成音节的突出声音。",
    "exampleZh": "这是元音这个词。"
  },
  {
    "id": "fc_s1_consonant",
    "stageId": 1,
    "word": "Consonant",
    "phonetics": "/ˈkɒn.sə.nənt/",
    "definition": "A letter representing the sound of a consonant.",
    "example": "The 19 unquestionable consonants in the English alphabet are B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, X, Z.",
    "isNew": true,
    "wordZh": "辅音",
    "definitionZh": "代表辅音声音的字母。",
    "exampleZh": "英语字母表中19个毫无疑问的辅音是B、C、D、F、G、H、J、K、L、M、N、P、Q、R、S、T、V、X、Z。"
  },
  {
    "id": "fc_s1_before",
    "stageId": 1,
    "word": "Before",
    "phonetics": "/bɪˈfɔː/",
    "definition": "At an earlier time.",
    "example": "I've never done this before.",
    "isNew": true,
    "wordZh": "在前",
    "definitionZh": "在较早的时候。",
    "exampleZh": "我以前从未这样做过。"
  },
  {
    "id": "fc_s1_after",
    "stageId": 1,
    "word": "After",
    "phonetics": "/ˈæf.tə(ɹ)/",
    "definition": "(where the frame of reference is within the ship) At or towards the stern of a ship.",
    "example": "The after gun is abaft the forward gun.",
    "isNew": true,
    "wordZh": "在后",
    "definitionZh": "（参考系位于船内）位于船尾或朝向船尾。",
    "exampleZh": "后炮位于前炮后方。"
  },
  {
    "id": "fc_s1_between",
    "stageId": 1,
    "word": "Between",
    "phonetics": "/bɪˈtwiːn/",
    "definition": "In the position or interval that separates (two things), or intermediate in quantity or degree. (See Usage notes below.)",
    "example": "I want to buy one that costs somewhere between forty and fifty dollars.",
    "isNew": true,
    "wordZh": "在之间",
    "definitionZh": "在将（两件事）分开的位置或间隔，或者在数量或程度上居于中间。 （请参阅下面的使用说明。）",
    "exampleZh": "我想买一个价格在四十到五十美元之间的东西。"
  },
  {
    "id": "fc_s1_us",
    "stageId": 1,
    "word": "Us",
    "phonetics": "/əs/",
    "definition": "(chiefly with give) Me.",
    "example": "Give us a look at your paper.",
    "isNew": true,
    "wordZh": "我们宾格",
    "definitionZh": "（主要是给予）我。",
    "exampleZh": "让我们看看你的论文。"
  },
  {
    "id": "fc_s1_them",
    "stageId": 1,
    "word": "Them",
    "phonetics": "/ðʌm/",
    "definition": "(plural) Those ones.",
    "example": "This is the word Them.",
    "isNew": true,
    "wordZh": "他们宾格",
    "definitionZh": "（复数）那些。",
    "exampleZh": "这是他们这个词。"
  },
  {
    "id": "fc_s1_student",
    "stageId": 1,
    "word": "Student",
    "phonetics": "/ˈstjuː.dənt/",
    "definition": "A person who studies or learns about a particular subject.",
    "example": "He is a student of life.",
    "isNew": true,
    "wordZh": "学生",
    "definitionZh": "研究或了解特定主题的人。",
    "exampleZh": "他是一个生活的学生。"
  },
  {
    "id": "fc_s1_teacher",
    "stageId": 1,
    "word": "Teacher",
    "phonetics": "/ˈtiːt͡ʃə/",
    "definition": "A person who teaches, especially one employed in a school.",
    "example": "This is the word Teacher.",
    "isNew": true,
    "wordZh": "老师",
    "definitionZh": "教书的人，尤指受雇于学校的人。",
    "exampleZh": "这是老师这个词。"
  },
  {
    "id": "fc_s1_number",
    "stageId": 1,
    "word": "Number",
    "phonetics": "/ˈnʌmbə/",
    "definition": "An abstract entity used to describe quantity.",
    "example": "Zero, one, −1, 2.5, and pi are all numbers.",
    "isNew": true,
    "wordZh": "数字",
    "definitionZh": "用于描述数量的抽象实体。",
    "exampleZh": "零、一、-1、2.5 和 pi 都是数字。"
  },
  {
    "id": "fc_s1_plus",
    "stageId": 1,
    "word": "Plus",
    "phonetics": "/plʌs/",
    "definition": "An asset or useful addition.",
    "example": "He is a real plus to the team.",
    "isNew": true,
    "wordZh": "加",
    "definitionZh": "资产或有用的补充。",
    "exampleZh": "他对球队来说是一个真正的优势。"
  },
  {
    "id": "fc_s1_equals",
    "stageId": 1,
    "word": "Equals",
    "phonetics": "/ˈiːkwəlz/",
    "definition": "A person or thing of equal status to others.",
    "example": "This beer has no equal.",
    "isNew": true,
    "wordZh": "等于",
    "definitionZh": "与他人具有同等地位的人或物。",
    "exampleZh": "这种啤酒无与伦比。"
  },
  {
    "id": "fc_s1_how_much",
    "stageId": 1,
    "word": "How much",
    "phonetics": "/hæŏ/",
    "definition": "The means by which something is accomplished.",
    "example": "I am not interested in the why, but in the how.",
    "isNew": true,
    "wordZh": "多少",
    "definitionZh": "完成某事的手段。",
    "exampleZh": "我对“为什么”不感兴趣，而对“如何”感兴趣。"
  },
  {
    "id": "fc_s1_there_is___there_s",
    "stageId": 1,
    "word": "There is / There's",
    "phonetics": "/ðeː(ɹ)/",
    "definition": "That status; that position.",
    "example": "You rinse and de-string the green beans; I'll take it from there.",
    "isNew": true,
    "wordZh": "那儿有缩写形式",
    "definitionZh": "那种状态；那个位置。",
    "exampleZh": "将青豆冲洗干净并去掉绳子；我会从那里拿走它。"
  },
  {
    "id": "fc_s1_there_are___there_is",
    "stageId": 1,
    "word": "There are / There is",
    "phonetics": "/ðeː(ɹ)/",
    "definition": "That status; that position.",
    "example": "You rinse and de-string the green beans; I'll take it from there.",
    "isNew": true,
    "wordZh": "的复数形式",
    "definitionZh": "那种状态；那个位置。",
    "exampleZh": "将青豆冲洗干净并去掉绳子；我会从那里拿走它。"
  },
  {
    "id": "fc_s1_now",
    "stageId": 1,
    "word": "Now",
    "phonetics": "/naʊ/",
    "definition": "The present time.",
    "example": "Now is the right time.",
    "isNew": true,
    "wordZh": "现在",
    "definitionZh": "现在的时间。",
    "exampleZh": "现在正是时候。"
  },
  {
    "id": "fc_s1_there_is",
    "stageId": 1,
    "word": "There is",
    "phonetics": "/ðeː(ɹ)/",
    "definition": "That status; that position.",
    "example": "You rinse and de-string the green beans; I'll take it from there.",
    "isNew": true,
    "wordZh": "的否定形式缩写形式",
    "definitionZh": "那种状态；那个位置。",
    "exampleZh": "将青豆冲洗干净并去掉绳子；我会从那里拿走它。"
  },
  {
    "id": "fc_s1_there_are",
    "stageId": 1,
    "word": "There are",
    "phonetics": "/ðeː(ɹ)/",
    "definition": "That status; that position.",
    "example": "You rinse and de-string the green beans; I'll take it from there.",
    "isNew": true,
    "wordZh": "的否定形式缩写形式",
    "definitionZh": "那种状态；那个位置。",
    "exampleZh": "将青豆冲洗干净并去掉绳子；我会从那里拿走它。"
  },
  {
    "id": "fc_s1_high",
    "stageId": 1,
    "word": "High",
    "phonetics": "/haɪ/",
    "definition": "A point of success or achievement; a time when things are at their best.",
    "example": "It was one of the highs of his career.",
    "isNew": true,
    "wordZh": "高的",
    "definitionZh": "成功或成就的一个点；事情处于最佳状态的时候。",
    "exampleZh": "这是他职业生涯的巅峰之一。"
  },
  {
    "id": "fc_s1_low",
    "stageId": 1,
    "word": "Low",
    "phonetics": "/ləʊ/",
    "definition": "Something that is low; a low point.",
    "example": "Economic growth has hit a new low.",
    "isNew": true,
    "wordZh": "低的",
    "definitionZh": "低的东西；一个低点。",
    "exampleZh": "经济增速再创新低。"
  },
  {
    "id": "fc_s1_but",
    "stageId": 1,
    "word": "But",
    "phonetics": "/bʊt/",
    "definition": "An instance or example of using the word \"but\".",
    "example": "It has to be done – no ifs or buts.",
    "isNew": true,
    "wordZh": "但是",
    "definitionZh": "使用“但是”一词的实例或例子。",
    "exampleZh": "它必须完成——没有如果或但是。"
  },
  {
    "id": "fc_s1_imperative",
    "stageId": 1,
    "word": "Imperative",
    "phonetics": "/ɪmˈpɛɹ.ə.tɪv/",
    "definition": "(grammar) The grammatical mood expressing an order (see jussive). In English, the imperative form of a verb is the same as that of the bare infinitive.",
    "example": "The verbs in sentences like \"Do it!\" and \"Say what you like!\" are in the imperative.",
    "isNew": true,
    "wordZh": "祈使语气",
    "definitionZh": "（语法）表达命令的语法语气（见jussive）。在英语中，动词的祈使句形式与不定式的形式相同。",
    "exampleZh": "“Do it!”等句子中的动词和“说你喜欢什么！”是势在必行的。"
  },
  {
    "id": "fc_s1_take",
    "stageId": 1,
    "word": "Take",
    "phonetics": "/teɪk/",
    "definition": "An interpretation or view, opinion or assessment; perspective.",
    "example": "What's your take on this issue, Fred?",
    "isNew": true,
    "wordZh": "拿",
    "definitionZh": "解释或观点、意见或评估；看法。",
    "exampleZh": "弗雷德，你对这个问题有何看法？"
  },
  {
    "id": "fc_s1_put",
    "stageId": 1,
    "word": "Put",
    "phonetics": "/pʊt/",
    "definition": "A contract to sell a security at a set price on or before a certain date.",
    "example": "He bought a January '08 put for Procter and Gamble at 80 to hedge his bet.",
    "isNew": true,
    "wordZh": "放",
    "definitionZh": "在特定日期或之前以设定价格出售证券的合同。",
    "exampleZh": "他以 80 美元的价格买入了宝洁公司 08 年 1 月的看跌期权来对冲他的赌注。"
  },
  {
    "id": "fc_s1_close",
    "stageId": 1,
    "word": "Close",
    "phonetics": "/kləʊz/",
    "definition": "An end or conclusion.",
    "example": "We owe them our thanks for bringing the project to a successful close.",
    "isNew": true,
    "wordZh": "合上",
    "definitionZh": "结束或结论。",
    "exampleZh": "我们感谢他们使该项目圆满结束。"
  },
  {
    "id": "fc_s1_please",
    "stageId": 1,
    "word": "Please",
    "phonetics": "/pliːz/",
    "definition": "To make happy or satisfy; to give pleasure to.",
    "example": "Her presentation pleased the executives.",
    "isNew": true,
    "wordZh": "请",
    "definitionZh": "使快乐或满足；给予快乐。",
    "exampleZh": "她的演讲使高管们很高兴。"
  },
  {
    "id": "fc_s1_here",
    "stageId": 1,
    "word": "Here",
    "phonetics": "/hiːɹ/",
    "definition": "(abstract) This place; this location.",
    "example": "An Alzheimer patient's here may in his mind be anywhere he called home in the time he presently re-lives.",
    "isNew": true,
    "wordZh": "这里",
    "definitionZh": "（摘要）这个地方；这个位置。",
    "exampleZh": "阿尔茨海默病患者在他的脑海中可能是在他现在重生时称之为家的任何地方。"
  },
  {
    "id": "fc_s1_there",
    "stageId": 1,
    "word": "There",
    "phonetics": "/ðeː(ɹ)/",
    "definition": "That status; that position.",
    "example": "You rinse and de-string the green beans; I'll take it from there.",
    "isNew": true,
    "wordZh": "那里",
    "definitionZh": "那种状态；那个位置。",
    "exampleZh": "将青豆冲洗干净并去掉绳子；我会从那里拿走它。"
  },
  {
    "id": "fc_s1_capital",
    "stageId": 1,
    "word": "Capital",
    "phonetics": "/ˈkæp.ɪ.təl/",
    "definition": "Money and wealth. The means to acquire goods and services, especially in a non-barter system.",
    "example": "He does not have enough capital to start a business.",
    "isNew": true,
    "wordZh": "首都",
    "definitionZh": "金钱和财富。获取商品和服务的手段，尤其是在非易货贸易系统中。",
    "exampleZh": "他没有足够的资金来创业。"
  },
  {
    "id": "fc_s1_england",
    "stageId": 1,
    "word": "England",
    "phonetics": "/england/",
    "definition": "Meaning of the word england.",
    "example": "This is the word england.",
    "isNew": true,
    "wordZh": "英格兰",
    "definitionZh": "英格兰这个词的意思。",
    "exampleZh": "这是英格兰这个词。"
  },
  {
    "id": "fc_s1_russia",
    "stageId": 1,
    "word": "Russia",
    "phonetics": "/russia/",
    "definition": "Meaning of the word russia.",
    "example": "This is the word russia.",
    "isNew": true,
    "wordZh": "俄罗斯",
    "definitionZh": "俄罗斯这个词的意思。",
    "exampleZh": "这是俄罗斯这个词。"
  },
  {
    "id": "fc_s1_greece",
    "stageId": 1,
    "word": "Greece",
    "phonetics": "/greece/",
    "definition": "Meaning of the word greece.",
    "example": "This is the word greece.",
    "isNew": true,
    "wordZh": "希腊",
    "definitionZh": "希腊这个词的意思。",
    "exampleZh": "这是希腊这个词。"
  },
  {
    "id": "fc_s1_china",
    "stageId": 1,
    "word": "China",
    "phonetics": "/tʃʌɪnə/",
    "definition": "Chinaware: porcelain tableware.",
    "example": "He set the table with china, cloth napkins, and crystal stemware.",
    "isNew": true,
    "wordZh": "中国",
    "definitionZh": "瓷器：瓷器餐具。",
    "exampleZh": "他在桌子上摆好了瓷器、布餐巾和水晶高脚器皿。"
  },
  {
    "id": "fc_s1_london",
    "stageId": 1,
    "word": "London",
    "phonetics": "/london/",
    "definition": "Meaning of the word london.",
    "example": "This is the word london.",
    "isNew": true,
    "wordZh": "伦敦",
    "definitionZh": "伦敦这个词的意思。",
    "exampleZh": "这是伦敦这个词。"
  },
  {
    "id": "fc_s1_moscow",
    "stageId": 1,
    "word": "Moscow",
    "phonetics": "/moscow/",
    "definition": "Meaning of the word moscow.",
    "example": "This is the word moscow.",
    "isNew": true,
    "wordZh": "莫斯科",
    "definitionZh": "莫斯科这个词的意思。",
    "exampleZh": "这是莫斯科这个词。"
  },
  {
    "id": "fc_s1_athens",
    "stageId": 1,
    "word": "Athens",
    "phonetics": "/athens/",
    "definition": "Meaning of the word athens.",
    "example": "This is the word athens.",
    "isNew": true,
    "wordZh": "雅典",
    "definitionZh": "雅典这个词的意思。",
    "exampleZh": "这就是雅典这个词。"
  },
  {
    "id": "fc_s1_beijing",
    "stageId": 1,
    "word": "Beijing",
    "phonetics": "/beijing/",
    "definition": "Meaning of the word beijing.",
    "example": "This is the word beijing.",
    "isNew": true,
    "wordZh": "北京",
    "definitionZh": "北京这个词的意思。",
    "exampleZh": "这是北京这个词。"
  },
  {
    "id": "fc_s1_reading",
    "stageId": 1,
    "word": "Reading",
    "phonetics": "/ˈɹidiŋ/",
    "definition": "To look at and interpret letters or other information that is written.",
    "example": "Have you read this book?",
    "isNew": true,
    "wordZh": "正在阅读现在分词形式",
    "definitionZh": "查看并解释所写的信件或其他信息。",
    "exampleZh": "你读过这本书吗？"
  },
  {
    "id": "fc_s1_writing",
    "stageId": 1,
    "word": "Writing",
    "phonetics": "/ˈɹaɪtɪŋ/",
    "definition": "The style of writing of a person.",
    "example": "I can't read your writing.",
    "isNew": true,
    "wordZh": "正在写现在分词形式",
    "definitionZh": "一个人的写作风格。",
    "exampleZh": "我读不懂你的文字。"
  },
  {
    "id": "fc_s1_coat",
    "stageId": 1,
    "word": "Coat",
    "phonetics": "/kəʊt/",
    "definition": "The fur or feathers covering an animal's skin.Wp",
    "example": "When the dog shed its coat, it left hair all over the furniture and the carpet.",
    "isNew": true,
    "wordZh": "外套",
    "definitionZh": "覆盖动物皮肤的毛皮或羽毛。Wp",
    "exampleZh": "当狗脱掉外套时，它在家具和地毯上留下了毛发。"
  },
  {
    "id": "fc_s1_tights",
    "stageId": 1,
    "word": "Tights",
    "phonetics": "/taɪts/",
    "definition": "A close-fitting, sheer or non-sheer skin-tight garment worn principally by women and girls that covers the body completely from the waist down, usually including the feet.",
    "example": "This is the word Tights.",
    "isNew": true,
    "wordZh": "紧身裤袜",
    "definitionZh": "主要由妇女和女孩穿着的贴身、透明或非透明紧身服装，完全覆盖从腰部以下（通常包括脚部）的身体。",
    "exampleZh": "这就是“紧身衣”这个词。"
  },
  {
    "id": "fc_s1_dress",
    "stageId": 1,
    "word": "Dress",
    "phonetics": "/dɹɛs/",
    "definition": "An item of clothing (usually worn by a woman or young girl) which both covers the upper part of the body and includes skirts below the waist.",
    "example": "Amy and Mary looked very pretty in their dresses.",
    "isNew": true,
    "wordZh": "连衣裙",
    "definitionZh": "一种衣服（通常由妇女或年轻女孩穿着），既覆盖上半身又包括腰部以下的裙子。",
    "exampleZh": "艾米和玛丽穿着衣服看起来非常漂亮。"
  },
  {
    "id": "fc_s1_skirt",
    "stageId": 1,
    "word": "Skirt",
    "phonetics": "/skɜːt/",
    "definition": "To be on or form the border of.",
    "example": "The plain was skirted by rows of trees.",
    "isNew": true,
    "wordZh": "短裙",
    "definitionZh": "位于……之上或形成……的边界。",
    "exampleZh": "平原的周围是一排排的树木。"
  },
  {
    "id": "fc_s1_scarf",
    "stageId": 1,
    "word": "Scarf",
    "phonetics": "/skɑːf/",
    "definition": "A long, often knitted, garment worn around the neck.",
    "example": "This is the word Scarf.",
    "isNew": true,
    "wordZh": "围巾",
    "definitionZh": "一种长的、通常是针织的、挂在脖子上的衣服。",
    "exampleZh": "这就是围巾这个词。"
  },
  {
    "id": "fc_s1_blouse",
    "stageId": 1,
    "word": "Blouse",
    "phonetics": "/blaʊs/",
    "definition": "A shirt, typically loose and reaching from the neck to the waist.",
    "example": "This is the word Blouse.",
    "isNew": true,
    "wordZh": "女式衬衫",
    "definitionZh": "衬衫，通常宽松，从颈部延伸到腰部。",
    "exampleZh": "这是衬衫这个词。"
  },
  {
    "id": "fc_s1_pullover",
    "stageId": 1,
    "word": "Pullover",
    "phonetics": "/pullover/",
    "definition": "A sweater that must be put on by pulling it over the head; a sweater without buttons or a zipper in front",
    "example": "This is the word Pullover.",
    "isNew": true,
    "wordZh": "套衫",
    "definitionZh": "必须将其拉过头才能穿上的毛衣；前面没有纽扣或拉链的毛衣",
    "exampleZh": "这是套头衫这个词。"
  },
  {
    "id": "fc_s1_pocket",
    "stageId": 1,
    "word": "Pocket",
    "phonetics": "/ˈpɒkɪt/",
    "definition": "Such a receptacle seen as housing someone's money; hence, financial resources.",
    "example": "I paid for it out of my own pocket.",
    "isNew": true,
    "wordZh": "口袋",
    "definitionZh": "这种容器被视为存放某人的钱；因此，财政资源。",
    "exampleZh": "我自己掏腰包付了钱。"
  },
  {
    "id": "fc_s1_handkerchief",
    "stageId": 1,
    "word": "Handkerchief",
    "phonetics": "/ˈhæŋkətʃiːf/",
    "definition": "A piece of cloth, usually square and often fine and elegant, carried for wiping the face, eyes, nose or hands.",
    "example": "This is the word Handkerchief.",
    "isNew": true,
    "wordZh": "手帕",
    "definitionZh": "一块布，通常是方形的，通常精致而优雅，用于擦拭脸、眼睛、鼻子或手。",
    "exampleZh": "这是手帕这个词。"
  },
  {
    "id": "fc_s1_how_many_",
    "stageId": 1,
    "word": "How many?",
    "phonetics": "/hæŏ/",
    "definition": "The means by which something is accomplished.",
    "example": "I am not interested in the why, but in the how.",
    "isNew": true,
    "wordZh": "多少",
    "definitionZh": "完成某事的手段。",
    "exampleZh": "我对“为什么”不感兴趣，而对“如何”感兴趣。"
  },
  {
    "id": "fc_s1_going_to",
    "stageId": 1,
    "word": "Going to",
    "phonetics": "/ˈɡəʊɪŋ/",
    "definition": "(chiefly of a machine) To work or function (properly); to move or perform (as required).",
    "example": "The engine just won't go anymore.",
    "isNew": true,
    "wordZh": "正走向现在分词形式",
    "definitionZh": "（主要是机器）（适当地）工作或发挥作用；移动或执行（根据需要）。",
    "exampleZh": "引擎不再运转了。"
  },
  {
    "id": "fc_s1_europe",
    "stageId": 1,
    "word": "Europe",
    "phonetics": "/europe/",
    "definition": "Meaning of the word europe.",
    "example": "This is the word europe.",
    "isNew": true,
    "wordZh": "欧洲",
    "definitionZh": "欧洲这个词的意思。",
    "exampleZh": "这是欧洲这个词。"
  },
  {
    "id": "fc_s1_asia",
    "stageId": 1,
    "word": "Asia",
    "phonetics": "/asia/",
    "definition": "Meaning of the word asia.",
    "example": "This is the word asia.",
    "isNew": true,
    "wordZh": "亚洲",
    "definitionZh": "亚洲这个词的意思。",
    "exampleZh": "这是亚洲这个词。"
  },
  {
    "id": "fc_s1_italy",
    "stageId": 1,
    "word": "Italy",
    "phonetics": "/italy/",
    "definition": "Meaning of the word italy.",
    "example": "This is the word italy.",
    "isNew": true,
    "wordZh": "意大利",
    "definitionZh": "意大利这个词的意思。",
    "exampleZh": "这是意大利这个词。"
  },
  {
    "id": "fc_s1_france",
    "stageId": 1,
    "word": "France",
    "phonetics": "/france/",
    "definition": "Meaning of the word france.",
    "example": "This is the word france.",
    "isNew": true,
    "wordZh": "法国",
    "definitionZh": "法国这个词的意思。",
    "exampleZh": "这是法国这个词。"
  },
  {
    "id": "fc_s1_india",
    "stageId": 1,
    "word": "India",
    "phonetics": "/india/",
    "definition": "Meaning of the word india.",
    "example": "This is the word india.",
    "isNew": true,
    "wordZh": "印度",
    "definitionZh": "印度这个词的意思。",
    "exampleZh": "这是印度这个词。"
  },
  {
    "id": "fc_s1_first__1st_",
    "stageId": 1,
    "word": "First (1st)",
    "phonetics": "/fɪrst/",
    "definition": "The person or thing in the first position.",
    "example": "He was the first to complete the course.",
    "isNew": true,
    "wordZh": "第一",
    "definitionZh": "处于第一位的人或物。",
    "exampleZh": "他是第一个完成课程的人。"
  },
  {
    "id": "fc_s1_second__2nd_",
    "stageId": 1,
    "word": "Second (2nd)",
    "phonetics": "/ˈsɛkɪnd/",
    "definition": "(usually in the plural) A manufactured item that, though still usable, fails to meet quality control standards.",
    "example": "They were discounted because they contained blemishes, nicks or were otherwise factory seconds.",
    "isNew": true,
    "wordZh": "第二",
    "definitionZh": "（通常为复数）虽然仍可用但不符合质量控制标准的制造品。",
    "exampleZh": "它们之所以被打折，是因为它们有瑕疵、划痕或者是工厂次品。"
  },
  {
    "id": "fc_s1_third__3rd_",
    "stageId": 1,
    "word": "Third (3rd)",
    "phonetics": "/θɜːd/",
    "definition": "The person or thing in the third position.",
    "example": "Jones came in third.",
    "isNew": true,
    "wordZh": "第三",
    "definitionZh": "处于第三位置的人或物。",
    "exampleZh": "琼斯位居第三。"
  },
  {
    "id": "fc_s1_fourth__4th_",
    "stageId": 1,
    "word": "Fourth (4th)",
    "phonetics": "/fɔːθ/",
    "definition": "(not used in the plural) The person or thing in the fourth position.",
    "example": "This is the word Fourth (4th).",
    "isNew": true,
    "wordZh": "第四",
    "definitionZh": "（不用于复数）第四个位置的人或物。",
    "exampleZh": "这是第四（4th）这个词。"
  },
  {
    "id": "fc_s1_fifth__5th_",
    "stageId": 1,
    "word": "Fifth (5th)",
    "phonetics": "/fɪft/",
    "definition": "The person or thing in the fifth position.",
    "example": "This is the word Fifth (5th).",
    "isNew": true,
    "wordZh": "第五",
    "definitionZh": "第五位的人或物。",
    "exampleZh": "这是第五（5th）这个词。"
  },
  {
    "id": "fc_s1_sixth__6th_",
    "stageId": 1,
    "word": "Sixth (6th)",
    "phonetics": "/sɪk(s)θ/",
    "definition": "(not used in the plural) The person or thing in the sixth position.",
    "example": "This is the word Sixth (6th).",
    "isNew": true,
    "wordZh": "第六",
    "definitionZh": "（不以复数形式使用）位于第六位置的人或物。",
    "exampleZh": "这是第六（6th）这个词。"
  },
  {
    "id": "fc_s1_twelfth__12th_",
    "stageId": 1,
    "word": "Twelfth (12th)",
    "phonetics": "/twɛlfθ/",
    "definition": "One of twelve equal parts of a whole.",
    "example": "A twelfth of 240 is 20.",
    "isNew": true,
    "wordZh": "第十二",
    "definitionZh": "整体的十二个相等部分之一。",
    "exampleZh": "240 的十二分之一是 20。"
  },
  {
    "id": "fc_s1_twentieth__20th_",
    "stageId": 1,
    "word": "Twentieth (20th)",
    "phonetics": "/ˈtwɛni.əθ/",
    "definition": "A person or thing in the twentieth position.",
    "example": "This is the word Twentieth (20th).",
    "isNew": true,
    "wordZh": "第二十",
    "definitionZh": "位于第二十位的人或物。",
    "exampleZh": "这是第二十（20th）这个词。"
  },
  {
    "id": "fc_s1_cardinal",
    "stageId": 1,
    "word": "Cardinal",
    "phonetics": "/ˈkɑː.dɪ.nəl/",
    "definition": "Of fundamental importance; crucial, pivotal.",
    "example": "a cardinal rule",
    "isNew": true,
    "wordZh": "基数",
    "definitionZh": "具有根本重要性；关键的，关键的。",
    "exampleZh": "基本规则"
  },
  {
    "id": "fc_s1_ordinal",
    "stageId": 1,
    "word": "Ordinal",
    "phonetics": "/ˈɔː(ɹ).dɪ.nəl/",
    "definition": "An ordinal number such as first, second and third.",
    "example": "The most common numerals in Latin, as in English, are the \"cardinals\"...and the \"ordinals\"... — F. M. Wheelock, Wheelock’s Latin, 6th ed. revised (2005), p97",
    "isNew": true,
    "wordZh": "序数",
    "definitionZh": "序数词，例如第一、第二和第三。",
    "exampleZh": "拉丁语中最常见的数字，就像英语中一样，是“基数词”……和“序数词”……——F. M. Wheelock，Wheelock’s Latin，第六版。修订（2005 年），p97"
  },
  {
    "id": "fc_s1_last",
    "stageId": 1,
    "word": "Last",
    "phonetics": "/last/",
    "definition": "Final, ultimate, coming after all others of its kind.",
    "example": "“Eyes Wide Shut” was the last film to be directed by Stanley Kubrick.",
    "isNew": true,
    "wordZh": "最后的",
    "definitionZh": "最终的、最终的、排在所有同类之后的。",
    "exampleZh": "《大开眼戒》是斯坦利·库布里克导演的最后一部电影。"
  },
  {
    "id": "fc_s1_give",
    "stageId": 1,
    "word": "Give",
    "phonetics": "/ɡɪv/",
    "definition": "The amount of bending that something undergoes when a force is applied to it; a tendency to yield under pressure; resilence.",
    "example": "There is no give in his dogmatic religious beliefs.",
    "isNew": true,
    "wordZh": "给",
    "definitionZh": "当某物受力时所经历的弯曲量；在压力下有屈服的倾向；韧性。",
    "exampleZh": "他没有屈服于教条式的宗教信仰。"
  },
  {
    "id": "fc_s1_french",
    "stageId": 1,
    "word": "French",
    "phonetics": "/fɹɛnt͡ʃ/",
    "definition": "To prepare food by cutting it into strips.",
    "example": "This is the word French.",
    "isNew": true,
    "wordZh": "法国人",
    "definitionZh": "将食物切成条状来准备食物。",
    "exampleZh": "这是法语单词。"
  },
  {
    "id": "fc_s1_german",
    "stageId": 1,
    "word": "German",
    "phonetics": "/ˈd͡ʒɜː.mən/",
    "definition": "Having the same mother and father; a full (brother or sister).",
    "example": "brother-german",
    "isNew": true,
    "wordZh": "德国人",
    "definitionZh": "有同一个母亲和父亲；一个完整的（兄弟或姐妹）。",
    "exampleZh": "德国兄弟"
  },
  {
    "id": "fc_s1_italian",
    "stageId": 1,
    "word": "Italian",
    "phonetics": "/italian/",
    "definition": "Meaning of the word italian.",
    "example": "This is the word italian.",
    "isNew": true,
    "wordZh": "意大利人",
    "definitionZh": "意大利语这个词的意思。",
    "exampleZh": "这是意大利语单词。"
  },
  {
    "id": "fc_s1_english",
    "stageId": 1,
    "word": "English",
    "phonetics": "/ˈɪŋ.ɡlɪʃ/",
    "definition": "Spinning or rotary motion given to a ball around the vertical axis, as in billiards or bowling.",
    "example": "You can't hit it directly, but maybe if you give it some english.",
    "isNew": true,
    "wordZh": "英国人",
    "definitionZh": "球绕垂直轴的旋转或旋转运动，如台球或保龄球。",
    "exampleZh": "你不能直接点击它，但如果你给它一些英语也许可以。"
  },
  {
    "id": "fc_s1_my",
    "stageId": 1,
    "word": "My",
    "phonetics": "/mi/",
    "definition": "Used to express surprise, shock or amazement.",
    "example": "My, what big teeth you have!",
    "isNew": true,
    "wordZh": "我的",
    "definitionZh": "用于表达惊讶、震惊或惊奇。",
    "exampleZh": "我的天，你的牙齿好大啊！"
  },
  {
    "id": "fc_s1_your",
    "stageId": 1,
    "word": "Your",
    "phonetics": "/your/",
    "definition": "Meaning of the word your.",
    "example": "This is the word your.",
    "isNew": true,
    "wordZh": "你的",
    "definitionZh": "你这个词的意思。",
    "exampleZh": "这是你这个词。"
  },
  {
    "id": "fc_s1_his",
    "stageId": 1,
    "word": "His",
    "phonetics": "/ˈhɪz/",
    "definition": "That which belongs to him; the possessive case of he, used without a following noun.",
    "example": "The decision was his to live with.",
    "isNew": true,
    "wordZh": "他的",
    "definitionZh": "属于他的； he 的所有格，不带后面的名词使用。",
    "exampleZh": "他决定接受这个决定。"
  },
  {
    "id": "fc_s1_our",
    "stageId": 1,
    "word": "Our",
    "phonetics": "/our/",
    "definition": "Meaning of the word our.",
    "example": "This is the word our.",
    "isNew": true,
    "wordZh": "我们的",
    "definitionZh": "我们这个词的意思。",
    "exampleZh": "这是我们这个词。"
  },
  {
    "id": "fc_s1_their",
    "stageId": 1,
    "word": "Their",
    "phonetics": "/their/",
    "definition": "Meaning of the word their.",
    "example": "This is the word their.",
    "isNew": true,
    "wordZh": "他们的",
    "definitionZh": "他们这个词的意思。",
    "exampleZh": "这是他们这个词。"
  },
  {
    "id": "fc_s1_all",
    "stageId": 1,
    "word": "All",
    "phonetics": "/ɔːl/",
    "definition": "(with a possessive pronoun) Everything that one is capable of.",
    "example": "She gave her all, and collapsed at the finish line.",
    "isNew": true,
    "wordZh": "全部的",
    "definitionZh": "（用所有格代词）一个人能够做的一切。",
    "exampleZh": "她付出了一切，在终点线倒下了。"
  },
  {
    "id": "fc_s1_person",
    "stageId": 1,
    "word": "Person",
    "phonetics": "/ˈpɜːsən/",
    "definition": "An individual; usually a human being.",
    "example": "Each person is unique, both mentally and physically.",
    "isNew": true,
    "wordZh": "人",
    "definitionZh": "个人；通常是一个人。",
    "exampleZh": "每个人都是独一无二的，无论是精神上还是身体上。"
  },
  {
    "id": "fc_s1_people__plural_of_person_",
    "stageId": 1,
    "word": "People (plural of person)",
    "phonetics": "/ˈpiːpəl/",
    "definition": "Used as plural of person; a body of human beings considered generally or collectively; a group of two or more persons.",
    "example": "There were so many people at the restaurant last night.",
    "isNew": true,
    "wordZh": "的复数形式",
    "definitionZh": "用作人称复数；被普遍或集体考虑的人类团体；两人或两人以上的团体。",
    "exampleZh": "昨晚餐厅里有很多人。"
  },
  {
    "id": "fc_s1_coming_from",
    "stageId": 1,
    "word": "Coming from",
    "phonetics": "/ˈkʌmɪŋ/",
    "definition": "To move from further away to nearer to.",
    "example": "She’ll be coming ’round the mountain when she comes [...]",
    "isNew": true,
    "wordZh": "正从来",
    "definitionZh": "从较远的地方移动到较近的地方。",
    "exampleZh": "当她来时，她会绕山而来[...]"
  },
  {
    "id": "fc_s1_touch",
    "stageId": 1,
    "word": "Touch",
    "phonetics": "/touch/",
    "definition": "Meaning of the word touch.",
    "example": "This is the word touch.",
    "isNew": true,
    "wordZh": "触摸",
    "definitionZh": "触摸这个词的意思。",
    "exampleZh": "这就是触摸这个词。"
  },
  {
    "id": "fc_s1_sentence",
    "stageId": 1,
    "word": "Sentence",
    "phonetics": "[ˈsɛntn̩t͡s]",
    "definition": "The decision or judgement of a jury or court; a verdict.",
    "example": "The court returned a sentence of guilt in the first charge, but innocence in the second.",
    "isNew": true,
    "wordZh": "句子",
    "definitionZh": "陪审团或法院的决定或判决；一个判决。",
    "exampleZh": "法院对第一项指控作出有罪判决，但对第二项指控作出无罪判决。"
  },
  {
    "id": "fc_s1_word",
    "stageId": 1,
    "word": "Word",
    "phonetics": "/wɜːd/",
    "definition": "A watchword or rallying cry, a verbal signal (even when consisting of multiple words).",
    "example": "mum's the word",
    "isNew": true,
    "wordZh": "单词",
    "definitionZh": "口号或战斗口号，口头信号（即使由多个单词组成）。",
    "exampleZh": "妈妈的话"
  },
  {
    "id": "fc_s1_verb",
    "stageId": 1,
    "word": "Verb",
    "phonetics": "/vɜːb/",
    "definition": "(grammar) A word that indicates an action, event, or state.",
    "example": "The word “speak” is an English verb.",
    "isNew": true,
    "wordZh": "动词",
    "definitionZh": "（语法）表示动作、事件或状态的词。",
    "exampleZh": "“speak”这个词是一个英语动词。"
  },
  {
    "id": "fc_s1_use",
    "stageId": 1,
    "word": "Use",
    "phonetics": "/use/",
    "definition": "The act of using.",
    "example": "The use of torture has been condemned by the United Nations.",
    "isNew": true,
    "wordZh": "使用",
    "definitionZh": "使用的行为。",
    "exampleZh": "使用酷刑已受到联合国的谴责。"
  },
  {
    "id": "fc_s1_for",
    "stageId": 1,
    "word": "For",
    "phonetics": "/for/",
    "definition": "Meaning of the word for.",
    "example": "This is the word for.",
    "isNew": true,
    "wordZh": "为了",
    "definitionZh": "for 这个词的意思。",
    "exampleZh": "这是这个词。"
  },
  {
    "id": "fc_s1_action",
    "stageId": 1,
    "word": "Action",
    "phonetics": "/ˈæk.ʃən/",
    "definition": "A way of motion or functioning.",
    "example": "Knead bread with a rocking action.",
    "isNew": true,
    "wordZh": "行动",
    "definitionZh": "一种运动或运作的方式。",
    "exampleZh": "用摇摆动作揉面包。"
  },
  {
    "id": "fc_s1_question_mark____",
    "stageId": 1,
    "word": "Question mark (?)",
    "phonetics": "/ˈkwɛstjən/",
    "definition": "A sentence, phrase or word which asks for information, reply or response; an interrogative.",
    "example": "What is your question?",
    "isNew": true,
    "wordZh": "问号",
    "definitionZh": "询问信息、答复或回应的句子、短语或单词；一个疑问句。",
    "exampleZh": "你的问题是什么？"
  },
  {
    "id": "fc_s1_full_stop____",
    "stageId": 1,
    "word": "Full stop (.)",
    "phonetics": "/fʊl/",
    "definition": "Containing the maximum possible amount that can fit in the space available.",
    "example": "The jugs were full to the point of overflowing.",
    "isNew": true,
    "wordZh": "句号",
    "definitionZh": "包含可容纳在可用空间中的最大可能数量。",
    "exampleZh": "罐子里的水已经满了，快要溢出来了。"
  },
  {
    "id": "fc_s1_comma____",
    "stageId": 1,
    "word": "Comma (,)",
    "phonetics": "/ˈkɒm.ə/",
    "definition": "The punctuation mark ⟨,⟩ used to indicate a set off parts of a sentence or between elements of a list.",
    "example": "This is the word Comma (,).",
    "isNew": true,
    "wordZh": "逗号",
    "definitionZh": "标点符号 ⟨,⟩ 用于指示句子的部分或列表元素之间的分隔部分。",
    "exampleZh": "这是单词逗号 (,)。"
  },
  {
    "id": "fc_s1_colon____",
    "stageId": 1,
    "word": "Colon (:)",
    "phonetics": "/ˈkəʊ.lɒn/",
    "definition": "The punctuation mark \":\".",
    "example": "This is the word Colon (:).",
    "isNew": true,
    "wordZh": "冒号",
    "definitionZh": "标点符号“：”。",
    "exampleZh": "这是冒号 (:) 这个词。"
  },
  {
    "id": "fc_s1_semicolon____",
    "stageId": 1,
    "word": "Semicolon (;)",
    "phonetics": "/ˌsɛmiˈkəʊlən/",
    "definition": "The punctuation mark ;.",
    "example": "This is the word Semicolon (;).",
    "isNew": true,
    "wordZh": "分号",
    "definitionZh": "标点符号;。",
    "exampleZh": "这是单词分号 (;)。"
  },
  {
    "id": "fc_s1_umbrella",
    "stageId": 1,
    "word": "Umbrella",
    "phonetics": "/ʌmˈbɹɛlə/",
    "definition": "Cloth-covered frame used for protection against rain or sun.",
    "example": "Quick, grab that umbrella before you get rained on!",
    "isNew": true,
    "wordZh": "伞",
    "definitionZh": "布制框架用于防雨或防晒。",
    "exampleZh": "快点，在被雨淋到之前，带上雨伞吧！"
  },
  {
    "id": "fc_s1_pronounce",
    "stageId": 1,
    "word": "Pronounce",
    "phonetics": "/pɹəˈnaʊns/",
    "definition": "To declare formally, officially or ceremoniously.",
    "example": "I hereby pronounce you man and wife.",
    "isNew": true,
    "wordZh": "发音",
    "definitionZh": "正式、正式或隆重地宣布。",
    "exampleZh": "我在此宣布你们结为夫妻。"
  },
  {
    "id": "fc_s1_an",
    "stageId": 1,
    "word": "An",
    "phonetics": "/æn/",
    "definition": "One",
    "example": "This is the word An.",
    "isNew": true,
    "wordZh": "一不定冠词",
    "definitionZh": "一",
    "exampleZh": "这是安字。"
  },
  {
    "id": "fc_s1_body",
    "stageId": 1,
    "word": "Body",
    "phonetics": "/ˈbɒdi/",
    "definition": "The shank of a type, or the depth of the shank (by which the size is indicated).",
    "example": "a nonpareil face on an agate body",
    "isNew": true,
    "wordZh": "身体",
    "definitionZh": "类型的柄，或柄的深度（通过它来指示尺寸）。",
    "exampleZh": "玛瑙体上无与伦比的面孔"
  },
  {
    "id": "fc_s1_part",
    "stageId": 1,
    "word": "Part",
    "phonetics": "/pɐːt/",
    "definition": "Duty; responsibility.",
    "example": "to do one’s part",
    "isNew": true,
    "wordZh": "部分",
    "definitionZh": "责任;责任。",
    "exampleZh": "尽自己的一份力量"
  },
  {
    "id": "fc_s1_foot",
    "stageId": 1,
    "word": "Foot",
    "phonetics": "[fʊt̚]",
    "definition": "A biological structure found in many animals that is used for locomotion and that is frequently a separate organ at the terminal part of the leg.",
    "example": "A spider has eight feet.",
    "isNew": true,
    "wordZh": "脚",
    "definitionZh": "在许多动物中发现的一种生物结构，用于运动，通常是腿末端的一个独立器官。",
    "exampleZh": "蜘蛛有八只脚。"
  },
  {
    "id": "fc_s1_feet__plural_of_foot_",
    "stageId": 1,
    "word": "Feet (plural of foot)",
    "phonetics": "/fiːt/",
    "definition": "A biological structure found in many animals that is used for locomotion and that is frequently a separate organ at the terminal part of the leg.",
    "example": "A spider has eight feet.",
    "isNew": true,
    "wordZh": "的复数形式",
    "definitionZh": "在许多动物中发现的一种生物结构，用于运动，通常是腿末端的一个独立器官。",
    "exampleZh": "蜘蛛有八只脚。"
  },
  {
    "id": "fc_s1_leg",
    "stageId": 1,
    "word": "Leg",
    "phonetics": "/leɪɡ/",
    "definition": "A limb or appendage that an animal uses for support or locomotion.",
    "example": "{{ux|en|Insects have six legs.}",
    "isNew": true,
    "wordZh": "腿",
    "definitionZh": "动物用来支撑或运动的肢体或附属物。",
    "exampleZh": "{{ux|en|昆虫有六条腿。}"
  },
  {
    "id": "fc_s1_back",
    "stageId": 1,
    "word": "Back",
    "phonetics": "/bæk/",
    "definition": "The rear of the body, especially the part between the neck and the end of the spine and opposite the chest and belly.",
    "example": "Could you please scratch my back?",
    "isNew": true,
    "wordZh": "背部",
    "definitionZh": "身体的后部，特别是颈部和脊柱末端之间、与胸部和腹部相对的部分。",
    "exampleZh": "你能帮我挠挠背吗？"
  },
  {
    "id": "fc_s1_arm",
    "stageId": 1,
    "word": "Arm",
    "phonetics": "/ɑːm/",
    "definition": "The portion of the upper human appendage, from the shoulder to the wrist and sometimes including the hand.",
    "example": "She stood with her right arm extended and her palm forward to indicate “Stop!”",
    "isNew": true,
    "wordZh": "手臂",
    "definitionZh": "人类上肢的部分，从肩膀到手腕，有时包括手。",
    "exampleZh": "她站着，伸出右臂，手掌向前，示意“停！”"
  },
  {
    "id": "fc_s1_wrist",
    "stageId": 1,
    "word": "Wrist",
    "phonetics": "/ɹɪst/",
    "definition": "The complex joint between forearm bones, carpus, and metacarpals where the hand is attached to the arm; the carpus in a narrow sense.",
    "example": "This is the word Wrist.",
    "isNew": true,
    "wordZh": "手腕",
    "definitionZh": "前臂骨、腕骨和掌骨之间的复杂关节，手与手臂相连；狭义上的腕骨。",
    "exampleZh": "这是手腕这个词。"
  },
  {
    "id": "fc_s1_hand",
    "stageId": 1,
    "word": "Hand",
    "phonetics": "/hænd/",
    "definition": "The part of the forelimb below the forearm or wrist in a human, and the corresponding part in many other animals.",
    "example": "Her hands are really strong.",
    "isNew": true,
    "wordZh": "手臂",
    "definitionZh": "人类前臂或手腕下方的前肢部分，以及许多其他动物的相应部分。",
    "exampleZh": "她的手真的很有力。"
  },
  {
    "id": "fc_s1_finger",
    "stageId": 1,
    "word": "Finger",
    "phonetics": "/ˈfɪŋəɹ/",
    "definition": "A slender jointed extremity of the human hand, exclusive of the thumb.",
    "example": "Humans have two hands and ten fingers. Each hand has one thumb and four fingers.",
    "isNew": true,
    "wordZh": "手指",
    "definitionZh": "人手的细长关节末端，不包括拇指。",
    "exampleZh": "人类有两只手和十个手指。每只手都有一个拇指和四个手指。"
  },
  {
    "id": "fc_s1_thumb",
    "stageId": 1,
    "word": "Thumb",
    "phonetics": "/θʌm/",
    "definition": "A thumbnail picture.",
    "example": "2001, \"Gary\", Wanna See Porn? Take a Look At These (Free Expandable Thumbs) - CLICK HERE (on newsgroup alt.sex.services)",
    "isNew": true,
    "wordZh": "大拇指",
    "definitionZh": "缩略图。",
    "exampleZh": "2001年，“加里”，想看色情片吗？看看这些（免费可扩展拇指） - 单击此处（在新闻组 alt.sex.services 上）"
  },
  {
    "id": "fc_s1_right",
    "stageId": 1,
    "word": "Right",
    "phonetics": "/ˈɹaɪt/",
    "definition": "Straight, not bent.",
    "example": "a right line",
    "isNew": true,
    "wordZh": "正确的",
    "definitionZh": "直，不弯。",
    "exampleZh": "右线"
  },
  {
    "id": "fc_s1_wrong",
    "stageId": 1,
    "word": "Wrong",
    "phonetics": "/ɹɒŋ/",
    "definition": "Something that is immoral or not good.",
    "example": "Injustice is a heinous wrong.",
    "isNew": true,
    "wordZh": "错误的",
    "definitionZh": "不道德或不好的事情。",
    "exampleZh": "不公正是令人发指的错误。"
  },
  {
    "id": "fc_s1_question",
    "stageId": 1,
    "word": "Question",
    "phonetics": "/ˈkwɛstjən/",
    "definition": "A sentence, phrase or word which asks for information, reply or response; an interrogative.",
    "example": "What is your question?",
    "isNew": true,
    "wordZh": "问题",
    "definitionZh": "询问信息、答复或回应的句子、短语或单词；一个疑问句。",
    "exampleZh": "你的问题是什么？"
  },
  {
    "id": "fc_s1_answer",
    "stageId": 1,
    "word": "Answer",
    "phonetics": "/ˈan.sə/",
    "definition": "A response or reply; something said or done in reaction to a statement or question.",
    "example": "Her answer to his proposal was a slap in the face.",
    "isNew": true,
    "wordZh": "答案",
    "definitionZh": "回应或答复；针对陈述或问题而说或做的事情。",
    "exampleZh": "她对他提议的回答是一记耳光。"
  },
  {
    "id": "fc_s1_meaning",
    "stageId": 1,
    "word": "Meaning",
    "phonetics": "/ˈmiːnɪŋ/",
    "definition": "The value, purpose, importance, point or significance (of something beyond the fact of that thing's existence).",
    "example": "the meaning of life",
    "isNew": true,
    "wordZh": "含义",
    "definitionZh": "价值、目的、重要性、要点或重要性（超出该事物存在事实的事物）。",
    "exampleZh": "生命的意义"
  },
  {
    "id": "fc_s1_name",
    "stageId": 1,
    "word": "Name",
    "phonetics": "/neɪm/",
    "definition": "Any nounal word or phrase which indicates a particular person, place, class, or thing.",
    "example": "I've never liked the name my parents gave me so I changed it at the age of twenty.",
    "isNew": true,
    "wordZh": "姓名",
    "definitionZh": "任何表示特定人、地点、类别或事物的名词词或短语。",
    "exampleZh": "我一直不喜欢父母给我起的名字，所以我在二十岁时改变了它。"
  },
  {
    "id": "fc_s1_head",
    "stageId": 1,
    "word": "Head",
    "phonetics": "/hɛd/",
    "definition": "The part of the body of an animal or human which contains the brain, mouth and main sense organs.",
    "example": "Be careful when you pet that dog on the head; it may bite.",
    "isNew": true,
    "wordZh": "头",
    "definitionZh": "动物或人类身体的一部分，包含大脑、口腔和主要感觉器官。",
    "exampleZh": "当你抚摸那只狗的头时要小心；它可能会咬人。"
  },
  {
    "id": "fc_s1_face",
    "stageId": 1,
    "word": "Face",
    "phonetics": "/feɪs/",
    "definition": "The front part of the head of a human or other animal, featuring the eyes, nose and mouth, and the surrounding area.",
    "example": "That girl has a pretty face.",
    "isNew": true,
    "wordZh": "脸",
    "definitionZh": "人类或其他动物头部的前部，包括眼睛、鼻子和嘴巴以及周围区域。",
    "exampleZh": "那个女孩有一张漂亮的脸。"
  },
  {
    "id": "fc_s1_chin",
    "stageId": 1,
    "word": "Chin",
    "phonetics": "/tʃɪn/",
    "definition": "The bottom of a face, (specifically) the typically jutting jawline below the mouth.",
    "example": "This is the word Chin.",
    "isNew": true,
    "wordZh": "下巴",
    "definitionZh": "脸部的底部，（特别是）嘴巴下方通常突出的下巴线。",
    "exampleZh": "这是钦字。"
  },
  {
    "id": "fc_s1_mouth",
    "stageId": 1,
    "word": "Mouth",
    "phonetics": "/mʌʊθ/",
    "definition": "The opening of a creature through which food is ingested.",
    "example": "\"Open your mouth and say 'aah',\" directed the doctor.",
    "isNew": true,
    "wordZh": "嘴",
    "definitionZh": "生物的开口，通过它摄取食物。",
    "exampleZh": "“张开嘴，说‘啊’，”医生指示道。"
  },
  {
    "id": "fc_s1_nose",
    "stageId": 1,
    "word": "Nose",
    "phonetics": "/nəʊz/",
    "definition": "A protuberance on the face housing the nostrils, which are used to breathe or smell.",
    "example": "She has a cold in the nose.",
    "isNew": true,
    "wordZh": "鼻子",
    "definitionZh": "脸上有鼻孔的突起，用于呼吸或闻气味。",
    "exampleZh": "她鼻子感冒了。"
  },
  {
    "id": "fc_s1_eye",
    "stageId": 1,
    "word": "Eye",
    "phonetics": "/aɪ/",
    "definition": "An organ through which animals see (perceive surroundings via light).",
    "example": "Bright lights really hurt my eyes.",
    "isNew": true,
    "wordZh": "眼睛",
    "definitionZh": "动物观察的器官（通过光感知周围环境）。",
    "exampleZh": "明亮的灯光确实刺痛了我的眼睛。"
  },
  {
    "id": "fc_s1_ear",
    "stageId": 1,
    "word": "Ear",
    "phonetics": "/ɪə̯/",
    "definition": "The sense of hearing; the perception of sounds; skill or good taste in listening to music.",
    "example": "a good ear for music",
    "isNew": true,
    "wordZh": "耳朵",
    "definitionZh": "听觉；对声音的感知；听音乐的技巧或良好的品味。",
    "exampleZh": "善于聆听音乐"
  },
  {
    "id": "fc_s1_hair",
    "stageId": 1,
    "word": "Hair",
    "phonetics": "/heː/",
    "definition": "The collection or mass of such growths growing from the skin of humans and animals, and forming a covering for a part of the head or for any part or the whole body.",
    "example": "In the western world, women usually have long hair while men usually have short hair.",
    "isNew": true,
    "wordZh": "头发",
    "definitionZh": "从人类和动物的皮肤上生长的此类生长物的集合或团块，并形成头部的一部分或任何部分或整个身体的覆盖物。",
    "exampleZh": "在西方世界，女性通常留长发，而男性通常留短发。"
  },
  {
    "id": "fc_s1_tongue",
    "stageId": 1,
    "word": "Tongue",
    "phonetics": "/tʌŋ/",
    "definition": "This organ, as taken from animals used for food (especially cows).−",
    "example": "cold tongue with mustard",
    "isNew": true,
    "wordZh": "舌头",
    "definitionZh": "这个器官，取自用作食物的动物（尤其是牛）。−",
    "exampleZh": "芥末冷舌"
  },
  {
    "id": "fc_s1_remaining",
    "stageId": 1,
    "word": "Remaining",
    "phonetics": "/ɹɪˈmeɪnɪŋ/",
    "definition": "To continue unchanged in place, form, or condition, or undiminished in quantity; to abide; to stay; to endure; to last.",
    "example": "There was no food in the house, so I had to remain hungry.",
    "isNew": true,
    "wordZh": "留在",
    "definitionZh": "地点、形式或条件继续保持不变，或数量不减少；遵守；留下来；忍受；持续下去。",
    "exampleZh": "家里没有食物，我只能挨饿。"
  },
  {
    "id": "fc_s1_country",
    "stageId": 1,
    "word": "Country",
    "phonetics": "/ˈkɐntɹi/",
    "definition": "(chiefly British) An area of land; a district, region.",
    "example": "This is the word Country.",
    "isNew": true,
    "wordZh": "国家",
    "definitionZh": "（主要是英国）一块土地；一个地区、地区。",
    "exampleZh": "这是国家这个词。"
  },
  {
    "id": "fc_s1_spain",
    "stageId": 1,
    "word": "Spain",
    "phonetics": "/spain/",
    "definition": "Meaning of the word spain.",
    "example": "This is the word spain.",
    "isNew": true,
    "wordZh": "西班牙",
    "definitionZh": "西班牙这个词的意思。",
    "exampleZh": "这是西班牙这个词。"
  },
  {
    "id": "fc_s1_translate",
    "stageId": 1,
    "word": "Translate",
    "phonetics": "/ˈtɹɛnzlæet/",
    "definition": "To entrance, to cause to lose recollection or sense.",
    "example": "William was translated by the blow to the head he received, being unable to speak for the next few minutes.",
    "isNew": true,
    "wordZh": "翻译",
    "definitionZh": "进入，导致失去记忆或感觉。",
    "exampleZh": "威廉因头部受到重击而被转移，在接下来的几分钟内无法说话。"
  },
  {
    "id": "fc_s1_into",
    "stageId": 1,
    "word": "Into",
    "phonetics": "/ˈɪn.tuː/",
    "definition": "To or towards the inside of.",
    "example": "Mary danced into the house.",
    "isNew": true,
    "wordZh": "成",
    "definitionZh": "向或朝向...的内部。",
    "exampleZh": "玛丽跳进屋里。"
  },
  {
    "id": "fc_s1_who",
    "stageId": 1,
    "word": "Who",
    "phonetics": "/huː/",
    "definition": "(interrogative) What person or people; which person or people; asks for the identity of someone. (used in a direct or indirect question)",
    "example": "I don't know who it is. (indirect question)",
    "isNew": true,
    "wordZh": "谁",
    "definitionZh": "（疑问）什么人或哪些人；哪个人或哪些人；询问某人的身份。 （用于直接或间接疑问句）",
    "exampleZh": "我不知道是谁。 （间接疑问句）"
  },
  {
    "id": "fc_s1_thing",
    "stageId": 1,
    "word": "Thing",
    "phonetics": "/θɪŋ/",
    "definition": "A genuine concept, entity or phenomenon; something that actually exists (often contrary to expectation or belief).",
    "example": "Bacon pie? Is that a thing?",
    "isNew": true,
    "wordZh": "事物",
    "definitionZh": "真实的概念、实体或现象；实际存在的东西（通常与期望或信念相反）。",
    "exampleZh": "培根馅饼？这是一件事吗？"
  },
  {
    "id": "fc_s1_tall",
    "stageId": 1,
    "word": "Tall",
    "phonetics": "/tɔːl/",
    "definition": "(of a person) Having a vertical extent greater than the average. For example, somebody with a height of over 6 feet would generally be considered to be tall.",
    "example": "Being tall is an advantage in basketball.",
    "isNew": true,
    "wordZh": "高的",
    "definitionZh": "（人的）垂直范围大于平均值。例如，身高超过 6 英尺的人通常会被认为很高。",
    "exampleZh": "身高在篮球运动中是一个优势。"
  },
  {
    "id": "fc_s1_scandinavia",
    "stageId": 1,
    "word": "Scandinavia",
    "phonetics": "/scandinavia/",
    "definition": "Meaning of the word scandinavia.",
    "example": "This is the word scandinavia.",
    "isNew": true,
    "wordZh": "斯堪的纳维亚",
    "definitionZh": "斯堪的纳维亚一词的含义。",
    "exampleZh": "这是斯堪的纳维亚这个词。"
  },
  {
    "id": "fc_s1_difference",
    "stageId": 1,
    "word": "Difference",
    "phonetics": "/ˈdɪfəɹən(t)s/",
    "definition": "The quality of being different.",
    "example": "You need to learn to be more tolerant of difference.",
    "isNew": true,
    "wordZh": "差别",
    "definitionZh": "与众不同的品质。",
    "exampleZh": "你需要学会更加宽容差异。"
  },
  {
    "id": "fc_s1_whereas",
    "stageId": 1,
    "word": "Whereas",
    "phonetics": "/weəɹˈæz/",
    "definition": "In contrast; whilst on the contrary; although.",
    "example": "He came first in the race, whereas his brother came last.",
    "isNew": true,
    "wordZh": "然而",
    "definitionZh": "相比之下;而相反；虽然。",
    "exampleZh": "他在比赛中获得第一名，而他的兄弟则垫底。"
  },
  {
    "id": "fc_s1_asking",
    "stageId": 1,
    "word": "Asking",
    "phonetics": "/ˈaskɪŋ/",
    "definition": "To request (information, or an answer to a question).",
    "example": "I asked her age.",
    "isNew": true,
    "wordZh": "正在问",
    "definitionZh": "请求（信息或问题的答案）。",
    "exampleZh": "我问她的年龄。"
  },
  {
    "id": "fc_s1_answering",
    "stageId": 1,
    "word": "Answering",
    "phonetics": "/ˈɑːn.sə.ɹɪŋ/",
    "definition": "To make a reply or response to.",
    "example": "He answered the question.",
    "isNew": true,
    "wordZh": "正在回答",
    "definitionZh": "作出答复或回应。",
    "exampleZh": "他回答了问题。"
  },
  {
    "id": "fc_s1_to_have",
    "stageId": 1,
    "word": "To have",
    "phonetics": "/tʉː/",
    "definition": "Toward a closed, touching or engaging position.",
    "example": "Please push the door to.",
    "isNew": true,
    "wordZh": "拥有",
    "definitionZh": "朝向闭合、接触或接合位置。",
    "exampleZh": "请推门进去。"
  },
  {
    "id": "fc_s1_i_have___i_ve",
    "stageId": 1,
    "word": "I have / I've",
    "phonetics": "/i have / i've/",
    "definition": "The name of the Latin-script letter I.",
    "example": "the position of an i-dot (the dot of an i)",
    "isNew": true,
    "wordZh": "我有缩写形式",
    "definitionZh": "拉丁字母 I 的名称。",
    "exampleZh": "i-dot 的位置（i 的点）"
  },
  {
    "id": "fc_s1_you_have___you_ve",
    "stageId": 1,
    "word": "You have / You've",
    "phonetics": "/jʉː/",
    "definition": "(object pronoun) The people spoken, or written to, as an object.",
    "example": "Both of you should get ready now.",
    "isNew": true,
    "wordZh": "你有缩写形式",
    "definitionZh": "（宾语代词）作为宾语说话或写信的人。",
    "exampleZh": "你们俩现在应该做好准备了。"
  },
  {
    "id": "fc_s1_he_has___he_s",
    "stageId": 1,
    "word": "He has / He's",
    "phonetics": "/hi/",
    "definition": "A male.",
    "example": "Is your cat a he or a she?",
    "isNew": true,
    "wordZh": "他有缩写形式",
    "definitionZh": "一名男性。",
    "exampleZh": "你的猫是公猫还是母猫？"
  },
  {
    "id": "fc_s1_she_has___she_s",
    "stageId": 1,
    "word": "She has / She's",
    "phonetics": "/ʃiː/",
    "definition": "A female.",
    "example": "Pat is definitely a she.",
    "isNew": true,
    "wordZh": "她有缩写形式",
    "definitionZh": "一名女性。",
    "exampleZh": "帕特绝对是个女人。"
  },
  {
    "id": "fc_s1_it_has___it_s",
    "stageId": 1,
    "word": "It has / It's",
    "phonetics": "/ɪt/",
    "definition": "The person who chases and tries to catch the other players in the playground game of tag.",
    "example": "In the next game, Adam and Tom will be it…",
    "isNew": true,
    "wordZh": "它有缩写形式",
    "definitionZh": "在操场上的捉人游戏中追逐并试图抓住其他玩家的人。",
    "exampleZh": "在下一场比赛中，亚当和汤姆将是……"
  },
  {
    "id": "fc_s1_we_have___we_ve",
    "stageId": 1,
    "word": "We have / We've",
    "phonetics": "/wiː/",
    "definition": "(personal) The plural form of you, including everyone being addressed.",
    "example": "How are we all tonight?",
    "isNew": true,
    "wordZh": "我们有缩写形式",
    "definitionZh": "（个人）您的复数形式，包括所有被提及的人。",
    "exampleZh": "今晚我们都怎么样？"
  },
  {
    "id": "fc_s1_they_have___they_ve",
    "stageId": 1,
    "word": "They have / They've",
    "phonetics": "/ðeɪ/",
    "definition": "(the third-person plural) A group of people, animals, plants or objects previously mentioned.",
    "example": "Dogs may bark if they want to be fed.",
    "isNew": true,
    "wordZh": "他们有缩写形式",
    "definitionZh": "（第三人称复数）前面提到的一群人、动物、植物或物体。",
    "exampleZh": "如果狗想吃东西，它们可能会吠叫。"
  },
  {
    "id": "fc_s1_got__get_",
    "stageId": 1,
    "word": "Got (get)",
    "phonetics": "/ɡɒt/",
    "definition": "(ditransitive) To obtain; to acquire.",
    "example": "I'm going to get a computer tomorrow from the discount store.",
    "isNew": true,
    "wordZh": "的过去式和过去分词",
    "definitionZh": "（双及物）获得；获取。",
    "exampleZh": "我明天要去折扣店买一台电脑。"
  },
  {
    "id": "fc_s1_with",
    "stageId": 1,
    "word": "With",
    "phonetics": "/with/",
    "definition": "Along, together with others, in a group, etc.",
    "example": "Do you want to come with?",
    "isNew": true,
    "wordZh": "和一起",
    "definitionZh": "一起、与他人一起、在一个团体中等等。",
    "exampleZh": "你想一起去吗？"
  },
  {
    "id": "fc_s1_generally",
    "stageId": 1,
    "word": "Generally",
    "phonetics": "/d͡ʒɛn.əɹ.ə.li/",
    "definition": "Popularly or widely.",
    "example": "It is generally known that the Earth is round.",
    "isNew": true,
    "wordZh": "通常",
    "definitionZh": "流行或广泛。",
    "exampleZh": "众所周知，地球是圆的。"
  },
  {
    "id": "fc_s1_any",
    "stageId": 1,
    "word": "Any",
    "phonetics": "/ˈæni/",
    "definition": "To even the slightest extent, at all.",
    "example": "I will not remain here any longer.",
    "isNew": true,
    "wordZh": "一些用于否定句或疑问句",
    "definitionZh": "即使是最轻微的程度。",
    "exampleZh": "我不会再留在这里了。"
  },
  {
    "id": "fc_s1_some",
    "stageId": 1,
    "word": "Some",
    "phonetics": "/sɐm/",
    "definition": "Of a measurement: approximately, roughly.",
    "example": "I guess he must have weighed some 90 kilos.",
    "isNew": true,
    "wordZh": "一些用于肯定句",
    "definitionZh": "测量的：大约，粗略。",
    "exampleZh": "我猜他的体重一定有90公斤左右。"
  },
  {
    "id": "fc_s1_not_any",
    "stageId": 1,
    "word": "Not any",
    "phonetics": "/nɒt/",
    "definition": "Negates the meaning of the modified verb.",
    "example": "Did you take out the trash? No, I did not.",
    "isNew": true,
    "wordZh": "的否定形式",
    "definitionZh": "否定被修饰动词的含义。",
    "exampleZh": "你倒垃圾了吗？不，我没有。"
  },
  {
    "id": "fc_s1_none",
    "stageId": 1,
    "word": "None",
    "phonetics": "/nɒn/",
    "definition": "To no extent, in no way.",
    "example": "I felt none the worse for my recent illness.",
    "isNew": true,
    "wordZh": "没有",
    "definitionZh": "无论如何，绝不。",
    "exampleZh": "我对最近的病并没有感觉更糟。"
  },
  {
    "id": "fc_s1_specific",
    "stageId": 1,
    "word": "Specific",
    "phonetics": "/spəˈsɪf.ɪk/",
    "definition": "Serving to identify a particular thing (often a disease or condition), with little risk of mistaking something else for it.",
    "example": "a highly specific test, specific and nonspecific symptoms",
    "isNew": true,
    "wordZh": "具体的",
    "definitionZh": "用于识别特定事物（通常是疾病或病症），而将其误认为其他事物的风险很小。",
    "exampleZh": "高度特异性的测试、特异性和非特异性症状"
  },
  {
    "id": "fc_s1_nonspecific___specific",
    "stageId": 1,
    "word": "Nonspecific / Specific",
    "phonetics": "/nonspecific / specific/",
    "definition": "Not specific or precise.",
    "example": "This is the word Nonspecific / Specific.",
    "isNew": true,
    "wordZh": "的否定形式",
    "definitionZh": "不具体或精确。",
    "exampleZh": "这是“非特定/特定”这个词。"
  },
  {
    "id": "fc_s1_negative",
    "stageId": 1,
    "word": "Negative",
    "phonetics": "/ˈnɛ(e)ɡəˌɾɪv/",
    "definition": "Damaging; undesirable; unfavourable.",
    "example": "Customers didn’t like it: feedback was mostly negative.",
    "isNew": true,
    "wordZh": "否定的",
    "definitionZh": "损坏；不受欢迎的；不利。",
    "exampleZh": "客户不喜欢它：反馈大多是负面的。"
  },
  {
    "id": "fc_s1_positive",
    "stageId": 1,
    "word": "Positive",
    "phonetics": "/ˈpɒzɪ̈tɪv/",
    "definition": "Fully assured in opinion.",
    "example": "I’m absolutely positive you've spelt that wrong.",
    "isNew": true,
    "wordZh": "肯定的",
    "definitionZh": "意见完全放心。",
    "exampleZh": "我绝对肯定你拼写错误。"
  },
  {
    "id": "fc_s1_for_example",
    "stageId": 1,
    "word": "For example",
    "phonetics": "/for example/",
    "definition": "Meaning of the word for example.",
    "example": "This is the word for example.",
    "isNew": true,
    "wordZh": "例如",
    "definitionZh": "例如该词的含义。",
    "exampleZh": "例如这个词。"
  },
  {
    "id": "fc_s1_important",
    "stageId": 1,
    "word": "Important",
    "phonetics": "/ɪmˈpɔːtənt/",
    "definition": "Having relevant and crucial value.",
    "example": "It is very important to give your daughter independence in her life so she learns from experience.",
    "isNew": true,
    "wordZh": "重要的",
    "definitionZh": "具有相关且关键的价值。",
    "exampleZh": "让您的女儿在生活中独立非常重要，这样她才能从经验中学习。"
  },
  {
    "id": "fc_s1_when",
    "stageId": 1,
    "word": "When",
    "phonetics": "/ʍɛn/",
    "definition": "The time at which something happens.",
    "example": "A good article will cover the who, the what, the when, the where, the why and the how.",
    "isNew": true,
    "wordZh": "何时",
    "definitionZh": "某事发生的时间。",
    "exampleZh": "一篇好的文章将涵盖人物、事件、时间、地点、原因和方式。"
  },
  {
    "id": "fc_s1_class",
    "stageId": 1,
    "word": "Class",
    "phonetics": "/klas/",
    "definition": "A group, collection, category or set sharing characteristics or attributes.",
    "example": "Often used to imply membership of a large class.",
    "isNew": true,
    "wordZh": "班级",
    "definitionZh": "共享特征或属性的群体、集合、类别或集合。",
    "exampleZh": "通常用来暗示一个大阶级的成员资格。"
  },
  {
    "id": "fc_s1_classroom",
    "stageId": 1,
    "word": "Classroom",
    "phonetics": "/ˈklɑːsɹʊm/",
    "definition": "A room, often in a school, where classes take place",
    "example": "This is the word Classroom.",
    "isNew": true,
    "wordZh": "教室",
    "definitionZh": "一个房间，通常在学校里，上课的地方",
    "exampleZh": "这是“课堂”这个词。"
  },
  {
    "id": "fc_structure",
    "stageId": 2,
    "word": "Structure",
    "phonetics": "/ˈstrʌk.tʃər/",
    "definition": "The arrangement of and relations between the parts or elements of something complex.",
    "example": "\"The grammatical structure of English sentences is practiced repeatedly.\"",
    "isNew": false,
    "wordZh": "结构",
    "definitionZh": "复杂事物的各个部分或元素之间的排列和关系。",
    "exampleZh": "“英语句子的语法结构是反复练习的。”",
    "wordJa": "構造",
    "definitionJa": "複雑なものの部分や要素の間の配置や関係。",
    "exampleJa": "「英文の文法構造は繰り返し練習されます。」",
    "wordVi": "Cấu trúc",
    "definitionVi": "Sự sắp xếp và mối quan hệ giữa các bộ phận hoặc yếu tố của một thứ phức tạp.",
    "exampleVi": "\"Cấu trúc ngữ pháp của các câu tiếng Anh được luyện tập lặp đi lặp lại.\"",
    "wordTh": "โครงสร้าง",
    "definitionTh": "การจัดเรียงและความสัมพันธ์ระหว่างส่วนต่างๆ หรือองค์ประกอบของสิ่งที่ซับซ้อน",
    "exampleTh": "\"โครงสร้างไวยากรณ์ของประโยคภาษาอังกฤษได้รับการฝึกฝนซ้ำๆ\"",
    "wordId": "Struktur",
    "definitionId": "Susunan dan hubungan antara bagian atau elemen dari sesuatu yang kompleks.",
    "exampleId": "\"Struktur tata bahasa dari kalimat bahasa Inggris dipraktikkan berulang kali.\"",
    "wordHi": "संरचना",
    "definitionHi": "किसी जटिल वस्तु के भागों या तत्वों के बीच की व्यवस्था और संबंध।",
    "exampleHi": "\"अंग्रेजी वाक्यों की व्याकरणिक संरचना का बार-बार अभ्यास किया जाता है।\""
  },
  {
    "id": "fc_intermediate",
    "stageId": 3,
    "word": "Intermediate",
    "phonetics": "/ˌɪn.təˈmiː.di.ət/",
    "definition": "Being or occurring between two other states, levels, or points.",
    "example": "\"In Stage 3, students move into intermediate speech speed containing compound clauses.\"",
    "isNew": true,
    "wordZh": "中级",
    "definitionZh": "处于或发生于其他两个状态、级别或点之间。",
    "exampleZh": "“在第三阶段，学生们进入包含复合从句的中级语速阶段。”",
    "wordJa": "中級者向け / 中間",
    "definitionJa": "他の2つの状態、レベル、またはポイントの間にあるか、またはそこで発生すること。",
    "exampleJa": "「ステージ3では、生徒は複合節を含む中級のスピーチスピードに移行します。」",
    "wordVi": "Trung cấp",
    "definitionVi": "Nằm ở giữa hoặc xảy ra giữa hai trạng thái, cấp độ hoặc điểm khác.",
    "exampleVi": "\"Ở Giai đoạn 3, học sinh chuyển sang tốc độ nói trung cấp có chứa các mệnh đề phụ hợp.\"",
    "wordTh": "ระดับกลาง",
    "definitionTh": "อยู่หรือเกิดขึ้นระหว่างอีกสองสถานะ ระดับ หรือจุดจุดหนึ่ง",
    "exampleTh": "\"ในขั้นตอนที่ 3 นักเรียนจะก้าวเข้าสู่ความเร็วของคำพูดระดับกลางซึ่งรวมถึงอนุประโยคที่ซับซ้อน\"",
    "wordId": "Menengah",
    "definitionId": "Berada atau terjadi di antara dua keadaan, tingkat, atau titik lainnya.",
    "exampleId": "\"Pada Tahap 3, siswa beralih ke kecepatan bicara tingkat menengah yang berisi klausa majemuk.\"",
    "wordHi": "मध्यवर्ती",
    "definitionHi": "दो अन्य राज्यों, स्तरों या बिंदुओं के बीच होना या होना।",
    "exampleHi": "\"चरण 3 में, छात्र संयुक्त उपवाक्यों वाले मध्यवर्ती भाषण गति में चले जाते हैं।\""
  },
  {
    "id": "fc_inevitable",
    "stageId": 4,
    "word": "Inevitable",
    "phonetics": "/ɪˈnev.ɪ.tə.bəl/",
    "definition": "Certain to happen and unable to be avoided or prevented.",
    "example": "\"The accident was the inevitable consequence of carelessness.\"",
    "isNew": true,
    "wordZh": "不可避免",
    "definitionZh": "必然会发生，无法被回避或预防。",
    "exampleZh": "“这次事故是粗心大意不可避免的后果。”",
    "wordJa": "避けられない / 必至",
    "definitionJa": "起こることが確実であり、回避または防止できないこと。",
    "exampleJa": "「その事故は不注意の避けられない結果でした。」",
    "wordVi": "Không thể tránh khỏi",
    "definitionVi": "Chắc chắn sẽ xảy ra và không thể tránh khỏi hoặc ngăn chặn.",
    "exampleVi": "\"Tai nạn là hậu quả tất yếu của sự bất cẩn.\"",
    "wordTh": "หลีกเลี่ยงไม่ได้",
    "definitionTh": "เกิดขึ้นอย่างแน่นอนและไม่สามารถหลีกเลี่ยงหรือป้องกันได้",
    "exampleTh": "\"อุบัติเหตุครั้งนี้เป็นผลลัพธ์ที่หลีกเลี่ยงไม่ได้ของความประมาท\"",
    "wordId": "Tak terhindarkan",
    "definitionId": "Pasti terjadi dan tidak dapat dihindari atau dicegah.",
    "exampleId": "\"Kecelakaan itu adalah konsekuensi tak terhindarkan dari kecerobohan.\"",
    "wordHi": "अपरिहार्य",
    "definitionHi": "होना निश्चित है और टालने या रोकने में असमर्थ है।",
    "exampleHi": "\"दुर्घटना लापरवाही का अपरिहार्य परिणाम थी।\""
  },
  {
    "id": "fc_ambiguous",
    "stageId": 4,
    "word": "Ambiguous",
    "phonetics": "/æmˈbɪɡ.ju.əs/",
    "definition": "Having or expressing more than one possible meaning, sometimes intentionally.",
    "example": "\"His reply to my question was somewhat ambiguous, leaving us unsure.\"",
    "isNew": true,
    "wordZh": "模棱两可 / 含糊",
    "definitionZh": "具有或表达多于一种可能的含义，有时是刻意为之。",
    "exampleZh": "“他对我提问的回答有些含糊，让我们很不确定。”",
    "wordJa": "曖昧な / 多義的な",
    "definitionJa": "2つ以上の考えられる意味を持っている、または表現していること（意図的な場合もある）。",
    "exampleJa": "「私の質問に対する彼の返答はやや曖昧で、確信が持てませんでした。」",
    "wordVi": "Mơ hồ / Nhập nhằng",
    "definitionVi": "Có hoặc diễn đạt nhiều hơn một ý nghĩa có thể có, đôi khi do cố ý.",
    "exampleVi": "\"Câu trả lời của anh ấy cho câu hỏi của tôi có phần mơ hồ, khiến chúng tôi không chắc chắn.\"",
    "wordTh": "กำกวม",
    "definitionTh": "มีหรือแสดงความหมายที่เป็นไปได้มากกว่าหนึ่งความหมาย ซึ่งบางครั้งก็ทำโดยตั้งใจ",
    "exampleTh": "\"คำตอบของเขาต่อคำถามของฉันค่อนข้างกำกวม ทำให้เราไม่แน่ใจ\"",
    "wordId": "Ambigu",
    "definitionId": "Memiliki atau mengekspresikan lebih dari satu kemungkinan makna, terkadang disengaja.",
    "exampleId": "\"Jawabannya atas pertanyaan saya agak ambigu, membuat kami tidak yakin.\"",
    "wordHi": "अस्पष्ट",
    "definitionHi": "एक से अधिक संभावित अर्थ होना या व्यक्त करना, कभी-कभी जानबूझकर।",
    "exampleHi": "\"मेरे प्रश्न का उनका उत्तर कुछ अस्पष्ट था, जिससे हम अनिश्चित रह गए।\""
  },
  {
    "id": "fc_subtle",
    "stageId": 4,
    "word": "Subtle",
    "phonetics": "/ˈsʌt.əl/",
    "definition": "Small but important, or not obvious or easy to notice directly.",
    "example": "\"There are subtle differences between the words quickly and fast.\"",
    "isNew": false,
    "wordZh": "微妙",
    "definitionZh": "微小但重要，或不明显、不易被直接察觉。",
    "exampleZh": "“‘Quickly’ 和 ‘Fast’ 两词之间有着微妙的区别。”",
    "wordJa": "微妙な / 繊細な",
    "definitionJa": "小さいが重要、あるいは明白ではない、または直接気づきにくい。",
    "exampleJa": "「quicklyとfastという言葉には微妙な違いがあります。」",
    "wordVi": "Tinh tế / Tế nhị",
    "definitionVi": "Nhỏ nhưng quan trọng, hoặc không rõ ràng hay dễ dàng nhận ra trực tiếp.",
    "exampleVi": "\"Có sự khác biệt tinh tế giữa hai từ quickly và fast.\"",
    "wordTh": "บอบบาง / สังเกตได้ยาก",
    "definitionTh": "เล็กน้อยแต่สำคัญ หรือไม่ชัดเจนและสังเกตได้ยากในทันที",
    "exampleTh": "\"มีความแตกต่างเล็กน้อยที่สังเกตได้ยากระหว่างคำว่า quickly และ fast\"",
    "wordId": "Halus / Samar",
    "definitionId": "Kecil tapi penting, atau tidak jelas atau mudah diperhatikan secara langsung.",
    "exampleId": "\"Ada perbedaan halus antara kata quickly dan fast.\"",
    "wordHi": "सूक्ष्म",
    "definitionHi": "छोटा लेकिन महत्वपूर्ण, या प्रत्यक्ष रूप से स्पष्ट या नोटिस करना आसान नहीं है।",
    "exampleHi": "\"Quickly और fast शब्दों के बीच सूक्ष्म अंतर हैं।\""
  },
  {
    "id": "fc_redundant",
    "stageId": 4,
    "word": "Redundant",
    "phonetics": "/rɪˈdʌn.dənt/",
    "definition": "No longer needed or useful, especially because of repetition or duplication.",
    "example": "\"Repeating the exact same phrase without modification makes it redundant.\"",
    "isNew": false,
    "wordZh": "多余的 / 冗余的",
    "definitionZh": "不再需要或无用，特别是由于重复或重叠。",
    "exampleZh": "“不加修改地重复完全相同的短语会显得多余繁琐。”",
    "wordJa": "余計な / 冗長な",
    "definitionJa": "特に反復や重複のために、もはや必要ない、あるいは有用ではない。",
    "exampleJa": "「変更なしにまったく同じフレーズを繰り返すと冗長になります。」",
    "wordVi": "Dư thừa / Rườm rà",
    "definitionVi": "Không còn cần thiết hay có ích, đặc biệt là do sự lặp lại hoặc trùng lặp.",
    "exampleVi": "\"Việc lặp lại cùng một cụm từ chính xác mà không sửa đổi khiến nó trở nên dư thừa.\"",
    "wordTh": "ฟุ่มเฟือย / ซ้ำซ้อน",
    "definitionTh": "ไม่จำเป็นหรือไม่มีประโยชน์อีกต่อไป โดยเฉพาะอย่างยิ่งเนื่องจากการทำซ้ำหรือการซ้ำซ้อน",
    "exampleTh": "\"การทำซ้ำประโยคเดิมทุกประการโดยไม่มีการเพิ่มเติมใดๆ ทำให้ความหมายนั้นซ้ำซ้อน\"",
    "wordId": "Mubazir / Redundan",
    "definitionId": "Tidak lagi dibutuhkan atau berguna, terutama karena pengulangan atau duplikasi.",
    "exampleId": "\"Mengulangi frasa yang sama persis tanpa modifikasi membuatnya menjadi berlebihan.\"",
    "wordHi": "अनावश्यक",
    "definitionHi": "अब आवश्यक या उपयोगी नहीं है, विशेष रूप से दोहराव या नकल के कारण।",
    "exampleHi": "\"बिना किसी संशोधन के एक ही वाक्यांश को दोहराना उसे अनावश्यक बनाता है।\""
  },
  {
    "id": "fc_eloquent",
    "stageId": 4,
    "word": "Eloquent",
    "phonetics": "/ˈel.ə.kwənt/",
    "definition": "Giving a clear, strong, and persuasive expression or speech in English.",
    "example": "\"He is an eloquent speaker who expresses his thoughts beautifully.\"",
    "isNew": true,
    "wordZh": "雄辩的 / 善于表达的",
    "definitionZh": "在英语中给出清晰、有力且有说服力的表达或演讲。",
    "exampleZh": "“他是一位雄辩的演讲者，他将自己的思想表达得很漂亮。”",
    "wordJa": "雄弁な / 説得力のある",
    "definitionJa": "英語で明確、強力、かつ説得力のある表現やスピーチを行うこと。",
    "exampleJa": "「彼は自分の考えを美しく表現する雄弁な話し手です。」",
    "wordVi": "Hùng biện / Có sức thuyết phục",
    "definitionVi": "Diễn tả rõ ràng, mạnh mẽ và đầy thuyết phục trong biểu đạt hoặc lời nói bằng tiếng Anh.",
    "exampleVi": "\"Anh ấy là một người phát ngôn hùng biện, truyền đạt suy nghĩ của mình rất hay.\"",
    "wordTh": "ที่มีวาทศิลป์",
    "definitionTh": "การแสดงออกหรือการพูดภาษาอังกฤษที่ชัดเจน ทรงพลัง และโน้มน้าวใจได้ดี",
    "exampleTh": "\"เขาเป็นนักพูดที่มีวาทศิลป์ซึ่งถ่ายทอดความคิดของเขาออกมาได้อย่างไพเราะ\"",
    "wordId": "Lancar / Elok",
    "definitionId": "Memberikan ekspresi atau pidato yang jelas, kuat, dan persuasif dalam bahasa Inggris.",
    "exampleId": "\"Dia adalah pembicara yang fasih yang mengungkapkan pikirannya dengan indah.\"",
    "wordHi": "सुवक्ता / प्रभावशाली",
    "definitionHi": "अंग्रेजी में स्पष्ट, मजबूत और प्रेरक अभिव्यक्ति या भाषण देना।",
    "exampleHi": "\"वह एक प्रभावशाली वक्ता हैं जो अपने विचारों को खूबसूरती से व्यक्त करते हैं।\""
  },
  {
    "id": "fc_essential",
    "stageId": 5,
    "word": "Essential",
    "phonetics": "/ɪˈsen.ʃəl/",
    "definition": "Absolutely necessary; extremely important in a particular situation.",
    "example": "\"High-speed repetition is essential for developing direct English reflexes.\"",
    "isNew": true
  },
  {
    "id": "fc_cognitive",
    "stageId": 6,
    "word": "Cognitive",
    "phonetics": "/ˈkɒɡ.nɪ.tɪv/",
    "definition": "Relating to conscious mental activities such as thinking, understanding, or learning.",
    "example": "\"Vocal reflex drills speed up our cognitive processing when speaking English.\"",
    "isNew": false
  },
  {
    "id": "fc_syllabus",
    "stageId": 7,
    "word": "Syllabus",
    "phonetics": "/ˈsɪl.ə.bəs/",
    "definition": "An outline or summary of the subjects to be covered in a course of study.",
    "example": "\"Our syllabus covers all twelve stages of phonetic and lexical training.\"",
    "isNew": true
  },
  {
    "id": "fc_vocabulary",
    "stageId": 8,
    "word": "Vocabulary",
    "phonetics": "/vəˈkæb.jə.lə.ri/",
    "definition": "The body of words used in a particular language or representation.",
    "example": "\"This active vocabulary helps negotiate high-stake financial contracts with ease.\"",
    "isNew": false
  },
  {
    "id": "fc_negotiation",
    "stageId": 9,
    "word": "Negotiation",
    "phonetics": "/nəˌɡəʊ.ʃiˈeɪ.ʃən/",
    "definition": "Discussion aimed at reaching an agreement on terms.",
    "example": "\"The negotiation concluded with both parties agreeing to a mutual partnership.\"",
    "isNew": true
  },
  {
    "id": "fc_proficiency",
    "stageId": 10,
    "word": "Proficiency",
    "phonetics": "/prəˈfɪʃ.ən.si/",
    "definition": "A high degree of competence or skill; expertise.",
    "example": "\"Her proficiency in spoken English allowed her to lead international summits.\"",
    "isNew": false
  },
  {
    "id": "fc_mastery",
    "stageId": 11,
    "word": "Mastery",
    "phonetics": "/ˈmɑː.stər.i/",
    "definition": "Comprehensive knowledge or skill in a subject or accomplishment.",
    "example": "\"Achieving auditory mastery requires intense dedication to daily phonetic loops.\"",
    "isNew": true
  },
  {
    "id": "fc_fluency",
    "stageId": 12,
    "word": "Fluency",
    "phonetics": "/ˈfluː.ən.si/",
    "definition": "The quality or condition of being able to speak easily, write accurately, and understand naturally.",
    "example": "\"With stage twelve completed, you have unlocked complete native fluency.\"",
    "isNew": true
  }
];

export const ALL_ACHIEVEMENTS: Achievement[] = [
  {
    "id": "ach_stage1",
    "title": "Stage 1 Graduate",
    "description": "Successfully completed basic foundational exercises.",
    "icon": "Award",
    "colorType": "primary",
    "unlocked": true
  },
  {
    "id": "ach_daily",
    "title": "Daily Learner",
    "description": "Logged in and practiced vocal reflex drills 7 days in a row.",
    "icon": "CalendarDays",
    "colorType": "secondary",
    "unlocked": true
  },
  {
    "id": "ach_speed",
    "title": "Speed Master",
    "description": "Achieve over 90% pronunciation accuracy at fast tempo words.",
    "icon": "Zap",
    "colorType": "locked",
    "unlocked": false
  },
  {
    "id": "ach_repeats",
    "title": "Repetition Hero",
    "description": "Completed 1,000 oral repetition drill phrases successfully.",
    "icon": "Repeat",
    "colorType": "primary",
    "unlocked": true
  }
];

export const MESSAGES: Record<string, Record<string, string>> = {
  "zh": {
    "appName": "VocalGym",
    "home": "学习路径",
    "practice": "口语速练",
    "stats": "学习统计",
    "profile": "账户设置",
    "textbook": "教材原文",
    "filterStage": "筛选阶段",
    "selectStage": "选择阶段",
    "selectLesson": "选择课时",
    "allLessons": "📅 所有课时",
    "dialogueQuestions": "对话问答",
    "vocabulary": "核心词汇",
    "drill": "开始训练",
    "currentSession": "当前训练课时",
    "sentenceProgress": "口语句子进度",
    "dialoguePairs": "组教材Q&A对",
    "expectedAnswer": "教材原文标准回答",
    "yourAnswer": "你的口头回答",
    "tapToSpeak": "点按或长按进行英文口头作答",
    "tapToStop": "点击停止录音并评测",
    "audioLoading": "AI 老师正在评估发音中...",
    "pronAccuracy": "口语评测得分",
    "pronAccuracyTip": "对比原音在连贯度与辅元音精准度上的得分",
    "nextPhrase": "下一句",
    "prevPhrase": "上一句",
    "aiAssessor": "AI 肌肉反射教练评估意见",
    "repetitions": "累计跟读重复",
    "learnTime": "学练时长",
    "dayStreak": "连续天数",
    "hours": "小时",
    "minutes": "分钟",
    "seconds": "秒",
    "weeklyActivity": "周度练习活跃度",
    "achievements": "口语勋章 / 成就",
    "levelProgress": "各阶段掌握程度",
    "studyPath": "口语肌肉反射训练路径 (终极母语反击)",
    "readyToDrill": "已经准备好进入下一个跟读连击了吗？",
    "completed": "已击破",
    "resumeLesson": "继续上次课时",
    "originalTextbook": "教材原文对照阅读 (免翻阅官方源文件)"
  },
  "en": {
    "appName": "VocalGym",
    "home": "Study Path",
    "practice": "Oral Drill",
    "stats": "Learning Stats",
    "profile": "Settings",
    "textbook": "Textbook",
    "filterStage": "Filter Stage",
    "selectStage": "Select Stage",
    "selectLesson": "Select Lesson",
    "allLessons": "📅 All Lessons",
    "dialogueQuestions": "Dialogue Q&As",
    "vocabulary": "Core Vocabulary",
    "drill": "DRILL NOW",
    "currentSession": "Current Drill Lesson",
    "sentenceProgress": "Oral Sentence Progress",
    "dialoguePairs": "Q&A Pairs",
    "expectedAnswer": "Standard Textbook Answer",
    "yourAnswer": "Your Oral Response",
    "tapToSpeak": "Tap to answer aloud in English",
    "tapToStop": "Tap to stop & evaluate",
    "audioLoading": "AI coach reviewing pronunciation...",
    "pronAccuracy": "Speaking Evaluation Score",
    "pronAccuracyTip": "Based on fluency correlation and phonetic acoustic features",
    "nextPhrase": "Next Phrase",
    "prevPhrase": "Prev Phrase",
    "aiAssessor": "AI Coach Professional Feedback",
    "repetitions": "Total Repetitions",
    "learnTime": "Study Duration",
    "dayStreak": "Day Streak",
    "hours": "hours",
    "minutes": "min",
    "seconds": "sec",
    "weeklyActivity": "Weekly Training Intensity",
    "achievements": "Speaking Medals / Trophies",
    "levelProgress": "Stage Mastery Levels",
    "studyPath": "Vocal Reflex Muscle Output Route",
    "readyToDrill": "Ready to burst into your next speech training cycle?",
    "completed": "Mastered",
    "resumeLesson": "Resume Last Practice",
    "originalTextbook": "Original Textbook Reference"
  },
  "ja": {
    "appName": "VocalGym",
    "home": "学習パス",
    "practice": "口頭ドリル",
    "stats": "学習統計",
    "profile": "アカウント設定",
    "textbook": "教材原文",
    "filterStage": "ステージ絞り込み",
    "selectStage": "ステージ選択",
    "selectLesson": "レッスン選択",
    "allLessons": "📅 全レッスン",
    "dialogueQuestions": "対話レッスン",
    "vocabulary": "重要語彙",
    "drill": "トレーニング開始",
    "currentSession": "現在のレッスン",
    "sentenceProgress": "口頭フレーズ進捗",
    "dialoguePairs": "教材Q&Aペア",
    "expectedAnswer": "教材公式回答",
    "yourAnswer": "あなたの回答",
    "tapToSpeak": "タップして英語で発音・回答",
    "tapToStop": "タップして録音を終了し、評価",
    "audioLoading": "AIコーチが発音を評価中...",
    "pronAccuracy": "発音スコア精度",
    "pronAccuracyTip": "公式ネイティブ音声との流暢度・音響比較に基づく指標",
    "nextPhrase": "次のフレーズ",
    "prevPhrase": "前のフレーズ",
    "aiAssessor": "AIコーチのフィードバック",
    "repetitions": "スピーキング累計回数",
    "learnTime": "累計学習時間",
    "dayStreak": "継続日数",
    "hours": "時間",
    "minutes": "分",
    "seconds": "秒",
    "weeklyActivity": "週間練習ボリューム",
    "achievements": "学習実績・メダル",
    "levelProgress": "ステージ習得度",
    "studyPath": "VocalGym・英語頭脳反射ルート",
    "readyToDrill": "次の口頭トレーニングセッションを始めますか？",
    "completed": "習得済み",
    "resumeLesson": "前回の練習を再開",
    "originalTextbook": "教材テキスト参照"
  },
  "vi": {
    "appName": "VocalGym",
    "home": "Lộ trình học",
    "practice": "Luyện lặp xạ",
    "stats": "Thống kê",
    "profile": "Cài đặt tài khoản",
    "textbook": "Sách giáo trình",
    "filterStage": "Lọc Stage",
    "selectStage": "Chọn Stage",
    "selectLesson": "Chọn Bài học",
    "allLessons": "📅 Tất cả Bài học",
    "dialogueQuestions": "Câu hỏi hội thoại",
    "vocabulary": "Từ vựng cốt lõi",
    "drill": "LUYỆN NGAY",
    "currentSession": "Bài luyện tập hiện tại",
    "sentenceProgress": "Tiến độ câu nói",
    "dialoguePairs": "Cặp hội thoại Q&A",
    "expectedAnswer": "Câu trả lời mẫu giáo trình",
    "yourAnswer": "Phần nói của bạn",
    "tapToSpeak": "Nhấn để nói tiếng Anh thành tiếng",
    "tapToStop": "Nhấn để dừng & đánh giá",
    "audioLoading": "HLV AI đang chấm điểm phát âm...",
    "pronAccuracy": "Điểm phát âm phản xạ",
    "pronAccuracyTip": "Dựa trên tính lưu loát và độ chính xác âm học của ngữ âm",
    "nextPhrase": "Câu tiếp theo",
    "prevPhrase": "Câu trước",
    "aiAssessor": "Đánh giá chi tiết từ HLV AI",
    "repetitions": "Tổng số lần lặp lại",
    "learnTime": "Thời lượng luyện tập",
    "dayStreak": "Số ngày liên tục",
    "hours": "giờ",
    "minutes": "phút",
    "seconds": "giây",
    "weeklyActivity": "Cường độ luyện tập tuần",
    "achievements": "Huy chương / Danh hiệu",
    "levelProgress": "Mức độ thành thục Stage",
    "studyPath": "Lộ trình phát triển phản xạ nói VocalGym",
    "readyToDrill": "Sẵn sàng bùng nổ với chu kỳ nói tiếp theo?",
    "completed": "Đã thành thục",
    "resumeLesson": "Tiếp tục bài học trước",
    "originalTextbook": "Xem tài liệu giáo trình gốc"
  },
  "th": {
    "appName": "VocalGym",
    "home": "เส้นทางการเรียน",
    "practice": "ฝึกพูดสะท้อนกลับ",
    "stats": "สถิติการเรียน",
    "profile": "ตั้งค่าบัญชี",
    "textbook": "หนังสือเรียน",
    "filterStage": "กรอง Stage",
    "selectStage": "เลือก Stage",
    "selectLesson": "เลือกบทเรียน",
    "allLessons": "📅 บทเรียนทั้งหมด",
    "dialogueQuestions": "บทสนทนาถาม-ตอบ",
    "vocabulary": "คำศัพท์สำคัญ",
    "drill": "เริ่มฝึกพูดเลย",
    "currentSession": "บทเรียนที่ฝึกอยู่ขณะนี้",
    "sentenceProgress": "ความคืบหน้าการพูดประโยค",
    "dialoguePairs": "คู่สนทนาและคำถาม-ตอบ",
    "expectedAnswer": "คำตอบมาตรฐานตามตำรา",
    "yourAnswer": "คำพูดของคุณ",
    "tapToSpeak": "แตะเพื่อเริ่มพูดตอบเป็นภาษาอังกฤษ",
    "tapToStop": "แตะเพื่อหยุดและประเมินผล",
    "audioLoading": "โค้ช AI กำลังประเมินผลการออกเสียง...",
    "pronAccuracy": "คะแนนความแม่นยำในการพูด",
    "pronAccuracyTip": "ขึ้นอยู่กับความคล่องแคล่วและการเปรียบเทียบเสียงอะคูสติก",
    "nextPhrase": "ประโยคถัดไป",
    "prevPhrase": "ประโยคก่อนหน้า",
    "aiAssessor": "ข้อเสนอแนะระดับมืออาชีพจากโค้ช AI",
    "repetitions": "การพูดซ้ำสะสมทั้งหมด",
    "learnTime": "เวลาเรียนทั้งหมด",
    "dayStreak": "จำนวนวันติดต่อกัน",
    "hours": "ชั่วโมง",
    "minutes": "นาที",
    "seconds": "วินาที",
    "weeklyActivity": "ความเข้มข้นของการฝึกอบรมรายสัปดาห์",
    "achievements": "เหรียญรางวัลการพูด",
    "levelProgress": "ระดับความชำนาญของแต่ละ Stage",
    "studyPath": "เส้นทางการพูดภาษาอังกฤษได้อย่างคล่องแคล่วแบบ VocalGym",
    "readyToDrill": "คุณพร้อมสำหรับรอบการฝึกพูดขั้นต่อไปหรือยัง?",
    "completed": "เชี่ยวชาญแล้ว",
    "resumeLesson": "ฝึกฝนต่อจากครั้งล่าสุด",
    "originalTextbook": "เปรียบเทียบจากบทเรียนดั้งเดิม"
  },
  "id": {
    "appName": "VocalGym",
    "home": "Alur Belajar",
    "practice": "Latihan Lisan",
    "stats": "Statistik Belajar",
    "profile": "Pengaturan Akun",
    "textbook": "Buku Teks Asli",
    "filterStage": "Filter Tingkat",
    "selectStage": "Pilih Tingkat",
    "selectLesson": "Pilih Pelajaran",
    "allLessons": "📅 Semua Pelajaran",
    "dialogueQuestions": "Tanya Jawab Dialog",
    "vocabulary": "Kosakata Inti",
    "drill": "MULAI LATIHAN",
    "currentSession": "Sesi Pelajaran Aktif",
    "sentenceProgress": "Kemajuan Kalimat Lisan",
    "dialoguePairs": "Pasangan Tanya Jawab",
    "expectedAnswer": "Jawaban Sesuai Buku Teks",
    "yourAnswer": "Jawaban Lisan Anda",
    "tapToSpeak": "Ketuk untuk menjawab keras dalam bahasa Inggris",
    "tapToStop": "Ketuk untuk berhenti & evaluasi",
    "audioLoading": "Pelatih AI sedang mengevaluasi pengucapan...",
    "pronAccuracy": "Skor Akurasi Berbicara",
    "pronAccuracyTip": "Berdasar kelancaran dan kecocokan fitur akustik fonetik",
    "nextPhrase": "Frasa Berikutnya",
    "prevPhrase": "Frasa Sebelumnya",
    "aiAssessor": "Umpan Balik Profesional Pelatih AI",
    "repetitions": "Total Pengulangan",
    "learnTime": "Durasi Latihan",
    "dayStreak": "Hari Beruntun",
    "hours": "jam",
    "minutes": "menit",
    "seconds": "detik",
    "weeklyActivity": "Intensitas Latihan Mingguan",
    "achievements": "Medali / Penghargaan Berbicara",
    "levelProgress": "Tingkat Penguasaan Tahap",
    "studyPath": "Panduan Rute Kelancaran Berbicara VocalGym",
    "readyToDrill": "Siap untuk siklus latihan berbicara berikutnya?",
    "completed": "Selesai",
    "resumeLesson": "Lanjutkan Latihan Terakhir",
    "originalTextbook": "Referensi Buku Teks Asli"
  },
  "hi": {
    "appName": "VocalGym",
    "home": "अध्ययन मार्ग",
    "practice": "मौखिक ड्रिल",
    "stats": "अध्ययन आँकड़े",
    "profile": "खाता सेटिंग्स",
    "textbook": "मूल पाठ्यपुस्तक",
    "filterStage": "चरण फ़िल्टर",
    "selectStage": "चरण चुनें",
    "selectLesson": "पाठ चुनें",
    "allLessons": "📅 सभी पाठ",
    "dialogueQuestions": "संवाद प्रश्नोत्तरी",
    "vocabulary": "मुख्य शब्दावली",
    "drill": "अभी अभ्यास करें",
    "currentSession": "सक्रिय पाठ अभ्यास",
    "sentenceProgress": "मौखिक वाक्य प्रगति",
    "dialoguePairs": "सामग्री प्रश्नोत्तरी जोड़ी",
    "expectedAnswer": "मानक पाठ्यपुस्तक उत्तर",
    "yourAnswer": "आपका मौखिक उत्तर",
    "tapToSpeak": "अंग्रेजी में ज़ोर से बोलने के लिए टैप करें",
    "tapToStop": "रिकॉर्डिंग रोकने और मूल्यांकन के लिए टैप करें",
    "audioLoading": "AI कोच आपके उच्चारण का मूल्यांकन कर रहा है...",
    "pronAccuracy": "मौखिक शुद्धता स्कोर",
    "pronAccuracyTip": "प्रवाह और ध्वन्यात्मक ध्वनियों की शुद्धता की तुलना के आधार पर",
    "nextPhrase": "अगला वाक्य",
    "prevPhrase": "पिछला वाक्य",
    "aiAssessor": "AI कोच व्यावसायिक प्रतिक्रिया",
    "repetitions": "कुल मौखिक पुनरावृत्ति",
    "learnTime": "अभ्यास की अवधि",
    "dayStreak": "लगातार दिन",
    "hours": "घंटे",
    "minutes": "मिनट",
    "seconds": "सेकंड",
    "weeklyActivity": "सापाहिक अभ्यास तीव्रता",
    "achievements": "मौखिक पदक / उपलब्धियां",
    "levelProgress": "प्रत्येक चरण में महारत का स्तर",
    "studyPath": "VocalGym तीव्र मौखिक उच्चारण अध्ययन मार्ग",
    "readyToDrill": "क्या आप अगले बोलने के अभ्यास के लिए तैयार हैं?",
    "completed": "महारत हासिल की",
    "resumeLesson": "पिछला अभ्यास फिर से शुरू करें",
    "originalTextbook": "मूल पाठ्यपुस्तक संदर्भ"
  }
};

export const TEXTBOOK_LESSONS: TextbookLesson[] = [
  {
    "id": "tb_l1",
    "stageId": 1,
    "lessonId": 1,
    "title": "Lesson 1: Pen, Pencil, Book",
    "grammarNotes": {
      "en": "This refers to something close to the speaker. That refers to something far away.",
      "zh": "This（这个）用来指示靠近说话者的人或事物；That（那个）则指示距离较远的对象。口语肌肉条件反射训练要求用全句并以1.5倍语速原样回答，禁止碎片化缩写。"
    },
    "vocabulary": [
      {
        "word": "Pen",
        "phonetics": "/pen/",
        "meaningZh": "钢笔",
        "meaningEn": "An instrument for writing or drawing with ink."
      },
      {
        "word": "Pencil",
        "phonetics": "/ˈpen.səl/",
        "meaningZh": "铅笔",
        "meaningEn": "An instrument for writing or drawing, consisting of a thin stick of graphite."
      },
      {
        "word": "Book",
        "phonetics": "/bʊk/",
        "meaningZh": "书本",
        "meaningEn": "A written or printed work consisting of pages glued or sewn together."
      },
      {
        "word": "A",
        "phonetics": "/æɪ/",
        "meaningZh": "一不定冠词",
        "meaningEn": "The name of the Latin script letter A/a."
      },
      {
        "word": "What is (What's)",
        "phonetics": "/wɔt/",
        "meaningZh": "是什么缩写形式",
        "meaningEn": "(usually followed by \"with,\" but also sometimes \"would\" or \"might,\" especially in finance) In some manner or degree; in part; partly. See also what with"
      },
      {
        "word": "This",
        "phonetics": "/ðəs/",
        "meaningZh": "这",
        "meaningEn": "To the degree or extent indicated."
      },
      {
        "word": "It is / It's",
        "phonetics": "/ɪt/",
        "meaningZh": "它是缩写形式",
        "meaningEn": "The person who chases and tries to catch the other players in the playground game of tag."
      },
      {
        "word": "Table",
        "phonetics": "/ˈteɪ.bəl/",
        "meaningZh": "桌子",
        "meaningEn": "A piece of furniture with a flat top and one or more legs."
      },
      {
        "word": "Chair",
        "phonetics": "/tʃeər/",
        "meaningZh": "椅子",
        "meaningEn": "A seat for one person, with a support for the back."
      },
      {
        "word": "Light",
        "phonetics": "/laɪt/",
        "meaningZh": "灯",
        "meaningEn": "A source of illumination, especially an electric lamp."
      },
      {
        "word": "Wall",
        "phonetics": "/wɔːl/",
        "meaningZh": "墙壁",
        "meaningEn": "A continuous vertical structure that encloses or divides an area."
      },
      {
        "word": "Floor",
        "phonetics": "/flɔːr/",
        "meaningZh": "地板",
        "meaningEn": "The lower surface of a room, on which one stands or walks."
      },
      {
        "word": "Room",
        "phonetics": "/ruːm/",
        "meaningZh": "房间",
        "meaningEn": "A part of a building enclosed by walls."
      },
      {
        "word": "Ceiling",
        "phonetics": "/ˈsiː.lɪŋ/",
        "meaningZh": "天花板",
        "meaningEn": "The upper interior surface of a room."
      },
      {
        "word": "Window",
        "phonetics": "/ˈwɪn.dəʊ/",
        "meaningZh": "窗",
        "meaningEn": "An opening in the wall of a building to let in light and air."
      },
      {
        "word": "Door",
        "phonetics": "/dɔːr/",
        "meaningZh": "门",
        "meaningEn": "A barrier used to close an entrance."
      },
      {
        "word": "Clock",
        "phonetics": "/klɒk/",
        "meaningZh": "时钟",
        "meaningEn": "An instrument for measuring and showing time."
      },
      {
        "word": "Box",
        "phonetics": "/bɒks/",
        "meaningZh": "盒子",
        "meaningEn": "A container, typically rectangular, with a lid."
      },
      {
        "word": "Picture",
        "phonetics": "/ˈpɪk.tʃər/",
        "meaningZh": "照片",
        "meaningEn": "A painting, drawing, or photograph."
      },
      {
        "word": "Is this \"",
        "phonetics": "/is this \"/",
        "meaningZh": "这是吗",
        "meaningEn": "Meaning of the word is this \"."
      },
      {
        "word": "Yes",
        "phonetics": "/jes/",
        "meaningZh": "是的",
        "meaningEn": "Used to give an affirmative response."
      },
      {
        "word": "No, it is not (isn't)",
        "phonetics": "/no, it is not (isn't)/",
        "meaningZh": "不它不是缩写形式",
        "meaningEn": "Meaning of the word no, it is not (isn't)."
      },
      {
        "word": "Long",
        "phonetics": "/lɒŋ/",
        "meaningZh": "长的",
        "meaningEn": "Measuring a great distance from end to end."
      },
      {
        "word": "Short",
        "phonetics": "/ʃɔːt/",
        "meaningZh": "短的",
        "meaningEn": "Measuring a small distance from end to end."
      },
      {
        "word": "The",
        "phonetics": "/ðiː/",
        "meaningZh": "这个那个定冠词",
        "meaningEn": "The definite article, referring to specific things."
      },
      {
        "word": "Contraction",
        "phonetics": "/kɒnˈtɹæk.ʃən/",
        "meaningZh": "缩写式",
        "meaningEn": "A period of economic decline or negative growth."
      },
      {
        "word": "Large",
        "phonetics": "/lɑːdʒ/",
        "meaningZh": "大的",
        "meaningEn": "Of considerable or relatively great size."
      },
      {
        "word": "Small",
        "phonetics": "/smɔːl/",
        "meaningZh": "小的",
        "meaningEn": "Size that is less than normal or average."
      },
      {
        "word": "City",
        "phonetics": "/ˈsɪt.i/",
        "meaningZh": "城市",
        "meaningEn": "A large town, typically an important human settlement."
      },
      {
        "word": "Town",
        "phonetics": "/taʊn/",
        "meaningZh": "镇",
        "meaningEn": "An urban area that has a name, defined boundaries, and local government, that is larger than a village."
      },
      {
        "word": "Village",
        "phonetics": "/ˈvɪl.ɪdʒ/",
        "meaningZh": "村",
        "meaningEn": "A group of houses and associated buildings, larger than a hamlet and smaller than a town, situated in a rural area."
      },
      {
        "word": "Or",
        "phonetics": "/ɔːr/",
        "meaningZh": "或者",
        "meaningEn": "Used to link alternatives."
      },
      {
        "word": "Man",
        "phonetics": "/mæn/",
        "meaningZh": "男人",
        "meaningEn": "An adult human male."
      },
      {
        "word": "Woman",
        "phonetics": "/ˈwʊm.ən/",
        "meaningZh": "妇女",
        "meaningEn": "An adult human female."
      },
      {
        "word": "Boy",
        "phonetics": "/bɔɪ/",
        "meaningZh": "男孩",
        "meaningEn": "A male child or young man."
      },
      {
        "word": "Girl",
        "phonetics": "/ɡɜːl/",
        "meaningZh": "女孩",
        "meaningEn": "A female child or young woman."
      },
      {
        "word": "On",
        "phonetics": "/ɒn/",
        "meaningZh": "在之上",
        "meaningEn": "To switch on"
      },
      {
        "word": "Under",
        "phonetics": "/ˈʊndə/",
        "meaningZh": "在之下",
        "meaningEn": "Under anesthesia, especially general anesthesia; sedated."
      },
      {
        "word": "In",
        "phonetics": "/ɪn/",
        "meaningZh": "在里面",
        "meaningEn": "A position of power or influence, or a way to get it."
      },
      {
        "word": "Mr",
        "phonetics": "/mr/",
        "meaningZh": "先生",
        "meaningEn": "Meaning of the word mr."
      },
      {
        "word": "Mrs",
        "phonetics": "/mrs/",
        "meaningZh": "太太",
        "meaningEn": "Meaning of the word mrs."
      },
      {
        "word": "Black",
        "phonetics": "/blak/",
        "meaningZh": "黑色",
        "meaningEn": "(in chess and similar games) The person playing with the black set of pieces."
      },
      {
        "word": "White",
        "phonetics": "/waɪt/",
        "meaningZh": "白色",
        "meaningEn": "Bright and colourless; reflecting equal quantities of all frequencies of visible light."
      },
      {
        "word": "Green",
        "phonetics": "/ɡɹiːn/",
        "meaningZh": "绿色",
        "meaningEn": "Having green as its color."
      },
      {
        "word": "Brown",
        "phonetics": "/bɹaʊn/",
        "meaningZh": "棕色",
        "meaningEn": "A colour like that of chocolate or coffee."
      },
      {
        "word": "What colour?",
        "phonetics": "/wɔt/",
        "meaningZh": "什么颜色",
        "meaningEn": "(usually followed by \"with,\" but also sometimes \"would\" or \"might,\" especially in finance) In some manner or degree; in part; partly. See also what with"
      },
      {
        "word": "Where",
        "phonetics": "/wɛə(ɹ)/",
        "meaningZh": "哪里",
        "meaningEn": "The place in which something happens."
      }
    ],
    "drillParagraphs": [
      {
        "question": "What's this?",
        "answer": "It's a pen",
        "questionZh": "这是什么？",
        "answerZh": "这是一支笔"
      },
      {
        "question": "Is this a pen?",
        "answer": "Yes, it's a pen",
        "questionZh": "这是一支笔吗？",
        "answerZh": "是的，这是一支笔"
      },
      {
        "question": "Is this a pen?",
        "answer": "No, it isn't a pen; it's a pencil",
        "questionZh": "这是一支笔吗？",
        "answerZh": "不，这不是一支笔；它是一支钢笔。这是一支铅笔"
      },
      {
        "question": "Is this a pencil?",
        "answer": "No, it isn't a pencil; it's a book",
        "questionZh": "这是一支铅笔吗？",
        "answerZh": "不，这不是一支铅笔；而是一支铅笔。这是一本书"
      },
      {
        "question": "Is the pen short?",
        "answer": "No, the pen isn't short; it's long",
        "questionZh": "笔短吗？",
        "answerZh": "不，这支笔并不短；它是短的。很长"
      },
      {
        "question": "Is the pencil long?",
        "answer": "No, the pencil isn't long; it's short",
        "questionZh": "铅笔长吗？",
        "answerZh": "不，铅笔不长；它很短"
      },
      {
        "question": "Is the room short?",
        "answer": "No, the room isn't short; it's long",
        "questionZh": "房间短吗？",
        "answerZh": "不，房间并不短；很长"
      },
      {
        "question": "Is the table small?",
        "answer": "No, the table isn't small; it's large",
        "questionZh": "桌子小吗？",
        "answerZh": "不，桌子不小；它很大"
      },
      {
        "question": "Is the box large?",
        "answer": "No, the box isn't large; it's small",
        "questionZh": "盒子大吗？",
        "answerZh": "不，盒子不大；它很小"
      },
      {
        "question": "Is (London) a village?",
        "answer": "No, (London) isn't a village; it's a city",
        "questionZh": "（伦敦）是一个村庄吗？",
        "answerZh": "不，（伦敦）不是一个村庄；它是一个村庄。这是一座城市"
      },
      {
        "question": "Is (Windsor) a city?",
        "answer": "No, (Windsor) isn't a city; it's a town",
        "questionZh": "温莎是一座城市吗？",
        "answerZh": "不，（温莎）不是一座城市；这是一个城镇"
      },
      {
        "question": "Is (Grantchester) a town?",
        "answer": "No, (Grantchester) isn't a town; it's a village",
        "questionZh": "（格兰切斯特）是一个城镇吗？",
        "answerZh": "不，（格兰切斯特）不是一个城镇；它是一个城镇。这是一个村庄"
      },
      {
        "question": "Is the table long or short?",
        "answer": "The table's long.",
        "questionZh": "桌子是长还是短？",
        "answerZh": "桌子很长。"
      },
      {
        "question": "Is a city large or small?",
        "answer": "A city's large",
        "questionZh": "城市是大还是小？",
        "answerZh": "一个城市的大"
      },
      {
        "question": "What's this?",
        "answer": "It's a man. It's a woman. It's a boy. It's a girl.",
        "questionZh": "这是什么？",
        "answerZh": "这是一个男人。这是一个女人。这是一个男孩。这是一个女孩。"
      },
      {
        "question": "Is this a girl?",
        "answer": "No, it isn't a girl; it's a man",
        "questionZh": "这是一个女孩吗？",
        "answerZh": "不，这不是一个女孩；而是一个女孩。这是一个男人"
      },
      {
        "question": "Is this a man?",
        "answer": "No, it isn't a man; it's a woman",
        "questionZh": "这是一个男人吗？",
        "answerZh": "不，这不是一个人；而是一个人。这是一个女人"
      },
      {
        "question": "Is this a woman?",
        "answer": "No, it isn't a woman; it's a boy",
        "questionZh": "这是女人吗？",
        "answerZh": "不，这不是一个女人；而是一个女人。这是一个男孩"
      },
      {
        "question": "Is this a boy?",
        "answer": "No, it isn't a boy; it's a girl",
        "questionZh": "这是男孩吗？",
        "answerZh": "不，这不是一个男孩，而是一个男孩。这是一个女孩"
      },
      {
        "question": "Is the pen in the book?",
        "answer": "No, the pen isn't in the book; it's under the book",
        "questionZh": "笔在书里吗？",
        "answerZh": "不，笔不在书里；它在书的下面"
      },
      {
        "question": "Is the pen under the book?",
        "answer": "No, the pen isn't under the book; it's on the book",
        "questionZh": "笔在书下面吗？",
        "answerZh": "不，笔不在书下面；而是在书下面。这是书上的"
      },
      {
        "question": "Is this Anna Brown?",
        "answer": "No, it isn't Anna Brown; it's Mr Brown",
        "questionZh": "这是安娜·布朗吗？",
        "answerZh": "不，这不是安娜·布朗；她是安娜·布朗。这是布朗先生"
      },
      {
        "question": "Is this Mr Brown?",
        "answer": "No, it isn't Mr Brown; it's Mrs Brown",
        "questionZh": "这是布朗先生吗？",
        "answerZh": "不，这不是布朗先生；他是布朗先生。这是布朗夫人"
      },
      {
        "question": "Is this Mrs Brown?",
        "answer": "No, it isn't Mrs Brown; it's Jack Brown",
        "questionZh": "这是布朗夫人吗？",
        "answerZh": "不，这不是布朗夫人；她是布朗夫人。这是杰克·布朗"
      },
      {
        "question": "Is this Jack Brown?",
        "answer": "No, it isn't Jack Brown; it's Anna Brown",
        "questionZh": "这是杰克·布朗吗？",
        "answerZh": "不，这不是杰克·布朗；他是杰克·布朗。这是安娜·布朗"
      },
      {
        "question": "What colour's this pencil?",
        "answer": "This pencil's black, white etc.",
        "questionZh": "这支铅笔是什么颜色的？",
        "answerZh": "这支铅笔有黑色、白色等。"
      },
      {
        "question": "Where's the pen?",
        "answer": "The pen's on the book",
        "questionZh": "笔在哪里？",
        "answerZh": "笔在书上"
      },
      {
        "question": "Where's the book?",
        "answer": "The book's on the table",
        "questionZh": "书在哪里？",
        "answerZh": "书在桌子上"
      },
      {
        "question": "Where's the pen?",
        "answer": "The pen's under the table",
        "questionZh": "笔在哪里？",
        "answerZh": "笔在桌子底下"
      },
      {
        "question": "Where's the picture?",
        "answer": "The picture's on the wall",
        "questionZh": "图片在哪里？",
        "answerZh": "照片挂在墙上"
      },
      {
        "question": "Where's the light?",
        "answer": "The light's on the ceiling",
        "questionZh": "光在哪里？",
        "answerZh": "灯在天花板上"
      }
    ]
  },
  {
    "id": "tb_l2",
    "stageId": 1,
    "lessonId": 2,
    "title": "Lesson 2: In Front of & Behind",
    "grammarNotes": {
      "en": "Present Simple tense of the verb 'to be' is fully contracted. We use 'in front of' and 'behind' to indicate positions.",
      "zh": "Be动词在疑问句中提前，回答使用双重否定加肯定原样重复训练。in front of 表示‘在前面’，behind 表示‘在后面’。"
    },
    "vocabulary": [
      {
        "word": "I am / I'm",
        "phonetics": "/i am / i'm/",
        "meaningZh": "我是缩写形式",
        "meaningEn": "The name of the Latin-script letter I."
      },
      {
        "word": "You are / You're",
        "phonetics": "/jʉː/",
        "meaningZh": "你是缩写形式",
        "meaningEn": "(object pronoun) The people spoken, or written to, as an object."
      },
      {
        "word": "He is / He's",
        "phonetics": "/hi/",
        "meaningZh": "他是缩写形式",
        "meaningEn": "A male."
      },
      {
        "word": "She is / She's",
        "phonetics": "/ʃiː/",
        "meaningZh": "她是缩写形式",
        "meaningEn": "A female."
      },
      {
        "word": "It is / It's",
        "phonetics": "/ɪt/",
        "meaningZh": "它是缩写形式",
        "meaningEn": "The person who chases and tries to catch the other players in the playground game of tag."
      },
      {
        "word": "I am not / I'm not",
        "phonetics": "/i am not / i'm not/",
        "meaningZh": "的否定形式缩写形式",
        "meaningEn": "The name of the Latin-script letter I."
      },
      {
        "word": "You are",
        "phonetics": "/jʉː/",
        "meaningZh": "的否定形式缩写形式",
        "meaningEn": "(object pronoun) The people spoken, or written to, as an object."
      },
      {
        "word": "He is not / He isn't",
        "phonetics": "/hi/",
        "meaningZh": "的否定形式缩写形式",
        "meaningEn": "A male."
      },
      {
        "word": "She is not / She isn't",
        "phonetics": "/ʃiː/",
        "meaningZh": "的否定形式缩写形式",
        "meaningEn": "A female."
      },
      {
        "word": "It is not / It isn't",
        "phonetics": "/ɪt/",
        "meaningZh": "的否定形式缩写形式",
        "meaningEn": "The person who chases and tries to catch the other players in the playground game of tag."
      },
      {
        "word": "In front of",
        "phonetics": "/ɪn/",
        "meaningZh": "在的前面",
        "meaningEn": "A position of power or influence, or a way to get it."
      },
      {
        "word": "Behind",
        "phonetics": "/bəˈhaɪnd/",
        "meaningZh": "在的后面",
        "meaningEn": "Toward the back part or rear; backward."
      },
      {
        "word": "Me",
        "phonetics": "/miː/",
        "meaningZh": "我宾格",
        "meaningEn": "As the direct object of a verb."
      },
      {
        "word": "You",
        "phonetics": "/jʉː/",
        "meaningZh": "你宾格",
        "meaningEn": "(object pronoun) The people spoken, or written to, as an object."
      },
      {
        "word": "Him",
        "phonetics": "/əm/",
        "meaningZh": "他宾格",
        "meaningEn": "A male person."
      },
      {
        "word": "Her",
        "phonetics": "/ə(ɹ)/",
        "meaningZh": "她宾格",
        "meaningEn": "A female person or animal."
      },
      {
        "word": "House",
        "phonetics": "/hʌʊs/",
        "meaningZh": "房屋",
        "meaningEn": "A structure built or serving as an abode of human beings."
      },
      {
        "word": "Standing",
        "phonetics": "/ˈstændɪŋ/",
        "meaningZh": "正站在现在分词形式",
        "meaningEn": "Performed from an erect position."
      },
      {
        "word": "Sitting",
        "phonetics": "/ˈsɪtɪŋ/",
        "meaningZh": "正坐在现在分词形式",
        "meaningEn": "A period during which one is seated for a specific purpose."
      },
      {
        "word": "Taking from",
        "phonetics": "/ˈteɪkɪŋ/",
        "meaningZh": "正从拿走现在分词形式",
        "meaningEn": "To get into one's hands, possession or control, with or without force."
      },
      {
        "word": "Putting on",
        "phonetics": "[ˈpʰʊɾɪŋ]",
        "meaningZh": "正放在现在分词形式",
        "meaningEn": "To place something somewhere."
      },
      {
        "word": "Opening",
        "phonetics": "/ˈəʊ.pənɪŋ/",
        "meaningZh": "正打开现在分词形式",
        "meaningEn": "To make something accessible or allow for passage by moving from a shut position."
      },
      {
        "word": "Closing",
        "phonetics": "/ˈkləʊzɪŋ/",
        "meaningZh": "正关上正合上现在分词形式",
        "meaningEn": "The act by which something is closed."
      },
      {
        "word": "Doing",
        "phonetics": "/ˈduːɪŋ/",
        "meaningZh": "正在做的现在分词形式",
        "meaningEn": "To perform; to execute."
      },
      {
        "word": "What am I doing?",
        "phonetics": "/wɔt/",
        "meaningZh": "我正在做什么",
        "meaningEn": "(usually followed by \"with,\" but also sometimes \"would\" or \"might,\" especially in finance) In some manner or degree; in part; partly. See also what with"
      },
      {
        "word": "Which",
        "phonetics": "/wɪt͡ʃ/",
        "meaningZh": "哪个",
        "meaningEn": "(interrogative) What one or ones (of those mentioned or implied)."
      },
      {
        "word": "Open",
        "phonetics": "/ˈəʊ.pən/",
        "meaningZh": "打开的",
        "meaningEn": "Not physically drawn together, closed, folded or contracted; extended"
      },
      {
        "word": "Closed",
        "phonetics": "/kləʊzd/",
        "meaningZh": "合上的",
        "meaningEn": "Not public."
      }
    ],
    "drillParagraphs": [
      {
        "question": "Am I ..?",
        "answer": "Yes, you're ",
        "questionZh": "我是..吗？",
        "answerZh": "是的，你是"
      },
      {
        "question": "Are you ..?",
        "answer": "Yes, I'm ",
        "questionZh": "你是 ..？",
        "answerZh": "是的，我是"
      },
      {
        "question": "Is he Mr Brown?",
        "answer": "Yes, he's Mr Brown",
        "questionZh": "他是布朗先生吗？",
        "answerZh": "是的，他是布朗先生"
      },
      {
        "question": "Is she Mrs Brown?",
        "answer": "Yes, she's Mrs Brown",
        "questionZh": "她是布朗夫人吗？",
        "answerZh": "是的，她是布朗夫人"
      },
      {
        "question": "Am I Mrs Brown?",
        "answer": "No, you aren't Mrs Brown; you're Mr Brown.",
        "questionZh": "我是布朗夫人吗？",
        "answerZh": "不，你不是布朗夫人；你是布朗夫人。你是布朗先生。"
      },
      {
        "question": "Are you Mr Brown?",
        "answer": "No, I'm not Mr Brown; I'm Jack Brown.",
        "questionZh": "您是布朗先生吗？",
        "answerZh": "不，我不是布朗先生；我是布朗先生。我是杰克·布朗。"
      },
      {
        "question": "Is he Mr Smith?",
        "answer": "No, he isn't Mr Smith; he's Mr Brown",
        "questionZh": "他是史密斯先生吗？",
        "answerZh": "不，他不是史密斯先生；他不是史密斯先生。他是布朗先生"
      },
      {
        "question": "Is she Mr Brown?",
        "answer": "No, she isn't Mr Brown; she's Mrs Brown",
        "questionZh": "她是布朗先生吗？",
        "answerZh": "不，她不是布朗先生；她不是布朗先生。她是布朗夫人"
      },
      {
        "question": "Where's the table?",
        "answer": "The table's in front of me",
        "questionZh": "桌子在哪里？",
        "answerZh": "桌子在我面前"
      },
      {
        "question": "Is the wall in front of you?",
        "answer": "No, the wall isn't in front of me; it's behind me",
        "questionZh": "你面前是墙吗？",
        "answerZh": "不，墙不在我面前；墙不在我面前；它在我身后"
      },
      {
        "question": "Is the table behind me?",
        "answer": "No, the table isn't behind you; it's in front of you",
        "questionZh": "桌子在我后面吗？",
        "answerZh": "不，桌子不在你身后，而是在你身后。它就在你面前"
      },
      {
        "question": "Where's the house?",
        "answer": "The house is behind him",
        "questionZh": "房子在哪儿？",
        "answerZh": "房子在他身后"
      },
      {
        "question": "Where's the house?",
        "answer": "The house is behind her",
        "questionZh": "房子在哪儿？",
        "answerZh": "房子在她身后"
      },
      {
        "question": "Are you behind her?",
        "answer": "No, I'm not behind her; I'm in front of her",
        "questionZh": "你在她身后吗？",
        "answerZh": "不，我不在她身后；我在她身后。我在她面前"
      },
      {
        "question": "Am I in front of him?",
        "answer": "No, you aren't in front of him; you're behind him",
        "questionZh": "我在他面前吗？",
        "answerZh": "不，你不在他面前；你在他身后"
      },
      {
        "question": "Are you standing on the floor?",
        "answer": "No, I'm not standing on the floor; I'm sitting on the chair",
        "questionZh": "你站在地板上吗？",
        "answerZh": "不，我没有站在地板上；我没有站在地板上。我坐在椅子上"
      },
      {
        "question": "Am I sitting on the chair?",
        "answer": "No, you aren't sitting on the chair; you're standing on the floor",
        "questionZh": "我坐在椅子上吗？",
        "answerZh": "不，你不是坐在椅子上；而是你坐在椅子上。你站在地板上"
      },
      {
        "question": "Are you standing in front of me?",
        "answer": "No, I'm not standing in front of you; I'm sitting in front of you",
        "questionZh": "你站在我面前吗？",
        "answerZh": "不，我不是站在你面前；我坐在你面前"
      },
      {
        "question": "Am I putting the book on the ʞoor?",
        "answer": "No, you aren't putting the book on the floor; you're taking the book from the table",
        "questionZh": "我把书放在地板上了吗？",
        "answerZh": "不，你不是把书放在地板上；而是把书放在地板上。你从桌子上拿走书"
      },
      {
        "question": "Am I taking the pen from the table?",
        "answer": "No, you aren't taking the pen from the table; you're putting the book on the table",
        "questionZh": "我要从桌子上拿笔吗？",
        "answerZh": "不，你不会从桌子上拿走笔；你会从桌子上拿走笔。你把书放在桌子上"
      },
      {
        "question": "Am I closing the door?",
        "answer": "No, you aren't closing the door; you're opening the book",
        "questionZh": "我关门了吗？",
        "answerZh": "不，你不是在关门；而是在关门。你正在打开书"
      },
      {
        "question": "Am I opening the window?",
        "answer": "No, you aren't opening the window; you're closing the book",
        "questionZh": "我打开窗户吗？",
        "answerZh": "不，你没有打开窗户；你没有打开窗户。你正在合上书"
      },
      {
        "question": "What am I doing?",
        "answer": "You're taking the book from the table",
        "questionZh": "我在做什么？",
        "answerZh": "你从桌子上拿走书"
      },
      {
        "question": "What am I doing?",
        "answer": "You're opening the book",
        "questionZh": "我在做什么？",
        "answerZh": "你正在打开书"
      },
      {
        "question": "What am I doing?",
        "answer": "You're closing the book",
        "questionZh": "我在做什么？",
        "answerZh": "你正在合上书"
      },
      {
        "question": "What am I doing?",
        "answer": "You're putting the book on the table",
        "questionZh": "我在做什么？",
        "answerZh": "你把书放在桌子上"
      },
      {
        "question": "Which pencil's black?",
        "answer": "This pencil's black",
        "questionZh": "哪种铅笔是黑色的？",
        "answerZh": "这支铅笔是黑色的"
      },
      {
        "question": "Which pencil's white?",
        "answer": "This pencil's white",
        "questionZh": "哪种铅笔是白色的？",
        "answerZh": "这支铅笔是白色的"
      },
      {
        "question": "Which pencil's green?",
        "answer": "This pencil's green",
        "questionZh": "哪支铅笔是绿色的？",
        "answerZh": "这支铅笔是绿色的"
      },
      {
        "question": "Which pencil's brown?",
        "answer": "This pencil's brown",
        "questionZh": "哪种铅笔是棕色的？",
        "answerZh": "这支铅笔是棕色的"
      },
      {
        "question": "Which book's open?",
        "answer": "This book's open",
        "questionZh": "哪本书打开了？",
        "answerZh": "这本书已经打开了"
      },
      {
        "question": "Which book's closed?",
        "answer": "This book's closed",
        "questionZh": "哪本书关了？",
        "answerZh": "这本书已经关了"
      }
    ]
  },
  {
    "id": "tb_l3",
    "stageId": 1,
    "lessonId": 3,
    "title": "Lesson 3: These and Those",
    "grammarNotes": {
      "en": "These is the plural of this. Those is the plural of that.",
      "zh": "These 是 this 的复数形式（这些），those 是 that 的复数形式（那些）。回答时注意单复数的对应变化。"
    },
    "vocabulary": [
      {
        "word": "This",
        "phonetics": "/ðəs/",
        "meaningZh": "这",
        "meaningEn": "To the degree or extent indicated."
      },
      {
        "word": "That",
        "phonetics": "/ˈðæt/",
        "meaningZh": "那个",
        "meaningEn": "(degree) To a given extent or degree."
      },
      {
        "word": "Chart",
        "phonetics": "/tʃɑːt/",
        "meaningZh": "表格",
        "meaningEn": "To draw or figure out (a route or plan)."
      },
      {
        "word": "Plural",
        "phonetics": "/ˈplɔː.ɹəl/",
        "meaningZh": "复数",
        "meaningEn": "(grammar) The plural number."
      },
      {
        "word": "Of",
        "phonetics": "/ɔv/",
        "meaningZh": "的",
        "meaningEn": "Expressing distance or motion."
      },
      {
        "word": "Etc",
        "phonetics": "/ˌɛt ˈsɛt(ə)ɹə/",
        "meaningZh": "等",
        "meaningEn": "Alternative form of etc."
      },
      {
        "word": "We are / We're",
        "phonetics": "/wiː/",
        "meaningZh": "我们是缩写形式",
        "meaningEn": "(personal) The plural form of you, including everyone being addressed."
      },
      {
        "word": "They are / They're",
        "phonetics": "/ðeɪ/",
        "meaningZh": "他们是缩写形式",
        "meaningEn": "(the third-person plural) A group of people, animals, plants or objects previously mentioned."
      },
      {
        "word": "We are",
        "phonetics": "/wiː/",
        "meaningZh": "的否定形式缩写形式",
        "meaningEn": "(personal) The plural form of you, including everyone being addressed."
      },
      {
        "word": "Red",
        "phonetics": "/ɹɛd/",
        "meaningZh": "红色",
        "meaningEn": "Having red as its color."
      },
      {
        "word": "Blue",
        "phonetics": "/bluː/",
        "meaningZh": "蓝色",
        "meaningEn": "Blue clothing"
      },
      {
        "word": "Yellow",
        "phonetics": "/jɛlə/",
        "meaningZh": "黄色",
        "meaningEn": "Related to the Liberal Democrats."
      },
      {
        "word": "Grey",
        "phonetics": "/ɡɹeɪ/",
        "meaningZh": "灰色",
        "meaningEn": "Having a color."
      },
      {
        "word": "These",
        "phonetics": "/ðiːz/",
        "meaningZh": "这些",
        "meaningEn": "The thing, item, etc. being indicated."
      },
      {
        "word": "Those",
        "phonetics": "/ðəʊz/",
        "meaningZh": "那些",
        "meaningEn": "(demonstrative) The thing, person, idea, quality, event, action or time indicated or understood from context, especially if more remote geographically, temporally or mentally than one designated as \"this\", or if expressing distinction."
      },
      {
        "word": "And",
        "phonetics": "/and/",
        "meaningZh": "和",
        "meaningEn": "In rhythm, the second half of a divided beat."
      },
      {
        "word": "Men (plural of man)",
        "phonetics": "/mɛn/",
        "meaningZh": "的复数形式",
        "meaningEn": "An adult male human."
      },
      {
        "word": "Women (plural of woman)",
        "phonetics": "/ˈwɪmən/",
        "meaningZh": "的复数形式",
        "meaningEn": "An adult female human."
      },
      {
        "word": "Say",
        "phonetics": "/seɪ/",
        "meaningZh": "说",
        "meaningEn": "To pronounce."
      },
      {
        "word": "Clothes",
        "phonetics": "/kləʊ(ð)z/",
        "meaningZh": "衣服",
        "meaningEn": "(in idioms) Priesthood, clergy."
      },
      {
        "word": "Shoe",
        "phonetics": "/ʃuː/",
        "meaningZh": "鞋",
        "meaningEn": "A protective covering for the foot, with a bottom part composed of thick leather or plastic sole and often a thicker heel, and a softer upper part made of leather or synthetic material. Shoes generally do not extend above the ankle, as opposed to boots, which do."
      },
      {
        "word": "Boot",
        "phonetics": "/buːt/",
        "meaningZh": "靴子",
        "meaningEn": "To kick."
      },
      {
        "word": "Sock",
        "phonetics": "/sɒk/",
        "meaningZh": "短袜",
        "meaningEn": "A knitted or woven covering for the foot."
      },
      {
        "word": "Trousers",
        "phonetics": "/ˈtɹaʊzəz/",
        "meaningZh": "裤子",
        "meaningEn": "An article of clothing that covers the part of the body between the waist and the ankles or knees, and is divided into a separate part for each leg."
      },
      {
        "word": "Jacket",
        "phonetics": "/ˈd͡ʒæk.ɪt/",
        "meaningZh": "夹克",
        "meaningEn": "The tough outer skin of a baked potato."
      },
      {
        "word": "Suit",
        "phonetics": "/s(j)uːt/",
        "meaningZh": "套装",
        "meaningEn": "A set of clothes to be worn together, now especially a man's matching jacket and trousers (also business suit or lounge suit), or a similar outfit for a woman."
      },
      {
        "word": "Shirt",
        "phonetics": "/ʃɜːt/",
        "meaningZh": "衬衫",
        "meaningEn": "An article of clothing that is worn on the upper part of the body, and often has sleeves, either long or short, that cover the arms."
      },
      {
        "word": "Tie",
        "phonetics": "/taɪ/",
        "meaningZh": "领带",
        "meaningEn": "The situation in which two or more participants in a competition are placed equally."
      },
      {
        "word": "Hat",
        "phonetics": "[hat]",
        "meaningZh": "帽子",
        "meaningEn": "A covering for the head, often in the approximate form of a cone or a cylinder closed at its top end, and sometimes having a brim and other decoration."
      },
      {
        "word": "Bag",
        "phonetics": "/ˈbæːɡ/",
        "meaningZh": "书包",
        "meaningEn": "One’s preference."
      },
      {
        "word": "Alphabet",
        "phonetics": "/ˈæl.fə.bɛt/",
        "meaningZh": "字母表",
        "meaningEn": "The set of letters used when writing in a language."
      },
      {
        "word": "Letter",
        "phonetics": "/-ɾə(ɹ)/",
        "meaningZh": "字母",
        "meaningEn": "A symbol in an alphabet."
      },
      {
        "word": "Vowel",
        "phonetics": "/vaʊl/",
        "meaningZh": "元音",
        "meaningEn": "A sound produced by the vocal cords with relatively little restriction of the oral cavity, forming the prominent sound of a syllable."
      },
      {
        "word": "Consonant",
        "phonetics": "/ˈkɒn.sə.nənt/",
        "meaningZh": "辅音",
        "meaningEn": "A letter representing the sound of a consonant."
      },
      {
        "word": "Before",
        "phonetics": "/bɪˈfɔː/",
        "meaningZh": "在前",
        "meaningEn": "At an earlier time."
      },
      {
        "word": "After",
        "phonetics": "/ˈæf.tə(ɹ)/",
        "meaningZh": "在后",
        "meaningEn": "(where the frame of reference is within the ship) At or towards the stern of a ship."
      }
    ],
    "drillParagraphs": [
      {
        "question": "What colour's this pencil?",
        "answer": "This pencil's black",
        "questionZh": "这支铅笔是什么颜色的？",
        "answerZh": "这支铅笔是黑色的"
      },
      {
        "question": "What colour's that pencil?",
        "answer": "That pencil's white",
        "questionZh": "那支铅笔是什么颜色的？",
        "answerZh": "那支铅笔是白色的"
      },
      {
        "question": "Where's this pencil?",
        "answer": "This pencil's on the Chart",
        "questionZh": "这支铅笔在哪里？",
        "answerZh": "这支铅笔在图表上"
      },
      {
        "question": "Where's that pencil?",
        "answer": "That pencil's on the wall",
        "questionZh": "那支铅笔在哪里？",
        "answerZh": "那支铅笔在墙上"
      },
      {
        "question": "What's the plural of \"book\"?",
        "answer": "The plural of \"book\" is \"books\"",
        "questionZh": "“书”的复数是什么？",
        "answerZh": "“书”的复数是“书”"
      },
      {
        "question": "What's the plural of \"clock\"?",
        "answer": "The plural of \"clock\" is \"clocks\"",
        "questionZh": "“时钟”的复数是什么？",
        "answerZh": "“时钟”的复数是“clocks”"
      },
      {
        "question": "What's the plural of \"wall\"?",
        "answer": "The plural of \"wall\" is \"walls\"",
        "questionZh": "“墙”的复数是什么？",
        "answerZh": "“墙”的复数是“walls”"
      },
      {
        "question": "Are we sitting?",
        "answer": "Yes, we're sitting",
        "questionZh": "我们坐着吗？",
        "answerZh": "是的，我们坐着"
      },
      {
        "question": "Where are we sitting?",
        "answer": "We're sitting on the chairs",
        "questionZh": "我们坐在哪里？",
        "answerZh": "我们坐在椅子上"
      },
      {
        "question": "Are they standing?",
        "answer": "Yes, they're standing",
        "questionZh": "他们站着吗？",
        "answerZh": "是的，他们站着"
      },
      {
        "question": "Where are they standing?",
        "answer": "They're standing in front of the house",
        "questionZh": "他们站在哪里？",
        "answerZh": "他们站在房子前面"
      },
      {
        "question": "Are we standing?",
        "answer": "No, we aren't standing; we're sitting",
        "questionZh": "我们站着吗？",
        "answerZh": "不，我们不是站着，而是站着。我们坐着"
      },
      {
        "question": "Are we sitting on the ʞoor?",
        "answer": "No, we aren't sitting on the floor; we're sitting on the chairs",
        "questionZh": "我们坐在地板上吗？",
        "answerZh": "不，我们不是坐在地板上；而是坐在地板上。我们坐在椅子上"
      },
      {
        "question": "Are they sitting?",
        "answer": "No, they aren't sitting; they're standing",
        "questionZh": "他们坐着吗？",
        "answerZh": "不，他们不是坐着；而是坐着。他们站着"
      },
      {
        "question": "Are they standing behind the house?",
        "answer": "No, they aren't standing behind the house; they're standing in front of the house",
        "questionZh": "他们站在房子后面吗？",
        "answerZh": "不，他们不是站在房子后面；而是站在房子后面。他们站在房子前面"
      },
      {
        "question": "What colour's this pencil?",
        "answer": "This pencil's red, blue etc.",
        "questionZh": "这支铅笔是什么颜色的？",
        "answerZh": "这支铅笔有红色、蓝色等。"
      },
      {
        "question": "What colour are these pencils?",
        "answer": "These pencils are black and green",
        "questionZh": "这些铅笔是什么颜色的？",
        "answerZh": "这些铅笔是黑色和绿色的"
      },
      {
        "question": "What colour are those pencils?",
        "answer": "Those pencils are white and brown",
        "questionZh": "这些铅笔是什么颜色的？",
        "answerZh": "这些铅笔是白色和棕色的"
      },
      {
        "question": "Where are these pencils?",
        "answer": "These pencils are on the Chart",
        "questionZh": "这些铅笔在哪里？",
        "answerZh": "这些铅笔在图表上"
      },
      {
        "question": "Where are those pencils?",
        "answer": "Those pencils are on the wall",
        "questionZh": "那些铅笔在哪里？",
        "answerZh": "那些铅笔在墙上"
      },
      {
        "question": "What colour are these chairs?",
        "answer": "These chairs are black.",
        "questionZh": "这些椅子是什么颜色的？",
        "answerZh": "这些椅子是黑色的。"
      },
      {
        "question": "What colour are those chairs?",
        "answer": "Those chairs are black.",
        "questionZh": "那些椅子是什么颜色的？",
        "answerZh": "那些椅子是黑色的。"
      },
      {
        "question": "What's the plural of \"man\"?",
        "answer": "The plural of \"man\" is \"men\"",
        "questionZh": "“人”的复数形式是什么？",
        "answerZh": "“man”的复数是“men”"
      },
      {
        "question": "What's the plural of \"woman\"?",
        "answer": "The plural of \"woman\" is \"women\"",
        "questionZh": "“女人”的复数是什么？",
        "answerZh": "“女人”的复数是“女人”"
      },
      {
        "question": "What are these?",
        "answer": "These are clothes",
        "questionZh": "这些是什么？",
        "answerZh": "这些是衣服"
      },
      {
        "question": "What's this?",
        "answer": "It's a shoe, boot etc.",
        "questionZh": "这是什么？",
        "answerZh": "是鞋子、靴子等。"
      },
      {
        "question": "What are these?",
        "answer": "These are trousers",
        "questionZh": "这些是什么？",
        "answerZh": "这是裤子"
      },
      {
        "question": "What letter's this?",
        "answer": "A, B, etc.",
        "questionZh": "这是什么字母？",
        "answerZh": "A、B 等"
      },
      {
        "question": "What are these?",
        "answer": "These are the five vowels",
        "questionZh": "这些是什么？",
        "answerZh": "这是五个元音"
      },
      {
        "question": "What are the ʝve vowels?",
        "answer": "The five vowels are A, E, I ,O, U",
        "questionZh": "ʝve 元音是什么？",
        "answerZh": "五个元音是 A、E、I、O、U"
      },
      {
        "question": "Is the letter B a vowel?",
        "answer": "No, the letter B isn't a vowel; it's a consonant",
        "questionZh": "字母 B 是元音吗？",
        "answerZh": "不，字母 B 不是元音；这是一个辅音"
      },
      {
        "question": "Which letter's before E?",
        "answer": "D's before E",
        "questionZh": "E之前是哪个字母？",
        "answerZh": "D 在 E 之前"
      },
      {
        "question": "Which letter's after I?",
        "answer": "J's after I",
        "questionZh": "I 之后是哪个字母？",
        "answerZh": "J在我之后"
      },
      {
        "question": "Which letter's before Z?",
        "answer": "Y's before Z",
        "questionZh": "Z 之前是哪个字母？",
        "answerZh": "Y 在 Z 之前"
      },
      {
        "question": "Which letter's after G?",
        "answer": "H's after G",
        "questionZh": "G后面是哪个字母？",
        "answerZh": "H在G之后"
      }
    ]
  },
  {
    "id": "tb_l4",
    "stageId": 1,
    "lessonId": 4,
    "title": "Lesson 4: Numbers & There Is",
    "grammarNotes": {
      "en": "There is/are indicates existence. We practice numbers from 30 to 1000+.",
      "zh": "There is/are 结构表示‘某处有某物’。本课练习从 30 到 1000+ 的数字及大数连读。"
    },
    "vocabulary": [
      {
        "word": "Between",
        "phonetics": "/bɪˈtwiːn/",
        "meaningZh": "在之间",
        "meaningEn": "In the position or interval that separates (two things), or intermediate in quantity or degree. (See Usage notes below.)"
      },
      {
        "word": "Us",
        "phonetics": "/əs/",
        "meaningZh": "我们宾格",
        "meaningEn": "(chiefly with give) Me."
      },
      {
        "word": "Them",
        "phonetics": "/ðʌm/",
        "meaningZh": "他们宾格",
        "meaningEn": "(plural) Those ones."
      },
      {
        "word": "Student",
        "phonetics": "/ˈstjuː.dənt/",
        "meaningZh": "学生",
        "meaningEn": "A person who studies or learns about a particular subject."
      },
      {
        "word": "Teacher",
        "phonetics": "/ˈtiːt͡ʃə/",
        "meaningZh": "老师",
        "meaningEn": "A person who teaches, especially one employed in a school."
      },
      {
        "word": "Number",
        "phonetics": "/ˈnʌmbə/",
        "meaningZh": "数字",
        "meaningEn": "An abstract entity used to describe quantity."
      },
      {
        "word": "Plus",
        "phonetics": "/plʌs/",
        "meaningZh": "加",
        "meaningEn": "An asset or useful addition."
      },
      {
        "word": "Equals",
        "phonetics": "/ˈiːkwəlz/",
        "meaningZh": "等于",
        "meaningEn": "A person or thing of equal status to others."
      },
      {
        "word": "How much",
        "phonetics": "/hæŏ/",
        "meaningZh": "多少",
        "meaningEn": "The means by which something is accomplished."
      },
      {
        "word": "There is / There's",
        "phonetics": "/ðeː(ɹ)/",
        "meaningZh": "那儿有缩写形式",
        "meaningEn": "That status; that position."
      },
      {
        "word": "There are / There is",
        "phonetics": "/ðeː(ɹ)/",
        "meaningZh": "的复数形式",
        "meaningEn": "That status; that position."
      },
      {
        "word": "Now",
        "phonetics": "/naʊ/",
        "meaningZh": "现在",
        "meaningEn": "The present time."
      },
      {
        "word": "There is",
        "phonetics": "/ðeː(ɹ)/",
        "meaningZh": "的否定形式缩写形式",
        "meaningEn": "That status; that position."
      },
      {
        "word": "There are",
        "phonetics": "/ðeː(ɹ)/",
        "meaningZh": "的否定形式缩写形式",
        "meaningEn": "That status; that position."
      },
      {
        "word": "High",
        "phonetics": "/haɪ/",
        "meaningZh": "高的",
        "meaningEn": "A point of success or achievement; a time when things are at their best."
      },
      {
        "word": "Low",
        "phonetics": "/ləʊ/",
        "meaningZh": "低的",
        "meaningEn": "Something that is low; a low point."
      },
      {
        "word": "But",
        "phonetics": "/bʊt/",
        "meaningZh": "但是",
        "meaningEn": "An instance or example of using the word \"but\"."
      }
    ],
    "drillParagraphs": [
      {
        "question": "Which letter's between D and F?",
        "answer": "E's between D and F",
        "questionZh": "D 和 F 之间是哪个字母？",
        "answerZh": "E 位于 D 和 F 之间"
      },
      {
        "question": "Which letter's between H and J?",
        "answer": "I's between H and J",
        "questionZh": "H 和 J 之间是哪个字母？",
        "answerZh": "我在H和J之间"
      },
      {
        "question": "Which letter's between Q and S?",
        "answer": "R's between Q and S",
        "questionZh": "Q 和 S 之间是哪个字母？",
        "answerZh": "R 位于 Q 和 S 之间"
      },
      {
        "question": "Where's the table?",
        "answer": "The table's in front of us",
        "questionZh": "桌子在哪里？",
        "answerZh": "桌子就在我们前面"
      },
      {
        "question": "Are the walls in front of us?",
        "answer": "No, the walls aren't in front of us; they're behind us",
        "questionZh": "我们面前是墙壁吗？",
        "answerZh": "不，墙不在我们面前；墙不在我们面前；他们在我们身后"
      },
      {
        "question": "Is the table behind us?",
        "answer": "No, the table isn't behind us; it's in front of us",
        "questionZh": "桌子在我们后面吗？",
        "answerZh": "不，桌子不在我们身后；它不在我们身后。它就在我们面前"
      },
      {
        "question": "Where's the house?",
        "answer": "The house's behind them",
        "questionZh": "房子在哪儿？",
        "answerZh": "房子在他们身后"
      },
      {
        "question": "Are you behind them?",
        "answer": "No, I'm not behind them; I'm in front of them",
        "questionZh": "你在他们后面吗？",
        "answerZh": "不，我并不落后于他们；我并不落后于他们。我在他们面前"
      },
      {
        "question": "Am I in front of them?",
        "answer": "No, you aren't in front of them; you're behind them",
        "questionZh": "我在他们面前吗？",
        "answerZh": "不，你不在他们面前；你在他们后面"
      },
      {
        "question": "Am I a student?",
        "answer": "No, you aren't a student; you're the teacher",
        "questionZh": "我是学生吗？",
        "answerZh": "不，你不是学生；你是老师"
      },
      {
        "question": "Are you the teacher?",
        "answer": "No, I'm not the teacher; I'm a student",
        "questionZh": "你是老师吗？",
        "answerZh": "不，我不是老师；我是老师。我是一名学生"
      },
      {
        "question": "What number's this?",
        "answer": "30, 40 etc.",
        "questionZh": "这是什么号码？",
        "answerZh": "30、40 等"
      },
      {
        "question": "What numbers are these?",
        "answer": "30–13; 40–14 etc.",
        "questionZh": "这些是什么数字？",
        "answerZh": "30–13； 40–14 等"
      },
      {
        "question": "What number's this?",
        "answer": "313 1,815 1,950,630",
        "questionZh": "这是什么号码？",
        "answerZh": "313 1,815 1,950,630"
      },
      {
        "question": "What's this?",
        "answer": "It's 2 + 2 = 4 how much",
        "questionZh": "这是什么？",
        "answerZh": "2 + 2 = 4 是多少"
      },
      {
        "question": "How much is 13 plus 5?",
        "answer": "13 plus 5 equals 18",
        "questionZh": "13加5等于多少？",
        "answerZh": "13 加 5 等于 18"
      },
      {
        "question": "How much is?",
        "answer": "18 + 40 5 + 10",
        "questionZh": "多少钱？",
        "answerZh": "18+40 5+10"
      },
      {
        "question": "Is there a pen on this book?",
        "answer": "Yes, there's a pen on this book",
        "questionZh": "这本书上有笔吗？",
        "answerZh": "是的，这本书上有一支笔"
      },
      {
        "question": "Is there a light on the ceiling?",
        "answer": "Yes, there's a light on the ceiling",
        "questionZh": "天花板上有灯吗？",
        "answerZh": "是的，天花板上有一盏灯"
      },
      {
        "question": "Is there a bag in this room?",
        "answer": "Yes, there's a bag in this room",
        "questionZh": "这个房间里有包吗？",
        "answerZh": "是的，这个房间里有一个包"
      },
      {
        "question": "Is there a pen on the book?",
        "answer": "Yes, there's a pen on the book",
        "questionZh": "书上有笔吗？",
        "answerZh": "是的，书上有一支笔"
      },
      {
        "question": "Are there two pens on the book now?",
        "answer": "Yes, there are two pens",
        "questionZh": "现在书上有两支笔吗？",
        "answerZh": "是的，有两支笔"
      },
      {
        "question": "Are there (12) chairs in this room?",
        "answer": "Yes, there are (12) chairs in this room",
        "questionZh": "这个房间里有 (12) 张椅子吗？",
        "answerZh": "是的，这个房间有（12）把椅子"
      },
      {
        "question": "Are there (2) pictures on these walls?",
        "answer": "Yes, there are (2) pictures on these walls",
        "questionZh": "这些墙上有 (2) 张照片吗？",
        "answerZh": "是的，这些墙上有 (2) 张照片"
      },
      {
        "question": "Is there a pen on the book?",
        "answer": "No, there isn't a pen on the book",
        "questionZh": "书上有笔吗？",
        "answerZh": "不，书上没有笔"
      },
      {
        "question": "Is there a book on the ʞoor?",
        "answer": "No, there isn't a book on the floor",
        "questionZh": "地上有一本书吗？",
        "answerZh": "不，地板上没有书"
      },
      {
        "question": "Is there a clock on the table?",
        "answer": "No, there isn't a clock on the table",
        "questionZh": "桌子上有钟吗？",
        "answerZh": "不，桌子上没有时钟"
      },
      {
        "question": "Are there three clocks on that wall?",
        "answer": "No, there aren't three clocks on that wall; there's one clock on that wall",
        "questionZh": "那堵墙上有三个钟吗？",
        "answerZh": "不，那堵墙上并没有三个钟，而是三个钟。那堵墙上有一个钟"
      },
      {
        "question": "Are there a hundred pictures in this room?",
        "answer": "No, there aren't a hundred pictures in this room; there are only four pictures in this room.",
        "questionZh": "这个房间里有一百张照片吗？",
        "answerZh": "不，这个房间里没有一百张照片；这个房间里只有四张照片。"
      },
      {
        "question": "Are there a thousand chairs in this room?",
        "answer": "No, there aren't a thousand chairs in this room; there are only ten chairs in this room.",
        "questionZh": "这个房间里有一千张椅子吗？",
        "answerZh": "不，这个房间里没有一千张椅子；这个房间里只有十把椅子。"
      },
      {
        "question": "Is the chair high?",
        "answer": "No, the chair isn't high; it's low",
        "questionZh": "椅子高吗？",
        "answerZh": "不，椅子不高；很低"
      },
      {
        "question": "Is the wall low?",
        "answer": "No, the wall isn't low; it's high",
        "questionZh": "墙低吗？",
        "answerZh": "不，墙并不低；很高"
      },
      {
        "question": "Is the table high?",
        "answer": "No, the table isn't high; it's low",
        "questionZh": "桌子高吗？",
        "answerZh": "不，桌子不高；很低"
      }
    ]
  },
  {
    "id": "tb_l5",
    "stageId": 1,
    "lessonId": 5,
    "title": "Lesson 5: Imperative & Please",
    "grammarNotes": {
      "en": "The imperative form is used to give commands. 'Please' is added for politeness.",
      "zh": "祈使句用于表达命令或请求。句尾加上 please 表达礼貌，口语中需注意句调变化。"
    },
    "vocabulary": [
      {
        "word": "Imperative",
        "phonetics": "/ɪmˈpɛɹ.ə.tɪv/",
        "meaningZh": "祈使语气",
        "meaningEn": "(grammar) The grammatical mood expressing an order (see jussive). In English, the imperative form of a verb is the same as that of the bare infinitive."
      },
      {
        "word": "Take",
        "phonetics": "/teɪk/",
        "meaningZh": "拿",
        "meaningEn": "An interpretation or view, opinion or assessment; perspective."
      },
      {
        "word": "Put",
        "phonetics": "/pʊt/",
        "meaningZh": "放",
        "meaningEn": "A contract to sell a security at a set price on or before a certain date."
      },
      {
        "word": "Open",
        "phonetics": "/ˈəʊ.pən/",
        "meaningZh": "打开的",
        "meaningEn": "Not physically drawn together, closed, folded or contracted; extended"
      },
      {
        "word": "Close",
        "phonetics": "/kləʊz/",
        "meaningZh": "合上",
        "meaningEn": "An end or conclusion."
      },
      {
        "word": "Please",
        "phonetics": "/pliːz/",
        "meaningZh": "请",
        "meaningEn": "To make happy or satisfy; to give pleasure to."
      },
      {
        "word": "Here",
        "phonetics": "/hiːɹ/",
        "meaningZh": "这里",
        "meaningEn": "(abstract) This place; this location."
      },
      {
        "word": "There",
        "phonetics": "/ðeː(ɹ)/",
        "meaningZh": "那里",
        "meaningEn": "That status; that position."
      },
      {
        "word": "Capital",
        "phonetics": "/ˈkæp.ɪ.təl/",
        "meaningZh": "首都",
        "meaningEn": "Money and wealth. The means to acquire goods and services, especially in a non-barter system."
      },
      {
        "word": "England",
        "phonetics": "/england/",
        "meaningZh": "英格兰",
        "meaningEn": "Meaning of the word england."
      },
      {
        "word": "Russia",
        "phonetics": "/russia/",
        "meaningZh": "俄罗斯",
        "meaningEn": "Meaning of the word russia."
      },
      {
        "word": "Greece",
        "phonetics": "/greece/",
        "meaningZh": "希腊",
        "meaningEn": "Meaning of the word greece."
      },
      {
        "word": "China",
        "phonetics": "/tʃʌɪnə/",
        "meaningZh": "中国",
        "meaningEn": "Chinaware: porcelain tableware."
      },
      {
        "word": "London",
        "phonetics": "/london/",
        "meaningZh": "伦敦",
        "meaningEn": "Meaning of the word london."
      },
      {
        "word": "Moscow",
        "phonetics": "/moscow/",
        "meaningZh": "莫斯科",
        "meaningEn": "Meaning of the word moscow."
      },
      {
        "word": "Athens",
        "phonetics": "/athens/",
        "meaningZh": "雅典",
        "meaningEn": "Meaning of the word athens."
      },
      {
        "word": "Beijing",
        "phonetics": "/beijing/",
        "meaningZh": "北京",
        "meaningEn": "Meaning of the word beijing."
      },
      {
        "word": "Reading",
        "phonetics": "/ˈɹidiŋ/",
        "meaningZh": "正在阅读现在分词形式",
        "meaningEn": "To look at and interpret letters or other information that is written."
      },
      {
        "word": "Writing",
        "phonetics": "/ˈɹaɪtɪŋ/",
        "meaningZh": "正在写现在分词形式",
        "meaningEn": "The style of writing of a person."
      },
      {
        "word": "Coat",
        "phonetics": "/kəʊt/",
        "meaningZh": "外套",
        "meaningEn": "The fur or feathers covering an animal's skin.Wp"
      },
      {
        "word": "Tights",
        "phonetics": "/taɪts/",
        "meaningZh": "紧身裤袜",
        "meaningEn": "A close-fitting, sheer or non-sheer skin-tight garment worn principally by women and girls that covers the body completely from the waist down, usually including the feet."
      },
      {
        "word": "Dress",
        "phonetics": "/dɹɛs/",
        "meaningZh": "连衣裙",
        "meaningEn": "An item of clothing (usually worn by a woman or young girl) which both covers the upper part of the body and includes skirts below the waist."
      },
      {
        "word": "Skirt",
        "phonetics": "/skɜːt/",
        "meaningZh": "短裙",
        "meaningEn": "To be on or form the border of."
      },
      {
        "word": "Scarf",
        "phonetics": "/skɑːf/",
        "meaningZh": "围巾",
        "meaningEn": "A long, often knitted, garment worn around the neck."
      },
      {
        "word": "Blouse",
        "phonetics": "/blaʊs/",
        "meaningZh": "女式衬衫",
        "meaningEn": "A shirt, typically loose and reaching from the neck to the waist."
      },
      {
        "word": "Pullover",
        "phonetics": "/pullover/",
        "meaningZh": "套衫",
        "meaningEn": "A sweater that must be put on by pulling it over the head; a sweater without buttons or a zipper in front"
      },
      {
        "word": "Pocket",
        "phonetics": "/ˈpɒkɪt/",
        "meaningZh": "口袋",
        "meaningEn": "Such a receptacle seen as housing someone's money; hence, financial resources."
      },
      {
        "word": "Handkerchief",
        "phonetics": "/ˈhæŋkətʃiːf/",
        "meaningZh": "手帕",
        "meaningEn": "A piece of cloth, usually square and often fine and elegant, carried for wiping the face, eyes, nose or hands."
      },
      {
        "word": "How many?",
        "phonetics": "/hæŏ/",
        "meaningZh": "多少",
        "meaningEn": "The means by which something is accomplished."
      },
      {
        "word": "Going to",
        "phonetics": "/ˈɡəʊɪŋ/",
        "meaningZh": "正走向现在分词形式",
        "meaningEn": "(chiefly of a machine) To work or function (properly); to move or perform (as required)."
      }
    ],
    "drillParagraphs": [
      {
        "question": "What's he/she doing?",
        "answer": "He's/She's taking the book",
        "questionZh": "他/她在做什么？",
        "answerZh": "他/她正在拿书"
      },
      {
        "question": "What's he/she doing?",
        "answer": "He's/She's opening the book",
        "questionZh": "他/她在做什么？",
        "answerZh": "他/她正在打开这本书"
      },
      {
        "question": "What's he/she doing?",
        "answer": "He's/She's closing the book",
        "questionZh": "他/她在做什么？",
        "answerZh": "他/她正在合上书"
      },
      {
        "question": "What's he/she doing?",
        "answer": "He's/She's putting the book on the table",
        "questionZh": "他/她在做什么？",
        "answerZh": "他/她正在把书放在桌子上"
      },
      {
        "question": "Where's the black pencil?",
        "answer": "The black pencil's here in front of me",
        "questionZh": "黑色铅笔在哪里？",
        "answerZh": "黑色铅笔就在我面前"
      },
      {
        "question": "Where's the white pencil?",
        "answer": "The white pencil's there on the wall",
        "questionZh": "白铅笔在哪里？",
        "answerZh": "墙上有一支白铅笔"
      },
      {
        "question": "Are you sitting there?",
        "answer": "No, I'm not sitting there; I'm sitting here",
        "questionZh": "你坐在那里吗？",
        "answerZh": "不，我没有坐在那里；我没有坐在那里。我坐在这里"
      },
      {
        "question": "Is the white pencil here in front of you?",
        "answer": "No, the white pencil isn't here in front of me; it's there on the Chart",
        "questionZh": "白铅笔在你面前吗？",
        "answerZh": "不，白铅笔不在我面前；而是在我面前。它就在图表上"
      },
      {
        "question": "What's the capital of England?",
        "answer": "London's the capital of England",
        "questionZh": "英国的首都是哪里？",
        "answerZh": "伦敦是英格兰的首都"
      },
      {
        "question": "What's the capital of Russia?",
        "answer": "Moscow's the capital of Russia",
        "questionZh": "俄罗斯的首都是哪里？",
        "answerZh": "莫斯科是俄罗斯的首都"
      },
      {
        "question": "What's the capital of Greece?",
        "answer": "Athens's the capital of Greece",
        "questionZh": "希腊的首都是哪里？",
        "answerZh": "雅典是希腊的首都"
      },
      {
        "question": "What's the capital of China?",
        "answer": "Beĳing's the capital of China",
        "questionZh": "中国的首都是哪里？",
        "answerZh": "北京是中国的首都"
      },
      {
        "question": "What am I doing?",
        "answer": "You're reading the book",
        "questionZh": "我在做什么？",
        "answerZh": "你正在看书"
      },
      {
        "question": "What am I doing?",
        "answer": "You're writing in the book",
        "questionZh": "我在做什么？",
        "answerZh": "你在书上写着"
      },
      {
        "question": "Am I writing in the book?",
        "answer": "No, you aren't writing in the book; you're reading the book",
        "questionZh": "我写在书上吗？",
        "answerZh": "不，你不是在书中写；而是在书中。你正在看书"
      },
      {
        "question": "Am I reading the book?",
        "answer": "No, you aren't reading the book; you're writing in the book",
        "questionZh": "我在看书吗？",
        "answerZh": "不，你没有在读这本书；你在读这本书。你在书上写"
      },
      {
        "question": "What's this?",
        "answer": "It's a coat, dress etc.",
        "questionZh": "这是什么？",
        "answerZh": "就是大衣、裙子之类的。"
      },
      {
        "question": "What are these?",
        "answer": "These are tights",
        "questionZh": "这些是什么？",
        "answerZh": "这些是紧身衣"
      },
      {
        "question": "How many pictures are there on these walls?",
        "answer": "There are four pictures on these walls.",
        "questionZh": "这些墙上有多少张照片？",
        "answerZh": "这些墙上有四幅画。"
      },
      {
        "question": "How many clocks are there in this room?",
        "answer": "There's one clock in this",
        "questionZh": "这个房间里有多少个钟？",
        "answerZh": "这里面有一个时钟"
      },
      {
        "question": "How many chairs are there in this room?",
        "answer": "There are ten chairs in this room.",
        "questionZh": "这个房间里有几把椅子？",
        "answerZh": "这个房间里有十把椅子。"
      },
      {
        "question": "How many teachers are there in this room?",
        "answer": "There's one teacher in this room",
        "questionZh": "这个房间里有多少位老师？",
        "answerZh": "这个房间里有一位老师"
      },
      {
        "question": "What am I doing?",
        "answer": "You're going to the door",
        "questionZh": "我在做什么？",
        "answerZh": "你要走到门口"
      },
      {
        "question": "What am I doing?",
        "answer": "You're going to the window",
        "questionZh": "我在做什么？",
        "answerZh": "你走到窗边"
      },
      {
        "question": "Where am I going?",
        "answer": "You're going to the wall",
        "questionZh": "我要去哪里？",
        "answerZh": "你会走到墙边"
      },
      {
        "question": "Am I going to the door?",
        "answer": "No, you aren't going to the door; you're going to the window",
        "questionZh": "我去门口吗？",
        "answerZh": "不，你不会走到门口；你要去窗边"
      }
    ]
  },
  {
    "id": "tb_l6",
    "stageId": 1,
    "lessonId": 6,
    "title": "Lesson 6: Capital Cities & Reading/Writing",
    "grammarNotes": {
      "en": "Country and capital city names. Continuous tenses (reading, writing) indicate ongoing actions.",
      "zh": "练习国家和首都的专有名词发音。现在进行时（reading, writing）表示当前正在进行的动作。"
    },
    "vocabulary": [
      {
        "word": "Europe",
        "phonetics": "/europe/",
        "meaningZh": "欧洲",
        "meaningEn": "Meaning of the word europe."
      },
      {
        "word": "Asia",
        "phonetics": "/asia/",
        "meaningZh": "亚洲",
        "meaningEn": "Meaning of the word asia."
      },
      {
        "word": "Italy",
        "phonetics": "/italy/",
        "meaningZh": "意大利",
        "meaningEn": "Meaning of the word italy."
      },
      {
        "word": "France",
        "phonetics": "/france/",
        "meaningZh": "法国",
        "meaningEn": "Meaning of the word france."
      },
      {
        "word": "India",
        "phonetics": "/india/",
        "meaningZh": "印度",
        "meaningEn": "Meaning of the word india."
      },
      {
        "word": "First (1st)",
        "phonetics": "/fɪrst/",
        "meaningZh": "第一",
        "meaningEn": "The person or thing in the first position."
      },
      {
        "word": "Second (2nd)",
        "phonetics": "/ˈsɛkɪnd/",
        "meaningZh": "第二",
        "meaningEn": "(usually in the plural) A manufactured item that, though still usable, fails to meet quality control standards."
      },
      {
        "word": "Third (3rd)",
        "phonetics": "/θɜːd/",
        "meaningZh": "第三",
        "meaningEn": "The person or thing in the third position."
      },
      {
        "word": "Fourth (4th)",
        "phonetics": "/fɔːθ/",
        "meaningZh": "第四",
        "meaningEn": "(not used in the plural) The person or thing in the fourth position."
      },
      {
        "word": "Fifth (5th)",
        "phonetics": "/fɪft/",
        "meaningZh": "第五",
        "meaningEn": "The person or thing in the fifth position."
      },
      {
        "word": "Sixth (6th)",
        "phonetics": "/sɪk(s)θ/",
        "meaningZh": "第六",
        "meaningEn": "(not used in the plural) The person or thing in the sixth position."
      },
      {
        "word": "Twelfth (12th)",
        "phonetics": "/twɛlfθ/",
        "meaningZh": "第十二",
        "meaningEn": "One of twelve equal parts of a whole."
      },
      {
        "word": "Twentieth (20th)",
        "phonetics": "/ˈtwɛni.əθ/",
        "meaningZh": "第二十",
        "meaningEn": "A person or thing in the twentieth position."
      },
      {
        "word": "Cardinal",
        "phonetics": "/ˈkɑː.dɪ.nəl/",
        "meaningZh": "基数",
        "meaningEn": "Of fundamental importance; crucial, pivotal."
      },
      {
        "word": "Ordinal",
        "phonetics": "/ˈɔː(ɹ).dɪ.nəl/",
        "meaningZh": "序数",
        "meaningEn": "An ordinal number such as first, second and third."
      },
      {
        "word": "Last",
        "phonetics": "/last/",
        "meaningZh": "最后的",
        "meaningEn": "Final, ultimate, coming after all others of its kind."
      },
      {
        "word": "Give",
        "phonetics": "/ɡɪv/",
        "meaningZh": "给",
        "meaningEn": "The amount of bending that something undergoes when a force is applied to it; a tendency to yield under pressure; resilence."
      },
      {
        "word": "French",
        "phonetics": "/fɹɛnt͡ʃ/",
        "meaningZh": "法国人",
        "meaningEn": "To prepare food by cutting it into strips."
      },
      {
        "word": "German",
        "phonetics": "/ˈd͡ʒɜː.mən/",
        "meaningZh": "德国人",
        "meaningEn": "Having the same mother and father; a full (brother or sister)."
      },
      {
        "word": "Italian",
        "phonetics": "/italian/",
        "meaningZh": "意大利人",
        "meaningEn": "Meaning of the word italian."
      },
      {
        "word": "English",
        "phonetics": "/ˈɪŋ.ɡlɪʃ/",
        "meaningZh": "英国人",
        "meaningEn": "Spinning or rotary motion given to a ball around the vertical axis, as in billiards or bowling."
      },
      {
        "word": "My",
        "phonetics": "/mi/",
        "meaningZh": "我的",
        "meaningEn": "Used to express surprise, shock or amazement."
      },
      {
        "word": "Your",
        "phonetics": "/your/",
        "meaningZh": "你的",
        "meaningEn": "Meaning of the word your."
      },
      {
        "word": "His",
        "phonetics": "/ˈhɪz/",
        "meaningZh": "他的",
        "meaningEn": "That which belongs to him; the possessive case of he, used without a following noun."
      },
      {
        "word": "Her",
        "phonetics": "/ə(ɹ)/",
        "meaningZh": "她宾格",
        "meaningEn": "A female person or animal."
      },
      {
        "word": "Our",
        "phonetics": "/our/",
        "meaningZh": "我们的",
        "meaningEn": "Meaning of the word our."
      },
      {
        "word": "Your",
        "phonetics": "/your/",
        "meaningZh": "你的",
        "meaningEn": "Meaning of the word your."
      },
      {
        "word": "Their",
        "phonetics": "/their/",
        "meaningZh": "他们的",
        "meaningEn": "Meaning of the word their."
      },
      {
        "word": "All",
        "phonetics": "/ɔːl/",
        "meaningZh": "全部的",
        "meaningEn": "(with a possessive pronoun) Everything that one is capable of."
      }
    ],
    "drillParagraphs": [
      {
        "question": "Is Greece in Asia?",
        "answer": "No, Greece isn't in Asia; it's in Europe",
        "questionZh": "希腊属于亚洲吗",
        "answerZh": "不，希腊不在亚洲；希腊不在亚洲。这是在欧洲"
      },
      {
        "question": "Is India in Europe?",
        "answer": "No, India isn't in Europe; it's in Asia",
        "questionZh": "印度属于欧洲吗？",
        "answerZh": "不，印度不在欧洲；印度不在欧洲。它在亚洲"
      },
      {
        "question": "Are France and Italy in Asia?",
        "answer": "No, France and Italy aren't in Asia; they're in Europe",
        "questionZh": "法国和意大利是亚洲的吗？",
        "answerZh": "不，法国和意大利不在亚洲；他们在欧洲"
      },
      {
        "question": "What are the cardinal numbers?",
        "answer": "The cardinal numbers",
        "questionZh": "什么是基数词？",
        "answerZh": "基数词"
      },
      {
        "question": "What are the ordinal numbers?",
        "answer": "The ordinal numbers are 1st, 2nd, 3rd, etc.",
        "questionZh": "什么是序数词？",
        "answerZh": "序数词有第一、第二、第三等。"
      },
      {
        "question": "Which is the first letter of the alphabet?",
        "answer": "A's the first letter of the alphabet",
        "questionZh": "字母表中的第一个字母是哪个？",
        "answerZh": "A是字母表中的第一个字母"
      },
      {
        "question": "Which is the third letter of the alphabet?",
        "answer": "C's the third letter of the alphabet",
        "questionZh": "字母表中的第三个字母是哪个？",
        "answerZh": "C是字母表中的第三个字母"
      },
      {
        "question": "Which is the fifth letter of the alphabet?",
        "answer": "E's the fifth letter",
        "questionZh": "字母表中的第五个字母是哪个？",
        "answerZh": "E是第五个字母"
      },
      {
        "question": "Which is the twelfth letter of the alphabet?",
        "answer": "L's the twelfth letter of the alphabet",
        "questionZh": "字母表中的第十二个字母是哪个？",
        "answerZh": "L是字母表中的第十二个字母"
      },
      {
        "question": "Which is the thirteenth letter of the alphabet?",
        "answer": "M's the thirteenth letter of the alphabet",
        "questionZh": "字母表中的第 13 个字母是哪个？",
        "answerZh": "M是字母表中的第13个字母"
      },
      {
        "question": "Which is the twentieth letter of the alphabet?",
        "answer": "T's the twentieth letter of the alphabet",
        "questionZh": "字母表中的第二十个字母是哪个？",
        "answerZh": "T是字母表中的第二十个字母"
      },
      {
        "question": "Which is the twenty-ʝrst letter?",
        "answer": "U's the twenty-first letter",
        "questionZh": "第二十个字母是哪个？",
        "answerZh": "U是第二十一个字母"
      },
      {
        "question": "Which is the twenty-third letter?",
        "answer": "W's the twenty-third letter",
        "questionZh": "第二十三个字母是哪一个？",
        "answerZh": "W是第二十三个字母"
      },
      {
        "question": "Which is the twenty-ʝfth letter?",
        "answer": "Y's the twenty-fifth letter",
        "questionZh": "第二十个字母是哪一个？",
        "answerZh": "Y是第二十五个字母"
      },
      {
        "question": "Which's the last letter of the alphabet?",
        "answer": "Z's the last letter",
        "questionZh": "字母表中的最后一个字母是哪个？",
        "answerZh": "Z是最后一个字母"
      },
      {
        "question": "Is A the last letter of the alphabet?",
        "answer": "No, A isn't the last letter of the alphabet; it's the first letter of the alphabet",
        "questionZh": "A是字母表的最后一个字母吗？",
        "answerZh": "不，A 不是字母表中的最后一个字母；它是字母表中的最后一个字母。这是字母表的第一个字母"
      },
      {
        "question": "What's he/she doing?",
        "answer": "He's/She's giving you the book",
        "questionZh": "他/她在做什么？",
        "answerZh": "他/她正在给你这本书"
      },
      {
        "question": "What's he/she doing?",
        "answer": "He's/She's giving him/her the book",
        "questionZh": "他/她在做什么？",
        "answerZh": "他/她正在给他/她这本书"
      },
      {
        "question": "Are you (French) or (German?",
        "answer": "No, I'm not (French) or",
        "questionZh": "你是（法国人）还是（德国人？",
        "answerZh": "不，我不是（法国人）或者"
      },
      {
        "question": "Am I (Italian) or (French?",
        "answer": "No, you aren't (Italian) or",
        "questionZh": "我是（意大利人）还是（法国人？",
        "answerZh": "不，你不是（意大利语）或"
      },
      {
        "question": "Are the students German or English?",
        "answer": "The students are English.",
        "questionZh": "学生是德国人还是英国人？",
        "answerZh": "学生都是英国人。"
      },
      {
        "question": "Is this your book?",
        "answer": "No, it isn't my book; it's your book",
        "questionZh": "这是你的书吗？",
        "answerZh": "不，这不是我的书；这不是我的书。这是你的书"
      },
      {
        "question": "Is that my dress?",
        "answer": "No, it isn't your dress; it's my dress",
        "questionZh": "那是我的衣服吗？",
        "answerZh": "不，这不是你的衣服；而是你的衣服。这是我的衣服"
      },
      {
        "question": "Are these his boots?",
        "answer": "No, they aren't his boots; they're her boots",
        "questionZh": "这是他的靴子吗？",
        "answerZh": "不，这不是他的靴子；而是他的。这是她的靴子"
      },
      {
        "question": "Are these her shoes?",
        "answer": "No, they aren't her shoes; they're his shoes",
        "questionZh": "这是她的鞋子吗？",
        "answerZh": "不，这不是她的鞋子；而是她的鞋子。这是他的鞋子"
      },
      {
        "question": "Is this his bag?",
        "answer": "No, it isn't his bag; it's her bag",
        "questionZh": "这是他的包吗？",
        "answerZh": "不，这不是他的包；这不是他的。这是她的包"
      },
      {
        "question": "Is this her suit?",
        "answer": "No, it isn't her suit; it's his suit",
        "questionZh": "这是她的套装吗？",
        "answerZh": "不，这不是她的套装；而是她的衣服。这是他的西装"
      },
      {
        "question": "What colour's his suit?",
        "answer": "His suit's black",
        "questionZh": "他的西装是什么颜色的？",
        "answerZh": "他的西装是黑色的"
      },
      {
        "question": "Are these our shoes?",
        "answer": "No, they aren't our shoes; they're their shoes",
        "questionZh": "这是我们的鞋子吗？",
        "answerZh": "不，它们不是我们的鞋子；它们是我们的鞋子。他们是他们的鞋子"
      },
      {
        "question": "What colour are their shoes?",
        "answer": "Their shoes are black",
        "questionZh": "他们的鞋子是什么颜色的？",
        "answerZh": "他们的鞋子是黑色的"
      },
      {
        "question": "Are these their books?",
        "answer": "No, these aren't their books; they're our books",
        "questionZh": "这些是他们的书吗？",
        "answerZh": "不，这些不是他们的书；而是他们的书。它们是我们的书"
      },
      {
        "question": "Where are our books?",
        "answer": "Our books are on the table(s)",
        "questionZh": "我们的书在哪里？",
        "answerZh": "我们的书在桌子上"
      },
      {
        "question": "Are all the walls in this room white (or green or blue etc?",
        "answer": "Yes, all the walls in this room are white",
        "questionZh": "这个房间里的所有墙壁都是白色的（还是绿色或蓝色等？",
        "answerZh": "是的，这个房间的所有墙壁都是白色的"
      },
      {
        "question": "Are all the books in this room English books?",
        "answer": "Yes, all the books in this",
        "questionZh": "这个房间里的书都是英文书吗？",
        "answerZh": "是的，这本书里的所有书"
      },
      {
        "question": "Are all the students sitting?",
        "answer": "Yes, all the students are sitting",
        "questionZh": "同学们都坐了吗？",
        "answerZh": "是的，所有的学生都坐着"
      }
    ]
  },
  {
    "id": "tb_l7",
    "stageId": 1,
    "lessonId": 7,
    "title": "Lesson 7: Plurals & Punctuation",
    "grammarNotes": {
      "en": "Irregular plurals (person/people, foot/feet) and common punctuation marks (question mark, full stop).",
      "zh": "学习不规则复数形式（如 person 变 people，foot 变 feet）以及五大基础标点符号的英文说法。"
    },
    "vocabulary": [
      {
        "word": "Person",
        "phonetics": "/ˈpɜːsən/",
        "meaningZh": "人",
        "meaningEn": "An individual; usually a human being."
      },
      {
        "word": "People (plural of person)",
        "phonetics": "/ˈpiːpəl/",
        "meaningZh": "的复数形式",
        "meaningEn": "Used as plural of person; a body of human beings considered generally or collectively; a group of two or more persons."
      },
      {
        "word": "Coming from",
        "phonetics": "/ˈkʌmɪŋ/",
        "meaningZh": "正从来",
        "meaningEn": "To move from further away to nearer to."
      },
      {
        "word": "Touch",
        "phonetics": "/touch/",
        "meaningZh": "触摸",
        "meaningEn": "Meaning of the word touch."
      },
      {
        "word": "Sentence",
        "phonetics": "[ˈsɛntn̩t͡s]",
        "meaningZh": "句子",
        "meaningEn": "The decision or judgement of a jury or court; a verdict."
      },
      {
        "word": "Word",
        "phonetics": "/wɜːd/",
        "meaningZh": "单词",
        "meaningEn": "A watchword or rallying cry, a verbal signal (even when consisting of multiple words)."
      },
      {
        "word": "Verb",
        "phonetics": "/vɜːb/",
        "meaningZh": "动词",
        "meaningEn": "(grammar) A word that indicates an action, event, or state."
      },
      {
        "word": "Use",
        "phonetics": "/use/",
        "meaningZh": "使用",
        "meaningEn": "The act of using."
      },
      {
        "word": "For",
        "phonetics": "/for/",
        "meaningZh": "为了",
        "meaningEn": "Meaning of the word for."
      },
      {
        "word": "Action",
        "phonetics": "/ˈæk.ʃən/",
        "meaningZh": "行动",
        "meaningEn": "A way of motion or functioning."
      },
      {
        "word": "Question mark (?)",
        "phonetics": "/ˈkwɛstjən/",
        "meaningZh": "问号",
        "meaningEn": "A sentence, phrase or word which asks for information, reply or response; an interrogative."
      },
      {
        "word": "Full stop (.)",
        "phonetics": "/fʊl/",
        "meaningZh": "句号",
        "meaningEn": "Containing the maximum possible amount that can fit in the space available."
      },
      {
        "word": "Comma (,)",
        "phonetics": "/ˈkɒm.ə/",
        "meaningZh": "逗号",
        "meaningEn": "The punctuation mark ⟨,⟩ used to indicate a set off parts of a sentence or between elements of a list."
      },
      {
        "word": "Colon (:)",
        "phonetics": "/ˈkəʊ.lɒn/",
        "meaningZh": "冒号",
        "meaningEn": "The punctuation mark \":\"."
      },
      {
        "word": "Semicolon (;)",
        "phonetics": "/ˌsɛmiˈkəʊlən/",
        "meaningZh": "分号",
        "meaningEn": "The punctuation mark ;."
      },
      {
        "word": "Umbrella",
        "phonetics": "/ʌmˈbɹɛlə/",
        "meaningZh": "伞",
        "meaningEn": "Cloth-covered frame used for protection against rain or sun."
      },
      {
        "word": "Pronounce",
        "phonetics": "/pɹəˈnaʊns/",
        "meaningZh": "发音",
        "meaningEn": "To declare formally, officially or ceremoniously."
      },
      {
        "word": "A",
        "phonetics": "/æɪ/",
        "meaningZh": "一不定冠词",
        "meaningEn": "The name of the Latin script letter A/a."
      },
      {
        "word": "An",
        "phonetics": "/æn/",
        "meaningZh": "一不定冠词",
        "meaningEn": "One"
      },
      {
        "word": "The",
        "phonetics": "/ðiː/",
        "meaningZh": "这个那个定冠词",
        "meaningEn": "The definite article, referring to specific things."
      },
      {
        "word": "The",
        "phonetics": "/ðiː/",
        "meaningZh": "这个那个定冠词",
        "meaningEn": "The definite article, referring to specific things."
      },
      {
        "word": "Body",
        "phonetics": "/ˈbɒdi/",
        "meaningZh": "身体",
        "meaningEn": "The shank of a type, or the depth of the shank (by which the size is indicated)."
      },
      {
        "word": "Part",
        "phonetics": "/pɐːt/",
        "meaningZh": "部分",
        "meaningEn": "Duty; responsibility."
      },
      {
        "word": "Foot",
        "phonetics": "[fʊt̚]",
        "meaningZh": "脚",
        "meaningEn": "A biological structure found in many animals that is used for locomotion and that is frequently a separate organ at the terminal part of the leg."
      },
      {
        "word": "Feet (plural of foot)",
        "phonetics": "/fiːt/",
        "meaningZh": "的复数形式",
        "meaningEn": "A biological structure found in many animals that is used for locomotion and that is frequently a separate organ at the terminal part of the leg."
      },
      {
        "word": "Leg",
        "phonetics": "/leɪɡ/",
        "meaningZh": "腿",
        "meaningEn": "A limb or appendage that an animal uses for support or locomotion."
      },
      {
        "word": "Back",
        "phonetics": "/bæk/",
        "meaningZh": "背部",
        "meaningEn": "The rear of the body, especially the part between the neck and the end of the spine and opposite the chest and belly."
      },
      {
        "word": "Arm",
        "phonetics": "/ɑːm/",
        "meaningZh": "手臂",
        "meaningEn": "The portion of the upper human appendage, from the shoulder to the wrist and sometimes including the hand."
      },
      {
        "word": "Wrist",
        "phonetics": "/ɹɪst/",
        "meaningZh": "手腕",
        "meaningEn": "The complex joint between forearm bones, carpus, and metacarpals where the hand is attached to the arm; the carpus in a narrow sense."
      },
      {
        "word": "Hand",
        "phonetics": "/hænd/",
        "meaningZh": "手臂",
        "meaningEn": "The part of the forelimb below the forearm or wrist in a human, and the corresponding part in many other animals."
      },
      {
        "word": "Finger",
        "phonetics": "/ˈfɪŋəɹ/",
        "meaningZh": "手指",
        "meaningEn": "A slender jointed extremity of the human hand, exclusive of the thumb."
      },
      {
        "word": "Thumb",
        "phonetics": "/θʌm/",
        "meaningZh": "大拇指",
        "meaningEn": "A thumbnail picture."
      },
      {
        "word": "Right",
        "phonetics": "/ˈɹaɪt/",
        "meaningZh": "正确的",
        "meaningEn": "Straight, not bent."
      },
      {
        "word": "Wrong",
        "phonetics": "/ɹɒŋ/",
        "meaningZh": "错误的",
        "meaningEn": "Something that is immoral or not good."
      }
    ],
    "drillParagraphs": [
      {
        "question": "What's the plural of \"person\"?",
        "answer": "The plural of \"person\" is \"people\"",
        "questionZh": "“人”的复数形式是什么？",
        "answerZh": "“人”的复数是“人”"
      },
      {
        "question": "How many people are there in this room?",
        "answer": "There are twelve people in this room.",
        "questionZh": "这个房间里有多少人？",
        "answerZh": "这个房间里有十二个人。"
      },
      {
        "question": "How many people are there in this town?",
        "answer": "There are millions of people in this town.",
        "questionZh": "这个镇上有多少人？",
        "answerZh": "这个镇上有数百万人。"
      },
      {
        "question": "What am I doing?",
        "answer": "You're coming from the door",
        "questionZh": "我在做什么？",
        "answerZh": "你从门口来"
      },
      {
        "question": "Am I coming from the window?",
        "answer": "No, you aren't coming from the window; you're going to the window",
        "questionZh": "我是从窗户进来的吗？",
        "answerZh": "不，你不是从窗户进来的；你是从窗户进来的。你要去窗边"
      },
      {
        "question": "Am I going to the window?",
        "answer": "No, you aren't going to the window; you're coming from the window",
        "questionZh": "我要去窗边吗？",
        "answerZh": "不，你不会走到窗边；你从窗口过来"
      },
      {
        "question": "What am I doing?",
        "answer": "You're touching the wall",
        "questionZh": "我在做什么？",
        "answerZh": "你正在触摸墙壁"
      },
      {
        "question": "What am I doing?",
        "answer": "You're touching the picture",
        "questionZh": "我在做什么？",
        "answerZh": "你正在触摸图片"
      },
      {
        "question": "What's he doing?",
        "answer": "He's touching his ear.",
        "questionZh": "他在做什么？",
        "answerZh": "他正在摸他的耳朵。"
      },
      {
        "question": "What's this?",
        "answer": "It's a sentence",
        "questionZh": "这是什么？",
        "answerZh": "是一句话"
      },
      {
        "question": "What's this?",
        "answer": "It's a word",
        "questionZh": "这是什么？",
        "answerZh": "是一句话"
      },
      {
        "question": "How many words are there in this sentence?",
        "answer": "There are seven words",
        "questionZh": "这句话有多少个字？",
        "answerZh": "有七个字"
      },
      {
        "question": "Which's the ʝrst word of this sentence?",
        "answer": "\"Verbs\" is the first word of this sentence",
        "questionZh": "这句话的第一个词是什么？",
        "answerZh": "“动词”是这句话的第一个词"
      },
      {
        "question": "Which's the third word of this sentence?",
        "answer": "\"Words\" is the third word of this sentence",
        "questionZh": "这句话的第三个词是哪个？",
        "answerZh": "“词”是这句话的第三个词"
      },
      {
        "question": "Which's the ʝfth word of this sentence?",
        "answer": "\"Use\" is the fifth word of this sentence",
        "questionZh": "这句话的第 5 个词是哪个？",
        "answerZh": "“用”是这句话的第五个词"
      },
      {
        "question": "Which's the sixth word?",
        "answer": "\"For\" is the sixth word of this sentence",
        "questionZh": "第六个字是哪个？",
        "answerZh": "“为”是这句话的第六个词"
      },
      {
        "question": "Which's the last word?",
        "answer": "\"Actions\" is the last word of this sentence",
        "questionZh": "最后一个词是哪个？",
        "answerZh": "“行动”是这句话的最后一个词"
      },
      {
        "question": "What's this?",
        "answer": "It's a question mark",
        "questionZh": "这是什么？",
        "answerZh": "这是一个问号"
      },
      {
        "question": "What's this?",
        "answer": "It's a full stop",
        "questionZh": "这是什么？",
        "answerZh": "这是一个句号"
      },
      {
        "question": "What's this?",
        "answer": "It's a comma",
        "questionZh": "这是什么？",
        "answerZh": "这是一个逗号"
      },
      {
        "question": "What's this?",
        "answer": "It's a colon",
        "questionZh": "这是什么？",
        "answerZh": "这是一个冒号"
      },
      {
        "question": "What's this?",
        "answer": "It's a semi-colon",
        "questionZh": "这是什么？",
        "answerZh": "这是一个分号"
      },
      {
        "question": "What word's this?",
        "answer": "It's the word \"umbrella\"",
        "questionZh": "这是什么字？",
        "answerZh": "就是“雨伞”这个词"
      },
      {
        "question": "Is there an umbrella on the table?",
        "answer": "No, there isn't an umbrella on the table",
        "questionZh": "桌子上有伞吗？",
        "answerZh": "不，桌子上没有雨伞"
      },
      {
        "question": "What's he/she doing?",
        "answer": "He's/She's pronouncing the word \"what\"",
        "questionZh": "他/她在做什么？",
        "answerZh": "他/她正在发音“what”这个词"
      },
      {
        "question": "Pronounce this word, please?",
        "answer": "Colour",
        "questionZh": "请发音这个词好吗？",
        "answerZh": "颜色"
      },
      {
        "question": "What's he/she doing?",
        "answer": "He's/She's pronouncing the word \"colour\"",
        "questionZh": "他/她在做什么？",
        "answerZh": "他/她正在发音“颜色”这个词"
      },
      {
        "question": "Pronounce these words, please?",
        "answer": "a book – an umbrella; the book – the umbrella",
        "questionZh": "请发音这些词好吗？",
        "answerZh": "一本书——一把雨伞；书——伞"
      },
      {
        "question": "What's this?",
        "answer": "This is the body",
        "questionZh": "这是什么？",
        "answerZh": "这是身体"
      },
      {
        "question": "Is this her body?",
        "answer": "No, it isn't her body; it's your body",
        "questionZh": "这是她的身体吗？",
        "answerZh": "不，这不是她的身体，而是她的身体。这是你的身体"
      },
      {
        "question": "What part of the body is this?",
        "answer": "This part of the body is the foot",
        "questionZh": "这是身体的哪一部分？",
        "answerZh": "身体的这个部分是脚"
      },
      {
        "question": "What's the plural of \"foot\"?",
        "answer": "The plural of \"foot\" is \"feet\"",
        "questionZh": "“脚”的复数是什么？",
        "answerZh": "“脚”的复数是“脚”"
      },
      {
        "question": "What's this?",
        "answer": "It's a leg, the back, an arm, a wrist etc.",
        "questionZh": "这是什么？",
        "answerZh": "它是腿、背部、手臂、手腕等。"
      },
      {
        "question": "2 + 2 = 7: is that right?",
        "answer": "No, it isn't right; it's wrong",
        "questionZh": "2 + 2 = 7：是这样吗？",
        "answerZh": "不，这是不对的；这是错误的"
      },
      {
        "question": "The wall's high: is that wrong?",
        "answer": "No, it isn't wrong; it's right",
        "questionZh": "墙很高：这是错的吗？",
        "answerZh": "不，这并没有错；是的"
      },
      {
        "question": "Is it right you're Mr Brown?",
        "answer": "No, it isn't right I'm Mr Brown; it's wrong. I'm Jack Brown.",
        "questionZh": "你是布朗先生吗？",
        "answerZh": "不，我是布朗先生不对；我是布朗先生，这是不对的。这是错误的。我是杰克·布朗。"
      }
    ]
  },
  {
    "id": "tb_l8",
    "stageId": 1,
    "lessonId": 8,
    "title": "Lesson 8: Names & Countries",
    "grammarNotes": {
      "en": "Asking names using 'what'. Translating sentences between English and other languages.",
      "zh": "学习使用 what 提问姓名。练习在英语和母语之间进行快速口译肌肉反射训练。"
    },
    "vocabulary": [
      {
        "word": "Question",
        "phonetics": "/ˈkwɛstjən/",
        "meaningZh": "问题",
        "meaningEn": "A sentence, phrase or word which asks for information, reply or response; an interrogative."
      },
      {
        "word": "Answer",
        "phonetics": "/ˈan.sə/",
        "meaningZh": "答案",
        "meaningEn": "A response or reply; something said or done in reaction to a statement or question."
      },
      {
        "word": "Meaning",
        "phonetics": "/ˈmiːnɪŋ/",
        "meaningZh": "含义",
        "meaningEn": "The value, purpose, importance, point or significance (of something beyond the fact of that thing's existence)."
      },
      {
        "word": "Name",
        "phonetics": "/neɪm/",
        "meaningZh": "姓名",
        "meaningEn": "Any nounal word or phrase which indicates a particular person, place, class, or thing."
      },
      {
        "word": "Head",
        "phonetics": "/hɛd/",
        "meaningZh": "头",
        "meaningEn": "The part of the body of an animal or human which contains the brain, mouth and main sense organs."
      },
      {
        "word": "Face",
        "phonetics": "/feɪs/",
        "meaningZh": "脸",
        "meaningEn": "The front part of the head of a human or other animal, featuring the eyes, nose and mouth, and the surrounding area."
      },
      {
        "word": "Chin",
        "phonetics": "/tʃɪn/",
        "meaningZh": "下巴",
        "meaningEn": "The bottom of a face, (specifically) the typically jutting jawline below the mouth."
      },
      {
        "word": "Mouth",
        "phonetics": "/mʌʊθ/",
        "meaningZh": "嘴",
        "meaningEn": "The opening of a creature through which food is ingested."
      },
      {
        "word": "Nose",
        "phonetics": "/nəʊz/",
        "meaningZh": "鼻子",
        "meaningEn": "A protuberance on the face housing the nostrils, which are used to breathe or smell."
      },
      {
        "word": "Eye",
        "phonetics": "/aɪ/",
        "meaningZh": "眼睛",
        "meaningEn": "An organ through which animals see (perceive surroundings via light)."
      },
      {
        "word": "Ear",
        "phonetics": "/ɪə̯/",
        "meaningZh": "耳朵",
        "meaningEn": "The sense of hearing; the perception of sounds; skill or good taste in listening to music."
      },
      {
        "word": "Hair",
        "phonetics": "/heː/",
        "meaningZh": "头发",
        "meaningEn": "The collection or mass of such growths growing from the skin of humans and animals, and forming a covering for a part of the head or for any part or the whole body."
      },
      {
        "word": "Tongue",
        "phonetics": "/tʌŋ/",
        "meaningZh": "舌头",
        "meaningEn": "This organ, as taken from animals used for food (especially cows).−"
      },
      {
        "word": "Remaining",
        "phonetics": "/ɹɪˈmeɪnɪŋ/",
        "meaningZh": "留在",
        "meaningEn": "To continue unchanged in place, form, or condition, or undiminished in quantity; to abide; to stay; to endure; to last."
      },
      {
        "word": "Country",
        "phonetics": "/ˈkɐntɹi/",
        "meaningZh": "国家",
        "meaningEn": "(chiefly British) An area of land; a district, region."
      },
      {
        "word": "Spain",
        "phonetics": "/spain/",
        "meaningZh": "西班牙",
        "meaningEn": "Meaning of the word spain."
      },
      {
        "word": "Translate",
        "phonetics": "/ˈtɹɛnzlæet/",
        "meaningZh": "翻译",
        "meaningEn": "To entrance, to cause to lose recollection or sense."
      },
      {
        "word": "Into",
        "phonetics": "/ˈɪn.tuː/",
        "meaningZh": "成",
        "meaningEn": "To or towards the inside of."
      },
      {
        "word": "Who",
        "phonetics": "/huː/",
        "meaningZh": "谁",
        "meaningEn": "(interrogative) What person or people; which person or people; asks for the identity of someone. (used in a direct or indirect question)"
      },
      {
        "word": "Thing",
        "phonetics": "/θɪŋ/",
        "meaningZh": "事物",
        "meaningEn": "A genuine concept, entity or phenomenon; something that actually exists (often contrary to expectation or belief)."
      },
      {
        "word": "Tall",
        "phonetics": "/tɔːl/",
        "meaningZh": "高的",
        "meaningEn": "(of a person) Having a vertical extent greater than the average. For example, somebody with a height of over 6 feet would generally be considered to be tall."
      },
      {
        "word": "Short",
        "phonetics": "/ʃɔːt/",
        "meaningZh": "短的",
        "meaningEn": "Measuring a small distance from end to end."
      },
      {
        "word": "Scandinavia",
        "phonetics": "/scandinavia/",
        "meaningZh": "斯堪的纳维亚",
        "meaningEn": "Meaning of the word scandinavia."
      },
      {
        "word": "Difference",
        "phonetics": "/ˈdɪfəɹən(t)s/",
        "meaningZh": "差别",
        "meaningEn": "The quality of being different."
      },
      {
        "word": "Whereas",
        "phonetics": "/weəɹˈæz/",
        "meaningZh": "然而",
        "meaningEn": "In contrast; whilst on the contrary; although."
      },
      {
        "word": "That",
        "phonetics": "/ˈðæt/",
        "meaningZh": "那个",
        "meaningEn": "(degree) To a given extent or degree."
      }
    ],
    "drillParagraphs": [
      {
        "question": "What's this?",
        "answer": "It's a question",
        "questionZh": "这是什么？",
        "answerZh": "这是一个问题"
      },
      {
        "question": "What's this?",
        "answer": "It's an answer",
        "questionZh": "这是什么？",
        "answerZh": "这是一个答案"
      },
      {
        "question": "Is this an answer?",
        "answer": "No, it isn't an answer; it's a question",
        "questionZh": "这是一个答案吗？",
        "answerZh": "不，这不是一个答案；而是一个答案。这是一个问题"
      },
      {
        "question": "What's the meaning of the word \"use\" in ..?",
        "answer": "The meaning of the word \"use\" in  is \"\"",
        "questionZh": ".. 中的“使用”一词是什么意思？",
        "answerZh": "中“使用”一词的含义是“”"
      },
      {
        "question": "What's the meaning of the word \"table\" in ..?",
        "answer": "The meaning of the word \"table\" in  is \"\"",
        "questionZh": ".. 中的“表”一词是什么意思？",
        "answerZh": "中“表”这个词的意思是“”"
      },
      {
        "question": "What's the meaning of the word \"for\" in ..?",
        "answer": "The meaning of the word \"for\" in  is \"\"",
        "questionZh": ".. 中的“for”一词是什么意思？",
        "answerZh": "中“for”的意思是“”"
      },
      {
        "question": "What's the meaning of the word \"chair\" in ..?",
        "answer": "The meaning of the word \"chair\" in  is \"\"",
        "questionZh": ".. 中的“椅子”一词是什么意思？",
        "answerZh": "中“椅子”一词的意思是“”"
      },
      {
        "question": "What's the meaning of the word \"action\" in ..?",
        "answer": "The meaning of the word \"action\" in  is \"\" name",
        "questionZh": "..中的“行动”一词是什么意思？",
        "answerZh": "“行动”一词的含义是“名称”"
      },
      {
        "question": "What's my name?",
        "answer": "Your name's Mr Brown.",
        "questionZh": "我叫什么名字？",
        "answerZh": "你的名字是布朗先生。"
      },
      {
        "question": "What's your name?",
        "answer": "My name's Jack.",
        "questionZh": "你叫什么名字？",
        "answerZh": "我叫杰克。"
      },
      {
        "question": "What's his name?",
        "answer": "His name's Mr Brown",
        "questionZh": "他叫什么名字？",
        "answerZh": "他的名字叫布朗先生"
      },
      {
        "question": "What's her name?",
        "answer": "Her name's Mrs Brown",
        "questionZh": "她叫什么名字？",
        "answerZh": "她的名字叫布朗夫人"
      },
      {
        "question": "What's this?",
        "answer": "It's the head etc.",
        "questionZh": "这是什么？",
        "answerZh": "就是头之类的。"
      },
      {
        "question": "What am I doing?",
        "answer": "You're going to the window",
        "questionZh": "我在做什么？",
        "answerZh": "你走到窗边"
      },
      {
        "question": "What am I doing?",
        "answer": "You're coming from the window",
        "questionZh": "我在做什么？",
        "answerZh": "你从窗户走来"
      },
      {
        "question": "Are you going to the window?",
        "answer": "No, I'm not going to the window; I'm remaining on the chair",
        "questionZh": "你要去窗口吗？",
        "answerZh": "不，我不会走到窗边；我仍坐在椅子上"
      },
      {
        "question": "Am I remaining on the chair?",
        "answer": "No, you aren't remaining on the chair; you're going to the window",
        "questionZh": "我还坐在椅子上吗？",
        "answerZh": "不，你不会留在椅子上；你会继续坐在椅子上。你要去窗边"
      },
      {
        "question": "What's the name of your country?",
        "answer": "China is the name of my country.",
        "questionZh": "你的国家叫什么名字？",
        "answerZh": "中国是我的国家的名字。"
      },
      {
        "question": "What am I doing?",
        "answer": "You're translating a sentence",
        "questionZh": "我在做什么？",
        "answerZh": "你正在翻译一个句子"
      },
      {
        "question": "What's he doing?",
        "answer": "He's translating a sentence from English into Chinese.",
        "questionZh": "他在做什么？",
        "answerZh": "他正在把一个句子从英文翻译成中文。"
      },
      {
        "question": "Who am I?",
        "answer": "You're Mr Smith",
        "questionZh": "我是谁？",
        "answerZh": "你是史密斯先生"
      },
      {
        "question": "Who are you?",
        "answer": "I'm Mr Rossi",
        "questionZh": "你是谁？",
        "answerZh": "我是罗西先生"
      },
      {
        "question": "Who's he?",
        "answer": "He's Jack Brown",
        "questionZh": "他是谁？",
        "answerZh": "他是杰克·布朗"
      },
      {
        "question": "Who's she?",
        "answer": "She's Anna Brown",
        "questionZh": "她是谁？",
        "answerZh": "她是安娜·布朗"
      },
      {
        "question": "Who are they?",
        "answer": "They're Mr and Mrs Brown",
        "questionZh": "他们是谁？",
        "answerZh": "他们是布朗先生和布朗夫人"
      },
      {
        "question": "How many things are there on this book?",
        "answer": "There are three things on that book",
        "questionZh": "这本书里有多少东西？",
        "answerZh": "那本书上写了三件事"
      },
      {
        "question": "What's the name of this thing?",
        "answer": "The name of that thing is a tie",
        "questionZh": "这个东西叫什么名字？",
        "answerZh": "那东西的名字是领带"
      },
      {
        "question": "What colour's this thing?",
        "answer": "This thing's red",
        "questionZh": "这东西是什么颜色的？",
        "answerZh": "这东西是红色的"
      },
      {
        "question": "Is Mr Brown short?",
        "answer": "No, Mr Brown isn't short; he's tall",
        "questionZh": "布朗先生矮吗？",
        "answerZh": "不，布朗先生并不矮；他个子很高。他很高"
      },
      {
        "question": "Is Anna Brown tall?",
        "answer": "No, Anna Brown isn't tall; she's short",
        "questionZh": "安娜·布朗高吗？",
        "answerZh": "不，安娜·布朗个子不高；她个子不高。她很矮"
      },
      {
        "question": "Are the people of Scandinavia short?",
        "answer": "No, the people of Scandinavia",
        "questionZh": "斯堪的纳维亚半岛的人矮吗？",
        "answerZh": "不，斯堪的纳维亚人民"
      },
      {
        "question": "What's this?/ It's a pen./ Is this/ a pencil/ or a book?/ Is the/ long table/ black?/ No,?",
        "answer": "it isn't;/ it's white./ The short box/ is green./ A city is large/ but a village/ is small./ Is Mr Brown/ a man?/ Yes, he is./ Is Anna Brown/ a boy or a girl?/ She's a girl./ One, two, three,/ four, five./ Is the clock/ on the table/ or under the chair?/ No,/ it's on the wall./ What colour/ is the ceiling?",
        "questionZh": "这是什么？/这是一支钢笔。/这是/一支铅笔/还是一本书？//长桌/是黑色的吗？/不是，？",
        "answerZh": "不是；/它是白色的。/短盒子/是绿色的。/城市很大/但村庄/很小。/布朗先生/是个男人吗？/是的，他是。/安娜·布朗/是男孩还是女孩？/她是女孩。/一、二、三、/四、五。/时钟/在桌子上/还是在椅子下面？/不，/在墙上。/天花板是什么颜色？"
      }
    ]
  },
  {
    "id": "tb_l9",
    "stageId": 1,
    "lessonId": 9,
    "title": "Lesson 9: To Have & Got",
    "grammarNotes": {
      "en": "The verb 'to have' and the contraction 'have got' to indicate possession.",
      "zh": "学习 be 动词之后的第二大核心动词‘to have’（拥有），以及口语中极高频的 ‘have got’ 紧缩缩写式。"
    },
    "vocabulary": [
      {
        "word": "Asking",
        "phonetics": "/ˈaskɪŋ/",
        "meaningZh": "正在问",
        "meaningEn": "To request (information, or an answer to a question)."
      },
      {
        "word": "Answering",
        "phonetics": "/ˈɑːn.sə.ɹɪŋ/",
        "meaningZh": "正在回答",
        "meaningEn": "To make a reply or response to."
      },
      {
        "word": "To have",
        "phonetics": "/tʉː/",
        "meaningZh": "拥有",
        "meaningEn": "Toward a closed, touching or engaging position."
      },
      {
        "word": "I have / I've",
        "phonetics": "/i have / i've/",
        "meaningZh": "我有缩写形式",
        "meaningEn": "The name of the Latin-script letter I."
      },
      {
        "word": "You have / You've",
        "phonetics": "/jʉː/",
        "meaningZh": "你有缩写形式",
        "meaningEn": "(object pronoun) The people spoken, or written to, as an object."
      },
      {
        "word": "He has / He's",
        "phonetics": "/hi/",
        "meaningZh": "他有缩写形式",
        "meaningEn": "A male."
      },
      {
        "word": "She has / She's",
        "phonetics": "/ʃiː/",
        "meaningZh": "她有缩写形式",
        "meaningEn": "A female."
      },
      {
        "word": "It has / It's",
        "phonetics": "/ɪt/",
        "meaningZh": "它有缩写形式",
        "meaningEn": "The person who chases and tries to catch the other players in the playground game of tag."
      },
      {
        "word": "We have / We've",
        "phonetics": "/wiː/",
        "meaningZh": "我们有缩写形式",
        "meaningEn": "(personal) The plural form of you, including everyone being addressed."
      },
      {
        "word": "You have / You've",
        "phonetics": "/jʉː/",
        "meaningZh": "你有缩写形式",
        "meaningEn": "(object pronoun) The people spoken, or written to, as an object."
      },
      {
        "word": "They have / They've",
        "phonetics": "/ðeɪ/",
        "meaningZh": "他们有缩写形式",
        "meaningEn": "(the third-person plural) A group of people, animals, plants or objects previously mentioned."
      },
      {
        "word": "Got (get)",
        "phonetics": "/ɡɒt/",
        "meaningZh": "的过去式和过去分词",
        "meaningEn": "(ditransitive) To obtain; to acquire."
      },
      {
        "word": "With",
        "phonetics": "/with/",
        "meaningZh": "和一起",
        "meaningEn": "Along, together with others, in a group, etc."
      },
      {
        "word": "Generally",
        "phonetics": "/d͡ʒɛn.əɹ.ə.li/",
        "meaningZh": "通常",
        "meaningEn": "Popularly or widely."
      },
      {
        "word": "Any",
        "phonetics": "/ˈæni/",
        "meaningZh": "一些用于否定句或疑问句",
        "meaningEn": "To even the slightest extent, at all."
      },
      {
        "word": "Some",
        "phonetics": "/sɐm/",
        "meaningZh": "一些用于肯定句",
        "meaningEn": "Of a measurement: approximately, roughly."
      },
      {
        "word": "Not any",
        "phonetics": "/nɒt/",
        "meaningZh": "的否定形式",
        "meaningEn": "Negates the meaning of the modified verb."
      },
      {
        "word": "None",
        "phonetics": "/nɒn/",
        "meaningZh": "没有",
        "meaningEn": "To no extent, in no way."
      },
      {
        "word": "Specific",
        "phonetics": "/spəˈsɪf.ɪk/",
        "meaningZh": "具体的",
        "meaningEn": "Serving to identify a particular thing (often a disease or condition), with little risk of mistaking something else for it."
      },
      {
        "word": "Nonspecific / Specific",
        "phonetics": "/nonspecific / specific/",
        "meaningZh": "的否定形式",
        "meaningEn": "Not specific or precise."
      },
      {
        "word": "Negative",
        "phonetics": "/ˈnɛ(e)ɡəˌɾɪv/",
        "meaningZh": "否定的",
        "meaningEn": "Damaging; undesirable; unfavourable."
      },
      {
        "word": "Positive",
        "phonetics": "/ˈpɒzɪ̈tɪv/",
        "meaningZh": "肯定的",
        "meaningEn": "Fully assured in opinion."
      },
      {
        "word": "For example",
        "phonetics": "/for example/",
        "meaningZh": "例如",
        "meaningEn": "Meaning of the word for example."
      },
      {
        "word": "Important",
        "phonetics": "/ɪmˈpɔːtənt/",
        "meaningZh": "重要的",
        "meaningEn": "Having relevant and crucial value."
      },
      {
        "word": "When",
        "phonetics": "/ʍɛn/",
        "meaningZh": "何时",
        "meaningEn": "The time at which something happens."
      },
      {
        "word": "Class",
        "phonetics": "/klas/",
        "meaningZh": "班级",
        "meaningEn": "A group, collection, category or set sharing characteristics or attributes."
      },
      {
        "word": "Classroom",
        "phonetics": "/ˈklɑːsɹʊm/",
        "meaningZh": "教室",
        "meaningEn": "A room, often in a school, where classes take place"
      }
    ],
    "drillParagraphs": [
      {
        "question": "What's this?",
        "answer": "It's a pen",
        "questionZh": "这是什么？",
        "answerZh": "这是一支笔"
      },
      {
        "question": "What am I doing?",
        "answer": "You're asking him/her a question",
        "questionZh": "我在做什么？",
        "answerZh": "你在问他/她一个问题"
      },
      {
        "question": "What's this?",
        "answer": "It's a hand",
        "questionZh": "这是什么？",
        "answerZh": "这是一只手"
      },
      {
        "question": "Am I asking him/her a question?",
        "answer": "Yes, you're asking him/her a question",
        "questionZh": "我在问他/她问题吗？",
        "answerZh": "是的，你在问他/她一个问题"
      },
      {
        "question": "What's this?",
        "answer": "It's a head",
        "questionZh": "这是什么？",
        "answerZh": "这是一个头"
      },
      {
        "question": "What's he/she doing?",
        "answer": "He's/She's answering your question",
        "questionZh": "他/她在做什么？",
        "answerZh": "他/她正在回答你的问题"
      },
      {
        "question": "What's this?",
        "answer": "It's a mouth",
        "questionZh": "这是什么？",
        "answerZh": "是一张嘴"
      },
      {
        "question": "Is he/she answering my question?",
        "answer": "Yes, he's/she's answering your question",
        "questionZh": "他/她在回答我的问题吗？",
        "answerZh": "是的，他/她正在回答你的问题"
      },
      {
        "question": "What's the meaning of the verb \"to have\"?",
        "answer": "The meaning of the verb \"to have\" is \"拥有\".",
        "questionZh": "动词“有”是什么意思？",
        "answerZh": "动词“to have”的意思是“拥有”。"
      },
      {
        "question": "What's the contraction of \"I have, you have\" etc?",
        "answer": "I've, you've etc.",
        "questionZh": "“我有，你有”等的缩写是什么？",
        "answerZh": "我有，你有等等。"
      },
      {
        "question": "Have I got two eyes?",
        "answer": "Yes, you've got two eyes",
        "questionZh": "我有两只眼睛吗？",
        "answerZh": "是的，你有两只眼睛"
      },
      {
        "question": "Have you got two ears?",
        "answer": "Yes, I've got two ears",
        "questionZh": "你有两只耳朵吗？",
        "answerZh": "是的，我有两只耳朵"
      },
      {
        "question": "Has he got two legs?",
        "answer": "Yes, he's got two legs",
        "questionZh": "他有两条腿吗？",
        "answerZh": "是的，他有两条腿"
      },
      {
        "question": "Has she got two hands?",
        "answer": "Yes, she's got two hands",
        "questionZh": "她有两只手吗？",
        "answerZh": "是的，她有两只手"
      },
      {
        "question": "Have we got two heads?",
        "answer": "Yes, we've got two heads",
        "questionZh": "我们有两个头吗？",
        "answerZh": "是的，我们有两个头"
      },
      {
        "question": "Have they got four arms?",
        "answer": "Yes, they've got four arms",
        "questionZh": "他们有四只手臂吗？",
        "answerZh": "是的，他们有四只手臂"
      },
      {
        "question": "Are there any books on this table?",
        "answer": "Yes, there are some",
        "questionZh": "这张桌子上有书吗？",
        "answerZh": "是的，有一些"
      },
      {
        "question": "Are there any pictures on these walls?",
        "answer": "Yes, there are some pictures on these walls",
        "questionZh": "这些墙上有照片吗？",
        "answerZh": "是的，这些墙上有一些照片"
      },
      {
        "question": "Have you got any shoes on your feet?",
        "answer": "Yes, I've got some",
        "questionZh": "你脚上有鞋吗？",
        "answerZh": "是的，我有一些"
      },
      {
        "question": "Are there any books on the floor?",
        "answer": "No, there aren't any",
        "questionZh": "地板上有书吗？",
        "answerZh": "不，没有"
      },
      {
        "question": "Are there any pictures on that chair?",
        "answer": "No, there aren't any pictures on that chair",
        "questionZh": "那张椅子上有照片吗？",
        "answerZh": "不，那张椅子上没有任何照片"
      },
      {
        "question": "Are there any chairs on the table?",
        "answer": "No, there aren't any",
        "questionZh": "桌子上有椅子吗？",
        "answerZh": "不，没有"
      },
      {
        "question": "How many books are there on the table?",
        "answer": "There are four books on the table.",
        "questionZh": "桌子上有多少本书？",
        "answerZh": "桌子上有四本书。"
      },
      {
        "question": "How many books are there on the ʞoor?",
        "answer": "There are none",
        "questionZh": "地上有多少本书？",
        "answerZh": "没有"
      },
      {
        "question": "How many pictures are there on these walls?",
        "answer": "There are four pictures on these walls.",
        "questionZh": "这些墙上有多少张照片？",
        "answerZh": "这些墙上有四幅画。"
      },
      {
        "question": "How many pictures are there on that chair?",
        "answer": "There are none",
        "questionZh": "那张椅子上有多少张照片？",
        "answerZh": "没有"
      },
      {
        "question": "How many students are there in this classroom?",
        "answer": "There are ten students in this classroom.",
        "questionZh": "这间教室有多少名学生？",
        "answerZh": "这间教室里有十名学生。"
      },
      {
        "question": "How many students are there sitting on the ʞoor?",
        "answer": "There are none",
        "questionZh": "地板上坐着多少名学生？",
        "answerZh": "没有"
      }
    ]
  },
  {
    "id": "tb_l14",
    "stageId": 2,
    "lessonId": 14,
    "title": "Lesson 14: Preference & Grammar Mistakes",
    "grammarNotes": {
      "en": "We use 'prefer doing something to doing something else' or 'prefer to do something'. Speaking speed of 200+ wpm must be maintained.",
      "zh": "使用 prefer ... to ... 或者 prefer to ... 表达倾向。保持每分钟200以上词的高速连读，犯错后必须马上纠正重复。"
    },
    "vocabulary": [
      {
        "word": "Prefer",
        "phonetics": "/prɪˈfɜːr/",
        "meaningZh": "更喜欢",
        "meaningEn": "To like one thing or person better than another."
      },
      {
        "word": "Mistake",
        "phonetics": "/mɪˈsteɪk/",
        "meaningZh": "错误",
        "meaningEn": "An action or judgment that is misguided or wrong."
      },
      {
        "word": "Grammatical",
        "phonetics": "/ɡrəˈmæt.ɪ.kəl/",
        "meaningZh": "语法的",
        "meaningEn": "Conforming to the rules of grammar."
      }
    ],
    "drillParagraphs": [
      {
        "question": "Do you prefer studying English quickly or slowly?",
        "answer": "I prefer studying English quickly because it improves my speaking speed and helps me think without translating.",
        "questionZh": "你喜欢快速地学英语还是缓慢地学英语？",
        "answerZh": "我更喜欢快速地学英语，因为这能改善我的说话速度，帮助我不用翻译直接思考。"
      },
      {
        "question": "Is it easy to express deep thoughts in a foreign language?",
        "answer": "No, it isn't easy to express deep thoughts in a foreign language; it requires a lot of vocabulary practice and fluency.",
        "questionZh": "在外语中表达深刻的思想容易吗？",
        "answerZh": "不，在外语中表达深刻的思想不容易；这需要大量的词汇积累与流利度。"
      },
      {
        "question": "What do we do when we make a grammatical mistake?",
        "answer": "When we make a grammatical mistake, we repeat the sentence correctly immediately after the teacher's correction.",
        "questionZh": "当我们犯语法错误的时候，我们该做什么？",
        "answerZh": "当我们犯语法错误的时候，我们在老师纠错后，立即正确地重复该句子。"
      }
    ]
  },
  {
    "id": "tb_l42",
    "stageId": 4,
    "lessonId": 42,
    "title": "Lesson 42: Adverbs vs. Adjectives",
    "grammarNotes": {
      "en": "Quickly vs Fast. 'Too' and 'As well' are both used at the end of affirmative clauses. 'As well' is more formal.",
      "zh": "'Quickly'修饰动作快慢，而'Fast'常用于修饰物体高速运动本身。'too' 和 'as well' 语义一样，放在句末，'as well' 更正式。"
    },
    "vocabulary": [
      {
        "word": "Inevitable",
        "phonetics": "/ɪˈnev.ɪ.tə.bəl/",
        "meaningZh": "不可避免的",
        "meaningEn": "Certain to happen, completely unavoidable."
      },
      {
        "word": "Difference",
        "phonetics": "/ˈdɪf.ər.əns/",
        "meaningZh": "区别 / 差异",
        "meaningEn": "A point or way in which people or things are not the same."
      },
      {
        "word": "Rhythm",
        "phonetics": "/ˈrɪð.əm/",
        "meaningZh": "节奏",
        "meaningEn": "A strong, regular, repeated pattern of movement or sound."
      }
    ],
    "drillParagraphs": [
      {
        "question": "Is there any difference between the words 'quickly' and 'fast'?",
        "answer": "Yes, there is a difference. Quickly refers to the speed at which an action is done, whereas fast describes the high rate of motion of an object.",
        "questionZh": "在单词 'quickly' 和 'fast' 之间有任何区别吗？",
        "answerZh": "是的，有区别。Quickly指动作完成的速度，而fast描述物体本身的高速运动率。"
      },
      {
        "question": "What happens if you speak too slowly during a vocal reflex muscle drill?",
        "answer": "If I speak too slowly during a vocal reflex muscle drill, the system guides me to answer instantly, following their rhythm and vocal speed.",
        "questionZh": "如果你在口语肌肉反射训练中说得太慢，会发生什么？",
        "answerZh": "如果我在训练中说得太慢，系统会要求我瞬间高频作答，以磨炼肌肉记忆的节奏极化。"
      },
      {
        "question": "Could you tell me the difference between 'as well' and 'too'?",
        "answer": "There is virtually no difference between 'as well' and 'too'. Both are placed at the end of affirmative sentences, though 'as well' is slightly more formal.",
        "questionZh": "你能告诉我 'as well' 和 'too' 的区别吗？",
        "answerZh": "实质上没有区别。两者都放在肯定句字末，尽管 'as well' 更加正式。"
      },
      {
        "question": "Does the word 'inevitable' mean something can be easily avoided?",
        "answer": "No, the word 'inevitable' does not mean something can be avoided; it means it is absolutely certain to happen and unable to be prevented.",
        "questionZh": "单词 'inevitable' 意味着事情可以容易被避免吗？",
        "answerZh": "不，'inevitable' 不表示可以被避免；它意味着必将发生且无法被阻挡。"
      }
    ]
  }
];
