const Talk = text => { document.getElementById("input").value = text; document.getElementById("sayit-button").click() }
const Data = (text, instance) => text.replace(/\$([A-Za-z$_]+[A-Za-z$_0-9]*)/g, (_, v) => instance[v])

class Chatbot {
  constructor(Name = "a Chatbot", Options = { Startup : "Hi my name is $Name!" }, onmessage) {
    this.Name = Name;
    this.Options = { Startup: Data(Startup, this), UID: CHAT.CURRENT_USER_ID };
    this.onmessage = onmessage || () => void 0;

    this.Queue = [];
    // Private
    let Called = Symbol("Called");

    this[Called] = new Set();

    // Startup
    Talk(this.Options.Startup);

    // Read
    setInterval(() => {
      [...document.getElementsByClassName("message")].filter((message, index, transcript) => {
        if (this[Called].has(message)) return false;
        else this[Called].add(message);
        return ( message.parentElement.parentElement.className.match(/user-(\d+)/) || [0, UID] )[1] != UID &&
          index > transcript.map(t => t.textContent.trim()).lastIndexOf(this.Options.Startup)
      }).forEach(message => this.onmessage.call({
        "Text": message.textContent.trim()/*.replace(/\b[a-z\.]+(?:com|org|net|xyz)/g, "http://$&")*/,
        "HTML": message.innerHTML,
        "Raw" : message,

        "User": message.parentElement.parentElement.getElementsByClassName("username")[0].textContent.trim(),

        "Mentions": [...message.querySelectorAll(".mention")].map(m => (m.textContext||"").slice(1)),

        "Speak": Text => this.Queue.push(Text),
        "Reply": Text => this.Queue.push(`:${message.id.split("-")[1]} ${Text}`),
        "Star" : Text => message.querySelector(".meta > .stars > .vote").click(),
        
        "super": this
      }));
    }, 2100);

    setInterval(() => {
      if (this.Queue[0]) Talk(this.Queue.shift());
    }, 2500);
  }
}

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

Kat=new Chatbot('Kat',{Startup:'_Kat has entered the room!_'},function(){
  past=[];
  $('.messages .content').each(function(){/Kat|\(removed\)|h(i|ello|ey)/i.test($(this).text())||past.push($(this).text())});
  if($('.username').last().text()!='Kat'){
    if(this.Text.match(/(@?Kat +)?h(i|ello|ey)((, )? +@?Kat)?/i))
      this.Reply(`Hello. Meow.`);
    else if(this.Text.match(/:[()|[\]opds^/\\]|._+.|gi(m|ve +)me( +a)? +face|how (are|r) (you|u)/i))
      this.Reply(faces[0|Math.random()*faces.length]);
    else if(m=this.Text.match(/i +do(?:n'?| no)t +(\w+)/i))
      this.Reply(`Of course you don't ${m[1]}. When did you ever?`);
    else if(this.Text.match(/i('| a)m not sure/i))
      this.Reply("Of course you're not sure. When were you ever?");
    else if(x=this.Text.match(/i +can(?:'| *no|)t +(\w+)/i))
      this.Reply(`Of course you can't ${x[1]}. When could you ever?`);
    else
      this.Reply(past[0|Math.random()*past.length].replace(/@.+? +/g,''));
  }
})
