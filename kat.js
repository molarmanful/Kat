last=$('.messages .content').last().text();
say=_=>{$('#input').val(`@${$('.username').last().text()} `+_);$('#sayit-button').trigger('click')};
rsay=_=>say(Math.random()<.1?faces[0|Math.random()*faces.length]:$('.messages .content').get(0|Math.random()*$('.messages .content').length).textContent.replace(/^@.+? +/g,''));
faces=[
  "｡＾･ｪ･＾｡",
  "( ͒ ु- •̫̮ – ू ͒)",
  "( ^..^)ﾉ",
  "( =①ω①=)",
  "( =ω=)..nyaa",
  "( =ノωヽ=)",
  "(´; ω ;｀)",
  "(^-人-^)",
  "(^･o･^)ﾉ”",
  "(^・ω・^ )",
  "(^._.^)ﾉ",
  "(^人^)",
  "(・∀・)",
  "(,,◕　⋏　◕,,)",
  "(.=^・ェ・^=)",
  "(｡･ω･｡)",
  "((≡^⚲͜^≡))",
  "((ΦωΦ))",
  "(*^ω^*)",
  "(*✧×✧*)",
  "(*ΦωΦ*)",
  "(⁎˃ᆺ˂)",
  "(ٛ⁎꒪̕ॢ ˙̫ ꒪ٛ̕ॢ⁎)",
  "₍˄·͈༝·͈˄₎◞ ̑̑ෆ⃛",
  "₍˄·͈༝·͈˄₎ฅ˒˒",
  "₍˄ุ.͡˳̫.˄ุ₎ฅ˒˒",
  "(=｀ω´=)",
  "(=｀ェ´=)",
  "（=´∇｀=）",
  "(=^ ◡ ^=)",
  "(=^-ω-^=)",
  "(=^･^=)",
  "(=^･ω･^)y＝",
  "(=^･ω･^=)",
  "(=^･ｪ･^=)",
  "(=^‥^=)",
  "(=･ω･=)",
  "(=;ω;=)",
  "(=;ェ;=)",
  "(=；ェ；=)",
  "(=;ェ;=)",
  "(=；ェ；=)",
  "(=；ｪ；=)",
  "(=‘ｘ‘=)",
  "(=⌒‿‿⌒=)",
  "(=ↀωↀ=)",
  "(=ↀωↀ=)✧",
  "(=①ω①=)",
  "(=ＴェＴ=)",
  "(=ｘェｘ=)",
  "(=ΦｴΦ=)",
  "(ٛ₌டுͩ ˑ̭ டுͩٛ₌)ฅ",
  "(≚ᄌ≚)ℒℴѵℯ❤",
  "(≚ᄌ≚)ƶƵ",
  "(○｀ω´○)",
  "(●ↀωↀ●)",
  "(●ↀωↀ●)✧",
  "(✦థ ｪ థ)",
  "(ↀДↀ)",
  "(ↀДↀ)⁼³₌₃",
  "(ↀДↀ)✧",
  "(๑•ω•́ฅ✧",
  "(๑ↀᆺↀ๑)☄",
  "(๑ↀᆺↀ๑)✧",
  "(p`･ω･´) q",
  "(p`ω´) q",
  "(Φ∇Φ)",
  "(ΦεΦ)",
  "(ΦωΦ)",
  "(ΦёΦ)",
  "(ΦзΦ)",
  "(ฅ`･ω･´)っ=",
  "(ฅ`ω´ฅ)",
  "(ฅ’ω’ฅ)",
  "(ะ`♔´ะ)",
  "(ะ☫ω☫ะ)",
  "(ㅇㅅㅇ❀)",
  "(ノω<。)",
  "(ꀄꀾꀄ)",
  "（三ФÅФ三）",
  "[ΦωΦ]",
  "] ‘͇̂•̩̫’͇̂ ͒)ฅ ﾆｬ❣",
  "＼(=^‥^)/’`",
  "<(*ΦωΦ*)>",
  "<ΦωΦ>",
  "|ΦωΦ|",
  "|ｪ･`｡)･･･　　",
  "~(=^‥^)",
  "~(=^‥^)_旦~",
  "~(=^‥^)/",
  "~(=^‥^)ノ",
  "~□Pヘ(^･ω･^=)~",
  "⊱ฅ•ω•ฅ⊰",
  "└(=^‥^=)┐",
  "✩⃛( ͒ ु•·̫• ू ͒)",
  "❤(´ω｀*)",
  "ヽ(^‥^=ゞ)",
  "ヾ(*ΦωΦ)ﾉ",
  "ヾ(*ФωФ)βyё βyё☆彡",
  "ヾ(=｀ω´=)ノ”",
  "ヽ(=^･ω･^=)丿",
  "ヾ(=ﾟ･ﾟ=)ﾉ",
  "0( =^･_･^)=〇",
  "٩(ↀДↀ)۶",
  "b(=^‥^=)o",
  "d(=^･ω･^=)b",
  "o(^・x・^)o",
  "o(=・ω・=o)",
  "V(=^･ω･^=)v",
  "ლ(=ↀωↀ=)ლ",
  "ლ(●ↀωↀ●)ლ",
  "ฅ ̂⋒ิ ˑ̫ ⋒ิ ̂ฅ",
  "ฅ( ᵕ ω ᵕ )ฅ",
  "ฅ(´-ω-`)ฅ",
  "ฅ(´・ω・｀)ฅ",
  "ฅ(^ω^ฅ)",
  "ฅ(≚ᄌ≚)",
  "ฅ(⌯͒• ɪ •⌯͒)ฅ❣",
  "ฅ⃛(⌯͒꒪ั ˑ̫ ꒪ั ⌯͒) ﾆｬｯ❣",
  "ฅ(●´ω｀●)ฅ",
  "ฅ*•ω•*ฅ♡",
  "ฅ•ω•ฅ",
  "ฅ⊱*•ω•*⊰ฅ",
  "ㅇㅅㅇ",
  "ミ๏ｖ๏彡",
  "ミ◕ฺｖ◕ฺ彡",
  "=＾● ⋏ ●＾=",
  "ฅ^•ﻌ•^ฅ",
  "₍ᵔ·͈༝·͈ᵔ₎",
  "ฅ(⌯͒•̩̩̩́ ˑ̫ •̩̩̩̀⌯͒)ฅ",
  "₍˄·͈༝·͈˄*₎◞ ̑̑",
  "ଲ( ⓛ ω ⓛ *)ଲ",
  "=^._.^= ∫",
  "ଲ(⁃̗̀̂❍⃓ˑ̫❍⃓⁃̠́̂)ଲ"
];
count=0;
post=0|Math.random()*2000;
setInterval(x=>{
  if(count<post)
    count++;
  else {
    count=0|-Math.random()*2000,
    post=0|Math.random()*2000;
    if($('.messages .content').last().text()!=last&&$('.username').last().text()!='Kat'){
      last=$('.messages .content').last().text();
      if(last.match(/(@?Kat +)?h(i|ello|ey)( +@?Kat)?/i))
        say(`Hello. Meow.`);
      else if(last.match(/:[()|[\]opds^]|._+.|gi(m|ve +)me( a)? face/i))
        say(faces[0|Math.random()*faces.length]);
      else if(m=last.match(/i +don'?t +(\w+)/i))
        say(`Of course you don't ${m[1]}. When did you ever?`);
      else if(last.match(/i'm not sure/i))
        say("Of course you're not sure.");
      else
        rsay();
    }
    else if($('.username').last().text()!='Kat')
      rsay();
  }
},1);
