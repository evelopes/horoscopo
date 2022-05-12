
    

    
    let caracteristicas = [
      [
        1,
        "Quem nasce sob o primeiro signo do zodíaco tem seus objetivos claros e faz de tudo para poder alcançá-lo. Contudo, a paciência não é uma virtude dos arianos, que desejam realizações quase que instantâneas, vivendo intensamente o agora. São muito impulsivos e espontâneos, o que faz com que não escondam o que sentem, para o bem ou para o mal.", "/1.png"
      ],
      [
        2,
        "Taurinos amam conforto e sabem o que é bom nessa vida. Também são amigos fiéis e conseguem ser calmos e pragmáticos em momentos críticos. Touro é firmeza! Touro é o signo ligado à vida material e, por isso, podemos dizer que ele está relacionado ao seu dinheiro, à comida, posses, ao conforto e ao corpo.", "/2.png"
      ],
      [
        3,
        "O signo de Gêmeos é o terceiro do Zodíaco e o segundo do Elemento Ar. Regidos por Mercúrio, pessoas deste signo são comunicativas, versáteis e sociáveis. Como gostam de criar linhas de raciocínio e especulações, estão sempre querendo entender diversos assuntos.", "/3.png"
      ],
  [
    4,
    "Câncer retém e, como tal, prefere laços emocionais profundos e duradouros, como (idealmente) são os laços familiares. Aliás, essa é a sua área de domínio: o ambiente familiar. Eles são sempre um ponto de união: são agregadores, adoram nutrir os que amam (muitas vezes, literalmente, com comida) e precisam ter raízes.", "/4.png"
  ],
  [
    5,
    "O signo de Leão pertence ao elemento Fogo, que basicamente, mostra muita determinação, volatilidade e animação. Quem experimenta toda essa energia tem muita coragem para enfrentar o que for, mas também se torna um pouco temperamental demais. Quanto à fama, são conhecidos como os mais vaidosos e exibidos do Zodíaco.", "/5.png"
  ],
  [
    6,
    "Virgem é aquele signo que busca a perfeição em tudo. Limpo, tratado, engomado, abotoado, penteado e com roupas lavadas. A via positiva dos virginianos é a limpeza e a vaidade. ", "/6.png"
  ],
  [
    7,
    "Os librianos são pessoas diplomáticas, justiceiras, pacíficas e sociáveis. Conversam com todos e têm uma boa relação social nos espaços em que frequentam. O Sol em Libra também confere elegância ao indivíduo. Amam tudo que é ligado às artes e apreciam a beleza e a estética.", "/7.png"
  ],
  [
    8,
    "Escorpianos típicos costumam ser bastante passionais e muito generosos. Algumas características de Escorpião são a autossuficiência e controladores, mas no fundo estão cheios de energia emocional.", "/8.png"
  ],
  [
    9,
    "Sagitário costuma acreditar que tudo acontece por um motivo e que tudo tem solução. Encaram a vida com autoconfiança. Por isso tudo, o idealismo também é característica forte do signo de Sagitário, mas são capazes de contagiar tudo e a todos sem fazer muito esforço.", "/9.png"
  ],
  [
    10,
    "Nativos desse signo são coerentes, disciplinados, sérios e responsáveis. Além disso, desenvolvem desde cedo uma maturidade que surpreende a todos. Quem tem um acúmulo de planetas em Capricórnio signo pode ter um perfil workaholic. ", "/10.png"
  ],
  [
    11,
    "A busca por inovação e independência são fortes características do signo de Aquário. Com criatividade sempre em alta, pessoas com Sol ou Ascendente em Aquário costumam ir direto ao ponto. Questionar as coisas e ser até radical também combina com aquarianas e aquarianos.", "/11.png"
  ],
  [
    12,
    "São pessoas sensíveis, sonhadoras, empáticas, pacientes, calmas, intuitivas, românticas, generosas, místicas e amáveis. “Captam toda a energia do ambiente como esponjas, o que os leva a sentir muitas coisas que não são suas.", "/12.png"
  ],
];


for (let index = 0; index < caracteristicas.length; index++) {
  if (sign == caracteristicas[index][0]) {
    document.getElementById("caracteristica").innerHTML =
      caracteristicas[index][1];
      document.getElementById("imagemSigno").src =
      caracteristicas[index][2];
      break;
  } else {
    document.getElementById("caracteristica").innerHTML =
      "CARACTERÍSTICAS NÃO ENCONTRADAS<BR>Erro no processamento do dia/mês";
  }
}








