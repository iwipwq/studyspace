type Words = {
    [key:string]:string
}

class Dictionary {
    private words: Words
    constructor() {
        this.words = {}
    }
    add(word:Word) {
        if(this.words[word.term] === undefined) {
            this.words[word.term] = word.def
            return
        }
        console.log(`이미 ${word.term}이란 단어가 있다. 수정하고 싶다면 mod를 써라`)
    }
    def(term:string) {
        if(this.words[term]) {
            console.log(this.words[term]);
            return 
        }
        console.log(`Tämä sana ei ole sanakirjassa. Tämä sana ei ole sanakirjassa. "add()" antaa sinun lisätä sanoja.`)
    }
    mod(term:string,def:string) {
        if(this.words[term]) {
            this.words[term] = def
            return
        }
        console.log(`おいおいwwwこの単語は辞書にないwww'add'を使って追加しなければならない wwwwwwwwwwwwwww`)
    }
    del(term:string) {
        if(this.words[term]) {
            delete this.words[term]
            return
        }
        console.log(`There is no word ${term}, Try add() to add a new word`)
    }

}

class Word {
    constructor(
        public term:string,
        public def:string
    ) {}
    // 자기자신도 타입으로 쓸 수 있나? -> 있네
    findByTermAndModDef(word:Word) {
        if(this.term === word.term) {
            this.def = word.def;
            console.log("새 뜻",word.def);
            console.log("새 뜻",this.def);
        }
    }
    mod(def:string) {
        if(def.length) {
            this.def = def;
        }
        console.log("공백ㄴㄴ 아무말이라도해주세요!!")
    }
    // 의미가 있나..
    showDef() {
        console.log(this.def)
    }

}

const khajiit = new Word("Khajiit","a word for 'carpet'")

const dict = new Dictionary();

dict.add(khajiit);