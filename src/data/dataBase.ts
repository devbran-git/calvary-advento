export interface DataBase {
  week: string
  title: string
  memorize: string
  read: Reads[]
  practice: string
  watch: string
  watchDescription: string
  videoUrl: string
}

export interface Reads {
  id: string
  date: string
  ref: string
  checked: boolean
}


export const dataBase = {
  hope: {
    week: 'SEMANA 01',
    title: 'Advento da Esperança',
    memorize: `"O povo que caminhava em trevas viu uma grande luz." - Isaías 9:2a`,
    read: [
      {
        id: '1',
        date: 'SEG 29/11',
        ref: 'Isaías 9:2',
        checked: false
      },
      {
        id: '2',
        date: 'TER 30/11',
        ref: 'Isaías 7:14',
        checked: false
      },
      {
        id: '3',
        date: 'QUA 01/12',
        ref: 'Romanos 15:12-13',
        checked: false
      },
      {
        id: '4',
        date: 'QUI 02/12',
        ref: '1 Pedro 1:3',
        checked: false
      },
      {
        id: '5',
        date: 'SEX 03/12',
        ref: 'Apocalipse 21:4',
        checked: false
      },
      {
        id: '6',
        date: 'SAB 04/12',
        ref: 'Provérbios 13:12',
        checked: false
      },
    ],
    practice: 'Escreva “lembretes” que trazem esperança. Podem ser frases, palavras, momentos ou versículos. Use-os como parte da decoração de natal na sua casa.',
    watch: 'Yakhal - Esperança (BibleProject PT)',
    watchDescription: '“Na Bíblia, as pessoas que têm esperança são muito diferentes daquelas que são otimistas! Neste vídeo, vamos explorar como a esperança bíblica vê somente no caráter de Deus a razão para confiar que o futuro será melhor do que o presente.”',
    videoUrl: 'https://www.youtube.com/embed/MJPRcf579UU'
  },
  peace: {
    week: 'SEMANA 02',
    title: 'Advento da Paz',
    memorize: '“Ele veio e anunciou paz a vocês que estavam longe e aos que estavam perto.” - Efésios 2:17',
    read: [
      {
        id: '7',
        date: 'SEG 06/12',
        ref: 'Números 6:24-26',
        checked: false
      },
      {
        id: '8',
        date: 'TER 07/12',
        ref: 'Isaías 9:6-7',
        checked: false
      },
      {
        id: '9',
        date: 'QUA 08/12',
        ref: 'Lucas 2:9-14',
        checked: false
      },
      {
        id: '10',
        date: 'QUI 02/12',
        ref: 'Colossenses 1:19-20',
        checked: false
      },
      {
        id: '11',
        date: 'SEX 03/12',
        ref: 'Efésios 2:14-18',
        checked: false
      },
      {
        id: '12',
        date: 'SAB 04/12',
        ref: '2 Tessalonicenses 3:16',
        checked: false
      },
    ],
    practice: 'Ofereça um “presente de paz” a alguém atribulado. Sabemos que essa época pode ser conturbada para muitos, então dê a alguém querido um “momento de paz”, seja através de uma mensagem, um áudio, um cartão, levando uma refeição ou oferecendo-se para cuidar de seus filhos. Lembre-o que podemos ter paz em meio ao “caos”, porque o Príncipe da Paz habita em nós.',
    watch: 'Shalom - Paz (BibleProject PT)',
    watchDescription: '“Paz” é uma palavra muito comum e que significa algo diferente para cada pessoa. É também uma palavra muito importante na Bíblia, que tem a ver não apenas com a ausência de conflitos, mas também com a presença de mais alguma coisa. Neste vídeo, vamos explorar o significado central de paz na Bíblia e como tudo isso aponta para Jesus.””',
    videoUrl: 'https://www.youtube.com/embed/v3gniVUrE6Q'
  },
  joy: {
    week: 'SEMANA 03',
    title: 'Advento da Alegria',
    memorize: '“Não tenham medo. Estou trazendo boas-novas de grande alegria para vocês.” - Lucas 2:10',
    read: [
      {
        id: '13',
        date: 'SEG 13/11',
        ref: 'Isaías 51:11',
        checked: false
      },
      {
        id: '14',
        date: 'TER 14/11',
        ref: 'Lucas 2:9-11',
        checked: false
      },
      {
        id: '15',
        date: 'QUA 15/12',
        ref: 'João 15:9-11',
        checked: false
      },
      {
        id: '16',
        date: 'QUI 16/12',
        ref: 'Romanos 14:17',
        checked: false
      },
      {
        id: '17',
        date: 'SEX 17/12',
        ref: 'Apocalipse 19:6-7',
        checked: false
      },
      {
        id: '18',
        date: 'SAB 18/12',
        ref: 'Salmo 16:7-11',
        checked: false
      },
    ],
    practice: 'Converse com sua família sobre pequenas coisas ou momentos que fazem juntos e trazem alegria. Façam um passeio ao ar livre pela cidade, vejam as decorações de natal e falem da alegria que o nascimento de Jesus trouxe, pois Ele é a razão de tudo isso. Se não puderem sair, dancem juntos ao som de músicas natalinas.',
    watch: 'Chara - Alegria (BibleProject PT)',
    watchDescription: '“Neste vídeo, vamos explorar o tipo de alegria especial que o povo de Deus é chamado a viver. Não é apenas estar de bom humor, mas uma decisão de confiar que Deus irá cumprir suas promessas.”',
    videoUrl: 'https://www.youtube.com/embed/JeOGVAxTSCo'
  },
  love: {
    week: 'SEMANA 04',
    title: 'Advento do Amor',
    memorize: '“Visto que Deus assim nos amou, nós também devemos amar uns aos outros.” - João 4:11',
    read: [
      {
        id: '19',
        date: 'SEG 20/12',
        ref: 'João 3:16-17',
        checked: false
      },
      {
        id: '20',
        date: 'TER 21/12',
        ref: '1 João 4:10-12',
        checked: false
      },
      {
        id: '21',
        date: 'QUA 22/12',
        ref: '1 Coríntios 13:13',
        checked: false
      },
      {
        id: '22',
        date: 'QUI 23/12',
        ref: 'Romanos 8:37-39',
        checked: false
      },
      {
        id: '23',
        date: 'SEX 24/12',
        ref: 'Lucas 1:26-55',
        checked: false
      },
      {
        id: '24',
        date: 'SAB 25/12',
        ref: 'Lucas 2:1-20',
        checked: false
      },
    ],
    practice: 'Faça pequenos cartões que falem do amor de Deus e entregue para a família na noite de Natal. Acendam velas nessa noite e relembrem as chamas da esperança, da Paz, da Alegria e do Amor. Relembre que tudo isso vem de Cristo, então “Mantenhamos o olhar firme em Jesus, o líder e aperfeiçoador de nossa fé” (Hb12:2a).',
    watch: 'Ágape - Amor (BibleProject PT)',
    watchDescription: '“A palavra “amor” é uma das mais comuns em nossa língua, porque se refere principalmente a um sentimento que alguém tem. No Novo Testamento, “amor” ou “Ágape” tem a ver com uma forma de tratar as pessoas que foi definida pelo próprio Jesus: trabalhar pelo bem- estar dos outros sem esperar algo em troca.”',
    videoUrl: 'https://www.youtube.com/embed/q1JMSt-LD50'
  }
}